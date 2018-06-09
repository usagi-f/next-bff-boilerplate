module.exports = {
  env: {
    development: {
      presets: ["next/babel"],
      plugins: [
        "transform-flow-strip-types"
      ]
    },
    production: {
      presets: ["next/babel"],
      plugins: [
        "transform-flow-strip-types"
      ]
    },
    test: {
      presets: [
        ["@babel/preset-env", { presetEnv: { modules: "commonjs" } }],
        "@babel/preset-react"
      ],
      plugins: [
        "transform-flow-strip-types"
      ]
    }
  }
}
