/*Create a new script file in the same project. It should work in the same way as before (searching famous people by name) except that it should use knex instead of using the pg package.
You'll find that the node app does not terminate and you have to CTRL+C to terminate the process. You'll need to research why this is happening and how you can fix it.
When using the Knex API, we suggest you to use their asCallback function at the end of a function chain, for now. Their documentation suggests that you use their Promises interface instead of callbacks, because it is an easier pattern to work with. However, unless you're familiar with promises from before, it may be better to wait until to use them.*/

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
})
