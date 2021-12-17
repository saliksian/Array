var dom = document;

var array = ["Ali","Nabeel","Ahmad","Usama","Fatima","Saad","Muneeb","Ali","Saim","Ahmad"];



var result = dom.getElementById("result")
var cons = dom.getElementById("console")


result.innerHTML = array
var frequency;




function freqElement() {

  for (let index = 0; index < array.length; index++) {
    frequency=1;

    for (let ind = index+1; ind < array.length; ind++) {
      if (array[index]==array[ind]) {
        array.splice(ind,1)
        frequency++;
        
      }
      
      
    }
    if (frequency>1) {
      
    }

    console.log("Frequency of ",array[index], " is:",frequency);
    


  }
  cons.innerHTML = `Result On Console!!`
}



