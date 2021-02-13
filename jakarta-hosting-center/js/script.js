$(document).ready(function(){
    $('.ui.sidebar').sidebar({
        context: $('body'),
        transition: 'overlay'
    }).sidebar('attach events', '#mobile_item');   
    $('nav .menu .item').popup({
        on: 'hover',
        hoverable: true,
        position: 'bottom left'
    });
    /*$('.sidebar.menu .ui.dropdown').dropdown({
        on: $('.sidebar.menu .ui.dropdown').on("tap")
    });*/
    $(window).tap(function() {
        if ($('.sidebar.menu .ui.dropdown').hasClass('visible active')) {
            $('.sidebar.menu .ui.dropdown').removeClass('visible active');
            $('.sidebar.menu .ui.dropdown').children('.menu').removeClass('active');
            $('.sidebar.menu .ui.dropdown').children('.menu').hide();
        }
    });
    $('.sidebar.menu .ui.dropdown').on("tap", function(event) {
        event.stopPropagation();
        $(this).css("background", "red")
        alert($(this).css("background"))
        $('.sidebar.menu .ui.dropdown').not(this).removeClass('visible active');
        $('.sidebar.menu .ui.dropdown').not(this).children('.menu').removeClass('active');
        $('.sidebar.menu .ui.dropdown').not(this).children('.menu').hide();
        $(this).toggleClass('visible active');
        $(this).children('.menu').toggleClass('visible');
        $(this).children('.menu').toggle();
    });
    $('.ui.dropdown').not('.sidebar.menu .ui.dropdown').dropdown({
        on: 'hover'
    });
    $('.main-carousel').flickity({
        wrapAround: true,
        autoPlay: true,
        prevNextButtons: false,
    });
    $('.ui.accordion').accordion();
    $('#copyright-year').text(new Date().getFullYear());
});
