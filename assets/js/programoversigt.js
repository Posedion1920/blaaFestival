const filtering = document.querySelector("#torsdag")

function Removeitems() {
    let sections = document.querySelectorAll("section");
    for (let i = 0; i < 16; i++) {
        if (i > 3) {
            sections[i].classList.toggle("remove");
        }
    }
    if (filtering.style.backgroundColor === "rgb(222, 133, 29)") {
        filtering.style.backgroundColor = "";
        filtering.style.color = "";
    } else {
        filtering.style.backgroundColor = "#DE851D";
        filtering.style.color = "#ffffff";
    }
}

filtering.addEventListener("click", function () {
    Removeitems();

});


/*const content = document.querySelectorAll(".carouselContent");

console.log(content.children.length);
const slide = Array.from(content.children);

const nextButton = document.querySelector(".carouselButtonRight");
const prevButton = document.querySelector(".carouselButtonLeft");
const dotsNav = document.querySelector(".carouselNav");
const dots = Array.from(dotsNav.children);*/

//når jeg klikker venstre, flyttter den til venstre 
//når jeg klikker højre, flytter den til højre 
//når jeg klikker på min nav, så flytter den sig hen til den slide
