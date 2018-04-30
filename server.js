/*eslint no-console:0 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

var DIR = './';

app.set('view engine','html');
app.get('/',function(req,res){
    fs.readFile('./data.json', 'utf8', function (err, data) {
  if (err) throw err;
     res.json(JSON.parse(data));
    });
});
app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
limit: '150mb',
extended: true
}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.listen(8090,function(){
  console.log('app running on 8090');
})
