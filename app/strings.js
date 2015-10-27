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
    var string = '';
    var toGo = cols;
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        string += str[i];
        toGo --;
      } else {
        var substring = str.substr( i + 1, toGo);
        spaceHandler(str[i], substring);
      }
    }
    function spaceHandler(char, subs) {
      if ( toGo <= 0 ) {
        string += '\n';
        toGo = cols;
        return;
      }
      if (subs.indexOf(' ') > -1) {
        string += str[i];
        toGo --;
      } else {
        string += '\n';
      }
    }
    return string;
  },
  reverseString: function(str) {
    var reversed = '';
    for(var i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
};
