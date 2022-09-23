// function focusFunction(){
//     document.getElementById("fname").style.background="red";
// }

function focusFunction(element) {
  element.style.background = "red";
}

function blurFunction(element) {
  element.style.background = "pink";
}
function inputFunction(element) {
  var x = element.value;
  document.getElementById("test").innerHTML = x;
}
function changeFunction(element) {
  var x = element.value;
  document.getElementById("test").innerHTML = x;
}
function submitFunction(element) {
  alert("Thnaku you");
}
function selectFunction(element) {
  console.log("you select some text");
}
function invalidFunction(element) {
  alert("please enter corret email")
}
