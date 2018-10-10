let array1 = [2,3,4,5,6];
let array2 = ['asdfasdf', 1234, true, false, 5, 6];

function forInLoopDisplay(array){
    for(var index in array){
        console.log('Array index is: ' + array[index])
    }
}
console.log(forInLoopDisplay(array1));

function forOfLoopDisplay(array) {
    for (var element of array) {
        console.log('Array element is: ' + element)
    }
}
console.log(forOfLoopDisplay(array1));

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
    'hair': 'brown',
    'height': 72
}

person.weight = 175;

function showPerson(object){
    for(let key in person){
        console.log('key => ', key + ', ' + person[key]);
    }
}
showPerson(person);

function sayHello(){
    var newScope = 'This is the scope content';
    console.log('Say hello: ', newScope);
    return newScope;
}
console.log(sayHello());
sayHello();