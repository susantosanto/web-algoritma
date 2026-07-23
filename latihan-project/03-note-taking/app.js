/**
 * ============================================
 * NOTE TAKING APP
 * ============================================
 * 
 * MASALAH:
 * Membuat aplikasi catatan yang bisa:
 * 1. Membuat catatan baru (Create)
 * 2. Melihat daftar catatan (Read)
 * 3. Mengedit catatan (Update)
 * 4. Menghapus catatan (Delete)
 * 5. Mencari catatan
 * 6. Memfilter berdasarkan kategori
 * 7. Menyimpan warna untuk setiap catatan
 * 
 * KONSEP YANG DIPAKAI:
 * - CRUD Operations (Create, Read, Update, Delete)
 * - Array of Objects (menyimpan banyak data kompleks)
 * - Filter & Search (menyaring data)
 * - Template Literal (membuat HTML dinamis)
 * - Modal (popup untuk form)
 * - LocalStorage (penyimpanan persisten)
 * 
 * CARA BERPIKIR:
 * Sebelum menulis kode, pahami dulu:
 * 1. Data apa yang disimpan? (struktur object)
 * 2. Operasi apa yang dilakukan? (CRUD)
 * 3. Bagaimana menampilkannya? (rendering)
 * 4. Bagaimana menghubungkan dengan user? (events)
 */


// ============================================
// DATA & KONFIGURASI
// ============================================

/**
 * MASALAH: Menentukan struktur data dan opsi yang tersedia.
 * 
 * PERTANYAAN:
 * - Data apa yang perlu disimpan untuk setiap note?
 * - Kategori apa saja yang tersedia?
 * - Warna apa saja yang bisa dipilih?
 * 
 * TULIS KODEMU DI SINI:
 * 1. Buat variabel "notes" (array kosong)
 * 2. Buat variabel "editingNoteId" (null)
 * 3. Buat variabel "currentCategory" ('all')
 * 4. Buat variabel "searchQuery" ('')
 * 5. Buat array "categories" dengan beberapa kategori
 * 6. Buat array "colors" dengan beberapa pilihan warna
 */


// ============================================
// FUNGSI: TAMPILKAN NOTES
// ============================================

/**
 * MASALAH: Menampilkan semua notes yang sudah difilter ke layar.
 * 
 * ALUR BERPIKIR:
 * 1. Dari mana data notes? (array "notes")
 * 2. Apakah ada filter yang aktif? (category, search)
 * 3. Bagaimana menggabungkan filter?
 * 4. Bagaimana membuat card untuk setiap note?
 * 
 * PERTANYAAN UNTUK DIRI SENDIRI:
 * - Bagaimana cara mendapatkan notes yang sudah difilter?
 * - Bagaimana cara membuat card note yang menarik?
 * - Bagaimana cara menampilkan tanggal dengan format yang baik?
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "renderNotes"
 */
function renderNotes() {
    // PERTANYAAN 1: Bagaimana mendapatkan notes yang difilter?
    // PETUNJUK: Panggil fungsi yang menggabungkan semua filter
    // KONSEP: Pemisahan tanggung jawab - satu fungsi untuk satu tugas
    
    // PERTANYAAN 2: Bagaimana mengosongkan container?
    // PETUNJUK: Seperti di to-do list, kosongkan innerHTML
    // KONSEP: innerHTML = '' menghapus semua isi
    
    // PERTANYAAN 3: Bagaimana membuat card note?
    // PETUNJUK: Setiap note punya: title, content, category, color, tanggal
    //           Buat element HTML untuk menampung semua info itu
    // KONSEP: createElement + appendChild untuk membangun DOM
    
    // PERTANYAAN 4: Bagaimana menampilkan isi yang panjang?
    // PETUNJUK: Jika content terlalu panjang, potong dengan ...
    // KONSEP: substring() atau slice() untuk memotong string
    
    // PERTANYAAN 5: Bagaimana menambahkan tombol edit/hapus?
    // PETUNJUK: Setiap card butuh tombol yang bisa diklik
    // KONSEP: onclick attribute atau addEventListener
}


// ============================================
// FUNGSI: GET FILTERED NOTES
// ============================================

/**
 * MASALAH: Mendapatkan notes yang sudah difilter berdasarkan
 *           category DAN search query.
 * 
 * ALUR BERPIKIR:
 * 1. Mulai dari semua notes
 * 2. Filter berdasarkan category (jika bukan "all")
 * 3. Filter berdasarkan search query (jika ada)
 * 4. Kembalikan hasil gabungan
 * 
 * PERTANYAAN UNTUK DIRI SENDIRI:
 * - Bagaimana cara menggabungkan dua filter?
 * - Apakah urutan filter penting?
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "getFilteredNotes" yang mengembalikan array
 */
function getFilteredNotes() {
    // PERTANYAAN 1: Bagaimana memulai dari semua notes?
    // PETUNJUK: Buat salinan array agar tidak mengubah asli
    // KONSEP: Spread operator [...] atau .slice() untuk copy array
    
    // PERTANYAAN 2: Bagaimana filter berdasarkan category?
    // PETUNJUK: Gunakan .filter() dengan kondisi
    // KONSEP: note.category === currentCategory
    
    // PERTANYAAN 3: Bagaimana filter berdasarkan search?
    // PETUNJUK: Cek apakah title atau content mengandung teks search
    // KONSEP: .includes() mengecek apakah string mengandung substring
    //         .toLowerCase() untuk case-insensitive
    
    // PERTANYAAN 4: Bagaimana menggabungkan filter?
    // PETUNJUK: Jalankan filter pertama, lalu filter hasilnya lagi
    // KONSEP: Method chaining - filter().filter()
}


// ============================================
// FUNGSI: CREATE NOTE
// ============================================

/**
 * MASALAH: Membuat note baru dari data form.
 * 
 * ALUR BERPIKIR:
 * 1. Ambil data dari form (title, content, category, color)
 * 2. Buat object note baru dengan ID unik
 * 3. Tambahkan ke array notes
 * 4. Simpan ke LocalStorage
 * 5. Tampilkan ulang
 * 6. Tutup modal
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "createNote" yang menerima parameter "data"
 */
function createNote(data) {
    // PERTANYAAN 1: Bagaimana membuat object note baru?
    // PETUNJUK: Gunakan {} dengan property yang dibutuhkan
    // KONSEP: Object literal { key: value, key2: value2 }
    
    // PERTANYAAN 2: Bagaimana membuat ID unik?
    // PETUNJUK: Gunakan timestamp atau kombinasi angka unik
    // KONSEP: Date.now() mengembalikan timestamp dalam milidetik
    
    // PERTANYAAN 3: Bagaimana menambah ke array?
    // PETUNJUK: Gunakan method array untuk menambah item
    // KONSEP: .push() menambah di akhir, .unshift() menambah di awal
    
    // PERTANYAAN 4: Format tanggal seperti apa?
    // PETUNJUK: Simpan dalam format ISO agar mudah diurutkan
    // KONSEP: new Date().toISOString() menghasilkan format standar
}


// ============================================
// FUNGSI: UPDATE NOTE
// ============================================

/**
 * MASALAH: Mengupdate note yang sudah ada.
 * 
 * ALUR BERPIKIR:
 * 1. Cari note berdasarkan ID
 * 2. Update semua property dengan data baru
 * 3. Update timestamp updatedAt
 * 4. Simpan dan render ulang
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "updateNote" yang menerima parameter "id" dan "data"
 */
function updateNote(id, data) {
    // PERTANYAAN 1: Bagaimana mencari note berdasarkan ID?
    // PETUNJUK: Gunakan .find() seperti di to-do list
    // KONSEP: notes.find(n => n.id === id)
    
    // PERTANYAAN 2: Bagaimana mengubah property object?
    // PETUNJUK: Akses property dengan . lalu beri nilai baru
    // KONSEP: note.title = data.title
    
    // PERTANYAAN 3: Bagaimana update timestamp?
    // PETUNJUK: Setiap kali update, catat waktu saat ini
    // KONSEP: note.updatedAt = new Date().toISOString()
}


// ============================================
// FUNGSI: DELETE NOTE
// ============================================

/**
 * MASALAH: Menghapus note berdasarkan ID.
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "deleteNote" yang menerima parameter "id"
 */
function deleteNote(id) {
    // PERTANYAAN 1: Bagaimana konfirmasi ke user?
    // PETUNJUK: Gunakan dialog konfirmasi browser
    // KONSEP: confirm('pesan')
    
    // PERTANYAAN 2: Bagaimana menghapus dari array?
    // PETUNJUK: Gunakan .filter() seperti di to-do list
    // KONSEP: notes = notes.filter(n => n.id !== id)
    
    // PERTANYAAN 3: Apa yang dilakukan setelah hapus?
    // PETUNJUK: Simpan perubahan dan tampilkan ulang
    // KONSEP: saveNotes() lalu renderNotes()
}


// ============================================
// FUNGSI: MODAL
// ============================================

/**
 * MASALAH: Modal (popup) untuk form tambah/edit note.
 * 
 * KONSEP:
 * Modal adalah element yang tersembunyi, lalu ditampilkan saat dibutuhkan.
 * - Untuk menyembunyikan: tambahkan class "hidden"
 * - Untuk menampilkan: hapus class "hidden"
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "openModal" dan "closeModal"
 */
function openModal(noteId = null) {
    // PERTANYAAN 1: Bagaimana menampilkan modal?
    // PETUNJUK: Hapus class "hidden" dari modal element
    // KONSEP: element.classList.remove('hidden')
    
    // PERTANYAAN 2: Apa bedanya open untuk tambah vs edit?
    // PETUNJUK: Jika edit, isi form dengan data note yang ada
    // KONSEP: Cek parameter, jika ada noteId → mode edit
    
    // PERTANYAAN 3: Bagaimana mengisi form dengan data?
    // PETUNJUK: Akses input element, lalu set value-nya
    // KONSEP: input.value = data yang akan diisi
}

function closeModal() {
    // PERTANYAAN: Bagaimana menutup modal?
    // PETUNJUK: Kebalikan dari openModal
    // KONSEP: element.classList.add('hidden')
    //         Reset form agar bersih untuk input berikutnya
}


// ============================================
// FUNGSI: SEARCH & FILTER
// ============================================

/**
 * MASALAH: Mencari note dan memfilter berdasarkan kategori.
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "searchNotes" dan "filterByCategory"
 */
function searchNotes(query) {
    // PERTANYAAN: Bagaimana search bekerja?
    // PETUNJUK: Update query, lalu render ulang
    // KONSEP: searchQuery = query; renderNotes();
}

function filterByCategory(category) {
    // PERTANYAAN 1: Bagaimana filter bekerja?
    // PETUNJUK: Update currentCategory, lalu render ulang
    // KONSEP: currentCategory = category; renderNotes();
    
    // PERTANYAAN 2: Bagaimana menandai button yang aktif?
    // PETUNJUK: Hapus class active dari semua, tambah ke yang diklik
    // KONSEP: Loop semua button, manipulasi class
}


// ============================================
// FUNGSI: LOCALSTORAGE
// ============================================

/**
 * MASALAH: Menyimpan dan memuat notes dari LocalStorage.
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "saveNotes" dan "loadNotes"
 */
function saveNotes() {
    // PETUNJUK: Sama seperti to-do list
    // KONSEP: JSON.stringify() lalu localStorage.setItem()
}

function loadNotes() {
    // PETUNJUK: Sama seperti to-do list
    // KONSEP: localStorage.getItem() lalu JSON.parse()
}


// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // PERTANYAAN: Event apa saja yang perlu didengar?
    // PETUNJUK: 
    // - Klik tombol "Tambah Note"
    // - Klik tombol "Simpan" di modal
    // - Klik tombol "Batal" di modal
    // - Klik di luar modal (overlay) untuk tutup
    // - Input di search field
    // - Klik button kategori
    // 
    // KONSEP: Setiap interaksi user = event yang harus ditangani
});
