// Scope

function addNumbers(a, b){
    var sum = a + b;
    return sum;
}
// console.log(sum); // will return a ReferenceError => because sum variable is only function scoped

function addArrayElements(array){
    var array_sum = 0;
    var array_length = array.length;
    // console.log(array_length);
    for(let i = 0; i < array_length; i++){
        addNumbers(array_sum, array[i]);
        // console.log(array_sum + " : " + array[i]);
    }
    return array_sum;
}
var new_sum = addArrayElements([3,4,5]);
// console.log(new_sum);

function addArrayElements2(array){
    var array_sum = 0;
    var array_length = array.length;
    // console.log(array_length);
    for(var i = 0; i < array_length; i++){
        addNumbers2(array_sum, array[i]);
    }
    function addNumbers2(a, b){
        var sum = a + b;
        return sum;
    }
    return array_sum;
}
var new_sum = addArrayElements2([3,4,5]);
// console.log(new_sum);

function letLoop(){
    for(let i = 0; i < 3; i++){
        console.log(i);
    }
    // console.log(i);
}
// letLoop();

function varLoop(){
    for(var i = 0; i < 3; i++){
        console.log(i);
    }
    console.log(i);
}
varLoop();