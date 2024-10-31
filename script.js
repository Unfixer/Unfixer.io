function toggleMenu(){
    const menu = document.querySelector(".menu-links")   // Targetting the menu-links element in the index.html file
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}