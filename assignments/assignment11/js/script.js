class Painting {
    constructor(name, artist, image, isFramed) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.isFramed = isFramed;
    }

    getSection() {
        return `
            <div class="painting-section" data-name="${this.name}">
                <h3>${this.name}</h3>
                <img src="${this.image}" alt="${this.name}">
            </div>
        `;
    }
}

const paintings = [
    new Painting("The Bee", "Artist A", "images/bee.jpg", true),
    new Painting("Dream love kitten", "Artist B", "images/cat.jpg", false),
    new Painting("Flowers and Butterflies", "Artist C", "images/flowers.jpg", true),
    new Painting("Forest Animals", "Artist D", "images/fox.jpg", true)
];

const galleryContainer = document.getElementById("gallery-container");
const modal = document.getElementById("painting-modal");
const popupTitle = document.getElementById("popup-title");
const popupImage = document.getElementById("popup-image");
const popupArtist = document.getElementById("popup-artist");
const closeBtn = document.getElementById("close-btn");

paintings.forEach(painting => {
    galleryContainer.innerHTML += painting.getSection();
});

galleryContainer.addEventListener("click", (event) => {
    const clickedPainting = event.target.closest(".painting-section");
    if (!clickedPainting) return;

    const paintingName = clickedPainting.dataset.name;

    const paintingData = paintings.find(p => p.name === paintingName);
    
    popupTitle.textContent = paintingData.name;
    popupArtist.textContent = `by ${paintingData.artist}`;
    popupImage.src = paintingData.image;

    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});