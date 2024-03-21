import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CommonComponentsModule } from '../components/common/Common.module';

import { App } from '../components/App.component';
import { Header } from '../components/structure/Header.component';

import { List } from '../components/pages/List.component';
import { Manage } from '../components/pages/Manage.component';

import { MainButtons } from '../components/additions/MainButtons.component';
import { Breadcrumbs } from '../components/additions/BreadCrumbs.component';
import { ItemOptions } from '../components/additions/ItemOptions.component';

import { AltButtons } from '../components/additions/AltButtons.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    CommonComponentsModule,
  ],
  declarations: [
    App,
    Header,

    List,
    Manage,

    MainButtons,
    Breadcrumbs,
    ItemOptions,

    AltButtons,
  ],
  bootstrap: [App],
})
export class AppModule {}
