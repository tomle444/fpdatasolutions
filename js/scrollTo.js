/* 
* Scroll To Navigation
*/

(function(){
	// scroll to top of page on refresh
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

		if($('.homepage').length){	
			// set animation start points
			$('.home .content img, .content h2, .content p, .content .button,  .about .content svg').css({
					"opacity" : "0"				
				});
			$('.home .content img, .about .content svg').css({
				"margin-top" : "100px"
			});
			$('.hero h1').css({
				"opacity" : "0"
			});
			$('.hero h1').stop().delay(200).animate({
				opacity: 1
			}, 600);
		}

		
		
	});

	$(window).scroll(function () {
		var windowWidth = $(this).width();
	    var windowHeight = $(this).height();
	    var windowScrollTop = $(this).scrollTop();
	    var homeTarget = $('.home');
	    var aboutTarget = $('.about');

		if($('.homepage').length){		
			var animateContent = function(){
				$('.home .content h2').animate({
					opacity: 1
				},600);

				$('.home .content p').animate({
					opacity: 1
				},600);
				$('.home .content .button').delay(400).animate({
					opacity: 1
				},600);
			}
			var animateAbout = function(){
				$('.about .content h2').animate({
					opacity: 1
				},600);

				$('.about .content p').animate({
					opacity: 1
				},600);
				$('.about .content .button').delay(400).animate({
					opacity: 1
				},600);
			}	
			if(windowScrollTop + windowHeight > homeTarget.position().top){	
				$('.home .content img').animate({
					opacity: 1,
					'margin-top' : "0px"
				}, 300, function(){
					animateContent();
					
				});
			}
			if(windowScrollTop + windowHeight > aboutTarget.position().top ){	
				$('.about .content svg').delay(200).animate({
					opacity: 1,
					'margin-top' : "0px"
				}, 300, function(){
					animateAbout();
				});
			}
		}	
		if($(window).scrollTop() > 800 ){		    	
	    	$('#topPage').fadeIn();
	    } else {
			$('#topPage').fadeOut();
		}
	});
})();