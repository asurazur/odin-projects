// Gameboard.test.js
import { Gameboard } from "./Gameboard.js";

const mockCoordinate = (x, y) => ({
  getCoordinate: jest.fn(() => [x, y]),
  toString: jest.fn(() => `[${x},${y}]`),
});

const mockShip = (length = 3) => ({
  getLength: jest.fn(() => length),
  isSunk: jest.fn(() => false),
  hit: jest.fn(),
  length,
});

describe("Gameboard", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  describe("placeShip()", () => {
    test("returns invalidOrientation if direction is invalid", () => {
      const ship = mockShip();
      const coord = mockCoordinate(0, 0);
      const result = gameboard.placeShip(ship, coord, "diagonal");
      expect(result).toEqual({ status: false, note: "invalidOrientation" });
    });

    test("returns outOfBounds if starting coordinate is out of bounds", () => {
      const ship = mockShip();
      const coord = mockCoordinate(10, 10);
      const result = gameboard.placeShip(ship, coord, "horizontal");
      expect(result).toEqual({ status: false, note: "outOfBounds" });
    });

    test("returns outOfBounds if ship placement exceeds board size horizontally", () => {
      const ship = mockShip(4);
      const coord = mockCoordinate(0, 8);
      const result = gameboard.placeShip(ship, coord, "horizontal");
      expect(result).toEqual({ status: false, note: "outOfBounds" });
    });

    test("returns shipPlaced for valid horizontal placement", () => {
      const ship = mockShip(3);
      const coord = mockCoordinate(0, 0);
      const result = gameboard.placeShip(ship, coord, "horizontal");
      expect(result).toEqual({ status: true, note: "shipPlaced" });
      expect(gameboard.ships).toContain(ship);
    });

    test("returns overlap if placing on existing ship", () => {
      const ship1 = mockShip(2);
      const ship2 = mockShip(2);
      const coord1 = mockCoordinate(0, 0);
      const coord2 = mockCoordinate(0, 1);
      gameboard.placeShip(ship1, coord1, "horizontal");
      const result = gameboard.placeShip(ship2, coord2, "horizontal");
      expect(result).toEqual({ status: false, note: "overlap" });
    });
  });

  describe("recieveAttack()", () => {
    test("returns outOfBounds for invalid attack coordinate", () => {
      const attack = mockCoordinate(12, 12);
      const result = gameboard.recieveAttack(attack);
      expect(result).toEqual({ status: false, note: "outOfBounds" });
    });

    test("records a miss when attacking empty space", () => {
      const attack = mockCoordinate(0, 0);
      const result = gameboard.recieveAttack(attack);
      expect(result).toEqual({ status: true, note: "miss" });
      expect(gameboard.misses.has("[0,0]")).toBe(true);
    });

    test("records a hit when attacking a ship", () => {
      const ship = mockShip(2);
      const coord = mockCoordinate(0, 0);
      gameboard.placeShip(ship, coord, "horizontal");

      const attack = mockCoordinate(0, 0);
      const result = gameboard.recieveAttack(attack);
      expect(result).toEqual({ status: true, note: "ship" });
      expect(ship.hit).toHaveBeenCalled();
      expect(gameboard.hits.has("[0,0]")).toBe(true);
    });

    test("returns alreadyAttacked when same spot is hit twice", () => {
      const attack = mockCoordinate(0, 0);
      gameboard.recieveAttack(attack);
      const result = gameboard.recieveAttack(attack);
      expect(result).toEqual({ status: false, note: "alreadyAttacked" });
    });
  });

  describe("allShipSunk()", () => {
    test("returns false if there are no ships", () => {
      expect(gameboard.allShipSunk()).toBe(false);
    });

    test("returns true only if all ships are sunk", () => {
      const ship1 = mockShip();
      const ship2 = mockShip();

      ship1.isSunk.mockReturnValue(true);
      ship2.isSunk.mockReturnValue(true);
      gameboard.ships.push(ship1, ship2);

      expect(gameboard.allShipSunk()).toBe(true);
    });

    test("returns false if not all ships are sunk", () => {
      const ship1 = mockShip();
      const ship2 = mockShip();

      ship1.isSunk.mockReturnValue(true);
      ship2.isSunk.mockReturnValue(false);
      gameboard.ships.push(ship1, ship2);

      expect(gameboard.allShipSunk()).toBe(false);
    });
  });
});
