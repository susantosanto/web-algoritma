/**
 * ============================================
 * CALCULATOR APP
 * ============================================
 * 
 * PETUNJUK:
 * - Isi setiap fungsi yang kosong dengan kode JavaScript
 * - Ikuti instruksi di dalam setiap fungsi
 * - Gunakan framework 7 Langkah Universal
 * 
 * FITUR YANG HARUS DIBUAT:
 * 1. Input angka dari tombol
 * 2. Operasi: +, -, ×, ÷
 * 3. Tampilkan hasil
 * 4. Clear (C), Backspace (⌫), Persen (%)
 * 5. History perhitungan
 */

// ============================================
// VARIABEL GLOBAL
// ============================================

// Angka yang sedang ditampilkan
// let currentValue = '0';

// Angka sebelumnya (sebelum operator)
// let previousValue = '';

// Operator yang dipilih
// let operator = '';

// Flag untuk reset display setelah hitung
// let shouldResetDisplay = false;

// Array untuk history
// let history = [];


// ============================================
// FUNGSI: INPUT ANGKA
// ============================================

/**
 * Fungsi saat tombol angka diklik
 * @param {string} number - Angka yang diklik (0-9)
 */
function inputNumber(number) {
    // LANGKAH 1: Jika harus reset display
    // if (shouldResetDisplay) {
    //     currentValue = number;
    //     shouldResetDisplay = false;
    // } else {
    //     LANGKAH 2: Handle angka 0 di depan
    //     if (currentValue === '0' && number !== '.') {
    //         currentValue = number;
    //     } else {
    //         currentValue += number;
    //     }
    // }
    
    // LANGKAH 3: Update display
    // updateDisplay();
}


// ============================================
// FUNGSI: INPUT DESIMAL
// ============================================

/**
 * Fungsi saat tombol desimal diklik
 */
function inputDecimal() {
    // Jika sudah ada titik, return
    // if (currentValue.includes('.')) return;
    
    // Tambah titik
    // currentValue += '.';
    // updateDisplay();
}


// ============================================
// FUNGSI: INPUT OPERATOR
// ============================================

/**
 * Fungsi saat operator diklik (+, -, ×, ÷)
 * @param {string} op - Operator yang diklik
 */
function inputOperator(op) {
    // LANGKAH 1: Jika sudah ada operator, hitung dulu
    // if (operator && !shouldResetDisplay) {
    //     calculate();
    // }
    
    // LANGKAH 2: Simpan angka dan operator
    // previousValue = currentValue;
    // operator = op;
    // shouldResetDisplay = true;
    
    // LANGKAH 3: Update display
    // updateDisplay();
}


// ============================================
// FUNGSI: HITUNG
// ============================================

/**
 * Fungsi saat tombol = diklik
 */
function calculate() {
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
}


// ============================================
// FUNGSI: CLEAR
// ============================================

/**
 * Fungsi clear (tombol C)
 */
function clear() {
    // currentValue = '0';
    // previousValue = '';
    // operator = '';
    // shouldResetDisplay = false;
    // updateDisplay();
}


// ============================================
// FUNGSI: BACKSPACE
// ============================================

/**
 * Fungsi backspace (tombol ⌫)
 */
function backspace() {
    // if (currentValue.length === 1 || 
    //     (currentValue.length === 2 && currentValue[0] === '-')) {
    //     currentValue = '0';
    // } else {
    //     currentValue = currentValue.slice(0, -1);
    // }
    // updateDisplay();
}


// ============================================
// FUNGSI: PERSEN
// ============================================

/**
 * Fungsi persen (tombol %)
 */
function percentage() {
    // currentValue = (parseFloat(currentValue) / 100).toString();
    // updateDisplay();
}


// ============================================
// FUNGSI: UPDATE DISPLAY
// ============================================

/**
 * Fungsi update tampilan
 */
function updateDisplay() {
    // document.getElementById('current-display').textContent = currentValue;
    // 
    // if (operator) {
    //     document.getElementById('previous-display').textContent = 
    //         `${previousValue} ${operator}`;
    // } else {
    //     document.getElementById('previous-display').textContent = '';
    // }
}


// ============================================
// FUNGSI: HISTORY
// ============================================

/**
 * Fungsi tambah ke history
 */
function addToHistory(calculation) {
    // history.unshift(calculation);
    // if (history.length > 10) history.pop();
    // renderHistory();
}

/**
 * Fungsi render history
 */
function renderHistory() {
    // const container = document.getElementById('history-list');
    // container.innerHTML = history.map(item => 
    //     `<div class="text-gray-400 text-sm py-1">${item}</div>`
    // ).join('');
}


// ============================================
// FUNGSI: ERROR
// ============================================

/**
 * Fungsi tampilkan error
 */
function showError(message) {
    // document.getElementById('current-display').textContent = message;
    // setTimeout(clear, 1500);
}


// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Setup tombol angka
    // document.querySelectorAll('.btn-number').forEach(btn => {
    //     btn.addEventListener('click', () => inputNumber(btn.textContent));
    // });
    
    // Setup tombol operator
    // document.querySelectorAll('.btn-operator').forEach(btn => {
    //     btn.addEventListener('click', () => inputOperator(btn.textContent));
    // });
    
    // Setup tombol fungsi
    // document.getElementById('btn-clear').addEventListener('click', clear);
    // document.getElementById('btn-backspace').addEventListener('click', backspace);
    // document.getElementById('btn-percent').addEventListener('click', percentage);
    // document.getElementById('btn-decimal').addEventListener('click', inputDecimal);
    // document.getElementById('btn-equals').addEventListener('click', calculate);
    
    // Setup keyboard
    // document.addEventListener('keydown', handleKeyboard);
});

/**
 * Handle input dari keyboard
 */
function handleKeyboard(e) {
    // const key = e.key;
    // 
    // if (key >= '0' && key <= '9') inputNumber(key);
    // if (key === '+') inputOperator('+');
    // if (key === '-') inputOperator('-');
    // if (key === '*') inputOperator('×');
    // if (key === '/') {
    //     e.preventDefault();
    //     inputOperator('÷');
    // }
    // if (key === 'Enter' || key === '=') calculate();
    // if (key === 'Backspace') backspace();
    // if (key === 'Escape') clear();
    // if (key === '.') inputDecimal();
    // if (key === '%') percentage();
}
