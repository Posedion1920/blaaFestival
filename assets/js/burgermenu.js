// Burgermenu
const BurgermenuEl = document.querySelector(".burger-menu");
const menuEl = document.querySelector(".menu");
const xmarkEl = document.getElementById("Remove")
const Btn = document.querySelector(".LiveButton");
const dot = document.querySelector(".redDOt");

function ShowMenu() {
  menuEl.style.display = "block";
  BurgermenuEl.style.display = "none";
  Btn.style.backgroundColor="#FFFFFF"
  Btn.style.color = "#DE851D";
  dot.style.top="10px";
};

function RemoveMenu() {
  menuEl.style.display = "none";
  BurgermenuEl.style.display = "block";
}

BurgermenuEl.addEventListener("click", function () {
  ShowMenu();
});

xmarkEl.addEventListener("click", function () {
  RemoveMenu();
});

