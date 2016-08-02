// Progress Bar
$('a.page-progress').bind('click', function(event) {
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},3000);
	});
});

var waypoint = new Waypoint({
  element: document.getElementById('services'),
  handler: function(direction) {
    if(direction == "up")
      $('a.color-swap').css('color', 'white');
    if(direction == "down")
      $('a.color-swap').css('color', 'black');
      $('.active a.color-swap').css('color', 'white');
  }
})
