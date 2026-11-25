// ===== ตั้งค่าร้าน (แก้ไฟล์นี้ไฟล์เดียว) =====
window.SHOP = {
  name: "Cocoa Noir",
  // URL ของ Google Apps Script Web App (ลงท้ายด้วย /exec) — เว้นว่างไว้ = โหมดเดโม (เก็บใน localStorage)
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxlxLEG-St9p4EpF0qX42iqbTo2sFtW2eSXthz6-U8/dev",
  // รหัสผ่านหน้า admin (ต้องตรงกับ ADMIN_KEY ใน Script Properties ของ Apps Script)
  ADMIN_KEY: "choco2026",
  shippingFee: 40,
  freeShippingOver: 300,
  sender: {
    name: "Cocoa Noir Studio",
    phone: "081-234-5678",
    address: "99/9 ถ.สุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110"
  },
  // รูปสินค้าอยู่ในโฟลเดอร์ images/ (แยกต่างหากใน GitHub)
  products: [
    {
      sku: "CHOC-DK70",
      name: "ดาร์กช็อกโกแลต 70%",
      desc: "โกโก้เข้มข้น ขมนุ่ม กลิ่นผลไม้แห้ง เหมาะกับสายเข้ม",
      weight: "60 g",
      price: 129,
      image: "images/dark-70.svg",
      shelf: "A1"
    },
    {
      sku: "CHOC-MK40",
      name: "มิลค์ช็อกโกแลต เฮเซลนัท",
      desc: "หวานมันละมุน เคี้ยวเพลินกับเฮเซลนัทอบกรอบ",
      weight: "60 g",
      price: 119,
      image: "images/milk-hazelnut.svg",
      shelf: "A2"
    },
    {
      sku: "CHOC-MT55",
      name: "มัทฉะไวท์ช็อกโกแลต",
      desc: "ไวท์ช็อกโกแลตผสมมัทฉะแท้ หอมนุ่ม หวานน้อย",
      weight: "60 g",
      price: 139,
      image: "images/matcha-white.svg",
      shelf: "B1"
    }
  ]
};
