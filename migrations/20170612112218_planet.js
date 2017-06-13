
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("planet", function(table) {
    table.increments("id").primary();
    table.string("name").notNull();
    table.string("fact").notNull();
    table.string("description", 5000);
    table.float("gravity");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("planet");
};
