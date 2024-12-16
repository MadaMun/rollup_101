const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel').default;

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs', // Output เป็น CommonJS
    exports: 'auto', // ให้ Rollup เลือกการ Export ที่เหมาะสม
  },
  plugins: [
    resolve(), // Resolve dependencies
    commonjs(), // รองรับ CommonJS modules
    babel({ babelHelpers: 'bundled' }), // ใช้ Babel หากมีไฟล์ ES6/JSX
  ],
};
