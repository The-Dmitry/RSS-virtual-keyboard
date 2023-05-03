export default class Button {
  constructor({
    isSymbol, code, key, shift,
  }, language) {
    this.isSymbol = isSymbol;
    this.nodeValue = null;
    this.node = null;
    this.code = code;
    this.ru = key.ru;
    this.eng = key.eng;
    this.shiftRu = shift.ru;
    this.shiftEng = shift.eng;
    this.lang = language;
  }

  buildNode() {
    const node = document.createElement('button');
    node.className = `button ${this.code.toLowerCase()}`;
    this.node = node;
    node.setAttribute('data-code', this.code);
    this.updateButton(this.lang, false);
    return this.node;
  }

  setLanguage() {
    return this.language ? this.ru : this.eng;
  }

  updateButton(lang, isShift) {
    if (!lang) {
      if (isShift) {
        this.nodeValue = this.shiftEng ? this.shiftEng : this.eng.toUpperCase();
      } else {
        this.nodeValue = this.eng;
      }
    }
    if (lang) {
      if (isShift) {
        this.nodeValue = this.shiftRu ? this.shiftRu : this.ru.toUpperCase();
      } else {
        this.nodeValue = this.ru;
      }
    }
    this.node.innerHTML = this.nodeValue;
  }

  setActiveState() {
    this.node.classList.add('clicked');
  }

  setInActiveState() {
    this.node.classList.remove('clicked');
  }
}
