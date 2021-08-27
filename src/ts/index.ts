declare let Fancybox: any;

(window as any).appGalleryV7 = {
    initFancybox: function initFancybox(module: any) {
        Fancybox.bind(`[data-app-gallery-fancybox="gallery-${module.moduleId}"]`, module.options);        
    }
}