const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

const offScreenCat = document.querySelectorAll(".off-screen-cat");
const subMenu = document.querySelectorAll(".submenu");

offScreenCat.forEach((cat, index) => {
    cat.addEventListener("click", () => {
        subMenu[index].classList.toggle("active");
        cat.classList.toggle("active");
    });
});
