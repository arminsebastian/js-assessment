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

  }
};
