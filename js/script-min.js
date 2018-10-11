//parallax
function parallax(){var t=$(window).scrollTop();$(".parallax--bg").css("background-position","center "+.25*t+"px")}
//drag and drop
var adjustment;$(window).scroll(function(){parallax()}),$("ul").sortable({group:"simple_with_animation",pullPlaceholder:!1,
// animation on drop
onDrop:function(t,o,a){var n=$("<li/>").css({height:0});t.before(n),n.animate({height:t.height()}),t.animate(n.position(),function(){n.detach(),a(t,o)})},
// set $item relative to cursor position
onDragStart:function(t,o,a){var n=t.offset(),e=o.rootGroup.pointer;adjustment={left:e.left-n.left,top:e.top-n.top},a(t,o)},onDrag:function(t,o){t.css({left:o.left-adjustment.left,top:o.top-adjustment.top})}});