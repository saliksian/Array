var dom = document;

var array = ["Ali","Nabeel","Ahmad","Usama","Fatima","Saad","Muneeb","Saim"];

var ind = dom.getElementById("index")
var cou = dom.getElementById("count")

var result = dom.getElementById("result")

console.log(array.length);

result.innerHTML=array;

function delElement() {
 

    var index = ind.value;
    var count = cou.value;


    if (index<array.length ) {
      array.splice(index,count)
      result.innerHTML=array;
      
    }
    else {
      result.innerHTML=`Enter valid input!!`;
      
    }

    
   


  


  ind.value="";
  cou.value = "";
}



