$( document ).ready(function() {
	$(function() {
		$('html').click(function() {
			$('.nav-dropdown').hide();
		});
		$('#nav-toggle').click(function() {
			$('nav ul').slideToggle();
		});
		$('#nav-toggle').on('click', function() {
			this.classList.toggle('active');
		});
		$('#search-btn').click(function() {
			$('#search-form').toggle();
		});
	});
})(jQuery);