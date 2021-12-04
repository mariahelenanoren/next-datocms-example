export const ABOUTPAGE_QUERY = `{
  about {
    title
    image {
      responsiveImage {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
    body {
      value
    }
  }
}`;
