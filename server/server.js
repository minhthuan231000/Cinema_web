const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 9080;


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.post('/api/login', function(request, response){
  console.log(request.body);
})
app.listen(port, () => console.log(`API is running on http://localhost:${port}`));