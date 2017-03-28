const pg = require('pg');
const settings = require('./settings');
const argv = process.argv[2];

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

dbQuery = () => {
  return `SELECT * FROM famous_people WHERE first_name = '${argv}' OR last_name = '${argv}'`;
}

dbConnect = () => {
  client.connect((err) => {
    if (err) throw err;
    client.query(dbQuery(), (err, result) => {
      if (err) throw err;
      console.log('Searching ...');
      data = result.rows;
      client.end();
      return dbCallback(data);
    })
  })
}

dbCallback = (data) => {
  let printStatement = `Found ${data.length} person(s) by the name ${argv}: \n`;
  data.forEach((row) => {
    printStatement += `- ${row.id}: ${row.first_name} ${row.last_name}, born ${row.birthdate} \n`;
  })
  return console.log(printStatement);
}

dbConnect();
