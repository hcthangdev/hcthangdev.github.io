$(function() {
    function heightMenu() {
        return document.getElementById('menu').clientHeight
    }

    // scroll to top
    $('.to-top').click(() => {
        $('body, html').animate({ scrollTop: 0 }, 800);
        return false
    })

    // scroll to exp
    $('.computer-mouse, .to-exp').click(() => {
        $('body, html').animate({ scrollTop: $('#experience-and-lerning-progress').offset().top - heightMenu() }, 800);
        return false
    })

    // scroll to exp
    $('.to-contact').click(() => {
        $('body, html').animate({ scrollTop: $('#contact').offset().top - heightMenu() }, 800);
        return false
    })

    // scroll to exp
    $('.to-comments').click(() => {
        $('body, html').animate({ scrollTop: $('#comments').offset().top - heightMenu() }, 800);
        return false
    })
})