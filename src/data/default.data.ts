import { IRootData } from '../interfaces/IRootData.interface';

import { colours } from './colours.data';

export const defaultData: IRootData = {
  root: true,
  timestamp_root: Date.now(),
  title: 'Oregano',
  message: '',
  colour: colours[0].colour,
  actions: [],
  items: [],
  index: 0,
  createdAt: Date.now(),
  edits: [],
  pasteItems: [],
  // undoItems: [],
  itemIndex: 1,
};
