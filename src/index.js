import './scss/style.scss';
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

const lang = JSON.parse(localStorage.getItem('language'));

const keyboard = new Keyboard(lang, buttonsData, parent);
keyboard.buildButtonList();

function buttonAction(code, isClick) {
  if (isClick) {
    // if (code === 'ControlLeft') {
    //   keyboard.changeLanguage();
    // }
    // if (code === 'ShiftLeft') {
    //   keyboard.setShiftState();
    // }
    let char = keyboard.getButtonValue(code);
    if (char) {
      textArea.value += char;
    }
  } else {
    keyboard.getButton(code).setInActiveState();
  }
  textArea.focus();
}

parent.addEventListener('mousedown', (e)=> {
  const code = e.target.getAttribute('data-code');
  // console.log(code);
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    keyboard.setMouseShiftState(e.target);
    return;
  }
  if (code === 'ControlLeft' || code === 'ControlRight') {
    keyboard.addMouseShortcut('ctrl', code);
    return;
  }
  if (code === 'AltLeft' || code === 'AltRight') {
    keyboard.addMouseShortcut('alt', code);
    return;
  }
  if (code === 'CapsLock') {
    keyboard.setCaps(code);
    return;
  }
  keyboard.clearShortcut();
  buttonAction(code, true);
  e.target.addEventListener('mouseup', ()=> {
    buttonAction(code, false);
  });
  e.target.addEventListener('mouseleave', ()=> {
    buttonAction(code, false);
    e.target.mouseup = null;
    e.target.mouseleave = null;
  });
});

document.addEventListener('keydown', (e)=> {
  const code = e.code;
  console.log(code);
  if (code === 'F12') {
    return;
  }
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    keyboard.setKeyboardShiftState(keyboard.getButton(code).node);
    return;
  }
  e.preventDefault();
  if (code === 'ControlLeft' || code === 'ControlRight') {
    keyboard.addKeyboardShortcut('ctrl', code);
    return;
  }
  if (code === 'AltLeft' || code === 'AltRight') {
    keyboard.addKeyboardShortcut('alt', code);
    return;
  }
  if (code === 'CapsLock') {
    keyboard.setCaps(code);
    return;
  }
  buttonAction(e.code, true);
});

document.addEventListener('keyup', (e)=> {
  const code = e.code;
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    // keyboard.getButton(code).node.classList.remove('clicked');
    // keyboard.removeUppercaseState();
    keyboard.removeKeyboardShiftState(keyboard.getButton(code).node);
    return;
  }
  if (code === 'ControlLeft' || code === 'ControlRight') {
    keyboard.clearShortcut();
    return;
  }
  e.preventDefault();
  if (code === 'AltLeft' || code === 'AltRight') {
    keyboard.clearShortcut();
    return;
  }
  if (code === 'CapsLock') {
    return;
  }
  buttonAction(e.code, false);
});
