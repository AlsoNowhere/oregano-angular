import { appStore } from '../stores/app.store';

import { Item } from '../models/Item.model';

import { IData } from '../interfaces/IData.interface';
import { path } from 'sage';

export const getItem = (
  url: Array<string> = path.get().slice(1),
  item = appStore.rootData
): Item | null => {
  if (item === null) return null;
  if (url.length === 0) return item as IData;
  const nextIndex = url.at(0);
  if (nextIndex === '' || nextIndex === undefined) return item;
  const nextItem = item.items[Number(nextIndex)];
  return getItem(url.slice(1), nextItem);
};
