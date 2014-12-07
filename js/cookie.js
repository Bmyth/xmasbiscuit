$(function(){
	window.preIndex = 1;
	window.snow = true;

	$('.container').fullpage({
	    afterLoad: function(anchorLink, index){
	    	if(index == 1 || index == 7){
	    		$("#canvas_snow").show();
	    		window.snow = true;
	    	}else{
	    		window.snow = false;
	    	}
	    	if((index == 2 && window.preIndex == 1) || (index == 3 && window.preIndex == 4)){
	    		$(".fixed-spot").show();
	    		$(".spot").hide();
	    	}else if((index == 3 && window.preIndex == 2 )|| (index == 2 && window.preIndex == 3 )){
	    		$(".second").css({'opacity':1});
	    		$(".third").css({'opacity':1});
	    	}
	    	else{
	    		$(".spot").show();
	    		$(".fixed-spot").hide();
	    	}

	    	if(index == 7){
	    		$(".xmas").animate({"width": 500}, 'slow');
	    	}
	    	if(index == 6){
	    		$(".xmas").css({"width": 0});
	    	}
		    window.preIndex = index;
        },
        onLeave: function(index, nextIndex, direction){
        	if(index == 1 || index == 7){
        		$("#canvas_snow").hide();
        	} 
            if(index == 3 && direction == 'down'){
                $(".spot").show();
	    		$(".fixed-spot").hide();
            }
            if(index == 2 && direction == 'up'){
                $(".spot").show();
	    		$(".fixed-spot").hide();
            }
            if(index == 2 && direction == 'down'){
                $(".second").css({'opacity':0.3});
	    		$(".third").css({'opacity':0.3});
	    		$(".third").animate({'opacity':1}, 'fast');
            }
            if(index == 3 && direction == 'up'){
                $(".second").css({'opacity':0.3});
	    		$(".third").css({'opacity':0.3});
	    		$(".second").animate({'opacity':1}, 'fast');
            }
        }
	});
	// $.fn.fullpage.setAllowScrolling(false);

	// window.sum = 19;
	// window.loaded = 0;
	// $(".bp").each(function(){
	// 	$(this).get(0).onload = function(){
	// 		window.loaded ++;
	// 		if(window.loaded < window.sum){
	// 			var w = (loaded * 100 / sum) + '%';
	// 			$(".loading-bar").css({width: w});
	// 		}else{
	// 			$(".loading-bar").animate({width: '100%'}, 1000, function(){
	// 				$(".loader").hide();
	// 				$(".loading-bar").hide();
	// 				$("#canvas_snow").show();
	// 				$(".fixed").css({"z-index": 3, "background" : "transparent"});
	// 				$.fn.fullpage.setAllowScrolling(true);
	// 			});
	// 		}
	// 	}
	// });	
});
