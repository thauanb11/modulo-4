const express = require('express');
const knex = require('./conexao');
const app = express();


app.get('/', async (req, res) => {
    // conexao.query ('select * from agenda')
    // .debug sempre usado no knex.
    // const agenda = await knex('agenda').debug();
    // const agenda = await knex('agenda').where('id', 5).debug();
    // const agenda = await knex('agenda').where('id', '!=', 5).debug();
    // const agenda = await knex('agenda').where({ id: 5 }).first().debug();

    const agenda = await knex('agenda').where({ id: 5 }).select('id', 'nome').first().debug();



    return res.json(agenda);
});

app.use(express.json());



app.listen(3000)