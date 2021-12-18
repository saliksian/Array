var dom = document;

var firarray = [1,3,5,7,3,8,7,3,0];
var secarray = [23,65,23,12,87,25,91];
var thirarray =[];

var result = dom.getElementById("result");
var result2 = dom.getElementById("result2");
var cons = dom.getElementById("console");

result.innerHTML = `1st array is: ${firarray}`;
result2.innerHTML = `2nd array is: ${secarray}`;


function Merge() {
for (let index = 0; index < firarray.length; index++) {
  thirarray.push(firarray[index])
  
}
for (let index = 0; index < secarray.length; index++) {
  thirarray.push(secarray[index])
  
}
  cons.innerHTML = `New array is: ${thirarray}`;
}
