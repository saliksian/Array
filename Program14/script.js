var dom = document;

var array = [
  "Ali",
  "Nabeel",
  "Ahmad",
  "Usama",
  "Fatima",
  "Saad",
  "Muneeb",
  "Ali",
  "Saim",
  "Ahmad",
  "Usama",
  "Ali"
];

var result = dom.getElementById("result");
var cons = dom.getElementById("console");

result.innerHTML = array;


function delDuplicate() {
  for (let index = 0; index < array.length; index++) {


    for (let ind = index + 1; ind < array.length; ind++) {
      if (array[index] == array[ind]) {
        array.splice(ind, 1);
 
      }
    }
    
  }
  cons.innerHTML = `New array is: ${array}`;
}
