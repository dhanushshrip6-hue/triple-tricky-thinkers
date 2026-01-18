function jump(button) {
  // Get the next sibling <ul> of the button
  const list = button.nextElementSibling;

  if (list.style.display === "block") {
    list.style.display = "none";
    button.innerText = "📘 Show Topics"; // Update button text
  } else {
    list.style.display = "block";
    button.innerText = "📕 Topics"; // Update button text
  }
}
