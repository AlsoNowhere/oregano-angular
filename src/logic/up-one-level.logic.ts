import { path } from 'sage';

import { listStore } from '../stores/list.store';

export const upOneLevel = () => {
  path.set(path.get().slice(0, path.get().length - 1));
  listStore.depthIndexing.pop();
};
