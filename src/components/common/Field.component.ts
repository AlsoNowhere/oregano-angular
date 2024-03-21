import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { TFieldTypes } from '../../types/TFieldTypes.type';

@Component({
  selector: 'Field',
  template: `<label>
    <span [class.required]="required">{{ label }}</span>
    <input
      *ngIf="type === 'text'"
      [name]="name"
      [formControl]="control"
      (input)="onInput()"
      [required]="required"
      #fieldRef
    />
    <textarea
      *ngIf="type === 'textarea'"
      [name]="name"
      [formControl]="control"
      (input)="onInput()"
      [style]="styles"
      [required]="required"
      #fieldRef
    ></textarea>
  </label>`,
})
export class Field {
  @Input() type: TFieldTypes = 'text';
  @Input() name = '';
  @Input() label?: string;
  @Input() control = new FormControl('');
  @Input() styles = '';
  @Input() required = false;

  @Output() setValue = new EventEmitter<string>();

  @ViewChild('fieldRef') fieldRef?: ElementRef<HTMLInputElement | null>;

  onInput() {
    this.setValue.emit(this.fieldRef?.nativeElement?.value);
  }
}
