import "./style.scss";
import $ from 'jquery';
import img from './images.js';

$(document).ready(function() {
const sliderList = $('.gallary__shoes-list');
const sliderItem = $('.gallary__shoes-item');
const arrowLeft = $('.gallary__button-left');
const arrowRight = $('.gallary__button-right');

arrowRight.click(() => {
  sliderList.insertBefore(sliderList.last, sliderList.first);
 
});

arrowLeft.click(() => {
  sliderList.appendChild(sliderList.first); 

});


// const sliderList = document.querySelector('.gallary__shoes-list');
// document.querySelector('.gallary__button-right').addEventListener('click', function() {
//   sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
// });
// document.querySelector('.gallary__button-left').addEventListener('click', function() {
//   sliderList.appendChild(sliderList.firstElementChild);
// });


const categoriesItem = $('.gallary__categories-item');
const gallaryList = $('.gallary__shoes-list');

categoriesItem.each(function() {
    $(this).click(function() {

        categoriesItem.removeClass('active');
        $(this).addClass('active');

        for(let element of gallaryList) {
          $(element).addClass('hidden');
        }
        const content = $('#' + $(this).attr('data-tab'));
        content.removeClass('hidden');
    })
})


// categoriesItem.forEach(function(item) {
// 	item.addEventListener('click',function() {
// 		let currentItem = item;

// 		categoriesItem.forEach(function(item)  {
// 			item.classList.remove('active');
// 		})

// 		for(let element of gallaryList){
// 			element.classList.add('hidden')
// 		}

// 		currentItem.classList.add('active');
// 		const content = document.querySelector('#' + item.dataset.tab);
// 		content.classList.remove('hidden');
// 	})
// })



})

