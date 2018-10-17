function letLoop() {
    for (let index = 0; index < 3; index++) {   // notice we use let to define i
        console.log(index);             // this will log 0, 1, 2
    }
    console.log(index);                 //  this will give us a ReferenceError because i is not defined outside the loop
}  
// letLoop();

function varLoop() {
    for (var index = 0; index < 3; index++) {    // notice we use var to define i
        console.log(index);         // this will log 0, 1, 2
    }
    console.log(index);             //  this will log 3
}  
// varLoop();

function Person(name, items){
    if (!(this instanceof Person)){
        // console.log(`${name} is an instance of Person.`)
        return new Person(name, items);
    }

    const person = { name };  // name is shorthand for key/value pair of the person object
    this.name = name;
    this.items = items;
    // this.take = take;

    // this.take = take
    // implicit
    // return this
}

Person.prototype.take = function take(item, target) {
    if (!target || !Array.isArray(target.items)) {
        // console.log(`target does not have items array`);
        throw new Error('target does not have an items array');
    }
    console.log(`This represents: ${this}`);
    console.log(`${this.name} is doing the taking`);

    for (let index = 0; index < target.items.length; index++) {
        if (item === target.items[index]) {
            // we found it, do something
            // now we need to remove something from the array
            console.log(`found item, ${item}`)
            // slice makes a copy of the content => ['purple', 'wallet', 'coins']
            // splice mutates the array => ['wallet', 'coins']
            target.items.splice(index, 1);
            this.items.push(item);
            return true;
        }
    }
    return false;
}

const jeremy = Person('Jeremy', ['purple', 'wallet', 'gold']);
const alex = new Person('Alex', ['blue', 'wallet', 'steam card']);

console.log(jeremy);
console.log(alex);

const backpack = {
    'items': ['compass', 'map', 'trailmix'],
};
console.log(backpack);

alex.take('gold', jeremy);
jeremy.take('steam card', alex);
jeremy.take('map', backpack);

console.log(jeremy);
console.log(alex);
