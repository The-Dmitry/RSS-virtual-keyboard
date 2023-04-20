export class Button {
  constructor({
    isSymbol, code, key, shift
  }, language) {
    this.isSymbol = isSymbol;
    this.nodeValue = null;
    this.node = null;
    this.language = language;
    this.code = code;
    this.ru = key.ru;
    this.eng = key.eng;
    this.shiftRu = shift.ru;
    this.shiftEng = shift.eng;
  }

  buildNode() {
    const node = document.createElement('button');
    node.className = `button ${this.code.toLowerCase()}`;
    this.nodeValue = this.setLanguage();
    node.textContent = this.nodeValue;
    this.node = node;
    return this.node;
  }

  setLanguage() {
    return this.language ? this.ru : this.eng;
  }

  updateButton(lang, isShift) {
    this.language = lang;
    if (!this.language) {
      if (isShift) {
        this.nodeValue = this.shiftEng ? this.shiftEng : this.eng.toUpperCase();
      } else {
        this.nodeValue = this.eng;
      }
    }
    if (this.language) {
      if (isShift) {
        this.nodeValue = this.shiftRu ? this.shiftRu : this.ru.toUpperCase();
      } else {
        this.nodeValue = this.ru;
      }
      // this.nodeValue = isShift ? this.shiftRu : this.ru.toLowerCase();
    }
    this.node.textContent = this.nodeValue;
  }
}
