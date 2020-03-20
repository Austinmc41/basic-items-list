var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var i = 0; //to count the buttons in the list
// console.log(del);

function inputLength() {
  return input.value.length;
}

function createDeleteListItem() {
  var del = document.createElement("button");
  del.setAttribute("id", i);
  del.innerHTML = "delete";
  del.addEventListener("click", function() {
    var elemDelButton = document.getElementById(event.target.id);
    var elemDelItem = event.target.parentNode;
    console.log(elemDelItem);
    console.log(elemDelButton);
    elemDelButton.parentNode.removeChild(elemDelButton);
    elemDelItem.parentNode.removeChild(elemDelItem);
  });
  return del;
}

function addToList() {
  var li = document.createElement("li");
  var del = createDeleteListItem();
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.appendChild(del);
  input.value = "";
  i++; //increments button count so we can attach proper num id to each button
}

function deleteFromList() {

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

function strikeFromList(event) {
  var targetItem = event.target;

  //Want to only be able to select li item, and not whole list
  if (targetItem.tagName == "LI") {
    targetItem.classList.toggle("done");
  }
}

button.addEventListener("click", addToListClick);
//javascript keycodes

input.addEventListener("keypress", addToListEnter);

ul.addEventListener("click", strikeFromList);

// del.addEventListener("click", function() {
//   console.log(event.target);
// });
