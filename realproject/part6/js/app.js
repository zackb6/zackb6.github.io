(function() {
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");
    if (menuToggle) {
        menuToggle.addEventListener('click', () => { mainNav.classList.toggle('nav-open'); });
    }

    const records = [
        { id: 1, artist: 'Pink Floyd', title: 'The Dark Side of the Moon', image: 'images/darkside.jpeg' },
        { id: 2, artist: 'The Beatles', title: 'Abbey Road', image: 'images/abbey-road.jpg' },
        { id: 3, artist: 'Fleetwood Mac', title: 'Rumours', image: 'images/rumours.jpeg' },
        { id: 4, artist: 'Led Zeppelin', title: 'Led Zeppelin IV', image: 'images/led-zep-4.jpg' },
        { id: 5, artist: 'Michael Jackson', title: 'Thriller', image: 'images/thriller.jpeg' },
        { id: 6, artist: 'Kendrick Lamar', title: 'To Pimp a Butterfly', image: 'images/tpab.jpeg' },
        { id: 7, artist: 'Nirvana', title: 'Nevermind', image: 'images/nevermind.jpg' },
        { id: 8, artist: 'Daft Punk', title: 'Random Access Memories', image: 'images/randomaccess.jpeg' }
    ];

    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'index.html' || currentPage === '') {
        const cardGrid = document.getElementById('card-grid');
        if (cardGrid) {
            cardGrid.innerHTML = '';
            records.forEach(record => {
                const card = document.createElement('div');
                card.className = 'record-card';
                card.innerHTML = `
                    <a href="detail.html?id=${record.id}"><img src="${record.image}" alt="Cover for ${record.title}"></a>
                    <h3>${record.title}</h3>
                    <p>${record.artist}</p>
                `;
                cardGrid.appendChild(card);
            });
        }
    }
})();