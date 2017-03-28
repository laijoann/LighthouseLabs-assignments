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

const argv = process.argv[2];
const dbQuery = 'SELECT * FROM famous_people WHERE first_name LIKE $1::text OR last_name LIKE $1::text';

dbConnect = () => {
  client.connect((err) => {
    if (err) throw err;
    client.query(dbQuery, [argv], (err, result) => {
      if (err) throw err;
      console.log('Searching ...');
      data = result.rows;
      client.end();
      return dbPrint(data);
    })
  })
}

dbPrint = (data) => {
  let printStatement = `Found ${data.length} person(s) by the name ${argv}: \n`;
  data.forEach((row) => {
    printStatement += `- ${row.id}: ${row.first_name} ${row.last_name}, born ${row.birthdate.toDateString()} \n`;
  })
  return console.log(printStatement);
}

dbConnect();
