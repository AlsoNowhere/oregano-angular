import { appStore } from '../stores/app.store';

import { IRootData } from '../interfaces/IRootData.interface';

import { storageKey } from '../data/constants.data';

const applyData = (data: IRootData) => {
  appStore.rootData = data;
};

export const loadData = () => {
  const data = localStorage.getItem(storageKey);
  if (data === null) return;
  let parsed: IRootData;
  try {
    parsed = JSON.parse(data);
    applyData(parsed);
  } catch (e) {
    console.warn(e);
  }
};
