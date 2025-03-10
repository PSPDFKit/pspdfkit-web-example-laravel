const ncp = require("ncp").ncp;

ncp(
  "./node_modules/@nutrient-sdk/viewer/dist/nutrient-viewer-lib",
  "./public/assets/pspdfkit/nutrient-viewer-lib",
  (err) => {
    err && console.error(err);
  }
);

ncp(
  "./node_modules/@nutrient-sdk/viewer/dist/nutrient-viewer.js",
  "./public/assets/pspdfkit/nutrient-viewer.js",
  (err) => {
    err && console.error(err);
  }
);
