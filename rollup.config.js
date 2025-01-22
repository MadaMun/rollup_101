
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel').default;

module.exports = {
  input: 'src/index.js', // จุดเริ่มต้นของโปรเจกต์
  output: [
    // การตั้งค่าผลลัพธ์แบบรวมทุกอย่าง
    {
      file: 'dist/bundle.js', // ไฟล์รวมทั้งหมด
      format: 'cjs', // ใช้ CommonJS
      exports: 'named',
    },
    // การตั้งค่าผลลัพธ์แบบแยกโมดูล
    {
      dir: 'dist/modules', // โฟลเดอร์เก็บไฟล์ที่แยกโมดูล
      format: 'cjs', // ใช้ CommonJS
      preserveModules: true, // แยกไฟล์ตามโครงสร้าง
      preserveModulesRoot: 'src', // เก็บโครงสร้างต้นฉบับจากโฟลเดอร์ src
      exports: 'named',
    },
  ],
  plugins: [
    resolve(), // Resolve dependencies
    commonjs(), // รองรับ CommonJS modules
    babel({
      babelHelpers: 'bundled', // ใช้ Babel สำหรับแปลงไฟล์
      exclude: 'node_modules/**', // ไม่แปลงไฟล์ใน node_modules
    }),
  ],
};
