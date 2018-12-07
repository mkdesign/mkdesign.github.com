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
	
})