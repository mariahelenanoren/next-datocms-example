import { request } from '../api';
import { ABOUTPAGE_QUERY } from './query';

export const getAboutpageData = async () => {
  const aboutpageData = await request({ query: ABOUTPAGE_QUERY });
  return aboutpageData;
};
