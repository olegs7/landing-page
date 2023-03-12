import "./style.scss";
import $ from 'jquery';
import img from './images.js';

$(document).ready(function() {
	const btns = $('.gallary__buttons');
    disabledButton($('.default'), btns)

	//GALLARY CAROUSEL
    const sliderList = $('.gallary__shoes-list:first');
    const sliderItem = $('.gallary__shoes-item');
    const arrowLeft = $('.gallary__button-left');
    const arrowRight = $('.gallary__button-right');

    arrowLeft.click(()=>{
        sliderList.prepend(sliderList.find('li:last'));
    });

    arrowRight.click(()=>{
        sliderList.append(sliderList.find('li:first'));
    });

    //TABS
    const categoriesItem = $('.gallary__categories-item');
    const gallaryList = $('.gallary__shoes-list');

    categoriesItem.each(function() {
        $(this).click(function() {

            categoriesItem.removeClass('active');
            $(this).addClass('active');

            for (let element of gallaryList) {
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


})


