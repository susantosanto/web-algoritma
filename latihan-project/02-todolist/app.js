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
 * - DOM Manipulation
 * - Event Handling
 * - Array & Object
 * - LocalStorage
 */


// ============================================
// VARIABEL GLOBAL
// ============================================

/**
 * KONSEP: Variabel global menyimpan data yang bisa diakses semua fungsi
 * 
 * CONTOH KONSEP (bukan jawaban):
 * let namaVariabel = nilaiAwal;
 * const namaKonstan = nilaiTetap;
 * 
 * Untuk array kosong:
 * let arrayKosong = [];
 * 
 * TULIS KODEMU DI SINI:
 * Buat variabel "todos" (array kosong)
 */


// ============================================
// FUNGSI: TAMBAH TODO
// ============================================

/**
 * MASALAH: User mengetik todo baru, lalu klik tombol/Enter.
 * 
 * KONSEP YANG DIBUTUHKAN:
 * 1. Mengambil element dari HTML
 * 2. Mengambil value dari input
 * 3. Membuat object
 * 4. Menambah item ke array
 * 
 * CONTOH KONSEP (bukan jawaban):
 * 
 * --- Mengambil element ---
 * const element = document.getElementById('id-element');
 * const elementLain = document.querySelector('.class-name');
 * 
 * --- Mengambil value ---
 * const isi = element.value;
 * const isiTrimmed = isi.trim(); // hapus spasi di awal/akhir
 * 
 * --- Membuat object ---
 * const objek = {
 *     property1: nilai1,
 *     property2: nilai2,
 * };
 * 
 * --- Menambah ke array ---
 * array.push(item);
 * array.unshift(item); // tambah di awal
 * 
 * --- Membuat ID unik ---
 * const idUnik = Date.now(); // timestamp milidetik
 * 
 * TULIS KODEMU DI SINI:
 */
function addTodo() {
    // PERTANYAAN: Bagaimana cara mengambil element input dari HTML?
    // KONSEP: document.getElementById('...') atau document.querySelector('...')
    //
    // PERTANYAAN: Bagaimana cara mengambil teks yang diketik user?
    // KONSEP: element.value lalu .trim() untuk hapus spasi
    //
    // PERTANYAAN: Bagaimana membuat ID yang unik untuk setiap todo?
    // KONSEP: Date.now() menghasilkan angka unik (timestamp)
    //
    // PERTANYAAN: Bagaimana menambah item ke array?
    // KONSEP: array.push(item) menambah di akhir
    //         array.unshift(item) menambah di awal
}


// ============================================
// FUNGSI: TAMPILKAN TODOS
// ============================================

/**
 * MASALAH: Menampilkan semua todos dari array ke layar.
 * 
 * KONSEP YANG DIBUTUHKAN:
 * 1. Mengosongkan container
 * 2. Loop array
 * 3. Membuat element HTML baru
 * 4. Menambah element ke container
 * 
 * CONTOH KONSEP (bukan jawaban):
 * 
 * --- Mengosongkan container ---
 * container.innerHTML = '';
 * 
 * --- Loop array ---
 * array.forEach(item => {
 *     console.log(item);
 * });
 * 
 * --- Membuat element baru ---
 * const elementBaru = document.createElement('tag');
 * elementBaru.textContent = 'teks';
 * elementBaru.classList.add('class-name');
 * 
 * --- Menambah ke container ---
 * container.appendChild(elementBaru);
 * 
 * --- Template literal untuk HTML ---
 * const html = `
 *     <div class="card">
 *         <p>${isi}</p>
 *     </div>
 * `;
 * container.innerHTML = html;
 * 
 * TULIS KODEMU DI SINI:
 */
function renderTodos() {
    // PERTANYAAN: Bagaimana cara mengosongkan isi container?
    // KONSEP: container.innerHTML = ''
    //
    // PERTANYAAN: Bagaimana cara loop array untuk setiap todo?
    // KONSEP: todos.forEach(todo => { ... })
    //
    // PERTANYAAN: Bagaimana cara membuat element HTML baru?
    // KONSEP: document.createElement('div')
    //
    // PERTANYAAN: Bagaimana cara mengisi element dengan teks?
    // KONSEP: element.textContent = 'teks' atau element.innerHTML = html
    //
    // PERTANYAAN: Bagaimana cara menambahkan class CSS?
    // KONSEP: element.classList.add('nama-class')
    //
    // PERTANYAAN: Bagaimana cara menambah element ke container?
    // KONSEP: container.appendChild(element) atau container.innerHTML += html
}


// ============================================
// FUNGSI: TOGGLE SELESAI
// ============================================

/**
 * MASALAH: Checkbox diklik, status completed berubah.
 * 
 * KONSEP YANG DIBUTUHKAN:
 * 1. Mencari item dalam array berdasarkan ID
 * 2. Mengubah property object
 * 
 * CONTOH KONSEP (bukan jawaban):
 * 
 * --- Mencari item dalam array ---
 * const ditemukan = array.find(item => item.id === idCari);
 * 
 * --- Mengubah property ---
 * ditemukan.namaProperty = nilaiBaru;
 * 
 * --- Memibalik boolean ---
 * status = !status; // true jadi false, false jadi true
 * 
 * TULIS KODEMU DI SINI:
 */
function toggleTodo(id) {
    // PERTANYAAN: Bagaimana cara mencari todo berdasarkan ID?
    // KONSEP: todos.find(todo => todo.id === id)
    //
    // PERTANYAAN: Bagaimana cara membalik boolean (true/false)?
    // KONSEP: variable = !variable
    //         ATAU: variable = variable === false ? true : false
}


// ============================================
// FUNGSI: HAPUS TODO
// ============================================

/**
 * MASALAH: User klik tombol hapus.
 * 
 * KONSEP YANG DIBUTUHKAN:
 * 1. Konfirmasi ke user
 * 2. Menghapus item dari array
 * 
 * CONTOH KONSEP (bukan jawaban):
 * 
 * --- Konfirmasi ---
 * const jawaban = confirm('Yakin?');
 * if (jawaban) { ... }
 * 
 * --- Menghapus dari array (membuat array baru) ---
 * array = array.filter(item => item.id !== idHapus);
 * 
 * --- Menghapus item terakhir ---
 * array.pop();
 * 
 * --- Menghapus item pertama ---
 * array.shift();
 * 
 * TULIS KODEMU DI SINI:
 */
function deleteTodo(id) {
    // PERTANYAAN: Bagaimana cara menampilkan dialog konfirmasi?
    // KONSEP: confirm('pesan')
    //
    // PERTANYAAN: Bagaimana cara menghapus item dari array berdasarkan ID?
    // KONSEP: .filter() membuat array baru TANPA item yang tidak cocok
    //         todos = todos.filter(todo => todo.id !== id)
}


// ============================================
// FUNGSI: UPDATE COUNTER
// ============================================

/**
 * MASALAH: Menampilkan jumlah todo yang belum selesai.
 * 
 * CONTOH KONSEP:
 * 
 * --- Filter array ---
 * const arrayBaru = array.filter(item => kondisi);
 * 
 * --- Menghitung jumlah item ---
 * const jumlah = arrayBaru.length;
 * 
 * --- Menghitung dengan reduce ---
 * const jumlah = array.reduce((acc, item) => {
 *     return kondisi ? acc + 1 : acc;
 * }, 0);
 * 
 * TULIS KODEMU DI SINI:
 */
function updateCounter() {
    // PERTANYAAN: Bagaimana cara menghitung item dengan kondisi tertentu?
    // KONSEP: .filter(kondisi).length
    //         ATAU: .reduce() dengan akumulator
}


// ============================================
// FUNGSI: LOCALSTORAGE
// ============================================

/**
 * MASALAH: Data harus tetap ada saat browser ditutup/refresh.
 * 
 * KONSEP:
 * LocalStorage = penyimpanan di browser (hanya simpan string)
 * 
 * CONTOH KONSEP (bukan jawaban):
 * 
 * --- Menyimpan ---
 * const dataString = JSON.stringify(dataJavaScript);
 * localStorage.setItem('nama', dataString);
 * 
 * --- Mengambil ---
 * const dataString = localStorage.getItem('nama');
 * const dataJavaScript = JSON.parse(dataString);
 * 
 * --- Menghapus ---
 * localStorage.removeItem('nama');
 * 
 * --- Cek ada atau tidak ---
 * if (localStorage.getItem('nama') !== null) { ... }
 * 
 * TULIS KODEMU DI SINI:
 */
function saveTodos() {
    // PERTANYAAN: Bagaimana cara mengubah array jadi string?
    // KONSEP: JSON.stringify(array)
    //
    // PERTANYAAN: Bagaimana cara menyimpan ke localStorage?
    // KONSEP: localStorage.setItem('nama', nilai)
}

function loadTodos() {
    // PERTANYAAN: Bagaimana cara mengambil dari localStorage?
    // KONSEP: localStorage.getItem('nama')
    //
    // PERTANYAAN: Bagaimana cara mengubah string jadi array?
    // KONSEP: JSON.parse(string)
    //
    // PERTANYAAN: Apa yang terjadi jika tidak ada data?
    // KONSEP: getItem() mengembalikan null jika tidak ada
}


// ============================================
// EVENT LISTENERS
// ============================================

/**
 * KONSEP: Event Listener mendengarkan aksi user
 * 
 * CONTOH KONSEP:
 * 
 * --- Saat DOM selesai dimuat ---
 * document.addEventListener('DOMContentLoaded', () => { ... });
 * 
 * --- Saat element diklik ---
 * element.addEventListener('click', () => { ... });
 * 
 * --- Saat tombol keyboard ditekan ---
 * element.addEventListener('keypress', (e) => {
 *     if (e.key === 'Enter') { ... }
 * });
 * 
 * --- Event onclick di HTML ---
 * <button onclick="fungsi()">Click</button>
 * 
 * TULIS KODEMU DI SINI:
 */
document.addEventListener('DOMContentLoaded', () => {
    // PERTANYAAN: Bagaimana cara menambahkan event listener?
    // KONSEP: element.addEventListener('namaEvent', fungsiCallback)
    //
    // PERTANYAAN: Bagaimama menangkap tombol Enter di input?
    // KONSEP: event.key === 'Enter' di dalam event keypress/keydown
    //
    // PERTANYAAN: Bagaimana cara mengosongkan input setelah submit?
    // KONSEP: input.value = ''
});
