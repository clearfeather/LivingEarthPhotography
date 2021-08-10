function mobileMenu() {

    // Navigation Menu
    const navLinks = document.querySelector("#navLinks");

    // Middle section - Toggle dark background
    const middleMain = document.querySelector(".middle");
    middleMain.classList.toggle('menuBackground');
    
    // Elements within Middle section (title, buttons, social media)
    const middleTitle = document.querySelector(".title");
    const middleButton = document.querySelector(".button");
    const middleSocial = document.querySelector(".social-buttons");
    
    
    // Hiding the menu, display middle header
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
        middleTitle.style.display = "block";
        middleButton.style.display = "block";
        middleSocial.style.display = "flex";

    // Showing the menu, hiding middle header
    } else {
        navLinks.style.display = "flex";
        middleTitle.style.display = "none";
        middleButton.style.display = "none";
        middleSocial.style.display = "none";
    }
}