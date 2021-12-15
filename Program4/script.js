var array = [2, 0, 15, 67, 9, -100, 110, 115, 12, 13];
var max= array[0];
var min = array[0]
//finding maximum number 
for (let index = 0; index < array.length; index++) {
  if (max < array[index]) {
    max = array[index];
  }
}
//finding minimum number
for (let index = 0; index < array.length; index++) {
  if (min > array[index]) {
    min = array[index];
  }
}

console.log("Maximum Number Of Array: ", max);
console.log("Minimum Number Of Array: ", min);
