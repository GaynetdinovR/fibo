import createKnex from 'knex';

const knex = createKnex({
    client: 'sqlite3',
    connection: {
        filename: './database/database.db'
    },
    useNullAsDefault: true
});

export default knex;