const navitems = document.querySelector(".nav-items");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".nav-close");

hamburgerIcon.addEventListener("click", () => {
    navitems.classList.add("open");
});

closeIcon.addEventListener("click", () => {
    navitems.classList.remove("open")
})