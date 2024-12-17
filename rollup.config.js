const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel').default;

module.exports = {
  input: 'src/index.js',
  output: {
    dir: 'dist', // โฟลเดอร์ที่เก็บไฟล์ที่บิลด์
    format: 'cjs', // ใช้ CommonJS
    preserveModules: true, // แยกไฟล์ตามโครงสร้าง
    preserveModulesRoot: 'src', // เก็บโครงสร้างต้นฉบับจากโฟลเดอร์ src
    exports: 'named', // Export แบบ named
  },
  plugins: [
    resolve(), // Resolve dependencies
    commonjs(), // รองรับ CommonJS modules
    babel({
      babelHelpers: 'bundled', // ใช้ Babel สำหรับแปลงไฟล์
      exclude: 'node_modules/**', // ไม่แปลงไฟล์ใน node_modules
    }),
  ],
};
