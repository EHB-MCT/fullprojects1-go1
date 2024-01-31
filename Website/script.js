const hamMenu = document.querySelector(".ham-menu");
const sidebar = document.querySelector(".sidebar");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    sidebar.classList.toggle("showMenu");
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




