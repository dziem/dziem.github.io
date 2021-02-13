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
    $('.sidebar.menu .ui.dropdown').dropdown({
        on: $('.sidebar.menu .ui.dropdown').on("tap")
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