# ✅ PROJECT 2: TO-DO LIST

> **Level**: Pemula | **Estimasi**: 3-5 jam | **Konsep**: DOM Manipulation, Events, LocalStorage

---

## 🎯 TUJUAN PROJECT

Membuat aplikasi To-Do List yang bisa:
- Menambah todo baru
- Menandai todo selesai/belum selesai
- Menghapus todo
- Menyimpan data di LocalStorage (tetap ada meski refresh)

---

## 📐 ALUR KERJA

```
LANGKAH 1: Perencanaan & Struktur Data
    ↓
LANGKAH 2: HTML Structure
    ↓
LANGKAH 3: Styling (Tailwind)
    ↓
LANGKAH 4: JavaScript - Tambah Todo
    ↓
LANGKAH 5: JavaScript - Tampilkan Todo
    ↓
LANGKAH 6: JavaScript - Toggle Selesai
    ↓
LANGKAH 7: JavaScript - Hapus Todo
    ↓
LANGKAH 8: LocalStorage
    ↓
LANGKAH 9: Testing & Polish
```

---

## LANGKAH 1: PERENCANAAN & STRUKTUR DATA

### 1.1 Struktur Data Todo
```
Setiap todo punya:
{
    id: number (unik)
    text: string (isi todo)
    completed: boolean (selesai/belum)
    createdAt: date (kapan dibuat)
}

Array todos = [
    { id: 1, text: "Belajar JavaScript", completed: false, createdAt: "..." },
    { id: 2, text: "Buat project", completed: true, createdAt: "..." },
]
```

### 1.2 Fitur yang Dibutuhkan
```
□ Input field untuk menulis todo
□ Tombol "Tambah" / Enter untuk submit
□ List/daftar todos
□ Checkbox untuk tandai selesai
□ Tombol hapus untuk setiap todo
□ Counter jumlah todo
□ Penyimpanan LocalStorage
```

### 1.3 Alur User
```
1. User buka aplikasi
2. User ketik todo di input field
3. User klik "Tambah" atau tekan Enter
4. Todo muncul di daftar
5. User bisa centang todo yang selesai
6. User bisa hapus todo
7. Data tersimpan otomatis
8. Saat refresh, data tetap ada
```

---

## LANGKAH 2: HTML STRUCTURE

### 2.1 File Structure
```
Buat file:
□ index.html
□ app.js (pisah dari HTML)
```

### 2.2 HTML Blueprint
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <!-- ISI: Link Tailwind CDN -->
</head>
<body class="bg-gray-100 min-h-screen py-8">
    
    <div class="container mx-auto max-w-md px-4">
        <!-- ISI: Header -->
        <!-- ISI: Input Section -->
        <!-- ISI: Todo List -->
        <!-- ISI: Stats/Footer -->
    </div>

    <!-- ISI: Link ke app.js -->
</body>
</html>
```

### 2.3 Petunjuk Tiap Section

#### **HEADER**
```
Struktur:
├── Title (text-3xl, font-bold, text-center)
├── Subtitle (text-gray-500, text-center)
└── Counter (text-sm, text-gray-400)

Petunjuk:
- Title: "My To-Do List" atau nama kreatif
- Counter akan di-update oleh JavaScript
- Beri jarak yang cukup dari atas
```

#### **INPUT SECTION**
```
Struktur:
├── Form (atau div dengan flex)
│   ├── Input Field
│   │   - type: text
│   │   - placeholder: "Tambah todo baru..."
│   │   - class: flex-1, px-4, py-2, border, rounded
│   └── Button "Tambah"
│       - class: bg-blue-500, text-white, px-6, py-2, rounded

Petunjuk:
- Input harus punya id untuk akses di JS
- Button harus punya id atau event listener
- Form harus prevent default (tidak reload)
```

#### **TODO LIST**
```
Struktur:
├── Container (id="todo-list")
│   ├── (akan diisi oleh JavaScript)
│   └── Setiap todo item:
│       ├── Checkbox
│       ├── Text Todo
│       └── Delete Button

Petunjuk:
- Container harus punya id="todo-list"
- Todo items akan di-generate oleh JavaScript
- Mulai dengan container kosong
```

#### **STATS/FOOTER**
```
Struktur:
├── Counter
│   - "X todos remaining"
│   - atau "X/Y selesai"
└── (opsional) Clear Completed Button

Petunjuk:
- Update counter setiap ada perubahan
- Tombol clear hanya muncul jika ada yang selesai
```

---

## LANGKAH 3: STYLING (TAILWIND)

### 3.1 Target Tampilan
```
┌────────────────────────────────┐
│     📝 My To-Do List           │
│     3 items remaining          │
├────────────────────────────────┤
│  [输入框...............] [Tambah] │
├────────────────────────────────┤
│  ☑ Belajar JavaScript    [🗑️]  │
│  ☑ Buat project          [🗑️]  │
│  ☐ Olahraga              [🗑️]  │
├────────────────────────────────┤
│         1/3 selesai           │
└────────────────────────────────┘
```

### 3.2 Class Tailwind yang Dipakai
```
Body: bg-gray-100, min-h-screen
Container: container, mx-auto, max-w-md, bg-white, rounded-lg, shadow-lg
Input: flex, gap-2, mb-4
Input field: flex-1, px-4, py-2, border, rounded-lg, focus:ring-2
Button: bg-blue-500, text-white, px-6, py-2, rounded-lg, hover:bg-blue-600
Todo item: flex, items-center, justify-between, px-4, py-3, border-b
Checkbox: w-5, h-5, cursor-pointer
Text: flex-1, ml-3
Delete: text-red-500, hover:text-red-700, cursor-pointer
Completed text: line-through, text-gray-400
```

---

## LANGKAH 4: JAVASCRIPT - TAMBAH TODO

### 4.1 Alur Penambahan
```
1. User ketik di input field
2. User klik "Tambah" atau tekan Enter
3. Ambil value dari input
4. Validasi (tidak kosong)
5. Buat object todo baru
6. Tambahkan ke array todos
7. Simpan ke LocalStorage
8. Tampilkan ulang list
9. Kosongkan input field
```

### 4.2 Petunjuk Implementasi
```
Buat fungsi addTodo():
├── Ambil input element
├── Ambil value, trim (hapus spasi awal/akhir)
├── Cek jika kosong → return (jangan tambah)
├── Buat object todo baru dengan:
│   - id: Date.now() (timestamp unik)
│   - text: value dari input
│   - completed: false
│   - createdAt: new Date()
├── Push ke array todos
├── Panggil saveTodos() untuk simpan
├── Panggil renderTodos() untuk tampilkan
└── Kosongkan input field

Event listener:
├── Klik tombol "Tambah" → panggil addTodo()
└── Tekan Enter di input → panggil addTodo()
```

### 4.3 Kode Awal (dengan instruksi)
```javascript
// ISI KODEMU DI SINI

// Variabel global
let todos = [];

// Fungsi untuk menambah todo
function addTodo() {
    // LANGKAH 1: Ambil input element
    // const input = ...
    
    // LANGKAH 2: Ambil value dan trim
    // const text = ...
    
    // LANGKAH 3: Validasi (jika kosong, return)
    // if (!text) return;
    
    // LANGKAH 4: Buat object todo baru
    // const newTodo = {
    //     id: ...,
    //     text: ...,
    //     completed: ...,
    //     createdAt: ...
    // };
    
    // LANGKAH 5: Tambah ke array todos
    // todos.push(...);
    
    // LANGKAH 6: Simpan ke LocalStorage
    // saveTodos();
    
    // LANGKAH 7: Tampilkan ulang
    // renderTodos();
    
    // LANGKAH 8: Kosongkan input
    // input.value = '';
}

// Event listener untuk tombol
// const addButton = ...
// addButton.addEventListener('click', addTodo);

// Event listener untuk Enter
// const inputField = ...
// inputField.addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//         addTodo();
//     }
// });
```

---

## LANGKAH 5: JAVASCRIPT - TAMPILKAN TODO

### 5.1 Alur Rendering
```
1. Kosongkan container todo list
2. Loop array todos
3. Untuk setiap todo:
   a. Buat element div
   b. Isi dengan checkbox, text, delete button
   c. Styling sesuai status (completed/belum)
   d. Tambahkan ke container
4. Update counter
```

### 5.2 Petunjuk Implementasi
```
Buat fungsi renderTodos():
├── Ambil container element (id="todo-list")
├── Kosongkan innerHTML container
├── Loop array todos:
│   ├── Buat div untuk todo item
│   ├── Buat checkbox
│   │   - checked jika completed
│   │   - onchange → panggil toggleTodo(id)
│   ├── Buat span untuk text
│   │   - class: line-through jika completed
│   ├── Buat button hapus
│   │   - onclick → panggil deleteTodo(id)
│   └── Append semua ke div
├── Append div ke container
└── Panggil updateCounter()
```

### 5.3 Kode Awal
```javascript
// Fungsi untuk menampilkan todos
function renderTodos() {
    // LANGKAH 1: Ambil container
    // const container = ...
    
    // LANGKAH 2: Kosongkan container
    // container.innerHTML = '';
    
    // LANGKAH 3: Loop todos
    // todos.forEach(todo => {
        // LANGKAH 3a: Buat element div
        // const todoItem = ...
        
        // LANGKAH 3b: Buat checkbox
        // const checkbox = ...
        // checkbox.type = 'checkbox';
        // checkbox.checked = todo.completed;
        // checkbox.onchange = () => toggleTodo(todo.id);
        
        // LANGKAH 3c: Buat text
        // const text = ...
        // text.textContent = todo.text;
        // if (todo.completed) text.classList.add('line-through', 'text-gray-400');
        
        // LANGKAH 3d: Buat delete button
        // const deleteBtn = ...
        // deleteBtn.textContent = '🗑️';
        // deleteBtn.onclick = () => deleteTodo(todo.id);
        
        // LANGKAH 3e: Append ke todoItem
        // todoItem.appendChild(checkbox);
        // todoItem.appendChild(text);
        // todoItem.appendChild(deleteBtn);
        
        // LANGKAH 3f: Append ke container
        // container.appendChild(todoItem);
    // });
    
    // LANGKAH 4: Update counter
    // updateCounter();
}
```

---

## LANGKAH 6: JAVASCRIPT - TOGGLE SELESAI

### 6.1 Alur Toggle
```
1. Cari todo dengan id yang sesuai
2. Ubah status completed (true ↔ false)
3. Simpan ke LocalStorage
4. Tampilkan ulang list
```

### 6.2 Petunjuk Implementasi
```javascript
// Fungsi untuk toggle status selesai
function toggleTodo(id) {
    // LANGKAH 1: Cari todo dengan id
    // const todo = todos.find(t => t.id === id);
    
    // LANGKAH 2: Ubah status completed
    // if (todo) {
    //     todo.completed = !todo.completed;
    // }
    
    // LANGKAH 3: Simpan ke LocalStorage
    // saveTodos();
    
    // LANGKAH 4: Tampilkan ulang
    // renderTodos();
}
```

---

## LANGKAH 7: JAVASCRIPT - HAPUS TODO

### 6.1 Alur Hapus
```
1. Filter array todos, buang yang id-nya sesuai
2. Simpan array baru ke LocalStorage
3. Tampilkan ulang list
```

### 6.2 Petunjuk Implementasi
```javascript
// Fungsi untuk menghapus todo
function deleteTodo(id) {
    // LANGKAH 1: Filter todos, buang yang id-nya sesuai
    // todos = todos.filter(t => t.id !== id);
    
    // LANGKAH 2: Simpan ke LocalStorage
    // saveTodos();
    
    // LANGKAH 3: Tampilkan ulang
    // renderTodos();
}
```

---

## LANGKAH 8: LOCALSTORAGE

### 8.1 Konsep LocalStorage
```
LocalStorage = penyimpanan di browser yang tetap ada
- Tidak hilang saat refresh
- Tidak hilang saat tutup browser
- Terbatas (~5MB)
- Hanya menyimpan string
```

### 8.2 Petunjuk Implementasi
```javascript
// Fungsi untuk menyimpan ke LocalStorage
function saveTodos() {
    // LANGKAH 1: Konversi array ke string JSON
    // const data = JSON.stringify(todos);
    
    // LANGKAH 2: Simpan ke LocalStorage
    // localStorage.setItem('todos', data);
}

// Fungsi untuk memuat dari LocalStorage
function loadTodos() {
    // LANGKAH 1: Ambil data dari LocalStorage
    // const data = localStorage.getItem('todos');
    
    // LANGKAH 2: Parse JSON ke array
    // if (data) {
    //     todos = JSON.parse(data);
    // } else {
    //     todos = [];
    // }
    
    // LANGKAH 3: Tampilkan
    // renderTodos();
}

// Panggil loadTodos() saat halaman dimuat
// document.addEventListener('DOMContentLoaded', loadTodos);
```

### 8.3 Update Counter
```javascript
// Fungsi untuk update counter
function updateCounter() {
    // LANGKAH 1: Hitung remaining (belum selesai)
    // const remaining = todos.filter(t => !t.completed).length;
    
    // LANGKAH 2: Ambil element counter
    // const counter = ...
    
    // LANGKAH 3: Update text
    // counter.textContent = `${remaining} items remaining`;
}
```

---

## LANGKAH 9: TESTING & POLISH

### 9.1 Checklist Fungsional
```
□ Bisa tambah todo (klik tombol)
□ Bisa tambah todo (tekan Enter)
□ Todo muncul di list
□ Bisa tandai selesai (checkbox)
□ Text berubah line-through saat selesai
□ Bisa hapus todo
□ Data tersimpan di LocalStorage
□ Data tetap ada saat refresh
□ Counter berfungsi
□ Tidak ada error di console
```

### 9.2 Checklist Visual
```
□ Input field rapi
□ Button jelas
□ Todo items rapi dan sejajar
□ Spacing konsisten
□ Warna konsisten
□ Responsive di mobile
```

### 9.3 Testing Steps
```
1. Buka aplikasi
2. Tambah 3 todo
3. Centang 1 todo sebagai selesai
4. Hapus 1 todo
5. Refresh halaman
6. Pastikan: 2 todo tersisa, 1 selesai, 1 belum
7. Tutup browser, buka lagi
8. Pastikan: data tetap sama
```

---

## 🎨 CONTOH WARNA

### **Tema Clean & Minimal**
```
Background: bg-gray-100
Card: bg-white
Input border: border-gray-300, focus:border-blue-500
Button: bg-blue-500, hover:bg-blue-600
Text: text-gray-800
Secondary text: text-gray-500
Completed: text-gray-400, line-through
Delete: text-red-400, hover:text-red-600
```

---

## 🚀 BONUS: ENHANCEMENTS

Jika sudah selesai, coba tambahkan:
```
□ Edit todo (klik text untuk edit)
□ Filter (All, Active, Completed)
□ Clear all completed
□ Drag and drop untuk reorder
□ Due date untuk setiap todo
□ Priority (high, medium, low)
□ Animasi saat tambah/hapus
□ Dark mode
```

---

## ✅ FINAL CHECKLIST

```
□ Semua fitur dasar berfungsi
□ Tambah todo (klik + Enter)
□ Toggle selesai
□ Hapus todo
□ LocalStorage berfungsi
□ Data persist setelah refresh
□ Tidak ada console error
□ Responsive di mobile
□ Spacing konsisten
□ Warna konsisten

Total: ___/10 checklist terpenuhi
```

---

*Jika stuck, gunakan AI dengan format: "Saya di tahap [X], bingung di [bagian]"*
