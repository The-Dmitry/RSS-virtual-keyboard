import { Button } from './button';

export class Keyboard {
  buttonsList = new Map();

  constructor(language, buttons, parentNode) {
    this.language = language;
    this.buttons = buttons;
    this.parentNode = parentNode;
    this.isShift = false;
  }

  buildButtonList() {
    this.buttons.forEach(element => {
      let node = new Button(element, this.language);
      this.buttonsList.set(element.code, node);
      this.parentNode.append(node.buildNode());
    });
  }

  changeLanguage() {
    this.language = !this.language;
    this.updateButtons();
  }

  setShiftState() {
    this.isShift = !this.isShift;
    this.updateButtons();
  }

  updateButtons() {
    this.buttonsList.forEach((value) => value.updateButton(this.language, this.isShift));
  }

  getButtonValue(code) {
    let result = this.buttonsList.get(code);
    return result.isSymbol ? result.nodeValue : null;
  }
}
