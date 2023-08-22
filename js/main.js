$(document).ready(function () {
    // burger button & mobile menu 
    $('.burger-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
    });

    // location rows accordeon
    $('.locations__row-head').on('click', function () {
        $(this).toggleClass('active');
        $(this).next('.locations__row-body').slideToggle('slow');
    });
});