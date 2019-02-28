module.exports = {
  plugins: [
    ["@semantic-release/commit-analyzer", { preset: "eslint" }],
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        message: "${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ]
};
