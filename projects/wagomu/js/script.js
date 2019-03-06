$(document).ready(function(){
	$('nav ul li h1:not(:only-child)').click(function(e) {
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
});