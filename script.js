const Navmenu = document.getElementById("items");
const openMenuIcon = document.querySelector(".fa-bars");  // Select the open menu icon
const closeMenuIcon = document.querySelector(".fa-times"); // Select the close menu icon

function openmenu() {
    Navmenu.style.right = "0"; // Show the menu
    openMenuIcon.style.display = "none"; // Hide the open menu icon
    closeMenuIcon.style.display = "block"; // Show the close menu icon
}

function closemenu() {
    Navmenu.style.right = "-200px"; // Hide the menu
    openMenuIcon.style.display = "block"; // Show the open menu icon
    closeMenuIcon.style.display = "none"; // Hide the close menu icon
}

// Add event listeners
openMenuIcon.addEventListener("click", openmenu);
closeMenuIcon.addEventListener("click", closemenu);







