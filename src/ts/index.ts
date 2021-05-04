import { fancyboxGallery3 } from './fancybox';
import { activateLazyLoad } from './lazyload';
import { monkeyPatchjQueryFade } from './jquery-fade-in';

/** activate all the content-app features */
function activateGalleryAll() {
  console.log('activateGalleryAll')
  fancyboxGallery3();
  activateLazyLoad();
}

$(monkeyPatchjQueryFade);

// Add window.appContent.activateAll() 
// so it can be called from the HTML when content re-initializes dynamically
const win2GalExt = (window as any);
const appG = win2GalExt.appGallery = win2GalExt.appGallery || {};
appG.activateGalleryAll = appG.activateGalleryAll || activateGalleryAll;

// If loaded the first time on a dynamic page, activate automatically
// Later reloads will need to call the activateAll from the reloaded content
$(activateGalleryAll);