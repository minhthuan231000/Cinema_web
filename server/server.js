const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('./users');
const asyncHandler = require('express-async-handler');
//const cors = require('cors')

const db = require('./db')
var app = express();

var port = process.env.PORT || 9080;


//app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/login',asyncHandler(async function(request, response){
  let {email, password} =  request.body;
  const found = await User.findByEmail(email);

  //console.log(bcrypt.hashSync('123456',10));
    if(found && bcrypt.compareSync(password,found.password)){
      console.log('Complete');
      return response.status(201).send(found.dataValues);
    }
    else{
      console.log('Not found');
      return response.status(400).send('');
    }
}))

app.post('/api/register',asyncHandler(async function(request, response){
  let {fullname,phone,gender,email, password, role} =  request.body;
    // Create a new user
    const found = await User.findByEmail(email); 
    if(found){
      console.log('User is exist');
      return response.status(400).send({Status: 'User is exist'});
    }
    else {
        const user = await User.create({ fullname: fullname, numphone: phone,gender,email:email,password: bcrypt.hashSync(password,10),role:role });
        //console.log(bcrypt.hashSync('123456',10));
        if(user){
          console.log(user);
          return response.status(201).send({Status: 'Complete'});
        }
    }
}))
db.sync().then(function() {
  console.log(`Server is listening on http://localhost:${port}`);
  app.listen(port);
}).catch(console.error);