/** Loader function for our Fancybox Gallery 3 */
export function fancyboxGallery3() {
    /* Fancybox */
    if ($('.fancybox').fancybox) {
      $('.ga-fancybox').fancybox(<FancyBoxOptions>{
        loop: true,
        caption: function() {
          return $(this).find('figcaption').html();
        }
      });
    }
  
    /* Lazy - only if jQuery Animations exists */
    if (($('.lazy') as any).Lazy) {
      ($('.lazy') as any).Lazy({
        effect: 'fadeIn',
        effectTime: 200,
      });
    }
  }