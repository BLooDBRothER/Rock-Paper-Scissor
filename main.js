const items = document.querySelectorAll(".item");

let regularRE = /-regular/gi;
let solidRE = /-solid/gi;

items.forEach(item => {
    item.addEventListener("mouseenter", function (){
        this.src = this.src.replace(regularRE, '-solid');
    });
    item.addEventListener("mouseleave", function (){
        this.src = this.src.replace(solidRE, '-regular');
    });
});