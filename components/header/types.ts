export interface IHeader {
  navigationLinks: NavigationLink[];
}

interface NavigationLink {
  title: string;
  slug: string;
}
