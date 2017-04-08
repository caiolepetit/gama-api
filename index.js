var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.use(bodyParser.json());

MongoClient.connect('mongodb://demoUser:gama@ds155820.mlab.com:55820/demo', function (err, db) {
  if (err) {
    throw err;
  }

  app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
  });

  require('./routes/user.route')(app, db)

  console.log("Banco de dados conectado.");
});
