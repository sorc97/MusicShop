const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');
const cors = require('cors');

const app = express();
const PORT = config.get('port') || 3000;

//middleware
app.use(cors);
app.use(bodyParser.json());
app.use('/api', require('./api'));

// DB connecting
mongoose
  .connect(config.get('mongoUri'), { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(  // run server when db is connected
    () => app.listen(
      PORT,
      () => console.log(`server working at ${PORT} port`)
    )
  ).catch(err => {
    console.log(err.message);
    process.exit();
  })
