import "./style.scss";
import $ from 'jquery';
import img from './images.js';

$(document).ready(function() {
	//gallary-click
    const sliderList = $('.gallary__shoes-list:first');
    const sliderItem = $('.gallary__shoes-item');
    const arrowLeft = $('.gallary__button-left');
    const arrowRight = $('.gallary__button-right');

    arrowLeft.click(() => {
        sliderList.prepend(sliderList.find('li:last'),sliderList.find('li:first'));
    });

    arrowRight.click(() => {
        sliderList.append(sliderList.find('li:first'));
    });

    //gallary-categories-tabs
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
            content.removeClass('hidden');
        })
    })


})

