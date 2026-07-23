# 🔢 PROJECT 5: CALCULATOR

> **Level**: Pemula | **Estimasi**: 2-4 jam | **Konsep**: Logic, DOM Manipulation, Event Handling

---

## 🎯 TUJUAN PROJECT

Membuat kalkulator yang bisa:
- Operasi dasar: tambah, kurang, kali, bagi
- Input angka dari tombol
- Tampilkan hasil di layar
- Handle error (bagi dengan 0)
- History perhitungan

---

## 📐 ALUR KERJA

```
LANGKAH 1: Perencanaan & Struktur
    ↓
LANGKAH 2: HTML Structure
    ↓
LANGKAH 3: Styling (Tailwind)
    ↓
LANGKAH 4: JavaScript - Logic Kalkulator
    ↓
LANGKAH 5: JavaScript - Event Handling
    ↓
LANGKAH 6: JavaScript - History
    ↓
LANGKAH 7: Testing & Polish
```

---

## LANGKAH 1: PERENCANAAN & STRUKTUR

### 1.1 Layout Kalkulator
```
┌─────────────────────────────────┐
│          CALCULATOR             │
├─────────────────────────────────┤
│  ┌─────────────────────────┐   │
│  │     Display Area        │   │
│  │  0                      │   │
│  └─────────────────────────┘   │
├─────────────────────────────────┤
│  ┌─────┬─────┬─────┬─────┐   │
│  │  C  │  ⌫  │  %  │  ÷  │   │
│  ├─────┼─────┼─────┼─────┤   │
│  │  7  │  8  │  9  │  ×  │   │
│  ├─────┼─────┼─────┼─────┤   │
│  │  4  │  5  │  6  │  −  │   │
│  ├─────┼─────┼─────┼─────┤   │
│  │  1  │  2  │  3  │  +  │   │
│  ├─────┼─────┼─────┼─────┤   │
│  │  0 (double) │  .  │  =  │   │
│  └─────────────┴─────┴─────┘   │
├─────────────────────────────────┤
│  📜 History                     │
│  - 5 + 3 = 8                    │
│  - 10 × 2 = 20                  │
└─────────────────────────────────┘
```

### 1.2 Tombol yang Dibutuhkan
```
Angka: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
Operator: +, -, ×, ÷
Fungsi: C (clear), ⌫ (backspace), % (persen), . (desimal), = (sama dengan)
```

### 1.3 Logic Dasar
```
Kalkulator bekerja dengan:
1. Menyimpan angka PERTAMA
2. Menyimpan OPERATOR
3. Menyimpan angka KEDUA
4. Saat "=", hitung hasilnya

Contoh: 5 + 3 =
- firstNumber = 5
- operator = "+"
- secondNumber = 3
- result = 5 + 3 = 8
```

---

## LANGKAH 2: HTML STRUCTURE

### 2.1 HTML Blueprint
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <!-- ISI: Link Tailwind CDN -->
</head>
<body class="bg-gray-900 min-h-screen flex items-center justify-center">
    
    <div class="bg-gray-800 rounded-2xl shadow-2xl p-6 w-80">
        <!-- ISI: Display -->
        <!-- ISI: Buttons Grid -->
        <!-- ISI: History Section -->
    </div>

    <!-- ISI: Link ke app.js -->
</body>
</html>
```

### 2.2 Petunjuk Tiap Section

#### **DISPLAY**
```
Struktur:
├── Previous calculation (text-sm, text-gray-400)
│   - Menampilkan: "5 + 3"
├── Current input (text-4xl, text-white, text-right)
│   - Menampilkan: angka yang sedang diketik
└── Container: bg-gray-700, rounded-lg, p-4, mb-4

Petunjuk:
- Previous: operasi yang belum di-evaluate
- Current: angka yang sedang aktif
- Font besar untuk current
- Text-align: right
```

#### **BUTTONS GRID**
```
Struktur:
├── Grid container (grid-cols-4, gap-2)
│   ├── Row 1: [C] [⌫] [%] [÷]
│   ├── Row 2: [7] [8] [9] [×]
│   ├── Row 3: [4] [5] [6] [−]
│   ├── Row 4: [1] [2] [3] [+]
│   └── Row 5: [0 (span 2)] [.] [=]

Petunjuk:
- Tombol angka: bg-gray-700, hover:bg-gray-600
- Tombol operator: bg-blue-500, hover:bg-blue-600
- Tombol fungsi (C, ⌫, %): bg-gray-600
- Tombol sama dengan (=): bg-green-500
- Semua: rounded-lg, text-white, font-semibold
- Tombol 0: col-span-2 (lebar 2 kolom)
```

---

## LANGKAH 3: STYLING (TAILWIND)

### 3.1 Color Scheme
```
Background: bg-gray-900
Calculator body: bg-gray-800
Display: bg-gray-700
Number buttons: bg-gray-700, hover:bg-gray-600
Operator buttons: bg-blue-500, hover:bg-blue-600
Function buttons (C, ⌫, %): bg-gray-600
Equals button: bg-green-500, hover:bg-green-600
Text: text-white
```

### 3.2 Button Styles
```
Base: p-4, rounded-lg, text-xl, font-semibold, transition, duration-200
Number hover: transform, scale-105
Active: transform, scale-95
```

---

## LANGKAH 4: JAVASCRIPT - LOGIC KALKULATOR

### 4.1 Variables
```javascript
// ISI KODEMU DI SINI

// Variabel utama
// let currentValue = '0';      // Angka yang sedang ditampilkan
// let previousValue = '';       // Angka sebelumnya
// let operator = '';            // Operator yang dipilih
// let shouldResetDisplay = false; // Flag untuk reset display

// Array untuk history
// let history = [];
```

### 4.2 Fungsi Input Angka
```javascript
// Fungsi saat tombol angka diklik
// function inputNumber(number) {
    // LANGKAH 1: Jika harus reset display
    // if (shouldResetDisplay) {
    //     currentValue = number;
    //     shouldResetDisplay = false;
    // } else {
    //     LANGKAH 2: Handle angka 0 di depan
    //     if (currentValue === '0' && number !== '.') {
    //         currentValue = number;
    //     } else {
    //         LANGKAH 3: Tambahkan angka
    //         currentValue += number;
    //     }
    // }
    
    // LANGKAH 4: Update display
    // updateDisplay();
// }
```

### 4.3 Fungsi Input Desimal
```javascript
// Fungsi saat tombol desimal diklik
// function inputDecimal() {
    // Jika sudah ada titik, jangan tambah lagi
    // if (currentValue.includes('.')) return;
    
    // Tambah titik
    // currentValue += '.';
    // updateDisplay();
// }
```

### 4.4 Fungsi Operator
```javascript
// Fungsi saat operator diklik (+, -, ×, ÷)
// function inputOperator(op) {
    // LANGKAH 1: Jika sudah ada operator sebelumnya, hitung dulu
    // if (operator && !shouldResetDisplay) {
    //     calculate();
    // }
    
    // LANGKAH 2: Simpan angka dan operator
    // previousValue = currentValue;
    // operator = op;
    // shouldResetDisplay = true;
    
    // LANGKAH 3: Update display (tampilkan operator)
    // updateDisplay();
// }
```

### 4.5 Fungsi Hitung
```javascript
// Fungsi saat tombol = diklik
// function calculate() {
    // LANGKAH 1: Validasi
    // if (!operator || previousValue === '') return;
    
    // LANGKAH 2: Konversi ke angka
    // const prev = parseFloat(previousValue);
    // const current = parseFloat(currentValue);
    // let result;
    
    // LANGKAH 3: Hitung berdasarkan operator
    // switch (operator) {
    //     case '+':
    //         result = prev + current;
    //         break;
    //     case '-':
    //         result = prev - current;
    //         break;
    //     case '×':
    //         result = prev * current;
    //         break;
    //     case '÷':
    //         if (current === 0) {
    //             showError('Tidak bisa bagi 0');
    //             return;
    //         }
    //         result = prev / current;
    //         break;
    // }
    
    // LANGKAH 4: Simpan ke history
    // addToHistory(`${previousValue} ${operator} ${currentValue} = ${result}`);
    
    // LANGKAH 5: Update nilai
    // currentValue = result.toString();
    // operator = '';
    // previousValue = '';
    // shouldResetDisplay = true;
    
    // LANGKAH 6: Update display
    // updateDisplay();
// }
```

### 4.6 Fungsi Clear
```javascript
// Fungsi clear (tombol C)
// function clear() {
    // currentValue = '0';
    // previousValue = '';
    // operator = '';
    // shouldResetDisplay = false;
    // updateDisplay();
// }

// Fungsi backspace (tombol ⌫)
// function backspace() {
    // if (currentValue.length === 1 || 
    //     (currentValue.length === 2 && currentValue[0] === '-')) {
    //     currentValue = '0';
    // } else {
    //     currentValue = currentValue.slice(0, -1);
    // }
    // updateDisplay();
// }

// Fungsi persen (tombol %)
// function percentage() {
    // currentValue = (parseFloat(currentValue) / 100).toString();
    // updateDisplay();
// }
```

---

## LANGKAH 5: JAVASCRIPT - EVENT HANDLING

### 5.1 Event Listeners
```javascript
// Setup event listeners setelah DOM load
// document.addEventListener('DOMContentLoaded', () => {
    // LANGKAH 1: Tombol angka
    // document.querySelectorAll('.btn-number').forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         inputNumber(btn.textContent);
    //     });
    // });
    
    // LANGKAH 2: Tombol operator
    // document.querySelectorAll('.btn-operator').forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         inputOperator(btn.textContent);
    //     });
    // });
    
    // LANGKAH 3: Tombol fungsi
    // document.getElementById('btn-clear').addEventListener('click', clear);
    // document.getElementById('btn-backspace').addEventListener('click', backspace);
    // document.getElementById('btn-percent').addEventListener('click', percentage);
    // document.getElementById('btn-decimal').addEventListener('click', inputDecimal);
    // document.getElementById('btn-equals').addEventListener('click', calculate);
    
    // LANGKAH 4: Keyboard support
    // document.addEventListener('keydown', handleKeyboard);
// });
```

### 5.2 Keyboard Support
```javascript
// Handle input dari keyboard
// function handleKeyboard(e) {
    // const key = e.key;
    
    // Angka
    // if (key >= '0' && key <= '9') inputNumber(key);
    
    // Operator
    // if (key === '+') inputOperator('+');
    // if (key === '-') inputOperator('-');
    // if (key === '*') inputOperator('×');
    // if (key === '/') {
    //     e.preventDefault(); // Prevent search
    //     inputOperator('÷');
    // }
    
    // Fungsi lain
    // if (key === 'Enter' || key === '=') calculate();
    // if (key === 'Backspace') backspace();
    // if (key === 'Escape') clear();
    // if (key === '.') inputDecimal();
    // if (key === '%') percentage();
// }
```

---

## LANGKAH 6: JAVASCRIPT - UPDATE DISPLAY & HISTORY

### 6.1 Update Display
```javascript
// Fungsi update tampilan
// function updateDisplay() {
    // document.getElementById('current-display').textContent = currentValue;
    // 
    // if (operator) {
    //     document.getElementById('previous-display').textContent = 
    //         `${previousValue} ${operator}`;
    // } else {
    //     document.getElementById('previous-display').textContent = '';
    // }
// }
```

### 6.2 History
```javascript
// Tambah ke history
// function addToHistory(calculation) {
    // history.unshift(calculation); // Tambah di awal
    // if (history.length > 10) history.pop(); // Batasi 10 item
    // renderHistory();
// }

// Render history
// function renderHistory() {
    // const container = document.getElementById('history-list');
    // container.innerHTML = history.map(item => 
    //     `<div class="text-gray-400 text-sm py-1">${item}</div>`
    // ).join('');
// }

// Fungsi error
// function showError(message) {
    // document.getElementById('current-display').textContent = message;
    // setTimeout(clear, 1500);
// }
```

---

## LANGKAH 7: TESTING & POLISH

### 7.1 Checklist Fungsional
```
□ Tombol angka berfungsi
□ Tombol operator berfungsi
□ Hasil perhitungan benar
□ Tombol sama dengan berfungsi
□ Tombol clear berfungsi
□ Tombol backspace berfungsi
□ Tombol persen berfungsi
□ Desimal berfungsi
□ Error handling (bagi 0)
□ History tersimpan
□ Keyboard support berfungsi
□ Tidak ada console error
```

### 7.2 Test Cases
```
Test 1: Penjumlahan sederhana
- Input: 5 + 3 =
- Expected: 8

Test 2: Pengurangan
- Input: 10 - 4 =
- Expected: 6

Test 3: Perkalian
- Input: 6 × 7 =
- Expected: 42

Test 4: Pembagian
- Input: 20 ÷ 4 =
- Expected: 5

Test 5: Pembagian dengan 0
- Input: 10 ÷ 0 =
- Expected: Error message

Test 6: Desimal
- Input: 3.5 + 2.5 =
- Expected: 6

Test 7: Persen
- Input: 200 % =
- Expected: 2

Test 8: Urutan operasi
- Input: 5 + 3 × 2 =
- Expected: 16 (karena 8 × 2)
- Atau: 11 (jika 5 + 6) - tergantung logic
```

---

## 🎨 CONTOH WARNA

### **Tema Dark (Recommended)**
```
Body: bg-gray-900
Calculator: bg-gray-800
Display: bg-gray-700
Numbers: bg-gray-700, hover:bg-gray-600
Operators: bg-blue-500, hover:bg-blue-600
Functions: bg-gray-600, hover:bg-gray-500
Equals: bg-green-500, hover:bg-green-600
Clear: bg-red-500, hover:bg-red-600
```

### **Tema Light**
```
Body: bg-gray-100
Calculator: bg-white
Display: bg-gray-100
Numbers: bg-white, hover:bg-gray-100
Operators: bg-blue-500
Equals: bg-green-500
```

---

## 🚀 BONUS: ENHANCEMENTS

```
□ Animasi button press
□ Animasi display
□ Copy result to clipboard
□ History bisa diklik untuk reuse
□ Scientific mode (sin, cos, tan, √, ^)
□ Memory functions (M+, M-, MR, MC)
□ Themes (dark/light toggle)
□ Sound effects
□ Keyboard shortcuts display
□ Support operator chaining
```

---

## ✅ FINAL CHECKLIST

```
□ Semua tombol angka berfungsi
□ Semua operator berfungsi
□ Hasil perhitungan benar
□ Clear berfungsi
□ Backspace berfungsi
□ Persen berfungsi
□ Desimal berfungsi
□ Error handling ada
□ History berfungsi
□ Keyboard support
□ Responsive design
□ Tidak ada console error

Total: ___/12 checklist terpenuhi
```
