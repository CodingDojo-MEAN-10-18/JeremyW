const Bike = /** @class */ (function () {
    function Bike(price, max_speed) {
        this.price = price;
        this.max_speed = max_speed;
        this.price = price;
        this.max_speed;
        max_speed;
        this.miles = 0;
    }
    Bike.prototype.displayInfo = function () {
        console.log("Bike costs $" + this.price + ", has a max speed of " + this.max_speed + " and has " + this.miles + " total miles");
    };
    Bike.prototype.ride = function () {
        console.log("Riding...");
        this.miles += 10;
        return this;
    };
    Bike.prototype.reverse = function () {
        console.log("Reversing...");
        if (this.miles <= 5) { // logic to prevent less than 0 mileage
            console.log("Bike cannot have less than zero miles");
            this.miles = 0;
            return this;
        }
        else {
            this.miles -= 5;
            return this;
        }
    };
    Bike.prototype.debug = function () {
        console.log("Console.log() is my friend.");
    };
    return Bike;
}());
let bike1 = new Bike(600, '60mph');
let bike2 = new Bike(999, '55mph');
let bike3 = new Bike(3599, '70mph');
console.log("******** First Bike ********");
bike1.ride().ride().ride().reverse().displayInfo();
console.log("******** Second Bike ********");
bike2.ride().ride().reverse().reverse().displayInfo();
console.log("******** Third Bike ********");
bike3.reverse().reverse().reverse().displayInfo();
