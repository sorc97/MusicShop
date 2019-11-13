const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//db and server connecting
mongoose.connect('mongodb://localhost/products-db', {useNewUrlParser: true}); 

//middleware
app.use(bodyParser.json());
app.use('/api', require('./api')); 

app.listen(
  3000,
  () => console.log('server working at 3000 port')
)