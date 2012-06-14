$(document).ready(function() {
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
	
	$('#savings .iosSlider').iosSlider({		
		navSlideSelector: $('#savings li a'),		
		onSlideChange: slideContentChange,
		onSliderLoaded: slideContentLoaded
	});
	
	$('#investings .iosSlider').iosSlider({
		navSlideSelector: $('#investings li a'),		
		onSlideChange: slideContentChange,
		onSliderLoaded: slideContentLoaded
	});
	
	$('#insurance .iosSlider').iosSlider({
		navSlideSelector: $('#insurance li a'),		
		onSlideChange: slideContentChange,
		onSliderLoaded: slideContentLoaded
	});
	
	$('#mortagages .iosSlider').iosSlider({
		navSlideSelector: $('#mortagages li a'),		
		onSlideChange: slideContentChange,
		onSliderLoaded: slideContentLoaded
	});
	
	function slideContentChange(args) {
		$(args.sliderObject).parent().find('.iosSliderButtons .button').removeClass('selected');
		$(args.sliderObject).parent().find('.iosSliderButtons .button:eq(' + args.currentSlideNumber + ')').addClass('selected');
		
		$(args.sliderObject).parent().parent().parent().find('a').removeClass('current');
		$(args.sliderObject).parent().parent().parent().find('a:eq(' + args.currentSlideNumber + ')').addClass('current');
	}
	
	function slideContentLoaded(args) {		
		$(args.sliderObject).parent().find('.iosSliderButtons .button').removeClass('selected');
		$(args.sliderObject).parent().find('.iosSliderButtons .button:eq(' + args.currentSlideNumber + ')').addClass('selected');
		
		$(args.sliderObject).parent().parent().parent().find('a').removeClass('current');
		$(args.sliderObject).parent().parent().parent().find('a:eq(' + args.currentSlideNumber + ')').addClass('current');					
	}	
});