exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var myObj = {
      args: value,
      then: function (callback) {
        return setTimeout(callback, 0, myObj.args);
      }
    };
    return myObj;
  },

  manipulateRemoteData : function(url) {

    var processed = $.get(url).then( function(data) {
      var results = [];
      for (var i = 0; i < data.people.length; i++) {
        results.push( data.people[i].name );
      }
      return results.sort();
    });
    return processed;
  }
};
