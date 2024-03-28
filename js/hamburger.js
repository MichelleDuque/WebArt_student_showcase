// Hamburger Menu

let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
        
hamburger.onclick = function() {
        nav.classList.toggle("active");
    }