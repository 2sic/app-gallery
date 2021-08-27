declare let Fancybox: any;

// This is only partial - if you want to see more, see https://fancyapps.com/docs/ui/fancybox/options
interface FancyboxOptions {
    groupAll: boolean;
    Thumbs: {
      autostart: boolean;
    }
    startIndex?: number;
    preload?: number;
    infinite?: boolean;
    autoFocus?: boolean;
}

(window as any).appGalleryV7 = {
    initFancybox: function initFancybox({ groupId, options } : { groupId: string, options: FancyboxOptions }) {
        console.log(groupId)
        Fancybox.bind(`[data-app-gallery-fancybox="${groupId}"]`, options);
    }
}