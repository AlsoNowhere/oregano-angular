import { getItem } from './get-item.logic';
import { saveData } from './save-data.logic';

import { appStore } from '../stores/app.store';

export const pasteItems = () => {
  const currentItem = getItem();
  currentItem?.items.push(...appStore.rootData.pasteItems);
  appStore.rootData.pasteItems.length = 0;
  saveData();
};
