class Port {
  constructor(name) {
    this.name = name;
    this.ships = [];
  }
  addShips(ships) {
  this.ships.push(ships)

  }

  removeShips(ship) {
    let shipToRemove = this.ships.indexOf(ship)
    this.ships.splice(shipToRemove, 1)
  }
}









module.exports = Port;