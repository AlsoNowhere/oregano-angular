import { Item } from '../models/Item.model';

interface IManageStore {
  editItem: Item | null;
}

export const manageStore: IManageStore = {
  editItem: null,
};
