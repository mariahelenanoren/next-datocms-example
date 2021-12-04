import { request } from '../api';
import { HOMEPAGE_QUERY } from './query';

export const getHomepageData = async () => {
  const homepageData = await request({ query: HOMEPAGE_QUERY });
  return homepageData;
};
