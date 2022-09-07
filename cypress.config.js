const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const mysql2 = require("mysql2");
const env = require('./cypress.env.json')

//const dbconfig = require('./cypress.env.json')

const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql2.createConnection(env.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',


  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
      on("task", {
        queryDb: query => {
          return queryTestDb(query, config);
        }
      });

      // implement node event listeners here
    },

  },

});


