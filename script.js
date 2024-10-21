"use strict"

const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

function zeigen() {
    let texty = document.getElementById("texty");
    let mehrLesen = document.getElementById("mehrlesen");
    if (texty.style.height === "240px") {
        texty.style.height = "80px";
        texty.style.overflow = "hidden";
        texty.style.transition = "height 500ms ease";
        mehrLesen.textContent = "Mehr lesen";
    } else {
        texty.style.height = "240px";
        texty.style.transition = "height 500ms ease";
        mehrLesen.textContent = "Weniger lesen"
    }
}