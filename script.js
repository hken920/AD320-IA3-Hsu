//div one - change text 
function changeText(id){
	id.innerHTML = "HELLO!";
}
//div 1 eventListener - click
var divOne = document.getElementById("one");
divOne.addEventListener("click", function() {
  alert("EventListener alert")
  });
  
//div two - uppercase all characters
function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase(); 
}
//div 2 eventListener - mousemove
var divTwo = document.getElementById("two");
divTwo.addEventListener("mousemove", mMouse );
function mMouse() {
  document.getElementById("addEventResult2").innerHTML = Math.random();
}

//div three - mouse over to change text
function mouseOver(obj) {
  obj.innerHTML = "HELLO!"
}
function mouseOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
//div 3 eventListener - resize
window.addEventListener("resize", function(){
  document.getElementById("addEventResult3").innerHTML = Math.random();
});

//div four - display date
function displayDate() {
  document.getElementById("result4").innerHTML = Date();
}
//div 4 eventListener - mouseout
var divFour = document.getElementById("four");
divFour.addEventListener("mouseout", mOut);
function mOut() {
  document.getElementById("addEventResult4").innerHTML += "Moused out!<br>";
}

//div five - check for cookies
function checkCookies() {
  var text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
    text = "Cookies are not enabled.";
  }
  document.getElementById("result5").innerHTML = text;
}
//div 5 eventListener -  mouseover
var divFive = document.getElementById("five");
divFive.addEventListener("mouseover", mOver);
function mOver() {
  document.getElementById("addEventResult5").innerHTML += "Moused over!<br>";
}
