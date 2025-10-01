const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuList = mobileMenu.querySelector("ul");

let isOpen = false;

menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
    mobileMenu.classList.remove("max-h-0");
    mobileMenu.classList.add("max-h-screen");
    mobileMenuList.classList.remove("opacity-0");
    mobileMenuList.classList.add("opacity-100");
    } else {
    mobileMenu.classList.add("max-h-0");
    mobileMenu.classList.remove("max-h-screen");
    mobileMenuList.classList.add("opacity-0");
    mobileMenuList.classList.remove("opacity-100");
    }
});