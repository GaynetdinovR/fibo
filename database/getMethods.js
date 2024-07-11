import knex from './database.js';

const getProducts = async (req, res) => {
    knex.select('*')
        .from('products')
        .then((data) => res.json(data))
        .catch((err) => res.json({message: `ERROR MESSAGE: ${err}`}));
}

export {
    getProducts
}