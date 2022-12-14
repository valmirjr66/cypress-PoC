module.exports = function (api) {
  api.cache(true);

  let presets = []
  let plugins = []

  if (true) {
    console.log(1);

    presets = [
      "@babel/preset-react"
    ]

    plugins = [
      "transform-class-properties",
      "istanbul"
    ]
  }

  return {
    presets,
    plugins
  };
}