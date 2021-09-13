var x;
var y;
var dx = window.innerWidth;
var dy = window.innerHeight;
var sp = 4000;
var IsAnimate = false;
$(document).ready(function () {
  $("#myCanvas").click(function (event) {
    x = event.pageX;
    y = event.pageY;

    if (!IsAnimate) {
      $(this).prepend('<span class="circle" style="right: 0px;top: ' + y + 'px;"></span>');
      animateC(x, y);
    } else {
      if ($(event.target).is(".circle")) {
        event.target.remove();
        IsAnimate = false;
      } else {
        sp *= 0.5;
        animateC(x, y);
      }

    }
  });
});

function animateC(x, y) {
  $('.circle').css("background-color", "yellow");
  $('.circle').animate({
    top: 0,
    right: x
  }, sp);
  $('.circle').animate({
    top: y,
    left: 0
  }, sp);
  $('.circle').animate({
    top: dy-25,
    left: x
  }, sp);
  $('.circle').animate({
    top: y,
    left: dx-25
  }, sp);
  IsAnimate = true;
}