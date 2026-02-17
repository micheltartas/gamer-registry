const API = 'http://localhost:3000';

async function addGamer() {
    const nickname = document.getElementById('nickname').value;
    const email = document.getElementById('email').value;

    await fetch(`${API}/gamers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname, email })
    });

    loadGamers();
}

async function loadGamers() {
    const res = await fetch(`${API}/gamers`);
    const data = await res.json();

    const list = document.getElementById('gamerList');
    list.innerHTML = '';

    data.forEach(g => {
        const li = document.createElement('li');
        li.textContent = `${g.nickname} - ${g.email}`;
        list.appendChild(li);
    });
}

async function addGame() {
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;

    await fetch(`${API}/games`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, genre, release_year: year })
    });

    loadGames();
}

async function loadGames() {
    const res = await fetch(`${API}/games`);
    const data = await res.json();

    const list = document.getElementById('gameList');
    list.innerHTML = '';

    data.forEach(g => {
        const li = document.createElement('li');
        li.textContent = `${g.title} - ${g.genre}`;
        list.appendChild(li);
    });
}

if (document.getElementById('gamerList')) loadGamers();
if (document.getElementById('gameList')) loadGames();