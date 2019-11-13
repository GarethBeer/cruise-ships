class cruiseShip {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = this.itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShips(this)


  }

  setSail() {
    const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);

    if (currentPortIndex === this.itinerary.ports.length - 1) {
      throw new Error("End of journey");
    } else {
      this.previousPort = this.currentPort;
      this.currentPort.removeShips(this)
      this.currentPort = null;

    }
  }

  dock() {
    const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
    this.currentPort = this.itinerary.ports[previousPortIndex + 1];
    this.currentPort.addShips(this);

  }
}

module.exports = cruiseShip;