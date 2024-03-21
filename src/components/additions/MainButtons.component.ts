import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

import { path } from 'sage';

import { appStore } from '../../stores/app.store';

import { mainButtons } from '../../data/main-buttons.data';

@Component({
  selector: 'MainButtons',
  template: `
    <div class="list-page__main-buttons">
      <ul class="list flex margin-bottom-small" #mainButtonsListRef>
        <li *ngFor="let item of mainButtons">
          <OButton
            [name]="item.name"
            [theme]="item.theme"
            [icon]="item.icon"
            [square]="true"
            [large]="true"
            classes="margin-right-small"
            [onClick]="item.onClick"
            [extraButtonLabel]="
              !!item.extraButtonLabel && content[item.extraButtonLabel]
            "
          ></OButton>
        </li>
      </ul>
    </div>
  `,
})
export class MainButtons implements AfterViewChecked {
  get mainButtons() {
    return mainButtons.filter((x) => !(x.disabled && x.disabled()));
  }

  @ViewChild('mainButtonsListRef')
  mainButtonsListRef?: ElementRef<HTMLUListElement | null>;

  @Input() content: any;

  stageAdd() {
    path.set(['manage']);
  }

  ngAfterViewChecked() {
    appStore.mainButtonsListRef =
      this.mainButtonsListRef?.nativeElement ?? null;
  }
}
