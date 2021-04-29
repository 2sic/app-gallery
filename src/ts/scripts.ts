/** 
 * In case jQuery slim is loaded, fadeIn is missing and would cause errors
 * So we check for that and just put an empty function there
 */
function monkeyPatchjQueryFade() {
  const jQueryProto = ($() as any).__proto__;
  if(!jQueryProto.fadeIn)
    jQueryProto.fadeIn = function () { /* do nothing */ }
}

/** Loader function for our Fancybox Gallery 3 */
function fancyboxGallery3() {
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

$(monkeyPatchjQueryFade);

// Add to window, so that each load of the module can call this
// This is important, because the script may have already been loaded when the 
// content is gradually being added
(window as any).appFancyboxGallery3Init = fancyboxGallery3;