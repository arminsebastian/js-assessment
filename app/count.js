exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
  count : function (start, end) {
    var init = start;
    var results = [];
    var recursive = function(){
      if (start !== init){ results.push(start);}
      console.log(results);
      if(start === end){return results;}
      countAnswers.timer = setTimeout(function(){start++; recursive();},100);
      console.log(countAnswers);
    };
    recursive();
  },
  cancel : function (){
    console.log(this.timer);
    return clearTimeout(this.timer);
  }
};
