# box-price-calculator
Calculator to estimate "box manufacturing cost per item" based on material, printing, lamination, die-cutting, and other production factors.

---

## 🚀 Features

- 📐 Calculate price based on **sheet size, GSM, and material**
- 🧾 Supports **Duplex & SBS materials**
- 🎨 Printing options:
  - Single Color
  - Two Color
  - Four Color
- 🧴 Multiple lamination types:
  - PVC, Cosmo, N. Mat, Gloss, T. Mat
- ✂️ Die-cutting cost calculation (dynamic pricing)
- 📦 Box pasting & finishing cost
- ✨ Foil printing calculation
- 🌟 UV options:
  - HUV, Full UV, Spot UV
- 📱 Fully responsive design (mobile-friendly)

---

## 🧮 How It Works

The calculator uses real-world printing and packaging formulas:

- Material cost is calculated using:
  (Length × Width × GSM) / Constant × Total Sheets × Rate per Kg

- Printing cost varies based on number of sheets
- Lamination cost depends on type and sheet area
- Die-cutting cost increases with sheet quantity
- Final price includes:
- Material
- Printing
- Lamination
- Die-cutting
- Pasting
- Foil & UV
- Extra charges (design + transport)

👉 Output:
**Final Price per Item (₹)**

---

## 🛠️ Tech Stack

- HTML5  
- CSS3 (Responsive UI + Flexbox/Grid)  
- JavaScript (Vanilla JS – DOM manipulation & logic)

---

## ▶️ How to Use

1. Open `index.html` in your browser  
2. Enter:
   - Sheet size
   - GSM
   - Total sheets
   - Rates & options  
3. Click **"CALCULATE RATE"**  
4. Get final price per item instantly  

---

## 💡 Future Improvements

- Save calculations (localStorage)
- Export result as PDF
- Add backend (Node.js) for data storage
- User authentication
- Better UI with charts

---

## 📸 Preview

(Add screenshot here after uploading project)

---

## 👨‍💻 Author

**[Your Name]**  
Aspiring Full Stack Developer (MERN)

---

## ⭐ Note

This project is built for **learning and real-world packaging industry calculation practice**.

---
