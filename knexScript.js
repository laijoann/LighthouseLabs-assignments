const pg = require('pg');
const settings = require('./settings');

const knex = require('knex')({
  client: 'pg',
  connection: {
   user     : settings.user,
   password : settings.password,
   database : settings.database,
   host     : settings.hostname,
   port     : settings.port,
   ssl      : settings.ssl
 }
});

const argv = process.argv[2];

/*
using promises:
knex.select().from('famous_people').where('first_name', argv).orWhere('last_name', argv).then((results) => {
  console.log(results);
}).catch((err) => { console.error(err) });
*/

/* using callbacks: */
knex.select().from('famous_people').where('first_name', argv).orWhere('last_name', argv).asCallback((err, rows) => {
  if (err) return console.error(err);
  let printStatement = `Found ${rows.length} person(s) by the name ${argv}: \n`;
  rows.forEach((row) => {
    printStatement += `- ${row.id}: ${row.first_name} ${row.last_name}, born ${row.birthdate.toDateString()} \n`;
  })
  console.log(printStatement);
  knex.destroy();
});
