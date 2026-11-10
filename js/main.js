$(function () {
    $('.hamburger').on('click', function () {
        $('header').toggleClass('open');
    });

    $('#nav a').on('click', function () {
        $('header').removeClass('open');
    });

    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false;
    });

    setTimeout(function () {
        $('.img-section').addClass('is-show');
    }, 200);
});