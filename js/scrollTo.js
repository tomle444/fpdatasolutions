/* 
* Scroll To Navigation
*/

(function(){
	$( document ).ready(function() {
	    $('.contact-link').click(function(){

			$('html, body').stop().animate({
				scrollTop: $('#contact-us').offset().top 
			}, 800);
			return false;
		});
		$('#topPage').click(function(){
			$('html, body').stop().animate({
				scrollTop: $('#top').offset().top
			}, 800);
			return false;
		});
		$('#topPage').css('display', 'none');
	});

	$(window).scroll(function () {
		
		if($(window).scrollTop() > 800 ){		    	
	    	$('#topPage').fadeIn();
	    } else {
			$('#topPage').fadeOut();
		}
	});
})();