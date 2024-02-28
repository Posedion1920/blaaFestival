const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    const plusIcon = title.querySelector('.fa-plus');
    const minusIcon = title.querySelector('.fa-minus');

    if (content.classList.contains('show')) {
      content.classList.remove('show');
      plusIcon.classList.remove('hidden');
      minusIcon.classList.add('hidden');
    } else {
      content.classList.add('show');
      plusIcon.classList.add('hidden');
      minusIcon.classList.remove('hidden');
    }
  });
});




// Burgermenu
const BurgermenuEl = document.querySelector(".burger-menu");
const menuEl= document.querySelector(".menu");
const xmarkEl = document.getElementById("Remove")

function ShowMenu(){
  menuEl.style.display = "block";
  BurgermenuEl.style.display="none";
}

function RemoveMenu(){
  menuEl.style.display="none";
  BurgermenuEl.style.display="block";
}

BurgermenuEl.addEventListener("click",function(){
  ShowMenu();
})

xmarkEl.addEventListener("click",function(){
  RemoveMenu();
})
