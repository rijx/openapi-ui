const { generateIndex, getAssetsPath } = require("..");

describe("OpenAPI UI", () => {
  describe("generateIndex", () => {
    test("root directory", () => {
      expect(
        generateIndex({
          title: "My API Docs",
          url:
            "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml"
        })
      ).toMatchSnapshot();
    });

    test("docs directory", () => {
      expect(
        generateIndex({
          baseUrl: "/docs",
          title: "My API Docs",
          url:
            "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml"
        })
      ).toMatchSnapshot();
    });
  });

  test("assets path", () => {
    const path = getAssetsPath();

    expect(path).toBeTruthy();
  });
});
