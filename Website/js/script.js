var focusX = 0;
var focusY = 0;
var projectInfo = {
  0:"#whatspython",
  1:"#billboard"
};
function setFocus(col, row) {
    $(".col").each( function(index) {
        if(index == col - 1 || index == col + 1) {
          $(this).find("img").each(function(index) {
            $(this).css("opacity", "0.2");
          });
        }
        else {
          $(this).find("img").each(function(index) {
            if(index == row) {
              $(this).css("opacity", "1");
            }
          });
        }
  });
}

function moveRight() {
  focusX = 1;
  switch(focusX) {
    case 1:
      $("#left").css({"display": "block", "left": "210px", "top": "240px"});
      $("#right").css("display", "none");
      $(projectInfo[0]).css("display", "none");
      $(projectInfo[1]).css("display", "block");
      $("#gallery").css("left", "-=660px");
      setFocus(focusX, focusY);

  }
}
function moveLeft() {
  focusX = 0;
  switch(focusX) {
    case 0:
      $("#left").css("display", "none");
      $("#right").css("display", "block");
      $(projectInfo[1]).css("display", "none");
      $(projectInfo[0]).css("display", "block");
      $("#gallery").css("left", "+=660px");
      setFocus(focusX, focusY);
  }
}
$("#right").click(moveRight);
$(".kright").click(moveRight);
$(document).keydown(function(e) {
  console.log(e.which);
  switch(e.which) {
    case 37:
      if(focusX != 0) moveLeft();
      break;
    case 39:
      if(focusX < Object.keys(projectInfo).length - 1) moveRight();
      break;
    default:
      break;
  }
});

$("#left").click(moveLeft);
$(".kleft").click(moveLeft);
