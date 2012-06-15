$(document).ready(function() {
	$('#dropmenutop').click(function() {
		$('.navigation nav').show();
	});
	$('.navigation nav').click(function() {
		$(this).hide();
	});
	$('.iosSlider').iosSlider({
		autoSlide: false,
		autoSlideTimer: 5000,
		scrollbar: false,
		snapToChildren: true,
		desktopClickDrag: true,					
		responsiveSlideWidth: true,
		navSlideSelector: $('.iosSliderButtons .button, .savings a'),
		infiniteSlider: true,
		startAtSlide: '1',
		onSlideChange: slideContentChange,
		onSliderLoaded: slideContentLoaded
	});
	
	function slideContentChange(args) {
		$(args.sliderObject).parent().find('.iosSliderButtons .button').removeClass('selected');
		$(args.sliderObject).parent().find('.iosSliderButtons .button:eq(' + args.currentSlideNumber + ')').addClass('selected');
		
		$(args.sliderObject).parent().parent().parent().parent().find('a').removeClass('current');
		$(args.sliderObject).parent().parent().parent().parent().find('a:eq(' + args.currentSlideNumber + ')').addClass('current');
	}
	
	function slideContentLoaded(args) {		
		$(args.sliderObject).parent().find('.iosSliderButtons .button').removeClass('selected');
		$(args.sliderObject).parent().find('.iosSliderButtons .button:eq(' + args.currentSlideNumber + ')').addClass('selected');
		
		$(args.sliderObject).parent().parent().parent().parent().find('a').removeClass('current');
		$(args.sliderObject).parent().parent().parent().parent().find('a:eq(' + args.currentSlideNumber + ')').addClass('current');					
	}	
});