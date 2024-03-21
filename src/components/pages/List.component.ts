import {
  Component,
  ComponentRef,
  ContentChildren,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { path } from 'sage';

import { getItem } from '../../logic/get-item.logic';

import { listStore } from '../../stores/list.store';
import { MainButtons } from '../additions/MainButtons.component';
import { appStore } from '../../stores/app.store';
import { colours } from '../../data/colours.data';

@Component({
  selector: 'List',
  template: `<div class="list-page">
    <ng-template #pasteItems>
      <span>{{ pasteLength }}</span>
    </ng-template>

    <MainButtons [content]="mainButtonContent" />

    <div class="list-page__container">
      <div class="list-page__container-items">
        <Breadcrumbs />

        <h2 class="page-title reset-margin">{{ currentTitle }}</h2>

        <div class="list-page__message">
          {{ currentMessage }}
        </div>

        <ul class="list list-page__list" mRef="listElementRef">
          <li
            *ngFor="let item of list; let i = index"
            class="list-page__item"
            (click)="selectItem(i)"
            style="background-color: {{ item.colour }};"
          >
            <div class="list-page__item-container">
              <div class="list-page__item-title">
                <p
                  class="list-page__item-title-p"
                  style="color: {{ getTextColour(item.colour) }};"
                >
                  {{ item.title }}
                </p>
              </div>
              <ItemOptions [item]="item" [itemIndex]="i"></ItemOptions>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>`,
})
export class List implements OnInit {
  @ViewChild('pasteItems', { static: true }) pasteItems?: TemplateRef<any>;

  get pasteLength() {
    return appStore.rootData.pasteItems.length;
  }

  get currentTitle() {
    const item = getItem(path.get().slice(1));
    if (item === null) return '';
    return item.title;
  }

  get currentMessage() {
    const item = getItem(path.get().slice(1));
    if (item === null) return '';
    return item.message;
  }

  get list() {
    const item = getItem(path.get().slice(1));
    if (item === null) return [];
    return item.items;
  }

  selectItem(index: number) {
    const nextIndex = index + '';
    listStore.depthIndexing.push(nextIndex);
    path.set([...path.get(), nextIndex]);
  }

  getTextColour(itemColour: string) {
    const colour = colours.find((x) => x.colour === itemColour);
    return colour?.textColour ?? colours[0].textColour;
  }

  mainButtonContent = {};

  ngOnInit() {
    this.mainButtonContent = {
      pasteItems: this.pasteItems,
    };
  }
}
