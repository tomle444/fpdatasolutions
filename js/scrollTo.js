/* 
* Scroll To Navigation
*/

(function(){
	$(window).on('beforeunload', function() {
	    if($('.homepage').length){
	    	$(window).scrollTop(0);
	    }
	});
	$( document ).ready(function() {
	    
		$('#topPage').click(function(){
			$('html, body').stop().animate({
				scrollTop: $('#top').offset().top
			}, 800);
			return false;
		});
		$('#topPage').css('display', 'none');

		//$('.home .content').css("min-height", "650px");
		$('.home .content, .about .content').css({
				"opacity" : "0",
				"margin-top" : "100px"
			});
		$('.hero h1').css({
			"opacity" : "0"
		});
		$('.hero h1').stop().animate({
			opacity: 1
		}, 600);

		
	});

	$(window).scroll(function () {
		if($('.homepage').length){			
			if($(window).scrollTop() > 70 ){	
				$('.home .content').animate({
					opacity: 1,
					'margin-top' : "50px"
				}, 300);
			}
			if($(window).scrollTop() > 550 ){	
				$('.about .content').animate({
					opacity: 1,
					'margin-top' : "50px"
				}, 300);
			}
		}	
		if($(window).scrollTop() > 800 ){		    	
	    	$('#topPage').fadeIn();
	    } else {
			$('#topPage').fadeOut();
		}
	});
})();