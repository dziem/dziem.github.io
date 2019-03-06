$(function() {
	$('.street').hide();
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
	$('#page #main main .map .button a').click(function(){
		$('#page #main main .map .button a').removeClass('active');
		$(this).addClass('active');
	});
	$('#page #main main .map .button a:first-child').click(function(){
		$('.street').hide();
		$('.maps').show();
	});
	$('#page #main main .map .button a:last-child').click(function(){
		$('.maps').hide();
		$('.street').show();
	});
	$('#home header .search input').focusin(function(){
		$('#overlay').show();
		$('.src-sgt').show();
		$('#second-nav').addClass('z-100');
		$('.search').addClass('z-100');
	});
	$('#home header .search input').focusout(function(){
		$('#overlay').hide();
		$('.src-sgt').hide();
		$('#second-nav').removeClass('z-100');
		$('.search').removeClass('z-100');
	});
	$('#home header .buy-btn').click(function(){
		$('#home header #second-nav div').removeClass('active');
		$(this).addClass('active');
		$('#home header .search').hide();
		$('#home header .search.buy').show();
	});
	$('#home header .lease-btn').click(function(){
		$('#home header #second-nav div').removeClass('active');
		$(this).addClass('active');
		$('#home header .search').hide();
		$('#home header .search.lease').show();
	});
	$('#home header .new-btn').click(function(){
		$('#home header #second-nav div').removeClass('active');
		$(this).addClass('active');
		$('#home header .search').hide();
		$('#home header .search.new').show();
	});
	$('#page.map main #info .result .filter .btn').click(function(){
		$('#page.map main #info .result .filter .btn').removeClass('active');
		$(this).addClass('active');
		$('#page.map main #info .result #overlay').show();
	});
	$('#page.map main #info .result #overlay').click(function(){
		$('#page.map main #info .result .filter .btn').removeClass('active');
		$('#page.map main #info .result .filter-form').hide();
		$(this).hide();
	});
	$('#page.map main #info .result .results .top span').click(function(){
		$('#page.map main #info .result .filter-form').show();
		$('#page.map main #info .result #overlay').show();
	});
	$('#page.map main #info .result .filter-form i').click(function(){
		$('#page.map main #info .result .filter-form').hide();
		$('#page.map main #info .result #overlay').hide();
	});
	$('#page.map main #info .result .results .col .content .img.slider').bxSlider();
});