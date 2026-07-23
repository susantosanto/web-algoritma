/**
 * ============================================
 * NOTE TAKING APP
 * ============================================
 * 
 * MASALAH:
 * Membuat aplikasi catatan dengan fitur:
 * 1. CRUD (Create, Read, Update, Delete)
 * 2. Search & Filter
 * 3. Warna catatan
 * 4. Kategori
 * 
 * KONSEP:
 * - Array of Objects
 * - Filter & Search
 * - Modal (popup)
 * - Method Chaining
 */


// ============================================
// DATA & KONFIGURASI
// ============================================

/**
 * KONSEP: Array of Objects untuk menyimpan banyak data kompleks
 * 
 * CONTOH KONSEP:
 * const data = [
 *     { id: 1, nama: 'Budi', nilai: 90 },
 *     { id: 2, nama: 'Siti', nilai: 85 },
 * ];
 * 
 * --- Array biasa ---
 * let angka = [1, 2, 3];
 * 
 * --- Object biasa ---
 * let orang = { nama: 'Andi', umur: 20 };
 * 
 * --- Array of Objects ---
 * let siswa = [
 *     { nama: 'Budi', umur: 18 },
 *     { nama: 'Siti', umur: 19 },
 * ];
 * 
 * TULIS KODEMU DI SINI:
 * Buat variabel:
 * - notes (array kosong)
 * - editingNoteId (null)
 * - currentCategory ('all')
 * - searchQuery ('')
 * - categories (array object kategori)
 * - colors (array object warna)
 */


// ============================================
// FUNGSI: GET FILTERED NOTES
// ============================================

/**
 * MASALAH: Mendapatkan notes yang sudah difilter.
 * 
 * KONSEP: Method Chaining
 * 
 * CONTOH KONSEP (bukan jawaban):
 * 
 * --- Filter array ---
 * const arrayBaru = array.filter(item => {
 *     return kondisi; // true = ambil, false = buang
 * });
 * 
 * --- Filter sederhana ---
 * const genap = angka.filter(x => x % 2 === 0);
 * 
 * --- Filter object ---
 * const lulus = siswa.filter(s => s.nilai >= 75);
 * 
 * --- Method chaining (gabungan) ---
 * const hasil = array
 *     .filter(x => kondisi1)
 *     .filter(x => kondisi2)
 *     .map(x => ubahan);
 * 
 * --- String includes (mencari substring) ---
 * const ada = string.includes('kata'); // true/false
 * 
 * --- Case-insensitive ---
 * const query = 'javascript';
 * const text = 'Belajar JavaScript';
 * text.toLowerCase().includes(query.toLowerCase()); // true
 * 
 * TULIS KODEMU DI SINI:
 */
function getFilteredNotes() {
    // PERTANYAAN: Bagaimana membuat salinan array?
    // KONSEP: [...array] atau array.slice()
    //
    // PERTANYAAN: Bagaimana filter berdasarkan category?
    // KONSEP: notes.filter(n => n.category === currentCategory)
    //
    // PERTANYAAN: Bagaimana filter berdasarkan search?
    // KONSEP: notes.filter(n => 
    //     n.title.toLowerCase().includes(searchQuery.toLowerCase())
    // )
    //
    // PERTANYAAN: Bagaimana menggabungkan dua filter?
    // KONSEP: Method chaining: .filter().filter()
}


// ============================================
// FUNGSI: CRUD OPERATIONS
// ============================================

/**
 * KONSEP: CRUD = Create, Read, Update, Delete
 * 
 * CONTOH KONSEP:
 * 
 * --- CREATE (membuat baru) ---
 * const newItem = { id: Date.now(), ...data };
 * array.unshift(newItem); // tambah di awal
 * 
 * --- READ (membaca) ---
 * const item = array.find(x => x.id === id); // cari 1
 * const items = array.filter(x => x.kondisi); // cari banyak
 * 
 * --- UPDATE (mengubah) ---
 * const item = array.find(x => x.id === id);
 * if (item) {
 *     item.property = nilaiBaru;
 * }
 * 
 * --- DELETE (menghapus) ---
 * array = array.filter(x => x.id !== id);
 * 
 * TULIS KODEMU DI SINI:
 */
function createNote(data) {
    // PERTANYAAN: Bagaimana membuat object note baru?
    // KONSEP: const note = { id: Date.now(), ...data, createdAt: new Date().toISOString() }
    //
    // PERTANYAAN: Bagaimana menambah ke array?
    // KONSEP: notes.unshift(note) untuk tambah di awal
}

function updateNote(id, data) {
    // PERTANYAAN: Bagaimana mencari note berdasarkan ID?
    // KONSEP: notes.find(n => n.id === id)
    //
    // PERTANYAAN: Bagaimana mengubah property object?
    // KONSEP: note.title = data.title; note.content = data.content;
}

function deleteNote(id) {
    // PERTANYAAN: Bagaimana konfirmasi ke user?
    // KONSEP: confirm('Yakin hapus?')
    //
    // PERTANYAAN: Bagaimana menghapus dari array?
    // KONSEP: notes = notes.filter(n => n.id !== id)
}


// ============================================
// FUNGSI: RENDER
// ============================================

/**
 * KONSEP: Rendering = membuat tampilan dari data
 * 
 * CONTOH KONSEP:
 * 
 * --- Render list ---
 * container.innerHTML = array.map(item => `
 *     <div class="card">
 *         <h3>${item.judul}</h3>
 *         <p>${item.isi}</p>
 *     </div>
 * `).join('');
 * 
 * --- Empty state ---
 * if (array.length === 0) {
 *     container.innerHTML = '<p>Tidak ada data</p>';
 *     return;
 * }
 * 
 * --- Truncate text (potong teks panjang) ---
 * const short = text.substring(0, 50) + '...';
 * 
 * --- Format tanggal ---
 * const date = new Date(isoString);
 * const formatted = date.toLocaleDateString('id-ID');
 * 
 * TULIS KODEMU DI SINI:
 */
function renderNotes() {
    // PERTANYAAN: Bagaimana mengosongkan container?
    // KONSEP: container.innerHTML = ''
    //
    // PERTANYAAN: Bagaimana render array ke HTML?
    // KONSEP: container.innerHTML = array.map(item => `<div>...</div>`).join('')
    //
    // PERTANYAAN: Bagaimana handle empty state?
    // KONSEP: if (filteredNotes.length === 0) { ... }
}


// ============================================
// FUNGSI: MODAL
// ============================================

/**
 * KONSEP: Modal = popup yang bisa dibuka/ditutup
 * 
 * CONTOH KONSEP:
 * 
 * --- Menampilkan modal ---
 * modal.classList.remove('hidden');
 * 
 * --- Menyembunyikan modal ---
 * modal.classList.add('hidden');
 * 
 * --- Toggle (bolak-balik) ---
 * modal.classList.toggle('hidden');
 * 
 * --- Mengisi form ---
 * input.value = 'nilai';
 * select.value = 'pilihan';
 * textarea.value = 'teks';
 * 
 * --- Reset form ---
 * form.reset();
 * 
 * TULIS KODEMU DI SINI:
 */
function openModal(noteId = null) {
    // PERTANYAAN: Bagaimana menampilkan modal?
    // KONSEP: modalElement.classList.remove('hidden')
    //
    // PERTANYAAN: Bagaimana bedakan mode tambah vs edit?
    // KONSEP: if (noteId !== null) { mode edit } else { mode tambah }
    //
    // PERTANYAAN: Bagaimana mengisi form dengan data lama?
    // KONSEP: input.value = note.title
}

function closeModal() {
    // PERTANYAAN: Bagaimana menutup modal?
    // KONSEP: modalElement.classList.add('hidden')
}


// ============================================
// FUNGSI: SEARCH & FILTER
// ============================================

/**
 * KONSEP: Search = mencari, Filter = menyaring
 * 
 * CONTOH KONSEP:
 * 
 * --- Search sederhana ---
 * function search(query) {
 *     searchQuery = query;
 *     renderNotes(); // render ulang dengan filter baru
 * }
 * 
 * --- Filter kategori ---
 * function filter(category) {
 *     currentCategory = category;
 *     renderNotes();
 *     
 *     // Update UI tombol aktif
 *     buttons.forEach(btn => {
 *         if (btn.dataset.category === category) {
 *             btn.classList.add('active');
 *         } else {
 *             btn.classList.remove('active');
 *         }
 *     });
 * }
 * 
 * TULIS KODEMU DI SINI:
 */
function searchNotes(query) {
    // PERTANYAAN: Bagaimana search bekerja?
    // KONSEP: Update searchQuery, lalu render ulang
}

function filterByCategory(category) {
    // PERTANYAAN: Bagaimana filter bekerja?
    // KONSEP: Update currentCategory, lalu render ulang
    //
    // PERTANYAAN: Bagaimana menandai tombol aktif?
    // KONSEP: Loop semua button, tambah/hapus class 'active'
}


// ============================================
// LOCALSTORAGE
// ============================================

/**
 * CONTOH KONSEP:
 * 
 * --- Simpan ---
 * localStorage.setItem('notes', JSON.stringify(notes));
 * 
 * --- Ambil ---
 * const data = localStorage.getItem('notes');
 * const notes = data ? JSON.parse(data) : [];
 * 
 * TULIS KODEMU DI SINI:
 */
function saveNotes() {
    // KONSEP: JSON.stringify() lalu localStorage.setItem()
}

function loadNotes() {
    // KONSEP: localStorage.getItem() lalu JSON.parse()
    //         Handle null dengan default array kosong
}


// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Event yang perlu didengar:
    // - Klik tombol "Tambah Note"
    // - Klik tombol "Simpan" di modal
    // - Klik tombol "Batal" di modal
    // - Klik di luar modal (overlay)
    // - Input di search field
    // - Klik button kategori
});
