import { AfterContentInit, Component, Input } from '@angular/core';

@Component({
  selector: 'OButton',
  template: `<ng-container *ngIf="isValid">
    <button
      [type]="type"
      [name]="name"
      class="{{ theme }} {{ classes }}"
      [class.square]="square"
      [class.large]="large"
      (click)="onClick?.($event)"
    >
      <span [class]="getIcon">{{ label }}</span>
      <ng-container *ngTemplateOutlet="extraButtonLabel"></ng-container>
    </button>
  </ng-container>`,
})
export class OButton implements AfterContentInit {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() name?: string;
  @Input() theme = 'snow';
  @Input() icon?: string;
  @Input() label?: string;
  @Input() classes = '';
  @Input() square?: true;
  @Input() large?: true;
  @Input() onClick?: (event: Event) => void;
  @Input() extraButtonLabel?: any;

  ready = false;

  get getIcon() {
    return !!this.icon ? `fa fa-${this.icon}` : undefined;
  }

  get isValid() {
    return this.ready;
  }

  ngAfterContentInit(): void {
    this.ready = true;
  }
}
