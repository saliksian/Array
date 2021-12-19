var dom = document;

var array = [1,3,5,7,3,8,7,3,0];
var revarray = []


var result = dom.getElementById("result");

var cons = dom.getElementById("console");

result.innerHTML = `Array is: ${array}`;



function Reverse() {
for (let index = array.length; index >= 0; index--) {
  revarray.push(array[index])
  
}
cons.innerHTML = `Reverse Array is: ${revarray}`;

}
