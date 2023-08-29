import cabbageMan from "./cabbage-man.png";

export default function createMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.id = "menu-div";

    const img = document.createElement("img");
    img.src = cabbageMan;
    img.alt = "A nice cabbage merchant unjustly suffering";

    const menuText = document.createElement("p");

    menuText.textContent = "We are unable to supply delicious cabbages at the moment due to a gang of heartless ruffians plowing into our cart. Stay tuned!"

    menuDiv.appendChild(img);
    menuDiv.appendChild(menuText); 

    return menuDiv;
}