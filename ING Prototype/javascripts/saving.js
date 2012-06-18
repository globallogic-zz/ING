$(document).ready(function() {
	$('#bannernav').click(function() {
		$('.user-nav ul').toggle();
	});

	$(".show-panel").click(function(){
		$("#lightbox, #lightbox-panel").fadeIn(300);
	});
	
	$("#close-panel, #lightbox").click(function(){
		$("#lightbox, #lightbox-panel").fadeOut(300);
	});
				
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
	
	$('.savingSlider').iosSlider({		
		navSlideSelector: $('.iosSliderButtons .button'),
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