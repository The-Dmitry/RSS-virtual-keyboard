const buttonsData = [
  {
    isSymbol: true,
    code: 'Backquote',
    key: {
      eng: '`',
      ru: 'ё',
    },
    shift: {
      eng: '~',
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'Digit1',
    key: {
      eng: '1',
      ru: '1',
    },
    shift: {
      eng: '!',
      ru: '!',
    },
  },
  {
    isSymbol: true,
    code: 'Digit2',
    key: {
      eng: '2',
      ru: '2',
    },
    shift: {
      eng: '@',
      ru: '"',
    },
  },
  {
    isSymbol: true,
    code: 'Digit3',
    key: {
      eng: '3',
      ru: '3',
    },
    shift: {
      eng: '#',
      ru: '№',
    },
  },
  {
    isSymbol: true,
    code: 'Digit4',
    key: {
      eng: '4',
      ru: '4',
    },
    shift: {
      eng: '$',
      ru: ';',
    },
  },
  {
    isSymbol: true,
    code: 'Digit5',
    key: {
      eng: '5',
      ru: '5',
    },
    shift: {
      eng: '%',
      ru: '%',
    },
  },
  {
    isSymbol: true,
    code: 'Digit6',
    key: {
      eng: '6',
      ru: '6',
    },
    shift: {
      eng: '^',
      ru: ':',
    },
  },
  {
    isSymbol: true,
    code: 'Digit7',
    key: {
      eng: '7',
      ru: '7',
    },
    shift: {
      eng: '&',
      ru: '?',
    },
  },
  {
    isSymbol: true,
    code: 'Digit8',
    key: {
      eng: '8',
      ru: '8',
    },
    shift: {
      eng: '*',
      ru: '*',
    },
  },
  {
    isSymbol: true,
    code: 'Digit9',
    key: {
      eng: '9',
      ru: '9',
    },
    shift: {
      eng: '(',
      ru: '(',
    },
  },
  {
    isSymbol: true,
    code: 'Digit0',
    key: {
      eng: '0',
      ru: '0',
    },
    shift: {
      eng: ')',
      ru: ')',
    },
  },
  {
    isSymbol: true,
    code: 'Minus',
    key: {
      eng: '-',
      ru: '-',
    },
    shift: {
      eng: '_',
      ru: '_',
    },
  },
  {
    isSymbol: true,
    code: 'Equal',
    key: {
      eng: '=',
      ru: '=',
    },
    shift: {
      eng: '+',
      ru: '+',
    },
  },
  {
    isSymbol: false,
    code: 'Backspace',
    key: {
      eng: 'BACKSPACE',
      ru: 'BACKSPACE',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: false,
    code: 'Tab',
    key: {
      eng: 'TAB',
      ru: 'TAB',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyQ',
    key: {
      eng: 'q',
      ru: 'й',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyW',
    key: {
      eng: 'w',
      ru: 'ц',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyE',
    key: {
      eng: 'e',
      ru: 'у',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyR',
    key: {
      eng: 'r',
      ru: 'к',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyT',
    key: {
      eng: 't',
      ru: 'е',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyY',
    key: {
      eng: 'y',
      ru: 'н',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyU',
    key: {
      eng: 'u',
      ru: 'г',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyI',
    key: {
      eng: 'i',
      ru: 'ш',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyO',
    key: {
      eng: 'o',
      ru: 'щ',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyP',
    key: {
      eng: 'p',
      ru: 'з',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'BracketLeft',
    key: {
      eng: '[',
      ru: 'х',
    },
    shift: {
      eng: '{',
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'BracketRight',
    key: {
      eng: ']',
      ru: 'ъ',
    },
    shift: {
      eng: '}',
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'Backslash',
    key: {
      eng: '\\',
      ru: '\\',
    },
    shift: {
      eng: '|',
      ru: '/',
    },
  },
  {
    isSymbol: false,
    code: 'Delete',
    key: {
      eng: 'DEL',
      ru: 'DEL',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: false,
    code: 'CapsLock',
    key: {
      eng: 'CAPS LOCK',
      ru: 'CAPS LOCK',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyA',
    key: {
      eng: 'a',
      ru: 'ф',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyS',
    key: {
      eng: 's',
      ru: 'ы',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyD',
    key: {
      eng: 'd',
      ru: 'в',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyF',
    key: {
      eng: 'f',
      ru: 'а',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyG',
    key: {
      eng: 'g',
      ru: 'п',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyH',
    key: {
      eng: 'h',
      ru: 'р',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyJ',
    key: {
      eng: 'j',
      ru: 'о',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyK',
    key: {
      eng: 'k',
      ru: 'л',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyL',
    key: {
      eng: 'l',
      ru: 'д',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'Semicolon',
    key: {
      eng: ';',
      ru: 'ж',
    },
    shift: {
      eng: ':',
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'Quote',
    key: {
      eng: '\'',
      ru: 'э',
    },
    shift: {
      eng: '"',
      ru: null,
    },
  },
  {
    isSymbol: false,
    code: 'Enter',
    key: {
      eng: 'ENTER',
      ru: 'ENTER',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: false,
    code: 'ShiftLeft',
    key: {
      eng: 'SHIFT',
      ru: 'SHIFT',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyZ',
    key: {
      eng: 'z',
      ru: 'я',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyX',
    key: {
      eng: 'x',
      ru: 'ч',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyC',
    key: {
      eng: 'c',
      ru: 'с',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyV',
    key: {
      eng: 'v',
      ru: 'м',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyB',
    key: {
      eng: 'b',
      ru: 'и',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyN',
    key: {
      eng: 'n',
      ru: 'т',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'KeyM',
    key: {
      eng: 'm',
      ru: 'ь',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'Comma',
    key: {
      eng: ',',
      ru: 'б',
    },
    shift: {
      eng: '<',
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'Period',
    key: {
      eng: '.',
      ru: 'ю',
    },
    shift: {
      eng: '>',
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'Slash',
    key: {
      eng: '/',
      ru: '.',
    },
    shift: {
      eng: '?',
      ru: ',',
    },
  },
  {
    isSymbol: false,
    code: 'ArrowUp',
    key: {
      eng: '&#9650',
      ru: '&#9650',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: false,
    code: 'ShiftRight',
    key: {
      eng: 'SHIFT',
      ru: 'SHIFT',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: false,
    code: 'ControlLeft',
    key: {
      eng: 'CTRL',
      ru: 'CTRL',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: false,
    code: 'AltLeft',
    key: {
      eng: 'ALT',
      ru: 'ALT',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: true,
    code: 'Space',
    key: {
      eng: ' ',
      ru: ' ',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: false,
    code: 'AltRight',
    key: {
      eng: 'ALT',
      ru: 'ALT',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: false,
    code: 'ControlRight',
    key: {
      eng: 'CTRL',
      ru: 'CTRL',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: false,
    code: 'ArrowLeft',
    key: {
      eng: '&#9668',
      ru: '&#9668',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: false,
    code: 'ArrowDown',
    key: {
      eng: '&#9660',
      ru: '&#9660',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
  {
    isSymbol: false,
    code: 'ArrowRight',
    key: {
      eng: '&#9658',
      ru: '&#9658',
    },
    shift: {
      eng: null,
      ru: null,
    },
  },
];

export default buttonsData;
