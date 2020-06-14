module.exports = {
  exclude: "node_modules/**",
  presets: [
    [
      "@babel/env",
      {
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
  ],
};
