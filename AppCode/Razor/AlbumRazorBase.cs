using AppCode.Data;
using System.Linq;
using System.Collections.Generic;
using ToSic.Sxc.Adam;
using ToSic.Razor.Blade;

namespace AppCode.Razor
{
  /// <summary>
  /// Base Class for Razor Views which have a typed App but don't use the Model or use the typed MyModel.
  /// </summary>
  public abstract class AlbumRazorBase : AppRazor<object>
  {
    /// <summary>
    /// Returns the images, sorted by the passed setting
    /// </summary>
    public IEnumerable<IFile> GetImagesSorted(Album album)
    {
      var images = album.Folder("Images").Files;

      switch ((string)album.Presentation.String("SortMode"))
      {
        case "File asc":
          images = images.OrderBy(c => c.FullName);
          break;
        case "File desc":
          images = images.OrderByDescending(c => c.FullName);
          break;
        case "Title asc":
          images = images.OrderBy(c => !c.HasMetadata)
                      .ThenBy(c => !c.HasMetadata ? "" : c.Metadata.String("Title"));
          break;
        case "Title desc":
          images = images.OrderBy(c => !c.HasMetadata)
                      .ThenByDescending(c => !c.HasMetadata ? "" : c.Metadata.String("Title"));
          break;
        case "Upload asc":
          images = images.OrderBy(c => c.Modified);
          break;
        case "Upload desc":
          images = images.OrderByDescending(c => c.Modified);
          break;
      }
      return images;
    }


    public IHtmlTag GetFancyboxData( IFile pic, Album album, string picTitle)
    {
      // Get image title from metadata - make sure it has no HTML inside
      var picDescr = pic.Metadata.String("DescriptionExtended");

      // Build the Caption for the Lightbox - as a data-caption attribute with HTML encoded
      var lightboxCaption = album.Presentation.Bool("ShowImageTitle") && Text.Has(picTitle)
        ? Tag.H6(picTitle) + picDescr
        : null;

      // Generate the picture object for telling the lightbox the src, srcset etc.
      var lightboxPic = Kit.Image.Picture(pic, settings: "Lightbox");

      return Kit.HtmlTags.RawHtml(
        Kit.HtmlTags.Attr("data-srcset", lightboxPic.SrcSet),
        Kit.HtmlTags.Attr("data-sizes", lightboxPic.Sizes),
        Kit.HtmlTags.Attr("data-src", lightboxPic.Src),
        Kit.HtmlTags.Attr("data-preload", false),
        Kit.HtmlTags.Attr("data-caption", lightboxCaption)
      );
    }

  }

}
