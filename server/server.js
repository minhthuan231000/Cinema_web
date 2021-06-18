const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    username : "admin",
    password : "444"
  });
});

app.listen(9080, () => console.log('API is running on http://localhost:9080/login'));