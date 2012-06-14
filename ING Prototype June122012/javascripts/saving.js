$(document).ready(function() {

	$("a#show-panel").click(function(){
		$("#lightbox, #lightbox-panel").fadeIn(300);
	})
	$("a#close-panel").click(function(){
		$("#lightbox, #lightbox-panel").fadeOut(300);
	})
				
	$().UItoTop({ easingType: 'easeOutQuart' });
	
	$('#nav-expand').click(function() {
		$('.navigation nav').show();
		$('#nav-expand').hide();
		$('#nav-collapse').show();
	});
	
	$('#nav-collapse').click(function() {
		$('.navigation nav').hide();
		$('#nav-expand').show();
		$('#nav-collapse').hide();
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