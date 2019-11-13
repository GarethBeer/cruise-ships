/* eslint-disable no-undef */
const Itinerary = require("../src/itinerary");

describe("itinerary tests", () => {
  let portDover;
  let portLiverpool;
  let portSouthampton;
  let itinerary;

  beforeEach(() => {
    portDover = jest.fn();
    portLiverpool = jest.fn();
    portSouthampton = jest.fn();

    itinerary = new Itinerary([portDover, portLiverpool, portSouthampton]);
  });
  test("New Itinerary creates a new Object", () => {
    expect(itinerary).toBeInstanceOf(Object);
  });

  test("itinerary has a ports property which takes an array", () => {
    expect(itinerary.ports).toBeInstanceOf(Array);
  });

  test("itinerary ports property can accept multiple objects", () => {
    expect(itinerary.ports).toStrictEqual([
      portDover,
      portLiverpool,
      portSouthampton
    ]);
  });
});
