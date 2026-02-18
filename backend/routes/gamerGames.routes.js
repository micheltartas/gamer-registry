const express = require('express');
const router = express.Router();
const db = require('../db');

/* LISTAR ASSOCIAÇÕES */
router.get('/', async (req, res) => {
    try {
        const result = await db.query(`
            SELECT gg.id, g.nickname, gm.title
            FROM gamer_games gg
            JOIN gamers g ON g.id = gg.gamer_id
            JOIN games gm ON gm.id = gg.game_id
        `);

        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


/* CRIAR ASSOCIAÇÃO */
router.post('/', async (req, res) => {
    const { gamer_id, game_id } = req.body;

    try {
        const result = await db.query(
            'INSERT INTO gamer_games (gamer_id, game_id) VALUES ($1, $2) RETURNING *',
            [gamer_id, game_id]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


/* DELETAR ASSOCIAÇÃO */
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await db.query('DELETE FROM gamer_games WHERE id = $1', [id]);
        res.json({ message: 'Associação removida' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
