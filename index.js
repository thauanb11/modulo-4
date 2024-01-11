const express = require('express');
const knex = require('./conexao');
const app = express();


app.get('/', async (req, res) => {
    //const quantidadeMedicamentos = await knex('farmacia').count();
    //const usuarioMaisNovo = await knex('usuarios').min('idade').debug();
    //   const somaCategoria = await knex('farmacia').select('categoria')
    //    .sum('estoque')
    //  .whereNotNull('categoria')
    //  .groupBy('categoria')
    // .debug();

    const categoriaNull = await knex('farmacia').whereNull('categoria').count().debug();
    //const farmacia = await knex('farmacia').whereNotNull('categoria', 'medicamento').debug();
    //const usuarios = await knex('usuarios').where('idade', '>=', 18).debug();


    return res.json(categoriaNull);
});

app.use(express.json());



app.listen(3000)