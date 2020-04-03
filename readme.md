<image src="app-icon.png" align="right" width="200px">

# Fancybox3 Image Gallery App for DNN (DotNetNuke)

A 2sxc / DNN App using the javascript lib [fancybox](https://github.com/fancyapps/fancybox)

## Installing the app

You can install the app straight forward with [this checklist](https://azing.org/2sxc/r/A1Usfevs)

## Customizing the app

### Data

The Fancybox3 Image Gallery App does not have any app settings but some app resources(labels) you can customize.

### Style

If you want to customize the CSS, you will usually follow the ["Create Custom Styles in a Standard 2sxc App" checklist](https://azing.org/2sxc/r/gg_aB9FD)

## Screenshots

Read more about it in the [App Catalog](https://2sxc.org/en/apps/app/gallery-app-using-fancybox)

## CSS Framework Detection

_Here you'll see how the content-templates switch between Bootstrap3 and Bootstrap4 templates_

Almost every view is implemented as Bootstrap4, but as one of the first lines you'll see:

```
@if(Connect.Koi.Koi.Is("bs3")) {
  @RenderPage("../bs3/Person/_some-file.cshtml")
  return;
}
```

This does the following

1. Ask Koi if it's using Bootstrap 3 (code 'bs3') using [Koi.Is(...)](https://connect-koi.net/components)
1. If it's a match, it will render the BS3 file and then return

So if it is Bootstrap3, then the rest of the view will not be rendered at all.

> If you start making changes and you're not using Bootstrap3 at all, you can also delete these lines!
