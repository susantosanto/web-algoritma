/**
 * ============================================
 * TO-DO LIST APP
 * ============================================
 * 
 * PETUNJUK:
 * - Isi setiap fungsi yang kosong dengan kode JavaScript
 * - Ikuti instruksi di dalam setiap fungsi
 * - Gunakan framework 7 Langkah Universal
 * 
 * FITUR YANG HARUS DIBUAT:
 * 1. Tambah todo baru
 * 2. Tampilkan daftar todos
 * 3. Toggle selesai/belum selesai
 * 4. Hapus todo
 * 5. Simpan ke LocalStorage
 */

// ============================================
// VARIABEL GLOBAL
// ============================================

// Array untuk menyimpan todos
// Format: { id: number, text: string, completed: boolean }
let todos = [];


// ============================================
// FUNGSI: TAMBAH TODO
// ============================================

/**
 * Fungsi untuk menambah todo baru
 * Dipanggil saat user klik tombol "Tambah" atau tekan Enter
 */
function addTodo() {
    // LANGKAH 1: Ambil element input
    // const input = ...
    
    // LANGKAH 2: Ambil value dan hapus spasi di awal/akhir
    // const text = ...
    
    // LANGKAH 3: Validasi - jika kosong, jangan tambah
    // if (!text) {
    //     alert('Masukkan todo!');
    //     return;
    // }
    
    // LANGKAH 4: Buat object todo baru
    // const newTodo = {
    //     id: ... (gunakan Date.now() untuk ID unik)
    //     text: ...
    //     completed: false
    // };
    
    // LANGKAH 5: Tambahkan ke array todos
    // todos.push(...);
    
    // LANGKAH 6: Simpan ke LocalStorage
    // saveTodos();
    
    // LANGKAH 7: Tampilkan ulang daftar todo
    // renderTodos();
    
    // LANGKAH 8: Kosongkan input field
    // input.value = '';
}


// ============================================
// FUNGSI: TAMPILKAN TODOS
// ============================================

/**
 * Fungsi untuk menampilkan semua todos ke layar
 */
function renderTodos() {
    // LANGKAH 1: Ambil container element (id="todo-list")
    // const container = ...
    
    // LANGKAH 2: Kosongkan container
    // container.innerHTML = '';
    
    // LANGKAH 3: Loop array todos
    // todos.forEach(todo => {
        
        // LANGKAH 3a: Buat element div untuk todo item
        // const todoItem = document.createElement('div');
        // todoItem.className = '...'; // tambahkan class styling
        
        // LANGKAH 3b: Buat checkbox
        // const checkbox = document.createElement('input');
        // checkbox.type = 'checkbox';
        // checkbox.checked = todo.completed;
        // checkbox.onchange = () => toggleTodo(todo.id);
        
        // LANGKAH 3c: Buat span untuk text todo
        // const text = document.createElement('span');
        // text.textContent = todo.text;
        // Jika completed, tambahkan class: line-through, text-gray-400
        
        // LANGKAH 3d: Buat button hapus
        // const deleteBtn = document.createElement('button');
        // deleteBtn.textContent = '🗑️';
        // deleteBtn.onclick = () => deleteTodo(todo.id);
        
        // LANGKAH 3e: Append semua ke todoItem
        // todoItem.appendChild(checkbox);
        // todoItem.appendChild(text);
        // todoItem.appendChild(deleteBtn);
        
        // LANGKAH 3f: Append todoItem ke container
        // container.appendChild(todoItem);
    // });
    
    // LANGKAH 4: Update counter
    // updateCounter();
}


// ============================================
// FUNGSI: TOGGLE SELESAI
// ============================================

/**
 * Fungsi untuk mengubah status completed/belum
 * @param {number} id - ID todo yang akan di-toggle
 */
function toggleTodo(id) {
    // LANGKAH 1: Cari todo dengan id yang sesuai
    // const todo = todos.find(t => t.id === id);
    
    // LANGKAH 2: Ubah status completed (true ↔ false)
    // if (todo) {
    //     todo.completed = !todo.completed;
    // }
    
    // LANGKAH 3: Simpan ke LocalStorage
    // saveTodos();
    
    // LANGKAH 4: Tampilkan ulang
    // renderTodos();
}


// ============================================
// FUNGSI: HAPUS TODO
// ============================================

/**
 * Fungsi untuk menghapus todo
 * @param {number} id - ID todo yang akan dihapus
 */
function deleteTodo(id) {
    // LANGKAH 1: Konfirmasi ke user
    // if (!confirm('Yakin hapus todo ini?')) return;
    
    // LANGKAH 2: Filter todos, buang yang id-nya sesuai
    // todos = todos.filter(t => t.id !== id);
    
    // LANGKAH 3: Simpan ke LocalStorage
    // saveTodos();
    
    // LANGKAH 4: Tampilkan ulang
    // renderTodos();
}


// ============================================
// FUNGSI: UPDATE COUNTER
// ============================================

/**
 * Fungsi untuk update counter "X items remaining"
 */
function updateCounter() {
    // LANGKAH 1: Hitung jumlah todo yang belum selesai
    // const remaining = todos.filter(t => !t.completed).length;
    
    // LANGKAH 2: Ambil element counter
    // const counter = document.getElementById('counter');
    
    // LANGKAH 3: Update text
    // counter.textContent = `${remaining} items remaining`;
}


// ============================================
// FUNGSI: LOCALSTORAGE
// ============================================

/**
 * Fungsi untuk menyimpan todos ke LocalStorage
 */
function saveTodos() {
    // LANGKAH 1: Konversi array ke string JSON
    // const data = JSON.stringify(todos);
    
    // LANGKAH 2: Simpan ke LocalStorage
    // localStorage.setItem('todos', data);
}

/**
 * Fungsi untuk memuat todos dari LocalStorage
 */
function loadTodos() {
    // LANGKAH 1: Ambil data dari LocalStorage
    // const data = localStorage.getItem('todos');
    
    // LANGKAH 2: Parse JSON ke array
    // if (data) {
    //     todos = JSON.parse(data);
    // } else {
    //     todos = [];
    // }
    
    // LANGKAH 3: Tampilkan todos
    // renderTodos();
}


// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Jalankan saat halaman selesai dimuat
 */
document.addEventListener('DOMContentLoaded', () => {
    // LANGKAH 1: Load todos dari LocalStorage
    // loadTodos();
    
    // LANGKAH 2: Setup event listener untuk Enter key
    // const input = document.getElementById('todo-input');
    // input.addEventListener('keypress', (e) => {
    //     if (e.key === 'Enter') {
    //         addTodo();
    //     }
    // });
});
