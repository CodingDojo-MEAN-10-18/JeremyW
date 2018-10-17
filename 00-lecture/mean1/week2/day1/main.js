// function square(array){
//     const results = [];
//     for(let index = 0; index < array.length; index++){
//         const number = array[index];
//         results.push(number * number);
//     }
//     return results;
// }

function add(array){
    const results = [];
    for(let index = 0; index < array.length; index++){
        const number = array[index];
        results.push(number + number);
    }
    return results;
}

function map(array, callback) {
    const results = [];
    // console.log(callback.toString());
    for (let index = 0; index < array.length; index++) {
        const result = callback(array[index]);
        console.log('result from callback', result);
        results.push(result);
    }
    return results;
}

const numArray = [99, 34, 567, 192];
// const res = map(numArray, square);
// const rez = map(numArray, (element) => element + element);
// const toStr = map(numArray, element => `this is a string now ${ element }`);
// console.log(res, rez, toStr);

function square(num) {
    if(num % 2 === 0){  // if number is even
        return num * num;
    } else {
        return num;
    }
}

// console.log('before');
// function sayHello(name) {
//     setTimeout(function () {
//         console.log(`Hello ${name}`)
//     }, 2000)
// }
// sayHello('Jason')
// console.log('after')

function getThingsFromDB(query, callback) {
    // console.log('requesting data from db', query);
    return setTimeout(function () {
        const data = ['thing1', 'thing2', 'thing3'];
        // console.log('', callback.toString());
        callback(data);
        // return data;
    }, 1500);
}
// python method
// const things = getThingsFromDB(`select * from things;`);

// JS method
getThingsFromDB('select * from things;', function (things) {
    console.log('inside callback sometime later...', things);
    things.forEach(thing => console.log('got a thing', thing));
    const results = map(things, thing => `${thing} from the database over time`);
    console.log(results);
});

// console.log('things from db');