$(document).ready(function(){
    $(".c-header__listItem a").click(function(event){
        //prevent the default action for the click event
        event.preventDefault();

        //get the full url - like mysitecom/index.htm#home
        var full_url = this.href;

        //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
        var parts = full_url.split("#");
        var trgt = parts[1];

        //get the top offset of the target anchor
        var target_offset = $("#"+trgt).offset();
console.log(target_offset);
        var target_top = target_offset.top;
       
        if ($('.c-header__menu .is-active').hasClass("is-active")) {
            $('.c-header__menu .is-active').trigger('click');
        }
        //goto that anchor by setting the body scroll top to anchor top
        $('html, body').animate({scrollTop:target_top}, 1500, 'easeInSine');

    });

    $(document).on("scroll", onScroll);

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('#top-menu .c-header__nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));

            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('a').removeClass("active");
                currLink.addClass("active");
            } else{
                currLink.removeClass("active");
            }
        });
    }

    var scrl_pos;
    $(".is-menu").click(function () {
        if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
            $('body').removeClass('is-fixed');
            $("html, body").animate({ scrollTop: scrl_pos }, 0);
        } else {
            $(this).addClass("is-active");
            scrl_pos = $(window).scrollTop();
            $('body').addClass('is-fixed');
        }
        $(".c-header__nav1").toggleClass("is-show");
        return false;
    });
});
