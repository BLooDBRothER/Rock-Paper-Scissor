const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("mouseenter", function (){
        let solid = `./assets/${this.dataset.value}-solid.svg`;
        this.src = solid;
    });
    item.addEventListener("mouseleave", function (){
        let regular = `./assets/${this.dataset.value}-regular.svg`;
        this.src = regular;
    });
});