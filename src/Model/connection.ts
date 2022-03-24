import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

let connection = mysql.createConnection({
  host: process.env.DATABASE,
  user: "root",
  password: "",
  port: 3306,
  database: process.env.DBNAME,
});
export let connect = connection.connect((err) => {
  if (err) return new Error(err.message);
  console.log("Mysql connected ...");
});
