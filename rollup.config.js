import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js', // จุดเริ่มต้นไฟล์
  output: [
    {
      dir: 'dist', // โฟลเดอร์ที่เก็บไฟล์ที่บิลด์
      format: 'cjs', // ใช้ CommonJS
      preserveModules: true, // แยกไฟล์ตามโครงสร้าง
      preserveModulesRoot: 'src', // เก็บโครงสร้างต้นฉบับจากโฟลเดอร์ src
      exports: 'named', // Export แบบ named
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
  external: ['react', 'react-dom'], // ระบุ dependencies ภายนอก เช่น React
};
