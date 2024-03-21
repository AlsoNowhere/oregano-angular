import { Component } from '@angular/core';

import { backToList } from '../../logic/back-to-list.logic';

@Component({
  selector: 'AltButtons',
  template: `
    <div class="list-page__main-buttons">
      <OButton
        o-OButton
        theme="smoke"
        label="Cancel"
        [large]="true"
        (click)="backToList()"
      ></OButton>
    </div>
  `,
})
export class AltButtons {
  backToList = backToList;
}
