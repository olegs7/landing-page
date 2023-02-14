import "./style.scss";
import $ from 'jquery';
import img from './images.js';

$(document).ready(function() {
const sliderList = $('.gallary__shoes-list');
const sliderItem = $('.gallary__shoes-item');
const sliderImg = $('.gallary__img');
const arrowLeft = $('.gallary__button-left');
const arrowRight = $('.gallary__button-right');
let position = 0;

const img1 = 'assets/puma-bold.png';
const img2 = 'assets/puma-sneakers.png';
const img3 = 'assets/puma-ferrari.png';
const img4 = 'assets/puma-running.png';

let imgs = [img1,img2,img3,img4]

let i = 0

arrowLeft.click(()=>{
	if(i > 0){
		i--
	}else{
		i = imgs.length-1
	}
	sliderImg.attr('src',imgs[i])
})

arrowRight.click(()=>{
	if(i < imgs.length - 1){
		i++
	}else{
		i = 0
	}
	sliderImg.attr('src',imgs[i])
 })


})