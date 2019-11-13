/* eslint-disable no-undef */
const Port = require("../src/port");

describe("Port tests", () => {
  let portDover;
  let ship;

  beforeEach(() => {
    portDover = new Port("Dover");
    ship = jest.fn();
  });

  test("new Port creates a new Object", () => {
    expect(portDover).toBeInstanceOf(Object);
  });

  test("Port object has a name property", () => {
    expect(portDover.name).toBe("Dover");
  });

  test("Port object has a ship property which is an array", () => {
    expect(portDover.ships).toBeInstanceOf(Array);
  });

  test("addShips method adds objects to an array", () => {
    portDover.addShips(ship);
    expect(portDover.ships).toContain(ship);
  });

  test("removeShips method removes objects from the ship array", () => {
    portDover.addShips(ship);
    portDover.removeShips(ship);
    expect(portDover.ships).not.toContain(ship);
  });
});
