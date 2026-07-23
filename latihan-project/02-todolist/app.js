/**
 * ============================================
 * TO-DO LIST APP
 * ============================================
 * 
 * MASALAH:
 * Membuat aplikasi to-do list yang bisa:
 * 1. Menambah todo baru
 * 2. Menampilkan daftar todos
 * 3. Menandai todo selesai/belum selesai
 * 4. Menghapus todo
 * 5. Menyimpan data agar tetap ada saat refresh
 * 
 * KONSEP YANG DIPAKAI:
 * - DOM Manipulation (mengakses & mengubah element HTML)
 * - Event Handling (menangkap aksi user)
 * - Array (menyimpan banyak data)
 * - Object (menyimpan data dengan key:value)
 * - LocalStorage (menyimpan data di browser)
 * - Template Literal (membuat string dinamis)
 * 
 * CARA BERPIKIR:
 * Sebelum menulis kode, tanyakan pada diri sendiri:
 * 1. Apa yang harus dilakukan fungsi ini?
 * 2. Data apa yang dibutuhkan?
 * 3. Dari mana data itu berasal?
 * 4. Ke mana data itu disimpan?
 * 5. Bagaimana menampilkannya?
 */


// ============================================
// VARIABEL GLOBAL
// ============================================

/**
 * Apa itu variabel global?
 * Variabel yang bisa diakses di SEMUA fungsi dalam file ini.
 * Berguna untuk menyimpan data yang harus "ingat" selama app berjalan.
 * 
 * TUGAS: Buat variabel untuk menyimpan todos
 * PETUNJUK: Todos adalah kumpulan data. Di JavaScript, kumpulan data
 *           disimpan dalam struktur bernama "Array".
 *           Setiap item dalam array adalah "Object" yang punya property.
 * 
 * Contoh structure (bukan kode, hanya gambaran):
 * todos = [
 *   { id: ..., text: ..., completed: ... },
 *   { id: ..., text: ..., completed: ... },
 * ]
 * 
 * TULIS KODEMU DI SINI:
 * Buat variabel bernama "todos" yang bernilai array kosong []
 */


// ============================================
// FUNGSI: TAMBAH TODO
// ============================================

/**
 * MASALAH: User mengetik todo baru, lalu klik tombol atau tekan Enter.
 *          Todo baru harus muncul di daftar.
 * 
 * ALUR BERPIKIR:
 * 1. Dari mana saya mendapatkan teks todo yang diketik user?
 * 2. Bagaimana cara mengambil teks dari input field?
 * 3. Apa yang harus saya lakukan dengan teks itu?
 * 4. Ke mana saya menyimpan todo baru?
 * 5. Bagaimana cara menampilkannya?
 * 
 * LANGKAH-LANGKAH (dalam bahasa manusia):
 * 1. Cari element input di HTML
 * 2. Ambil teks dari input itu
 * 3. Pastikan teks tidak kosong
 * 4. Buat data todo baru
 * 5. Tambahkan ke array todos
 * 6. Simpan ke LocalStorage
 * 7. Tampilkan ulang daftar todos
 * 8. Kosongkan input field
 * 
 * PERTANYAAN UNTUK DIRI SENDIRI:
 * - Bagaimana cara mencari element HTML berdasarkan id-nya?
 * - Bagaimana cara mengambil teks dari input field?
 * - Bagaimana cara membuat ID yang unik?
 * - Bagaimana cara menambah item ke array?
 * - Bagaimana cara mengosongkan input field?
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi bernama "addTodo"
 */
function addTodo() {
    // PERTANYAAN 1: Bagaimana cara mencari element input?
    // PETUNJUK: Cari di HTML, ada input dengan id apa?
    // KONSEP: Setiap element HTML bisa dicari menggunakan id-nya
    
    // PERTANYAAN 2: Bagaimana cara mengambil teks dari input?
    // PETUNJUK: Input field punya property untuk menyimpan teks yang diketik
    // KONSEP: Input element punya property bernama "value"
    
    // PERTANYAAN 3: Bagaimana memastikan teks tidak kosong?
    // PETUNJUK: Cek panjang teks atau gunakan kondisi boolean
    // KONSEP: "if" statement untuk memeriksa kondisi
    
    // PERTANYAAN 4: Bagaimana membuat ID unik?
    // PETUNJUK: Setiap todo butuh ID berbeda. Gunakan sesuatu yang selalu berubah.
    // KONSEP: Timestamp (waktu saat ini) selalu unik
    
    // PERTANYAAN 5: Bagaimana menambah item ke array?
    // PETUNJUK: Array punya method untuk menambah item di akhir
    // KONSEP: Array.push() menambah item di akhir array
    
    // PERTANYAAN 6: Bagaimana menampilkan ulang todos?
    // PETUNJUK: Panggil fungsi yang bertugas menampilkan todos
    // KONSEP: Modular programming - satu fungsi untuk satu tugas
}


// ============================================
// FUNGSI: TAMPILKAN TODOS
// ============================================

/**
 * MASALAH: Menampilkan semua todos yang ada di array ke layar.
 * 
 * ALUR BERPIKIR:
 * 1. Di mana saya menyimpan todos? (di array "todos")
 * 2. Ke mana saya harus menampilkannya? (ke element HTML tertentu)
 * 3. Bagaimana cara membuat element HTML baru dari data?
 * 4. Bagaimana urutan dan tampilannya?
 * 
 * LANGKAH-LANGKAH:
 * 1. Cari container di HTML yang akan menampung todos
 * 2. Kosongkan container (agar tidak tumpang tindih)
 * 3. Ulangi (loop) setiap todo dalam array
 * 4. Untuk setiap todo, buat element HTML baru
 * 5. Isi element dengan data todo
 * 6. Tambahkan element ke container
 * 
 * PERTANYAAN UNTUK DIRI SENDIRI:
 * - Bagaimana cara mencari element container?
 * - Bagaimana cara mengosongkan isi element?
 * - Bagaimana cara membuat element HTML baru?
 * - Bagaimana cara mengisi element dengan teks?
 * - Bagaimana cara menambah element ke container?
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi bernama "renderTodos"
 */
function renderTodos() {
    // PERTANYAAN 1: Bagaimana mencari container?
    // PETUNJUK: Cari di HTML, ada element dengan id apa untuk menampung todos?
    
    // PERTANYAAN 2: Bagaimana mengosongkan container?
    // PETUNJUK: Element punya property untuk mengakses isinya
    // KONSEP: innerHTML adalah isi HTML di dalam element
    
    // PERTANYAAN 3: Bagaimana membuat element baru?
    // PETUNJUK: Ada fungsi untuk membuat element HTML baru
    // KONSEP: document.createElement() membuat element baru
    
    // PERTANYAAN 4: Bagaimana mengisi element dengan teks?
    // PETUNJUK: Element punya property untuk teks
    // KONSEP: textContent atau innerHTML untuk isi teks
    
    // PERTANYAAN 5: Bagaimana menambah class CSS ke element?
    // PETUNJUK: Element punya cara untuk menambah class
    // KONSEP: classList.add() untuk menambah class
    
    // PERTANYAAN 6: Bagaimana menambah element ke container?
    // PETUNJUK: Container punya method untuk menambah child
    // KONSEP: appendChild() menambah element anak
    
    // PERTANYAAN 7: Bagaimana menghubungkan checkbox dengan data?
    // PETUNJUK: Saat checkbox diklik, sesuatu harus terjadi
    // KONSEP: Event handler - fungsi yang dipanggil saat event terjadi
}


// ============================================
// FUNGSI: TOGGLE SELESAI
// ============================================

/**
 * MASALAH: User mencentang checkbox untuk menandai todo selesai.
 *          Status completed harus berubah (true ↔ false).
 * 
 * ALUR BERPIKIR:
 * 1. Todo mana yang harus diubah? (berdasarkan ID)
 * 2. Bagaimana mencari todo dalam array berdasarkan ID?
 * 3. Bagaimana mengubah status completed?
 * 4. Apa yang harus dilakukan setelah perubahan?
 * 
 * PERTANYAAN UNTUK DIRI SENDIRI:
 * - Bagaimana cara mencari item dalam array berdasarkan property?
 * - Bagaimana cara membalik nilai boolean (true jadi false, sebaliknya)?
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi bernama "toggleTodo" yang menerima parameter "id"
 */
function toggleTodo(id) {
    // PERTANYAAN 1: Bagaimana mencari todo berdasarkan id?
    // PETUNJUK: Array punya method untuk mencari item berdasarkan kondisi
    // KONSEP: .find() mengembalikan item pertama yang cocok
    
    // PERTANYAAN 2: Bagaimana membalik boolean?
    // PETUNJUK: Gunakan operator "not" (!) atau比较 dengan lawannya
    // KONSEP: !true = false, !false = true
    // ATAU: selesai = selesai === false ? true : false
    
    // PERTANYAAN 3: Apa yang dilakukan setelah mengubah?
    // PETUNJUK: Perubahan harus disimpan dan ditampilkan
    // KONSEP: Save ke storage, lalu render ulang
}


// ============================================
// FUNGSI: HAPUS TODO
// ============================================

/**
 * MASALAH: User mengklik tombol hapus untuk menghapus todo.
 * 
 * ALUR BERPIKIR:
 * 1. Todo mana yang harus dihapus? (berdasarkan ID)
 * 2. Bagaimana menghapus item dari array?
 * 3. Apa yang harus dilakukan setelah penghapusan?
 * 
 * PERTANYAAN UNTUK DIRI SENDIRI:
 * - Bagaimana cara menghapus item dari array berdasarkan ID?
 * - Apakah ada method untuk menghapus? Atau harus cara lain?
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi bernama "deleteTodo" yang menerima parameter "id"
 */
function deleteTodo(id) {
    // PERTANYAAN 1: Bagaimana menghapus item dari array?
    // PETUNJUK: Tidak ada method "hapus berdasarkan ID" langsung
    //           Coba pikirkan: bagaimana membuat array BARU yang isinya
    //           semua item KECUALI yang mau dihapus?
    // KONSEP: .filter() membuat array baru berdasarkan kondisi
    //         Jika kondisi true → item diambil
    //         Jika kondisi false → item dibuang
    
    // PERTANYAAN 2: Bagaimana konfirmasi ke user sebelum hapus?
    // PETUNJUK: Ada fungsi bawaan browser untuk menampilkan dialog konfirmasi
    // KONSEP: confirm() menampilkan dialog ya/tidak
}


// ============================================
// FUNGSI: UPDATE COUNTER
// ============================================

/**
 * MASALAH: Menampilkan jumlah todo yang belum selesai.
 * 
 * ALUR BERPIKIR:
 * 1. Hitung todo yang completed = false
 * 2. Tampilkan angka itu ke layar
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi bernama "updateCounter"
 */
function updateCounter() {
    // PERTANYAAN 1: Bagaimana menghitung item dengan kondisi tertentu?
    // PETUNJUK: Array punya method untuk menyaring item berdasarkan kondisi
    //           lalu hitung panjang array hasil filter
    // KONSEP: .filter() menghasilkan array baru
    //         .length menghasilkan jumlah item
    
    // PERTANYAAN 2: Bagaimana menampilkan angka ke layar?
    // PETUNJUK: Cari element yang menampilkan counter, lalu ubah teksnya
    // KONSEP: textContent atau innerHTML untuk mengubah isi teks
}


// ============================================
// FUNGSI: LOCALSTORAGE
// ============================================

/**
 * MASALAH: Data harus tetap ada meski browser ditutup/di-refresh.
 * 
 * KONSEP:
 * LocalStorage = "gudang" di browser yang bisa menyimpan data
 * - Data bertipe string
 * - Bisa akses dari halaman yang sama
 * - Tidak hilang saat refresh
 * 
 * ALUR BERPIKIR:
 * 1. Menyimpan: array → string (karena localStorage hanya simpan string)
 * 2. Memuat: string → array (karena kita butuh array untuk diproses)
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "saveTodos" dan "loadTodos"
 */
function saveTodos() {
    // PERTANYAAN 1: Bagaimana mengubah array jadi string?
    // PETUNJUK: Ada fungsi untuk mengubah JavaScript value jadi string JSON
    // KONSEP: JSON.stringify() mengubah value jadi string JSON
    
    // PERTANYAAN 2: Bagaimana menyimpan ke localStorage?
    // PETUNJUK: localStorage punya method untuk menyimpan
    // KONSEP: localStorage.setItem(nama, nilai)
}

function loadTodos() {
    // PERTANYAAN 1: Bagaimana mengambil data dari localStorage?
    // PETUNJUK: localStorage punya method untuk mengambil
    // KONSEP: localStorage.getItem(nama)
    
    // PERTANYAAN 2: Bagaimana mengubah string jadi array?
    // PETUNJUK: Kebalikan dari stringify
    // KONSEP: JSON.parse() mengubah string JSON jadi value
    
    // PERTANYAAN 3: Apa yang terjadi jika tidak ada data?
    // PETUNJUK: getItem mengembalikan null jika tidak ada
    // KONSEP: Cek dengan if, jika null → gunakan array kosong
}


// ============================================
// EVENT LISTENERS
// ============================================

/**
 * MASALAH: Menghubungkan aksi user (klik, tekan) dengan fungsi JavaScript.
 * 
 * KONSEP:
 * - Event = aksi user (klik, tekan tombol, input, dll)
 * - Event Listener = "pendengar" yang menunggu event terjadi
 * - Callback = fungsi yang dipanggil saat event terjadi
 * 
 * TULIS KODEMU DI SINI:
 * Setup event listeners setelah DOM selesai dimuat
 */
document.addEventListener('DOMContentLoaded', () => {
    // PERTANYAAN 1: Mengapa harus menunggu DOM loaded?
    // PETUNJUK: JavaScript berjalan sebelum HTML selesai dimuat
    //           Jika langsung akses element, element mungkin belum ada
    // KONSEP: DOMContentLoaded event fires when HTML is fully loaded
    
    // PERTANYAAN 2: Bagaimana menambahkan event listener ke tombol?
    // PETUNJUK: Cari element tombol, lalu tambahkan "pendengar"
    // KONSEP: element.addEventListener(namaEvent, fungsiCallback)
    
    // PERTANYAAN 3: Bagaimana menangkap tombol Enter di input?
    // PETUNJUK: Ada event yang terjadi saat tombol keyboard ditekan
    // KONSEP: "keypress" atau "keydown" event, cek e.key === 'Enter'
    
    // PERTANYAAN 4: Bagaimana mengosongkan input setelah submit?
    // PETUNJUK: Input punya property untuk mengatur nilainya
    // KONSEP: input.value = '' mengosongkan input
});
