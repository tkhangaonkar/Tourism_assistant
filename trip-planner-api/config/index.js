var mysql = require("mysql2/promise");
var nodemailer = require("nodemailer");

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "trip_planner",
};

const smtp = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "hribgm2496@gmail.com",
    pass: "uazueomucewesfkh",
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

const db = async () => {
  var con = await mysql.createConnection(config);
  return con;
};

const sqlQuery = async (query, data) => {
  const con = await db();
  const result = await con.query(query, data);
  return result;
};

module.exports = { sqlQuery, smtp };
