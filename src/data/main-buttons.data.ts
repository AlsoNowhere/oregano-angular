import { path } from 'sage';

import { upOneLevel } from '../logic/up-one-level.logic';
import { upToRoot } from '../logic/up-to-root.logic';
import { pasteItems } from '../logic/paste-items.logic';
import { getItem } from '../logic/get-item.logic';

import { listStore } from '../stores/list.store';
import { appStore } from '../stores/app.store';
import { manageStore } from '../stores/manage.store';

import { MainButton } from '../models/MainButton.model';

export const mainButtons = [
  new MainButton('Add', 'Add item', 'plus', 'blueberry', function () {
    path.set(['manage', ...path.get().slice(1)]);
    listStore.depthIndexing = path.get().slice(1);
  }),
  new MainButton('Edit', 'Edit this item', 'pencil', 'apple', function () {
    const currentItem = getItem();
    manageStore.editItem = currentItem;
    path.set(['manage', ...path.get().slice(1)]);
  }),
  new MainButton('Level up', 'Up one level', 'level-up', 'snow', upOneLevel, {
    disabled: () => path.get().length === 1,
  }),
  new MainButton('Up to root', 'Up to root', 'home', 'orange', upToRoot, {
    disabled: () => path.get().length === 1,
  }),

  new MainButton('Paste', 'Paste items', 'paint-brush', 'orange', pasteItems, {
    disabled: () => {
      return appStore.rootData?.pasteItems.length === 0;
    },
    extraButtonLabel: 'pasteItems',
  }),
];
