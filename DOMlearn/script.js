var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function addToList() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addToListClick() {
  if (inputLength() > 0) {
    addToList();
  }
}

function addToListEnter(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    addToList();
  }
}

button.addEventListener("click", addToListClick);
//javascript keycodes

input.addEventListener("keypress", addToListEnter);
