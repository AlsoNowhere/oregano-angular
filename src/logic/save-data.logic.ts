import { appStore } from '../stores/app.store';

import { storageKey } from '../data/constants.data';

export const saveData = () => {
  const data = JSON.stringify(appStore.rootData);
  localStorage.setItem(storageKey, data);
};
