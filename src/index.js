import {baseComponents} from './modules';
import {modules} from './modules';
import { add } from './modules/math';  // ✅ ตรวจสอบ path ให้ถูกต้อง


console.log(add(2, 3)); // ✅ ใช้เฉพาะฟังก์ชัน `add()` เท่านั้น

module.exports = { ...baseComponents, ...modules }; // รวมทุกอย่าง
