const dataMapper = require('../dataMapper.js');

const mainController = {

    homePage: (req, res) => {

        dataMapper.getAllPokemon((err, results) => {
            if (err) {
                console.error(err);
                next();
                return;
            }
            res.render('index', {
                pokemons: results.rows,
            })
        });

    },

    pokePage: (req, res) => {

        const id = req.params.id;

        dataMapper.getOnePokemon(id, (err, results) => {
            if (err) {
                console.error(err);
                next();
                return;
            }
            let types = [];
            if (results.rows.length > 1) {
                for (const result of results.rows) {
                    type = {name: result.name, color: result.color};
                    types.push(type);
                }
            } else {
                types = {name: results.rows[0].name, color: results.rows[0].color};
            }
            console.log(`types`, types)
            res.render('details', {
                pokemon: results.rows[0],
                types
            })
        });
    },

    pokeTypes: (req, res) => {

        dataMapper.getAllType((err, results) => {
            if (err) {
                console.error(err);
                next();
                return;
            }
            res.render('types', {
                types: results.rows,
            })
        });
    },

    pokeFilter: (req, res) => {

        const {type} = req.query

        dataMapper.getFilterPokemon(type ,(err, results) => {
            if (err) {
                console.error(err);
                next();
                return;
            }
            res.render('filter', {
                pokemons: results.rows,
            })
        });

    },
};

module.exports = mainController;