const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 1500,
	},
	centeredSlides: true,
	preloadImages: true,
	// slidesPerView: 3,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		'@0.2': {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		'@0.75': {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		'@1.00': {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		'@1.50': {
			slidesPerView: 4,
			spaceBetween: 15,
		},
	},
});
