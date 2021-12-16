var array = [2, 0, -15, 67, -9, 100, 115, -110, 12, 13,10];

var nag=0;


for (let index = 0; index < array.length; index++) {
  if (array[index]<0) {
    nag++
  }
 
  
}

console.log("Total negative elements in array:", nag);


