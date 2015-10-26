exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item){
        index = i;
        return index;
      }
    };
    return index
  },

  sum : function(arr) {
    var accumulator = 0;
    for (var i = 0; i < arr.length; i++) {
      accumulator += arr[i];
    };
    return accumulator;
  },

  remove : function(arr, item) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] !== item) {
      array.push(arr[i])
      }
    }
    return array;
  },

  removeWithoutCopy : function(arr, item) {
    var array = arr;
    for (var i = 0; i < array.length; i++) {
      if(array[i] === item){
        array.splice(i, 1);
        i--;
      }
    };
    return array;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    var temp = arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    var head = arr.slice(0,index);
    debugger
    var tail = arr.splice(index)
    head.push(item);
    return head.concat(tail);
  },

  count : function(arr, item) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        counter++;
      }
    }
    return counter;
  },

  duplicates : function(arr) {
    var sorts = arr.sort(function (a,b){ return a - b });
    var results = [];
    for (var i = 0; i < sorts.length - 1; i++) {
      if(sorts[i] === sorts[i + 1] && results[results.length - 1] !== sorts[i]){
          results.push(sorts[i]);
      }
    }
      return results;
  },

  square : function(arr) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
      results.push(Math.pow(arr[i], 2));
    }
    return results;
  },

  findAllOccurrences : function(arr, target) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === target){
        results.push(i);
      }
    }
    return results;
  }
};


