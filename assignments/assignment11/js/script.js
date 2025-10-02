class Painting {
    constructor(title, artist, year, image, isFramed) {
        this.title = title;
        this.artist = artist;
        this.year = year;
        this.image = image;
        this.isFramed = isFramed;
    }
}

const paintings = [];
paintings.push(new Painting("The Bee", "Artist A", 2023, "images/bee.jpg", true));
paintings.push(new Painting("The Cat", "Artist B", 2022, "images/cat.jpg", false));
paintings.push(new Painting("The Flowers", "Artist C", 2021, "images/flowers.jpg", true));
paintings.push(new Painting("The Fox", "Artist D", 2024, "images/fox.jpg", true));

const galleryContainer = document.getElementById("gallery-container");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const popupTitle = document.getElementById("popup-title");
const popupArtist = document.getElementById("popup-artist");
const popupYear = document.getElementById("popup-year");
const closeBtn = document.getElementById("close-btn");

paintings.forEach((painting, index) => {
    const frame = document.createElement("div");
    frame.classList.add("painting-frame");
    frame.dataset.index = index;

    const img = document.createElement("img");
    img.src = painting.image;
    img.alt = painting.title;

    frame.appendChild(img);
    galleryContainer.appendChild(frame);
});

galleryContainer.addEventListener("click", (event) => {
    const clickedFrame = event.target.closest(".painting-frame");

    if (clickedFrame) {
        const index = clickedFrame.dataset.index;
        const paintingData = paintings[index];

        popupImage.src = paintingData.image;
        popupTitle.textContent = paintingData.title;
        popupArtist.textContent = paintingData.artist;
        popupYear.textContent = `Year: ${paintingData.year}`;

        popup.classList.remove("hidden");
    }
});

// === 6. Close the Popup ===
closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
});