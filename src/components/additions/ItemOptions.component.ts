import { Component, Input } from '@angular/core';

import { ItemAction } from '../../models/ItemAction.model';

import { itemActions } from '../../data/item-actions.data';
import { Item } from '../../models/Item.model';

@Component({
  selector: 'ItemOptions',
  template: `
    <ul class="list-page__item-options">
      <li *ngIf="showItemsNumber" class="relative">
        <span
          class="padded-small abso-lute mid-dle blueberry-text snow-text-shadow bold"
        >
          {{ itemsCount }}</span
        >
      </li>

      <li *ngIf="hasMessage" class="relative width height">
        <span class="fa fa-list absolute middle blueberry-text"></span>
      </li>

      <li *ngFor="let option of itemActions">
        <OButton
          theme="empty"
          [icon]="option.icon"
          [square]="true"
          [onClick]="passAction(option)"
        ></OButton>
      </li>
    </ul>
  `,
})
export class ItemOptions {
  @Input() showItemsNumber = false;
  @Input() itemsCount?: number;
  @Input() hasMessage = false;
  @Input({ required: true }) item: Item | null = null;
  @Input({ required: true }) itemIndex: number = -1;

  itemActions = itemActions;

  passAction(option: ItemAction) {
    return (event: Event) => {
      if (this.item === null) return;
      option.action({ event, item: this.item, index: this.itemIndex });
    };
  }
}
