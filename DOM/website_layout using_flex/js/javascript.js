var element;
//element= document;
// element=document.all;//this comand return us all html tages used in html document
// element=document.head;
// element=document.title;
// element=document.body;
// element=document.links;
// element=document.doctype;
// element=document.URL;
// element=document.domain;
//element=document.getElementById("menu");
//element=document.getElementsByTagName("li");
//element=document.getElementById("farman").innerHTML;
//element=document.getElementById("farman").innerText;


//element=document.getElementById("farmanJani").innerHTML;
//console.log(element);
//element=document.getElementById("farmanJani").innerHTML="<h4>farman ali goryah</h4>";
//element=document.getElementById("farmanJani").innerText="farman ali gorayah";
//element=document.querySelector("#farmanali").innerHTML="<h1>farman goyah</h1>";
// element=document.querySelectorAll("#farmanali")[2];
//document.querySelector("#header").style.backgroundColor="tan";
//document.querySelector(".farman").style.color="blue";
//document.querySelector("#header").className="abc";
//element=document.querySelector("#para").style.border;
//element=document.querySelector("#para").style.backgroundColor="green";
//element=document.querySelector("#para").className="xyz egd pxy";
//document.querySelector("#para").classList.add("cls1","cls2","cls3");
//document.querySelector("#para").classList.remove("dfd");
//element=document.querySelector("#para").classList;
//document.getElementById("header").onclick=abc;
document.getElementById("header").addEventListener("click",abc);
function abc(){
  document.getElementById("header").style.backgroundColor="red";
}
document.getElementById("para").addEventListener("mouseenter",xyz);
function xyz(){
  document.getElementById("para").style.color="orange";
}
document.getElementById("para").addEventListener("mouseleave",jkl);
function jkl(){
  document.getElementById("para").style.color="red";
}
document.getElementById("para").addEventListener("click",pak);
function pak(){
//document.getElementById("para").style.border= "2px solid black";
this.style.border="2px solid black";
this.style.color="green";
}
//console.log(element);
