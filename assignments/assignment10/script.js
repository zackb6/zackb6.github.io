const cats = [
    { name: 'Whiskers', title: 'Whiskers the Explorer', before: 'images/brownsadcat.jpg', after: 'images/brownhappycat.jpg' },
    { name: 'Mittens', title: 'Mittens the Cuddler', before: 'images/whitesadcat.jpg', after: 'images/whitehappycat.jpg' },
    { name: 'Toby', title: 'Toby the Brave', before: 'images/blacksadcat.jpg', after: 'images/blackhappycat.jpg' }
];

const container = document.getElementById('cats-container');
const popup = document.getElementById('item-popup');
const closeButton = document.getElementById('close-button');
const popupImage = document.getElementById('popup-image');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');

cats.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.dataset.name = cat.name;

    const img = document.createElement('img');
    img.src = cat.before;
    img.alt = `${cat.name} before adoption`;

    const hoverText = document.createElement('div');
    hoverText.className = 'hover-text';
    hoverText.innerHTML = `<p>Please Adopt</p><p>${cat.name}</p>`;

    card.appendChild(img);
    card.appendChild(hoverText);
    container.appendChild(card);
});

const showDetails = (event) => {
    const card = event.target.closest('.cat-card');
    if (!card) return;

    const catName = card.dataset.name;
    const catData = cats.find(cat => cat.name === catName);

    popupTitle.textContent = catData.title;
    popupText.textContent = `${catData.name} is happy in their new home!`;
    popupImage.src = catData.after;

    popup.classList.remove('hidden');
};

const hideDetails = () => {
    popup.classList.add('hidden');
};

container.addEventListener('click', showDetails);
closeButton.addEventListener('click', hideDetails);