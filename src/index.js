import './scss/style.scss';
import { buttonsData } from './js/buttonsData';
import { Keyboard } from './js/keyboard';

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const parent = document.createElement('div');
parent.className = 'keyboard';

const textArea = document.createElement('textarea');
textArea.className = 'text-area';
textArea.setAttribute('autofocus', '');

const message = document.createElement('p');
message.className = 'message';
message.textContent = 'Keyboard was made with OS Windows. To change the language, use the shortcut Ctrl + Alt / Alt + Ctrl';

wrapper.append(textArea, message, parent);
document.body.append(wrapper);

const lang = JSON.parse(localStorage.getItem('language'));

const keyboard = new Keyboard(lang, buttonsData, parent);
keyboard.buildButtonList();

function insertChar(char) {
  textArea.setRangeText(char, textArea.selectionStart, textArea.selectionEnd, 'end');
}

function buttonAction(code, isClick) {
  if (code && code !== 'F12') {
    if (isClick) {
      const char = keyboard.getButtonValue(code);
      if (char) {
        insertChar(char);
      }
    } else {
      keyboard.getButton(code).setInActiveState();
    }
  }
}

function deleteText(stepForward = 0, stepBack = 0) {
  if (textArea.value.length > 0) {
    if (textArea.selectionStart !== textArea.selectionEnd) {
      textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, 'end');
    } else {
      textArea.setRangeText('', textArea.selectionStart - stepForward, textArea.selectionEnd + stepBack, 'end');
    }
  }
}

function inputSimilarCases(code) {
  if (code === 'CapsLock') {
    keyboard.setCaps(code);
    return;
  }
  if (code === 'ArrowLeft') {
    const step = textArea.selectionStart - 1;
    if (step >= 0) {
      [textArea.selectionStart, textArea.selectionEnd] = [step, step];
    }
    return;
  }
  if (code === 'ArrowRight') {
    const step = textArea.selectionStart + 1;
    [textArea.selectionStart, textArea.selectionEnd] = [step, step];
    return;
  }
  if (code === 'ArrowUp') {
    const index = textArea.value.lastIndexOf('\n', textArea.selectionStart - 1);
    if (index >= 0) {
      [textArea.selectionStart, textArea.selectionEnd] = [index, index];
    }
    return;
  }
  if (code === 'ArrowDown') {
    const index = textArea.value.indexOf('\n', textArea.selectionStart + 1);
    if (index) {
      [textArea.selectionStart, textArea.selectionEnd] = [index, index];
    }
    return;
  }
  if (code === 'Backspace') {
    deleteText(1, 0);
    return;
  }
  if (code === 'Delete') {
    deleteText(0, 1);
    return;
  }
  if (code === 'Enter') {
    insertChar('\n');
    return;
  }
  if (code === 'Tab') {
    insertChar('\t');
  }
}

function mouseClick(e) {
  const code = e.target.getAttribute('data-code');
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
  keyboard.clearShortcut();
  inputSimilarCases(code);
  if (code === 'CapsLock') {
    return;
  }
  buttonAction(code, true);
  e.target.addEventListener('mouseup', ()=> {
    setTimeout(()=> {
      buttonAction(code, false);
    }, 100);
  });
  e.target.addEventListener('mouseleave', ()=> {
    buttonAction(code, false);
    e.target.mouseup = null;
    e.target.mouseleave = null;
  });
}

function keyboardClick(e) {
  const code = e.code;
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
  inputSimilarCases(code);
  buttonAction(code, true);
}

parent.addEventListener('mousedown', mouseClick);
document.addEventListener('keydown', keyboardClick);

document.addEventListener('keyup', (e)=> {
  const code = e.code;
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    keyboard.removeKeyboardShiftState(keyboard.getButton(code).node);
    return;
  }
  if (code === 'ControlLeft' || code === 'ControlRight' || code === 'AltLeft' || code === 'AltRight') {
    keyboard.clearShortcut();
    return;
  }
  if (code === 'CapsLock') {
    return;
  }
  buttonAction(e.code, false);
});

textArea.addEventListener('focusout', () => textArea.focus());
