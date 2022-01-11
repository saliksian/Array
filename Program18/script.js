let array = ["salik","ali","ahmad","usama"];
let searchElement = "salik";

console.log(array);

array.forEach((a,index) => {
  if (a == searchElement) {
    console.log(`${searchElement} found at ${index}th index`);

  }
 
});



