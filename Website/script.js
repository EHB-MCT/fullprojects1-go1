const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})


/* function openForm() {
    document.getElementById("infodag").style.display = "block";
}
  
function closeForm() {
    document.getElementById("infodag").style.display = "none";
} */
const closePopUp = document.getElementById("close_pop_up");
closePopUp.addEventListener("click", () =>{
    document.getElementById("pop_up").style.display = "none";
});



const offScreenCat = document.querySelectorAll(".off-screen-cat");
const subMenu = document.querySelectorAll(".submenu");

offScreenCat.forEach((cat, index) => {
    cat.addEventListener("click", () => {
        subMenu[index].classList.toggle("active");
        cat.classList.toggle("active");
    });
});
