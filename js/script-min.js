//parallax
function parallax(){var t=$(window).scrollTop();$(".parallax--bg").css("background-position","center "+.75*t+"px")}
//drag and drop
var adjustment;$(window).scroll(function(){parallax()}),$(".portfolio").sortable({group:"simple_with_animation",pullPlaceholder:!1,
// animation on drop
onDrop:function(t,o,e){var a=$("<li/>").css({height:0});t.before(a),a.animate({height:t.height()}),t.animate(a.position(),function(){a.detach(),e(t,o)})},
// set $item relative to cursor position
onDragStart:function(t,o,e){var a=t.offset(),i=o.rootGroup.pointer;adjustment={left:i.left-a.left,top:i.top-a.top},e(t,o)},onDrag:function(t,o){t.css({left:o.left-adjustment.left,top:o.top-adjustment.top})}}),
//Star Rating
$(document).ready(function(){
/* 1. Visualizing things on Hover - See next part for action on click */
$(".stars li").on("mouseover",function(){var o=parseInt($(this).data("value"),10);// The star currently mouse on
// Now highlight all the stars that's not after the current hovered star
$(this).parent().children("li.star").each(function(t){t<o?$(this).addClass("hover"):$(this).removeClass("hover")})}).on("mouseout",function(){$(this).parent().children("li.star").each(function(t){$(this).removeClass("hover")})}),
/* 2. Action to perform on click */
$(".stars li").on("click",function(){var t=parseInt($(this).data("value"),10),o=$(this).parent().children("li.star");// The star currently selected
for(i=0;i<o.length;i++)$(o[i]).removeClass("selected");for(i=0;i<t;i++)$(o[i]).addClass("selected");
/*
    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
    }
    else {
        msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    responseMessage(msg);
*/})});
/*
function responseMessage(msg) {
  $('.success-box').fadeIn(200);
  $('.success-box div.text-message').html("<span>" + msg + "</span>");
}*/