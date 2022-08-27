const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  // write your solution here
  const arr = expr.match(/.{1,10}/g);

  for (let i = 0; i < arr.length; i++) {
    toDo: for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '0') {
        continue toDo;
      } else {
        arr[i] = arr[i].slice(j);
        break;
      }
    }
  }

  let result = [];

  arr.forEach(element => {
    let str = '';
    for (let i = 1; i < element.length; i += 2) {
      element[i] === '0' ? str += '.' :
        element[i] === '*' ? str += ' ' : str += '-';
    }
    result.push(str);
  });

  let res = ''

  for (let elem of result) {
    MORSE_TABLE[elem] ? res += MORSE_TABLE[elem] : res += ' ';
  }
  return res;
}

module.exports = {
  decode
}
