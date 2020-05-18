(function($) {
    $('.close-modal').click(function () {
        $('.overlay,.modal-success,.call-modal').hide();
    });
    $('.lang i').click(function (e) {
        $('.lang-down').slideToggle();
        $('.lang i').toggleClass('rotate')
    });
    $('.phone i').click(function (e) {
        $('.phone-down').slideToggle();
        $('.down-icon i').toggleClass('rotate')
    });
    $('.close-down').click(function () {
        $('.phone-down').slideUp();
    })
    $('.menu-btn').click(function () {
        $('.box').toggleClass('open-box');
        $('.close').toggle();
        $('.open').toggle();
        $('.menu-down').toggleClass('menu-open')
    });

    $('.responsive').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.partner').slick({
        dots: false,
        nextArrow: '<div class="next-arrow"><i class="fa fa-chevron-right"></i></div>',
        prevArrow: '<div class="prev-arrow"><i class="fa fa-chevron-left"></i></div>',
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.news').slick({
        dots: false,
        nextArrow: '<div class="next-arrow"><i class="fa fa-chevron-right"></i></div>',
        prevArrow: '<div class="prev-arrow"><i class="fa fa-chevron-left"></i></div>',
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // mobile menu script
    $('.burger').click(function () {
        $('.burger-list').toggle();
    });
    $('.hamburger ').click(function () {
        $('.hamburger').toggleClass('is-active');
    });
    // $('.burger-list ul li a').click(function () {
    //     $('.burger-list').hide();
    //     $('.hamburger').removeClass('is-active');
    // });
    $('.submenu-dropdown').click(function () {
        $('.submenu-dropdown i').toggleClass('rotate');
    });
    $('.submenu-dropdown').click(function () {
        $(this).find('.mobile-submenu').slideToggle();
    });
    $('.submenu-dropdown i').click(function () {
        $(this).siblings('.fa').toggleClass('rotate');
    });
    $('.tab-item').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.tab-item').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    });
    $('.tel').inputmask({ mask: "+ 7 ( 999 ) - 999 - 99 - 99"});

    new WOW().init();

})(jQuery);


function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}
$(window).scroll(function(){
    var sticky = $('.fixed-header'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('shadow');
    else sticky.removeClass('shadow');
});



