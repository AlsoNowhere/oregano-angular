import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OButton } from './Button.component';
import { Field } from './Field.component';

@NgModule({
  declarations: [OButton, Field],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [OButton, Field],
})
export class CommonComponentsModule {}
