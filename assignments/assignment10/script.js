const beforeAdoption = {
    'Whiskers': 'images/brownsadcat.jpg',
    'Mittens': 'images/whitesadcat.jpg',
    'Toby': 'images/blacksadcat.jpg'
};

const afterAdoption = {
    'Whiskers': 'images/brownhappycat.jpg',
    'Mittens': 'images/whitehappycat.jpg',
    'Toby': 'images/blackhappycat.jpg'
};

const catTitles = {
    'Whiskers': 'Whiskers the Explorer',
    'Mittens': 'Mittens the Cuddler',
    'Toby': 'Toby the Brave'
};

const container = document.getElementById('cats-container');
const popup = document.getElementById('item-popup');
const closeButton = document.getElementById('close-button');
const popupImage = document.getElementById('popup-image');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const showDetails = (event) => {
    const clickedElement = event.target.closest('img'); 
    if (!clickedElement) return;
    const name = clickedElement.dataset.name; 
    const title = clickedElement.dataset.title;
    const afterImageURL = afterAdoption[name];

    /* this populates the popup */
    popupTitle.textContent = title;
    popupText.textContent = `${name} is happy in their new home!`;
    popupImage.src = afterImageURL;

    popup.classList.remove('hidden');
};
for (const name in beforeAdoption) { /* loops the array */
    const cardHTML = `
        <div class="cat-card">
            <img src="${beforeAdoption[name]}" 
                 alt="${name} before adoption"
                 data-name="${name}" 
                 data-title="${catTitles[name]}">
            
            <div class="hover-text">
                <p>Please Adopt</p> 
                <p>${name}</p>
            </div>
        </div>
    `;
    container.innerHTML += cardHTML;
}

container.addEventListener('click', showDetails);
closeButton.addEventListener('click', () => {
     popup.classList.add('hidden');
});