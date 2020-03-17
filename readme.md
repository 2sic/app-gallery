# Blueimp Gallery App 3.0 for DNN (DotNetNuke)
A 2sxc / DNN App based on the awesome [blueimp Gallery](https://github.com/blueimp/Gallery)

## Screenshots
Read more about it in the [App Catalog for the Blueimp App](http://2sxc.org/en/apps/app/blueimp-gallery-slider-2-app-for-dnn-dotnetnuke)

![Screenshots of the BlueImp Gallery App 3](http://2sxc.org/Portals/0/adam/AppCatalog/2_FFwkdvhEusRwnxeddteQ/ExternalResources/Store%20Collage%202016-04-20.png)

## CSS Framework Detection

_Here you'll see how the content-templates switch between Bootstrap3 and Bootstrap4 templates_

Almost every view is implemented as Bootstrap4, but as one of the first lines you'll see:

```
@if(Connect.Koi.Koi.Is("bs3")) {
  @RenderPage("../bs3/Person/_some-file.cshtml")
  return;
}
```

This does the following

1. Ask Koi if it's using Bootstrap 3 (code 'bs3') using [Koi.Is(...)](https://connect-koi.net/components)
1. If it's a match, it will render the BS3 file and then return

So if it is Boostrap3, then the rest of the view will not be rendered at all. 

> If you start making changes and you're not using Bootstrap3 at all, you can also delete these lines!
