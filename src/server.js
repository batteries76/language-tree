console.log("Your chicken is ready")

const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://batteries76:chewugin2@ds119020.mlab.com:19020/language-tree', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3500, () => {
    console.log('listening on 3500')
  })
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  console.log(__dirname);

  db.collection('country-info').find().toArray((err, results) => {
    console.log(results);
  })
  db.collection('language-json').find().toArray((err, results) => {
    console.log(results);
  })


})
