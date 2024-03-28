const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".list-hamburger");
const check = document.querySelector("#check");
const hamburgerButtons = document.querySelectorAll(".burger-button");

function openMenu() {
    nav.classList.add("active");
}

function closeMenu() {
    nav.classList.remove("active");
    check.checked = false;
}

//Even listeners

hamburger.addEventListener("click", function() {
    if (nav.classList.contains("active")) {
        closeMenu(); 
    } else {
        openMenu(); 
    }
});

hamburgerButtons.forEach(button => {
    button.addEventListener("click", closeMenu);
});


hamburger.addEventListener("click", openMenu)
