function mobileMenu() {

    //Set Variables for each class style

    //Navigation Menu
    const navLinks = document.querySelector("#navLinks");

    //Middle sections
    //var middleMain = document.getElementsByClassName("middle")[0];
    //middleMain.classList.toggle("menuBackground")[0];
    
    const middleTitle = document.querySelector(".title");
    const middleButton = document.querySelector(".button");
    const middleSocial = document.querySelector(".social-buttons");
    
    
    //Hiding the menu, display middle header
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
        middleTitle.style.display = "block";
        middleButton.style.display = "block";
        middleSocial.style.display = "flex";

    //Showing the menu, hiding middle header
    } else {
        navLinks.style.display = "flex";
        middleTitle.style.display = "none";
        middleButton.style.display = "none";
        middleSocial.style.display = "none";
    }
}