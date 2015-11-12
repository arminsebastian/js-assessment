exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var list = [];
    var targetList = [];

    function subrutine (d, actual) {
      for (var i = 0; i < d.length; i++) {
        if ( (typeof d[i]) === 'string') {
          actual === dirName ? targetList.push(d[i]): list.push(d[i]);

        } else if ( typeof d[i] === 'object' && actual === dirName) {

          return subrutine(d[i].files, actual);

        } else if ( typeof d[i] === 'object') {

          subrutine(d[i].files, d[i].dir);

        }
      }
    }
    subrutine(data.files, data.dir);
    if ( targetList.length > 0 ) {
      return targetList;
    } else {
      return list;
    }
  },

  permute: function(arr) {
    var results = [];
    var container = [];

    function recursive (options, index) {
     // debugger
     if (index === arr.length) {
      // debugger
      results.push(container.slice());
      return;
     }
      for (var i = 0; i < options.length; i++) {
        // debugger
        container[index] = options[i];
        var remaining = options.slice();
        remaining.splice(i,1);
        recursive( remaining, index + 1);
      }
    }
    recursive(arr, 0);
    return results;
  },

  fibonacci: function fibo (n) {
    fibo.results = {
      1: 0,
      2: 1,
      3: 2
    };

    function subrutine (counter) {
      if (fibo.results[n] !== undefined) {
        // debugger
        return fibo.results[n];
      }
      if (fibo.results[n] === undefined) {
        // debugger
        fibo.results[counter] = fibo.results[counter - 1] + fibo.results[counter - 2];
        subrutine(++counter);
      }
    }

    if ( fibo.results[n] ) {
      return fibo.results[n];
    } else {
      subrutine( 4 );
    }
    return fibo.results[n];
  },

  validParentheses: function(n) {
    var answers = [],
        options = ['(',')'],
        current = [];

        function recursive (index, open, close) {

          if ( close > open || open > n ) {
            return ;
          } else if ( index >= n*2 ) {
            answers.push(current.join(''));
            return ;
          }

          for (var i = 0; i < options.length; i++) {
            current[index] = options[i];
            options[i] === '(' ?
              recursive( index + 1, open + 1, close ) :
              recursive( index + 1, open, close + 1 );
          }
        }
        recursive(0, 0, 0);
        return answers;
  }
};
