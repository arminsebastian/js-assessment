exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.apply(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var collection = Object.keys(obj);
    var results = [];
    for (var i = 0; i < collection.length; i++) {
      console.log(collection, results);
      var valuePair = '' + [collection[i]] + ': ' + obj[collection[i]];
      results.push(valuePair);
    }
    return results;
  }
};
