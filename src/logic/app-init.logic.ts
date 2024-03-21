import { path } from 'sage';

import { loadData } from './load-data.logic';

export const appInit = async () => {
  const [url] = path.get();
  if (url === undefined) {
    path.set(['list']);
  }
  loadData();
};
