const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const title = item.querySelector('.accordion-title');

  title.addEventListener('click', () => {
    item.classList.toggle('show');
  });
});





// Burgermenu
const BurgermenuEl = document.querySelector(".burger-menu");
const menuEl = document.querySelector(".menu");
const xmarkEl = document.getElementById("Remove")

function ShowMenu() {
  menuEl.style.display = "block";
  BurgermenuEl.style.display = "none";
}

function RemoveMenu() {
  menuEl.style.display = "none";
  BurgermenuEl.style.display = "block";
}

BurgermenuEl.addEventListener("click", function () {
  ShowMenu();
})

xmarkEl.addEventListener("click", function () {
  RemoveMenu();
})

