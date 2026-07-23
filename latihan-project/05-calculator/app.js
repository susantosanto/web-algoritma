/**
 * ============================================
 * CALCULATOR APP
 * ============================================
 * 
 * MASALAH:
 * Membuat kalkulator yang bisa:
 * 1. Menampilkan angka yang diketik
 * 2. Operasi: +, -, ×, ÷
 * 3. Menampilkan hasil
 * 4. Clear, Backspace, Persen
 * 5. Riwayat perhitungan
 * 
 * KONSEP:
 * - State Management (mengingat status)
 * - Event Handling
 * - Switch/Case (memilih operasi)
 * - Array (history)
 */


// ============================================
// STATE KALKULATOR
// ============================================

/**
 * KONSEP: State = "ingatan" aplikasi
 * 
 * Kalkulator perlu mengingat:
 * 1. Angka yang sedang diketik (currentValue)
 * 2. Angka sebelum operator (previousValue)
 * 3. Operator yang dipilih (+, -, ×, ÷)
 * 4. Apakah display harus direset
 * 5. Riwayat perhitungan
 * 
 * CONTOH KONSEP:
 * let currentValue = '0';      // awalnya nol
 * let previousValue = '';       // awalnya kosong
 * let operator = '';            // awalnya kosong
 * let shouldResetDisplay = false;
 * let history = [];
 * 
 * TULIS KODEMU DI SINI:
 * Buat variabel-variabel state
 */


// ============================================
// FUNGSI: INPUT ANGKA
// ============================================

/**
 * MASALAH: User menekan tombol angka.
 * 
 * KONSEP YANG DIBUTUHKAN:
 * 1. Mengecek kondisi
 * 2. Concatenation string
 * 3. Update display
 * 
 * CONTOH KONSEP (bukan jawaban):
 * 
 * --- Kondisi if-else ---
 * if (kondisi) {
 *     // dilakukan jika true
 * } else {
 *     // dilakukan jika false
 * }
 * 
 * --- String concatenation ---
 * '1' + '2' = '12'  // bukan 13!
 * currentValue += '3'; // currentValue jadi '123'
 * 
 * --- Mengecek karakter ---
 * string.includes('x'); // true jika ada 'x'
 * string.length;        // panjang string
 * 
 * --- Menghapus karakter terakhir ---
 * string.slice(0, -1);  // hapus 1 karakter dari belakang
 * 
 * TULIS KODEMU DI SINI:
 */
function inputNumber(number) {
    // PERTANYAAN: Kapan display harus direset?
    // KONSEP: Saat shouldResetDisplay === true
    //
    // PERTANYAAN: Bagaimana menambah angka ke display?
    // KONSEP: currentValue += number (string concatenation)
    //
    // PERTANYAAN: Bagaimana handle angka 0 di depan?
    // KONSEP: Jika currentValue === '0', ganti langsung, jangan tambah
}


// ============================================
// FUNGSI: INPUT DESIMAL
// ============================================

/**
 * KONSEP: Mengecek apakah karakter sudah ada
 * 
 * CONTOH KONSEP:
 * if (string.includes('.')) {
 *     // sudah ada titik, jangan tambah
 *     return;
 * }
 * 
 * TULIS KODEMU DI SINI:
 */
function inputDecimal() {
    // PERTANYAAN: Bagaimana mengecek apakah sudah ada titik?
    // KONSEP: currentValue.includes('.')
}


// ============================================
// FUNGSI: INPUT OPERATOR
// ============================================

/**
 * MASALAH: User menekan operator (+, -, ×, ÷).
 * 
 * KONSEP: Operator chaining
 * Contoh: 5 + 3 + 2 =
 * - User ketik 5, tekan +, ketik 3
 * - Saat tekan + lagi, hitung 5+3 dulu = 8
 * - Simpan 8 sebagai previousValue, simpan + sebagai operator
 * - User ketik 2, tekan =
 * - Hitung 8+2 = 10
 * 
 * TULIS KODEMU DI SINI:
 */
function inputOperator(op) {
    // PERTANYAAN: Mengapa harus hitung dulu jika sudah ada operator?
    // KONSEP: Operator chaining - urutan dari kiri ke kanan
    //
    // PERTANYAAN: Apa yang disimpan saat operator diklik?
    // KONSEP: previousValue = currentValue
    //         operator = op
    //         shouldResetDisplay = true
}


// ============================================
// FUNGSI: HITUNG
// ============================================

/**
 * MASALAH: User menekan "=", hitung hasilnya.
 * 
 * KONSEP: Switch-case untuk memilih operasi
 * 
 * CONTOH KONSEP:
 * switch (variable) {
 *     case 'nilai1':
 *         // dilakukan jika === 'nilai1'
 *         break;
 *     case 'nilai2':
 *         // dilakukan jika === 'nilai2'
 *         break;
 *     default:
 *         // dilakukan jika tidak ada yang cocok
 * }
 * 
 * ATAU if-else if:
 * if (operator === '+') {
 *     hasil = a + b;
 * } else if (operator === '-') {
 *     hasil = a - b;
 * } else if (operator === '×') {
 *     hasil = a * b;
 * } else if (operator === '÷') {
 *     if (b === 0) {
 *         // error
 *     } else {
 *         hasil = a / b;
 *     }
 * }
 * 
 * --- Mengonversi string ke angka ---
 * const angka = Number(string);
 * const angkaLain = parseFloat(string);
 * 
 * --- Mengonversi angka ke string ---
 * const string = angka.toString();
 * const stringLain = String(angka);
 * 
 * TULIS KODEMU DI SINI:
 */
function calculate() {
    // PERTANYAAN: Bagaimana mengonversi string ke angka?
    // KONSEP: Number(string) atau parseFloat(string)
    //
    // PERTANYAAN: Bagaimana memilih operasi berdasarkan operator?
    // KONSEP: switch(operator) { ... } atau if-else if
    //
    // PERTANYAAN: Bagaimana handle bagi dengan 0?
    // KONSEP: if (b === 0) { tampilkan error; return; }
    //
    // PERTANYAAN: Bagaimana menampilkan hasil?
    // KONSEP: currentValue = hasil.toString()
}


// ============================================
// FUNGSI: CLEAR & BACKSPACE
// ============================================

/**
 * CONTOH KONSEP:
 * 
 * --- Clear (reset semua) ---
 * currentValue = '0';
 * previousValue = '';
 * operator = '';
 * 
 * --- Backspace (hapus 1 karakter) ---
 * if (currentValue.length === 1) {
 *     currentValue = '0';
 * } else {
 *     currentValue = currentValue.slice(0, -1);
 * }
 * 
 * --- Persen ---
 * currentValue = (Number(currentValue) / 100).toString();
 * 
 * TULIS KODEMU DI SINI:
 */
function clear() {
    // PERTANYAAN: Apa yang harus direset?
    // KONSEP: Semua state kembali ke nilai awal
}

function backspace() {
    // PERTANYAAN: Bagaimana menghapus 1 karakter terakhir?
    // KONSEP: currentValue.slice(0, -1)
    //         Jika sisa 1 karakter, kembali ke '0'
}

function percentage() {
    // PERTANYAAN: Bagaimana menghitung persen?
    // KONSEP: dibagi 100
}


// ============================================
// FUNGSI: UPDATE DISPLAY
// ============================================

/**
 * KONSEP: Update text content element
 * 
 * CONTOH KONSEP:
 * document.getElementById('id').textContent = 'teks baru';
 * document.getElementById('id').innerHTML = '<b>teks</b>';
 * 
 * TULIS KODEMU DI SINI:
 */
function updateDisplay() {
    // PERTANYAAN: Bagaimana update tampilan angka?
    // KONSEP: element.textContent = currentValue
    //
    // PERTNYAAN: Bagaimana menampilkan operator?
    // KONSEP: element.textContent = previousValue + ' ' + operator
}


// ============================================
// FUNGSI: HISTORY
// ============================================

/**
 * KONSEP: Menyimpan riwayat di array
 * 
 * CONTOH KONSEP:
 * array.unshift(item); // tambah di awal (paling baru di atas)
 * if (array.length > 10) {
 *     array.pop(); // hapus yang paling lama
 * }
 * 
 * --- Render array ke HTML ---
 * const html = array.map(item => `<div>${item}</div>`).join('');
 * 
 * TULIS KODEMU DI SINI:
 */
function addToHistory(calculation) {
    // PERTANYAAN: Bagaimana menambah item di awal array?
    // KONSEP: history.unshift(calculation)
    //
    // PERTANYAAN: Bagaimana membatasi jumlah history?
    // KONSEP: if (history.length > 10) history.pop()
}

function renderHistory() {
    // PERTANYAAN: Bagaimana mengubah array jadi HTML?
    // KONSEP: array.map(item => `<div>${item}</div>`).join('')
}


// ============================================
// EVENT LISTENERS
// ============================================

/**
 * KONSEP: Menghubungkan banyak tombol dengan fungsi
 * 
 * CONTOH KONSEP:
 * 
 * --- QuerySelectorAll untuk banyak element ---
 * const buttons = document.querySelectorAll('.class-tombol');
 * 
 * --- Loop untuk menambahkan event listener ---
 * buttons.forEach(btn => {
 *     btn.addEventListener('click', () => {
 *         fungsiYangDipanggil(btn.textContent);
 *     });
 * });
 * 
 * --- Keyboard event ---
 * document.addEventListener('keydown', (e) => {
 *     const key = e.key; // tombol yang ditekan
 *     if (key >= '0' && key <= '9') { ... }
 *     if (key === '+') { ... }
 *     if (key === 'Enter') { ... }
 *     if (key === 'Backspace') { ... }
 *     if (key === 'Escape') { ... }
 * });
 * 
 * TULIS KODEMU DI SINI:
 */
document.addEventListener('DOMContentLoaded', () => {
    // PERTANYAAN: Bagaimana menghubungkan semua tombol angka?
    // KONSEP: document.querySelectorAll('.btn-number') lalu forEach
    //
    // PERTANYAAN: Bagaimana menangkap input keyboard?
    // KONSEP: document.addEventListener('keydown', (e) => { ... })
});
