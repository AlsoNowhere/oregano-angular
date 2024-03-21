import { Component } from '@angular/core';

import { path, toast, wait } from 'sage';

import { upToRoot } from '../../logic/up-to-root.logic';

import { appStore } from '../../stores/app.store';

import { IData } from '../../interfaces/IData.interface';

@Component({
  selector: 'Breadcrumbs',
  template: `<ul class="breadcrumbs">
    <li *ngFor="let item of crumbs; let i = index" class="breadcrumbs__item">
      <span
        *ngIf="item.isLink"
        class="breadcrumbs__item-link"
        (click)="goToLink(i)"
      >
        {{ item.content }}
      </span>
      <span *ngIf="!item.isLink">{{ item.content }}</span>
    </li>
  </ul>`,
})
export class Breadcrumbs {
  get crumbs() {
    if (appStore.rootData === null) return [];
    const url = path.get();
    if (url.length === 1) return [{ content: ' ', isLink: false }];
    let data: IData = appStore.rootData;
    const crumbs = url.reduce((a, b, i) => {
      if (i === 0) {
        a.push({ content: data.title, isLink: true });
        return a;
      }
      data = data.items[Number(b)];
      if (data === undefined) {
        toast('Unable to find this item, returning to home.', 'tomato');
        (async () => {
          await wait();
          upToRoot();
        })();
        return [];
      }
      a.push(
        { content: '/', isLink: false },
        { content: data.title, isLink: i !== url.length - 1 }
      );
      return a;
    }, [] as Array<{ content: string; isLink: boolean }>);
    return crumbs;
  }

  goToLink(_index: number) {
    const url = path.get();
    const index = _index / 2;
    path.set(url.slice(0, index + 1));
  }
}
