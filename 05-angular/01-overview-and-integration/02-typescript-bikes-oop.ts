class Bike {
  miles: number;
  max_speed: string;
  miles: number;
  constructor(
    public price: number, public max_speed: string){
      this.price = price;
      this.max_speed: max_speed;
      this.miles = 0;
    }
    displayInfo(){
      console.log(`Bike costs $${this.price}, has a max speed of ${this.max_speed} and has ${this.miles} total miles`);
    }
    ride(){  // add +10 to the mileage
      console.log(`Riding...`);
      this.miles += 10;
      return this;
    }
    reverse() {
        console.log(`Reversing...`);
        if(this.miles <= 5) { // logic to prevent less than 0 mileage
          console.log(`Bike cannot have less than zero miles`)
          this.miles = 0;
          return this;
        } else {
          this.miles -= 5;
          return this;  
        }
    }
    debug(){
      console.log(`Console.log() is my friend.`);
    }
}

let bike1 = new Bike(600, '60mph');
let bike2 = new Bike(999, '55mph');
let bike3 = new Bike(3599, '70mph');

console.log("******** First Bike ********");
bike1.ride().ride().ride().reverse().displayInfo();
console.log("******** Second Bike ********");
bike2.ride().ride().reverse().reverse().displayInfo();
console.log("******** Third Bike ********");
bike3.reverse().reverse().reverse().displayInfo();