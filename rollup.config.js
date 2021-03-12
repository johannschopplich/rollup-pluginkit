import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from 'rollup-plugin-esbuild'
import vue from "rollup-plugin-vue";
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: "src/index.js",
    output: {
      file: "index.js",
      format: "iife",
    },
    plugins: [
      resolve(),
      commonjs(),
      css(),
      vue({
        css: false,
      }),
      esbuild({
        sourceMap: !production,
        minify: production,
        target: 'es2018',
      }),
    ],
  },
];
