<image src="app-icon.png" align="right" width="200px">

# Gallery App V7 using Fancybox4 for Dnn ☢️ and Oqtane 🩸

_Important: V7 is new and Bootstrap4 only. Previous version 6.1 is on this branch: https://github.com/2sic/app-gallery/tree/v6-fancybox3_

A 2sxc / DNN App using the [fancybox4](https://fancyapps.com/) javascript library.

## Install the app

You can install the app with the ["Installing Gallery Fancybox4" checklist](https://azing.org/2sxc/r/WLu6KUI4)

## Customize the app

### Configuration (Settings, Resources)

Gallery App Fancybox7 uses the new, [standard Settings-System in 2sxc](http://r.2sxc.org/settings) to configure it. It also has app resources (i18n labels) you can customize.

### Style

If you want to customize the CSS, you will usually follow the ["Create Custom Styles in a Standard 2sxc App" checklist](https://azing.org/2sxc/r/Lu5SDBqU)

## Screenshots

Read more about it in the [App Catalog](https://2sxc.org/en/apps/app/gallery-app-v6-using-fancybox-3-hybrid-for-dnn-and-oqtane)


---

## History

### Version 6

Version 6 is found here: https://github.com/2sic/app-gallery/tree/v6-fancybox3

* Updated to conventions of 2sxc 12.0 as a Hybrid Dnn/Oqtane App based on [this checklist](https://azing.org/2sxc/r/m0iSLifK)

### Version 6.1 

1. Updated to features and conventions of 2sxc 12.03 based on [this checklist](https://azing.org/2sxc/r/KwXMhp8h)
1. Now uses the new `Settings.WebResources` and `Settings.Images` for global configuration
1. Renamed folder to enable side-by-side installation with older versions
1. Reset the GUID so it has a new ID now - allowing side-by-side installation with older versions
1. Dropped BS3 support - if anybody needs this, we recommend V5
1. Removed duplicate code, cleaned up everything
1. Albums can now also show Masonry-style galleries inside


### Version 7

1. Switched to Fancybox4
1. Dropped jQuery
1. Added turnOn to activate JS cleanly
1. Now uses dependencies from Settings.WebResources
1. Complete clean up / simplification of code files
1. Ensure that multiple galleries don't mix images in lightbox mode
1. Lots of documentation / comments everywhere