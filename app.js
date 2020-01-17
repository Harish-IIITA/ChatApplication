var express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://harish:11189121@cluster0-shard-00-00-fperm.mongodb.net:27017,cluster0-shard-00-01-fperm.mongodb.net:27017,cluster0-shard-00-02-fperm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

MongoClient.connect(uri, { useUnifiedTopology: true })
    .then(console.log('Connected Successfully!'))
    .catch(console.log);

module.exports = app;
