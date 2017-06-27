//var random = require('./modules/randomNumber.js');

//convertToDollars(random);

function convertToDollars(number){
  number = number.toFixed(2);
  //number = '$' + number;
  return number;
}

exports.module = convertToDollars;
