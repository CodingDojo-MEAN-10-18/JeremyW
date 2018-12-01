let array1 = [2,3,4,5,6];
let array2 = ['asdfasdf', 1234, true, false, 5, 6];

function forInLoopDisplay(array){
    for(var index in array){
        console.log('Array index is: ' + array[index])
    }
}
// console.log(forInLoopDisplay(array1));

function forOfLoopDisplay(array) {
    for (var element of array) {
        console.log('Array element is: ' + element)
    }
}
// console.log(forOfLoopDisplay(array1));

function forOfLoopDisplay2(array) {
    for(var element of array.entries()){
        let index = element[0];
        let content = element[1];
        console.log('element', element, index, content)
    }
}
// console.log(forOfLoopDisplay2(array2));

function forOfLoopDisplay3(array) {
    for (var [index, content] of array.entries()) {
        console.log('index', index, content)
    }
}
// console.log(forOfLoopDisplay3(array2));

let person = {
    'name': 'Jeremy',
    'age': 43,
    'height': 72
}

person['weight'] = 175;
person['hair'] = 'brown'

function showPerson(object){
    for(let key in person){
        console.log('key => ', key + ': ' + person[key]);
    }
}
// showPerson(person);

function sayHello1() {
    var childContent = 'This is the child content';
    console.log(childContent);
    // console.log(`${childContent}`);
    // return childContent;
}
// sayHello1();
// console.log(sayHello1());
// sayHello1(12345);                // can pass any number of arguments but function does not actually accept it.
// console.log(sayHello1(12345));   // the same is true for this function call

function sayHello2(someValue, ...rest) {  // using a ...rest parameter in this example
    var childContent = 'This is the child content';
    // console.log(arguments);  // don't need this to console.log arguments when using ...rest parameter instead
    console.log(childContent + ', arg passed to function: ' + someValue, rest);
}
// sayHello2();                // can pass any number of arguments, now the function can accept it
// console.log(sayHello2(12345, 'some stuff', true, [], {}));