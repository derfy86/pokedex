const client = require('./database');

const dataMapper = {

  getAllPokemon: function (callback) {
      const query = {
        text: `SELECT * FROM "pokemon"`
      };
      client.query(query, callback);
  },

  getOnePokemon: function (id, callback) {
    const query = {
      text: `SELECT p.*, t.name, t.color FROM pokemon AS p LEFT JOIN pokemon_type AS pT ON p.numero = pT.pokemon_numero LEFT JOIN type AS t ON pT.type_id = t.id WHERE p.id=$1`,
      values: [id]
    };
    client.query(query, callback);
  },

  getAllType: function (callback) {
    const query = {
      text: `SELECT * FROM "type"`
    };
    client.query(query, callback);
  },

  getFilterPokemon: function (type, callback) {
    console.log(`type`, type)
    const query = {
      text: `SELECT p.*, t.name FROM pokemon AS p LEFT JOIN pokemon_type AS pT ON p.numero = pT.pokemon_numero LEFT JOIN type AS t ON pT.type_id = t.id WHERE t.name=$1`,
      values: [type]
    };
    client.query(query, callback);
  },
}

module.exports = dataMapper;