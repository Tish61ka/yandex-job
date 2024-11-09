$(document).ready(function () {
    const mainBgElems = $('.main__wrapper-back').children();

    mainBgElems.each(function () {
        $(this).addClass('showed');
    });

    $('.main__content').addClass('showed');
    $('header').addClass('showed');

    const swiper = new Swiper(".participants__slider", {
        speed: 400,
        loop: true,
        spaceBetween: 20,

        pagination: {
            el: ".participants__pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".participants__btn-next",
            prevEl: ".participants__btn-prev",
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                initialSlide: 0,
            },
            780: {
                slidesPerView: 2,
                initialSlide: 1,
            },
            1160: {
                slidesPerView: 3,
                initialSlide: 2,
            }
        }
    });

    if ($(window).width() <= 768) {
        const sliderParent = $('.steps__section > div:not(.steps__headers)').addClass('swiper steps__slider');
        sliderParent.find('.steps__wrapper').addClass('swiper-wrapper').removeClass('steps__wrapper');
        const plane = sliderParent.find('.steps__item-img');
        const planeClone = plane.clone();
        plane.remove();

        $('.steps__headers').after(planeClone);

        $('.steps__item').each(function () {
            $(this).addClass('swiper-slide').removeClass('steps__item')
        });

        const swiper1 = new Swiper(".steps__slider", {
            speed: 400,
            spaceBetween: 20,
            slidesPerView: 1,

            pagination: {
                el: ".steps__pagination",
            },
            navigation: {
                nextEl: ".steps__btn-next",
                prevEl: ".steps__btn-prev",
            },
        });
    }
});