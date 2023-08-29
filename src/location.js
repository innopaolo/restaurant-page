import locationPin from "./white-lotus-pin.png";

export default function createLocation() {
    const locationDiv = document.createElement("div");
    locationDiv.id = "location-div";

    const img = document.createElement("img");
    img.src = locationPin;
    img.alt = "location white lotus pin icon";

    const locationText = document.createElement("p");

    locationText.innerHTML = "We will find you.<br>We <span>know</span> where you are."

    locationDiv.appendChild(img);
    locationDiv.appendChild(locationText); 

    return locationDiv;
}