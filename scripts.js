$(function(){

	$.fn.extend({
	  animateCss: function(animationName, callback) {
	    var animationEnd = (function(el) {
	      var animations = {
	        animation: 'animationend',
	        OAnimation: 'oAnimationEnd',
	        MozAnimation: 'mozAnimationEnd',
	        WebkitAnimation: 'webkitAnimationEnd',
	      };

	      for (var t in animations) {
	        if (el.style[t] !== undefined) {
	          return animations[t];
	        }
	      }
	    })(document.createElement('div'));

	    this.addClass('animated ' + animationName).one(animationEnd, function() {
	      $(this).removeClass('animated ' + animationName);

	      if (typeof callback === 'function') callback();
	    });

	    return this;
	  },
	});
	$('li.contact').click(function(){
		$('div.contact_box').animateCss('zoomInUp').css({'opacity':1,'z-index':1});
		$('article.about, section.social-hubs').addClass('mapOpen');
		$('.contact_box').click(function(){
			$(this).animateCss('zoomOutDown').css({'opacity':0,'z-index':-1});
			$('article.about, section.social-hubs').removeClass('mapOpen');
		})
	})

	// var animateWord = $('article.about p.about').text();

	// function animatedIt () {
	// 	var newWord= '';
	// 	for(var i =0 ; i< animateWord.length; i++) {
	// 		var subStr = animateWord.substr(i,1);
	// 		if(subStr != ' ') 
	// 			 newWord += '<span>'+subStr+'</span>';
	// 		else 
	// 			newWord+=subStr
	// 	}

	// 	$('article.about p.about').html(newWord);

	// 	var animateDelay = 100;

	// 	$('article.about p.about > span').each(function(){
	// 		var that = this;
	// 		setTimeout(function(){
	// 			$(that).animateCss('fadeInDown').css({'opacity' : 1});
				
	// 		},animateDelay)
	// 		animateDelay+=50;
	// 	})
	// }
	// animatedIt();
	
})