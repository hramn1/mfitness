var swiperBanner = new Swiper('.slider-block .swiper-container', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
	el: '.swiper-pagination',
	},
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  direction: "horizontal",
	navigation: {
		nextEl: '.swiper-button-thumbs',
		prevEl: '.swiper-button-thumbs',
	},
	breakpoints: {
		700:{
			direction: "vertical",
		}
	}
});

var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
var swiperSaleMobile = new Swiper('.sales-block-mobile--first .swiper-container', {
	pagination: {
		el: '.swiper-pagination',
	},
});
var swiperSaleMobileSecond = new Swiper('.sales-block-mobile--second .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});
