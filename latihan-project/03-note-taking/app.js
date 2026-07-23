/**
 * ============================================
 * NOTE TAKING APP
 * ============================================
 * 
 * PETUNJUK:
 * - Isi setiap fungsi yang kosong dengan kode JavaScript
 * - Ikuti instruksi di dalam setiap fungsi
 * - Gunakan framework 7 Langkah Universal
 * 
 * FITUR YANG HARUS DIBUAT:
 * 1. CRUD (Create, Read, Update, Delete)
 * 2. Search notes
 * 3. Filter by category
 * 4. Color picker untuk note
 * 5. Simpan ke LocalStorage
 */

// ============================================
// VARIABEL GLOBAL
// ============================================

// Array untuk menyimpan notes
let notes = [];

// ID note yang sedang di-edit (null jika tambah baru)
let editingNoteId = null;

// Filter saat ini
let currentCategory = 'all';
let searchQuery = '';

// Kategori yang tersedia
const categories = [
    { id: 'all', name: 'Semua', icon: '📋' },
    { id: 'personal', name: 'Pribadi', icon: '👤' },
    { id: 'work', name: 'Pekerjaan', icon: '💼' },
    { id: 'learning', name: 'Pembelajaran', icon: '📚' },
    { id: 'ideas', name: 'Ide', icon: '💡' }
];

// Pilihan warna untuk note
const colors = [
    { id: 'yellow', name: 'Kuning', bg: 'bg-yellow-100', border: 'border-yellow-300' },
    { id: 'blue', name: 'Biru', bg: 'bg-blue-100', border: 'border-blue-300' },
    { id: 'green', name: 'Hijau', bg: 'bg-green-100', border: 'border-green-300' },
    { id: 'pink', name: 'Pink', bg: 'bg-pink-100', border: 'border-pink-300' },
    { id: 'purple', name: 'Ungu', bg: 'bg-purple-100', border: 'border-purple-300' }
];


// ============================================
// FUNGSI: TAMPILKAN NOTES
// ============================================

/**
 * Fungsi untuk menampilkan notes ke layar
 */
function renderNotes() {
    // LANGKAH 1: Ambil container
    // const container = document.getElementById('notes-container');
    
    // LANGKAH 2: Filter notes berdasarkan search dan category
    // const filteredNotes = getFilteredNotes();
    
    // LANGKAH 3: Kosongkan container
    // container.innerHTML = '';
    
    // LANGKAH 4: Jika tidak ada notes, tampilkan empty state
    // if (filteredNotes.length === 0) {
    //     container.innerHTML = '<p class="text-center text-gray-500 col-span-3">Belum ada catatan</p>';
    //     return;
    // }
    
    // LANGKAH 5: Loop notes dan buat card untuk setiap note
    // filteredNotes.forEach(note => {
    //     const color = colors.find(c => c.id === note.color) || colors[0];
    //     
    //     const card = document.createElement('div');
    //     card.className = `${color.bg} border ${color.border} rounded-lg p-4 shadow-sm hover:shadow-md transition`;
    //     
    //     // Header: Title + Category badge
    //     // Content: Text (truncated)
    //     // Footer: Date + Edit/Delete buttons
    //     
    //     container.appendChild(card);
    // });
}


// ============================================
// FUNGSI: GET FILTERED NOTES
// ============================================

/**
 * Fungsi untuk mendapatkan notes yang sudah difilter
 */
function getFilteredNotes() {
    // LANGKAH 1: Mulai dari semua notes
    // let filtered = [...notes];
    
    // LANGKAH 2: Filter berdasarkan category
    // if (currentCategory !== 'all') {
    //     filtered = filtered.filter(n => n.category === currentCategory);
    // }
    
    // LANGKAH 3: Filter berdasarkan search query
    // if (searchQuery) {
    //     filtered = filtered.filter(n => 
    //         n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //         n.content.toLowerCase().includes(searchQuery.toLowerCase())
    //     );
    // }
    
    // LANGKAH 4: Return hasil filter
    // return filtered;
}


// ============================================
// FUNGSI: CREATE NOTE
// ============================================

/**
 * Fungsi untuk membuat note baru
 */
function createNote(data) {
    // LANGKAH 1: Buat object note baru
    // const newNote = {
    //     id: Date.now(),
    //     title: data.title,
    //     content: data.content,
    //     category: data.category,
    //     color: data.color,
    //     createdAt: new Date().toISOString(),
    //     updatedAt: new Date().toISOString()
    // };
    
    // LANGKAH 2: Tambah ke array notes
    // notes.unshift(newNote); // tambah di awal
    
    // LANGKAH 3: Simpan ke LocalStorage
    // saveNotes();
    
    // LANGKAH 4: Render ulang
    // renderNotes();
    
    // LANGKAH 5: Tutup modal
    // closeModal();
}


// ============================================
// FUNGSI: UPDATE NOTE
// ============================================

/**
 * Fungsi untuk mengupdate note yang sudah ada
 */
function updateNote(id, data) {
    // LANGKAH 1: Cari note dengan id
    // const note = notes.find(n => n.id === id);
    
    // LANGKAH 2: Update data
    // if (note) {
    //     note.title = data.title;
    //     note.content = data.content;
    //     note.category = data.category;
    //     note.color = data.color;
    //     note.updatedAt = new Date().toISOString();
    // }
    
    // LANGKAH 3: Simpan ke LocalStorage
    // saveNotes();
    
    // LANGKAH 4: Render ulang
    // renderNotes();
    
    // LANGKAH 5: Tutup modal
    // closeModal();
}


// ============================================
// FUNGSI: DELETE NOTE
// ============================================

/**
 * Fungsi untuk menghapus note
 */
function deleteNote(id) {
    // LANGKAH 1: Konfirmasi
    // if (!confirm('Yakin hapus catatan ini?')) return;
    
    // LANGKAH 2: Filter notes, buang yang id-nya sesuai
    // notes = notes.filter(n => n.id !== id);
    
    // LANGKAH 3: Simpan ke LocalStorage
    // saveNotes();
    
    // LANGKAH 4: Render ulang
    // renderNotes();
}


// ============================================
// FUNGSI: MODAL
// ============================================

/**
 * Fungsi untuk membuka modal
 */
function openModal(noteId = null) {
    // LANGKAH 1: Set editingNoteId
    // editingNoteId = noteId;
    
    // LANGKAH 2: Ambil modal element
    // const modal = document.getElementById('note-modal');
    
    // LANGKAH 3: Jika edit, isi form dengan data note
    // if (noteId) {
    //     const note = notes.find(n => n.id === noteId);
    //     // Isi form fields
    // }
    
    // LANGKAH 4: Tampilkan modal (remove hidden class)
    // modal.classList.remove('hidden');
}

/**
 * Fungsi untuk menutup modal
 */
function closeModal() {
    // LANGKAH 1: Ambil modal element
    // const modal = document.getElementById('note-modal');
    
    // LANGKAH 2: Sembunyikan modal (add hidden class)
    // modal.classList.add('hidden');
    
    // LANGKAH 3: Reset form
    // editingNoteId = null;
}


// ============================================
// FUNGSI: SEARCH
// ============================================

/**
 * Fungsi untuk search notes
 */
function searchNotes(query) {
    // LANGKAH 1: Update searchQuery
    // searchQuery = query;
    
    // LANGKAH 2: Render ulang
    // renderNotes();
}


// ============================================
// FUNGSI: FILTER CATEGORY
// ============================================

/**
 * Fungsi untuk filter berdasarkan category
 */
function filterByCategory(category) {
    // LANGKAH 1: Update currentCategory
    // currentCategory = category;
    
    // LANGKAH 2: Update UI (highlight active button)
    // ...
    
    // LANGKAH 3: Render ulang
    // renderNotes();
}


// ============================================
// FUNGSI: LOCALSTORAGE
// ============================================

/**
 * Fungsi untuk menyimpan notes ke LocalStorage
 */
function saveNotes() {
    // const data = JSON.stringify(notes);
    // localStorage.setItem('notes', data);
}

/**
 * Fungsi untuk memuat notes dari LocalStorage
 */
function loadNotes() {
    // const data = localStorage.getItem('notes');
    // notes = data ? JSON.parse(data) : [];
    // renderNotes();
}


// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // loadNotes();
    // setupEventListeners();
});
