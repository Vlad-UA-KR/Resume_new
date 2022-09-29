$(function () {
	$('.small-blok-slider').slick({
		slidesToShow: 1,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 4000,
		nextArrow: '<button class="btn btn__right""><svg class="nextArr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>',
		prevArrow: '<button class="btn btn__left""><svg class="prevArr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>'
	})
})

$(function () {
	$('.work-slider').slick({
		slidesToShow: 1,
		speed: 500,
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2500,
		variabgleWidth: true,
	})
})