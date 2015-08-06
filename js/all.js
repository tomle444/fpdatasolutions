/* 
* All Custom script actions
*/

(function(){

	if($(window).width() <= 768){
		$( window ).load(function() {
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

			$("a.menu-icon").click(function(){
				$(".trigger").toggle();
				
			});
		});

	}
})();