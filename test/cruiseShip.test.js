/* eslint-disable no-undef */
const cruiseShip = require("../src/cruiseShip");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("initialising all objects before tests", () => {
  let portDover;
  let portLiverpool;
  let portSouthampton;
  let itinerary;

  let ship;
  beforeEach(() => {
    portDover = new Port("Dover");
    portLiverpool = new Port("Liverpool");
    portSouthampton = new Port("Southampton");

    itinerary = new Itinerary([portDover, portLiverpool, portSouthampton]);

    ship = new cruiseShip(itinerary);
  });

  describe("initialising all objects before tests", () => {
    test("return an object", () => {
      expect(ship).toBeInstanceOf(Object);
    });

    test("current location is first port in itinerary", () => {
      expect(ship.currentPort).toBe(itinerary.ports[0]);
    });

    test("it can set sail", () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(ship.previousPort).toBe(portDover);
    });
  });

  describe("Port", () => {
    test("tests whether Port can be initialised", () => {
      expect(portDover).toBeInstanceOf(Object);
    });

    test("Port object has a name property", () => {
      expect(portDover.name).toBe("Dover");
    });

    test("can the dock method take a port object", () => {
      ship.dock();
      expect(ship.currentPort).toBe(itinerary.ports[0]);
    });
    test("cant sail further than its itinerary", () => {
      ship.setSail();
      ship.dock();
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError("End of journey");
    });
  });

  describe("itinerary", () => {
    test("itinerary is an object", () => {
      expect(itinerary).toBeInstanceOf(Object);
    });
    test("itinerary has a ports property", () => {
      expect(itinerary.ports).toStrictEqual([
        portDover,
        portLiverpool,
        portSouthampton
      ]);
    });
  });

  describe("testing setSail method invokes add ship and removeShip methods", () => {
    test("testing ship name is added as a ship into ports ship property", () => {
      ship.setSail();
      ship.dock();
      expect(portLiverpool.ships).toContain(ship);
    });

    test("testing ship is removed from ports.ship when setSail is called", () => {
      ship.setSail();
      expect(portLiverpool.ships).toStrictEqual([]);
    });
    test("ship should be added to port ships on instiation", () => {
      expect(portDover.ships).toContain(ship);
    });

    test("ship should be removed from the first port when setSail method called and added to the next port when dock method called", () => {
      ship.setSail();
      ship.dock();
      expect(portDover.ships).not.toContain(ship);
      expect(portLiverpool.ships).toContain(ship);
    });
  });
});
