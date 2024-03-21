import { IRootData } from '../interfaces/IRootData.interface';

import { defaultData } from '../data/default.data';

interface IAppStore {
  rootData: IRootData;
  mainButtonsListRef: HTMLUListElement | null;
}

export const appStore: IAppStore = {
  rootData: defaultData,
  mainButtonsListRef: null,
};
