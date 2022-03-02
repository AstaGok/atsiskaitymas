var form = document.forms["registracija"];
var vardas = form["vardas"].value;
var pavarde = form["pavarde"].value;
var mokykla = form["mokykla"].value;
var miestas = form["miestas"].value;
var sritis = document.getElementsByName("sritis");
var optionValue = sritis.value;

document.forms[0].addEventListener("submit", function(e){
    e.preventDefault();
    localStorage.setItem("vardas", vardas.value);
    localStorage.setItem("pavarde", pavarde.value);
    localStorage.setItem("mokykla", mokykla.value);
    localStorage.setItem("miestas", miestas.value);
    if (optionValue ==0) {
        localStorage.setItem("Front-end", option.value); 
       } else if (optionValue ==1) {
        localStorage.setItem("Back-end", option.value);
       }
  });


  function printText(){
    var printForm = document.getElementById('regist').value;
    var node=document.createElement("LI");
    var textnode=document.createTextNode(printForm);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
     }
  