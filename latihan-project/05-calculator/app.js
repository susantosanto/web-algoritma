/**
 * ============================================
 * CALCULATOR APP
 * ============================================
 * 
 * MASALAH:
 * Membuat kalkulator yang bisa:
 * 1. Menampilkan angka yang diketik
 * 2. Melakukan operasi: +, -, ×, ÷
 * 3. Menampilkan hasil
 * 4. Clear (reset), Backspace (hapus satu digit)
 * 5. Persen (%)
 * 6. Menyimpan riwayat perhitungan
 * 
 * KONSEP YANG DIPAKAI:
 * - State Management (menyimpan status aplikasi)
 * - Event Handling (menangkap klik tombol)
 * - Switch/Case (memilih operasi berdasarkan operator)
 * - Template Literal (menampilkan hasil)
 * - Array (menyimpan history)
 * 
 * CARA BERPIKIR:
 * Kalkulator bekerja seperti mesin:
 * 1. User memasukkan angka PERTAMA
 * 2. User memilih OPERATOR
 * 3. User memasukkan angka KEDUA
 * 4. User menekan "=" untuk MENGHITUNG
 * 
 * Kita perlu "mengingat" angka pertama dan operator
 * sampai angka kedua dimasukkan.
 */


// ============================================
// STATE KALKULATOR
// ============================================

/**
 * MASALAH: Kalkulator perlu "mengingat"一些状态.
 * 
 * STATE YANG PERLU DISIMPAN:
 * 1. currentValue: angka yang sedang ditampilkan (sedang diketik)
 * 2. previousValue: angka sebelum operator (sudah diketik)
 * 3. operator: operasi yang dipilih (+, -, ×, ÷)
 * 4. shouldResetDisplay: apakah display harus direset setelah hitung
 * 5. history: daftar riwayat perhitungan
 * 
 * PERTANYAAN:
 * - Mengapa perlu previousValue?
 *   → Karena kita harus "mengingat" angka pertama sampai
 *     angka kedua dimasukkan.
 * - Mengapa perlu shouldResetDisplay?
 *   → Saat user menekan "=", display harus menampilkan hasil,
 *     bukan angka yang lama. Tapi saat user ketik angka baru,
 *     display harus direset dulu.
 * 
 * TULIS KODEMU DI SINI:
 * Buat variabel-variabel state di atas
 */


// ============================================
// FUNGSI: INPUT ANGKA
// ============================================

/**
 * MASALAH: User menekan tombol angka (0-9).
 *          Angka harus muncul di display.
 * 
 * ALUR BERPIKIR:
 * 1. Cek apakah display harus direset?
 * 2. Jika ya: ganti currentValue dengan angka baru
 * 3. Jika tidak: tambahkan angka ke currentValue
 * 4. Update tampilan
 * 
 * PERTANYAAN UNTUK DIRI SENDIRI:
 * - Kapan display harus direset?
 *   → Setelah operator dipilih, atau setelah "=" ditekan
 * - Bagaimana menambah angka ke belakang?
 *   → Ubah angka ke string, tambahkan, lalu ubah kembali
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "inputNumber" yang menerima parameter "number"
 */
function inputNumber(number) {
    // PERTANYAAN 1: Kapan harus reset display?
    // PETUNJUK: Cek flag shouldResetDisplay
    // KONSEP: if (shouldResetDisplay) { ... } else { ... }
    
    // PERTANYAAN 2: Bagaimana menambah angka?
    // PETUNJUK: Angka disimpan sebagai STRING agar bisa ditambah digit
    //           "1" + "2" = "12" (string concatenation)
    // KONSEP: currentValue += number (jika masih string)
    
    // PERTANYAAN 3: Bagaimana handle angka 0 di depan?
    // PETUNJUK: Jika currentValue "0", ganti langsung, jangan tambah
    // KONSEP: if (currentValue === '0') currentValue = number;
    //         else currentValue += number;
}


// ============================================
// FUNGSI: INPUT DESIMAL
// ============================================

/**
 * MASALAH: User menekan tombol titik (.) untuk desimal.
 * 
 * PERTANYAAN:
 * - Apa yang terjadi jika sudah ada titik?
 *   → Jangan tambah lagi (agar tidak ada dua titik)
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "inputDecimal"
 */
function inputDecimal() {
    // PERTANYAAN: Bagaimana mengecek apakah sudah ada titik?
    // PETUNJUK: Gunakan method string untuk mencari karakter
    // KONSEP: currentValue.includes('.') → true jika ada titik
}


// ============================================
// FUNGSI: INPUT OPERATOR
// ============================================

/**
 * MASALAH: User menekan tombol operator (+, -, ×, ÷).
 * 
 * ALUR BERPIKIR:
 * 1. Jika sudah ada operator sebelumnya, hitung dulu
 *    (contoh: 5 + 3 + → hitung 5+3 dulu, dapat 8, lalu simpan 8 +)
 * 2. Simpan currentValue sebagai previousValue
 * 3. Simpan operator yang dipilih
 * 4. Tandai bahwa display harus direset
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "inputOperator" yang menerima parameter "op"
 */
function inputOperator(op) {
    // PERTANYAAN 1: Mengapa harus hitung dulu jika sudah ada operator?
    // PETUNJUK: Pikirkan urutan: 5 + 3 + 2 =
    //           Tanpa hitung dulu: akan salah
    // KONSEP: Operator chaining - hitung berurutan dari kiri
    
    // PERTANYAAN 2: Bagaimana menyimpan operator?
    // PETUNJUK: Simpan ke variabel state
    // KONSEP: operator = op
    
    // PERTANYAAN 3: Mengapa harus reset display?
    // PETUNJUK: Setelah operator, user akan ketik angka baru
    // KONSEP: shouldResetDisplay = true
}


// ============================================
// FUNGSI: HITUNG
// ============================================

/**
 * MASALAH: User menekan tombol "=". Hitung hasilnya.
 * 
 * ALUR BERPIKIR:
 * 1. Pastikan ada operator dan previousValue
 * 2. Konversi string ke angka
 * 3. Hitung berdasarkan operator
 * 4. Handle error (bagi dengan 0)
 * 5. Simpan ke history
 * 6. Update currentValue dengan hasil
 * 
 * PERTANYAAN UNTUK DIRI SENDIRI:
 * - Bagaimana membedakan operator?
 * - Apa yang terjadi jika bagi dengan 0?
 * - Bagaimana menampilkan hasil yang benar?
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "calculate"
 */
function calculate() {
    // PERTANYAAN 1: Bagaimana mengonversi string ke angka?
    // PETUNJUK: Ada fungsi untuk mengubah string menjadi number
    // KONSEP: parseFloat() atau Number()
    
    // PERTANYAAN 2: Bagaimana memilih operasi?
    // PETUNJUK: Gunakan switch-case atau if-else if
    // KONSEP: switch(operator) { case '+': ... break; }
    
    // PERTANYAAN 3: Bagaimana handle bagi 0?
    // PETUNJUK: Cek dulu sebelum bagi
    // KONSEP: if (current === 0) { showError(); return; }
    
    // PERTANYAAN 4: Bagaimana menampilkan hasil?
    // PETUNJUK: Hasil harus jadi currentValue
    // KONSEP: currentValue = result.toString()
}


// ============================================
// FUNGSI: CLEAR & BACKSPACE
// ============================================

/**
 * MASALAH: Reset kalkulator atau hapus satu digit.
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "clear" dan "backspace"
 */
function clear() {
    // PERTANYAAN: Apa yang harus direset?
    // PETUNJUK: Semua state kembali ke nilai awal
    // KONSEP: currentValue = '0', previousValue = '', operator = ''
}

function backspace() {
    // PERTANYAAN: Bagaimana menghapus satu digit?
    // PETUNJUK: Ambil semua kecuali karakter terakhir
    // KONSEP: currentValue.slice(0, -1)
    //         Jika hanya satu digit, kembali ke '0'
}


// ============================================
// FUNGSI: PERSEN
// ============================================

/**
 * MASALAH: Mengubah angka menjadi persen.
 *          Contoh: 50 → 0.5 (50/100)
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "percentage"
 */
function percentage() {
    // PERTANYAAN: Bagaimana menghitung persen?
    // PETUNJUK: Persen = dibagi 100
    // KONSEP: currentValue = (parseFloat(currentValue) / 100).toString()
}


// ============================================
// FUNGSI: UPDATE DISPLAY
// ============================================

/**
 * MASALAH: Menampilkan state ke layar.
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "updateDisplay"
 */
function updateDisplay() {
    // PERTANYAAN 1: Apa yang ditampilkan?
    // PETUNJUK: Ada dua area: previous (operator) dan current (angka)
    // KONSEP: Update textContent dari dua element berbeda
    
    // PERTANYAAN 2: Bagaimana menampilkan operator?
    // PETUNJUK: Tampilkan previousValue + operator
    // KONSEP: previousDisplay.textContent = previousValue + ' ' + operator
}


// ============================================
// FUNGSI: HISTORY
// ============================================

/**
 * MASALAH: Menyimpan dan menampilkan riwayat perhitungan.
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "addToHistory" dan "renderHistory"
 */
function addToHistory(calculation) {
    // PERTANYAAN 1: Di mana menyimpan history?
    // PETUNJUK: Gunakan array
    // KONSEP: history.unshift(calculation) untuk tambah di awal
    
    // PERTANYAAN 2: Berapa banyak history yang disimpan?
    // PETUNJUK: Batasi agar tidak terlalu banyak
    // KONSEP: if (history.length > 10) history.pop()
}

function renderHistory() {
    // PERTANYAAN: Bagaimana menampilkan history?
    // PETUNJUK: Loop array, buat element untuk setiap item
    // KONSEP: .map() atau forEach untuk membuat HTML dari array
}


// ============================================
// FUNGSI: ERROR HANDLING
// ============================================

/**
 * MASALAH: Menampilkan pesan error (misal: bagi 0).
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "showError"
 */
function showError(message) {
    // PERTANYAAN: Bagaimana menampilkan error?
    // PETUNJUK: Tampilkan pesan di display, lalu reset setelah beberapa detik
    // KONSEP: setTimeout() untuk menjalankan fungsi setelah jeda waktu
}


// ============================================
// EVENT LISTENERS
// ============================================

/**
 * MASALAH: Menghubungkan tombol dengan fungsi.
 * 
 * TULIS KODEMU DI SINI:
 * Setup event listeners untuk semua tombol
 */
document.addEventListener('DOMContentLoaded', () => {
    // PERTANYAAN 1: Bagaimana menghubungkan banyak tombol?
    // PETUNJUK: Cari semua tombol dengan class tertentu
    // KONSEP: document.querySelectorAll('.class') mengembalikan NodeList
    //         Lalu forEach untuk menambahkan event listener ke setiap tombol
    
    // PERTANYAAN 2: Bagaimana handle keyboard?
    // PETUNJUK: Dengarkan event keyboard di document
    // KONSEP: document.addEventListener('keydown', fungsi)
    //         e.key mengembalikan tombol yang ditekan
});
