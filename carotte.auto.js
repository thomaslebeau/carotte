/* [URL] */
;(function($, window, document, undefined) {

  var r = $.carotte.slideshow;
  
  r.autoslide = {
    options : {
      time:2000,
      textPlay:'play',
      textPause:'pause',
      duration:700,
      pauseOnHover:false
    }
  };
  
  $.fn.autoslide = function(options) {
    
    options = $.extend({}, r.autoslide.options, options);
    return this.each(function(){
      var slideshow = $(this),
        parentSlideshow = $(this).parent().parent(),
        navAutoSlide = '<button class="playCarotte">'+options.textPlay+'</button><button class="stopCarotte">'+options.textPause+'</button>',
        navCarotte = parentSlideshow.find('.navCarotte'),
        paused = false;

      navCarotte.append(navAutoSlide);
      
      var playBtn = navCarotte.find('.playCarotte'),
          stopBtn = navCarotte.find('.stopCarotte');

      stopFct = function() {
        autoSlideShow = clearInterval(autoSlideShow);
      };
      
      playFct = function() {
        autoSlideShow = setInterval(function() {
          if (!paused) {
            $.fn.carotte.slide(slideshow, 'next', options.duration);
          }
        }, options.time);
      };
      
      //Slide
      playFct();
      
      //button to slide
      playBtn.bind('click', function(){
        playFct();
      });
      
      //button to stop slide
      stopBtn.bind('click', function(){
        stopFct();
      });

      if (options.pauseOnHover) {
        slideshow.hover(function() {
            paused = true;
          },
          function() {
            paused = false;
          }
        );
      }

    });
    
  };
  
})(jQuery, window, document);
