exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
  count : function (start, end) {
    function countBlocking (x) {
      console.log(x);
      if (x === end) {return;}
      return setTimeout(countBlocking, 100, x + 1);
    }
    this.timer = countBlocking(start);
    return this;
    // setTimeout(countBlocking, 0, start);
  },
  cancel : function () {
    clearTimeout(this.timer);
  }
};
