export class Colour {
  colour: string;
  textColour: string;

  constructor(colour: string, textColour = '#fff') {
    this.colour = colour;
    this.textColour = textColour;
  }
}
