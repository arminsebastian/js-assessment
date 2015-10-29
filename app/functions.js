exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    var bound = fn.bind(obj);
    return bound(obj);
  },

  functionFunction : function(str) {
    var result = str + ', ';
    return function (str2) {
      return result += str2;
    };
  },

  makeClosures : function(arr, fn) {
    var functionsArray = arr.map( function (value, index, arr) {
      return function () {
        return fn.call(null, value);
      };
    });
    return functionsArray;
  },

  partial : function(fn, str1, str2) {
    var args1 = Array.prototype.slice.call(arguments,1);
    return function (moreArguments) {
      var args2 = args1.concat(Array.prototype.slice.call(arguments, 0));
      console.log(args1, args2);
      return fn.apply(null, args2);
    };
  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
