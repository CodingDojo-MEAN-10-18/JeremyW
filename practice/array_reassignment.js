let array1 = [2,3,4,5,6];

function arrayReassignment(array){
  let x = array.length;
  for(let i = 0; i < x; i++){
    array.pop();
    console.log("Array now:" + array)
  }
  return array;
}

console.log("Array value is now:" + arrayReassignment([2,3,4,5,6]));
console.log("Array value is now:" + arrayReassignment(array1));
