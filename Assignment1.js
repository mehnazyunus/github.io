function main() {
  var postLinks = {};

  postLinks["#post1"] = "#p1-wrap";
  postLinks["#post2"] = "#p2-wrap";
  postLinks["#post3"] = "#p3-wrap";
  postLinks["#post4"] = "#p4-wrap";

  var currActive = $("p1-wrap");
  
  function dispPost() {
    var linkID = "#" + this.id;   // "post1" -> "#post1" for jQuery

    currActive.hide();
    currActive = $(postLinks[linkID]);
    currActive.show();
  }
  
  $("#post1").click(dispPost);
  $("#post2").click(dispPost);
  $("#post3").click(dispPost);
  $("#post4").click(dispPost);
}

$(document).ready(main);
