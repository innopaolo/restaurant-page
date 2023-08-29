import phoneIcon from "./phone.png";

export default function createContact() {
    const contactDiv = document.createElement("div");
    contactDiv.id = "contact-div";

    const img = document.createElement("img");
    img.src = phoneIcon;
    img.alt = "candlestick phone icon";

    const contactText = document.createElement("p");

    contactText.innerHTML = "Cabbage Corp is open <span>25/7</span>.<br> Go to the nearest cart to speak with a cabbagevisor."

    contactDiv.appendChild(img);
    contactDiv.appendChild(contactText); 

    return contactDiv;
}