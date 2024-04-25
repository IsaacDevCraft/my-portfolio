function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    // Toggle the 'open' class
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}
function expandText() {
    var expandableText = document.getElementById("expandableText");
    var button = document.querySelector(".text-container button");

    if (expandableText.style.display === "none") {
        expandableText.style.display = "block";
        button.textContent = "Read less";
    } else {
        expandableText.style.display = "none";
        button.textContent = "Read more...";
    }
}
