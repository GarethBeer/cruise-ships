/* eslint-disable no-undef */
const CruiseShip = require("../src/cruiseShip");

let portDover;
let portLiverpool;
let portSouthampton;
let itinerary;

let ship;
beforeEach(() => {
  port = {
    addShips: jest.fn(),
    removeShips: jest.fn()
  };
  portDover = {
    ...port,
    name: "Dover",
    ships: []
  };
  portLiverpool = {
    ...port,
    name: "liverpool",
    ships: []
  };
  portSouthampton = {
    ...port,
    name: "Southhampton",
    ships: []
  };

  itinerary = {
    ports: [portDover, portLiverpool, portSouthampton]
  };

  ship = new CruiseShip(itinerary);
});

describe("Ship tests", () => {
  test("new CruiseShip creates a new Object", () => {
    expect(ship).toBeInstanceOf(Object);
  });

  test("current location is first port in itinerary", () => {
    expect(ship.currentPort).toBe(itinerary.ports[0]);
  });

  test("it can set sail", () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(portDover);
    expect(portDover.removeShips).toHaveBeenCalledWith(ship);
  });

  test("can the dock method take a port object", () => {
    ship.dock();
    expect(ship.currentPort).toBe(itinerary.ports[0]);
  });

  test("ship cannot sail further than its itinerary", () => {
    ship.setSail();
    ship.dock();
    ship.setSail();
    ship.dock();
    expect(() => ship.setSail()).toThrowError("End of journey");
  });

  test(" setSail removes the ship from currentPorts ships property", () => {
    ship.setSail();
    expect(portLiverpool.ships).toStrictEqual([]);
  });

  test("new ship should be added to the first port in the itinerary on ship instiation", () => {
    expect(portDover.addShips).toHaveBeenCalledWith(ship);
  });

  test("ship should be removed from the first port when setSail method called and added to the next port when dock method called", () => {
    ship.setSail();
    ship.dock();
    expect(portDover.ships).not.toContain(ship);
    expect(portLiverpool.addShips).toHaveBeenCalledWith(ship);
  });
});
