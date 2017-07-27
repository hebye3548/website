var express = require('express')
var webpack = require('webpack')
var mockConfig = require('./mock.config')
var bodyParser = require('body-parser');
// default port where dev server listens for incoming traffic
var port = 3000
var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
//遍历并初始化mock
for(var key in mockConfig){
  var _method = key.split(':')[0].toLowerCase();
  var _url = key.split(':')[1];
  app[_method](_url,mockConfig[key]);
}
console.dir(app)
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('mockServer at http://localho1st:' + port + '\n')
})
