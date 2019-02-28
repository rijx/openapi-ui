const fs = require("fs");
const swaggerUI = require("swagger-ui-dist");

const { getAssetsPath } = require("..");

const path = swaggerUI.absolutePath();
const dist = getAssetsPath();

try {
  fs.mkdirSync(dist);
} catch (err) {
  if (err.code != "EEXIST") {
    throw err;
  }
}

const filesToBeCopied = [
  "swagger-ui.css",
  "swagger-ui-bundle.js",
  "swagger-ui-standalone-preset.js"
];

for (const fileName of filesToBeCopied) {
  fs.copyFileSync(`${path}/${fileName}`, `${dist}/${fileName}`);
}
