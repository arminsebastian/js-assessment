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
    var funcs = [];
    for (var i = 0; i < arr.length; i ++){
      var closure = function(){
        return function (){
          return fn(arr[i]);
            };
      };
      var tmp = closure();
      funcs.push(tmp);
    }
    return funcs;
  },

  partial : function(fn, str1, str2) {

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
