const { defineConfig } = require("cypress");

const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");

module.exports = {
  ...(on, config) => {
    // on("before:browser:launch", (browser = {}, launchOptions) => {
    //   const downloadDirectory = path.join(__dirname, "..", "excelDownloads");
    //   if (browser.family === "chromium") {
    //     launchOptions.preferences.default["download"] = {
    //       default_directory: downloadDirectory
    //     };
    //   }
    //   return launchOptions;
    // });
    // `on` is used to hook into various events Cypress emits


  },

  e2e: {
    setupNodeEvents(on, config) {
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
      return config
      // implement node event listeners here
    },

  },

};

