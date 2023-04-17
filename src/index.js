import "./sass/style.scss";
import $ from 'jquery';
import img from './images.js';

$(document).ready(function() {
	  const btns = $('.gallery__buttons');
      disabledButton($('.default'), btns)

	//GALLERY-CAROUSEL
    const tabAll = $('#tab-all')
    const tabMale = $('#tab-male')
    const tabFemale = $('#tab-female')
    const tabKids = $('#tab-kids')
    const arrowLeft = $('.gallery__button-left');
    const arrowRight = $('.gallery__button-right');
    const widthScreen = $(window).width()

    arrowLeft.click(() => {
    if ($('.active').text() == 'All') {
        slideRight(tabAll)
    } else if ($('.active').text() == 'Male') {
        slideRight(tabMale)
    } else if ($('.active').text() == 'Female') {
        slideRight(tabFemale)
    } else {
        slideRight(tabKids)
    }
});

    arrowRight.click(() => {
    if ($('.active').text() == 'All') {
        slideRight(tabAll)
    } else if ($('.active').text() == 'Male') {
        slideRight(tabMale)
    } else if ($('.active').text() == 'Female') {
        slideRight(tabFemale)
    } else {
        slideRight(tabKids)
    }
});

    function slideLeft(itemTab) {
    itemTab.prepend(itemTab.find('li:last'));
    itemTab.find('li').slice(4).hide()
    itemTab.find('li:nth-child(1)').show()
    if (widthScreen <= 880 && widthScreen >= 721) {
        itemTab.find('li').slice(3).hide()
    } else if (widthScreen <= 720 && widthScreen >= 501) {
        itemTab.find('li').slice(2).hide()
    } else if (widthScreen <= 500) {
        itemTab.find('li').slice(1).hide()
    }
}

    function slideRight(itemTab) {
    itemTab.append(itemTab.find('li:first'));
    itemTab.find('li').slice(4).hide()
    itemTab.find('li:nth-child(4)').show()
    if (widthScreen <= 880 && widthScreen >= 721) {
        itemTab.find('li').slice(3).hide()
        itemTab.find('li:nth-child(3)').show()
    } else if (widthScreen <= 720 && widthScreen >= 501) {
        itemTab.find('li').slice(2).hide()
        itemTab.find('li:nth-child(2)').show()
    } else if (widthScreen <= 500) {
        itemTab.find('li').slice(1).hide()
        itemTab.find('li:nth-child(1)').show()
    }
}

    //TABS
    const categoriesItem = $('.gallery__categories-item');
    const galleryList = $('.gallery__shoes-list');

    for (let element of galleryList) {
          $(element).find('li').slice(4).hide()
        }

    categoriesItem.each(function() {
        $(this).click(function() {

            categoriesItem.removeClass('active');
            $(this).addClass('active');

            for (let element of galleryList) {
                $(element).addClass('hidden');
            }

            const content = $('#' + $(this).attr('data-tab'));
            content.removeClass('hidden');
        })
    })

    function disabledButton(param, buttonArrow) {
    $(param).children().length <= 4 ? buttonArrow.css("display","none") : buttonArrow.css("display","block");
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


