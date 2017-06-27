var http = require('http');
var third = require('./modules/moduleThree.js');

var server = http.createServer(function(request, response){
  var number = third.random(100, 1000000);
  response.write('Account balance: \n' + number);
  response.end();
});

server.listen(3000);
