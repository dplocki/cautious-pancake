// This file is need for the unit tests
module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: "automatic"
      }
    ]
  ]
};
