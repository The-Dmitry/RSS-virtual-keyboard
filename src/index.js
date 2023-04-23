import style from './scss/style.scss';
import { buttonsData } from './js/buttonsData';
import { Keyboard } from './js/keyboard';

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const parent = document.createElement('div');
parent.className = 'keyboard';

const textArea = document.createElement('textarea');
textArea.className = 'text-area';

wrapper.append(textArea, parent);
document.body.append(wrapper);

const test = new Keyboard(false, buttonsData, parent);
test.buildButtonList();

function buttonAction(code, isClick) {
  console.log(code);
  if (isClick) {
    if (code === 'ControlLeft') {
      test.changeLanguage();
    }
    if (code === 'ShiftLeft') {
      test.setShiftState();
    }
    let char = test.getButtonValue(code);
    if (char) {
      textArea.value += char;
    }
  } else {
    test.removeActiveState(code);
  }
}

document.addEventListener('keydown', (e)=> {
  e.preventDefault();
  buttonAction(e.code, true);
});

parent.addEventListener('mousedown', (e)=> {
  const target = e.target;
  buttonAction(target.getAttribute('data-code'), true);
  target.addEventListener('mouseup', ()=> {
    buttonAction(target.getAttribute('data-code'), false);
  });
  target.addEventListener('mouseleave', ()=> {
    buttonAction(target.getAttribute('data-code'), false);
    target.mouseup = null;
    target.mouseleave = null;
  });
});

document.addEventListener('keyup', (e)=> {
  e.preventDefault();
  buttonAction(e.code, false);
});
