$(function () {

    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
    });

    const mcs = new Swiper('.main_content_slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {

            769: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

        },
    });

    const txt = ['토목공사 01', '건설공사 마지막 꺼', '빌딩만들기']

    const mss = new Swiper('.main_story_slide', {
        loop: true,
        on: {
            slideChangeTransitionEnd: function () {
                let idx = this.realIndex;
                console.log(idx);
                $('.main_story .num').text("0" + (idx + 1));
                $('.main_story .tit').text(txt[idx]);
            }
        }
    })
});

$(function () {
    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('is-active');
        $('.header .gnb').toggleClass('on');
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').stop().slideUp();
            $(this).next().stop().slideDown();
        }

    });

    $(window).on('resize', function () {
        $('.header .mbtn').removeClass('is-active');
        $('.header .gnb').removeClass('on');
        $('.header .gnb>ul ul').removeAttr('style')
    });

    $('.header .gnb').on('wheel touchmove', function (e) {
        //e.stopPropagation();
        e.preventDefault();
    })
})




