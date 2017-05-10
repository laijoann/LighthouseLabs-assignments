/*Implement an add_person.js script that takes in the first name, last name and date of a famous person as three command line arguments and uses Knex to perform an insert.*/

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

const argv = process.argv.slice(2);

knex('famous_people').insert( {first_name: argv[0], last_name: argv[1], birthdate: argv[2]} ).finally(() => { knex.destroy(); });
