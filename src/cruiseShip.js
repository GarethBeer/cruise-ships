class cruiseShip {

    constructor(startingPort) {
        this.startingPort = startingPort;
        this.currentLocation = startingPort;
        this.journey = []

    }

    setSail(destination) {
        this.journey.push(this.startingPort)
        this.currentLocation = 'At Sea'
        this.journey.push(destination);
        if (this.currentLocation != this.startingPort) {
            this.startingPort = false;
        } else {
            this.startingPort = true;
        }
    }
}







module.exports = cruiseShip;