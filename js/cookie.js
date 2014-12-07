$(function(){
	window.preIndex = 1;
	window.snow = true;

	// setInterval(function(){
	// 	if(window.firstSection){ 
	// 		slide();
	// 	};
	// }, 3500);

	function slide(){
		var s = $(".slider li").get(0);
		$(s).animate({'margin-left': '-25%'}, 1000, function(){
			$(s).appendTo($(".slider ul")).css("margin-left", 0);
		})
	}

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
	    		$(".xmas").animate({"width": 500}, 1000);
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
	
});
