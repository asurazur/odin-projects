import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./main.js";

describe("capitalize", () => {
  test("returns a string with the first character capitalized", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("returns the same string if first character is already capitalized", () => {
    expect(capitalize("Capitalized Already")).toBe("Capitalized Already");
  });
  test("handles empty strings correctly", () => {
    expect(capitalize("")).toBe("");
  });
  test("does not alter the rest of the string", () => {
    expect(capitalize("heLLo")).toBe("HeLLo");
  });
});

describe("reverseString", () => {
  test("reverses a simple string", () => {
    expect(reverseString("Word")).toBe("droW");
  });
  test("reverses a string with spaces", () => {
    expect(reverseString("Hi There User")).toBe("resU erehT iH");
  });
  test("reverses a string with punctuation", () => {
    expect(reverseString("Hello, World!")).toBe("!dlroW ,olleH");
  });
  test("returns an empty string when given an empty string", () => {
    expect(reverseString("")).toBe("");
  });
});

describe("calculator", () => {
  const add = calculator.add;
  const subtract = calculator.subtract;
  const multiply = calculator.multiply;
  const divide = calculator.divide;

  describe("add", () => {
    test("adds two positive numbers", () => {
      expect(add(1, 1)).toBe(2);
    });
    test("adds a positive and a negative number", () => {
      expect(add(2, -5)).toBe(-3);
    });
  });

  describe("subtract", () => {
    test("subtracts two numbers correctly", () => {
      expect(subtract(10, 5)).toBe(5);
    });
    test("subtracts resulting in a negative number", () => {
      expect(subtract(9, 10)).toBe(-1);
    });
  });

  describe("divide", () => {
    test("divides two positive numbers", () => {
      expect(divide(10, 2)).toBe(5);
    });
    test("returns Infinity when dividing by zero", () => {
      expect(divide(1, 0)).toBe(Infinity);
    });
  });

  describe("multiply", () => {
    test("multiplies two positive numbers", () => {
      expect(multiply(2, 3)).toBe(6);
    });
    test("multiplies with zero", () => {
      expect(multiply(10, 0)).toBe(0);
    });
  });
});

// caesarCipher.test.js
describe("caesarCipher", () => {
  test("shifts letters correctly by given factor", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });
  test("wraps from z to a correctly", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("preserves uppercase and lowercase letters", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("keeps punctuation and spaces unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  test("handles large shift values greater than 26", () => {
    expect(caesarCipher("overflow", 27)).toBe("pwfsgmpx");
  });
  test("handles negative shift values correctly", () => {
    expect(caesarCipher("abc", -3)).toBe("xyz");
  });
});

// analyzeArray.test.js
describe("analyzeArray", () => {
  test("returns correct average, min, max, and length for a given array", () => {});
  test("handles arrays with negative numbers", () => {});
  test("handles arrays with a single element", () => {});
  test("returns undefined or error for empty array input", () => {});
});
