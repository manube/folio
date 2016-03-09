$(function() {
  
  var happyend = "29/06/2016";
  var now = new Date();

  function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[1], mdy[0]);
  }

  function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
  }
  function hourdiff(first, second) {
    return Math.round((second-first)/(1000*60*60));
  }
  $("#daysleft").text(daydiff(now, parseDate(happyend)));
  $("#hoursleft").text(hourdiff(now, parseDate(happyend)));
});