var convert = require('./convertToDollars.js');
var random = require('./randomNumber.js');



function moduleThree(min, max){
  convert(random(min, max));
}

module.exports = {
  convert : convert,
  random : random
};
