// conexao.query ('select * from agenda')
    // .debug sempre usado no knex.
    // const agenda = await knex('agenda').debug();
    // const agenda = await knex('agenda').where('id', 5).debug();
    // const agenda = await knex('agenda').where('id', '!=', 5).debug();
    // const agenda = await knex('agenda').where({ id: 5 }).first().debug();
    // const agenda = await knex('agenda').where({ id: 5 }).select('id', 'nome').first().debug();

    // SELECT * from agenda where email is null
    //const agenda = await knex('agenda').whereNull('email').debug();
    // SELECT * from agenda where email is not null
    //const agenda = await knex('agenda').whereNotNull('email').debug();
    // SELECT * from agenda where id betwenn 5 and 10
    //const agenda = await knex('agenda').whereBetween('id', [5, 10]).debug();
    //const agenda = await knex('agenda').whereBetween('id', [5, 10]).orderBy('id', 'desc').debug();


    // select email, count(*) from agenda group by email 
    // const agenda = await knex('agenda').limit(5).offset(2).debug();
    //const agenda = await knex('agenda').select('email').groupBy('email').count().debug();
    //const agenda = await knex('agenda').whereNull('email').sum('id').debug();
    //const agenda = await knex('agenda').whereNull('email').avg('id').debug();
    //const agenda = await knex('agenda').whereNull('email').min('id').debug();
    //const agenda = await knex('agenda').whereNull('email').max('id').debug();

    //const agenda = await knex('agenda').whereNull('email').max('id').debug();
