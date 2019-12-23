$(function() {
    //Set buttons
    $('#more').click(function() {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });

    //Set the background
    var backgrounds = new Array('48638741','21588886','63967458','66934537','44403643','17648714','66919234','6095368','16785804','5631855',);
    var random = Math.floor(Math.random() * backgrounds.length);

    function checkWebp() {
        try {
            return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
        } catch (err) {
            return false;
        }
    }

    function setbg(type) {
        $('body').css('background-image', 'url(public/images/'+ backgrounds[random] + '.' + type);
    }

    if (checkWebp()) {
        setbg(type = 'webp');
    } else {
        setbg(type = 'jpg');
    }

    $(".bg").interactive_bg({
        strength: 30,
        scale: 1.03,
        animationSpeed: "100ms",
        contain: true,
        wrapContent: false
      });

    $(window).resize(function() {
      $(".ibg-bg, html, body, header").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
      });
    })
});