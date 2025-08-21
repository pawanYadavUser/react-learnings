//1. Select elements
const heading = document.getElementById("heading");
const description = document.getElementById("description");
const changeBtn = document.getElementById("changeBtn");
const addBtn = document.getElementById("addBtn");

//2. Update existing element content
changeBtn.addEventListener("click", function () {
  heading.textContent = "Hello, Frontend developers";
  description.style.color = "blue"; //style change
});

//3. Add a new element to the DOM
addBtn.addEventListener("click", function () {
  const newPara = document.createElement("p");
  newPara.textContent = "This is a new paragrph added to the DOM";
  document.body.appendChild(newPara);
});
