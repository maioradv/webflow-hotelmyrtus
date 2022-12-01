$(document).ready(function() {
	if($('.slick_center_items').length > 3){ 
		$('.slick_center').slick({
			dots: true,
			infinite: true,
			arrows: true,
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 3,
			draggable: false,
			    swipe: true,
			responsive: [
			{
			  breakpoint: 768,
			  settings: {
			    arrows: false,
			    centerMode: true,
			    centerPadding: '40px',
			    slidesToShow: 3
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
			    arrows: false,
			    centerMode: true,
			    centerPadding: '40px',
			    slidesToShow: 1
			  }
			}
			]
		});
	}
});
