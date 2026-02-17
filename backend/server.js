const express = require('express');
const cors = require('cors');

const gamersRoutes = require('./routes/gamers.routes');
const gamesRoutes = require('./routes/games.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/gamers', gamersRoutes);
app.use('/games', gamesRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});