// var newElement=document.createElement("li");
// var newText=document.createTextNode("farman");
// newElement.appendChild(newText);
   

// var target=document.getElementById("list");
// var odlELement=target.children[0];
// var odlELement2=target.children[3];
// target.replaceChild(newElement,odlELement);
// target.removeChild(odlELement2);





        //CloneNode//


// var target=document.getElementById("list").children[0];
// var coplyElement=target.cloneNode(true);
// document.getElementById("list2").appendChild(coplyElement);









////////////////siEqualNode////////////////////
var target1=document.getElementById("list1").children[4];
var target2=document.getElementById("list2").children[4];
var equal=target1.isEqualNode(target2);
console.log(equal);



var target1=document.getElementById("list1").children[2];
var target2=document.getElementById("list2").children[2];
var equal=target1.isEqualNode(target2);
console.log(equal);