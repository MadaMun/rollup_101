
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import esbuild from 'rollup-plugin-esbuild';

export default {
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
  maxParallelFileOps: 10,
  plugins: [
    resolve(), // Resolve dependencies
    commonjs(), // รองรับ CommonJS modules
    // babel({
    //   babelHelpers: 'bundled', // ใช้ Babel สำหรับแปลงไฟล์
    //   exclude: 'node_modules/**', // ไม่แปลงไฟล์ใน node_modules
    // }
    esbuild({          // ✅ เพิ่มความเร็วในการแปลงโค้ด
      minify: true,    // ✅ เปิดการบีบอัดไฟล์ (Minification)
      target: 'es2015' // ✅ กำหนดเป้าหมายเป็น ES2015 เพื่อรองรับ Browser เก่า
    }),
  ],
};
