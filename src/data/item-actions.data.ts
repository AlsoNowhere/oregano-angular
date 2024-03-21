import { path } from 'sage';

import { cutItem } from '../logic/cut-item.logic';
import { deleteItem } from '../logic/delete-item.logic';

import { manageStore } from '../stores/manage.store';

import { ItemAction } from '../models/ItemAction.model';

export const itemActions = [
  new ItemAction('pencil', ({ event, index, item }) => {
    event.stopPropagation();
    manageStore.editItem = item;
    path.set(['manage', ...path.get().slice(1), index.toString()]);
  }),
  new ItemAction('scissors', ({ event, index, item }) => {
    event.stopPropagation();
    cutItem(index, item);
  }),
  new ItemAction('trash-o', ({ event, index }) => {
    event.stopPropagation();
    deleteItem(index);
  }),
];
