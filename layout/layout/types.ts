import { IFooter } from '../../components/footer/types';
import { IHeader } from '../../components/header/types';

export interface ILayout {
  footer: IFooter;
  header: IHeader;
  children: JSX.Element | JSX.Element[];
}
