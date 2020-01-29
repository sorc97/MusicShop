const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');

const app = express();
const PORT = config.get('port') || 3000;

//middleware
app.use(bodyParser.json());
app.use('/api', require('./api'));

// Production mode
if (process.env.NODE_ENV === 'production') {
  // Calculating path of static folder 
  const staticFolder = path.join(__dirname, '../../dist');
  // For every request use static folder
  app.use('/', express.static(staticFolder));

  app.get('/*', (req, res) => {
    // Response with a index.html file within static folder
    const responseFile = path.resolve(__dirname, staticFolder, 'index.html');
    res.sendFile(responseFile);
  })
}

//db and server connecting
async function run() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(
      PORT,
      () => console.log(`server working at ${PORT} port`)
    )
  } catch (err) {
    console.log('Error on the server side', err.message, err);
    process.exit();
  }
}

run();