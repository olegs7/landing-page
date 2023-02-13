import "./style.scss";
import $ from 'jquery';
import img from './images.js';

$(document).ready(function() {
const sliderList = $('.gallary__shoes-list');
const sliderItem = $('.gallary__shoes-item');
const arrowLeft = $('.gallary__button-left');
const arrowRight = $('.gallary__button-right');
let position = 0;

arrowLeft.click(function(){
	position -= 301.5;
	if(position > 1210){
		position = 0
	}
	sliderList.css('left', -position);
   })

arrowRight.click(function(){
	position += 301.5;
	if(position > 1210){
		position = 0 
	}
	sliderList.css('left', -position);
  })
})