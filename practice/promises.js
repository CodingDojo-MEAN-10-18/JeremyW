// Promises
/* JavaScript runs synchronously: After the interpreter hoists variables and functions to the top of their scope, JavaScript runs code-block by code-block (which as a general rule can be thought of as line-by-line). This little tab is going to show us how to get out of that synchronous cycle. (This is how that event-loop can set up a queue of events in Node). It also allows us to run code that might take a bit of time to run, without completely stalling our program (AJAX calls to APIs, DB queries etc). */

//simulated really slow DB call.
function getStuffFromDatabase(callback){
    var data;
    var myTimer = setTimeout(function(){
        if (typeof(callback) == 'function'){
        //it just got back from the DB!
        data = [
            {name:'Jeremy'},
            {name:'Alex'},
            {name:'Anika'}
        ];
        callback(data);
        }
    }, 5000);
    //  it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
    return data;
}
function requestDataFromDatabase(){
    console.log('running');
    // creates promise
    var data = new Promise(function(resolve, reject){
        getStuffFromDatabase(resolve, reject);   // kind of like a shiny callback
    });
    //  if promise is successful (keeps me from putting all the logic in the callback)
    data.then(function(date){
        console.log(data, 'Asynchronous');
        for(var index = 0; index < data.length; index++){
            console.log(data[index].name);
        }
    });
    data.catch(function(){
        console.log('failure');
    });
    console.log('end');
}
requestDataFromDatabase();
// keep running my program!
console.log('Hello');

//  simulated request (failing);
// function requestDataFromDatabase(){
//     var data = getStuffFromDatabase( function myCallBack(data){
//         for(var index = 0; index < data.length; index++){
//             console.log(data[index].name);
//         }
//     }); // this should return my data right??
//     console.log(data, 'Synchronous');
// }
// function catchFly(){
//     console.log('I just caught a fly!');
// }
// requestDataFromDatabase();
// // keep running my program!
// console.log('Hello');
// catchFly();
//etc.