// Change text content
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("message").textContent = "Text has been changed!";
  });
  // Change CSS style
document.getElementById("changeStyleBtn").addEventListener("click", function() {
    document.getElementById("message").style.color = "blue";
    document.getElementById("message").style.fontSize = "30px";
  });
  // Add a new element
document.getElementById("addElementBtn").addEventListener("click", function() {
    const newPara = document.createElement("p");
    newPara.textContent = "This is a new paragraph!";
    newPara.id = "newParagraph";
    document.body.appendChild(newPara);
  });
  // Remove the newly added element
document.getElementById("removeElementBtn").addEventListener("click", function() {
    const elementToRemove = document.getElementById("newParagraph");
    if (elementToRemove) {
      elementToRemove.remove();
    }
  });