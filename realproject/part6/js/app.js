(function() {
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open');
        });
    }

    let records = JSON.parse(localStorage.getItem('sleeveNotesRecords')) || [
        { id: 1, artist: 'Pink Floyd', title: 'The Dark Side of the Moon', year: 1973, genre: 'Progressive Rock', image: 'images/darkside.jpeg' },
        { id: 2, artist: 'The Beatles', title: 'Abbey Road', year: 1969, genre: 'Rock', image: 'images/abbey%20road.jpg' },
        { id: 3, artist: 'Fleetwood Mac', title: 'Rumours', year: 1977, genre: 'Rock', image: 'images/rumours.jpeg' },
        { id: 4, artist: 'Led Zeppelin', title: 'Led Zeppelin IV', year: 1971, genre: 'Hard Rock', image: 'images/led%20zep%204.jpg' },
        { id: 5, artist: 'Michael Jackson', title: 'Thriller', year: 1982, genre: 'Pop', image: 'images/thriller.jpeg' },
        { id: 6, artist: 'Kendrick Lamar', title: 'To Pimp a Butterfly', year: 2015, genre: 'Hip Hop', image: 'images/tpab.jpeg' },
        { id: 7, artist: 'Nirvana', title: 'Nevermind', year: 1991, genre: 'Grunge', image: 'images/nevermind.jpg' },
        { id: 8, artist: 'Daft Punk', title: 'Random Access Memories', year: 2013, genre: 'Electronic', image: 'images/randomaccess.jpeg' }
    ];

    const saveRecords = () => {
        localStorage.setItem('sleeveNotesRecords', JSON.stringify(records));
    };

    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'index.html' || currentPage === '') {
        const cardGrid = document.getElementById('card-grid');
        const searchBar = document.getElementById('search-bar');
        
        const renderCollection = (recordsToRender) => {
            cardGrid.innerHTML = '';
            recordsToRender.forEach(record => {
                const card = document.createElement('div');
                card.className = 'record-card';
                card.innerHTML = `
                    <a href="detail.html?id=${record.id}"><img src="${record.image}" alt="Cover for ${record.title}"></a>
                    <h3>${record.title}</h3>
                    <p>${record.artist}</p>
                `;
                cardGrid.appendChild(card);
            });
        };

        if(searchBar) {
            searchBar.addEventListener('keyup', (event) => {
                const searchTerm = event.target.value.toLowerCase();
                const filteredRecords = records.filter(record => {
                    return record.title.toLowerCase().includes(searchTerm) || record.artist.toLowerCase().includes(searchTerm);
                });
                renderCollection(filteredRecords);
            });
        }

        renderCollection(records);
    }

    if (currentPage === 'add-new.html') {
        const addForm = document.getElementById('add-form');
        if(addForm) {
            addForm.addEventListener('submit', (event) => {
                event.preventDefault();
                
                const newRecord = {
                    id: Date.now(),
                    artist: document.getElementById('artist').value,
                    title: document.getElementById('album-title').value,
                    year: document.getElementById('year').value,
                    genre: document.getElementById('genre').value,
                    image: 'images/placeholder-album-1.jpg'
                };
                
                records.push(newRecord);
                saveRecords();
                
                window.location.href = 'index.html';
            });
        }
    }
    
    if (currentPage === 'detail.html') {
        const urlParams = new URLSearchParams(window.location.search);
        const recordId = parseInt(urlParams.get('id'));
        const record = records.find(r => r.id === recordId);

        if (record) {
            document.getElementById('detail-title').textContent = record.title;
            document.getElementById('detail-artist').textContent = `By ${record.artist}`;
            document.getElementById('detail-image').src = record.image;
            document.getElementById('detail-year').textContent = record.year;
            document.getElementById('detail-genre').textContent = record.genre;
        } else {
            document.querySelector('.container').innerHTML = '<h1>Record not found.</h1>';
        }
    }
    if (currentPage === 'profile.html') {
        document.getElementById('total-records-stat').textContent = records.length;
        
        const genreCounts = {};
        records.forEach(record => {
            if(record.genre) {
                genreCounts[record.genre] = (genreCounts[record.genre] || 0) + 1;
            }
        });
        
        let favoriteGenre = 'N/A';
        let maxCount = 0;
        for (const genre in genreCounts) {
            if (genreCounts[genre] > maxCount) {
                favoriteGenre = genre;
                maxCount = genreCounts[genre];
            }
        }
        document.getElementById('favorite-genre-stat').textContent = favoriteGenre;
    }

})();