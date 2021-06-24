import { monkeyPatchjQueryFade } from './jquery-fade-in';

// Work around a limitation of jQuery if it's installed in slim mode
// because FancyBox will access this jQuery feature
$(monkeyPatchjQueryFade);
