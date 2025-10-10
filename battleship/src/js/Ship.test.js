import { experiments } from "webpack";
import { Ship } from "./Ship.js";

describe("Constructor", () => {
  test("Length must be an Integer", () => {
    const errorMsg = `Ship's Length Must be Positive Integer`;
    expect(() => new Ship(1.2)).toThrow(errorMsg);
    expect(() => new Ship(-1)).toThrow(errorMsg);
    expect(() => new Ship(0)).toThrow(errorMsg);
  });
});

describe("When Ship is hit", () => {
  const length = 3;
  const instance = new Ship(length);
  test("Ship hits must increase when hit", () => {
    instance.hit();
    expect(instance.hits).toBe(1);
  });

  test("Ship hits must not exceed it's length", () => {
    instance.hit();
    instance.hit();
    instance.hit();
    instance.hit();
    expect(instance.hits).toBe(length);
  });
});

describe("Check if Ship is sunked", () => {
  const length = 1;
  const instance = new Ship(length);
  test("Ship is not sunked if length is not equal to number of hits", () => {
    expect(instance.hits).not.toBe(length);
  });

  test("Ship is sunked if length is equal to number of hits", () => {
    instance.hit();
    expect(instance.hits).toBe(length);
  });
});
