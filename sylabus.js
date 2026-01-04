function toggle(element) {
  let list = element.nextElementSibling;
  if (list.style.display === "block") {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}

