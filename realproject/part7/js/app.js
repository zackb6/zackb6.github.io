(function() {
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");
    if (menuToggle) {
        menuToggle.addEventListener('click', () => { mainNav.classList.toggle('nav-open'); });
    }

    let records = JSON.parse(localStorage.getItem('sleeveNotesRecords')) || [];
    const saveRecords = () => { localStorage.setItem('sleeveNotesRecords', JSON.stringify(records)); };

    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'index.html' || currentPage === '') {
        const cardGrid = document.getElementById('card-grid');
        const renderCollection = () => {
            cardGrid.innerHTML = '';
            records.forEach(record => {
                const card = document.createElement('div');
                card.className = 'record-card';
                card.innerHTML = `<a href="detail.html?id=${record.id}"><img src="${record.image}" alt="Cover for ${record.title}"></a><h3>${record.title}</h3><p>${record.artist}</p>`;
                cardGrid.appendChild(card);
            });
        };
        renderCollection();
    }

    if (currentPage === 'add-new.html') {
        const addForm = document.getElementById('add-form');
        const coverArtInput = document.getElementById('cover-art-input');
        const artPreview = document.getElementById('art-preview');

        if(coverArtInput) {
            coverArtInput.addEventListener('change', () => {
                const file = coverArtInput.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        artPreview.src = event.target.result;
                        artPreview.style.display = 'block';
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        if(addForm) {
            addForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const newRecord = {
                    id: Date.now(),
                    artist: document.getElementById('artist').value,
                    title: document.getElementById('album-title').value,
                    year: document.getElementById('year').value,
                    image: artPreview.src 
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
        }
    }
    if (currentPage === 'contact.html') {
        const contactForm = document.getElementById('contact-form');
        const formStatus = document.getElementById('form-status');
        if (contactForm) {
            contactForm.addEventListener('submit', (event) => {
                event.preventDefault();
                formStatus.textContent = 'Success! Your message has been sent.';
                formStatus.className = 'form-status success';
            });
        }
    }
})();