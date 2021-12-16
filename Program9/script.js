var dom = document;

var array = [];


var result = dom.getElementById("result")

function pushElement() {

    var input = dom.getElementById("input")
    var inputvalue = input.value
    array.push(inputvalue)

  
  // console.log("Original Array:", array);
  result.innerHTML=array;

  input.value="";
}



