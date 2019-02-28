# openapi-ui

![build status](https://gitlab.com/rijx/openapi-ui/badges/master/build.svg?style=flat) ![test coverage](https://gitlab.com/rijx/openapi-ui/badges/master/coverage.svg?style=flat) ![npm version](https://img.shields.io/npm/v/openapi-ui.svg)

## Examples

### Express

```js
const express = require("express");
const openApiUI = require("openapi-ui");

const app = express();

app.get("/docs", (req, res) => {
  const html = openApiUI.generateIndex({
    baseUrl: "/docs",
    title: "My API Docs",
    url:
      "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml"
  });

  res.send(html);
});

app.use("/docs", express.static(openApiUI.getAssetsPath()));

app.listen(3000);
```
