var array = [2, 0, 15, 67, 9, -100, 115, 110, 12, 13];
var max;
var max1 = maximum(array);
//finding maximum number 
function maximum(Array) {
   max= Array[0];
  for (let index = 0; index < Array.length; index++) {
    if (max < Array[index]) {
      max = Array[index];
    }
  }
  return max;
  
}

for (let index = 0; index < array.length; index++) {
  if (max == array[index]) {
    var store = index;
    break;
  }
}
  
array.splice(store,1)



var max2 = maximum(array);


console.log("Largest Number in Array:",max1);
console.log("Second Largest Number in Array:",max2);


