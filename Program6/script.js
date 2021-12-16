var array = [2, 0, 15, 67, 9, -100, 115, 110, 12, 13,-10];

var odd=0;
var even=0;

for (let index = 0; index < array.length; index++) {
  if (array[index]%2==0) {
    even++
  }
  else if (array[index]%2!=0) {
    odd++;
  }
  
}

console.log("Even element in array:", even);
console.log("Odd element in array:", odd);


