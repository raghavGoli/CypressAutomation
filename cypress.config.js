const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server');

async function setupNodeEvents(on, config) {

  config.db= {
    userName: "golivenkata",
    password: "Sdetjob@12",
    server: "golivenkata-server.database.windows.net",
    options: {
        database: "cypressDBIntegration",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
}
  // implement node event listeners here
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
  require('cypress-mochawesome-reporter/plugin')(on); 
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  reporter: 'cypress-multi-reporters',
  "reporterOptions": {
    charts: true,
    inlineAssets: true,
  reportPageTitle: 'Cypress Tests Report',
  pageLoadTimeout:120000,
  screenshotOnRunFailure:false,
  trashAssetsBeforeRuns:true,
  video:true,
  overwrite: false,
  inlineAssets: true,
  html: true,
  json: true,
  quiet: false,
  viewportHeight:1080,
  viewportWidth:1920
  },
 env :{
   url : "https://rahulshettyacademy.com"
 },
 retries: {
  runMode: 1,
  openMode: 0,
},
 projectId : "dvpx8r",
  e2e: {
    experimentalStudio: true,
    setupNodeEvents ,
      // implement node event listeners here
      specPattern:'cypress/integration/**/*.js'
      
    },
});
