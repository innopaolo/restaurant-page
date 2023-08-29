
import pageLoad from "./pageLoad";
import createMenu from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
    pageLoad();

    const main = document.getElementById("main");

    // Get tab elements
    const menuTab = document.querySelector(".menu");
    console.log(menuTab.innerHTML);


    menuTab.addEventListener("click", () => {
        main.innerHTML = "";
        main.appendChild(createMenu());
    });
});