
import pageLoad from "./pageLoad";
import createMenu from "./menu.js";
import createLocation from "./location.js"
import createContact from "./contact.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
    pageLoad();

    const main = document.getElementById("main");
    const logo = document.getElementById("logo");

    // Make logo the reset button
    logo.addEventListener("click", () => {
        location.reload();
    });

    // Get tab elements
    const menuTab = document.querySelector(".menu");
    const locationsTab = document.querySelector(".locations");
    const contactTab = document.querySelector(".contact");

    menuTab.addEventListener("click", () => {
        main.innerHTML = "";
        main.appendChild(createMenu());
    });

    locationsTab.addEventListener("click", () => {
        main.innerHTML = "";
        main.appendChild(createLocation());
    });

    contactTab.addEventListener("click", () => {
        main.innerHTML = "";
        main.appendChild(createContact());
    });
});