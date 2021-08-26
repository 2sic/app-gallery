declare let Fancybox: any;

(window as any).appFb = {
    initFancybox: function initFancybox(module: any) {
        Fancybox.bind(`[data-app-gallery-fancybox="gallery-${module.moduleId}"]`, module.options);        
    }
}