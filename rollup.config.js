import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import scss from "rollup-plugin-scss";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;
const sourcemap = !production ? "inline" : false;

export default [
  {
    input: "src/index.js",
    output: {
      file: "index.js",
      format: "iife",
      sourcemap,
    },
    plugins: [
      resolve(),
      commonjs(),
      vue({ css: false }),
      scss({
        output: "index.css",
        sass: require("sass"),
      }),
      production && babel({ babelHelpers: "bundled" }),
      production && terser(),
    ],
  },
];