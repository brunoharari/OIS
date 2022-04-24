if (document.readyState !== "loading") {
  ready();
} else {
  document.addEventListener("DOMContentLoaded", ready);
}

function ready() {
  var accordion = document.getElementsByTagName("dt");

  for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      accordionClick(event);
    });
  }
}

var accordionClick = (event) => {
  var targetClicked = event.target;
  var id = event.target.id;

  targetClicked.children;

  var classClicked = targetClicked.classList;

  while (classClicked[0] != "description-title") {
    targetClicked = targetClicked.parentElement;
    classClicked = targetClicked.classList;
  }
  var description = targetClicked.nextElementSibling;

  var expanders = document.getElementsByClassName("expand-collapse");

  if (description.style.maxHeight) {
    description.style.maxHeight = null;
    expanders[id].classList.remove("rotated");
  } else {
    var allDescriptions = document.getElementsByTagName("dd");
    for (var i = 0; i < allDescriptions.length; i++) {
      if (allDescriptions[i].style.maxHeight) {
        allDescriptions[i].style.maxHeight = null;
        expanders[id].classList.remove("rotated");
      }
    }
    description.style.maxHeight = description.scrollHeight + "px";
    expanders[id].classList.add("rotated");
  }
};
