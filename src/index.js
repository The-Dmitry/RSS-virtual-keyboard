import style from './scss/style.scss'
import { buttonsData } from './js/buttonsData';
// import { Button } from './js/button';
import { Keyboard } from './js/keyboard';

const parent = document.createElement('div');
parent.className = 'keyboard';
document.body.append(parent);

const test = new Keyboard(false, buttonsData, parent);
test.buildButtonList();

document.addEventListener('keydown', function (e) {
  if (e.code === 'ControlLeft') {
    test.changeLanguage();
  }
  if (e.code === 'ShiftLeft') {
    test.setShiftState();
  }
  let result = test.getButtonValue(e.code);
  if (result) {
    console.log(result);
  }
});
// console.log(test);
