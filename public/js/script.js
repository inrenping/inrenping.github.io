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

    //Gradient background
    $(window).scroll(function() {
        var opacity = Math.floor(document.documentElement.scrollTop / 10) + 40;
        if (opacity > 90)
            opacity = 90;
        else
            $('main').css('background', 'rgba(20, 20, 20, .' + String(opacity) + ')');
    });

    //Go to the top of the page when refreshing
    window.onbeforeunload = function() {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }
});