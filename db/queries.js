const knex = require("./knex");

module.exports = {


  getAll: function() {
    return knex("planet");
  },

  getPlanet: function(_id) {
    return knex("planet").where("id", _id).first();
  },

  getPlanetByName: function(_name) {
    return knex("planet").where("name", _name).first();
  },

  getFact: function(_id) {
    return knex.select("fact").from("planet").where("id", _id).first();
  },

  getGravity: function (_id) {
    return knex.select("gravity").from("planet").where("id", _id).first();
  },

  create: function (planet) {
    return knex("planet").insert(planet, "*");
  },

  update(id, planet) {
    return knex("planet").where("id", id).update(planet, "*");
  },

  delete(id) {
    return knex("planet").where("id", id).del();
  }
}
