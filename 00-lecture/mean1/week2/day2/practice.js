function doSomething(callback){
    console.log('doing something', callback);
    callback();
}
// doSomething(function () {});

function map(array, callback){
    // const temp = [];
    const results = [];
    for(let index = 0; index < array.length; index++){
        // temp.push(array[index] + ' in the hat');
        const result = callback(array[index], index, array);
        results.push(result);
    }
    // return temp;
    return results;
}

// function mapNums(array){
//     const results = [];
//     for(let index = 0; index < array.length; index++){
//         const result = square(array[index]);
//         results.push(result);
//     }
//     return results;
// }

const nums = [1203, 234, 993];
const str = ['cat', 'dog', 'horse'];

const res = map(str, (element, index, array) => element + ' in the hat');

const rez = map(nums, (num) => {
    // console.log('about to square ', num);
    return square(num);
});

// console.log('res ', res);
// console.log('rez ', rez);

function square(num){
    return num * num;
}

// console.log('before');

// function sayHello(name){
//     setTimeout(function() {
//         console.log(`Hello ${ name }`);
//     }, 2000);
// }
// sayHello('Jeremy');

// console.log('after');
function getThingsFromDB(query, callback){
    console.log('requesting data from the db', query);
    setTimeout(function () {
        console.log('callback is ', callback);
        const data = [
            'thing1', 'thing2', 'thing3'
        ];
        callback(data);
    }, 1500);
}
const things  = getThingsFromDB('SELECT * FROM things;', function (things) {
    console.log('inside callback function sometime later...', things);

    things.forEach(thing => console.log('got a thing:', thing))
});

// console.log('things from db', things);