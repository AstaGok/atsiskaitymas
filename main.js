document.forms[0].addEventListener("submit", function(e){
    e.preventDefault();
    var myFormData = [];
    var value1 = document.getElementById("vardas").value; 
    var value2 = document.getElementById("pavarde").value; 
    var value3 = document.getElementById("mokykla").value; 
    var value4 = document.getElementById("miestas").value; 
    var value5 = document.getElementById("sritis").value;
    myFormData.push(value1,value2,value3,value4,value5);
    localStorage.setItem("forma", myFormData);
console.log(myFormData);

  });

  function printText(){
    var printForm = localStorage.getItem("forma");
    var node=document.createElement("LI");
    var textnode=document.createTextNode(printForm);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
     }
  
