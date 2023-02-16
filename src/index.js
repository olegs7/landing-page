import "./style.scss";
import $ from 'jquery';
import img from './images.js';

$(document).ready(function() {
// const sliderList = $('.gallary__shoes-list');
const sliderItem = $('.gallary__shoes-item');
const arrowLeft = $('.gallary__button-left');
const arrowRight = $('.gallary__button-right');

// arrowRight.click(() => {
//   sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
//   console.log(sliderList.lastElementChild)
// });

// arrowLeft.click(() => {
//   sliderList.appendChild(sliderList.firstElementChild);

// });


const sliderList = document.querySelector('.gallary__shoes-list');
document.querySelector('.gallary__button-right').addEventListener('click', function() {
  sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
});
document.querySelector('.gallary__button-left').addEventListener('click', function() {
  sliderList.appendChild(sliderList.firstElementChild);
});


})

