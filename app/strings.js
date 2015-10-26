exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var result = '';
    var counter = amount;
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== str[i-1]){
        counter = amount;
      }
      if (counter > 0){
        result += str[i];
        counter--;
      }
    }
    return result;
  },
  wordWrap: function(str, cols) {
    var wrappedString = '';
    var colCounter = 0;
    for (var i = 0; i < str.length; i++) {
      if (colCounter >= 5 && str[i] === ' ') {
        wrappedString += '\n';
        colCounter = 0;
      }
      if ( colCounter < 5 && str[i] !== ' ' ) {
        wrappedString += str[i];
        colCounter ++;
      }
      if ( colCounter < 5 && str[i] === ' ') {
        var next = str.slice( i + 1, ( i + 1 + cols - colCounter ) );
        var isSpace = false;
        for (var k = 0; k < next.length; k++) {
          if (next[k] === ' ') {
            isSpace = true;
            break;
          }
        }
        if (isSpace) {
          wrappedString += str[i];
          colCounter ++;
        } else {
          wrappedString += '\n';
          colCounter = 0;
        }
      }
    }
    return wrappedString;
  },
  reverseString: function(str) {
    var reversed = '';
    for(var i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
};
