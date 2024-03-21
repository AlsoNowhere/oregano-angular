import { getItem } from './get-item.logic';
import { saveData } from './save-data.logic';

import { appStore } from '../stores/app.store';

import { Item } from '../models/Item.model';

export const cutItem = (index: number, item: Item) => {
  appStore.rootData.pasteItems.push(item);
  const currentItem = getItem();
  currentItem?.items.splice(index, 1);
  saveData();
};
