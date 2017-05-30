$(document).ready(function() {
  $("#search").addClass("animated fadeInDown");
  $("#searchbtn").click(function() {
    var query = $("#searchtxt").val();
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + query + "&format=json&callback=?", function(json) {
      
      $(".result").remove();   
      for (i = 0; i < json.query.search.length; i++) {
        url = "https://en.wikipedia.org/wiki/" + encodeURIComponent(json.query.search[i].title);
        $("#search").append("<div class='result'><h2><a href=\"" + url + "\">" + json.query.search[i].title + "</a></h2><p>"+ json.query.search[i].snippet + "...</p></div>")
      }
    });
  })
});