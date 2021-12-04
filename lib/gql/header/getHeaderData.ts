import { request } from '../api';
import { HEADER_QUERY } from './query';

export const getHeaderData = async () => {
  const headerData = await request({ query: HEADER_QUERY });
  return headerData;
};
