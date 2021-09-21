if (document.readyState !== "loading") {
  console.log("Document ready");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting?");
  });
}

function initializeCode() {
  const addCommentButton = document.getElementById("add-comment");
  const removeCommentButton = document.getElementById("remove-comment");

  addCommentButton.addEventListener("click", function () {
    const text = document.getElementById("text-area").value;
    const ul = document.getElementById("comments");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);
    console.log("Working");
  });
  removeCommentButton.addEventListener("click", function () {
    const ul = document.getElementById("comments");
    ul.removeChild(ul.lastChild);
    console.log("Remove comment");
  });
}
