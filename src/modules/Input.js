// src/base-components/Button.js
async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  console.log('⏳ Starting...');
  await delay(5000); // ⏰ เพิ่มดีเลย์ 5 วินาที
  console.log('✅ Build Complete!');
})();


  
module.exports = Input; // ใช้ module.exports สำหรับ CommonJS
  