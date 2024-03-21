import { getItem } from './get-item.logic';
import { saveData } from './save-data.logic';

export const deleteItem = (index: number) => {
  const currentItem = getItem();
  currentItem?.items.splice(index, 1);
  saveData();
};
