function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add: function add(x, y) {
    return x + y;
  },
  subtract: function subtract(x, y) {
    return x - y;
  },
  multiply: function multiply(x, y) {
    return x * y;
  },
  divide: function divide(x, y) {
    return x / y;
  },
};

function isAlpha(char) {
  return /^[a-zA-Z]+$/.test(char);
}

function isLower(char) {
  const charCode = char.charCodeAt();
  return charCode - 65 > 25;
}

function shiftCharacter(char, shift) {
  shift = ((shift % 26) + 26) % 26;
  const delta = isLower(char) ? 97 : 65;
  const charCode = char.charCodeAt();
  const index = charCode - delta;
  const shiftedCharCode = (index + shift) % 26;
  return String.fromCharCode(shiftedCharCode + delta);
}

function caesarCipher(str, shift) {
  let result = "";
  for (const char of str) {
    if (isAlpha(char)) result += shiftCharacter(char, shift);
    else result += char;
  }
  return result;
}

function analyzeArray(array) {
  return {
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
    average: array.reduce((acc, curr) => acc + curr, 0) / array.length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
