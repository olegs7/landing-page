import "./style.scss";
import $ from 'jquery';
import img from './images.js';

$(document).ready(function() {
let position = 0
const sliderList = $('.gallary__shoes-list');
const sliderItem = $('.gallary__shoes-item');
const arrowLeft = $('.gallary__button-left');
const arrowRight = $('.gallary__button-right');

arrowLeft.click(function(){
	position -= 285;
	if(position > 1140){
		position = 0
	}
	sliderList.css('left', -position);
   })

arrowRight.click(function(){
	position += 285;
	if(position > 1140){
		position = 0 
	}
	sliderList.css('left', -position);
  })
})