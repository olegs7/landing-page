import "./sass/style.scss";
import $ from 'jquery';
import img from './images.js';

$(document).ready(function() {
	const btns = $('.gallery__buttons');
    disabledButton($('.default'), btns)

	//GALLERY CAROUSEL
    const sliderList = $('.gallery__shoes-list:first');
    const sliderItem = $('.gallery__shoes-item');
    const arrowLeft = $('.gallery__button-left');
    const arrowRight = $('.gallery__button-right');

    arrowLeft.click(()=>{
        sliderList.prepend(sliderList.find('li:last'));
    });

    arrowRight.click(()=>{
        sliderList.append(sliderList.find('li:first'));
    });

    //TABS
    const categoriesItem = $('.gallery__categories-item');
    const galleryList = $('.gallery__shoes-list');

    categoriesItem.each(function() {
        $(this).click(function() {

            categoriesItem.removeClass('active');
            $(this).addClass('active');

            for (let element of galleryList) {
                $(element).addClass('hidden');
            }
            const content = $('#' + $(this).attr('data-tab'));
            disabledButton(content, btns)
            content.removeClass('hidden');
        })
    })

    function disabledButton(param, buttonArrow) {
    $(param).children().length <= 4 ? buttonArrow.css("display","none") : buttonArrow.css("display","block");  
    $(window).width() > 880 ? buttonArrow.css("display","none") : buttonArrow.css("display","block");
}

    //POP-UP
    const openLogin = $('.login');
    const closePopUp = $('.pop_up_close');
    const popUp = $('.pop_up');

    openLogin.click((e)=>{
        e.preventDefault();
        popUp.addClass('active')
        $('.menu-btn.active').css('z-index','0')
    })

    closePopUp.click(()=>{
        popUp.removeClass('active')
        $('.menu-btn.active').css('z-index','10')
    })

    //burger-menu
    const menuBtn = $('.menu-btn');
    const menuMobile = $('.menu-mobile');

    menuBtn.click(()=>{
       menuMobile.toggleClass('menu--open')
       menuBtn.toggleClass('active')
    })

    // video
    const videoPreview = $('.video__preview')
    const videoPlay = $('.play-img')

    $(videoPlay).click(()=>{
      videoPlay.css('display','none')
      videoPreview.css('background-image','none').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/RMqv_GlnyR4?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    })

    //footer-date
    $('.footer__text').append('@Copyright ' + new Date().getFullYear() + ' The PUMA All Rights')
})


