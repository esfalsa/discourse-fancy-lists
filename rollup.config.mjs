import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

/** @type {import('rollup').RollupOptions} */
export default {
  input: "index.js",
  output: {
    file: "assets/vendor/javascripts/markdown-it-fancy-lists.js",
    format: "cjs",
  },
  context: "window",
  plugins: [resolve(), commonjs(), json(), terser()],
};
