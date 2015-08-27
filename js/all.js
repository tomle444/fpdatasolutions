/* 
* All Custom script actions
*/

(function(){
	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	  // tasks to do if it is a Mobile Device
	  $( window ).load(function() {
	  	$('body').addClass('touch');
	  });

		

	} else {
		$( window ).load(function() {
		  	$('body').addClass('desktop');
		  });
	}

	if($(window).width() <= 768){
		$( window ).load(function() {
			// mobile Dose sections slideing animations on PharmacyPoint pages - /optimizations and /compliance
			$(".dose-description").hide();
			$(".dose-section h4").click(function(){
				$(this).siblings(".dose-description").stop();
			    if($(this).parent().hasClass('active'))
			    {
			    	$(this).siblings(".dose-description").slideUp();
			    } else {
			    	$(this).siblings(".dose-description").slideDown();
			    }
			    $(this).parent().toggleClass('active');
			});	
			
			// mobile pop up navigation functionality
			$('html').click(function(){
				$('.trigger').removeClass('active');
			});		
			$('.menu-icon').click(function(e){
				$('.trigger').toggleClass('active');
				e.stopPropagation();
			});		
		});
	}
	$( window ).load(function() {
		if($('.touch').length){
			
			// mobile pop up navigation functionality
			
			$('.menu-icon').click(function(e){
				$('.trigger').toggleClass('active');
				e.stopPropagation();
			});		
			$('html, body').click(function(){
				//$('.trigger').removeClass('active');
			});		
		}
	});




})();