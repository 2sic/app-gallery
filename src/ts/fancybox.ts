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
  }