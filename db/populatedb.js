require('dotenv').config()
const { Client } = require("pg");

const sql = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author TEXT,
    message TEXT
);

INSERT INTO messages (author, message)
VALUES ('Olive', 'Im hungry');

INSERT INTO messages (author, message)
VALUES ('Oscar', 'Coding is life');

`

async function main() {
    console.log("seeding...");
    const client = new Client({
      connectionString: process.env.EXTERNAL_URL
    });
    await client.connect();
    await client.query(sql);
    await client.end();
    console.log("done");
  }
  
  main();