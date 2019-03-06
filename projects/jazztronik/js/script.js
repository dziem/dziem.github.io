$( document ).ready(function() {
	$(function() {
		$('.nav-bot ul li a:not(:only-child)').click(function(e) {
			$(this).siblings('.nav-dropdown').toggle();
			$('.nav-dropdown').not($(this).siblings()).hide();
			e.stopPropagation();
		});
		$('html').click(function() {
			$('.nav-dropdown').hide();
		});
		$('#nav-toggle').click(function() {
			$('.nav-bot ul').slideToggle();
		});
		$('#nav-toggle').on('click', function() {
			this.classList.toggle('active');
		});
	});
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
	$("nav ul a").on('click', function(event) {
		if ($(window).width() < 720) {
			$('.nav-bot ul').slideToggle();
			$('#nav-toggle').removeClass('active');
		}
		if (this.hash !== "") {
		  event.preventDefault();
		  var hash = this.hash;
		  $('html, body').animate({
			scrollTop: $(hash).offset().top - 60
		  }, 800);
		}
	  });
})(jQuery);
