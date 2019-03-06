$(function() {
	$('nav ul li a:not(:only-child)').click(function(e) {
		$(this).siblings('.nav-dropdown').toggle();
		$('.nav-dropdown').not($(this).siblings()).hide();
		e.stopPropagation();
	});
	$('html').click(function() {
		$('.nav-dropdown').hide();
	});
	$('#nav-toggle').click(function() {
		$('nav ul').slideToggle();
	});
	$('#nav-toggle').on('click', function() {
		this.classList.toggle('active');
	});
	var veryFirst = $('.scrollspy').first().offset().top;
	console.log(veryFirst);
	$(window).bind('scroll', function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.scrollspy');
    elems.each(function(index){
      var elemTop 	= $(this).offset().top;
      var elemBottom 	= elemTop + $(this).height();
      if(currentTop >= elemTop && currentTop <= elemBottom){
        var id 		= $(this).attr('id');
        var navElem = $('a[href="#' + id+ '"]');
    navElem.parent().addClass('active').siblings().removeClass( 'active' );
      }
    })
	if(currentTop < veryFirst){
		$('nav li').removeClass( 'active' );
	}
}); 
});