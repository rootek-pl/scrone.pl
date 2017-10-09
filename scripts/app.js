$('.internal-link').click(function (e) {
    var section = $(this).attr('href');
    e.preventDefault();
    
    $($(section).parent()).animate({
        scrollTop: $(section)[0].offsetTop,
    }, 500, "swing");
});