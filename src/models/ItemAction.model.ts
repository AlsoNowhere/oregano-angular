import { Item } from './Item.model';

interface IOptions {
  event: Event;
  item: Item;
  index: number;
}

export class ItemAction {
  icon: string;
  action: (arg: IOptions) => void;

  constructor(icon: string, action: (args: IOptions) => void) {
    this.icon = icon;
    this.action = action;
  }
}
