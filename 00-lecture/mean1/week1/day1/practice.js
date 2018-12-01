var index;
var myString;

myString = 'some string value';

// console.log(myString);

myString = 234234234;

// console.log(myString);

var array = ['asdfsadf', 234324, true, false];
// array = {};

// console.log(array.push('new content'));
// console.log('index before loop', index);

for (let index = 0; index < array.length; index++) {
//   console.log('index', index, array[index]);
}

// console.log('index after loop', index);

const person = {
    'eyes': 'brown',
    'hair': 'blue',
    age: 23,
    key: 'this is a key'
}

// console.log(person);

person.height = 234;

// for(var key in person){
//     console.log('key => ', key, person[key]);
// }

// var newScope = 'global content';

function sayHello(name) {
    var newScope = 'scope content';

    // console.log(`Welcome ${name}`, person);
    // return name;
    return newScope;
}

// sayHello('Jeremy');
// console.log(sayHello('Jeremy'));
// console.log(sayHello('Jason'), newScope);

console.log('person before', person);

function changePerson(user) {
  user.age = 4565346456;
}

console.log('return from change person', changePerson(person));
console.log('person after', person);

function counter() {
    var count = 0;

    function childScope() {
        return ++count;
        // return count++;
    }
    return childScope;
}

var counter = counter();

console.log(counter);

// console.log(counter());
// console.log(counter());
// console.log(counter());

console.log(counter());
//  => 1

console.log(counter());
//  => 2

console.log(counter());
//  => 3

console.log(counter());
//  => 4