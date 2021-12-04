import { ResponsiveImageType, StructuredTextDocument } from 'react-datocms';

export interface IAbout {
  title: string;
  image: {
    responsiveImage: ResponsiveImageType;
  };
  body: {
    value: StructuredTextDocument;
  };
}
