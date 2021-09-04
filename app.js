var itemContainer = document.querySelector("ul");
var entry = document.querySelector("input");

//Toggle done state
itemContainer.addEventListener("click", function(e) {
  if (e.target && e.target.nodeName === "LI") {
    e.target.classList.toggle("selected");
  } else if (e.target && e.target.nodeName === "SPAN") {
    var parent = e.target.parentNode;
    parent.parentNode.removeChild(parent);
  }
});

//Add new item
entry.addEventListener("keypress", function(e) {
  var entryText = entry.value;
  if (e.which === 13 && entryText) {
    this.value = "";
    itemContainer.insertAdjacentHTML(
      "afterbegin",
      "<li><span>×</span>" + entryText + "</li>"
    );
  }
});
