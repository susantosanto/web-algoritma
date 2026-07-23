# 📝 PROJECT 3: NOTE TAKING APP

> **Level**: Menengah | **Estimasi**: 4-6 jam | **Konsep**: CRUD, Search, Categories, LocalStorage

---

## 🎯 TUJUAN PROJECT

Membuat aplikasi catatan (note) yang bisa:
- Buat catatan baru (Create)
- Lihat daftar catatan (Read)
- Edit catatan (Update)
- Hapus catatan (Delete)
- Cari catatan
- Kategorikan catatan
- Simpan di LocalStorage

---

## 📐 ALUR KERJA

```
LANGKAH 1: Perencanaan & Struktur Data
    ↓
LANGKAH 2: HTML Structure
    ↓
LANGKAH 3: Styling (Tailwind)
    ↓
LANGKAH 4: JavaScript - CRUD Operations
    ↓
LANGKAH 5: JavaScript - Search & Filter
    ↓
LANGKAH 6: JavaScript - Categories
    ↓
LANGKAH 7: LocalStorage
    ↓
LANGKAH 8: Testing & Polish
```

---

## LANGKAH 1: PERENCANAAN & STRUKTUR DATA

### 1.1 Struktur Data Note
```
Setiap note punya:
{
    id: number (unik)
    title: string (judul)
    content: string (isi)
    category: string (kategori)
    color: string (warna card)
    createdAt: date (dibuat)
    updatedAt: date (diupdate terakhir)
}

Array notes = [
    {
        id: 1,
        title: "Belajar JavaScript",
        content: "Hari ini belajar DOM manipulation...",
        category: "Pembelajaran",
        color: "yellow",
        createdAt: "...",
        updatedAt: "..."
    },
]
```

### 1.2 Fitur yang Dibutuhkan
```
□ Form untuk buat/edit note
□ List/daftar notes
□ Search bar untuk cari note
□ Filter berdasarkan kategori
□ Pilihan warna untuk note
□ Edit note (klik note untuk edit)
□ Hapus note
□ Timestamp (kapan dibuat/diupdate)
□ Responsive design
```

### 1.3 Categories
```
Category yang tersedia:
□ Semua (default)
□ Pribadi
□ Pekerjaan
□ Pembelajaran
□ Ide
□ Lainnya

User bisa pilih kategori saat buat/edit note.
```

---

## LANGKAH 2: HTML STRUCTURE

### 2.1 Layout
```
┌────────────────────────────────────────┐
│  📝 Note Taking App          [+ Baru]  │
├────────────────────────────────────────┤
│  🔍 [Search notes...        ]          │
├────────────────────────────────────────┤
│  Filter: [Semua ▼] [Pribadi] [Kerja]  │
├────────────────────────────────────────┤
│                                        │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│  │ Note 1  │ │ Note 2  │ │ Note 3  │ │
│  │ (kuning)│ │ (biru)  │ │ (hijau) │ │
│  │         │ │         │ │         │ │
│  │ Title   │ │ Title   │ │ Title   │ │
│  │ Content │ │ Content │ │ Content │ │
│  │ [Edit][🗑]│ │ [Edit][🗑]│ │ [Edit][🗑]│ │
│  └─────────┘ └─────────┘ └─────────┘ │
│                                        │
├────────────────────────────────────────┤
│  Total: 5 notes                        │
└────────────────────────────────────────┘
```

### 2.2 HTML Blueprint
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Note Taking App</title>
    <!-- ISI: Link Tailwind CDN -->
</head>
<body class="bg-gray-100 min-h-screen">
    
    <div class="container mx-auto max-w-4xl px-4 py-8">
        <!-- ISI: Header + Add Button -->
        <!-- ISI: Search Bar -->
        <!-- ISI: Category Filter -->
        <!-- ISI: Notes Grid -->
        <!-- ISI: Modal Form (untuk tambah/edit) -->
    </div>

    <!-- ISI: Link ke app.js -->
</body>
</html>
```

### 2.3 Petunjuk Tiap Section

#### **HEADER**
```
Struktur:
├── Title "📝 Note Taking App"
└── Button "+ Baru Note"

Petunjuk:
- Button membuka modal form
- Title harus besar dan jelas
```

#### **SEARCH BAR**
```
Struktur:
├── Input type="text"
│   - placeholder: "Cari catatan..."
│   - id="search-input"
│   - oninput: panggil searchNotes()

Petunjuk:
- Search langsung saat ketik (no button)
- Filter berdasarkan title DAN content
- Case-insensitive
```

#### **CATEGORY FILTER**
```
Struktur:
├── Container (flex, gap-2, flex-wrap)
├── Button "Semua" (default active)
├── Button "Pribadi"
├── Button "Pekerjaan"
├── Button "Pembelajaran"
├── Button "Ide"
└── Button "Lainnya"

Petunjuk:
- Click button → filter notes
- Active button punya warna berbeda
- Default: tampilkan semua
```

#### **NOTES GRID**
```
Struktur:
├── Grid container (grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-4)
│   ├── Note Card 1
│   │   ├── Header (Title + Category badge)
│   │   ├── Content (truncated 3 lines)
│   │   ├── Footer (Date + Buttons)
│   │   └── Background color berbeda
│   ├── Note Card 2
│   └── Note Card 3
│
└── Empty state (jika tidak ada notes)
    - "Belum ada catatan"
    - Tombol "+ Buat Catatan Pertama"

Petunjuk:
- Card punya warna berbeda berdasarkan color
- Content harus di-truncate (potong) jika terlalu panjang
- Hover effect untuk card
```

#### **MODAL FORM**
```
Struktur:
├── Overlay (fixed, full screen, bg-black/50)
├── Modal container (centered, bg-white, rounded-lg)
│   ├── Header: "Tambah/Edit Catatan"
│   ├── Form
│   │   ├── Title input
│   │   ├── Content textarea
│   │   ├── Category select/dropdown
│   │   └── Color picker (5 warna)
│   ├── Button "Simpan"
│   └── Button "Batal"

Petunjuk:
- Modal tersembunyi secara default (hidden)
- Muncul saat klik "+ Baru" atau "Edit"
- Close saat klik "Batal" atau overlay
- Form harus terisi lengkap sebelum save
```

---

## LANGKAH 3: STYLING (TAILWIND)

### 3.1 Note Card Colors
```
Pilihan warna card:
- Yellow: bg-yellow-100, border-yellow-300
- Blue: bg-blue-100, border-blue-300
- Green: bg-green-100, border-green-300
- Pink: bg-pink-100, border-pink-300
- Purple: bg-purple-100, border-purple-300

Setiap note punya warna yang dipilih user.
```

### 3.2 Component Classes
```
Card: bg-{color}-100, border, border-{color}-300, rounded-lg, p-4, shadow-sm, hover:shadow-md
Title: text-lg, font-bold, text-gray-800
Content: text-gray-600, line-clamp-3 (truncate 3 baris)
Category badge: text-xs, px-2, py-1, rounded-full, bg-white/50
Date: text-xs, text-gray-400
Buttons: text-sm, hover:opacity-70
```

---

## LANGKAH 4: JAVASCRIPT - CRUD OPERATIONS

### 4.1 Create (Tambah Note)
```
Buat fungsi createNote(data):
├── Buat object note baru dengan:
│   - id: Date.now()
│   - title: dari form
│   - content: dari form
│   - category: dari form
│   - color: dari form
│   - createdAt: new Date()
│   - updatedAt: new Date()
├── Push ke array notes
├── Simpan ke LocalStorage
├── Tampilkan ulang
└── Tutup modal
```

### 4.2 Read (Tampilkan Notes)
```
Buat fungsi renderNotes(filteredNotes):
├── Kosongkan container
├── Jika tidak ada notes:
│   └── Tampilkan empty state
├── Loop notes:
│   ├── Buat card element
│   ├── Isi dengan data note
│   ├── Tambahkan event listener untuk edit/hapus
│   └── Append ke container
└── Update counter
```

### 4.3 Update (Edit Note)
```
Buat fungsi editNote(id):
├── Cari note dengan id
├── Isi form dengan data note
├── Ubah modal title jadi "Edit Catatan"
├── Tampilkan modal
├── Tunggu user submit form
├── Update data note
├── Simpan ke LocalStorage
└── Tampilkan ulang
```

### 4.4 Delete (Hapus Note)
```
Buat fungsi deleteNote(id):
├── Konfirmasi: "Yakin hapus?"
├── Filter notes, buang yang id-nya sesuai
├── Simpan ke LocalStorage
└── Tampilkan ulang
```

---

## LANGKAH 5: JAVASCRIPT - SEARCH & FILTER

### 5.1 Search
```
Buat fungsi searchNotes(query):
├── Filter notes yang:
│   - title mengandung query, ATAU
│   - content mengandung query
├── Case-insensitive (toLowerCase)
└── Tampilkan hasil filter

Event: oninput di search field
```

### 5.2 Filter by Category
```
Buat fungsi filterByCategory(category):
├── Jika "Semua" → tampilkan semua
├── Jika kategori spesifik → filter
└── Tampilkan hasil filter

Event: onclick di category buttons
```

### 5.3 Combined Filter
```
Fungsi getFilteredNotes():
├── Mulai dari semua notes
├── Apply search filter
├── Apply category filter
└── Return hasil gabungan

Gunakan fungsi ini saat render!
```

---

## LANGKAH 6: JAVASCRIPT - CATEGORIES

### 6.1 Data Categories
```javascript
const categories = [
    { id: 'all', name: 'Semua', icon: '📋' },
    { id: 'personal', name: 'Pribadi', icon: '👤' },
    { id: 'work', name: 'Pekerjaan', icon: '💼' },
    { id: 'learning', name: 'Pembelajaran', icon: '📚' },
    { id: 'ideas', name: 'Ide', icon: '💡' },
    { id: 'other', name: 'Lainnya', icon: '📌' }
];
```

### 6.2 Color Options
```javascript
const colors = [
    { id: 'yellow', name: 'Kuning', class: 'bg-yellow-100 border-yellow-300' },
    { id: 'blue', name: 'Biru', class: 'bg-blue-100 border-blue-300' },
    { id: 'green', name: 'Hijau', class: 'bg-green-100 border-green-300' },
    { id: 'pink', name: 'Pink', class: 'bg-pink-100 border-pink-300' },
    { id: 'purple', name: 'Ungu', class: 'bg-purple-100 border-purple-300' }
];
```

---

## LANGKAH 7: LOCALSTORAGE

### 7.1 Functions
```javascript
function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    const data = localStorage.getItem('notes');
    notes = data ? JSON.parse(data) : [];
    renderNotes();
}
```

### 7.2 Initialize
```javascript
document.addEventListener('DOMContentLoaded', () => {
    loadNotes();
    setupEventListeners();
});
```

---

## LANGKAH 8: TESTING & POLISH

### 8.1 Checklist Fungsional
```
□ Bisa tambah note baru
□ Bisa edit note
□ Bisa hapus note dengan konfirmasi
□ Search berfungsi
□ Filter kategori berfungsi
□ Color pilihan berfungsi
□ Data tersimpan di LocalStorage
□ Data persist setelah refresh
□ Modal buka/tutup dengan benar
□ Empty state muncul jika tidak ada notes
□ Tidak ada console error
```

### 8.2 Checklist Visual
```
□ Card notes rapi (grid)
□ Warna card berbeda-beda
□ Content truncate jika panjang
□ Spacing konsisten
□ Responsive di mobile
□ Modal centered
□ Button jelas
```

---

## 🚀 BONUS: ENHANCEMENTS

```
□ Sort by: terbaru, terlama, judul
□ Pin note (selalu di atas)
□ Archive note (sembunyikan)
□ Rich text editor (bold, italic)
□ Image attachment
□ Reminder/due date
□ Export to markdown
□ Dark mode
□ Drag and drop reorder
□ Tag (banyak kategori per note)
```

---

## ✅ FINAL CHECKLIST

```
□ CRUD berfungsi lengkap
□ Search berfungsi
□ Filter kategori berfungsi
□ Color picker berfungsi
□ LocalStorage berfungsi
□ Responsive design
□ Tidak ada console error
□ Empty state ada
□ Konfirmasi hapus ada
□ Modal berfungsi

Total: ___/10 checklist terpenuhi
```
