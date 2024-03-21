import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { styles, wait } from 'sage';

import { backToList } from '../../logic/back-to-list.logic';
import { getItem } from '../../logic/get-item.logic';
import { saveData } from '../../logic/save-data.logic';

import { manageStore } from '../../stores/manage.store';
import { appStore } from '../../stores/app.store';

import { Item } from '../../models/Item.model';

import { colours } from '../../data/colours.data';

@Component({
  selector: 'Manage',
  template: `<section class="constrain centred padding-bowl-large">
    <form
      class="form manage-form"
      autocomplete="off"
      (submit)="onSubmit($event)"
      #manageFormRef
    >
      <h2>{{ saveButtonLabel }} item</h2>

      <div class="flex">
        <div class="grid-9 padded-right-small">
          <Field
            name="title"
            label="Title"
            [control]="title"
            [required]="true"
          ></Field>
          <Field
            type="textarea"
            name="message"
            label="Message"
            [control]="message"
            [styles]="messageStyles"
          ></Field>
        </div>
        <div class="grid-3 padding-left">
          <fieldset>
            <legend class="fieldset__legend">Colour</legend>
            <ul class="list flex">
              <li *ngFor="let item of colours" class="margin-right-small">
                <div>
                  <label
                    class="width height round"
                    style="box-shadow: inset 0 0 2px 2px {{ item.colour }};"
                  >
                    <input
                      type="radio"
                      name="colour"
                      [value]="item.colour"
                      [formControl]="colour"
                    />
                  </label>
                </div>
              </li>
            </ul>
          </fieldset>
        </div>
      </div>

      <div>
        <OButton
          type="submit"
          [theme]="saveButtonTheme"
          [label]="saveButtonLabel"
          classes="margin-right-small padded-small"
          [large]="true"
        ></OButton>
        <OButton
          theme="smoke"
          label="Cancel"
          classes="padded-small"
          [large]="true"
          [onClick]="cancel"
        >
        </OButton>
      </div>
    </form>
  </section>`,
})
export class Manage implements OnInit {
  title = new FormControl('');
  message = new FormControl('');
  colour = new FormControl('');

  messageStyles = styles({ height: '23rem', resize: 'none' });

  colours = colours;

  saveButtonTheme = 'blueberry';
  saveButtonLabel = 'Add';

  @ViewChild('manageFormRef')
  manageFormRef?: ElementRef<HTMLFormElement | null>;

  cancel() {
    manageStore.editItem = null;
    backToList();
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const title = this.title.value;
    const message = this.message.value || '';
    const colour = this.colour.value || colours[0].colour;

    // ** Checked required field.
    if (title === null || title === '') return;

    const currentItem = getItem();
    if (currentItem === null) return;

    const isAdd = manageStore.editItem === null;

    // ** Add
    if (isAdd) {
      const newItem = new Item(title, message, colour);
      currentItem.items.push(newItem);
    }
    // ** Edit
    else {
      if (manageStore.editItem !== null) {
        manageStore.editItem.title = title;
        manageStore.editItem.message = message;
        manageStore.editItem.colour = colour;
      }
      manageStore.editItem = null;
    }

    saveData();

    this.cancel();

    if (isAdd) {
      (async () => {
        await wait();
        const { mainButtonsListRef } = appStore;
        if (!(mainButtonsListRef instanceof HTMLUListElement)) return;
        const addButton = mainButtonsListRef.querySelector('[name="Add"]');
        (addButton as HTMLButtonElement)?.focus();
      })();
    }
  }

  ngOnInit() {
    (async () => {
      await wait();

      // ** Add
      if (manageStore.editItem === null) {
        this.saveButtonTheme = 'blueberry';
        this.saveButtonLabel = 'Add';
        this.title.setValue('');
        this.message.setValue('');
        this.colour.setValue(colours[0].colour);
      }
      // ** Edit
      else {
        this.saveButtonTheme = 'apple';
        this.saveButtonLabel = 'Edit';
        this.title.setValue(manageStore.editItem.title);
        this.message.setValue(
          manageStore.editItem.message instanceof Array
            ? ''
            : manageStore.editItem.message
        );
        this.colour.setValue(manageStore.editItem.colour);
      }

      const elements = this.manageFormRef?.nativeElement?.elements;

      if (!elements) return;

      const titleElementRef = Array.from(elements)
        .filter((x) => x instanceof HTMLInputElement)
        .find((x) => (x as HTMLInputElement).name === 'title');

      if (titleElementRef instanceof HTMLInputElement) {
        titleElementRef?.focus?.();
      }
    })();
  }
}
