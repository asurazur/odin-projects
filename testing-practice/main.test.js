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
    expect(reverseString("Word").toBe("droW"));
  });
  test("reverses a string with spaces", () => {
    expect(reverseString("Hi There User").toBe("resU erehT iH"));
  });
  test("reverses a string with punctuation", () => {
    expect(reverseString("Hello, World!").toBe("!dlroW ,olleH"));
  });
  test("returns an empty string when given an empty string", () => {
    expect(reverseString("").toBe(""));
  });
});

describe("calculator", () => {
  describe("add", () => {
    test("adds two positive numbers", () => {});
    test("adds a positive and a negative number", () => {});
  });

  describe("subtract", () => {
    test("subtracts two numbers correctly", () => {});
    test("subtracts resulting in a negative number", () => {});
  });

  describe("divide", () => {
    test("divides two positive numbers", () => {});
    test("returns Infinity when dividing by zero", () => {});
  });

  describe("multiply", () => {
    test("multiplies two positive numbers", () => {});
    test("multiplies with zero", () => {});
  });
});

// caesarCipher.test.js
describe("caesarCipher", () => {
  test("shifts letters correctly by given factor", () => {});
  test("wraps from z to a correctly", () => {});
  test("preserves uppercase and lowercase letters", () => {});
  test("keeps punctuation and spaces unchanged", () => {});
  test("handles large shift values greater than 26", () => {});
  test("handles negative shift values correctly", () => {});
});

// analyzeArray.test.js
describe("analyzeArray", () => {
  test("returns correct average, min, max, and length for a given array", () => {});
  test("handles arrays with negative numbers", () => {});
  test("handles arrays with a single element", () => {});
  test("returns undefined or error for empty array input", () => {});
});
