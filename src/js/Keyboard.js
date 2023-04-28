import { Button } from './button';

export class Keyboard {
  buttonsList = new Map();

  constructor(language, buttons, parentNode) {
    this.language = language;
    this.buttons = buttons;
    this.parentNode = parentNode;
    this.isUppercase = false;
    this.isCaps = false;
    this.isShift = false;
    this.isCtrl = false;
    this.isAlt = false;
    this.shortcut = new Map();
  }

  buildButtonList() {
    this.buttons.forEach(element => {
      const node = new Button(element, this.language);
      this.buttonsList.set(element.code, node);
      this.parentNode.append(node.buildNode());
    });
  }

  changeLanguage() {
    this.language = !this.language;
    localStorage.setItem('language', this.language);
    this.updateButtons();
  }

  switchUppercaseState() {
    this.isUppercase = !this.isUppercase;
    this.updateButtons();
  }

  setMouseShiftState(node) {
    this.isShift = !this.isShift;
    node.classList.toggle('clicked');
    this.switchUppercaseState();
  }

  setKeyboardShiftState(node) {
    this.isShift = true;
    node.classList.add('clicked');
    if (this.isCaps) {
      this.isUppercase = false;
    } else {
      this.isUppercase = true;
    }
    this.updateButtons();
  }

  removeKeyboardShiftState(node) {
    this.isShift = false;
    node.classList.remove('clicked');
    if (this.isCaps) {
      this.isUppercase = true;
    } else {
      this.isUppercase = false;
    }
    this.updateButtons();
  }

  setCaps(code) {
    this.isCaps = !this.isCaps;
    this.getButton(code).node.classList.toggle('clicked');
    this.isUppercase = !this.isUppercase;
    this.updateButtons();
  }

  updateButtons() {
    this.buttonsList.forEach((value) => value.updateButton(this.language, this.isUppercase));
  }

  getButtonValue(code) {
    const button = this.buttonsList.get(code);
    button.setActiveState();
    return button.isSymbol ? button.nodeValue : null;
  }

  getButton(code) {
    return this.buttonsList.get(code);
  }

  addMouseShortcut(name, code) {
    if (this.shortcut.has(name)) {
      const temp = this.shortcut.get(name);
      temp.setInActiveState();
      this.shortcut.delete(name);
      return;
    }
    const button = this.getButton(code);
    this.shortcut.set(name, button);
    button.setActiveState();
    if (this.shortcut.has('alt') && this.shortcut.has('ctrl')) {
      this.changeLanguage();
      this.clearShortcut();
    }
  }

  addKeyboardShortcut(name, code) {
    if (this.shortcut.has(name)) {
      return;
    }
    const button = this.getButton(code);
    this.shortcut.set(name, button);
    button.setActiveState();
    if (this.shortcut.has('alt') && this.shortcut.has('ctrl')) {
      this.changeLanguage();
      this.clearShortcut();
    }
  }

  clearShortcut() {
    this.shortcut.forEach(el => el.setInActiveState());
    this.shortcut.clear();
  }
}
