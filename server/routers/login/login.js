const asyncHandler = require('express-async-handler')
const express =  require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('../../models').User;
router.post('/',asyncHandler(async function(request, response){
    let {email, password} =  request.body;
    const found = await User.findByEmail(email);
  
    console.log(process.env.Client_Secret);
    //console.log(bcrypt.hashSync('123456',10));
      if(found && bcrypt.compareSync(password,found.password)){
        console.log('Complete');
        return response.status(201).send(found.dataValues);
      }
      else{
        console.log('Not found');
        return response.status(400).send('');
      }
  }));
  
module.exports = router;