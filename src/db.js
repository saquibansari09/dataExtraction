const Data = require("pg").Data;

const data = new Data({
  user: "postgres",
  password: "12345@",
  host: "localhost",
  port: 5432,
  database: "",
});

module.exports = data;
