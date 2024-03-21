export class MainButton {
  name: string;
  title: string;
  icon: string;
  theme: string;
  disabled: (() => boolean) | false;
  condition: (() => boolean) | true;
  // extraButtonLabel?: () => string;
  extraButtonLabel?: string;
  onClick: () => void;

  constructor(
    name: string,
    title: string,
    icon: string,
    theme: string,
    onClick: () => void,
    options: {
      disabled?: () => boolean;
      condition?: () => boolean;
      // extraButtonLabel?: () => string;
      extraButtonLabel?: string;
    } = {}
  ) {
    this.name = name;
    this.title = title;
    this.icon = icon;
    this.theme = theme;
    this.onClick = onClick;

    this.disabled =
      options.disabled instanceof Function ? options.disabled : false;
    this.condition =
      options.condition instanceof Function ? options.condition : true;
    this.extraButtonLabel = options.extraButtonLabel;
  }
}
