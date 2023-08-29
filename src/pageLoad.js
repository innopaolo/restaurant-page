import cabbageImage from "./cabbage2.png";

export default function pageLoad() {
    const contentDiv = document.getElementById("content"); 

    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    const main = document.createElement("main");
    const mainText = document.createElement("div");

    header.id = "header";
    nav.id = "nav-menu";
    h1.id = "logo";
    ul.id = "tabs";
    main.id = "main";
    mainText.id = "main-text";

    h1.textContent = "Cbbgs.";
    mainText.innerHTML = "We <span>love</span> cabbages.<br>We will make <span>you</span> love it, too."

    // Create list items for ul
    const tabs = ["MENU", "LOCATIONS", "CONTACT"];
    tabs.forEach(tab => {
        const liElement = document.createElement("li");
        liElement.classList.add(tab.toLowerCase());
        liElement.textContent = tab;
        ul.appendChild(liElement); 
    });

    nav.appendChild(h1);    
    nav.appendChild(ul);
    header.appendChild(nav);

    const img = document.createElement("img");
    img.id = "hero-image";
    img.src = cabbageImage;
    img.alt = "A nice succulent cabbage";

    contentDiv.appendChild(header);

    main.appendChild(img);
    main.appendChild(mainText);

    contentDiv.appendChild(main);
}