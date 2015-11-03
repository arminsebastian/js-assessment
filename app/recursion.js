exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var list = [];
    var dir = data.files;
    function subrutine (d) {
      for (var i = 0; i < d.length; i++) {
        if ( (typeof d[i]) === 'string') {
          list.push(d[i]);
        } else if ( typeof d[i] === 'object'){
          subrutine(d[i].files);
        }
      }
    }
    subrutine(dir);
    return list;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
