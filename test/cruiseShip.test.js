const cruiseShip = require('../src/cruiseShip');


describe('cruiseShip', () => {

    let ship;
    beforeEach(() => {
        ship = new cruiseShip();
        ship.startingPort = 'liverpool'
        ship.captain = 'Rui'
    });

    test('return an object', () => {
        expect(ship).toBeInstanceOf(Object)
    });

    test('returns a property value for startingPort', () => {
        expect(ship.startingPort).toBe('liverpool')
    });

    test('return the value for captain property', () => {
        expect(ship.captain).toBe('Rui')
    });

    test('it can set sail', () => {
        ship.setSail('barcelona');

        expect(ship.startingPort).toBeFalsy();
        expect(ship.currentLocation).toBe('At Sea')
        expect(ship.journey).toEqual(['liverpool', 'barcelona']);
    })

    xtest('', () => {
        ship.addPassenger('Gareth', 'liverpool', 'porto');
        expect(passengers.length).toBe(1);
    })

});