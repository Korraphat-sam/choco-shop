# Cocoa Noir — แลนดิ้งเพจขายช็อกโกแลตแท่ง

ระบบขายช็อกโกแลตแท่ง 3 SKUs พร้อมระบบหลังร้าน: รับออเดอร์ → หยิบ → แพ็ค → พิมพ์ใบจ่าหน้าพัสดุ

| SKU | สินค้า | ราคา | ชั้นวาง |
|---|---|---|---|
| CHOC-DK70 | ดาร์กช็อกโกแลต 70% | 129 | A1 |
| CHOC-MK40 | มิลค์ช็อกโกแลต เฮเซลนัท | 119 | A2 |
| CHOC-MT55 | มัทฉะไวท์ช็อกโกแลต | 139 | B1 |

## โครงสร้างไฟล์

```
index.html        หน้าแลนดิ้งเพจ + ฟอร์มสั่งซื้อ
admin.html        หลังร้าน: ออเดอร์ / ใบหยิบ / แพ็ค / ใบจ่าหน้า
config.js         ตั้งค่าร้าน สินค้า ราคา และ URL ของ Apps Script
images/           รูปสินค้า (แยกโฟลเดอร์ใน GitHub)
apps-script/Code.gs   โค้ดฝั่ง Google Sheets
vercel.json
```

## ขั้นตอนติดตั้ง

### 1) Google Sheets
1. สร้าง Google Sheet ใหม่ → เมนู **ส่วนขยาย > Apps Script**
2. วางโค้ดจาก `apps-script/Code.gs`
3. **Project Settings > Script Properties** เพิ่ม `ADMIN_KEY` = รหัสผ่านที่ต้องการ (เช่น `choco2026`)
4. **Deploy > New deployment > Web app** — Execute as: *Me*, Who has access: *Anyone* → คัดลอก URL ที่ลงท้ายด้วย `/exec`
5. เปิด `config.js` ใส่ `APPS_SCRIPT_URL` และ `ADMIN_KEY` ให้ตรงกัน

ชีต `Orders` จะถูกสร้างอัตโนมัติ มีคอลัมน์: OrderID, Timestamp, Name, Phone, Email, Address, Province, Zip, Items(JSON), ItemsText, Subtotal, Shipping, Total, Note, Status, Tracking

### 2) GitHub
```bash
cd choco-shop
git init && git add . && git commit -m "Cocoa Noir landing page"
git branch -M main
git remote add origin https://github.com/<username>/choco-shop.git
git push -u origin main
```
รูปสินค้าอยู่ในโฟลเดอร์ `images/` แยกจากโค้ด

### 3) Vercel
1. vercel.com → **Add New > Project** → Import repo `choco-shop`
2. Framework Preset: **Other** (ไม่ต้องมี build command) → Deploy
3. ได้โดเมน `https://choco-shop-xxxx.vercel.app` — หน้าหลังร้านอยู่ที่ `/admin`

## วิธีใช้หลังร้าน (`/admin`)
1. ใส่รหัสแอดมิน → โหลดออเดอร์
2. **② ใบหยิบ**: รวมจำนวนแต่ละ SKU ของออเดอร์ใหม่ เรียงตามชั้นวาง → กด “หยิบครบแล้ว”
3. **③ แพ็ค**: ติ๊กตรวจสินค้าทีละชิ้นของแต่ละออเดอร์ ครบแล้วกด “แพ็คเสร็จแล้ว”
4. **④ ใบจ่าหน้า**: พิมพ์/บันทึก PDF (2 ใบต่อแถว A4) → กด “ส่งแล้ว” — ใส่เลข Tracking ได้ในแท็บ ①

สถานะในชีตอัปเดตอัตโนมัติ: `new → picked → packed → shipped`

## โหมดเดโม
ถ้า `APPS_SCRIPT_URL` ว่าง ระบบเก็บออเดอร์ใน localStorage ของเบราว์เซอร์ (ใช้ทดสอบได้ทันที รหัสแอดมินคือค่า `ADMIN_KEY` ใน config.js)

> หมายเหตุ: `ADMIN_KEY` ใน config.js เป็นไฟล์สาธารณะ ใช้เฉพาะโหมดเดโม — ตอนใช้งานจริงการตรวจรหัสทำที่ฝั่ง Apps Script ให้ลบค่านี้ออกจาก config.js และพิมพ์รหัสเองในหน้า admin
