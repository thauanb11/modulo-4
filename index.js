const express = require('express');
const knex = require('./conexao');
const app = express();


app.get('/', async (req, res) => {
    const agenda = await knex('agenda');
    return res.json(agenda);
});

app.use(express.json());



app.listen(3000)