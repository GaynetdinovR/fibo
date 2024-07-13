import createKnex from 'knex';

const knex = createKnex({
    client: 'sqlite3',
    connection: {
        filename: './database/database.db'
    },
    useNullAsDefault: true
});

console.log('Connected to Sqlite3 DB');

export default knex;