import { fancyboxGallery3 } from './fancybox';
import { monkeyPatchjQueryFade } from './jquery-fade-in';

$(monkeyPatchjQueryFade);

// Add to window, so that each load of the module can call this
// This is important, because the script may have already been loaded when the 
// content is gradually being added
(window as any).appFancyboxGallery3Init = fancyboxGallery3;