const fs = require("fs");

const templateView = fs.readFileSync(
  `${__dirname}/../views/index.html`,
  "utf8"
);

function generateIndex({ baseUrl, title, url }) {
  const variables = {
    BASE_URL: baseUrl ? `${baseUrl.replace(/\/$/, "")}/` : "",
    TITLE: title,
    UI_BUNDLE_ARGS: `{
      url: ${JSON.stringify(url)},
      dom_id: "#app",
      deepLinking: true,
      displayOperationId: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset.slice(1)
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: "StandaloneLayout"
    }`
  };

  return templateView.replace(/\${([^}]+)}/g, (str, name) => variables[name]);
}

function getAssetsPath() {
  return `${__dirname}/../dist`;
}

module.exports = {
  generateIndex,
  getAssetsPath
};
