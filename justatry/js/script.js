$(document).ready(function($) {
  $('.tab_content').hide();
  $('.tab_content:first').show();
  $('.tabs li:first').addClass('active');
  $('.tabs li').click(function(event) {
    $('.tabs li').removeClass('active');
    $(this).addClass('active');
    $('.tab_content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });
   $(function() {
    $('a[data-modal]').on('click', function() {
      $($(this).data('modal')).modal({fadeDuration: 100});
      return false;
    });
  });
  $('#search').click(function() {
	  $('.overlay').toggle();
	  $('#main-top').toggle();
	  $('#search-top').toggle();
	  $('input[name=search]').focus();
  });
  $('#bacc').click(function() {
	  $('.overlay').toggle();
	  $('#main-top').toggle();
	  $('#search-top').toggle();
  });
});