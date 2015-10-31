exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var binary = num.toString(2);
    return parseInt( binary[binary.length - bit], 10 );
  },

  base10: function(str) {
    return parseInt( str, 2 );
  },

  convertToBinary: function(num) {
    console.log( num.toString(2));
    return num.toString(2);
  },

  multiply: function(a, b) {
    var str = '';
    var coeficient = 1;
    str += a + '' + b;
    if ( str.lastIndexOf('.') !== -1 ) {
      var num = 10;
      coeficient = num.toExponential(str.length);
    }
    return ( ((a*coeficient) * (b*coeficient) )/(coeficient * coeficient) );

  }
};
