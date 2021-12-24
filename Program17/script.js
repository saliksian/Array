var dom = document;

var array = [0,1,4,6,7,9,3,14,15,98,2];
var evenArray = []
var oddArray = []


var result = dom.getElementById("result");

var cons = dom.getElementById("console");
var cons1 = dom.getElementById("console1");

result.innerHTML = `Array is: ${array}`;



function seprate() {
for (let index = 0; index < array.length; index++) {
  if (array[index]%2 === 0) {
    evenArray.push(array[index])
  }
  else if (array[index]%2 != 0) {
    oddArray.push(array[index])
  }
  
}
cons.innerHTML = `Even Array is: ${evenArray}`;
cons1.innerHTML = `Odd Array is: ${oddArray}`;

}


