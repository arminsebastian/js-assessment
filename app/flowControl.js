exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    var returns = {
        fizz: 'fizz',
        buzz: 'buzz',
        fizzbuzz: 'fizzbuzz',
        number: num,
        notNumber: false
        },
        key = '';

    if( typeof num !== 'number' ) {
        key = 'notNumber';
    } else if ( num % 3 === 0 && num % 5 === 0) {
        key = 'fizzbuzz';
    } else if ( num % 3 === 0) {
        key = 'fizz';
    } else if ( num % 5 === 0) {
        key = 'buzz';
    } else {
        key = 'number';
    }

    return returns[key];

    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

  }
};
