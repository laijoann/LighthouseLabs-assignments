const pg = require('pg');
const settings = require('./settings');

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

dbQuery = () => {
  const argv = process.argv[2];
  return `SELECT * FROM famous_people WHERE first_name = '${argv}' OR last_name = '${argv}'`;
}

client.connect((err) => {
  if (err) throw err;
  client.query(dbQuery(), (err, result) => {
    if (err) throw err;
    console.log(result.rows);
    client.end();
  })
})
