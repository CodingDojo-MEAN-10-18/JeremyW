// Getters and Setters
// Introduction
// A common way to read and update attributes within our objects is to use Getters and Setters. 
// While we can recreate this technique in many situations, JavaScript supports Getters and Setters syntactically. 
// Again, these serve to make our JS easier and quicker to read and write. 
// Getters get a specific attribute. Setters set the value of a specific attribute.

class Pizza {
    constructor(radius, slices) {
        this.radius = radius;
        this._slices = slices;
    }
    get slices () { 
        return this._slices; 
    }
    set slices (slices) { 
        this._slices = slices;
    }
};

// we can now create interests
const pepperoni = new Pizza(16, 12)
const deep_dish = new Pizza(14, 12)
console.log(`Deep dish has ${deep_dish.slices} slices.`);       // we use the getter to determine how many slices we have
deep_dish.slices = 8;                                           // the setter will change the number of slices
console.log(`Deep dish now has ${deep_dish.slices} slices.`);  // use the getter again to make sure our slices have doubled

class Pizza2{
    constructor(x, y, radius, meat, cheese) {
        this.x = x;
        this.y = y;
        this._radius = radius;
        this._cheese = cheese;
        this._meat = meat;
    }
    get diameter() {
        return this._radius * 2;
    }
    get cheese(){
        return this._cheese;
    }
    set cheese(cheese){
        this._cheese = cheese;
    }
    get meat(){
        return this._meat;
    }
}
const circle1 = new Pizza2(1, 2, 5, 'pepperoni', 'mozzarella');
console.log(circle1.diameter);
console.log(circle1.meat);
console.log(circle1.cheese);