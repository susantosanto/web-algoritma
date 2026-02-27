# ✨ EDISI PREMIUM v2.0 - Menjadi Penyihir Data

## Mastering JavaScript & Apps Script dengan Metode Memori Super

---

> **🎉 Selamat datang, Calon Penyihir Data!**
>
> Panduan ini dirancang untuk membangun **pola pikir algoritma** dan **penguasaan sintaks** melalui analogi visual yang kuat. Kita tidak hanya belajar mengetik, kita belajar *merapal mantra*.

### 🎯 Misi | 🧠 Model Mental | 📜 Mantra | 👁️ Sihir

| Ikon | Nama | Deskripsi |
|------|------|-----------|
| 🎯 | MISI | Masalah nyata untuk diselesaikan |
| 🧠 | MODEL MENTAL | Analogi agar konsep menempel |
| 📜 | MANTRA | Kode sintaks dan penggunaan |
| 👁️ | SIHIR | Lihat kode beraksi |

---

### 🔍 Navigasi Per Topik

#### 📝 Fundamental
- [String Manipulation](#-1-sihir-teks-string-manipulation)
- [Number & Math](#-2-sihir-angka-number--math)
- [Array Utilities](#-3-sihir-wadah-array-utilities)
- [Object Utilities](#-5-sihir-benda-object-utilities)
- [JSON](#-5-sihir-pertukaran-json)

#### ⚡ Advanced
- [Closures & Scope](#-2-closures--scope-deep-dive)
- [this Keyword](#-3-this-keyword--context-binding)
- [ES6+ Features](#-4-es6-modern-features)
- [Prototypes & Classes](#-1-prototype-chain---warisan-object)
- [Error Handling](#-5-error-handling-best-practices)
- [Modules](#-6-modules--importexport)

#### 🌐 Web Development
- [DOM Manipulation](#-1-dom-manipulation--event-system)
- [Event Handling](#-2-asyncawait---syntactic-sugar)
- [Browser Storage](#-10-local-storage--session-storage)
- [API & HTTP](#-8-api--http-fundamentals)

#### 🛠️ Production Ready
- [Performance](#-12-performance-optimization)
- [Security](#-13-security-basics)
- [Testing](#-14-testing-fundamentals)
- [Git](#-15-git--version-control)

---

### ⌨️ Keyboard Shortcuts untuk Navigasi

| Shortcut | Fungsi |
|----------|--------|
| `Ctrl + F` | Cari teks dalam file |
| `Ctrl + Home` | Kembali ke awal file (Daftar Isi) |
| `Ctrl + End` | Ke akhir file |
| `Alt + ←` | Back (setelah klik link) |
| `Alt + →` | Forward |

---


---

## 📚 Bab 0: Kitab Dasar Mantra {#-bab-0-kitab-dasar-mantra}

> **⚔️ Persenjataan Dasar:** Sebelum merapal mantra kompleks, seorang penyihir handal harus menguasai perkakas dasarnya. Bab ini adalah **gudang senjata** Anda, berisi mantra-mantra utilitas yang akan Anda gunakan **setiap hari**.

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

### 📝 1. Sihir Teks (String Manipulation)

#### 🔧 toLowerCase() / toUpperCase() - MANTRA PENYERAGAM

Agar perbandingan teks tidak peduli huruf besar/kecil (Case Insensitive).

**Contoh:** `"Admin".toLowerCase() === "admin"` → True

---

#### 🧬 Penjelasan Mendalam: toLowerCase() & toUpperCase()

##### 📖 Konsep Dasar: Unicode dan Case Sensitivity

Dalam komputer, setiap karakter diwakili oleh kode numerik yang disebut **Unicode**. Huruf 'A' kapital memiliki kode berbeda dengan 'a' kecil. JavaScript memperlakukan mereka sebagai **dua karakter yang berbeda**. Metode `toLowerCase()` dan `toUpperCase()` mengonversi setiap karakter ke representasi Unicode yang sesuai untuk case yang diinginkan.

##### 🔬 Algoritma Internal toLowerCase()

1. **Iterasi Karakter:** Metode ini melakukan loop melalui setiap karakter dalam string dari indeks 0 hingga panjang string - 1.
2. **Pengecekan Unicode Range:** Untuk setiap karakter, JavaScript memeriksa apakah karakter tersebut berada dalam rentang Unicode huruf kapital (A-Z: U+0041 hingga U+005A).
3. **Transformasi Kode:** Jika karakter adalah huruf kapital, tambahkan 32 ke kode Unicode-nya (misal: 'A' = 65, 'a' = 97, selisih = 32).
4. **Penanganan Karakter Khusus:** Untuk karakter non-ASCII (seperti 'İ' Turki atau 'ß' Jerman), gunakan tabel pemetaan Unicode khusus karena transformasinya tidak selalu linear.
5. **Pembangunan String Baru:** Setiap karakter yang sudah ditransformasi ditambahkan ke string hasil baru. String asli **tidak berubah** (immutable).
6. **Pengembalian Hasil:** String baru yang seluruhnya lowercase dikembalikan.

##### ⚠️ Edge Cases dan Jebakan Umum

- **String Immutable:** `"HELLO".toLowerCase()` tidak mengubah string asli. Anda harus menyimpan hasilnya: `const lower = "HELLO".toLowerCase()`
- **Karakter Non-Huruf:** Angka, simbol, dan spasi **tidak terpengaruh** oleh metode ini.
- **Locale Sensitivity:** Untuk bahasa tertentu (Turki, Lithuania), gunakan `toLocaleLowerCase('tr')` karena 'I' dan 'i' memiliki aturan khusus.
- **Performance:** Operasi ini O(n) di mana n adalah panjang string. Untuk string sangat panjang, pertimbangkan caching hasil.

##### 💡 Aplikasi Dunia Nyata

**1. Validasi Input Form:**

```javascript
// Normalisasi email sebelum validasi
const emailInput = "  User@Example.COM  ";
const normalizedEmail = emailInput.trim().toLowerCase();
// Hasil: "user@example.com"
```

**2. Case-Insensitive Search:**

```javascript
// Mencari produk tanpa peduli case
const products = ["Laptop", "MOUSE", "Keyboard"];
const searchTerm = "mouse";
const found = products.filter(p => p.toLowerCase().includes(searchTerm.toLowerCase()));
// Hasil: ["MOUSE"]
```

**3. Normalisasi Data untuk Perbandingan:**

```javascript
// Membandingkan dua string tanpa peduli case
function areStringsEqual(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
areStringsEqual("Hello", "HELLO"); // true
```

---

#### ✂️ trim() - MANTRA PEMANGKAS

Menghapus spasi kosong di **awal dan akhir** teks. Sangat penting untuk membersihkan input dari form.

**Contoh:** `"  user123  ".trim()` → `"user123"`

---

#### 🔍 includes(subString) - MANTRA PENDETEKSI

Mengecek apakah sebuah kalimat mengandung potongan teks tertentu. Mengembalikan `true` atau `false`.

**Contoh:** `"Saya suka kopi".includes("kopi")` → true

---

#### 🔗 split(pemisah) - MANTRA PEMECAH

Mengubah String menjadi Array berdasarkan karakter pemisah. Sangat sering dipakai untuk memproses data CSV atau tag.

**Contoh:** `"Apel,Jeruk,Mangga".split(",")` → `["Apel", "Jeruk", "Mangga"]`

---

#### 🔄 replace() / replaceAll() - MANTRA PENUKAR

Mengganti bagian teks. `replace` hanya mengganti yang pertama ditemukan, `replaceAll` mengganti semuanya.

**Contoh:** `"Rp 5.000".replace(".", "")` → `"Rp 5000"`

---

#### 📏 padStart() / padEnd() - MANTRA PERAPI

Menambahkan karakter di awal/akhir string hingga mencapai panjang tertentu. Berguna untuk format nomor urut.

**Contoh:** `"7".padStart(3, "0")` → `"007"`

---

#### 💬 Template Literals (Backticks) - MANTRA PENGGABUNG

Cara modern menyisipkan variabel ke dalam string tanpa `+` yang berantakan.

**Contoh:** `` `Halo ${nama}, skor Anda ${skor}` ``

---

### 🧠 Latihan Logika: Pembersih Data Formulir

> **🎯 Skenario: Pembersihan Input Berantakan**
>
> 1. **Bersihkan Spasi:** Gunakan `trim()`.
> 2. **Seragamkan:** Gunakan `toLowerCase()`.
> 3. **Pecah & Ambil:** Gunakan `split(" ")[0]`.

---

### ⚔️ Latihan Bertahap: Manipulasi Teks

| Level | Tantangan | Deskripsi |
|-------|-----------|-----------|
| LEVEL 1 | Sensor Kata | Ganti kata "kasar" dengan "***" |
| LEVEL 2 | Inisial Nama | "Budi Santoso" → "B. S." |
| LEVEL 3 | Slugify URL | "Belajar JS" → "belajar-js" |

---

### 📖 LATIHAN TERPERINCI: STRING MANIPULATION

#### LEVEL 1 - FUNDAMENTAL (Pemula)

**Latihan 1.1: Membersihkan Input User**

```javascript
// 🎯 TUJUAN: Membersihkan input dari spasi berlebih dan seragamkan case
// ⏱️ WAKTU: 5 menit
// 💪 KESULITAN: ⭐

// SOAL:
// Buat fungsi yang menerima input dari user dan membersihkannya dengan aturan:
// 1. Hapus spasi di awal dan akhir
// 2. Ubah menjadi lowercase
// 3. Hapus spasi berlebih di tengah kata (lebih dari 1 spasi jadi 1)

// CONTOH:
// "  BUDI   SANTOSO  " → "budi santoso"
// "  HELLO   WORLD  " → "hello world"

// ✍️ TULIS KODE ANDA DI SINI
function bersihkanInput(input) {
    // Langkah 1: _______ (hapus spasi awal/akhir)
    // Langkah 2: _______ (ubah ke lowercase)
    // Langkah 3: _______ (replace multiple spaces dengan single space)
    
    // HINT: Gunakan chain: trim().toLowerCase().replace(/\\s+/g, ' ')
}

// ✅ TEST CASE
console.log(bersihkanInput("  BUDI   SANTOSO  "));  // "budi santoso"
console.log(bersihkanInput("  HELLO   WORLD  "));   // "hello world"
console.log(bersihkanInput("  JavaScript  "));      // "javascript"
```

---

**Latihan 1.2: Menghitung Panjang Karakter**

```javascript
// 🎯 TUJUAN: Menghitung panjang string tanpa spasi
// ⏱️ WAKTU: 5 menit
// 💪 KESULITAN: ⭐

// SOAL:
// Buat fungsi yang menghitung jumlah karakter dalam string, 
// TIDAK termasuk spasi!

// CONTOH:
// "Hello World" → 10 (H-e-l-l-o-W-o-r-l-d)
// "Budi Santoso" → 11
// "A B C D" → 4

// ✍️ TULIS KODE ANDA DI SINI
function hitungKarakterTanpaSpasi(teks) {
    // CARA 1: Replace spasi lalu hitung length
    // Langkah 1: _______ (hapus semua spasi dengan replace)
    // Langkah 2: _______ (return length)
    
    // CARA 2: Loop dan hitung manual
    // Langkah 1: Buat variabel counter = 0
    // Langkah 2: Loop setiap karakter
    // Langkah 3: Jika karakter bukan spasi, counter++
    // Langkah 4: Return counter
}

// ✅ TEST CASE
console.log(hitungKarakterTanpaSpasi("Hello World"));  // 10
console.log(hitungKarakterTanpaSpasi("Budi Santoso")); // 11
console.log(hitungKarakterTanpaSpasi("A B C D"));      // 4
```

---

**Latihan 1.3: Memisahkan Nama Depan dan Belakang**

```javascript
// 🎯 TUJUAN: Extract nama depan dan belakang dari string
// ⏱️ WAKTU: 7 menit
// 💪 KESULITAN: ⭐⭐

// SOAL:
// Buat fungsi yang menerima nama lengkap dan mengembalikan object
// dengan properti 'depan' dan 'belakang'

// CONTOH:
// "Budi Santoso" → { depan: "Budi", belakang: "Santoso" }
// "Siti Aminah Nur" → { depan: "Siti", belakang: "Nur" }

// ✍️ TULIS KODE ANDA DI SINI
function pisahkanNama(namaLengkap) {
    // Langkah 1: _______ (split nama berdasarkan spasi)
    // Langkah 2: _______ (ambil element pertama sebagai nama depan)
    // Langkah 3: _______ (ambil element terakhir sebagai nama belakang)
    // Langkah 4: _______ (return object dengan properti depan dan belakang)
    
    // HINT: Gunakan split(), array[0], array[array.length - 1]
}

// ✅ TEST CASE
console.log(pisahkanNama("Budi Santoso"));
// { depan: "Budi", belakang: "Santoso" }

console.log(pisahkanNama("Siti Aminah Nur"));
// { depan: "Siti", belakang: "Nur" }
```

---

#### LEVEL 2 - INTERMEDIATE (Menengah)

**Latihan 2.1: Sensor Kata Otomatis**

```javascript
// 🎯 TUJUAN: Menyensor kata-kata yang tidak pantas
// ⏱️ WAKTU: 10 menit
// 💪 KESULITAN: ⭐⭐

// SOAL:
// Buat fungsi yang menyensor kata-kata dalam array sensor
// Ganti setiap huruf dengan "*"

// CONTOH:
// sensorKata("Anjing itu galak", ["anjing"]) → "****** itu galak"
// sensorKata("Dasar bodoh kamu", ["bodoh", "kamu"]) → "Dasar ***** *****"

// ✍️ TULIS KODE ANDA DI SINI
function sensorKata(kalimat, kataSensor) {
    // CARA 1: Loop array kata sensor
    // Langkah 1: Buat variabel hasil = kalimat
    // Langkah 2: Loop setiap kata dalam array kataSensor
    // Langkah 3: Buat string sensor dengan panjang kata (repeat('*'))
    // Langkah 4: Replace semua occurrence dengan sensor
    // Langkah 5: Return hasil
    
    // CARA 2: Menggunakan regex (ADVANCED)
    // Langkah 1: Buat regex pattern dari kata sensor
    // Langkah 2: Gunakan replace dengan regex global
}

// ✅ TEST CASE
console.log(sensorsKata("Anjing itu galak", ["anjing"]));
// "****** itu galak"

console.log(sensorsKata("Dasar bodoh kamu", ["bodoh", "kamu"]));
// "Dasar ***** *****"
```

---

**Latihan 2.2: Format Nomor Telepon**

```javascript
// 🎯 TUJUAN: Format nomor telepon menjadi (XXX) XXX-XXXX
// ⏱️ WAKTU: 10 menit
// 💪 KESULITAN: ⭐⭐⭐

// SOAL:
// Buat fungsi yang menerima 10 digit angka dan memformatnya
// menjadi format telepon US: (XXX) XXX-XXXX

// CONTOH:
// formatPhone("1234567890") → "(123) 456-7890"
// formatPhone("9876543210") → "(987) 654-3210"

// ✍️ TULIS KODE ANDA DI SINI
function formatPhone(nomor) {
    // CARA 1: Menggunakan slice
    // Langkah 1: Ambil 3 digit pertama (area code)
    // Langkah 2: Ambil 3 digit tengah
    // Langkah 3: Ambil 4 digit terakhir
    // Langkah 4: Gabungkan dengan format "(XXX) XXX-XXXX"
    
    // CARA 2: Menggunakan regex replace
    // Langkah 1: Gunakan replace dengan pattern dan backreferences
}

// ✅ TEST CASE
console.log(formatPhone("1234567890"));  // "(123) 456-7890"
console.log(formatPhone("9876543210"));  // "(987) 654-3210"
console.log(formatPhone("5551234567"));  // "(555) 123-4567"
```

---

**Latihan 2.3: Reverse String dengan Kondisi**

```javascript
// 🎯 TUJUAN: Membalik string dengan logika kondisional
// ⏱️ WAKTU: 12 menit
// 💪 KESULITAN: ⭐⭐⭐

// SOAL:
// Buat fungsi yang membalik string, TETAPI:
// - Jika panjang string < 5, kembalikan string asli
// - Jika panjang string >= 5, balik string
// - Jika panjang string > 10, balik DAN ubah ke uppercase

// CONTOH:
// reverseKondisi("Hi") → "Hi" (terlalu pendek)
// reverseKondisi("Hello") → "olleH"
// reverseKondisi("JavaScript") → "TPIRCSEVAJ"

// ✍️ TULIS KODE ANDA DI SINI
function reverseKondisi(teks) {
    // Langkah 1: Cek panjang string
    // Langkah 2: Jika < 5, return teks asli
    // Langkah 3: Jika >= 5 dan <= 10, reverse string
    // Langkah 4: Jika > 10, reverse DAN uppercase
    
    // HINT: 
    // - Reverse: split('').reverse().join('')
    // - Atau manual: loop dari akhir ke awal
}

// ✅ TEST CASE
console.log(reverseKondisi("Hi"));          // "Hi"
console.log(reverseKondisi("Hello"));       // "olleH"
console.log(reverseKondisi("JavaScript"));  // "TPIRCSEVAJ"
```

---

#### LEVEL 3 - ADVANCED (Lanjut)

**Latihan 3.1: URL Slug Generator**

```javascript
// 🎯 TUJUAN: Membuat URL-friendly slug dari judul artikel
// ⏱️ WAKTU: 15 menit
// 💪 KESULITAN: ⭐⭐⭐⭐

// SOAL:
// Buat fungsi yang mengubah judul menjadi URL slug dengan aturan:
// 1. Ubah ke lowercase
// 2. Ganti spasi dengan dash (-)
// 3. Hapus karakter spesial (!@#$%^&*() dll)
// 4. Ganti multiple dash dengan single dash
// 5. Hapus dash di awal/akhir

// CONTOH:
// slugify("  Belajar JavaScript!!!  ") → "belajar-javascript"
// slugify("Cara Membuat Web App 2024") → "cara-membuat-web-app-2024"
// slugify("React vs Vue vs Angular") → "react-vs-vue-vs-angular"

// ✍️ TULIS KODE ANDA DI SINI
function slugify(judul) {
    // Langkah 1: _______ (trim dan lowercase)
    // Langkah 2: _______ (hapus karakter non-alphanumeric kecuali spasi)
    // Langkah 3: _______ (replace spasi dengan dash)
    // Langkah 4: _______ (replace multiple dash dengan single)
    // Langkah 5: _______ (trim dash di awal/akhir)
    
    // CHAINING VERSION:
    // return judul
    //     .trim()
    //     .toLowerCase()
    //     .replace(/[^a-z0-9\s-]/g, '')  // Hapus karakter spesial
    //     .replace(/\s+/g, '-')           // Spasi → dash
    //     .replace(/-+/g, '-')            // Multiple dash → single
    //     .replace(/^-|-$/g, '');         // Hapus dash di awal/akhir
}

// ✅ TEST CASE
console.log(slugify("  Belajar JavaScript!!!  "));  
// "belajar-javascript"

console.log(slugify("Cara Membuat Web App 2024"));  
// "cara-membuat-web-app-2024"

console.log(slugify("React vs Vue vs Angular"));  
// "react-vs-vue-vs-angular"
```

---

**Latihan 3.2: Email Validator Sederhana**

```javascript
// 🎯 TUJUAN: Validasi format email
// ⏱️ WAKTU: 15 menit
// 💪 KESULITAN: ⭐⭐⭐⭐

// SOAL:
// Buat fungsi yang mengecek apakah string adalah email valid dengan kriteria:
// 1. Harus ada tepat satu @
// 2. Harus ada teks sebelum @
// 3. Harus ada domain setelah @ (minimal 2 karakter)
// 4. Harus ada titik (.) setelah @
// 5. Harus ada ekstensi domain setelah titik (minimal 2 karakter)

// CONTOH:
// isValidEmail("user@example.com") → true
// isValidEmail("user.name@domain.co.id") → true
// isValidEmail("@example.com") → false (tidak ada nama user)
// isValidEmail("user@") → false (tidak ada domain)
// isValidEmail("user@domain") → false (tidak ada titik)

// ✍️ TULIS KODE ANDA DI SINI
function isValidEmail(email) {
    // Langkah 1: Cek apakah ada @ dan hanya ada 1
    // Langkah 2: Split berdasarkan @
    // Langkah 3: Cek apakah ada bagian sebelum @ (username)
    // Langkah 4: Cek apakah ada bagian setelah @ (domain)
    // Langkah 5: Cek apakah domain mengandung titik
    // Langkah 6: Cek apakah ekstensi setelah titik minimal 2 karakter
    
    // ALTERNATIF: Gunakan regex
    // const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return pattern.test(email);
}

// ✅ TEST CASE
console.log(isValidEmail("user@example.com"));      // true
console.log(isValidEmail("user.name@domain.co.id")); // true
console.log(isValidEmail("@example.com"));          // false
console.log(isValidEmail("user@"));                 // false
console.log(isValidEmail("user@domain"));           // false
```

---

**Latihan 3.3: Template String Parser**

```javascript
// 🎯 TUJUAN: Membuat template string engine sederhana
// ⏱️ WAKTU: 20 menit
// 💪 KESULITAN: ⭐⭐⭐⭐⭐

// SOAL:
// Buat fungsi yang mengganti placeholder {{nama}} dengan nilai dari object
// Mirip seperti template literal tapi dengan custom syntax

// CONTOH:
// const template = "Halo, nama saya {{nama}}. Saya {{umur}} tahun.";
// const data = { nama: "Budi", umur: 25 };
// parseTemplate(template, data) → "Halo, nama saya Budi. Saya 25 tahun."

// ✍️ TULIS KODE ANDA DI SINI
function parseTemplate(template, data) {
    // CARA 1: Loop semua key di object data
    // Langkah 1: Buat variabel hasil = template
    // Langkah 2: Loop semua key di object data
    // Langkah 3: Buat placeholder = `{{${key}}}`
    // Langkah 4: Replace semua placeholder dengan value
    // Langkah 5: Return hasil
    
    // CARA 2: Menggunakan regex replace dengan callback
    // Langkah 1: Gunakan replace dengan regex /{{(\w+)}}/g
    // Langkah 2: Callback function mengambil key dan return value dari data
}

// ✅ TEST CASE
const template1 = "Halo, nama saya {{nama}}. Saya {{umur}} tahun.";
const data1 = { nama: "Budi", umur: 25 };
console.log(parseTemplate(template1, data1));
// "Halo, nama saya Budi. Saya 25 tahun."

const template2 = "Produk {{produk}} harga Rp {{harga}}";
const data2 = { produk: "Laptop", harga: "5.000.000" };
console.log(parseTemplate(template2, data2));
// "Produk Laptop harga Rp 5.000.000"
```

---

#### LEVEL 4 - EXPERT (Mastery)

**Latihan 4.1: Run-Length Encoding (Kompresi String)**

```javascript
// 🎯 TUJUAN: Implementasi algoritma kompresi string sederhana
// ⏱️ WAKTU: 25 menit
// 💪 KESULITAN: ⭐⭐⭐⭐⭐

// SOAL:
// Implementasikan Run-Length Encoding untuk mengkompresi string
// Aturan: Ganti karakter berulang dengan karakter + count

// CONTOH:
// compress("aaabbbcccc") → "3a3b4c"
// compress("abcd") → "1a1b1c1d"
// compress("aabcccccaaa") → "2a1b5c3a"

// ✍️ TULIS KODE ANDA DI SINI
function compress(teks) {
    // Algoritma:
    // 1. Handle edge case: string kosong
    // 2. Inisialisasi result = "" dan count = 1
    // 3. Loop dari index 0 hingga length-2
    // 4. Jika karakter saat ini == karakter berikutnya, count++
    // 5. Jika berbeda, append count + karakter ke result, reset count = 1
    // 6. Setelah loop, append count + karakter terakhir
    // 7. Return result
}

// ✅ TEST CASE
console.log(compress("aaabbbcccc"));    // "3a3b4c"
console.log(compress("abcd"));          // "1a1b1c1d"
console.log(compress("aabcccccaaa"));   // "2a1b5c3a"
console.log(compress(""));              // ""
```

---

**Latihan 4.2: Palindrome Checker dengan Ignoransi**

```javascript
// 🎯 TUJUAN: Cek palindrome dengan mengabaikan case, spasi, dan simbol
// ⏱️ WAKTU: 20 menit
// 💪 KESULITAN: ⭐⭐⭐⭐

// SOAL:
// Buat fungsi yang mengecek apakah string adalah palindrome
// dengan mengabaikan:
// - Huruf besar/kecil
// - Spasi
// - Karakter spesial

// CONTOH:
// isPalindrome("A man a plan a canal Panama") → true
// isPalindrome("race a car") → false
// isPalindrome("Was it a car or a cat I saw?") → true

// ✍️ TULIS KODE ANDA DI SINI
function isPalindrome(teks) {
    // Langkah 1: Bersihkan string (lowercase, hapus non-alphanumeric)
    // Langkah 2: Reverse string bersih
    // Langkah 3: Compare string bersih dengan reverse-nya
    
    // ALTERNATIF: Two-pointer approach (lebih efisien)
    // 1. Pointer kiri di awal, pointer kanan di akhir
    // 2. Loop sambil kiri < kanan
    // 3. Skip karakter non-alphanumeric
    // 4. Compare karakter di kiri dan kanan
    // 5. Jika berbeda, return false
    // 6. Jika sama, kiri++, right--
    // 7. Jika loop selesai, return true
}

// ✅ TEST CASE
console.log(isPalindrome("A man a plan a canal Panama"));  // true
console.log(isPalindrome("race a car"));                   // false
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("Madam"));                        // true
```

---

**Latihan 4.3: String Calculator**

```javascript
// 🎯 TUJUAN: Parse dan evaluate ekspresi matematika sederhana dari string
// ⏱️ WAKTU: 30 menit
// 💪 KESULITAN: ⭐⭐⭐⭐⭐

// SOAL:
// Buat fungsi yang menerima string ekspresi matematika dan menghitungnya
// Support: +, -, *, / dan angka (termasuk desimal)

// CONTOH:
// calculate("2 + 3") → 5
// calculate("10 - 4 * 2") → 2
// calculate("3.5 + 2.5") → 6
// calculate("100 / 4 + 5") → 30

// ✍️ TULIS KODE ANDA DI SINI
function calculate(ekspresi) {
    // CARA SIMPLE (tidak aman untuk production):
    // 1. Hapus spasi
    // 2. Validasi hanya mengandung angka dan operator
    // 3. Gunakan Function constructor (lebih aman dari eval)
    
    // CARA MANUAL (lebih edukatif):
    // 1. Tokenize: pisahkan angka dan operator
    // 2. Parse: handle precedence (* dan / sebelum + dan -)
    // 3. Evaluate: hitung hasil
}

// ✅ TEST CASE
console.log(calculate("2 + 3"));        // 5
console.log(calculate("10 - 4 * 2"));   // 2
console.log(calculate("3.5 + 2.5"));    // 6
console.log(calculate("100 / 4 + 5"));  // 30
```

---

### 🎯 PROYEK MINI: Text Analyzer

```javascript
// 🎯 TUJUAN: Membuat aplikasi analisis teks lengkap
// ⏱️ WAKTU: 45 menit
// 💪 KESULITAN: ⭐⭐⭐⭐⭐

// SOAL:
// Buat object dengan fungsi-fungsi untuk menganalisis teks:
// - hitungKarakter(): jumlah total karakter
// - hitungKata(): jumlah kata
// - hitungKalimat(): jumlah kalimat (berdasarkan . ! ?)
// - kataTerpanjang(): kata dengan panjang maksimal
// - kataTerpendek(): kata dengan panjang minimal
// - frekuensiKata(): object frekuensi setiap kata

// CONTOH PENGGUNAAN:
const analyzer = buatTextAnalyzer("Halo dunia. Selamat pagi dunia!");
analyzer.hitungKarakter();    // 31
analyzer.hitungKata();        // 5
analyzer.hitungKalimat();     // 2
analyzer.kataTerpanjang();    // "Selamat"
analyzer.kataTerpendek();     // "Halo"
analyzer.frekuensiKata();     // { halo: 1, dunia: 2, selamat: 1, pagi: 1 }

// ✍️ TULIS KODE ANDA DI SINI
function buatTextAnalyzer(teks) {
    // Bersihkan teks dulu
    const teksBersih = teks.trim();
    
    // Split menjadi array kata (hapus tanda baca)
    const kataArray = teksBersih
        .replace(/[.,!?;:]/g, '')
        .toLowerCase()
        .split(/\s+/)
        .filter(k => k.length > 0);
    
    // Return object dengan method
    return {
        hitungKarakter: () => {
            // TODO: Implementasi
        },
        
        hitungKata: () => {
            // TODO: Implementasi
        },
        
        hitungKalimat: () => {
            // TODO: Implementasi
        },
        
        kataTerpanjang: () => {
            // TODO: Implementasi
        },
        
        kataTerpendek: () => {
            // TODO: Implementasi
        },
        
        frekuensiKata: () => {
            // TODO: Implementasi
        }
    };
}
```

---

### 📝 RANGKUMAN STRING MANIPULATION

| Method | Fungsi | Contoh | Return |
|--------|--------|--------|--------|
| `toLowerCase()` | Lowercase | `"ABC".toLowerCase()` | `"abc"` |
| `toUpperCase()` | Uppercase | `"abc".toUpperCase()` | `"ABC"` |
| `trim()` | Hapus spasi | `"  a  ".trim()` | `"a"` |
| `includes()` | Cek substring | `"abc".includes("b")` | `true` |
| `split()` | String → Array | `"a,b".split(",")` | `["a","b"]` |
| `replace()` | Replace pertama | `"aaa".replace("a","x")` | `"xaa"` |
| `replaceAll()` | Replace semua | `"aaa".replaceAll("a","x")` | `"xxx"` |
| `slice()` | Potong string | `"abcde".slice(1,3)` | `"bc"` |
| `padStart()` | Padding kiri | `"7".padStart(3,"0")` | `"007"` |

---

## 🧬 Penjelasan Mendalam: String dan Manipulasi Teks

### 📖 Apa itu String?

**String** adalah urutan karakter yang membentuk teks. Jika Object adalah **kamus** dan Array adalah **daftar belanja**, maka String adalah **kalimat** yang tersusun dari huruf-huruf.

```javascript
// Analogi: String sebagai array of characters
const nama = "Budi";
// Secara konseptual: ["B", "u", "d", "i"]
// Akses per karakter: nama[0] = "B", nama[1] = "u"
```

**Mengapa String Manipulation Penting?**

1. **Input Processing:** Validasi dan normalisasi input user
2. **Data Parsing:** Extract informasi dari teks
3. **Template Generation:** Dynamic message/email creation
4. **URL/Slug Creation:** SEO-friendly URLs
5. **Data Cleaning:** Remove unwanted characters

---

### 🔬 Cara Membentuk Logika Algoritma untuk String Manipulation

#### 📚 Framework Berpikir Algoritmik untuk String

```
┌─────────────────────────────────────────────────────────┐
│  1. ANALISIS INPUT & OUTPUT                             │
│     - Input: String seperti apa?                        │
│     - Output: String/Array/Boolean/Number?              │
│     - Transformasi: Apa yang berubah?                   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  2. IDENTIFIKASI OPERASI DASAR                          │
│     - Akses karakter? → str[index]                     │
│     - Potong string? → slice/substring                 │
│     - Cari substring? → includes/indexOf               │
│     - Replace? → replace/replaceAll                    │
│     - Split/Join? → split() / join()                   │
│     - Case change? → toLowerCase/toUpperCase           │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  3. RANCANG ALGORITMA                                   │
│     - Loop karakter? → for/of/forEach                  │
│     - Build string baru? → accumulator pattern         │
│     - Multiple steps? → chain methods                  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  4. IMPLEMENTASI & TEST                                 │
│     - Tulis kode                                        │
│     - Test dengan edge cases                            │
│     - Optimize jika perlu                               │
└─────────────────────────────────────────────────────────┘
```

---

#### 🔍 String Manipulation: Panduan Lengkap Step-by-Step

##### 1. MENGAKSES KARAKTER

**Tahapan Logika:**

```javascript
const teks = "Hello World";

// CARA 1: Bracket notation
// Langkah: str → kurung siku → index
const karakterPertama = teks[0];  // "H"
const karakterKelima = teks[4];   // "o"

// CARA 2: charAt() method
// Langkah: str → .charAt(index)
const karakterKeenam = teks.charAt(5);  // " " (spasi)

// CARA 3: Loop semua karakter
// Algoritma:
// 1. Loop dari index 0 hingga length-1
// 2. Akses setiap karakter
for (let i = 0; i < teks.length; i++) {
    console.log(`Index ${i}: ${teks[i]}`);
}

// ATAU dengan for...of (lebih modern)
for (const karakter of teks) {
    console.log(karakter);
}
```

---

##### 2. MEMOTONG STRING (SLICING)

**Tahapan Logika:**

```javascript
const kalimat = "JavaScript Programming";

// slice(start, end) - end tidak inklusif
// Algoritma:
// 1. Tentukan index mulai
// 2. Tentukan index akhir (tidak termasuk)
// 3. Extract karakter dari mulai hingga akhir-1

const potongan1 = kalimat.slice(0, 10);  // "JavaScript"
const potongan2 = kalimat.slice(11);     // "Programming" (sampai akhir)
const potongan3 = kalimat.slice(-11);    // "Programming" (dari akhir)

// APLIKASI: Extract nama depan
const namaLengkap = "Budi Santoso";
const namaDepan = namaLengkap.split(" ")[0];  // "Budi"

// APLIKASI: Extract file extension
const filename = "document.pdf";
const extension = filename.slice(filename.lastIndexOf(".") + 1);  // "pdf"
```

---

##### 3. MENCARI SUBSTRING

**Tahapan Logika:**

```javascript
const email = "budi@example.com";

// includes() - cek apakah ada
// Algoritma:
// 1. Scan string dari kiri ke kanan
// 2. Cari pattern yang match
// 3. Return true jika found, false jika tidak
const adaAt = email.includes("@");  // true
const adaGmail = email.includes("gmail");  // false

// indexOf() - dapat index pertama
// Algoritma:
// 1. Scan dari kiri ke kanan
// 2. Return index pertama match
// 3. Return -1 jika tidak found
const indexAt = email.indexOf("@");  // 4
const indexZ = email.indexOf("z");   // -1

// APLIKASI: Validasi email sederhana
function isValidEmail(email) {
    // Langkah 1: Harus ada @
    if (!email.includes("@")) return false;
    
    // Langkah 2: @ tidak boleh di awal/akhir
    if (email.indexOf("@") === 0) return false;
    if (email.lastIndexOf("@") === email.length - 1) return false;
    
    // Langkah 3: Harus ada . setelah @
    const atIndex = email.indexOf("@");
    const afterAt = email.slice(atIndex);
    if (!afterAt.includes(".")) return false;
    
    return true;
}
```

---

##### 4. REPLACE/MENGGANTI TEKS

**Tahapan Logika:**

```javascript
const kalimat = "Saya suka kopi. Kopi itu enak.";

// replace() - ganti pertama saja
// Algoritma:
// 1. Cari first occurrence dari search string
// 2. Replace dengan replacement
// 3. Return string baru (original tidak berubah)
const replaced1 = kalimat.replace("Kopi", "Teh");
// "Saya suka kopi. Teh itu enak."

// replaceAll() - ganti semua
// Algoritma:
// 1. Scan seluruh string
// 2. Replace semua occurrence
// 3. Return string baru
const replaced2 = kalimat.replaceAll("kopi", "teh");

// APLIKASI: Sensor kata
function sensorKata(kalimat, kataSensor) {
    const sensor = "*".repeat(kataSensor.length);
    return kalimat.replaceAll(kataSensor, sensor);
}

sensorKata("Anjing itu galak", "Anjing");  // "****** itu galak"

// APLIKASI: Format currency
const hargaKotor = "Rp 50.000,00";
const hargaBersih = hargaKotor.replace(/[^0-9]/g, "");  // "5000000"
```

---

##### 5. SPLIT DAN JOIN

**Tahapan Logika:**

```javascript
// SPLIT: String → Array
// Algoritma:
// 1. Tentukan delimiter (pemisah)
// 2. Scan string dari kiri ke kanan
// 3. Setiap ketemu delimiter, potong dan simpan ke array
// 4. Return array of substrings

const csv = "apel,jeruk,mangga";
const buahArray = csv.split(",");  // ["apel", "jeruk", "mangga"]

const kalimat = "Saya belajar JavaScript";
const kataArray = kalimat.split(" ");  // ["Saya", "belajar", "JavaScript"]

// JOIN: Array → String
// Algoritma:
// 1. Tentukan separator
// 2. Loop semua element array
// 3. Gabungkan dengan separator
// 4. Return string hasil

const arr = ["Merah", "Kuning", "Hijau"];
const joined1 = arr.join(", ");  // "Merah, Kuning, Hijau"
const joined2 = arr.join("-");   // "Merah-Kuning-Hijau"

// APLIKASI: Slugify URL
function slugify(teks) {
    return teks
        .toLowerCase()           // Step 1: Lowercase
        .trim()                  // Step 2: Trim spasi
        .split(" ")              // Step 3: Split by spasi
        .join("-");              // Step 4: Join dengan dash
}

slugify("Belajar JavaScript Dasar");  // "belajar-javascript-dasar"
```

---

##### 6. PADDING DAN TRIMMING

**Tahapan Logika:**

```javascript
// TRIM: Hapus spasi di awal/akhir
// Algoritma:
// 1. Scan dari kiri, skip semua spasi
// 2. Scan dari kanan, skip semua spasi
// 3. Return substring di antara

const inputKotor = "  user@email.com  ";
const inputBersih = inputKotor.trim();  // "user@email.com"

// PADSTART: Tambah karakter di awal hingga panjang tertentu
// Algoritma:
// 1. Hitung panjang string saat ini
// 2. Hitung kekurangan: targetLength - currentLength
// 3. Tambahkan padString di awal sebanyak kekurangan

const nomor = "7";
const padded1 = nomor.padStart(3, "0");  // "007"
const padded2 = nomor.padStart(5, "0");  // "00007"

// APLIKASI: Format nomor telepon
const phone = "8123456789";
const formattedPhone = phone.padStart(11, "0");  // "08123456789"

// APLIKASI: Format invoice number
function formatInvoiceNumber(number, year) {
    const numStr = number.toString();
    const paddedNum = numStr.padStart(6, "0");
    return `INV/${year}/${paddedNum}`;
}

formatInvoiceNumber(123, 2024);  // "INV/2024/000123"
```

---

##### 7. TEMPLATE LITERALS (STRING INTERPOLATION)

**Tahapan Logika:**

```javascript
// BACKTICKS: `` bukan '' atau ""
// Algoritma:
// 1. Gunakan backticks untuk membungkus string
// 2. Sisipkan variabel dengan ${variabel}
// 3. JavaScript akan evaluate expression di dalam ${}

const nama = "Budi";
const umur = 25;

// CARA LAMA (concatenation)
const greeting1 = "Halo, nama saya " + nama + " dan saya " + umur + " tahun";

// CARA BARU (template literal)
const greeting2 = `Halo, nama saya ${nama} dan saya ${umur} tahun`;

// EXPRESSION DI DALAM ${}
const harga = 100000;
const diskon = 0.1;
const hargaAkhir = harga * (1 - diskon);

const invoice = `
================================
        INVOICE
================================
Harga Awal: Rp ${harga.toLocaleString()}
Diskon: ${(diskon * 100).toFixed(0)}%
Harga Akhir: Rp ${hargaAkhir.toLocaleString()}
================================
`;
```

---

##### 8. STRING BUILDING DENGAN ACCUMULATOR

**Tahapan Logika:**

```javascript
// POLA: Build string karakter per karakter
// Algoritma:
// 1. Inisialisasi empty string accumulator
// 2. Loop input (array/string)
// 3. Untuk setiap element, append ke accumulator
// 4. Return accumulator

// CONTOH 1: Reverse string
function reverseString(str) {
    let result = "";  // Step 1: Init empty string
    
    // Step 2: Loop dari akhir ke awal
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];  // Step 3: Append karakter
    }
    
    return result;  // Step 4: Return result
}

reverseString("Hello");  // "olleH"

// CONTOH 2: Hapus semua spasi
function hapusSpasi(str) {
    let result = "";
    
    for (const char of str) {
        if (char !== " ") {  // Hanya append jika bukan spasi
            result += char;
        }
    }
    
    return result;
}

hapusSpasi("Hello World");  // "HelloWorld"

// CONTOH 3: Capitalize setiap kata
function capitalizeWords(str) {
    let result = "";
    let capitalizeNext = true;
    
    for (const char of str) {
        if (char === " ") {
            result += char;
            capitalizeNext = true;
        } else if (capitalizeNext) {
            result += char.toUpperCase();
            capitalizeNext = false;
        } else {
            result += char.toLowerCase();
        }
    }
    
    return result;
}

capitalizeWords("hello world");  // "Hello World"
```

---

### ⚠️ Edge Cases dan Jebakan Umum

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **String Immutable** | String tidak bisa diubah, method return string baru | Selalu assign ke variabel baru |
| **Index Out of Bounds** | Akses index >= length return `undefined` | Cek length dulu |
| **Case Sensitivity** | "Hello" ≠ "hello" | Gunakan `toLowerCase()` untuk comparison |
| **Null/Undefined** | Method call pada null/undefined error | Cek existence dulu |

---

### 💡 Aplikasi Dunia Nyata

**1. Form Input Sanitizer:**

```javascript
// Algoritma pembersihan input:
// 1. Trim spasi
// 2. Lowercase untuk uniformity
// 3. Remove special characters
// 4. Validate format

function sanitizeInput(input) {
    return input
        .trim()                      // Step 1: Remove whitespace
        .toLowerCase()               // Step 2: Normalize case
        .replace(/[^a-z0-9 ]/g, "")  // Step 3: Remove special chars
        .replace(/\s+/g, " ");       // Step 4: Normalize spaces
}

sanitizeInput("  User@Name#123!  ");  // "username123"
```

**2. URL Slug Generator:**

```javascript
// Algoritma SEO-friendly slug:
// 1. Lowercase
// 2. Remove special characters
// 3. Replace spaces with dashes
// 4. Remove consecutive dashes

function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

generateSlug("  Cara Belajar JavaScript!!!  ");
// "cara-belajar-javascript"
```

---

### 📊 Kompleksitas Waktu Operasi String

| Operasi | Time Complexity | Keterangan |
|----------|----------------|------------|
| Akses karakter (`str[i]`) | O(1) | Constant time |
| Length (`str.length`) | O(1) | Cached property |
| Slice (`str.slice()`) | O(k) | k = panjang substring |
| Concat (`str1 + str2`) | O(n+m) | n,m = panjang string |
| Search (`includes()`) | O(n) | n = panjang string |
| Replace (`replaceAll()`) | O(n) | n = panjang string |
| Split (`split()`) | O(n) | n = panjang string |
| ToLowerCase/UpperCase | O(n) | n = panjang string |

---

---

### 🧮 2. Sihir Angka (Number & Math)

> Jangan biarkan string "Rp 5.000" atau angka desimal yang panjang merusak perhitungan Anda.

#### 🔢 toFixed(n) - MANTRA MATA UANG

Membulatkan dan memformat angka menjadi string dengan jumlah desimal yang pasti. **Jebakan:** Hasilnya adalah **String**.

**Contoh:** `123.4567.toFixed(2)` → `"123.46"`

---

#### 🔄 parseInt() / parseFloat() / Number() - MANTRA KONVERSI

Mengubah String menjadi Angka agar bisa dioperasikan secara matematis.

**Contoh:** `parseInt("100px")` → `100`

---

#### 🎲 Math.random() - MANTRA DADU

Menghasilkan angka acak antara 0 dan 1.

**Rumus:** `Math.floor(Math.random() * (max - min + 1)) + min`

---

#### 🧬 Penjelasan Mendalam: Number & Math Operations

##### 📖 Konsep Dasar: Representasi Angka dalam JavaScript

JavaScript menggunakan standar **IEEE 754** untuk merepresentasikan angka. Semua angka disimpan sebagai **64-bit floating point** (double precision). Ini berarti JavaScript tidak membedakan integer dan float seperti bahasa lain. Setiap angka disimpan dalam 3 komponen: **sign bit** (1 bit), **exponent** (11 bit), dan **mantissa/fraction** (52 bit).

##### 🔬 Algoritma Internal toFixed(n)

1. **Penerimaan Parameter:** Metode menerima parameter `n` (jumlah desimal yang diinginkan, 0-100).
2. **Pembulatan:** Angka dibulatkan menggunakan aturan **round half up**. Jika digit berikutnya ≥ 5, bulatkan ke atas.
3. **Penanganan Kasus Khusus:**
   - Jika angka adalah NaN atau Infinity, kembalikan string "NaN" atau "Infinity"
   - Jika n tidak dalam range 0-100, throw RangeError
4. **Padding Desimal:** Jika jumlah desimal aktual < n, tambahkan nol di belakang.
5. **Konversi ke String:** Hasil akhir dikonversi ke string dengan format: `integerPart + "." + decimalPart`
6. **Pengembalian:** Kembalikan string hasil format. **Penting:** Hasil adalah string, bukan number!

##### 🔬 Algoritma Internal parseInt() dan parseFloat()

**parseInt(string, radix):**

1. **Trim:** Hapus spasi di awal dan akhir string.
2. **Penanganan Tanda:** Cek karakter pertama. Jika "-" simpan tanda negatif, jika "+" abaikan.
3. **Validasi Radix:** Jika radix tidak diberikan, default ke 10. Jika radix 16 dan string dimulai dengan "0x", skip prefix.
4. **Iterasi Karakter:** Loop setiap karakter dari kiri ke kanan:
   - Konversi karakter ke nilai numerik (0-9, A-Z untuk radix > 10)
   - Jika karakter tidak valid untuk radix tertentu, STOP parsing
   - Akumulasi hasil: `result = result * radix + digitValue`
5. **Terapkan Tanda:** Jika tanda negatif, kalikan hasil dengan -1.
6. **Pengembalian:** Kembalikan integer hasil, atau NaN jika tidak ada digit valid.

**parseFloat(string):**

1. **Trim:** Hapus spasi di awal dan akhir string.
2. **Penanganan Tanda:** Cek dan simpan tanda positif/negatif.
3. **Parsing Integer Part:** Baca digit sebelum titik desimal seperti parseInt.
4. **Cek Titik Desimal:** Jika menemukan ".", lanjutkan parsing fractional part.
5. **Parsing Fractional Part:** Baca digit setelah titik, hitung nilai desimal.
6. **Notasi Ilmiah:** Jika menemukan "e" atau "E", parse exponent dan kalikan dengan 10^exponent.
7. **Kombinasi:** Gabungkan integer part + fractional part × tanda.

##### 🔬 Algoritma Internal Math.random()

JavaScript menggunakan **Pseudo-Random Number Generator (PRNG)**. Angka yang dihasilkan bukan benar-benar acak, tetapi deterministik berdasarkan seed internal. Browser modern menggunakan algoritma **xorshift128+** atau **Mersenne Twister**.

1. **Seed Initialization:** Seed diinisialisasi dari sumber entropi sistem (waktu, movement mouse, dll).
2. **Bitwise Operations:** Lakukan operasi bitwise XOR dan shift pada state internal.
3. **Normalization:** Hasil integer dinormalisasi ke range [0, 1) dengan membagi MAX_VALUE.
4. **State Update:** Update state internal untuk panggilan berikutnya.

##### ⚠️ Edge Cases dan Jebakan Umum

- **Floating Point Precision:** `0.1 + 0.2 !== 0.3` (hasil: 0.30000000000000004). Gunakan `toFixed()` atau library seperti Decimal.js untuk perhitungan finansial.
- **toFixed Returns String:** `(123.456).toFixed(2)` menghasilkan `"123.46"` (string), bukan number. Gunakan `parseFloat()` jika butuh number kembali.
- **parseInt dengan Leading Zero:** `parseInt("010")` bisa menghasilkan 8 (octal) di browser lama. Selalu gunakan radix: `parseInt("010", 10)`
- **Math.random() Tidak Kriptografis:** Jangan gunakan untuk security! Gunakan `crypto.getRandomValues()` untuk kebutuhan keamanan.
- **Number.MAX_SAFE_INTEGER:** Integer terbesar yang aman adalah 2^53 - 1 (9007199254740991). Di atas ini, operasi bisa tidak akurat.
- **NaN Propagation:** Sekali NaN muncul dalam operasi, seluruh hasil akan NaN. Gunakan `isNaN()` atau `Number.isNaN()` untuk validasi.

##### 💡 Aplikasi Dunia Nyata

**1. Format Mata Uang:**

```javascript
// Format harga untuk display
const price = 1234.567;
const formatted = price.toFixed(2); // "1234.57"
const withCurrency = `Rp ${formatted}`; // "Rp 1234.57"

// Format dengan pemisah ribuan
const withThousands = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
}).format(price); // "Rp 1.234,57"
```

**2. Generate Random ID:**

```javascript
// Generate random ID unik
function generateId() {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
}
// Hasil: "k9j2l4m8n1p3q5r7"
```

**3. Random Range untuk Game:**

```javascript
// Roll dadu D20 (1-20)
function rollD20() {
    return Math.floor(Math.random() * 20) + 1;
}

// Damage random antara 50-100
function calculateDamage() {
    const min = 50, max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

**4. Parsing Input User:**

```javascript
// Parsing input form dengan sanitasi
function parseUserInput(input) {
    // Hapus karakter non-numerik kecuali titik dan minus
    const cleaned = input.replace(/[^0-9.-]/g, '');
    const number = parseFloat(cleaned);
    
    // Validasi
    if (isNaN(number)) {
        throw new Error('Input harus angka');
    }
    
    return number;
}

// Penggunaan
const userInput = "  Rp 1.500,00 ";
const value = parseUserInput(userInput.replace(',', '.')); // 1.500
```

##### 📊 Kompleksitas Waktu (Big O)

| Operasi | Time Complexity | Space Complexity |
|---------|-----------------|------------------|
| `toFixed(n)` | O(1) | O(1) |
| `parseInt(str)` | O(n)* | O(1) |
| `parseFloat(str)` | O(n)* | O(1) |
| `Math.random()` | O(1) | O(1) |

*\*n = panjang string input*

---

### 🧠 Latihan Logika: Kalkulator Diskon

> **🎯 Skenario: Perhitungan Harga Akhir**
>
> 1. **Konversi:** Ubah string ke number dengan `parseFloat`.
> 2. **Hitung:** Harga * (Diskon / 100).
> 3. **Bulatkan:** Gunakan `Math.round`.

---

### ⚔️ Latihan Bertahap: Operasi Angka

| Level | Tantangan | Deskripsi |
|-------|-----------|-----------|
| LEVEL 1 | Ganjil Genap | Cek sisa bagi dengan modulator `%` |
| LEVEL 2 | Dadu RPG | Hasilkan angka acak 1-20 |
| LEVEL 3 | Format Uang Pintar | "1500000" → "1.5jt" |

---

### 📖 LATIHAN TERPERINCI: NUMBER & MATH OPERATIONS

#### LEVEL 1 - FUNDAMENTAL (Pemula)

**Latihan 1.1: Cek Ganjil atau Genap**

```javascript
// 🎯 TUJUAN: Menentukan apakah angka ganjil atau genap
// ⏱️ WAKTU: 5 menit
// 💪 KESULITAN: ⭐

// SOAL:
// Buat fungsi yang menerima angka dan mengembalikan:
// - "Genap" jika angka habis dibagi 2
// - "Ganjil" jika tidak

// CONTOH:
// cekGanjilGenap(4) → "Genap"
// cekGanjilGenap(7) → "Ganjil"
// cekGanjilGenap(0) → "Genap"

// ✍️ TULIS KODE ANDA DI SINI
function cekGanjilGenap(angka) {
    // Langkah 1: _______ (gunakan operator modulus %)
    // Langkah 2: _______ (jika sisa bagi = 0, maka genap)
    // Langkah 3: _______ (return "Genap" atau "Ganjil")
    
    // HINT: angka % 2 === 0 → Genap
}

// ✅ TEST CASE
console.log(cekGanjilGenap(4));   // "Genap"
console.log(cekGanjilGenap(7));   // "Ganjil"
console.log(cekGanjilGenap(0));   // "Genap"
console.log(cekGanjilGenap(-2));  // "Genap"
```

---

**Latihan 1.2: Konversi Suhu**

```javascript
// 🎯 TUJUAN: Konversi Celcius ke Fahrenheit dan sebaliknya
// ⏱️ WAKTU: 7 menit
// 💪 KESULITAN: ⭐⭐

// SOAL:
// Buat dua fungsi:
// 1. celciusToFahrenheit(c): (c × 9/5) + 32
// 2. fahrenheitToCelcius(f): (f - 32) × 5/9
// Bulatkan hasil ke 1 desimal menggunakan toFixed()

// CONTOH:
// cToF(0) → "32.0°F"
// cToF(100) → "212.0°F"
// fToC(32) → "0.0°C"
// fToC(212) → "100.0°C"

// ✍️ TULIS KODE ANDA DI SINI
function cToF(celcius) {
    // Rumus: (c × 9/5) + 32
    // Return dengan format: "X.X°F"
}

function fToC(fahrenheit) {
    // Rumus: (f - 32) × 5/9
    // Return dengan format: "X.X°C"
}

// ✅ TEST CASE
console.log(cToF(0));      // "32.0°F"
console.log(cToF(100));    // "212.0°F"
console.log(cToF(37));     // "98.6°F"
console.log(fToC(32));     // "0.0°C"
console.log(fToC(212));    // "100.0°C"
```

---

**Latihan 1.3: Kalkulator Diskon**

```javascript
// 🎯 TUJUAN: Menghitung harga setelah diskon
// ⏱️ WAKTU: 7 menit
// 💪 KESULITAN: ⭐⭐

// SOAL:
// Buat fungsi yang menghitung:
// 1. Harga setelah diskon
// 2. Jumlah yang dihemat

// CONTOH:
// hitungDiskon(100000, 20) → 
//   { hargaAkhir: 80000, hemat: 20000 }

// ✍️ TULIS KODE ANDA DI SINI
function hitungDiskon(hargaAwal, persenDiskon) {
    // Langkah 1: _______ (hitung jumlah diskon)
    // Langkah 2: _______ (hitung harga akhir)
    // Langkah 3: _______ (return object dengan hargaAkhir dan hemat)
    
    // Rumus:
    // jumlahDiskon = hargaAwal × (persenDiskon / 100)
    // hargaAkhir = hargaAwal - jumlahDiskon
}

// ✅ TEST CASE
console.log(hitungDiskon(100000, 20));
// { hargaAkhir: 80000, hemat: 20000 }

console.log(hitungDiskon(50000, 10));
// { hargaAkhir: 45000, hemat: 5000 }
```

---

#### LEVEL 2 - INTERMEDIATE (Menengah)

**Latihan 2.1: Generator Dadu RPG**

```javascript
// 🎯 TUJUAN: Simulasi roll dadu untuk game RPG
// ⏱️ WAKTU: 10 menit
// 💪 KESULITAN: ⭐⭐⭐

// SOAL:
// Buat fungsi yang mensimulasikan roll berbagai jenis dadu:
// - D4 (1-4), D6 (1-6), D8 (1-8), D10 (1-10), D12 (1-12), D20 (1-20)
// Gunakan Math.random() dan Math.floor()

// CONTOH:
// rollD6() → random 1-6
// rollD20() → random 1-20
// rollD100() → random 1-100

// ✍️ TULIS KODE ANDA DI SINI
function rollDadu(sisi) {
    // Rumus: Math.floor(Math.random() * sisi) + 1
    // Langkah 1: Generate random 0-1
    // Langkah 2: Kalikan dengan jumlah sisi
    // Langkah 3: Floor untuk dapat integer
    // Langkah 4: Tambah 1 untuk mulai dari 1
}

// Helper functions untuk dadu umum
function rollD4() { return rollDadu(4); }
function rollD6() { return rollDadu(6); }
function rollD8() { return rollDadu(8); }
function rollD10() { return rollDadu(10); }
function rollD12() { return rollDadu(12); }
function rollD20() { return rollDadu(20); }
function rollD100() { return rollDadu(100); }

// ✅ TEST CASE (jalankan beberapa kali)
console.log(`Roll D6: ${rollD6()}`);    // 1-6
console.log(`Roll D20: ${rollD20()}`);  // 1-20
console.log(`Roll D100: ${rollD100()}`); // 1-100

// Test distribusi (jalankan 100 kali)
function testDistribusi() {
    const hasil = {};
    for (let i = 0; i < 100; i++) {
        const roll = rollD6();
        hasil[roll] = (hasil[roll] || 0) + 1;
    }
    console.log("Distribusi 100 roll D6:", hasil);
}
```

---

**Latihan 2.2: Format Mata Uang Indonesia**

```javascript
// 🎯 TUJUAN: Format angka menjadi Rupiah dengan pemisah ribuan
// ⏱️ WAKTU: 10 menit
// 💪 KESULITAN: ⭐⭐⭐

// SOAL:
// Buat fungsi yang memformat angka menjadi string Rupiah
// Format: "Rp 1.000.000" (titik sebagai pemisah ribuan)

// CONTOH:
// formatRupiah(1000000) → "Rp 1.000.000"
// formatRupiah(15000) → "Rp 15.000"
// formatRupiah(1234567) → "Rp 1.234.567"

// ✍️ TULIS KODE ANDA DI SINI
function formatRupiah(angka) {
    // CARA 1: Manual dengan loop
    // Langkah 1: Convert ke string
    // Langkah 2: Loop dari belakang, setiap 3 digit tambahkan titik
    // Langkah 3: Prefix dengan "Rp "
    
    // CARA 2: Menggunakan toLocaleString (RECOMMENDED)
    // Langkah 1: Gunakan toLocaleString('id-ID')
    // Langkah 2: Prefix dengan "Rp "
}

// ✅ TEST CASE
console.log(formatRupiah(1000000));    // "Rp 1.000.000"
console.log(formatRupiah(15000));      // "Rp 15.000"
console.log(formatRupiah(1234567));    // "Rp 1.234.567"
console.log(formatRupiah(100));        // "Rp 100"
console.log(formatRupiah(0));          // "Rp 0"
```

---

**Latihan 2.3: Kalkulator BMI (Body Mass Index)**

```javascript
// 🎯 TUJUAN: Menghitung dan mengategorikan BMI
// ⏱️ WAKTU: 12 menit
// 💪 KESULITAN: ⭐⭐⭐

// SOAL:
// Buat fungsi yang menghitung BMI dengan rumus:
// BMI = beratBadan(kg) / (tinggiBadan(m) ^ 2)
// 
// Kategorikan:
// - < 18.5: "Underweight"
// - 18.5 - 24.9: "Normal"
// - 25 - 29.9: "Overweight"
// - >= 30: "Obese"

// CONTOH:
// hitungBMI(70, 1.75) → { bmi: 22.86, kategori: "Normal" }

// ✍️ TULIS KODE ANDA DI SINI
function hitungBMI(berat, tinggi) {
    // Langkah 1: _______ (hitung BMI: berat / (tinggi * tinggi))
    // Langkah 2: _______ (bulatkan ke 2 desimal)
    // Langkah 3: _______ (tentukan kategori dengan if-else)
    // Langkah 4: _______ (return object dengan bmi dan kategori)
}

// ✅ TEST CASE
console.log(hitungBMI(70, 1.75));   // { bmi: 22.86, kategori: "Normal" }
console.log(hitungBMI(50, 1.65));   // { bmi: 18.37, kategori: "Underweight" }
console.log(hitungBMI(80, 1.70));   // { bmi: 27.68, kategori: "Overweight" }
console.log(hitungBMI(100, 1.60));  // { bmi: 39.06, kategori: "Obese" }
```

---

#### LEVEL 3 - ADVANCED (Lanjut)

**Latihan 3.1: Format Angka Kompak**

```javascript
// 🎯 TUJUAN: Format angka besar menjadi notasi kompak (K, M, B)
// ⏱️ WAKTU: 15 menit
// 💪 KESULITAN: ⭐⭐⭐⭐

// SOAL:
// Buat fungsi yang memformat angka besar:
// - 1000 → "1K" (ribu)
// - 1000000 → "1M" (juta)
// - 1000000000 → "1B" (milyar)
// - 1500000 → "1.5M"

// CONTOH:
// formatKompak(1500) → "1.5K"
// formatKompak(2500000) → "2.5M"
// formatKompak(3500000000) → "3.5B"

// ✍️ TULIS KODE ANDA DI SINI
function formatKompak(angka) {
    // Langkah 1: Cek apakah >= 1 milyar (10^9)
    //   - Jika ya, bagi dengan 10^9, tambahkan "B"
    // Langkah 2: Cek apakah >= 1 juta (10^6)
    //   - Jika ya, bagi dengan 10^6, tambahkan "M"
    // Langkah 3: Cek apakah >= 1 ribu (10^3)
    //   - Jika ya, bagi dengan 10^3, tambahkan "K"
    // Langkah 4: Jika tidak, return angka asli
    // 
    // HINT: Gunakan toFixed(1) untuk 1 desimal, tapi hapus jika .0
}

// ✅ TEST CASE
console.log(formatKompak(500));        // "500"
console.log(formatKompak(1500));       // "1.5K"
console.log(formatKompak(25000));      // "25K"
console.log(formatKompak(1500000));    // "1.5M"
console.log(formatKompak(3500000000)); // "3.5B"
```

---

**Latihan 3.2: Kalkulator Bunga Majemuk**

```javascript
// 🎯 TUJUAN: Menghitung bunga majemuk untuk investasi
// ⏱️ WAKTU: 15 menit
// 💪 KESULITAN: ⭐⭐⭐⭐

// SOAL:
// Buat fungsi yang menghitung bunga majemuk dengan rumus:
// A = P(1 + r/n)^(n*t)
// 
// Dimana:
// - A = jumlah akhir
// - P = pokok (principal)
// - r = suku bunga tahunan (desimal, misal 5% = 0.05)
// - n = frekuensi compound per tahun
// - t = waktu dalam tahun

// CONTOH:
// hitungBungaMajemuk(1000000, 0.05, 12, 10) → 
//   { jumlahAkhir: 1647009, totalBunga: 647009 }

// ✍️ TULIS KODE ANDA DI SINI
function hitungBungaMajemuk(pokok, bunga, frekuensi, tahun) {
    // Rumus: A = P * Math.pow(1 + r/n, n * t)
    // Langkah 1: _______ (hitung factor: (1 + r/n)^(n*t))
    // Langkah 2: _______ (hitung jumlah akhir: P * factor)
    // Langkah 3: _______ (hitung total bunga: A - P)
    // Langkah 4: _______ (return object dengan jumlahAkhir dan totalBunga)
    
    // HINT: Gunakan Math.pow(base, exponent) atau operator **
}

// ✅ TEST CASE
console.log(hitungBungaMajemuk(1000000, 0.05, 12, 10));
// { jumlahAkhir: 1647009, totalBunga: 647009 }

console.log(hitungBungaMajemuk(5000000, 0.08, 4, 5));
// { jumlahAkhir: 7429741, totalBunga: 2429741 }
```

---

**Latihan 3.3: Konversi Detik ke Format Waktu**

```javascript
// 🎯 TUJUAN: Konversi detik menjadi format HH:MM:SS
// ⏱️ WAKTU: 15 menit
// 💪 KESULITAN: ⭐⭐⭐⭐

// SOAL:
// Buat fungsi yang mengkonversi total detik menjadi format waktu
// HH:MM:SS dengan leading zero

// CONTOH:
// formatWaktu(3661) → "01:01:01"
// formatWaktu(7384) → "02:03:04"
// formatWaktu(90) → "00:01:30"

// ✍️ TULIS KODE ANDA DI SINI
function formatWaktu(totalDetik) {
    // Langkah 1: _______ (hitung jam: Math.floor(totalDetik / 3600))
    // Langkah 2: _______ (hitung menit: Math.floor((totalDetik % 3600) / 60))
    // Langkah 3: _______ (hitung detik: totalDetik % 60)
    // Langkah 4: _______ (format dengan padStart(2, '0'))
    // Langkah 5: _______ (gabungkan dengan template literal)
}

// ✅ TEST CASE
console.log(formatWaktu(3661));   // "01:01:01"
console.log(formatWaktu(7384));   // "02:03:04"
console.log(formatWaktu(90));     // "00:01:30"
console.log(formatWaktu(0));      // "00:00:00"
console.log(formatWaktu(86400));  // "24:00:00"
```

---

#### LEVEL 4 - EXPERT (Mastery)

**Latihan 4.1: Prime Number Checker**

```javascript
// 🎯 TUJUAN: Mengecek apakah angka adalah bilangan prima
// ⏱️ WAKTU: 20 menit
// 💪 KESULITAN: ⭐⭐⭐⭐⭐

// SOAL:
// Buat fungsi yang mengecek apakah angka adalah bilangan prima
// Bilangan prima: hanya bisa dibagi oleh 1 dan dirinya sendiri

// CONTOH:
// isPrime(2) → true
// isPrime(17) → true
// isPrime(4) → false
// isPrime(1) → false

// ✍️ TULIS KODE ANDA DI SINI
function isPrime(angka) {
    // Langkah 1: Jika angka < 2, return false
    // Langkah 2: Jika angka = 2, return true
    // Langkah 3: Jika angka genap, return false
    // Langkah 4: Loop dari 3 hingga sqrt(angka), step 2
    //   - Jika angka habis dibagi loop, return false
    // Langkah 5: Jika loop selesai tanpa return, return true
    
    // OPTIMISASI: Cukup cek hingga Math.sqrt(angka)
    // Karena jika n = a * b, maka salah satu faktor <= sqrt(n)
}

// ✅ TEST CASE
console.log(isPrime(2));    // true
console.log(isPrime(17));   // true
console.log(isPrime(4));    // false
console.log(isPrime(1));    // false
console.log(isPrime(97));   // true
console.log(isPrime(100));  // false
```

---

**Latihan 4.2: Faktorial dengan Rekursi dan Iterasi**

```javascript
// 🎯 TUJUAN: Menghitung faktorial dengan dua pendekatan
// ⏱️ WAKTU: 20 menit
// 💪 KESULITAN: ⭐⭐⭐⭐⭐

// SOAL:
// Buat dua fungsi untuk menghitung faktorial:
// 1. Iteratif: menggunakan loop
// 2. Rekursif: fungsi memanggil dirinya sendiri
// 
// n! = n × (n-1) × (n-2) × ... × 1
// 5! = 5 × 4 × 3 × 2 × 1 = 120

// CONTOH:
// faktorialIteratif(5) → 120
// faktorialRekursif(5) → 120

// ✍️ TULIS KODE ANDA DI SINI

// CARA 1: ITERATIF
function faktorialIteratif(n) {
    // Langkah 1: Jika n < 0, return error
    // Langkah 2: Jika n = 0 atau 1, return 1
    // Langkah 3: Loop dari 2 hingga n, akumulasi hasil perkalian
    // Langkah 4: Return hasil
}

// CARA 2: REKURSIF
function faktorialRekursif(n) {
    // Base case: jika n = 0 atau 1, return 1
    // Recursive case: return n * faktorialRekursif(n - 1)
}

// ✅ TEST CASE
console.log(faktorialIteratif(5));  // 120
console.log(faktorialIteratif(0));  // 1
console.log(faktorialIteratif(10)); // 3628800

console.log(faktorialRekursif(5));  // 120
console.log(faktorialRekursif(0));  // 1
console.log(faktorialRekursif(10)); // 3628800
```

---

**Latihan 4.3: Random ID Generator**

```javascript
// 🎯 TUJUAN: Generate unique ID secara random
// ⏱️ WAKTU: 20 menit
// 💪 KESULITAN: ⭐⭐⭐⭐⭐

// SOAL:
// Buat fungsi yang menghasilkan random ID unik dengan format:
// - Panjang: 12 karakter
// - Karakter: alphanumeric (a-z, 0-9)
// - Format: XXXX-XXXX-XXXX (dengan dash setiap 4 karakter)

// CONTOH:
// generateId() → "k9j2-l4m8-n1p3"
// generateId() → "x7y2-z5w8-q1r4" (selalu unik)

// ✍️ TULIS KODE ANDA DI SINI
function generateId() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    
    // Langkah 1: Loop 12 kali
    // Langkah 2: Setiap iterasi, pick random character dari chars
    // Langkah 3: Setiap 4 karakter, tambahkan dash (kecuali di akhir)
    // Langkah 4: Return id
    
    // HINT: Gunakan Math.random() dan Math.floor() untuk pick random index
}

// ALTERNATIF: Versi lebih singkat dengan teknik array
function generateIdV2() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    // Langkah 1: Array.from({length: 12}, ...) untuk generate 12 chars
    // Langkah 2: Map ke random character
    // Langkah 3: Join dengan dash setiap 4 karakter
}

// ✅ TEST CASE
console.log(generateId());  // "k9j2-l4m8-n1p3" (contoh)
console.log(generateId());  // "x7y2-z5w8-q1r4" (contoh)
console.log(generateId());  // Selalu unik!
```

---

**Latihan 4.4: Kalkulator Pajak Progresif**

```javascript
// 🎯 TUJUAN: Menghitung pajak dengan sistem progresif bertahap
// ⏱️ WAKTU: 25 menit
// 💪 KESULITAN: ⭐⭐⭐⭐⭐

// SOAL:
// Hitung pajak penghasilan dengan tarif progresif:
// 
// - 0 - 50jt: 0%
// - 50jt - 250jt: 5%
// - 250jt - 500jt: 15%
// - 500jt - 1M: 25%
// - > 1M: 30%
//
// CONTOH:
// hitungPajak(300000000) → { pajak: 20000000, efektif: 6.67 }

// ✍️ TULIS KODE ANDA DI SINI
function hitungPajak(penghasilan) {
    // Tarif progresif (dihitung per lapisan)
    const lapisan = [
        { batas: 50000000, tarif: 0 },
        { batas: 250000000, tarif: 0.05 },
        { batas: 500000000, tarif: 0.15 },
        { batas: 1000000000, tarif: 0.25 },
        { batas: Infinity, tarif: 0.30 }
    ];
    
    // Langkah 1: Loop setiap lapisan
    // Langkah 2: Hitung penghasilan kena pajak di lapisan ini
    // Langkah 3: Hitung pajak untuk lapisan ini
    // Langkah 4: Akumulasi total pajak
    // Langkah 5: Hitung tarif efektif (total pajak / penghasilan * 100)
    // Langkah 6: Return object dengan pajak dan tarifEfektif
}

// ✅ TEST CASE
console.log(hitungPajak(300000000));  
// { pajak: 20000000, tarifEfektif: 6.67 }

console.log(hitungPajak(600000000));  
// { pajak: 65000000, tarifEfektif: 10.83 }

console.log(hitungPajak(1500000000)); 
// { pajak: 215000000, tarifEfektif: 14.33 }
```

---

### 🎯 PROYEK MINI: Kalkulator Finansial Pribadi

```javascript
// 🎯 TUJUAN: Membuat aplikasi kalkulator finansial lengkap
// ⏱️ WAKTU: 60 menit
// 💪 KESULITAN: ⭐⭐⭐⭐⭐

// SOAL:
// Buat object dengan fungsi-fungsi untuk kalkulasi finansial:
// - hitungTabungan(): proyeksi tabungan dengan bunga
// - hitungCicilan(): angsuran bulanan (rumus annuity)
// - hitungROI(): return on investment
// - konversiMataUang(): konversi antar mata uang

// CONTOH PENGGUNAAN:
const kalkulator = buatKalkulatorFinansial();

kalkulator.hitungTabungan({
    pokok: 10000000,
    bungaTahunan: 0.05,
    bulan: 12
}); 
// { total: 10511619, bunga: 511619 }

kalkulator.hitungCicilan({
    pokok: 100000000,
    bungaTahunan: 0.12,
    bulan: 24
});
// { angsuranBulanan: 4707347, totalBayar: 112976328 }

// ✍️ TULIS KODE ANDA DI SINI
function buatKalkulatorFinansial() {
    return {
        hitungTabungan: ({ pokok, bungaTahunan, bulan }) => {
            // TODO: Implementasi dengan bunga majemuk
            // Rumus: A = P(1 + r/n)^(n*t)
            // n = 12 (monthly compounding)
        },
        
        hitungCicilan: ({ pokok, bungaTahunan, bulan }) => {
            // TODO: Implementasi dengan rumus annuity
            // M = P * [r(1+r)^n] / [(1+r)^n - 1]
            // r = bunga bulanan, n = jumlah bulan
        },
        
        hitungROI: ({ investasiAwal, nilaiAkhir }) => {
            // TODO: ROI = ((nilaiAkhir - investasiAwal) / investasiAwal) * 100
        },
        
        konversiMataUang: ({ jumlah, dari, ke, rate }) => {
            // TODO: konversi = jumlah * rate
            // Return dengan format yang sesuai
        }
    };
}
```

---

### 📝 RANGKUMAN NUMBER & MATH

| Method | Fungsi | Contoh | Return |
|--------|--------|--------|--------|
| `toFixed(n)` | Format desimal | `(123.456).toFixed(2)` | `"123.46"` |
| `parseInt()` | Parse integer | `parseInt("100px")` | `100` |
| `parseFloat()` | Parse float | `parseFloat("3.14px")` | `3.14` |
| `Math.random()` | Random 0-1 | `Math.random()` | `0.xxxx` |
| `Math.floor()` | Bulatkan ke bawah | `Math.floor(3.7)` | `3` |
| `Math.ceil()` | Bulatkan ke atas | `Math.ceil(3.2)` | `4` |
| `Math.round()` | Bulatkan terdekat | `Math.round(3.5)` | `4` |
| `Math.pow()` | Pangkat | `Math.pow(2, 3)` | `8` |
| `Math.sqrt()` | Akar kuadrat | `Math.sqrt(16)` | `4` |
| `Math.abs()` | Nilai absolut | `Math.abs(-5)` | `5` |
| `Math.max()` | Nilai maksimal | `Math.max(1,5,3)` | `5` |
| `Math.min()` | Nilai minimal | `Math.min(1,5,3)` | `1` |

---

### 🔑 RUMUS-RUMUS PENTING

```javascript
// 1. Random Range
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 2. Clamp (batasi nilai dalam range)
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// 3. Map Range (konversi dari satu range ke range lain)
const mapRange = (value, inMin, inMax, outMin, outMax) => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

// 4. Format Currency Indonesia
const formatIDR = (num) => new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
}).format(num);

// 5. Percentage Calculation
const percentage = (part, total) => ((part / total) * 100).toFixed(2) + '%';
```

---

## 🧬 Penjelasan Mendalam: Number & Math Operations

> Ini adalah mantra-mantra terpenting kedua setelah `map`, `filter`, `reduce`.

#### ➕ push(item) - TAMBAH BELAKANG

Menambahkan item ke **akhir** array. Merubah array asli.

**Contoh:** `arr.push("Roti")`

---

#### ➖ pop() - HAPUS BELAKANG

Menghapus dan mengambil item **terakhir**.

---

#### ✂️ slice(start, end) - PENGIRIS

Mengambil bagian array **tanpa merusak** yang asli.

---

#### 🔧 splice(start, count, ...items) - BEDAH

Mantra kuat untuk hapus/tambah di mana saja. Merubah array asli!

---

#### 🔗 join(separator) - PENYATU

Mengubah array menjadi string.

---

### 🧠 Latihan Logika: Manajemen Antrean

> **🎯 Skenario: Simulasi First-In-First-Out (FIFO)**
>
> 1. **Daftar Baru:** Gunakan `push()` untuk pelanggan yang baru datang.
> 2. **Panggil:** Gunakan `shift()` untuk melayani orang pertama.

---

### ⚔️ Latihan Bertahap: Manipulasi Wadah

| Level | Tantangan | Deskripsi |
|-------|-----------|-----------|
| LEVEL 1 | Daftar Tamu | Gabungkan array nama dengan koma |
| LEVEL 2 | Cari Posisi | Cek urutan "Budi" di antrean |
| LEVEL 3 | Potong Stok | Hapus 3 barang terakhir |

---

## 🧬 Penjelasan Mendalam: Array dan Manipulasi Data

### 📖 Apa itu Array?

**Array** adalah struktur data yang menyimpan **kumpulan item** dalam urutan berurutan dengan index numerik. Jika Object adalah **kamus**, maka Array adalah **daftar belanja** berurutan.

```javascript
// Analogi: Array sebagai daftar berurutan
const buah = ["Apel", "Jeruk", "Mangga"];
// Index:    0        1         2
// Akses: buah[0] = "Apel", buah[1] = "Jeruk"
```

**Mengapa Array Penting?**
1. **Ordered Collection:** Urutan data terjaga
2. **Indexed Access:** Akses cepat dengan index O(1)
3. **Iterable:** Mudah di-loop dengan berbagai method
4. **Foundation:** Basis untuk struktur data lain (Stack, Queue, dll)

---

### 🔬 Cara Membentuk Logika Algoritma untuk Array Manipulation

#### 📚 Framework Berpikir Algoritmik untuk Array

```
┌─────────────────────────────────────────────────────────┐
│  1. ANALISIS INPUT & OUTPUT                             │
│     - Input: Array seperti apa?                         │
│     - Output: Array/Number/Object/Boolean?              │
│     - Transformasi: Apa yang berubah?                   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  2. IDENTIFIKASI OPERASI                                │
│     - Tambah item? → push/unshift                      │
│     - Hapus item? → pop/shift/splice                   │
│     - Transformasi? → map                              │
│     - Filter? → filter                                 │
│     - Akumulasi? → reduce                              │
│     - Cari? → find/findIndex/includes                  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  3. PILIH PENDEKATAN                                    │
│     - Mutasi array asli? → push/pop/splice             │
│     - Array baru? → map/filter/slice                   │
│     - Single value? → reduce                           │
│     - Boolean? → some/every/includes                   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  4. IMPLEMENTASI & TEST                                 │
│     - Tulis kode                                        │
│     - Test dengan edge cases                            │
│     - Optimize jika perlu                               │
└─────────────────────────────────────────────────────────┘
```

---

#### 🔍 Array Manipulation: Panduan Lengkap Step-by-Step

##### 1. MENAMBAH ITEM

**Tahapan Logika:**

```javascript
const arr = ["Apel", "Jeruk"];

// PUSH: Tambah di akhir
// Algoritma:
// 1. Tentukan item yang akan ditambah
// 2. Taruh di index length (posisi terakhir)
// 3. Update length
// 4. Return new length
arr.push("Mangga");  // ["Apel", "Jeruk", "Mangga"]

// UNSHIFT: Tambah di awal
// Algoritma:
// 1. Tentukan item yang akan ditambah
// 2. Shift semua item existing ke kanan (index + 1)
// 3. Taruh item baru di index 0
// 4. Return new length
arr.unshift("Anggur");  // ["Anggur", "Apel", "Jeruk", "Mangga"]

// APLIKASI: Shopping cart
const cart = [];
cart.push({ id: 1, nama: "Laptop", qty: 1 });
cart.push({ id: 2, nama: "Mouse", qty: 2 });
cart.unshift({ id: 0, nama: "Gratis Ongkir", qty: 1 });
// [{id:0,...}, {id:1,...}, {id:2,...}]
```

---

##### 2. MENGHAPUS ITEM

**Tahapan Logika:**

```javascript
const arr = ["Apel", "Jeruk", "Mangga", "Anggur"];

// POP: Hapus dari akhir
// Algoritma:
// 1. Simpan item terakhir
// 2. Decrement length
// 3. Return item yang dihapus
const last = arr.pop();  // "Anggur", arr = ["Apel", "Jeruk", "Mangga"]

// SHIFT: Hapus dari awal
// Algoritma:
// 1. Simpan item pertama (index 0)
// 2. Shift semua item ke kiri (index - 1)
// 3. Decrement length
// 4. Return item yang dihapus
const first = arr.shift();  // "Apel", arr = ["Jeruk", "Mangga"]

// SPLICE: Hapus dari posisi tertentu
// Algoritma:
// 1. Tentukan start index
// 2. Tentukan berapa item yang dihapus
// 3. Shift item setelahnya ke kiri
// 4. Return array of deleted items
const deleted = arr.splice(1, 1);  // ["Jeruk"], arr = ["Mangga"]

// APLIKASI: Queue system (FIFO)
const queue = ["User1", "User2", "User3"];
queue.push("User4");  // Join queue
const served = queue.shift();  // "User1" - serve first person
```

---

##### 3. MENGAMBIL BAGIAN ARRAY (SLICING)

**Tahapan Logika:**

```javascript
const arr = ["A", "B", "C", "D", "E"];

// SLICE: Ambil sebagian tanpa merusak asli
// Algoritma:
// 1. Tentukan start index (inklusive)
// 2. Tentukan end index (ekslusive)
// 3. Copy item dari start hingga end-1
// 4. Return array baru

const slice1 = arr.slice(1, 4);  // ["B", "C", "D"]
const slice2 = arr.slice(2);     // ["C", "D", "E"]
const slice3 = arr.slice(-2);    // ["D", "E"]

// APLIKASI: Pagination
function paginate(array, page, pageSize) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return array.slice(start, end);
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
paginate(data, 1, 3);  // [1, 2, 3] - page 1
paginate(data, 2, 3);  // [4, 5, 6] - page 2
```

---

##### 4. MENGGABUNGKAN ARRAY

**Tahapan Logika:**

```javascript
const arr1 = ["A", "B"];
const arr2 = ["C", "D"];

// CONCAT: Gabung array
// Algoritma:
// 1. Copy semua item dari array pertama
// 2. Append semua item dari array kedua
// 3. Return array baru
const combined1 = arr1.concat(arr2);  // ["A", "B", "C", "D"]

// SPREAD: Gabung dengan spread operator
// Algoritma:
// 1. Spread semua item dari array1
// 2. Spread semua item dari array2
// 3. Return array baru
const combined2 = [...arr1, ...arr2];  // ["A", "B", "C", "D"]

// APLIKASI: Merge sorted arrays
function mergeSorted(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;
    
    // Compare dan merge
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    
    // Append sisa
    return [...result, ...arr1.slice(i), ...arr2.slice(j)];
}

mergeSorted([1, 3, 5], [2, 4, 6]);  // [1, 2, 3, 4, 5, 6]
```

---

##### 5. MENCARI ITEM

**Tahapan Logika:**

```javascript
const arr = [5, 12, 8, 130, 44];

// FIND: Cari item pertama yang match kondisi
// Algoritma:
// 1. Loop dari index 0
// 2. Test setiap item dengan predicate function
// 3. Return item pertama yang return true
// 4. Return undefined jika tidak ada
const found = arr.find(item => item > 10);  // 12

// FINDINDEX: Cari index item yang match
// Algoritma:
// 1. Loop dari index 0
// 2. Test setiap item dengan predicate
// 3. Return index pertama yang return true
// 4. Return -1 jika tidak ada
const foundIndex = arr.findIndex(item => item > 10);  // 1

// INCLUDES: Cek apakah ada
// Algoritma:
// 1. Loop semua item
// 2. Compare dengan value yang dicari
// 3. Return true jika match
// 4. Return false jika tidak ada
const exists = arr.includes(8);  // true

// APLIKASI: Cari user by ID
const users = [
    { id: 1, nama: "Budi" },
    { id: 2, nama: "Siti" },
    { id: 3, nama: "Andi" }
];

const user = users.find(u => u.id === 2);  // {id: 2, nama: "Siti"}
const userIndex = users.findIndex(u => u.id === 2);  // 1
```

---

##### 6. TRANSFORMASI ARRAY (MAP)

**Tahapan Logika:**

```javascript
const arr = [1, 2, 3, 4];

// MAP: Transformasi setiap item
// Algoritma:
// 1. Buat array baru dengan length sama
// 2. Loop setiap item di array asli
// 3. Apply transform function ke setiap item
// 4. Simpan hasil transformasi ke array baru
// 5. Return array baru

const doubled = arr.map(item => item * 2);  // [2, 4, 6, 8]

// APLIKASI: Format data untuk display
const products = [
    { id: 1, name: "Laptop", price: 5000000 },
    { id: 2, name: "Mouse", price: 150000 }
];

const formattedProducts = products.map(p => ({
    ...p,
    formattedPrice: `Rp ${p.price.toLocaleString()}`,
    inStock: p.price > 0
}));
// [
//   {id:1, name:"Laptop", price:5000000, formattedPrice:"Rp 5.000.000", inStock:true},
//   {id:2, name:"Mouse", price:150000, formattedPrice:"Rp 150.000", inStock:true}
// ]
```

---

##### 7. FILTERING ARRAY

**Tahapan Logika:**

```javascript
const arr = [1, 2, 3, 4, 5, 6];

// FILTER: Ambil item yang match kondisi
// Algoritma:
// 1. Buat array kosong hasil
// 2. Loop setiap item di array asli
// 3. Test dengan predicate function
// 4. Jika true, push ke array hasil
// 5. Return array hasil

const evens = arr.filter(item => item % 2 === 0);  // [2, 4, 6]

// APLIKASI: Filter products by category and price
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 5000000 },
    { id: 2, name: "Mouse", category: "Electronics", price: 150000 },
    { id: 3, name: "Desk", category: "Furniture", price: 800000 }
];

const cheapElectronics = products.filter(p => 
    p.category === "Electronics" && p.price < 1000000
);
// [{id: 2, name: "Mouse", ...}]
```

---

##### 8. AKUMULASI (REDUCE)

**Tahapan Logika:**

```javascript
const arr = [1, 2, 3, 4, 5];

// REDUCE: Akumulasi jadi single value
// Algoritma:
// 1. Inisialisasi accumulator dengan initial value
// 2. Loop setiap item
// 3. Apply reducer function: (accumulator, currentItem)
// 4. Update accumulator dengan hasil
// 5. Return accumulator final

const sum = arr.reduce((acc, item) => acc + item, 0);  // 15

// APLIKASI: Calculate cart total
const cart = [
    { id: 1, name: "Laptop", price: 5000000, qty: 1 },
    { id: 2, name: "Mouse", price: 150000, qty: 2 },
    { id: 3, name: "Keyboard", price: 500000, qty: 1 }
];

const total = cart.reduce((acc, item) => {
    return acc + (item.price * item.qty);
}, 0);
// 5000000 + 300000 + 500000 = 5800000

// APLIKASI: Group by category
const grouped = cart.reduce((acc, item) => {
    const category = item.price > 1000000 ? "Expensive" : "Cheap";
    
    if (!acc[category]) {
        acc[category] = [];
    }
    
    acc[category].push(item);
    return acc;
}, {});
// { Expensive: [{...}], Cheap: [{...}, {...}] }
```

---

##### 9. SORTING ARRAY

**Tahapan Logika:**

```javascript
const arr = [5, 2, 8, 1, 9];

// SORT: Urutkan array
// Algoritma:
// 1. Compare pairs of elements
// 2. Swap jika tidak sesuai order
// 3. Repeat hingga sorted
// 4. Return array (mutated!)

// Ascending (kecil ke besar)
const asc = [...arr].sort((a, b) => a - b);  // [1, 2, 5, 8, 9]

// Descending (besar ke kecil)
const desc = [...arr].sort((a, b) => b - a);  // [9, 8, 5, 2, 1]

// APLIKASI: Sort products by price
const products = [
    { name: "Laptop", price: 5000000 },
    { name: "Mouse", price: 150000 },
    { name: "Keyboard", price: 500000 }
];

// Cheapest first
const cheapFirst = [...products].sort((a, b) => a.price - b.price);

// Most expensive first
const expensiveFirst = [...products].sort((a, b) => b.price - a.price);

// APLIKASI: Sort by string (alphabetical)
const names = ["Budi", "Andi", "Siti"];
const sorted = [...names].sort((a, b) => a.localeCompare(b));
// ["Andi", "Budi", "Siti"]
```

---

##### 10. ADVANCED ARRAY PATTERNS

**Tahapan Logika:**

```javascript
// PATTERN 1: Flattening nested array
const nested = [1, [2, 3], [4, [5, 6]]];

// Flat 1 level
const flat1 = nested.flat();  // [1, 2, 3, 4, [5, 6]]

// Flat all levels
const flatAll = nested.flat(Infinity);  // [1, 2, 3, 4, 5, 6]

// Manual flatten dengan reduce
function flatten(arr) {
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return [...acc, ...flatten(item)];
        }
        return [...acc, item];
    }, []);
}

// PATTERN 2: Remove duplicates
const withDuplicates = [1, 2, 2, 3, 3, 3, 4];

// Dengan Set
const unique = [...new Set(withDuplicates)];  // [1, 2, 3, 4]

// Dengan filter
const unique2 = withDuplicates.filter((item, index) => 
    withDuplicates.indexOf(item) === index
);

// PATTERN 3: Chunk array
function chunk(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

chunk([1, 2, 3, 4, 5, 6, 7], 3);  // [[1,2,3], [4,5,6], [7]]

// PATTERN 4: Zip arrays
function zip(...arrays) {
    const maxLength = Math.max(...arrays.map(arr => arr.length));
    const result = [];
    
    for (let i = 0; i < maxLength; i++) {
        result.push(arrays.map(arr => arr[i]));
    }
    
    return result;
}

zip([1, 2, 3], ["A", "B", "C"]);  // [[1,"A"], [2,"B"], [3,"C"]]
```

---

### ⚠️ Edge Cases dan Jebakan Umum

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **Array Mutation** | sort/splice mengubah array asli | Gunakan spread `[...arr]` sebelum mutate |
| **Sparse Array** | Array dengan "lubang" | Cek dengan `in` operator atau filter |
| **Length Property** | Length bisa di-set manual | Hati-hati saat manual set length |
| **Array-like Objects** | NodeList, arguments bukan Array | Gunakan `Array.from()` untuk convert |
| **Sort tanpa Comparator** | Sort alphabetis untuk number | Selalu gunakan comparator `(a,b) => a-b` |
| **Index Out of Bounds** | Akses index >= length | Cek length dulu atau gunakan optional chaining |

---

### 💡 Aplikasi Dunia Nyata

**1. Data Pagination:**

```javascript
// Algoritma pagination:
// 1. Hitung start dan end index
// 2. Slice data
// 3. Return paginated data + metadata

function paginate(data, page, pageSize) {
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    
    return {
        data: data.slice(start, end),
        pagination: {
            currentPage: page,
            pageSize,
            totalItems,
            totalPages,
            hasNext: page < totalPages,
            hasPrev: page > 1
        }
    };
}

const products = Array.from({length: 100}, (_, i) => ({id: i+1}));
paginate(products, 1, 10);
```

**2. Shopping Cart Operations:**

```javascript
// Algoritma cart management:
// 1. Add item (push atau update qty)
// 2. Remove item (filter)
// 3. Update qty (map)
// 4. Calculate total (reduce)

class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(product, qty = 1) {
        const existingIndex = this.items.findIndex(
            item => item.id === product.id
        );
        
        if (existingIndex > -1) {
            // Update qty jika sudah ada
            this.items[existingIndex].qty += qty;
        } else {
            // Add baru
            this.items.push({...product, qty});
        }
    }
    
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }
    
    updateQty(productId, qty) {
        this.items = this.items.map(item =>
            item.id === productId ? {...item, qty} : item
        );
    }
    
    getTotal() {
        return this.items.reduce(
            (total, item) => total + (item.price * item.qty), 
            0
        );
    }
}
```

**3. Search and Filter:**

```javascript
// Algoritma search + filter + sort:
// 1. Filter by search term
// 2. Filter by category/price
// 3. Sort by relevance/price
// 4. Paginate results

function searchProducts(products, filters) {
    let result = [...products];
    
    // Step 1: Search by name
    if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        result = result.filter(p => 
            p.name.toLowerCase().includes(searchLower)
        );
    }
    
    // Step 2: Filter by category
    if (filters.category) {
        result = result.filter(p => p.category === filters.category);
    }
    
    // Step 3: Filter by price range
    if (filters.minPrice !== undefined) {
        result = result.filter(p => p.price >= filters.minPrice);
    }
    if (filters.maxPrice !== undefined) {
        result = result.filter(p => p.price <= filters.maxPrice);
    }
    
    // Step 4: Sort
    if (filters.sortBy === "price_asc") {
        result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "price_desc") {
        result.sort((a, b) => b.price - a.price);
    }
    
    return result;
}
```

---

### 📊 Kompleksitas Waktu Operasi Array

| Operasi | Time Complexity | Space Complexity | Keterangan |
|----------|----------------|-----------------|------------|
| Access (`arr[i]`) | O(1) | O(1) | Constant time |
| Push/Pop | O(1)* | O(1) | Amortized constant |
| Shift/Unshift | O(n) | O(1) | Must reindex all |
| Slice | O(k) | O(k) | k = result length |
| Concat | O(n+m) | O(n+m) | Copy both arrays |
| Find/FindIndex | O(n) | O(1) | Linear search |
| Includes | O(n) | O(1) | Linear search |
| Map/Filter | O(n) | O(n) | New array |
| Reduce | O(n) | O(1) | Single pass |
| Sort | O(n log n) | O(log n) | Comparison sort |
| Flat | O(n) | O(n) | Copy all elements |

*\*Amortized - occasionally O(n) when resizing*

---

---

### 💎 4. Master Wadah (Functional Programming)

#### 📚 Level 11-20: Tantangan Functional Programming

| Level | Tantangan | Deskripsi |
|-------|-----------|-----------|
| LEVEL 11 | K-Frequent Elements | Temukan K elemen yang paling sering muncul dalam array |
| LEVEL 12 | Array Shuffle | Acak urutan elemen dalam array |
| LEVEL 13 | Cari Missing Number | Dalam array 1 sampai n, temukan angka yang hilang |
| LEVEL 14 | Array Partition | Partisi array menjadi dua bagian berdasarkan kondisi |
| LEVEL 15 | Sliding Window Maximum | Temukan nilai maksimum dalam setiap window berukuran k |
| LEVEL 16 | Array Rotation | Rotasi array ke kiri atau kanan sebanyak k langkah |
| LEVEL 17 | Remove Nth Element | Hapus elemen ke-n dari array tanpa metode bawaan |
| LEVEL 18 | Cartesian Product | Buat produk kartesian dari dua array |
| LEVEL 19 | Find Peak Element | Temukan elemen puncak (lebih besar dari tetangganya) |
| LEVEL 20 | Spiral Traversal | Jika array adalah matriks 2D, traversal secara spiral |

---

### 🎁 5. Sihir Benda (Object Utilities)

> Sangat penting saat bekerja dengan data JSON atau database.

---

## 🧬 Penjelasan Mendalam: Object dan Manipulasi Data

### 📖 Apa itu Object?

**Object (Benda)** adalah struktur data yang menyimpan **kumpulan properti** dalam bentuk pasangan **kunci-nilai** (key-value pairs). Jika Array adalah **daftar belanja** berurutan, Object adalah **kamus** yang menghubungkan kata (key) dengan definisinya (value).

```javascript
// Analogi: Kartu identitas mahasiswa
const mahasiswa = {
    // Key       : Value
    npm         : "2023001",
    nama        : "Budi Santoso",
    ipk         : 3.75,
    jurusan     : "Teknik Informatika",
    aktif       : true,
    mataKuliah  : ["Algoritma", "Basis Data", "Web Programming"]
};
```

**Mengapa Object Penting?**
1. **Modeling Data Dunia Nyata:** User, Produk, Transaksi, dll.
2. **Data Exchange Format:** JSON adalah Object JavaScript
3. **Lookup Cepat:** Akses data O(1) dengan key
4. **Struktur Data Kompleks:** Bisa nested (objek dalam objek)

---

### 🔬 Cara Membentuk Logika Algoritma untuk Manipulasi Object

#### 📚 Tahapan Berpikir Algoritmik

Saat menghadapi masalah manipulasi object, ikuti **framework berpikir** ini:

```
┌─────────────────────────────────────────────────────────┐
│  1. ANALISIS MASALAH                                    │
│     - Input: Object seperti apa?                        │
│     - Output: Hasil yang diharapkan?                    │
│     - Transformasi: Apa yang berubah?                   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  2. IDENTIFIKASI OPERASI                                │
│     - Baca properti? → obj.key / obj[key]              │
│     - Tambah properti? → obj.newKey = value            │
│     - Hapus properti? → delete obj.key                 │
│     - Loop semua properti? → Object.keys/entries       │
│     - Gabung object? → spread / Object.assign          │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  3. PILIH MANTRA YANG TEPAT                             │
│     - Object.keys()   → dapat semua key                │
│     - Object.values() → dapat semua value              │
│     - Object.entries()→ dapat pasangan [key, value]    │
│     - Spread {...obj} → copy/gabung                    │
│     - for...in / Object.entries() → loop               │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  4. IMPLEMENTASI LANGKAH DEMI LANGKAH                   │
│     - Tulis pseudocode                                  │
│     - Implementasi                                      │
│     - Test dengan contoh                                │
└─────────────────────────────────────────────────────────┘
```

---

#### 🔍 Manipulasi Object: Panduan Lengkap Step-by-Step

##### 1. MEMBUAT OBJECT BARU

**Tahapan Logika:**

```javascript
// Langkah 1: Identifikasi properti yang dibutuhkan
// Langkah 2: Tentukan tipe data setiap properti
// Langkah 3: Buat object literal

const produk = {
    id      : 1,              // Number
    nama    : "Laptop",       // String
    harga   : 5000000,        // Number
    stok    : 10,             // Number
    tersedia: true,           // Boolean
    kategori: "Elektronik"    // String
};
```

---

##### 2. MENGAKSES PROPERTI

**Tahapan Logika:**

```javascript
// CARA 1: Dot notation (untuk key yang pasti dan valid)
// Langkah: obj → titik → namaProperti
const namaProduk = produk.nama;  // "Laptop"

// CARA 2: Bracket notation (untuk key dinamis/spesial)
// Langkah: obj → kurung siku → key dalam string
const key = "harga";
const hargaProduk = produk[key];  // 5000000

// KAPAN pakai bracket?
// - Key mengandung spasi: obj["nama lengkap"]
// - Key dinamis: obj[namaVariabel]
// - Key angka: obj[0]
```

---

##### 3. MENAMBAH/MENGUPDATE PROPERTI

**Tahapan Logika:**

```javascript
// MENAMBAH PROPERTI BARU
// Langkah 1: Pastikan key belum ada
// Langkah 2: Assign nilai
produk.diskon = 10;  // Tambah properti diskon
produk.stok = 15;    // Update stok dari 10 ke 15

// MENAMBAH DENGAN KONDISI
// Algoritma:
// 1. Cek kondisi
// 2. Jika true, tambah properti
if (produk.harga > 1000000) {
    produk.kategori = "Premium";
}

// MENAMBAH HASIL PERHITUNGAN
// Algoritma:
// 1. Hitung nilai
// 2. Simpan sebagai properti baru
produk.hargaSetelahDiskon = produk.harga - (produk.harga * produk.diskon / 100);
```

---

##### 4. MENGHAPUS PROPERTI

**Tahapan Logika:**

```javascript
// HAPUS DENGAN delete
// Langkah 1: Identifikasi properti yang akan dihapus
// Langkah 2: Gunakan operator delete
delete produk.diskon;  // Hapus properti diskon

// HAPUS DENGAN KONDISI
// Algoritma:
// 1. Loop semua properti
// 2. Cek kondisi
// 3. Jika kondisi terpenuhi, hapus
for (const key in produk) {
    if (produk[key] === undefined || produk[key] === null) {
        delete produk[key];
    }
}
```

---

##### 5. LOOPING OBJECT

**Tahapan Logika:**

```javascript
// CARA 1: for...in (loop semua key)
// Algoritma:
// 1. Untuk setiap key dalam object
// 2. Akses value dengan obj[key]
// 3. Lakukan operasi
for (const key in produk) {
    console.log(`${key}: ${produk[key]}`);
}

// CARA 2: Object.entries() (dapat [key, value])
// Algoritma:
// 1. Ubah object jadi array of [key, value]
// 2. Loop dengan for...of
// 3. Destructure [key, value]
for (const [key, value] of Object.entries(produk)) {
    console.log(`${key} = ${value}`);
}

// CARA 3: Object.keys() + forEach
// Algoritma:
// 1. Ambil semua key jadi array
// 2. Loop array key
// 3. Akses value dengan obj[key]
Object.keys(produk).forEach(key => {
    console.log(`${key}: ${produk[key]}`);
});
```

---

##### 6. MENGGABUNGKAN OBJECT

**Tahapan Logika:**

```javascript
const dataPribadi = { nama: "Budi", umur: 25 };
const dataAlamat = { kota: "Jakarta", negara: "Indonesia" };

// CARA 1: Spread Operator (RECOMMENDED)
// Algoritma:
// 1. Buat object baru
// 2. Spread semua properti dari object1
// 3. Spread semua properti dari object2
// 4. Jika ada key yang sama, yang terakhir menang
const userLengkap = { ...dataPribadi, ...dataAlamat };
// Hasil: { nama: "Budi", umur: 25, kota: "Jakarta", negara: "Indonesia" }

// CARA 2: Object.assign()
// Algoritma:
// 1. Buat target object (biasanya {} kosong)
// 2. Copy semua properti dari source objects
// 3. Return target
const userLengkap2 = Object.assign({}, dataPribadi, dataAlamat);

// CARA 3: Spread dengan Override
// Algoritma:
// 1. Spread object dasar
// 2. Override properti tertentu
const userUpdate = { ...dataPribadi, umur: 26, kota: "Bandung" };
// Hasil: { nama: "Budi", umur: 26, kota: "Bandung" }
```

---

##### 7. MENG-CLONE OBJECT

**Tahapan Logika:**

```javascript
const userAsli = { nama: "Budi", umur: 25 };

// SHALLOW COPY (copy 1 level)
// Algoritma:
// 1. Buat object baru
// 2. Copy semua properti level 1
const userCopy = { ...userAsli };

// DEEP COPY (copy semua level/nested)
// Algoritma:
// 1. Serialize ke JSON string
// 2. Parse kembali ke object
const userDeepCopy = JSON.parse(JSON.stringify(userAsli));

// PERBEDAAN:
// Shallow: Nested object masih reference yang sama
// Deep: Semua level ter-copy sepenuhnya
```

---

##### 8. TRANSFORMASI OBJECT KE ARRAY

**Tahapan Logika:**

```javascript
const hargaProduk = {
    apel: 5000,
    jeruk: 3000,
    mangga: 7000
};

// KE ARRAY OF KEYS
// Algoritma:
// 1. Ambil semua key
// 2. Simpan sebagai array
const semuaBuah = Object.keys(hargaProduk);
// ["apel", "jeruk", "mangga"]

// KE ARRAY OF VALUES
// Algoritma:
// 1. Ambil semua value
// 2. Simpan sebagai array
const semuaHarga = Object.values(hargaProduk);
// [5000, 3000, 7000]

// KE ARRAY OF [KEY, VALUE] PAIRS
// Algoritma:
// 1. Ambil semua pasangan [key, value]
// 2. Simpan sebagai array of arrays
const semuaPasangan = Object.entries(hargaProduk);
// [["apel", 5000], ["jeruk", 3000], ["mangga", 7000]]

// TRANSFORMASI DENGAN MAP
// Algoritma:
// 1. Entries jadi array
// 2. Map ke format yang diinginkan
const daftarHarga = Object.entries(hargaProduk).map(([buah, harga]) => ({
    nama: buah,
    harga: harga
}));
// [{nama: "apel", harga: 5000}, {nama: "jeruk", harga: 3000}, ...]
```

---

##### 9. TRANSFORMASI ARRAY KE OBJECT

**Tahapan Logika:**

```javascript
const daftarProduk = [
    { id: 1, nama: "Laptop" },
    { id: 2, nama: "Mouse" },
    { id: 3, nama: "Keyboard" }
];

// KE OBJECT DENGAN ID SEBAGAI KEY
// Algoritma:
// 1. Loop array dengan reduce
// 2. Untuk setiap item, buat entry dengan id sebagai key
// 3. Return accumulator
const produkById = daftarProduk.reduce((acc, produk) => {
    acc[produk.id] = produk;
    return acc;
}, {});
// Hasil: { 1: {id:1, nama:"Laptop"}, 2: {id:2, nama:"Mouse"}, ... }

// DENGAN Object.fromEntries()
// Algoritma:
// 1. Map array jadi array of [key, value]
// 2. Convert ke object dengan fromEntries
const produkById2 = Object.fromEntries(
    daftarProduk.map(p => [p.id, p])
);
```

---

##### 10. GROUPING OBJECT

**Tahapan Logika:**

```javascript
const transaksi = [
    { id: 1, kategori: "Makanan", jumlah: 50000 },
    { id: 2, kategori: "Transport", jumlah: 30000 },
    { id: 3, kategori: "Makanan", jumlah: 45000 },
    { id: 4, kategori: "Hiburan", jumlah: 100000 }
];

// GROUPING DENGAN Object.groupBy() (ES2024)
// Algoritma:
// 1. Tentukan property untuk grouping
// 2. Panggil Object.groupBy dengan callback
const groupedByKategori = Object.groupBy(transaksi, t => t.kategori);

// GROUPING MANUAL DENGAN reduce
// Algoritma:
// 1. Loop dengan reduce, initial value {}
// 2. Untuk setiap item:
//    a. Ambil key grouping (kategori)
//    b. Jika key belum ada, buat array kosong
//    c. Push item ke array kategori tersebut
// 3. Return accumulator
const groupedByKategoriManual = transaksi.reduce((acc, t) => {
    const kategori = t.kategori;
    
    // Jika kategori belum ada, buat array kosong
    if (!acc[kategori]) {
        acc[kategori] = [];
    }
    
    // Push transaksi ke kategori
    acc[kategori].push(t);
    
    return acc;
}, {});

// Hasil:
// {
//     Makanan: [{id:1,...}, {id:3,...}],
//     Transport: [{id:2,...}],
//     Hiburan: [{id:4,...}]
// }
```

---

##### 11. AGGREGATION (HITUNG STATISTIK)

**Tahapan Logika:**

```javascript
const penjualan = [
    { produk: "Laptop", terjual: 5, harga: 5000000 },
    { produk: "Mouse", terjual: 20, harga: 150000 },
    { produk: "Keyboard", terjual: 15, harga: 500000 }
];

// HITUNG TOTAL PENDAPATAN
// Algoritma:
// 1. Loop dengan reduce
// 2. Untuk setiap item, hitung subtotal (terjual × harga)
// 3. Akumulasi ke total
// 4. Return total
const totalPendapatan = penjualan.reduce((total, item) => {
    return total + (item.terjual * item.harga);
}, 0);

// HITUNG STATISTIK KOMPLEKS
// Algoritma:
// 1. Loop dengan reduce
// 2. Akumulasi multiple metrics sekaligus
// 3. Return object statistik
const statistik = penjualan.reduce((acc, item) => {
    const subtotal = item.terjual * item.harga;
    
    acc.totalTerjual += item.terjual;
    acc.totalPendapatan += subtotal;
    acc.jumlahProduk++;
    acc.produkTerlaris = item.terjual > (acc.produkTerlaris?.terjual || 0) 
        ? item 
        : acc.produkTerlaris;
    
    return acc;
}, {
    totalTerjual: 0,
    totalPendapatan: 0,
    jumlahProduk: 0,
    produkTerlaris: null
});
```

---

##### 12. FILTERING OBJECT PROPERTIES

**Tahapan Logika:**

```javascript
const user = {
    id: 1,
    nama: "Budi",
    email: "budi@email.com",
    password: "secret123",
    role: "admin",
    createdAt: "2024-01-01"
};

// FILTER PROPERTI TERTENTU (PICK)
// Algoritma:
// 1. Tentukan keys yang diinginkan
// 2. Loop keys tersebut
// 3. Untuk setiap key, ambil value dari object asli
// 4. Bangun object baru
const keysYangDiinginkan = ["id", "nama", "email"];
const userPublic = keysYangDiinginkan.reduce((acc, key) => {
    acc[key] = user[key];
    return acc;
}, {});

// Atau dengan Object.fromEntries
const userPublic2 = Object.fromEntries(
    keysYangDiinginkan.map(key => [key, user[key]])
);

// HAPUS PROPERTI TERTENTU (OMIT)
// Algoritma:
// 1. Tentukan keys yang akan dihapus
// 2. Loop semua keys object asli
// 3. Jika key tidak ada di list yang dihapus, masukkan ke object baru
// 4. Return object baru
const keysYangDihapus = ["password", "createdAt"];
const userSafe = Object.fromEntries(
    Object.entries(user).filter(([key]) => !keysYangDihapus.includes(key))
);

// FILTER BERDASARKAN KONDISI
// Algoritma:
// 1. Entries jadi array [key, value]
// 2. Filter berdasarkan kondisi pada value
// 3. FromEntries kembali ke object
const userNumeric = Object.fromEntries(
    Object.entries(user).filter(([key, value]) => typeof value === "number")
);
```

---

### ⚠️ Edge Cases dan Jebakan Umum

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **Reference vs Value** | Object di-copy by reference, bukan by value | Gunakan spread `{...obj}` atau `JSON.parse(JSON.stringify(obj))` |
| **Nested Object** | Spread hanya shallow copy (1 level) | Gunakan deep clone atau library seperti lodash |
| **Key dengan Spasi** | `obj.nama lengkap` error | Gunakan `obj["nama lengkap"]` |
| **Undefined Property** | Akses properti yang tidak ada = undefined | Cek dengan `if (obj.key)` atau optional chaining `obj?.key` |
| **Prototype Pollution** | Loop `for...in` termasuk prototype | Gunakan `hasOwnProperty()` atau `Object.entries()` |
| **Order Tidak Dijamin** | Object key order tidak selalu konsisten | Gunakan Array jika order penting |

---

### 💡 Aplikasi Dunia Nyata

**1. API Response Handler:**

```javascript
// Transform API response ke format yang dibutuhkan UI
const apiResponse = {
    user_id: 1,
    user_name: "Budi",
    user_email: "budi@email.com",
    created_at: "2024-01-01T00:00:00Z"
};

// Algoritma transformasi:
// 1. Pick fields yang dibutuhkan
// 2. Rename keys (snake_case → camelCase)
// 3. Transform value (date string → Date object)
const userData = {
    id: apiResponse.user_id,
    nama: apiResponse.user_name,
    email: apiResponse.user_email,
    joinedDate: new Date(apiResponse.created_at)
};
```

**2. Form Data Processor:**

```javascript
// Kumpulkan data form jadi object
// Algoritma:
// 1. Ambil semua form field
// 2. Bersihkan value (trim, dll)
// 3. Validasi
// 4. Bangun object data
const formData = {
    nama: document.getElementById('nama').value.trim(),
    email: document.getElementById('email').value.trim().toLowerCase(),
    umur: parseInt(document.getElementById('umur').value) || 0
};

// Validasi
if (!formData.nama || !formData.email || formData.umur === 0) {
    throw new Error("Data tidak lengkap");
}
```

**3. Shopping Cart Calculator:**

```javascript
const cart = {
    items: [
        { id: 1, nama: "Laptop", harga: 5000000, qty: 1 },
        { id: 2, nama: "Mouse", harga: 150000, qty: 2 }
    ],
    diskon: 10,  // persen
    pajak: 11    // persen
};

// Algoritma perhitungan:
// 1. Hitung subtotal per item
// 2. Jumlahkan semua subtotal
// 3. Hitung diskon
// 4. Hitung pajak
// 5. Hitung total akhir
const cartSummary = cart.items.reduce((acc, item) => {
    const subtotal = item.harga * item.qty;
    acc.subtotal += subtotal;
    acc.totalQty += item.qty;
    return acc;
}, { subtotal: 0, totalQty: 0 });

cartSummary.diskonAmount = cartSummary.subtotal * (cart.diskon / 100);
cartSummary.afterDiscount = cartSummary.subtotal - cartSummary.diskonAmount;
cartSummary.pajakAmount = cartSummary.afterDiscount * (cart.pajak / 100);
cartSummary.total = cartSummary.afterDiscount + cartSummary.pajakAmount;
```

---

### 📊 Kompleksitas Waktu Operasi Object

| Operasi | Time Complexity | Keterangan |
|----------|----------------|------------|
| Akses properti (`obj.key`) | O(1) | Constant time |
| Tambah properti | O(1) | Constant time |
| Hapus properti (`delete`) | O(1)* | Amortized constant |
| Loop semua properti | O(n) | n = jumlah properti |
| Cek key ada (`key in obj`) | O(1) | Constant time |
| Object.keys/values/entries | O(n) | Harus copy semua properti |

---

#### 🔑 Object.keys(obj) - DAFTAR KUNCI

Mendapatkan sebuah **Array** berisi semua nama properti (kunci) dari sebuah objek.

**Contoh:** `Object.keys({nama: "Budi", umur: 20})` → `["nama", "umur"]`

---

#### 📦 Object.values(obj) - DAFTAR ISI

Mendapatkan sebuah **Array** berisi semua nilai dari sebuah objek.

**Contoh:** `Object.values({nama: "Budi", umur: 20})` → `["Budi", 20]`

---

#### 🔗 Object.entries(obj) - PASANGAN

Mendapatkan sebuah **Array** berisi pasangan `[key, value]`. Berguna untuk looping objek dengan `for...of`.

**Contoh:** `for (const [kunci, nilai] of Object.entries(obj)) { ... }`

---

#### 🔄 Object.assign() - PENGGABUNG

Menyalin properti dari satu atau lebih objek sumber ke objek target.

**Contoh:** `Object.assign({}, obj1, obj2)`

---

#### ✨ Spread Operator (...) - KLONING/GABUNG

Cara modern untuk menggabungkan dua objek atau membuat salinan (copy) agar data asli tidak rusak. Lebih sering digunakan daripada `Object.assign`.

**Contoh:** `const userBaru = { ...userLama, status: "Aktif" }`

---

#### 🔄 Object.create(proto) - PROTOTIPE

Membuat objek baru dengan prototipe tertentu.

**Contoh:** `const child = Object.create(parent)`

---

#### ⚙️ Object.defineProperty() - DEFINISI

Menambahkan atau mengubah properti objek dengan deskripsi rinci.

**Contoh:** `Object.defineProperty(obj, 'prop', { value: 42, writable: true })`

---

#### ⚙️ Object.defineProperties() - BANYAK DEFINISI

Menambahkan atau mengubah beberapa properti sekaligus.

**Contoh:** `Object.defineProperties(obj, { prop1: { value: 42 }, prop2: { value: 'hello' } })`

---

#### ❄️ Object.freeze(obj) - MANTRA PEMBEKU

Mengunci objek agar tidak bisa dirubah isinya sama sekali. Maksimum proteksi!

---

### 🧠 Latihan Logika: Laporan Data Dinamis

> **🎯 Skenario: Ekstrak Data untuk Dashboard**
>
> 1. **Header:** Pakai `Object.keys()` untuk label kolom.
> 2. **Konten:** Pakai `Object.values()` untuk isi sel-nya.

---

### ⚔️ Latihan Bertahap: Manipulasi Struktur

#### LEVEL 1: Update Stok

**Tantangan:** Tambah stok apel di objek gudang

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Identifikasi Objek:** Punya objek `gudang = { apel: 10, jeruk: 5 }`
> 2. **Tentukan Operasi:** Update nilai properti yang sudah ada
> 3. **Akses Properti:** Gunakan dot notation `gudang.apel`
> 4. **Hitung Nilai Baru:** Nilai lama + tambahan
> 5. **Assign Nilai:** `gudang.apel = gudang.apel + 5`
>
> ```javascript
> const gudang = { apel: 10, jeruk: 5 };
> 
> // Langkah 1: Baca nilai saat ini
> const stokApelSaatIni = gudang.apel;  // 10
> 
> // Langkah 2: Hitung nilai baru
> const stokApelBaru = stokApelSaatIni + 5;  // 15
> 
> // Langkah 3: Update properti
> gudang.apel = stokApelBaru;
> 
> // Atau langsung:
> gudang.apel += 5;
> 
> console.log(gudang);  // { apel: 15, jeruk: 5 }
> ```

---

#### LEVEL 2: Gabung Profil

**Tantangan:** Gunakan Spreading untuk gabung data user

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Identifikasi Source Objects:** Ada 2+ objek yang akan digabung
> 2. **Tentukan Priority:** Jika ada key yang sama, yang terakhir menang
> 3. **Gunakan Spread Operator:** `{ ...obj1, ...obj2 }`
> 4. **Simpan Hasil:** Assign ke variabel baru
>
> ```javascript
> const infoPribadi = {
>     nama: "Budi Santoso",
>     umur: 25,
>     email: "budi@email.com"
> };
> 
> const infoAlamat = {
>     jalan: "Jl. Merdeka No. 1",
>     kota: "Jakarta",
>     negara: "Indonesia"
> };
> 
> const infoAkun = {
>     role: "admin",
>     status: "active"
> };
> 
> // Langkah 1: Buat object baru dengan spread
> // Urutan penting! Yang terakhir override yang sebelumnya
> const userLengkap = {
>     ...infoPribadi,    // Spread properti pribadi
>     ...infoAlamat,     // Spread properti alamat
>     ...infoAkun        // Spread properti akun
> };
> 
> // Hasil: {
> //     nama: "Budi Santoso",
> //     umur: 25,
> //     email: "budi@email.com",
> //     jalan: "Jl. Merdeka No. 1",
> //     kota: "Jakarta",
> //     negara: "Indonesia",
> //     role: "admin",
> //     status: "active"
> // }
> 
> // OVERRIDE PROPERTI
> const userUpdate = {
>     ...userLengkap,
>     status: "inactive",  // Override status
>     kota: "Bandung"      // Override kota
> };
> ```

---

#### LEVEL 3: Hitung Total Aset

**Tantangan:** Total belanjaan dari objek harga

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Identifikasi Data:** Object dengan nilai numerik
> 2. **Tentukan Output:** Single number (total)
> 3. **Pilih Mantra:** `Object.values()` + `reduce()` atau `forEach`
> 4. **Implementasi:** Loop semua value dan akumulasi
>
> ```javascript
> const hargaBuah = {
>     apel: 5000,
>     jeruk: 3000,
>     mangga: 7000,
>     anggur: 15000
> };
> 
> // CARA 1: Object.values() + reduce()
> // Langkah 1: Ambil semua values jadi array
> const semuaHarga = Object.values(hargaBuah);  // [5000, 3000, 7000, 15000]
> 
> // Langkah 2: Reduce jadi single value
> const total = semuaHarga.reduce((akumulator, hargaSaatIni) => {
>     return akumulator + hargaSaatIni;
> }, 0);
> 
> // CARA 2: Object.values() + forEach
> let total2 = 0;
> Object.values(hargaBuah).forEach(harga => {
>     total2 += harga;
> });
> 
> // CARA 3: for...in loop
> let total3 = 0;
> for (const key in hargaBuah) {
>     total3 += hargaBuah[key];
> }
> 
> console.log(total);  // 30000
> ```

---

#### LEVEL 4: Pembersih Object

**Tantangan:** Hapus properti yang nilainya `null` atau `undefined`

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Identifikasi Masalah:** Object punya properti dengan nilai null/undefined
> 2. **Tentukan Output:** Object baru tanpa properti null/undefined
> 3. **Pilih Mantra:** `Object.entries()` + `filter()` + `Object.fromEntries()`
> 4. **Implementasi:**
>    - Convert object ke array of [key, value]
>    - Filter hanya yang value-nya bukan null/undefined
>    - Convert kembali ke object
>
> ```javascript
> const dataKotor = {
>     nama: "Budi",
>     email: null,
>     umur: 25,
>     alamat: undefined,
>     kota: "Jakarta",
>     telepon: null
> };
> 
> // Langkah 1: Convert ke array of [key, value]
> const entries = Object.entries(dataKotor);
> // [["nama", "Budi"], ["email", null], ["umur", 25], ...]
> 
> // Langkah 2: Filter hanya yang value-nya valid
> const entriesBersih = entries.filter(([key, value]) => {
>     return value !== null && value !== undefined;
> });
> 
> // Langkah 3: Convert kembali ke object
> const dataBersih = Object.fromEntries(entriesBersih);
> 
> // ATAU DALAM SATU BARIS (CHAINING):
> const dataBersih2 = Object.fromEntries(
>     Object.entries(dataKotor)
>         .filter(([key, value]) => value !== null && value !== undefined)
> );
> 
> console.log(dataBersih);
> // { nama: "Budi", umur: 25, kota: "Jakarta" }
> ```

---

#### LEVEL 5: Tukar Kunci-Nilai (Object Invert)

**Tantangan:** Balikkan kunci dan nilai sebuah objek

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Identifikasi Transformasi:** Key jadi value, value jadi key
> 2. **Pilih Mantra:** `Object.entries()` + `map()` + `Object.fromEntries()`
> 3. **Implementasi:**
>    - Entries dapat [key, value]
>    - Map/tukar jadi [value, key]
>    - FromEntries kembali ke object
>
> ```javascript
> const kodeNegara = {
>     "ID": "Indonesia",
>     "MY": "Malaysia",
>     "SG": "Singapore",
>     "TH": "Thailand"
> };
> 
> // Langkah 1: Dapatkan semua pasangan [key, value]
> const entries = Object.entries(kodeNegara);
> // [["ID", "Indonesia"], ["MY", "Malaysia"], ...]
> 
> // Langkah 2: Tukar posisi jadi [value, key]
> const entriesTukar = entries.map(([key, value]) => [value, key]);
> // [["Indonesia", "ID"], ["Malaysia", "MY"], ...]
> 
> // Langkah 3: Convert kembali ke object
> const negaraKode = Object.fromEntries(entriesTukar);
> 
> // ATAU DALAM SATU BARIS:
> const negaraKode2 = Object.fromEntries(
>     Object.entries(kodeNegara).map(([key, value]) => [value, key])
> );
> 
> console.log(negaraKode);
> // { Indonesia: "ID", Malaysia: "MY", Singapore: "SG", Thailand: "TH" }
> ```

---

#### LEVEL 6: Hitung Karakter (Character Frequency)

**Tantangan:** Hitung frekuensi setiap karakter dalam string

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Input:** String
> 2. **Output:** Object dengan karakter sebagai key, count sebagai value
> 3. **Algoritma:**
>    - Split string jadi array karakter
>    - Loop dengan reduce
>    - Untuk setiap karakter:
>      - Jika belum ada di accumulator, inisialisasi dengan 0
>      - Increment count
>    - Return accumulator
>
> ```javascript
> const teks = "hello world";
> 
> // Langkah 1: Split string jadi array karakter
> const karakterArray = teks.split("");  // ["h", "e", "l", "l", "o", " ", "w", ...]
> 
> // Langkah 2: Reduce jadi object frequency
> const frequency = karakterArray.reduce((acc, karakter) => {
>     // Jika karakter belum ada, inisialisasi dengan 0
>     if (!acc[karakter]) {
>         acc[karakter] = 0;
>     }
>     
>     // Increment count
>     acc[karakter]++;
>     
>     return acc;
> }, {});
> 
> // ATAU dengan short circuit:
> const frequency2 = karakterArray.reduce((acc, karakter) => {
>     acc[karakter] = (acc[karakter] || 0) + 1;
>     return acc;
> }, {});
> 
> console.log(frequency);
> // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
> ```

---

#### LEVEL 7: Grouping Produk by Kategori

**Tantangan:** Kelompokkan array produk berdasarkan kategori

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Input:** Array of objects dengan property kategori
> 2. **Output:** Object dengan kategori sebagai key, array produk sebagai value
> 3. **Algoritma:**
>    - Loop dengan reduce, initial value {}
>    - Untuk setiap produk:
>      - Ambil nilai kategori
>      - Jika kategori belum ada di accumulator, buat array kosong
>      - Push produk ke array kategori tersebut
>    - Return accumulator
>
> ```javascript
> const produkList = [
>     { id: 1, nama: "Laptop", kategori: "Elektronik", harga: 5000000 },
>     { id: 2, nama: "Mouse", kategori: "Elektronik", harga: 150000 },
>     { id: 3, nama: "Meja", kategori: "Furniture", harga: 800000 },
>     { id: 4, nama: "Kursi", kategori: "Furniture", harga: 500000 },
>     { id: 5, nama: "Buku", kategori: "Buku", harga: 50000 }
> ];
> 
> // Langkah 1: Reduce dengan initial value object kosong
> const groupedByKategori = produkList.reduce((accumulator, produk) => {
>     // Langkah 2: Ambil kategori dari produk saat ini
>     const kategori = produk.kategori;
>     
>     // Langkah 3: Jika kategori belum ada, buat array kosong
>     if (!accumulator[kategori]) {
>         accumulator[kategori] = [];
>     }
>     
>     // Langkah 4: Push produk ke array kategori yang sesuai
>     accumulator[kategori].push(produk);
>     
>     // Langkah 5: Return accumulator untuk iterasi berikutnya
>     return accumulator;
>     
> }, {});  // Initial value: object kosong
> 
> console.log(groupedByKategori);
> // {
> //     Elektronik: [
> //         { id: 1, nama: "Laptop", ... },
> //         { id: 2, nama: "Mouse", ... }
> //     ],
> //     Furniture: [
> //         { id: 3, nama: "Meja", ... },
> //         { id: 4, nama: "Kursi", ... }
> //     ],
> //     Buku: [
> //         { id: 5, nama: "Buku", ... }
> //     ]
> // }
> ```

---

#### LEVEL 8: Deep Merge Two Objects

**Tantangan:** Gabungkan dua objek dengan nested properties secara mendalam

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Input:** Dua objek dengan nested properties
> 2. **Output:** Object baru yang merupakan merge mendalam
> 3. **Algoritma:**
>    - Loop semua keys dari kedua objek
>    - Untuk setiap key:
>      - Jika value adalah object (dan bukan null), recurse
>      - Jika tidak, ambil value dari object kedua (atau pertama jika tidak ada di kedua)
>    - Return object hasil merge
>
> ```javascript
> const configDefault = {
>     database: {
>         host: "localhost",
>         port: 5432,
>         name: "mydb"
>     },
>     server: {
>         port: 3000,
>         timeout: 5000
>     }
> };
> 
> const configProduction = {
>     database: {
>         host: "prod.db.example.com",
>         port: 5432
>     },
>     server: {
>         timeout: 10000
>     }
> };
> 
> // Fungsi deep merge recursive
> function deepMerge(obj1, obj2) {
>     // Langkah 1: Buat object hasil
>     const result = { ...obj1 };  // Start dengan copy obj1
>     
>     // Langkah 2: Loop semua keys di obj2
>     for (const key in obj2) {
>         // Langkah 3: Cek jika key ada di kedua object
>         if (key in result) {
>             // Langkah 4: Jika kedua value adalah object, merge recursively
>             if (
>                 typeof result[key] === 'object' && 
>                 result[key] !== null &&
>                 typeof obj2[key] === 'object' && 
>                 obj2[key] !== null
>             ) {
>                 result[key] = deepMerge(result[key], obj2[key]);
>             } else {
>                 // Jika tidak, override dengan value dari obj2
>                 result[key] = obj2[key];
>             }
>         } else {
>             // Jika key hanya ada di obj2, tambahkan
>             result[key] = obj2[key];
>         }
>     }
>     
>     return result;
> }
> 
> const configFinal = deepMerge(configDefault, configProduction);
> 
> console.log(configFinal);
> // {
> //     database: {
> //         host: "prod.db.example.com",  // Override
> //         port: 5432,                    // From default (tidak di-override)
> //         name: "mydb"                   // From default
> //     },
> //     server: {
> //         port: 3000,    // From default
> //         timeout: 10000 // Override
> //     }
> // }
> ```

---

### ⌛ 6. Sihir Waktu & Aliran (Control Flow & Async)

> Bagian ini akan membahas control flow dan async programming.

---

### 🔮 Object Methods Lengkap

| Method | Deskripsi | Contoh |
|--------|-----------|--------|
| `Object.create(proto)` | Membuat objek baru dengan prototipe tertentu | `const child = Object.create(parent)` |
| `Object.defineProperty()` | Menambahkan/mengubah properti dengan deskripsi rinci | `Object.defineProperty(obj, 'prop', { value: 42 })` |
| `Object.defineProperties()` | Menambahkan beberapa properti sekaligus | `Object.defineProperties(obj, { p1: {...}, p2: {...} })` |
| `Object.getOwnPropertyDescriptor()` | Mendapatkan deskripsi properti dari objek | `Object.getOwnPropertyDescriptor(obj, 'prop')` |
| `Object.getOwnPropertyNames()` | Array nama semua properti (termasuk non-enumerable) | `Object.getOwnPropertyNames(obj)` |
| `Object.getOwnPropertySymbols()` | Array semua simbol properti dari objek | `Object.getOwnPropertySymbols(obj)` |
| `Object.getPrototypeOf()` | Mendapatkan prototipe dari objek | `Object.getPrototypeOf(obj)` |
| `Object.setPrototypeOf()` | Mengatur prototipe dari objek | `Object.setPrototypeOf(child, parent)` |
| `Object.freeze()` | Membekukan objek agar tidak bisa diubah | `Object.freeze(obj)` |
| `Object.seal()` | Properti tidak bisa ditambah/hapus | `Object.seal(obj)` |
| `Object.preventExtensions()` | Mencegah penambahan properti baru | `Object.preventExtensions(obj)` |
| `Object.isFrozen()` | Memeriksa apakah objek dibekukan | `Object.isFrozen(obj)` |
| `Object.isSealed()` | Memeriksa apakah objek disegel | `Object.isSealed(obj)` |
| `Object.isExtensible()` | Memeriksa apakah objek bisa ditambah properti | `Object.isExtensible(obj)` |
| `Object.fromEntries()` | Membuat objek dari pasangan kunci-nilai | `Object.fromEntries([['a', 1], ['b', 2]])` |
| `hasOwnProperty()` | Cek properti milik objek (bukan prototipe) | `obj.hasOwnProperty('prop')` |
| `Object.hasOwn()` | Versi statis dari hasOwnProperty (lebih aman) | `Object.hasOwn(obj, 'prop')` |
| `Object.groupBy()` | Mengelompokkan elemen berdasarkan callback | `Object.groupBy(items, ({type}) => type)` |

---

#### 📚 Level 13-20: Tantangan Functional Programming Lanjutan

| Level | Tantangan | Deskripsi |
|-------|-----------|-----------|
| LEVEL 13 | Unflatten Object | Kebalikan dari flatten object - ubah objek datar dengan kunci path menjadi objek bersarang |
| LEVEL 14 | Object Pick | Ambil hanya properti tertentu dari objek berdasarkan array kunci |
| LEVEL 15 | Object Omit | Kebalikan dari pick - hapus properti tertentu dari objek berdasarkan array kunci |
| LEVEL 16 | Object Map Values | Terapkan fungsi ke setiap nilai dalam objek dan kembalikan objek baru |
| LEVEL 17 | Object Map Keys | Terapkan fungsi ke setiap kunci dalam objek dan kembalikan objek baru |
| LEVEL 18 | Object Invert | Balikkan objek sehingga nilai menjadi kunci dan kunci menjadi nilai |
| LEVEL 19 | Object Defaults | Gabungkan dua objek dengan nilai default jika nilai kedua tidak ada |
| LEVEL 20 | Deep Equals | Bandingkan dua objek secara mendalam untuk mengecek apakah nilainya sama |

---

### 🧠 Latihan Logika: Deep Dive Object Methods

**1. Pewarisan Karakter Game (Object.create)**

> **Skenario:** Anda membuat game RPG. Semua karakter punya HP dan method `serang()`. Buat karakter 'Penyihir' yang mewarisi sifat dasar tapi punya method tambahan `mantra()`.
>
> **Tahapan Logika:**
> 1. Buat objek `KarakterDasar` dengan properti `hp: 100` dan fungsi `serang()`.
> 2. Gunakan `Object.create(KarakterDasar)` untuk membuat `Penyihir`.
> 3. Tambahkan properti `mana: 50` dan fungsi `mantra()` ke `Penyihir`.
> 4. Cek apakah `Penyihir` bisa menggunakan `serang()` (warisan) dan `mantra()` (milik sendiri).

**2. Saldo Bank Anti-Curang (Object.defineProperty)**

> **Skenario:** Anda membuat sistem bank. Saldo nasabah tidak boleh diubah secara langsung (misal: `nasabah.saldo = 1000000`), tapi harus bisa dibaca.
>
> **Tahapan Logika:**
> 1. Buat objek kosong `akunBank`.
> 2. Gunakan `Object.defineProperty` untuk menambahkan properti `saldo`.
> 3. Set konfigurasi: `value: 5000`, `writable: false` (tidak bisa tulis), `enumerable: true` (bisa dilihat).
> 4. Coba ubah saldo secara paksa dan log hasilnya untuk melihat apakah berubah.

**3. Konfigurasi Aplikasi Abadi (Object.freeze)**

> **Skenario:** Aplikasi Anda memiliki pengaturan server yang tidak boleh diubah oleh kode manapun selama runtime.
>
> **Tahapan Logika:**
> 1. Buat objek `appConfig` dengan `apiUrl` dan `port`.
> 2. Gunakan `Object.freeze(appConfig)` untuk membekukannya.
> 3. Coba ubah `appConfig.port` atau tambah properti baru.
> 4. Gunakan `Object.isFrozen()` untuk memverifikasi status objek.

**4. Pengelompokan Nilai Siswa (Object.groupBy)**

> **Skenario:** Anda punya array data siswa dengan nilai ujian. Kelompokkan mereka menjadi 'Lulus' dan 'Remedial'.
>
> **Tahapan Logika:**
> 1. Siapkan array objek siswa: `[{nama: 'A', nilai: 80}, {nama: 'B', nilai: 50}, ...]`.
> 2. Gunakan `Object.groupBy(siswa, callback)`.
> 3. Di dalam callback, cek: jika `nilai >= 75` return 'Lulus', jika tidak return 'Remedial'.
> 4. Hasilnya akan menjadi objek dengan dua array terpisah berdasarkan kategori tersebut.

---

### 🧠 Latihan Logika: Laporan Profil User

> **🎯 Skenario: Ekstrak Data User Kompleks**
>
> 1. **Ambil Data:** Punya objek `user` {nama, email, role, ...}.
> 2. **Dapatkan Pasangan:** Gunakan mantra *Pasangan* (`Object.entries`) untuk mendapatkan array berisi `[kunci, nilai]`.
> 3. **Looping:** Lakukan perulangan pada array pasangan tersebut.
> 4. **Format:** Di setiap putaran, gabungkan kunci dan nilai menjadi string "Kunci: Nilai".

---

### ⚔️ Latihan Bertahap: Manipulasi Objek

| Level | Tantangan | Deskripsi |
|-------|-----------|-----------|
| LEVEL 1 | Update Stok | Diberikan objek `gudang = { apel: 10, jeruk: 5 }`. Tambahkan stok apel sebanyak 5 buah |
| LEVEL 2 | Gabung Data | Gabungkan objek `infoPribadi` dan `infoAlamat` menjadi satu objek `userLengkap` |
| LEVEL 3 | Hitung Total Aset | Hitung total nilai semua aset menggunakan looping `Object.values` |
| LEVEL 4 | Pembersih Objek | Hapus properti yang nilainya `null` atau `undefined` |
| LEVEL 5 | Tukar Kunci-Nilai | Balikkan kunci dan nilai sebuah objek |
| LEVEL 6 | Hitung Karakter | Hitung frekuensi setiap karakter dalam string |

---

### 5. Sihir Pertukaran (JSON)

> Bahasa pengantar antara Frontend (Browser) dan Backend (Server/Google Sheet).

#### 📦 JSON.stringify(obj) - BUNGKUS PAKET

Mengubah Object JavaScript menjadi String agar bisa dikirim ke server.

---

#### 🔓 JSON.parse(str) - BUKA PAKET

Mengubah String dari server kembali menjadi Object JavaScript agar bisa diolah.

---

### 🧠 Latihan Logika: Simpan Data Game

> **🎯 Skenario: Menyimpan Progress Game**
>
> 1. **Persiapan:** Punya objek `statusGame` berisi level, skor, dan inventory.
> 2. **Simpan:** Gunakan mantra *Bungkus Paket* (`stringify`) untuk mengubah objek jadi string.
> 3. **Muat Ulang:** Gunakan mantra *Buka Paket* (`parse`) untuk mengembalikan jadi objek.

---

## 🧬 Penjelasan Mendalam: JSON (JavaScript Object Notation)

### 📖 Apa itu JSON?

**JSON (JavaScript Object Notation)** adalah format teks ringan untuk pertukaran data. Jika Object JavaScript adalah **bahasa native** JavaScript, maka JSON adalah **bahasa universal** yang dimengerti semua bahasa pemrograman.

```javascript
// Object JavaScript (bisa punya method)
const obj = {
    nama: "Budi",
    greet: function() { console.log("Hello"); }  // Method
};

// JSON (hanya data, no method)
const json = `{
    "nama": "Budi"
}`;  // Hanya string dengan format khusus
```

**Mengapa JSON Penting?**
1. **Universal Format:** Dimengerti JavaScript, Python, PHP, Java, dll.
2. **API Standard:** Hampir semua API menggunakan JSON
3. **Storage:** Format default untuk localStorage, database NoSQL
4. **Configuration:** File config (package.json, tsconfig.json)

---

### 🔬 Cara Membentuk Logika Algoritma untuk JSON Manipulation

#### 📚 Framework Berpikir untuk JSON

```
┌─────────────────────────────────────────────────────────┐
│  1. IDENTIFIKASI KEBUTUHAN                              │
│     - Kirim data ke server? → Stringify                │
│     - Terima data dari server? → Parse                 │
│     - Simpan ke localStorage? → Stringify              │
│     - Baca dari localStorage? → Parse                  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  2. VALIDASI DATA                                       │
│     - Data valid untuk JSON? (no function/circular)    │
│     - String JSON valid? (try-catch parse)             │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  3. TRANSFORMASI                                        │
│     - Filter data sebelum stringify?                   │
│     - Transform setelah parse?                         │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  4. ERROR HANDLING                                      │
│     - Try-catch untuk parse                            │
│     - Fallback value jika error                        │
└─────────────────────────────────────────────────────────┘
```

---

#### 🔍 JSON Manipulation: Panduan Lengkap Step-by-Step

##### 1. JSON.STRINGIFY() - OBJECT KE STRING

**Tahapan Logika:**

```javascript
const user = {
    id: 1,
    nama: "Budi",
    email: "budi@email.com",
    joined: new Date("2024-01-01")
};

// BASIC STRINGIFY
// Algoritma:
// 1. Loop semua properti enumerable
// 2. Convert value ke format JSON
// 3. Bangun string JSON
// 4. Return string
const jsonString = JSON.stringify(user);
// '{"id":1,"nama":"Budi","email":"budi@email.com","joined":"2024-01-01T00:00:00.000Z"}'

// DENGAN REPEATER (filter properties)
// Algoritma:
// 1. Tentukan array properti yang diinginkan
// 2. Hanya properti tersebut yang di-serialize
const filtered = JSON.stringify(user, ["id", "nama"]);
// '{"id":1,"nama":"Budi"}'

// DENGAN SPACING (pretty print)
// Algoritma:
// 1. Tentukan jumlah spasi/tab untuk indentasi
// 2. Format JSON dengan line breaks
const pretty = JSON.stringify(user, null, 2);
/*
{
  "id": 1,
  "nama": "Budi",
  "email": "budi@email.com",
  "joined": "2024-01-01T00:00:00.000Z"
}
*/

// DENGAN REVLACER FUNCTION (transform values)
// Algoritma:
// 1. Buat function yang transform setiap value
// 2. Function dipanggil untuk setiap key-value
// 3. Return transformed value
const transformed = JSON.stringify(user, (key, value) => {
    if (key === "email") {
        return value.replace(/(.{2}).+(@)/, "$1***$2"); // Mask email
    }
    return value;
});
// '{"id":1,"nama":"Budi","email":"bu***@email.com","joined":"2024-01-01T00:00:00.000Z"}'

// APLIKASI: Simpan ke localStorage
function saveToStorage(key, data) {
    try {
        const jsonString = JSON.stringify(data);
        localStorage.setItem(key, jsonString);
        return true;
    } catch (error) {
        console.error("Gagal simpan data:", error);
        return false;
    }
}

saveToStorage("user", user);
```

**⚠️ Batasan JSON.stringify():**

```javascript
// TIDAK BISA serialize:
const problematic = {
    func: function() {},           // Function → hilang
    undef: undefined,              // Undefined → hilang
    date: new Date(),              // Date → string ISO
    nan: NaN,                      // NaN → null
    inf: Infinity,                 // Infinity → null
    circular: null                 // Circular ref → ERROR
};

problematic.circular = problematic;  // Circular reference!
JSON.stringify(problematic);  // TypeError: Circular structure

// SOLUSI: Custom replacer
function circularReplacer() {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) return "[Circular]";
            seen.add(value);
        }
        return value;
    };
}

JSON.stringify(problematic, circularReplacer());
```

---

##### 2. JSON.PARSE() - STRING KE OBJECT

**Tahapan Logika:**

```javascript
const jsonString = '{"id":1,"nama":"Budi","email":"budi@email.com"}';

// BASIC PARSE
// Algoritma:
// 1. Parse string JSON
// 2. Validasi syntax JSON
// 3. Build object JavaScript
// 4. Return object
const user = JSON.parse(jsonString);
// {id: 1, nama: "Budi", email: "budi@email.com"}

// DENGAN REVIVER (transform values)
// Algoritma:
// 1. Parse JSON jadi object
// 2. Loop semua key-value (bottom-up)
// 3. Transform value dengan reviver function
// 4. Return transformed object
const userWithDate = JSON.parse(
    '{"id":1,"nama":"Budi","joined":"2024-01-01T00:00:00.000Z"}',
    (key, value) => {
        if (key === "joined") {
            return new Date(value);  // Convert string ke Date
        }
        return value;
    }
);

// APLIKASI: Safe parse dengan error handling
function safeJsonParse(jsonString, fallback = null) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.warn("Invalid JSON:", error);
        return fallback;
    }
}

const data = safeJsonParse('{"invalid": json}', {});  // {}
const valid = safeJsonParse('{"valid": true}', {});   // {valid: true}

// APLIKASI: Parse dan validate
function parseAndValidate(jsonString, schema) {
    const data = safeJsonParse(jsonString);
    if (!data) return null;
    
    // Validate required fields
    for (const field of schema.required) {
        if (!(field in data)) {
            throw new Error(`Missing required field: ${field}`);
        }
    }
    
    return data;
}

const schema = { required: ["id", "nama"] };
parseAndValidate('{"id":1,"nama":"Budi"}', schema);  // Valid
```

---

##### 3. DEEP CLONE DENGAN JSON

**Tahapan Logika:**

```javascript
const original = {
    nama: "Budi",
    alamat: {
        kota: "Jakarta",
        kodePos: "12345"
    },
    hobbies: ["Coding", "Gaming"]
};

// DEEP CLONE DENGAN JSON
// Algoritma:
// 1. Stringify object jadi JSON string
// 2. Parse JSON string jadi object baru
// 3. Return object baru (deep copy)
const cloned = JSON.parse(JSON.stringify(original));

// Modifikasi cloned tidak affect original
cloned.alamat.kota = "Bandung";
cloned.hobbies.push("Reading");

console.log(original.alamat.kota);  // "Jakarta" (tidak berubah)
console.log(cloned.alamat.kota);    // "Bandung"

// ⚠️ LIMITASI:
// - Function hilang
// - Date jadi string
// - Undefined jadi null
// - Circular reference error

// APLIKASI: Reset state ke initial
function createStateManager(initialState) {
    let currentState = initialState;
    const initialStateCopy = JSON.parse(JSON.stringify(initialState));
    
    return {
        getState: () => currentState,
        setState: (newState) => {
            currentState = newState;
        },
        reset: () => {
            currentState = JSON.parse(JSON.stringify(initialStateCopy));
        }
    };
}

const manager = createStateManager({ count: 0, data: [] });
manager.setState({ count: 5, data: [1, 2, 3] });
manager.reset();  // Back to { count: 0, data: [] }
```

---

##### 4. JSON UNTUK API COMMUNICATION

**Tahapan Logika:**

```javascript
// KIRIM DATA KE API (POST/PUT)
// Algoritma:
// 1. Siapkan data object
// 2. Stringify data
// 3. Set Content-Type header ke application/json
// 4. Send request

async function createUser(userData) {
    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)  // Stringify sebelum kirim
    });
    
    return await response.json();  // Parse response
}

createUser({ nama: "Budi", email: "budi@email.com" });

// TERIMA DATA DARI API (GET)
// Algoritma:
// 1. Fetch data dari API
// 2. Response.json() otomatis parse JSON
// 3. Transform data jika perlu
// 4. Return/use data

async function getUsers() {
    const response = await fetch('/api/users');
    const users = await response.json();  // Auto parse
    
    // Transform date strings to Date objects
    return users.map(user => ({
        ...user,
        createdAt: new Date(user.createdAt)
    }));
}

// APLIKASI: Request interceptor dengan JSON
async function apiRequest(endpoint, options = {}) {
    const defaultHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    
    // Stringify body jika ada
    const config = {
        ...options,
        headers: { ...defaultHeaders, ...options.headers }
    };
    
    if (options.body && typeof options.body === 'object') {
        config.body = JSON.stringify(options.body);
    }
    
    const response = await fetch(endpoint, config);
    
    // Auto parse JSON response
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
        return await response.json();
    }
    
    return await response.text();
}
```

---

##### 5. JSON UNTUK LOCAL STORAGE

**Tahapan Logika:**

```javascript
// SIMPAN COMPLEX DATA
// Algoritma:
// 1. Prepare data object
// 2. Stringify ke JSON
// 3. Save ke localStorage

function saveUserPreferences(preferences) {
    const jsonString = JSON.stringify(preferences);
    localStorage.setItem('userPrefs', jsonString);
}

saveUserPreferences({
    theme: 'dark',
    language: 'id',
    fontSize: 14,
    notifications: true
});

// BACA COMPLEX DATA
// Algoritma:
// 1. Get JSON string dari localStorage
// 2. Parse ke object
// 3. Return/use data

function loadUserPreferences() {
    const jsonString = localStorage.getItem('userPrefs');
    if (!jsonString) return null;
    
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Failed to parse preferences:', error);
        return null;
    }
}

const prefs = loadUserPreferences();

// APLIKASI: Shopping cart persistence
class PersistentCart {
    constructor() {
        this.items = this.load() || [];
    }
    
    save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }
    
    load() {
        const cartJson = localStorage.getItem('cart');
        return cartJson ? JSON.parse(cartJson) : null;
    }
    
    add(product) {
        this.items.push(product);
        this.save();
    }
    
    remove(productId) {
        this.items = this.items.filter(i => i.id !== productId);
        this.save();
    }
}
```

---

### ⚠️ Edge Cases dan Jebakan Umum

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **Function Loss** | Method/function hilang saat stringify | Jangan store function di JSON |
| **Date Conversion** | Date jadi ISO string | Gunakan reviver untuk parse kembali |
| **Undefined → null** | Undefined values jadi null | Filter sebelum stringify |
| **Circular Reference** | Error jika object circular | Gunakan custom replacer |
| **Invalid JSON Parse** | Parse error jika JSON invalid | Selalu gunakan try-catch |
| **Prototype Pollution** | Parse JSON dengan __proto__ | Validate/sanitize input |

---

### 💡 Aplikasi Dunia Nyata

**1. Configuration Manager:**

```javascript
// Algoritma config management:
// 1. Load default config
// 2. Load user config dari storage
// 3. Merge configs
// 4. Save jika ada perubahan

class ConfigManager {
    constructor(defaultConfig, storageKey = 'appConfig') {
        this.defaultConfig = defaultConfig;
        this.storageKey = storageKey;
        this.config = this.load();
    }
    
    load() {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
            try {
                return { ...this.defaultConfig, ...JSON.parse(saved) };
            } catch (e) {
                console.warn('Config parse error, using defaults');
            }
        }
        return { ...this.defaultConfig };
    }
    
    save() {
        localStorage.setItem(
            this.storageKey, 
            JSON.stringify(this.config)
        );
    }
    
    set(key, value) {
        this.config[key] = value;
        this.save();
    }
    
    get(key) {
        return this.config[key];
    }
    
    reset() {
        this.config = { ...this.defaultConfig };
        this.save();
    }
}

const config = new ConfigManager({
    theme: 'light',
    language: 'en',
    autoSave: true
});
```

**2. State Persistence:**

```javascript
// Algoritma state persistence:
// 1. Initialize state
// 2. Subscribe to state changes
// 3. Debounce save to storage
// 4. Load on init

function createPersistentState(key, initialState) {
    // Load saved state
    const saved = localStorage.getItem(key);
    let state = saved ? JSON.parse(saved) : initialState;
    
    const listeners = new Set();
    let saveTimeout = null;
    
    // Debounced save
    const save = () => {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            localStorage.setItem(key, JSON.stringify(state));
        }, 300);
    };
    
    return {
        getState: () => state,
        setState: (newState) => {
            state = typeof newState === 'function' 
                ? newState(state) 
                : newState;
            save();
            listeners.forEach(fn => fn(state));
        },
        subscribe: (fn) => {
            listeners.add(fn);
            return () => listeners.delete(fn);
        }
    };
}

const userState = createPersistentState('user', {
    isLoggedIn: false,
    profile: null
});
```

---

### 📊 Kompleksitas Waktu Operasi JSON

| Operasi | Time Complexity | Space Complexity | Keterangan |
|----------|----------------|-----------------|------------|
| Stringify | O(n) | O(n) | n = size of object |
| Parse | O(n) | O(n) | n = length of JSON string |
| Deep Clone | O(n) | O(n) | Stringify + Parse |
| Pretty Print | O(n) | O(n) | With spacing |

---

---

### 🔮 Sihir Tambahan: Kumpulan Mantra Lengkap

Berikut adalah kumpulan lengkap mantra-mantra yang sangat berguna dalam pengembangan JavaScript dan Apps Script:

#### 1. Mantra String Lengkap

| Method | Deskripsi | Contoh |
|--------|-----------|--------|
| `matchAll(regex)` | Mengembalikan iterator dari semua hasil pencocokan regex | `"abc123".matchAll(/\d+/g)` |
| `padStart(length, str)` | Mengisi string dari awal hingga mencapai panjang tertentu | `"5".padStart(3, "0")` → `"005"` |
| `padEnd(length, str)` | Mengisi string dari akhir hingga mencapai panjang tertentu | `"5".padEnd(3, "0")` → `"500"` |
| `trimStart() / trimLeft()` | Menghapus spasi dari awal string | `"  halo".trimStart()` → `"halo"` |
| `trimEnd() / trimRight()` | Menghapus spasi dari akhir string | `"halo  ".trimEnd()` → `"halo"` |

#### 2. Mantra Number Lengkap

| Method | Deskripsi | Contoh |
|--------|-----------|--------|
| `Math.imul(a, b)` | Melakukan perkalian integer 32-bit | `Math.imul(2, 3)` → `6` |
| `Math.hypot(...values)` | Menghitung akar dari jumlah kuadrat argumen | `Math.hypot(3, 4)` → `5` |
| `Math.log10(x)` | Menghitung logaritma basis 10 dari angka | `Math.log10(100)` → `2` |
| `Math.log2(x)` | Menghitung logaritma basis 2 dari angka | `Math.log2(8)` → `3` |

#### 3. Mantra Array Lengkap

| Method | Deskripsi | Contoh |
|--------|-----------|--------|
| `findIndex(predicate)` | Seperti find, tapi mengembalikan indeks item yang cocok | `[1,2,3].findIndex(x => x===3)` → `2` |
| `findLast(predicate)` | Mencari dari akhir array dan mengembalikan item pertama yang cocok | `[1,2,3,2].findLast(x => x===2)` → `2` |
| `findLastIndex(predicate)` | Mencari dari akhir array dan mengembalikan indeks pertama yang cocok | `[1,2,3,2].findLastIndex(x => x===2)` → `3` |
| `toSorted(compareFn)` | Mengurutkan array tanpa mengubah array asli | `[3,1,2].toSorted()` → `[1,2,3]` |
| `toReversed()` | Membalik urutan array tanpa mengubah array asli | `[1,2,3].toReversed()` → `[3,2,1]` |
| `toSpliced(start, del, ...items)` | Melakukan operasi splice tanpa mengubah array asli | `[1,2,3].toSpliced(1,1,'a')` → `[1,'a',3]` |
| `with(index, value)` | Mengganti nilai di indeks tertentu tanpa mengubah array asli | `[1,2,3].with(1,'a')` → `[1,'a',3]` |

#### 4. Mantra Object Lengkap

| Method | Deskripsi | Contoh |
|--------|-----------|--------|
| `Object.hasOwn(obj, prop)` | Versi statis dari hasOwnProperty, lebih aman digunakan | `Object.hasOwn(obj, 'prop')` |
| `Object.groupBy(collection, fn)` | Mengelompokkan elemen koleksi berdasarkan hasil callback | `Object.groupBy(items, ({type}) => type)` |

#### 5. Mantra Umum Lengkap

| Method | Deskripsi | Contoh |
|--------|-----------|--------|
| `Boolean(value)` | Mengonversi nilai ke boolean | `Boolean(0)` → `false` |
| `Symbol(description)` | Membuat nilai simbol unik | `const sym = Symbol('desc')` |
| `BigInt(value)` | Membuat bilangan bulat dengan presisi arbitrer | `BigInt(123)` atau `123n` |
| `globalThis` | Merujuk ke objek global terlepas dari konteks | `globalThis.console.log('halo')` |

---

### 6. Sihir Waktu (Date)

| Method | Deskripsi |
|--------|-----------|
| `new Date()` | Waktu sekarang |
| `new Date('YYYY-MM-DD')` | Membuat tanggal spesifik |
| `getTime()` | Timestamp (milidetik sejak 1 Jan 1970) |
| `getFullYear(), getMonth(), getDate()` | Mendapatkan komponen tanggal |

---

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

---

## Bab 1: Tiga Mantra Agung Penguasa Array (`map`, `filter`, `reduce`) {#-bab-1-tiga-mantra-agung-penguasa-array-map-filter-reduce}

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

> Bayangkan sebuah **Array** adalah **Kereta Barang** yang membawa ratusan gerbong berisi data. Memprosesnya satu per satu dengan tangan adalah pekerjaan kaum non-magis. Kita punya tiga mantra agung untuk menaklukkannya dalam sekejap.

### 🎯 Misi Bab 1: Tiga Tuntutan Raja

1. Gulungan baru dengan nominal Rupiah yang diubah menjadi **Dolar**.
2. Gulungan terpisah yang hanya berisi penjualan di atas **$100**.
3. Satu angka sakral: **total pendapatan** dari semua penjualan.

---

## Mantra #1: .map() - Transformasi

> **🏭 Model Mental: Pabrik Ajaib**
>
> Anda memasukkan **100 kentang mentah** ke satu sisi. Di dalam pabrik (`.map`), ada satu instruksi: **"Goreng setiap item"**. Dari sisi lain, keluar **100 kentang goreng**.

| CHARACTERISTIC | FORMULA |
|----------------|---------|
| Jumlah item yang masuk **SELALU SAMA** dengan yang keluar. Yang berubah hanyalah **BENTUK** setiap item. | Array Lama (N) → Array Baru (N) |

### 📜 Rapalan Mantra

```javascript
arrayAsli.map(item => item_yang_sudah_diubah);
```

### 👁️ Lihat Sihirnya: Rupiah → Dolar

Mari selesaikan tugas pertama Raja: mengubah Rupiah ke Dolar (asumsi $1 = Rp15.000).

```javascript
const penjualanIDR = [150000, 300000, 75000, 450000];
const penjualanUSD = penjualanIDR.map(rupiah => rupiah / 15000);
console.log(penjualanUSD); // [10, 20, 5, 30]
```

### ⚔️ Uji Coba Mantra Anda

Ubah array nama huruf kecil menjadi huruf kapital di awal setiap kata.

```javascript
const namaKecil = ["budi", "siti", "joko"];
const namaKapital = namaKecil.map(nama => nama.charAt(0).toUpperCase() + nama.slice(1));
// ["Budi", "Siti", "Joko"]
```

---

## Mantra #2: .filter() - Seleksi

> **🚪 Model Mental: Gerbang Penjaga**
>
> Golem hanya mengizinkan item yang memenuhi syarat tertentu untuk lewat. Anda mengirim **100 buah-buahan**, perintah golem: **"Hanya izinkan 'apel' yang lewat"**. Mungkin hanya **30 apel** yang berhasil lewat.

| CHARACTERISTIC | FORMULA |
|----------------|---------|
| Jumlah item keluar **MUNGKIN LEBIH SEDIKIT** atau sama. Tidak pernah lebih banyak. | Array Lama (N) → Array Baru (≤N) |

### 📜 Rapalan Mantra

```javascript
arrayAsli.filter(item => kondisi_yang_harus_benar);
```

### 👁️ Lihat Sihirnya: Filter > $100

```javascript
const penjualanUSD = [120, 80, 250, 50, 15];
const penjualanBesar = penjualanUSD.filter(dolar => dolar > 100);
console.log(penjualanBesar); // [120, 250]
```

### ⚔️ Uji Coba Mantra Anda

Filter siswa yang lulus (nilai >= 75).

```javascript
const semuaSiswa = [{nama: "Andi", nilai: 85}, {nama: "Budi", nilai: 60}, {nama: "Citra", nilai: 92}];
const siswaLulus = semuaSiswa.filter(siswa => siswa.nilai >= 75);
// [{nama: "Andi", nilai: 85}, {nama: "Citra", nilai: 92}]
```

---

## Mantra #3: .reduce() - Pemadatan

> **⚗️ Model Mental: Kuali Alkemis**
>
> Mulai dengan **"cairan dasar"** (nilai awal). Masukkan bahan-bahan **satu per satu**. Setiap bahan bereaksi dengan cairan dan menghasilkan cairan baru. Yang tersisa: **satu esensi akhir**.

| CHARACTERISTIC | FORMULA |
|----------------|---------|
| Mengubah seluruh array menjadi **SATU NILAI TUNGGAL** (angka, string, objek, array). | Array Lama (N) → Satu Nilai |

### 📜 Rapalan Mantra

```javascript
arrayAsli.reduce((cairanDiKuali, bahanBerikutnya) => {
  return cairan_hasil_reaksi;
}, cairanDasar); // <-- SANGAT PENTING!
```

### 👁️ Lihat Sihirnya: Total Pendapatan

```javascript
const penjualanUSD = [10, 20, 5, 30];
const totalPendapatan = penjualanUSD.reduce((total, penjualan) => {
  return total + penjualan;
}, 0);
console.log(totalPendapatan); // 65
```

### ⚠️ Jebakan Umum

**Lupa memberikan cairanDasar (nilai awal)!** Ini bisa menyebabkan hasil yang tidak terduga. Selalu berikan nilai awal!

### ⚔️ Uji Coba Mantra Anda

Hitung total harga semua barang di kantong belanja.

```javascript
const kantongBelanja = [{barang: "Apel", harga: 5000}, {barang: "Roti", harga: 15000}, {barang: "Susu", harga: 20000}];
const totalBelanja = kantongBelanja.reduce((total, item) => total + item.harga, 0);
// 40000
```

---

## 🔮 Ritual Agung: Chaining Tiga Mantra

### 🎯 Misi Ritual: Produk Elektronik < $1000 dengan Diskon 10%

```javascript
const semuaProduk = [
  {nama: "Laptop", harga: 1200, kategori: "Elektronik"},
  {nama: "Buku", harga: 20, kategori: "Pendidikan"},
  {nama: "Telepon", harga: 800, kategori: "Elektronik"},
  {nama: "Meja", harga: 300, kategori: "Perabotan"},
  {nama: "Mouse", harga: 50, kategori: "Elektronik"}
];

const totalBiaya = semuaProduk
  .filter(produk => produk.kategori === "Elektronik" && produk.harga < 1000) // 1. Seleksi
  .map(produk => produk.harga * 0.9)     // 2. Transformasi (diskon 10%)
  .reduce((total, harga) => total + harga, 0);  // 3. Pemadatan

console.log(totalBiaya); // (800*0.9) + (50*0.9) = 765
```

### 👣 Jejak Eksekusi Ritual

1. **.filter():** Hanya Telepon (800) dan Mouse (50) yang lolos → `[{...telepon}, {...mouse}]`
2. **.map():** Telepon → 720, Mouse → 45 → `[720, 45]`
3. **.reduce():** 720 + 45 = **765**

---

> ## ✨ Selamat! Anda Menguasai 80% Masalah Data
>
> Dengan menguasai tiga mantra ini, Anda sudah bisa menyelesaikan sebagian besar masalah manipulasi data sehari-hari.

---

## 🧬 Penjelasan Mendalam: Functional Programming dengan map, filter, reduce

### 📚 Konsep Dasar: Functional Programming

**Functional Programming (FP)** adalah paradigma pemrograman yang memperlakukan fungsi sebagai **"first-class citizens"** — fungsi bisa menjadi input dan output dari fungsi lain. FP menghindari **mutable state** (perubahan data) dan **side effects** (efek samping). Tiga mantra ini adalah implementasi FP yang paling sering digunakan dalam JavaScript modern.

| Konsep | Deskripsi |
|--------|-----------|
| **Pure Function** | Fungsi yang selalu menghasilkan output sama untuk input yang sama, tanpa side effects |
| **Immutability** | Data asli tidak pernah diubah, selalu dikembalikan sebagai instance baru |
| **Composition** | Menggabungkan fungsi-fungsi kecil menjadi operasi kompleks |

---

### 🔬 Algoritma Internal .map()

**Spesifikasi ECMAScript untuk Array.prototype.map():**

1. **Validasi Context:** Periksa apakah `this` adalah null/undefined. Jika ya, throw TypeError.
2. **Konversi ke Object:** Konversi `this` ke object menggunakan `Object()`.
3. **Ambil Panjang:** Dapatkan properti `length` dari array dan konversi ke integer (ToLength).
4. **Validasi Callback:** Pastikan parameter callback adalah callable function. Jika tidak, throw TypeError.
5. **Buat Array Baru:** Buat array kosong baru dengan panjang yang sama.
6. **Iterasi dengan Binding:** Loop dari i = 0 hingga length - 1:
   - Cek apakah indeks i ada di array (might be sparse array)
   - Ambil nilai: `element = this[i]`
   - Panggil callback: `mappedValue = callback.call(thisArg, element, i, array)`
   - Simpan hasil: `newArray[i] = mappedValue`
7. **Return:** Kembalikan array baru yang sudah ter-mapping.

```javascript
// Implementasi manual map untuk pemahaman
function customMap(array, callback, thisArg) {
    // 1. Validasi
    if (array == null) {
        throw new TypeError('Cannot call map on null');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
    }
    
    // 2. Konversi ke object
    const O = Object(array);
    const len = O.length >>> 0; // Unsigned right shift = ToLength
    
    // 3. Buat array baru
    const newArray = new Array(len);
    
    // 4. Iterasi
    for (let i = 0; i < len; i++) {
        if (i in O) { // Cek jika bukan sparse
            const element = O[i];
            newArray[i] = callback.call(thisArg, element, i, O);
        }
    }
    
    return newArray;
}

// Penggunaan
const numbers = [1, 2, 3];
const doubled = customMap(numbers, x => x * 2);
// doubled = [2, 4, 6]
```

---

### 🔬 Algoritma Internal .filter()

**Spesifikasi ECMAScript untuk Array.prototype.filter():**

1. **Validasi Context:** Periksa apakah `this` null/undefined. Throw TypeError jika ya.
2. **Konversi ke Object:** `O = Object(this)`
3. **Ambil Panjang:** `len = ToLength(O.length)`
4. **Validasi Callback:** Pastikan callback adalah function.
5. **Inisialisasi:** Buat array kosong `resultArray = []` dan counter `toLength = 0`
6. **Iterasi dengan Kondisional:** Loop dari i = 0 hingga len - 1:
   - Cek apakah indeks i ada di array
   - Ambil nilai: `element = O[i]`
   - Panggil callback: `shouldInclude = callback.call(thisArg, element, i, O)`
   - **Konversi ke Boolean:** `if (shouldInclude)`
     - Simpan: `resultArray[toLength] = element`
     - Increment: `toLength++`
7. **Return:** Kembalikan array yang sudah ter-filter.

```javascript
// Implementasi manual filter untuk pemahaman
function customFilter(array, callback, thisArg) {
    // 1. Validasi
    if (array == null) {
        throw new TypeError('Cannot call filter on null');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
    }
    
    // 2. Konversi ke object
    const O = Object(array);
    const len = O.length >>> 0;
    
    // 3. Inisialisasi hasil
    const resultArray = [];
    let toLength = 0;
    
    // 4. Iterasi dengan seleksi
    for (let i = 0; i < len; i++) {
        if (i in O) {
            const element = O[i];
            const shouldInclude = callback.call(thisArg, element, i, O);
            
            if (shouldInclude) { // Truthy check
                resultArray[toLength] = element;
                toLength++;
            }
        }
    }
    
    return resultArray;
}

// Penggunaan
const numbers = [1, 2, 3, 4, 5];
const evens = customFilter(numbers, x => x % 2 === 0);
// evens = [2, 4]
```

---

### 🔬 Algoritma Internal .reduce()

**Spesifikasi ECMAScript untuk Array.prototype.reduce():**

1. **Validasi Context:** Periksa apakah `this` null/undefined. Throw TypeError jika ya.
2. **Konversi ke Object:** `O = Object(this)`
3. **Ambil Panjang:** `len = ToLength(O.length)`
4. **Validasi Callback:** Pastikan callback adalah function.
5. **Handling Initial Value:**
   - Jika initialValue diberikan: `accumulator = initialValue`, `k = 0`
   - Jika TIDAK:
     - Cari first element: `k = first index yang ada`
     - `accumulator = O[k]`
     - Increment k: `k++`
6. **Iterasi Reduksi:** Loop dari k hingga len - 1:
   - Cek apakah indeks k ada di array
   - Ambil nilai: `currentValue = O[k]`
   - Panggil callback: `accumulator = callback(accumulator, currentValue, k, O)`
   - Increment k
7. **Edge Case:** Jika array kosong dan tidak ada initialValue, throw TypeError.
8. **Return:** Kembalikan accumulator final.

```javascript
// Implementasi manual reduce untuk pemahaman
function customReduce(array, callback, initialValue) {
    // 1. Validasi
    if (array == null) {
        throw new TypeError('Cannot call reduce on null');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
    }
    
    // 2. Konversi ke object
    const O = Object(array);
    const len = O.length >>> 0;
    
    // 3. Handling initial value
    let accumulator;
    let k = 0;
    
    if (arguments.length >= 2) {
        // Initial value diberikan
        accumulator = initialValue;
    } else {
        // Cari first element yang ada
        while (k < len && !(k in O)) {
            k++;
        }
        
        // Edge case: array kosong tanpa initial value
        if (k >= len) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        
        accumulator = O[k];
        k++;
    }
    
    // 4. Iterasi reduksi
    while (k < len) {
        if (k in O) {
            const currentValue = O[k];
            accumulator = callback(accumulator, currentValue, k, O);
        }
        k++;
    }
    
    return accumulator;
}

// Penggunaan
const numbers = [1, 2, 3, 4, 5];
const sum = customReduce(numbers, (acc, curr) => acc + curr, 0);
// sum = 15
```

---

### ⚠️ Edge Cases dan Jebakan Umum

**Sparse Arrays:** Array dengan "lubang" (undefined slots). map/filter/reduce hanya memproses indeks yang ada.

```javascript
const sparse = [1, , 3]; // Lubang di indeks 1
sparse.map(x => x * 2); // [2, empty, 6] - lubang tetap ada
```

**Callback Arguments:** Callback menerima 3 parameter: `(element, index, array)`. Manfaatkan untuk logika kompleks.

```javascript
// Gunakan index untuk conditional mapping
arr.map((val, idx) => idx % 2 === 0 ? val * 2 : val);
```

**Reduce tanpa Initial Value:** Bisa menyebabkan error atau hasil tak terduga. **Selalu berikan initial value!**

**Array Mutation:** Jika array asli dimutasi selama iterasi, behavior tidak terdefinisi. Jangan mutate dalam callback!

```javascript
// ❌ SALAH
arr.map(x => { arr.push(x); return x * 2; });

// ✓ BENAR
const newArr = arr.map(x => x * 2);
```

**Performance Chaining:** Setiap method membuat array baru. Untuk dataset besar, pertimbangkan single loop.

```javascript
// Chaining (3 passes)
arr.filter(x => x > 0).map(x => x * 2).reduce((a, b) => a + b);

// Optimized (1 pass)
arr.reduce((acc, x) => {
    if (x > 0) acc += x * 2;
    return acc;
}, 0);
```

---

### 💡 Aplikasi Dunia Nyata yang Kompleks

**1. Data Transformation Pipeline (ETL)**

```javascript
// Extract, Transform, Load data dari API
const processedData = rawData
    .filter(item => item.status === 'active')           // Filter aktif
    .map(item => ({
        id: item.id,
        name: item.name.trim().toLowerCase(),           // Normalisasi
        score: parseFloat(item.score) || 0,             // Parse number
        joined: new Date(item.joinedDate)               // Parse date
    }))
    .filter(item => item.score >= 50)                   // Filter threshold
    .reduce((acc, item) => {
        acc.byCategory[item.category] = 
            (acc.byCategory[item.category] || []).concat(item);
        acc.totalScore += item.score;
        return acc;
    }, { byCategory: {}, totalScore: 0 });
```

**2. Shopping Cart Calculator**

```javascript
const cartSummary = cartItems
    .filter(item => item.quantity > 0)                  // Hanya yang ada
    .map(item => ({
        ...item,
        subtotal: item.price * item.quantity,
        discount: item.price * item.quantity * (item.discount || 0)
    }))
    .map(item => ({
        ...item,
        finalSubtotal: item.subtotal - item.discount
    }))
    .reduce((acc, item) => {
        acc.subtotal += item.subtotal;
        acc.totalDiscount += item.discount;
        acc.finalTotal += item.finalSubtotal;
        acc.itemCount += item.quantity;
        return acc;
    }, { subtotal: 0, totalDiscount: 0, finalTotal: 0, itemCount: 0 });
```

**3. Grouping dan Aggregation**

```javascript
// Grouping manual dengan reduce (sebelum Object.groupBy ada)
const salesByRegion = salesData.reduce((acc, sale) => {
    const region = sale.region;
    if (!acc[region]) {
        acc[region] = {
            count: 0,
            totalRevenue: 0,
            products: []
        };
    }
    acc[region].count++;
    acc[region].totalRevenue += sale.amount;
    acc[region].products.push(sale.product);
    return acc;
}, {});

// Hitung statistik per region
const regionStats = Object.entries(salesByRegion).map(([region, data]) => ({
    region,
    averageRevenue: data.totalRevenue / data.count,
    productVariety: new Set(data.products).size
}));
```

---

### 📊 Kompleksitas Waktu (Big O) dan Performance

| Method | Time Complexity | Space Complexity | Passes |
|--------|-----------------|------------------|--------|
| `.map()` | O(n) | O(n) | 1 |
| `.filter()` | O(n) | O(k)* | 1 |
| `.reduce()` | O(n) | O(1)** | 1 |
| `.filter().map().reduce()` | O(3n) = O(n) | O(2n) | 3 |

*\*k = jumlah elemen yang lolos filter (k ≤ n)*
*\*\*Tergantung return type, bisa O(n) jika return array*

---

### 🎓 Latihan Pemahaman Mendalam

**1. Implementasi .flatMap() dengan map + reduce:**

```javascript
// flatMap = map + flat(1 level)
function customFlatMap(array, callback) {
    return array.reduce((acc, element, index, arr) => {
        const mapped = callback(element, index, arr);
        // Jika mapped adalah array, spread ke acc
        return acc.concat(mapped);
    }, []);
}

// Penggunaan
const sentences = ['Hello World', 'Foo Bar'];
const words = customFlatMap(sentences, s => s.split(' '));
// words = ['Hello', 'World', 'Foo', 'Bar']
```

**2. Implementasi .some() dan .every() dengan reduce:**

```javascript
// some() = apakah ADA minimal 1 yang true?
function customSome(array, predicate) {
    return array.reduce((acc, element) => {
        return acc || predicate(element); // OR accumulator
    }, false);
}

// every() = apakah SEMUA true?
function customEvery(array, predicate) {
    return array.reduce((acc, element) => {
        return acc && predicate(element); // AND accumulator
    }, true);
}
```

**3. Implementasi .find() dan .findIndex() dengan reduce:**

```javascript
function customFind(array, predicate) {
    return array.reduce((found, element) => {
        if (found !== undefined) return found; // Sudah ketemu
        return predicate(element) ? element : undefined;
    }, undefined);
}

function customFindIndex(array, predicate) {
    let result = -1;
    array.reduce((acc, element, index) => {
        if (result === -1 && predicate(element)) {
            result = index;
        }
        return acc;
    }, undefined);
    return result;
}
```

---

### ⚔️ Latihan Bertahap: Penguasaan Array Tingkat Lanjut

| Level | Tantangan | Deskripsi |
|-------|-----------|-----------|
| LEVEL 1 | Rata-rata Bersyarat | Hitung rata-rata nilai hanya dari siswa laki-laki |
| LEVEL 2 | Flat Array | Ubah array 2D `[[1,2],[3,4],[5]]` menjadi `[1,2,3,4,5]` |
| LEVEL 3 | Grouping | Kelompokkan kata berdasarkan huruf depan |
| LEVEL 4 | Chaining Master | Filter kredit, kalikan 2x, lalu jumlahkan |
| LEVEL 5 | Unique by Property | Hapus duplikat dari array objek berdasarkan id |
| LEVEL 6 | Nested Filtering | Filter objek dengan array anak panjang > 2 |

---

#### 🔄 Mantra for - LANGKAH TERHITUNG

Mantra untuk pengulangan yang sudah pasti jumlahnya. Seperti golem yang patuh menjalankan perintah langkah demi langkah.

```javascript
for (let i = 0; i < 10; i++) { ... }
```

---

#### ♾️ Mantra while - PENJAGAAN ABADI

Terus mengulang **selama** kondisi masih benar. Hati-hati dengan *Infinite Loop*!

---

#### 🛣️ Mantra if / else - PERSIMPANGAN TAKDIR

Memilih jalan kode berdasarkan kondisi (benar/salah).

---

## 🧬 Penjelasan Mendalam: Control Flow dan Logika Algoritma

### 📖 Apa itu Control Flow?

**Control Flow** adalah urutan eksekusi kode dalam program. Jika kode adalah **resep masakan**, maka control flow adalah **langkah-langkah** yang menentukan kapan harus mengaduk, kapan menunggu, dan kapan berhenti.

**3 Pilar Control Flow:**
1. **Sequence:** Eksekusi berurutan dari atas ke bawah
2. **Selection:** Memilih jalan dengan if/else
3. **Iteration:** Mengulang dengan for/while

---

### 🔬 Cara Membentuk Logika Algoritma untuk Control Flow

#### 📚 Framework Berpikir Algoritmik

```
┌─────────────────────────────────────────────────────────┐
│  1. ANALISIS MASALAH                                    │
│     - Apa input yang diberikan?                         │
│     - Apa output yang diharapkan?                       │
│     - Apakah ada kondisi khusus?                        │
│     - Apakah ada pengulangan?                           │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  2. IDENTIFIKASI POLA                                   │
│     - Sequential: Langkah berurutan                     │
│     - Conditional: Ada pilihan (jika-maka)             │
│     - Iterative: Ada pengulangan                        │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  3. RANCANG ALGORITMA                                   │
│     - Tulis pseudocode                                  │
│     - Tentukan kondisi                                  │
│     - Tentukan loop termination                         │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  4. IMPLEMENTASI                                        │
│     - Code dengan syntax yang tepat                     │
│     - Test dengan berbagai input                        │
│     - Handle edge cases                                 │
└─────────────────────────────────────────────────────────┘
```

---

#### 🔍 Control Flow: Panduan Lengkap Step-by-Step

##### 1. IF / ELSE - CONDITIONAL BRANCHING

**Tahapan Logika:**

```javascript
// STRUKTUR DASAR
// Algoritma:
// 1. Evaluasi kondisi
// 2. Jika true, eksekusi block if
// 3. Jika false, eksekusi block else (jika ada)

const umur = 17;

if (umur >= 17) {
    console.log("Bisa membuat KTP");
} else {
    console.log("Belum bisa membuat KTP");
}

// IF - ELSE IF - ELSE (MULTI-WAY)
// Algoritma:
// 1. Evaluasi kondisi pertama
// 2. Jika true, eksekusi dan skip sisanya
// 3. Jika false, evaluasi kondisi berikutnya
// 4. Ulangi hingga ada yang true atau sampai else

const nilai = 85;
let grade;

if (nilai >= 90) {
    grade = "A";
} else if (nilai >= 80) {
    grade = "B";
} else if (nilai >= 70) {
    grade = "C";
} else if (nilai >= 60) {
    grade = "D";
} else {
    grade = "E";
}

// APLIKASI: Validasi form
function validateForm(data) {
    // Step 1: Check required fields
    if (!data.email) {
        return { valid: false, error: "Email wajib diisi" };
    }
    
    // Step 2: Check email format
    if (!data.email.includes("@")) {
        return { valid: false, error: "Email tidak valid" };
    }
    
    // Step 3: Check password length
    if (data.password && data.password.length < 8) {
        return { valid: false, error: "Password minimal 8 karakter" };
    }
    
    // Step 4: All validations passed
    return { valid: true, error: null };
}

// APLIKASI: Discount calculator
function calculateDiscount(totalBelanja, isMember, isWeekend) {
    let diskon = 0;
    
    // Base discount
    if (totalBelanja >= 1000000) {
        diskon = 0.2;  // 20%
    } else if (totalBelanja >= 500000) {
        diskon = 0.1;  // 10%
    } else if (totalBelanja >= 100000) {
        diskon = 0.05; // 5%
    }
    
    // Member bonus
    if (isMember) {
        diskon += 0.05;
    }
    
    // Weekend bonus
    if (isWeekend && totalBelanja >= 200000) {
        diskon += 0.03;
    }
    
    // Cap max discount
    if (diskon > 0.3) {
        diskon = 0.3;
    }
    
    return diskon;
}
```

---

##### 2. FOR LOOP - DEFINITE ITERATION

**Tahapan Logika:**

```javascript
// STRUKTUR DASAR
// Algoritma:
// 1. Inisialisasi counter (let i = 0)
// 2. Check kondisi (i < 10)
// 3. Jika true, eksekusi body
// 4. Increment counter (i++)
// 5. Kembali ke step 2

for (let i = 0; i < 5; i++) {
    console.log(`Iterasi ke-${i}`);
}
// Output: Iterasi ke-0, 1, 2, 3, 4

// FOR LOOP DENGAN ARRAY
// Algoritma:
// 1. Inisialisasi i = 0
// 2. Loop selama i < array.length
// 3. Akses element dengan array[i]
// 4. Increment i

const buah = ["Apel", "Jeruk", "Mangga"];

for (let i = 0; i < buah.length; i++) {
    console.log(`Buah ke-${i + 1}: ${buah[i]}`);
}

// FOR LOOP DENGAN ACCUMULATOR
// Algoritma:
// 1. Inisialisasi accumulator di luar loop
// 2. Loop melalui data
// 3. Update accumulator di setiap iterasi
// 4. Return accumulator setelah loop

// Contoh: Sum array
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);  // 15

// Contoh: Find maximum
const values = [23, 45, 12, 67, 34];
let max = values[0];

for (let i = 1; i < values.length; i++) {
    if (values[i] > max) {
        max = values[i];
    }
}
console.log(max);  // 67

// APLIKASI: Generate multiplication table
function generateMultiplicationTable(n) {
    const table = [];
    
    for (let i = 1; i <= 10; i++) {
        table.push({
            multiplier: i,
            result: n * i,
            display: `${n} × ${i} = ${n * i}`
        });
    }
    
    return table;
}

generateMultiplicationTable(5);
// [{multiplier:1, result:5, display:"5×1=5"}, ...]

// APLIKASI: Pattern generation
function printPyramid(height) {
    let pyramid = "";
    
    for (let row = 1; row <= height; row++) {
        // Add spaces
        for (let space = 0; space < height - row; space++) {
            pyramid += " ";
        }
        
        // Add stars
        for (let star = 0; star < (2 * row - 1); star++) {
            pyramid += "*";
        }
        
        // New line
        pyramid += "\n";
    }
    
    return pyramid;
}

printPyramid(5);
/*
    *
   ***
  *****
 *******
*********
*/
```

---

##### 3. WHILE LOOP - INDEFINITE ITERATION

**Tahapan Logika:**

```javascript
// STRUKTUR DASAR
// Algoritma:
// 1. Evaluasi kondisi
// 2. Jika true, eksekusi body
// 3. Kembali ke step 1
// 4. Jika false, exit loop

let count = 0;
while (count < 5) {
    console.log(`Count: ${count}`);
    count++;  // IMPORTANT: Update kondisi!
}

// WHILE DENGAN VALIDASI
// Algoritma:
// 1. Set initial state
// 2. Loop selama kondisi belum terpenuhi
// 3. Update state di setiap iterasi
// 4. Exit saat kondisi terpenuhi

// Contoh: Input validation
function getValidInput() {
    let input = null;
    let attempts = 0;
    const maxAttempts = 3;
    
    while (input === null && attempts < maxAttempts) {
        // Simulate input
        input = attempts === 2 ? "valid" : null;
        attempts++;
    }
    
    return input;
}

// APLIKASI: Binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        // Step 1: Find middle
        const mid = Math.floor((left + right) / 2);
        
        // Step 2: Check if found
        if (arr[mid] === target) {
            return mid;
        }
        
        // Step 3: Narrow search space
        if (arr[mid] < target) {
            left = mid + 1;  // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }
    
    return -1;  // Not found
}

binarySearch([1, 3, 5, 7, 9, 11], 7);  // 3

// APLIKASI: Euclidean algorithm (GCD)
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

gcd(48, 18);  // 6
```

---

##### 4. NESTED LOOPS

**Tahapan Logika:**

```javascript
// POLA: Loop di dalam loop
// Algoritma:
// 1. Outer loop kontrol baris
// 2. Inner loop kontrol kolom
// 3. Inner loop selesai 1x untuk setiap outer iteration

// Contoh: Multiplication table
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
}

// APLIKASI: 2D array traversal
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Sum all elements
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
    }
}
console.log(sum);  // 45

// APLIKASI: Bubble sort
function bubbleSort(arr) {
    const n = arr.length;
    
    // Outer loop: number of passes
    for (let i = 0; i < n - 1; i++) {
        // Inner loop: compare adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    return arr;
}

bubbleSort([64, 34, 25, 12, 22, 11, 90]);
// [11, 12, 22, 25, 34, 64, 90]
```

---

##### 5. LOOP CONTROL (BREAK, CONTINUE, RETURN)

**Tahapan Logika:**

```javascript
// BREAK: Exit loop immediately
// Algoritma:
// 1. Loop normal
// 2. Jika kondisi break terpenuhi
// 3. Exit loop seketika
// 4. Lanjut ke code setelah loop

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Exit saat i = 5
    }
    console.log(i);  // 0, 1, 2, 3, 4
}

// CONTINUE: Skip current iteration
// Algoritma:
// 1. Loop normal
// 2. Jika kondisi continue terpenuhi
// 3. Skip sisa body, lanjut ke next iteration

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Skip i = 2
    }
    console.log(i);  // 0, 1, 3, 4
}

// RETURN: Exit function (dan loop)
// Algoritma:
// 1. Loop dalam function
// 2. Jika kondisi return terpenuhi
// 3. Exit function seketika dengan value

function findFirstEven(arr) {
    for (let num of arr) {
        if (num % 2 === 0) {
            return num;  // Exit function dengan value
        }
    }
    return null;  // No even number found
}

findFirstEven([1, 3, 5, 8, 9]);  // 8

// APLIKASI: Prime number check
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;  // Break early
        }
    }
    
    return true;
}

isPrime(17);  // true
isPrime(20);  // false
```

---

### ⚠️ Edge Cases dan Jebakan Umum

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **Infinite Loop** | Kondisi tidak pernah false | Pastikan ada update kondisi |
| **Off-by-One** | Loop 1x terlalu banyak/sedikit | Check `<` vs `<=`, mulai dari 0 atau 1 |
| **Variable Shadowing** | Variable i di-override di nested loop | Gunakan nama berbeda (i, j, k) |
| **Async in Loop** | Promise tidak wait di loop | Gunakan for...of dengan await |
| **Closure in Loop** | Function capture variable, bukan value | Gunakan let bukan var, atau IIFE |

---

### 💡 Aplikasi Dunia Nyata

**1. Data Validation Pipeline:**

```javascript
// Algoritma validation:
// 1. Check required fields
// 2. Check type
// 3. Check format
// 4. Check business rules

function validateUserRegistration(data) {
    const errors = [];
    
    // Step 1: Required fields
    const requiredFields = ['email', 'password', 'nama'];
    for (const field of requiredFields) {
        if (!data[field]) {
            errors.push(`${field} wajib diisi`);
        }
    }
    
    // If required fields missing, return early
    if (errors.length > 0) {
        return { valid: false, errors };
    }
    
    // Step 2: Email format
    if (!data.email.includes('@') || !data.email.includes('.')) {
        errors.push('Format email tidak valid');
    }
    
    // Step 3: Password strength
    if (data.password.length < 8) {
        errors.push('Password minimal 8 karakter');
    } else {
        let hasUpper = false, hasLower = false, hasNumber = false;
        
        for (const char of data.password) {
            if (char >= 'A' && char <= 'Z') hasUpper = true;
            if (char >= 'a' && char <= 'z') hasLower = true;
            if (char >= '0' && char <= '9') hasNumber = true;
        }
        
        if (!hasUpper || !hasLower || !hasNumber) {
            errors.push('Password harus mengandung huruf besar, kecil, dan angka');
        }
    }
    
    // Step 4: Business rules
    if (data.umur && data.umur < 17) {
        errors.push('Usia minimal 17 tahun');
    }
    
    return {
        valid: errors.length === 0,
        errors
    };
}
```

**2. Search and Filter Engine:**

```javascript
// Algoritma search:
// 1. Loop semua items
// 2. Check match criteria
// 3. Collect matches
// 4. Return results

function advancedSearch(products, filters) {
    const results = [];
    
    for (const product of products) {
        let isMatch = true;
        
        // Check each filter
        for (const [key, value] of Object.entries(filters)) {
            if (value === null || value === undefined) continue;
            
            if (key === 'search' && value) {
                const searchLower = value.toLowerCase();
                if (!product.nama.toLowerCase().includes(searchLower)) {
                    isMatch = false;
                    break;
                }
            }
            
            if (key === 'minPrice' && product.price < value) {
                isMatch = false;
                break;
            }
            
            if (key === 'maxPrice' && product.price > value) {
                isMatch = false;
                break;
            }
            
            if (key === 'category' && product.category !== value) {
                isMatch = false;
                break;
            }
        }
        
        if (isMatch) {
            results.push(product);
        }
    }
    
    return results;
}
```

---

### 📊 Kompleksitas Waktu Control Flow

| Struktur | Time Complexity | Keterangan |
|----------|----------------|------------|
| If/Else | O(1) | Constant time |
| For Loop (n iterations) | O(n) | Linear |
| While Loop (n iterations) | O(n) | Linear |
| Nested Loops (n × m) | O(n × m) | Quadratic jika n=m |
| Binary Search | O(log n) | Logarithmic |
| Bubble Sort | O(n²) | Quadratic |

---

---

### Misi Bab 3

Anda membutuhkan "Kristal Pengetahuan" yang hanya ada di server Google yang jauh. Anda mengirim utusan untuk mengambilnya. Proses ini memakan waktu 2 detik. Selama 2 detik itu, Anda tidak boleh membiarkan seluruh kerajaan sihir Anda (halaman web) membeku. Anda harus tetap bisa melakukan hal lain.

---

### 🧠 Model Mental: Utusan Gaib (Async)

> **🎭 Analogi: Memesan Ramuan**
>
> 1. **Promise:** Resi pesanan ramuan (Hasil di masa depan).
> 2. **Async:** Ruang waktu pribadi penyihir (Fungsi khusus).
> 3. **Await:** Menunggu utusan datang tanpa membekukan dunia.

| MANTRA | Deskripsi |
|--------|-----------|
| `Promise.all()` | Menunggu banyak utusan sekaligus agar lebih efisien |
| `Try ... Catch` | Perisai untuk menangkap kegagalan/error asinkron |

---

## 🧬 Penjelasan Mendalam: Async Programming, Promise, dan Event Loop

### 📚 Konsep Dasar: Mengapa Async itu Penting?

JavaScript adalah **single-threaded** — hanya punya **satu call stack** yang mengeksekusi kode secara berurutan. Jika ada operasi lama (network request, file I/O, timer), seluruh aplikasi akan **freeze** (membeku). Solusinya: **asynchronous programming** memungkinkan operasi berjalan di "latar belakang" tanpa memblokir thread utama.

| Konsep | Deskripsi |
|--------|-----------|
| **Synchronous** | Eksekusi berurutan. Operasi berikutnya menunggu yang sebelumnya selesai. Bisa blocking. |
| **Asynchronous** | Eksekusi tidak menunggu. Operasi selesai di "masa depan", callback dipanggil saat ready. |
| **Non-blocking I/O** | Operasi I/O berjalan di background, thread utama tetap responsif. |

---

### 🔬 Event Loop: Jantung Concurrency JavaScript

**Arsitektur Runtime JavaScript (Browser/Node.js):**

1. **Call Stack:** Tumpukan eksekusi fungsi. LIFO (Last In, First Out). Fungsi dipanggil → push ke stack. Fungsi selesai → pop dari stack.
2. **Web APIs / Node APIs:** Lingkungan di luar JavaScript engine (browser/Node.js) yang menangani async operations: setTimeout, fetch, DOM events, file I/O.
3. **Callback Queue (Task Queue):** Antrean untuk callback functions yang sudah selesai diproses di Web APIs dan menunggu dieksekusi.
4. **Microtask Queue:** Antrean prioritas tinggi untuk Promise callbacks (.then/.catch/.finally). Diproses SEBELUM Callback Queue.
5. **Event Loop:** "Penjaga gerbang" yang terus-menerus memeriksa:
   - Apakah Call Stack kosong? Jika ya...
   - Apakah Microtask Queue ada isi? Jika ya, push semua ke Call Stack
   - Jika tidak, apakah Callback Queue ada isi? Jika ya, push 1 task ke Call Stack
   - Ulangi proses ini terus-menerus (loop)

```javascript
// Ilustrasi Event Loop dalam aksi
console.log('1. Start');         // Call Stack: [log]

setTimeout(() => {
    console.log('2. Timeout');   // Callback Queue (setelah 0ms)
}, 0);

Promise.resolve().then(() => {
    console.log('3. Promise');   // Microtask Queue
});

console.log('4. End');           // Call Stack: [log]

// Output: 
// 1. Start
// 4. End        (sync selesai)
// 3. Promise    (microtask diproses dulu!)
// 2. Timeout    (callback queue diproses terakhir)
```

---

### 🔬 Algoritma Internal Promise

**Spesifikasi ECMAScript untuk Promise:**

Promise adalah object yang merepresentasikan **kompletnya sebuah operasi async di masa depan**. Promise punya 3 state:

- **Pending:** State awal. Belum selesai (belum fulfilled/rejected).
- **Fulfilled:** Operasi berhasil. Punya `value`.
- **Rejected:** Operasi gagal. Punya `reason` (error).

**State hanya bisa berubah sekali:** Pending → Fulfilled ATAU Pending → Rejected. Tidak bisa balik!

**Algoritma Internal Promise Resolution:**

1. **Instantiasi:** `new Promise(executor)` langsung dieksekusi synchronously.
2. **Executor Function:** Callback `(resolve, reject) => {...}` dipanggil dengan dua functions:
   - `resolve(value):` Ubah state Pending → Fulfilled, simpan value
   - `reject(reason):` Ubah state Pending → Rejected, simpan reason
3. **Handler Registration:** `.then(onFulfilled, onRejected)` menambahkan handlers ke internal [[PromiseFulfillReactions]] / [[PromiseRejectReactions]].
4. **State Change Trigger:** Saat resolve/reject dipanggil:
   - Ubah state dan set value/reason
   - Enqueue semua registered handlers ke **Microtask Queue**
   - Event Loop akan eksekusi handlers saat call stack kosong
5. **Chaining:** `.then()` selalu mengembalikan **Promise baru**, memungkinkan chaining.

```javascript
// Implementasi manual Promise untuk pemahaman (simplified)
class CustomPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        
        // Bind resolve dan reject
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                // Enqueue semua callback ke microtask queue
                this.onFulfilledCallbacks.forEach(fn => queueMicrotask(() => fn(value)));
            }
        };
        
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => queueMicrotask(() => fn(reason)));
            }
        };
        
        // Eksekusi executor (synchronous)
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    
    then(onFulfilled, onRejected) {
        // Handle state saat then dipanggil
        if (this.state === 'fulfilled') {
            queueMicrotask(() => onFulfilled(this.value));
        }
        if (this.state === 'rejected') {
            queueMicrotask(() => onRejected(this.reason));
        }
        if (this.state === 'pending') {
            // Simpan callback untuk nanti
            this.onFulfilledCallbacks.push(onFulfilled);
            this.onRejectedCallbacks.push(onRejected);
        }
        
        // Return promise baru untuk chaining
        return new CustomPromise((resolve) => {
            resolve(); // Simplified
        });
    }
}

// Penggunaan
const promise = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data berhasil diambil!');
    }, 1000);
});

promise.then(
    value => console.log('Success:', value),
    error => console.log('Error:', error)
);
```

---

### 🔬 Algoritma Internal async/await

**async/await adalah "syntactic sugar" di atas Promise.** Dibuat agar kode async terlihat dan terasa seperti synchronous.

1. **async function:** Function yang ditandai `async` otomatis mengembalikan **Promise**.
   - Jika return value biasa → Promise.resolve(value)
   - Jika throw error → Promise.reject(error)
2. **await expression:** Hanya bisa dipakai dalam async function. Cara kerjanya:
   - Evaluasi expression setelah await (harus Promise)
   - **Suspend** eksekusi async function saat itu juga
   - Kembalikan control ke event loop (non-blocking!)
   - Register continuation: saat promise settled, resume function dengan value/reason
   - Resume dari titik await, return value (atau throw jika rejected)
3. **Error Handling:** await bisa throw jika promise rejected. Gunakan try/catch.

```javascript
// Transformasi async/await ke Promise chain (di balik layar)

// Kode async/await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Gagal:', error);
        throw error;
    }
}

// Ekuivalen dengan Promise chain
function fetchData() {
    return fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Gagal:', error);
            throw error;
        });
}

// Generator + async approach (implementasi sebenarnya)
async function asyncFunction() {
    const value = await promise;
    return value;
}

// Di-compile menjadi seperti:
function asyncFunction() {
    return new Promise((resolve, reject) => {
        promise.then(
            value => resolve(value),
            error => reject(error)
        );
    });
}
```

---

### ⚠️ Edge Cases dan Jebakan Umum

**Serial vs Parallel Execution:** await berurutan bisa lambat. Gunakan Promise.all untuk paralel.

```javascript
// ❌ LAMBAT: Sequential (3 detik total)
const user = await fetch('/user');     // 1s
const posts = await fetch('/posts');   // 1s
const comments = await fetch('/comments'); // 1s

// ✓ CEPAT: Parallel (1 detik total)
const [user, posts, comments] = await Promise.all([
    fetch('/user'),
    fetch('/posts'),
    fetch('/comments')
]);
```

**Unhandled Promise Rejection:** Selalu handle error dengan .catch() atau try/catch.

```javascript
// ❌ BERBAHAYA: Unhandled rejection
fetch('/api').then(data => console.log(data));

// ✓ AMAN: Handle error
fetch('/api')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// Atau dengan async/await
try {
    const data = await fetch('/api');
    console.log(data);
} catch (error) {
    console.error('Error:', error);
}
```

**await di Loop:** Hati-hati dengan sequential awaits dalam loop.

```javascript
// ❌ Sequential (lambat)
for (const id of ids) {
    const data = await fetch(`/api/${id}`);
}

// ✓ Parallel (cepat)
const promises = ids.map(id => fetch(`/api/${id}`));
const results = await Promise.all(promises);
```

**Promise.all vs Promise.allSettled:**

```javascript
// Promise.all: Gagal satu, semua gagal
Promise.all([p1, p2, p3]) // Reject jika ada 1 reject

// Promise.allSettled: Tunggu semua selesai (sukses/gagal)
Promise.allSettled([p1, p2, p3])
    .then(results => {
        results.forEach(r => {
            if (r.status === 'fulfilled') {
                console.log('Success:', r.value);
            } else {
                console.log('Failed:', r.reason);
            }
        });
    });
```

---

### 💡 Aplikasi Dunia Nyata yang Kompleks

**1. Retry Logic dengan Exponential Backoff**

```javascript
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            // Exponential backoff: tunggu 2^i * 1000ms
            const delay = Math.pow(2, i) * 1000;
            console.log(`Retry ${i + 1} setelah ${delay}ms`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

// Penggunaan
const data = await fetchWithRetry('https://api.example.com/data', 5);
```

**2. Request Timeout dengan Race**

```javascript
async function fetchWithTimeout(url, timeoutMs = 5000) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), timeoutMs);
    });
    
    // Promise.race: yang mana saja selesai dulu, itu yang menang
    return Promise.race([
        fetch(url).then(res => res.json()),
        timeoutPromise
    ]);
}

// Penggunaan
try {
    const data = await fetchWithTimeout('https://api.example.com/data', 3000);
    console.log(data);
} catch (error) {
    console.error('Gagal:', error.message);
}
```

**3. Sequential Processing dengan Rate Limiting**

```javascript
// Proses request dengan delay untuk hindari rate limiting
async function processWithRateLimit(items, delayMs = 1000) {
    const results = [];
    
    for (const item of items) {
        const start = Date.now();
        try {
            const result = await fetch(`/api/process/${item.id}`);
            results.push(await result.json());
        } catch (error) {
            console.error(`Gagal proses ${item.id}:`, error);
            results.push(null);
        }
        
        // Delay untuk rate limiting
        const elapsed = Date.now() - start;
        if (elapsed < delayMs) {
            await new Promise(resolve => 
                setTimeout(resolve, delayMs - elapsed)
            );
        }
    }
    
    return results;
}
```

---

### 📊 Kompleksitas Waktu dan Performance

| Pattern | Time (n requests) | Use Case |
|---------|-------------------|----------|
| `await fetch() × n` | O(n × t)* | Sequential (dependent requests) |
| `Promise.all()` | O(t) | Parallel (independent requests) |
| `Promise.allSettled()` | O(t) | Parallel with error tolerance |
| `Promise.race()` | O(min(t)) | Timeout, fastest wins |

*\*t = waktu per request, n = jumlah request*

---

### ⚔️ Latihan Bertahap: Menguasai Waktu

| Level | Tantangan | Deskripsi |
|-------|-----------|-----------|
| LEVEL 1 | FizzBuzz | Loop klasik 1-100 dengan logika pembagian |
| LEVEL 2 | Bom Waktu | Gunakan `setTimeout` dan `async/await` |
| LEVEL 3 | Retry Logic | Coba lagi permintaan jika gagal maksimal 3x |

---

## 🧬 Penjelasan Mendalam: Async Programming dengan Promise dan Event Loop

### 📖 Apa itu Async Programming?

**Async Programming** adalah paradigma pemrograman yang memungkinkan operasi berjalan di "latar belakang" tanpa memblokir eksekusi kode lainnya. Jika synchronous adalah **mengantri di kasir** (satu per satu), async adalah **makan di food court** (pesan, duduk, makan sambil tunggu pesanan lain).

```javascript
// Synchronous: Blocking
const data = fetchData();  // Tunggu sampai selesai
console.log(data);         // Baru lanjut

// Asynchronous: Non-blocking
fetchData().then(data => {
    console.log(data);     // Dipanggil nanti saat data ready
});
console.log('Lanjut!');    // Langsung jalan, tidak tunggu
```

**Mengapa Async Penting?**

1. **Responsiveness:** UI tetap responsif saat loading
2. **Performance:** Multiple operations bisa jalan paralel
3. **Real-world:** Network, file I/O, timers semuanya async
4. **User Experience:** Tidak ada "freezing" aplikasi

---

### 🔬 Cara Membentuk Logika Algoritma untuk Async Programming

#### 📚 Framework Berpikir Algoritmik untuk Async

```
┌─────────────────────────────────────────────────────────┐
│  1. IDENTIFIKASI OPERASI ASYNC                          │
│     - Network request (fetch/API)?                     │
│     - File I/O?                                         │
│     - Timer/Timeout?                                    │
│     - User interaction (event listener)?               │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  2. PILIH PENDEKATAN                                    │
│     - Callback? → Function dipanggil saat selesai      │
│     - Promise? → .then()/.catch() chain                │
│     - Async/Await? → Code seperti synchronous          │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  3. RANCANG ERROR HANDLING                              │
│     - Try-catch untuk async/await                      │
│     - .catch() untuk Promise                           │
│     - Callback(error) untuk callback pattern           │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  4. HANDLE PARALLEL VS SEQUENTIAL                       │
│     - Parallel: Promise.all()                          │
│     - Sequential: await satu per satu                  │
│     - Limited: chunk dengan Promise.all()              │
└─────────────────────────────────────────────────────────┘
```

---

#### 🔍 Async Programming: Panduan Lengkap Step-by-Step

##### 1. PROMISE - DASAR

**Tahapan Logika:**

```javascript
// MEMBUAT PROMISE
// Algoritma:
// 1. Buat Promise dengan executor function
// 2. Executor dapat resolve dan reject function
// 3. Lakukan operasi async
// 4. Call resolve jika sukses, reject jika gagal

const promise = new Promise((resolve, reject) => {
    // Operasi async (contoh: fetch data)
    setTimeout(() => {
        const success = true;
        
        if (success) {
            resolve("Data berhasil diambil!");
        } else {
            reject("Gagal mengambil data");
        }
    }, 1000);
});

// MENGGUNAKAN PROMISE
// Algoritma:
// 1. Call .then() untuk handle success
// 2. Call .catch() untuk handle error
// 3. Call .finally() untuk cleanup (optional)

promise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Selesai!");
    });
```

---

##### 2. ASYNC/AWAIT - SYNTACTIC SUGAR

**Tahapan Logika:**

```javascript
// ASYNC FUNCTION
// Algoritma:
// 1. Tandai function dengan async
// 2. Function otomatis return Promise
// 3. Bisa pakai await di dalam function

async function getUser() {
    return { id: 1, nama: "Budi" };
    // Otomatis jadi: Promise.resolve({id: 1, nama: "Budi"})
}

// AWAIT KEYWORD
// Algoritma:
// 1. Await hanya bisa di async function
// 2. Pause eksekusi sampai Promise settled
// 3. Return value atau throw error
// 4. Non-blocking: event loop tetap jalan

async function fetchUserData() {
    try {
        // Step 1: Fetch data
        const response = await fetch('https://api.example.com/users/1');
        
        // Step 2: Parse JSON
        const data = await response.json();
        
        // Step 3: Return data
        return data;
    } catch (error) {
        // Step 4: Handle error
        console.error("Error:", error);
        throw error;
    }
}

// APLIKASI: Multiple sequential awaits
async function fetchUserWithPosts(userId) {
    // Sequential: tunggu user selesai dulu
    const userResponse = await fetch(`/api/users/${userId}`);
    const user = await userResponse.json();
    
    // Baru fetch posts
    const postsResponse = await fetch(`/api/posts?userId=${userId}`);
    const posts = await postsResponse.json();
    
    return { user, posts };
}

// APLIKASI: Parallel dengan Promise.all
async function fetchUserWithPostsParallel(userId) {
    // Parallel: fetch bersamaan
    const [userResponse, postsResponse] = await Promise.all([
        fetch(`/api/users/${userId}`),
        fetch(`/api/posts?userId=${userId}`)
    ]);
    
    const [user, posts] = await Promise.all([
        userResponse.json(),
        postsResponse.json()
    ]);
    
    return { user, posts };
}
```

---

##### 3. ERROR HANDLING

**Tahapan Logika:**

```javascript
// TRY-CATCH untuk async/await
// Algoritma:
// 1. Wrap async code dalam try block
// 2. Catch error di catch block
// 3. Optionally: finally block untuk cleanup

async function safeFetch(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error("Fetch failed:", error);
        return null;  // Fallback value
    } finally {
        console.log("Fetch completed");
    }
}

// APLIKASI: Retry logic dengan error handling
async function fetchWithRetry(url, maxRetries = 3) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`Attempt ${attempt}/${maxRetries}`);
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            lastError = error;
            
            // Don't retry on last attempt
            if (attempt === maxRetries) {
                break;
            }
            
            // Wait before retry (exponential backoff)
            const delay = Math.pow(2, attempt) * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    
    throw lastError;
}
```

---

##### 4. PARALLEL VS SEQUENTIAL EXECUTION

**Tahapan Logika:**

```javascript
// SEQUENTIAL: Satu per satu (lambat)
// Algoritma:
// 1. Await operation 1
// 2. Setelah selesai, await operation 2
// 3. Setelah selesai, await operation 3
// Total time: t1 + t2 + t3

async function fetchSequential() {
    const user = await fetch('/api/user');      // 1s
    const posts = await fetch('/api/posts');    // 1s
    const comments = await fetch('/api/comments'); // 1s
    
    return { user, posts, comments };
}
// Total: ~3 detik

// PARALLEL: Bersamaan (cepat)
// Algoritma:
// 1. Start semua operations (tanpa await)
// 2. Await Promise.all untuk tunggu semua
// Total time: max(t1, t2, t3)

async function fetchParallel() {
    const [user, posts, comments] = await Promise.all([
        fetch('/api/user'),
        fetch('/api/posts'),
        fetch('/api/comments')
    ]);
    
    return { user, posts, comments };
}
// Total: ~1 detik

// LIMITED PARALLEL: Chunked execution
// Algoritma:
// 1. Bagi tasks jadi chunks
// 2. Process tiap chunk dengan Promise.all
// 3. Await setiap chunk selesai sebelum next

async function processInChunks(items, chunkSize = 3) {
    const results = [];
    
    for (let i = 0; i < items.length; i += chunkSize) {
        const chunk = items.slice(i, i + chunkSize);
        
        const chunkResults = await Promise.all(
            chunk.map(item => processItem(item))
        );
        
        results.push(...chunkResults);
    }
    
    return results;
}
```

---

##### 5. PROMISE COMPOSITION

**Tahapan Logika:**

```javascript
// PROMISE.ALL: Tunggu semua sukses
// Algoritma:
// 1. Array of promises
// 2. Tunggu semua resolve
// 3. Return array of results
// 4. Jika satu reject, semua reject

const [user, posts] = await Promise.all([
    fetch('/api/user').then(r => r.json()),
    fetch('/api/posts').then(r => r.json())
]);

// PROMISE.ALLSETTLED: Tunggu semua selesai
// Algoritma:
// 1. Array of promises
// 2. Tunggu semua settle (resolve/reject)
// 3. Return array of {status, value/reason}

const results = await Promise.allSettled([
    fetch('/api/user').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/comments').then(r => r.json())
]);

results.forEach(result => {
    if (result.status === 'fulfilled') {
        console.log('Success:', result.value);
    } else {
        console.error('Failed:', result.reason);
    }
});

// PROMISE.RACE: Yang pertama selesai menang
// Algoritma:
// 1. Array of promises
// 2. Return promise pertama yang settle
// 3. Ignore yang lain

// APLIKASI: Timeout
function fetchWithTimeout(url, timeoutMs = 5000) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout')), timeoutMs);
    });
    
    return Promise.race([
        fetch(url).then(r => r.json()),
        timeoutPromise
    ]);
}
```

---

### ⚠️ Edge Cases dan Jebakan Umum

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **Await in Loop** | Sequential execution (lambat) | Gunakan Promise.all untuk parallel |
| **Forgotten await** | Promise tidak di-wait, return Promise bukan value | Selalu await atau return Promise |
| **Unhandled rejection** | Error tidak di-catch | Selalu pakai .catch() atau try-catch |
| **Promise.all fail fast** | Satu reject, semua fail | Gunakan Promise.allSettled jika perlu toleransi |
| **Async without await** | Function async tapi tidak ada await | Hapus async atau tambahkan await |
| **Nested then** | Promise hell dengan .then() bertingkat | Gunakan async/await untuk flat code |

---

### 💡 Aplikasi Dunia Nyata

**1. API Service Layer:**

```javascript
// Algoritma API service:
// 1. Base configuration
// 2. Request interceptor
// 3. Response interceptor
// 4. Error handling

class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.token = null;
    }
    
    setToken(token) {
        this.token = token;
    }
    
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        
        const config = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        };
        
        // Add auth token
        if (this.token) {
            config.headers.Authorization = `Bearer ${this.token}`;
        }
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                if (response.status === 401) {
                    this.handleUnauthorized();
                }
                throw new Error(`HTTP ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }
    
    async get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    }
    
    async post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    
    handleUnauthorized() {
        this.token = null;
    }
}
```

**2. Data Loading with Cache:**

```javascript
// Algoritma cache:
// 1. Check cache first
// 2. If hit, return cached data
// 3. If miss, fetch from API
// 4. Store in cache
// 5. Return data

class CachedService {
    constructor() {
        this.cache = new Map();
        this.cacheExpiry = 5 * 60 * 1000; // 5 minutes
    }
    
    async fetchWithCache(key, fetchFn) {
        const cached = this.cache.get(key);
        
        // Check if cached and not expired
        if (cached && (Date.now() - cached.timestamp) < this.cacheExpiry) {
            console.log('Cache hit:', key);
            return cached.data;
        }
        
        // Cache miss, fetch new data
        console.log('Cache miss:', key);
        const data = await fetchFn();
        
        // Store in cache
        this.cache.set(key, {
            data,
            timestamp: Date.now()
        });
        
        return data;
    }
    
    async getUser(userId) {
        return this.fetchWithCache(
            `user:${userId}`,
            () => fetch(`/api/users/${userId}`).then(r => r.json())
        );
    }
    
    invalidate(key) {
        this.cache.delete(key);
    }
    
    clear() {
        this.cache.clear();
    }
}
```

---

### 📊 Kompleksitas Waktu Async Operations

| Pattern | Time Complexity | Keterangan |
|---------|----------------|------------|
| Single await | O(t) | t = waktu operasi |
| Sequential awaits (n) | O(n × t) | Satu per satu |
| Promise.all (n) | O(t) | Paralel, t = max waktu |
| Promise.allSettled (n) | O(t) | Paralel dengan error tolerance |
| Promise.race (n) | O(min(t)) | Yang pertama selesai |
| Chunked (n, chunkSize) | O(n/chunkSize × t) | Limited parallel |

---

### ⚔️ Latihan Bertahap: Async Programming

#### LEVEL 1: Delay dengan Promise

**Tantangan:** Buat fungsi delay yang menunggu selama n milidetik

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Buat Promise:** Fungsi return Promise baru
> 2. **Setup setTimeout:** Gunakan setTimeout untuk delay
> 3. **Resolve Promise:** Call resolve setelah timeout
> 4. **Await untuk wait:** Gunakan await untuk wait
>
> ```javascript
> // Langkah 1: Buat fungsi delay
> function delay(ms) {
>     // Langkah 2: Return Promise
>     return new Promise(resolve => {
>         // Langkah 3: setTimeout call resolve setelah ms
>         setTimeout(resolve, ms);
>     });
> }
> 
> // Penggunaan dengan async/await
> async function waitAndLog() {
>     console.log('Start');
>     await delay(1000);  // Wait 1 detik
>     console.log('After 1 second');
>     await delay(2000);  // Wait 2 detik
>     console.log('After 2 more seconds');
> }
> 
> waitAndLog();
> ```

---

#### LEVEL 2: Fetch dengan Timeout

**Tantangan:** Buat fungsi fetch yang timeout jika terlalu lama

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Buat timeout Promise:** Promise yang reject setelah timeout
> 2. **Buat fetch Promise:** Promise untuk fetch request
> 3. **Race keduanya:** Gunakan Promise.race
> 4. **Handle timeout:** Catch error untuk timeout
>
> ```javascript
> // Langkah 1: Buat timeout promise
> function createTimeout(ms) {
>     return new Promise((_, reject) => {
>         setTimeout(() => reject(new Error('Timeout')), ms);
>     });
> }
> 
> // Langkah 2: Buat fetch dengan race
> async function fetchWithTimeout(url, timeoutMs = 5000) {
>     try {
>         // Langkah 3: Race antara fetch dan timeout
>         const response = await Promise.race([
>             fetch(url),
>             createTimeout(timeoutMs)
>         ]);
>         
>         return await response.json();
>     } catch (error) {
>         // Langkah 4: Handle timeout atau error lain
>         console.error('Fetch failed:', error.message);
>         throw error;
>     }
> }
> 
> // Penggunaan
> fetchWithTimeout('https://api.example.com/data', 3000)
>     .then(data => console.log(data))
>     .catch(error => console.error(error));
> ```

---

#### LEVEL 3: Retry Logic

**Tantangan:** Buat fungsi fetch yang retry otomatis jika gagal

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Loop untuk retry:** For loop dengan maxRetries
> 2. **Try-catch dalam loop:** Catch error untuk retry
> 3. **Exponential backoff:** Delay makin lama setiap retry
> 4. **Return jika sukses:** Break loop jika berhasil
> 5. **Throw jika gagal semua:** Throw error setelah semua retry
>
> ```javascript
> // Langkah 1: Fungsi dengan retry
> async function fetchWithRetry(url, maxRetries = 3) {
>     let lastError;
>     
>     // Langkah 2: Loop untuk retry
>     for (let attempt = 1; attempt <= maxRetries; attempt++) {
>         try {
>             console.log(`Attempt ${attempt}/${maxRetries}`);
>             
>             const response = await fetch(url);
>             
>             if (!response.ok) {
>                 throw new Error(`HTTP ${response.status}`);
>             }
>             
>             // Langkah 4: Return jika sukses
>             return await response.json();
>         } catch (error) {
>             lastError = error;
>             
>             // Jangan retry jika sudah attempt terakhir
>             if (attempt === maxRetries) {
>                 break;
>             }
>             
>             // Langkah 3: Exponential backoff
>             const delay = Math.pow(2, attempt) * 1000;
>             console.log(`Retrying in ${delay}ms...`);
>             await delay(delay);
>         }
>     }
>     
>     // Langkah 5: Throw jika gagal semua
>     throw lastError;
> }
> 
> // Penggunaan
> fetchWithRetry('https://api.example.com/data', 5)
>     .then(data => console.log('Success:', data))
>     .catch(error => console.error('All attempts failed:', error));
> ```

---

#### LEVEL 4: Parallel Processing dengan Limit

**Tantangan:** Process banyak URL dengan limit concurrent requests

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Chunk URLs:** Bagi URLs jadi kelompok-kelompok
> 2. **Process per chunk:** Fetch semua URL dalam chunk dengan Promise.all
> 3. **Await setiap chunk:** Tunggu chunk selesai sebelum next
> 4. **Collect results:** Kumpulkan semua hasil
>
> ```javascript
> // Langkah 1: Fungsi process dengan limit
> async function fetchWithConcurrency(urls, limit = 5) {
>     const results = [];
>     
>     // Langkah 2: Loop melalui URLs dalam chunks
>     for (let i = 0; i < urls.length; i += limit) {
>         const chunk = urls.slice(i, i + limit);
>         console.log(`Processing chunk ${Math.floor(i/limit) + 1}`);
>         
>         // Langkah 3: Fetch semua URL dalam chunk secara parallel
>         const chunkResults = await Promise.all(
>             chunk.map(url => fetch(url).then(r => r.json()))
>         );
>         
>         // Langkah 4: Collect results
>         results.push(...chunkResults);
>     }
>     
>     return results;
> }
> 
> // Penggunaan
> const urls = Array.from({length: 20}, (_, i) => 
>     `https://api.example.com/data/${i+1}`
> );
> 
> fetchWithConcurrency(urls, 5).then(results => {
>     console.log(`Fetched ${results.length} items`);
> });
> ```

---

#### LEVEL 5: Queue System dengan Priority

**Tantangan:** Buat task queue yang process tasks dengan priority

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Priority queue:** Sort tasks by priority
> 2. **Process sequentially:** Await setiap task sesuai priority
> 3. **Handle errors:** Catch error per task
> 4. **Return results:** Kumpulkan hasil semua tasks
>
> ```javascript
> // Langkah 1: Priority queue class
> class PriorityTaskQueue {
>     constructor(concurrency = 3) {
>         this.concurrency = concurrency;
>         this.queue = [];
>     }
>     
>     // Langkah 2: Add task dengan priority
>     addTask(taskFn, priority = 0) {
>         this.queue.push({ taskFn, priority });
>         // Sort by priority (higher first)
>         this.queue.sort((a, b) => b.priority - a.priority);
>     }
>     
>     // Langkah 3: Process queue
>     async processAll() {
>         const results = [];
>         
>         while (this.queue.length > 0) {
>             // Ambil tasks sesuai concurrency limit
>             const batch = this.queue.splice(0, this.concurrency);
>             
>             // Process batch secara parallel
>             const batchResults = await Promise.allSettled(
>                 batch.map(({ taskFn }) => taskFn())
>             );
>             
>             // Collect results
>             batchResults.forEach(result => {
>                 if (result.status === 'fulfilled') {
>                     results.push({ success: true, data: result.value });
>                 } else {
>                     results.push({ success: false, error: result.reason });
>                 }
>             });
>         }
>         
>         return results;
>     }
> }
> 
> // Penggunaan
> const queue = new PriorityTaskQueue(3);
> 
> queue.addTask(() => fetch('/api/high-priority').then(r => r.json()), 10);
> queue.addTask(() => fetch('/api/normal').then(r => r.json()), 5);
> queue.addTask(() => fetch('/api/low').then(r => r.json()), 1);
> 
> queue.processAll().then(results => {
>     console.log('All tasks completed:', results);
> });
> ```

---

---

### 🔮 7. Sihir Integrasi (Misi Akhir)

> **🎯 Ritual Pembuatan Laporan Penjualan**
>
> 1. **Map:** Transformasi data (Harga x Jumlah).
> 2. **Filter:** Seleksi penjualan tinggi (> 500).
> 3. **Reduce:** Akumulasi pendapatan total.
> 4. **Async:** Simpan ke "Sheet Gaib" (Wait 2s).

---

### Kitab Mantra (Kode untuk Misi)

```javascript
// Data mentah dari gulungan perkamen
const dataPenjualan = [
  { id: 1, produk: "Laptop", harga: 1200, jumlah: 2, wilayah: "Utara" },
  { id: 2, produk: "Mouse", harga: 25, jumlah: 5, wilayah: "Selatan" },
  { id: 3, produk: "Keyboard", harga: 75, jumlah: 3, wilayah: "Utara" },
  { id: 4, produk: "Monitor", harga: 300, jumlah: 1, wilayah: "Timur" },
  { id: 5, produk: "Headphone", harga: 150, jumlah: 4, wilayah: "Barat" },
  { id: 6, produk: "Tablet", harga: 400, jumlah: 2, wilayah: "Utara" }
];

// Fungsi simulasi penyimpanan (utusan gaib)
function simpanKeSpreadsheet(laporan) {
  return new Promise(resolve => {
    console.log("  -> Mengirim laporan ke Google Sheet...");
    setTimeout(() => {
      console.log("  -> Laporan berhasil disimpan!");
      resolve({ status: "sukses" });
    }, 1500);
  });
}

// Fungsi utama untuk ritual pembuatan laporan
async function prosesLaporanPenjualan() {
  console.log("Ritual Pembuatan Laporan Dimulai...\n");

  try {
    // --- Tahap 1: Mantra Transformasi (.map) ---
    console.log("Langkah 1: Mengubah setiap penjualan, menambahkan total...");
    const penjualanDenganTotal = dataPenjualan.map(penjualan => {
      return {
        ...penjualan, // Salin semua properti lama
        total: penjualan.harga * penjualan.jumlah // Tambah properti baru
      };
    });
    console.log(" -> Selesai.\n");

    // --- Tahap 2: Mantra Seleksi (.filter) ---
    console.log("Langkah 2: Menyaring penjualan bernilai tinggi (total > 500)...");
    const penjualanBernilaiTinggi = penjualanDenganTotal.filter(p => p.total > 500);
    console.log(` -> Ditemukan ${penjualanBernilaiTinggi.length} penjualan bernilai tinggi.\n`);

    // --- Tahap 3: Mantra Pemadatan (.reduce) ---
    console.log("Langkah 3: Menghitung statistik...");
    // Kuali 1: Menghitung total pendapatan dari penjualan bernilai tinggi
    const pendapatanBernilaiTinggi = penjualanBernilaiTinggi.reduce((total, p) => total + p.total, 0);

    // Kuali 2: Mengelompokkan penjualan berdasarkan wilayah
    const penjualanPerWilayah = penjualanDenganTotal.reduce((kuali, penjualan) => {
      const wilayah = penjualan.wilayah;
      // Jika wilayah belum ada di kuali, buat dengan nilai 0
      if (!kuali[wilayah]) {
        kuali[wilayah] = 0;
      }
      // Tambahkan total penjualan ke wilayah yang sesuai
      kuali[wilayah] += penjualan.total;
      return kuali; // Kembalikan kuali untuk iterasi berikutnya
    }, {}); // Cairan dasar adalah objek kosong {}
    console.log(" -> Statistik dihitung.\n");

    // --- Tahap 4: Mantra Penantian (async/await) ---
    console.log("Langkah 4: Menyimpan laporan...");
    const laporanFinal = {
      pendapatanPenting: pendapatanBernilaiTinggi,
      rekapWilayah: penjualanPerWilayah
    };
    await simpanKeSpreadsheet(laporanFinal);
    console.log(" -> Penyimpanan selesai.\n");

    // --- Tahap 5: Menampilkan Hasil Akhir ---
    console.log("--- RINGKASAN LAPORAN AKHIR ---");
    console.log(`Total Pendapatan dari Penjualan Bernilai Tinggi: $${pendapatanBernilaiTinggi}`);
    console.log("Rekapitulasi Pendapatan per Wilayah:");
    // Loop melalui objek rekap wilayah
    for (const wilayah in penjualanPerWilayah) {
      console.log(`  - ${wilayah}: $${penjualanPerWilayah[wilayah]}`);
    }
    console.log("\nRitual Pembuatan Laporan Selesai dengan Sempurna!");

  } catch (error) {
    console.error("Sebuah kesalahan terjadi selama ritual:", error);
  }
}

// Jalankan misi!
prosesLaporanPenjualan();
```

---

### 📚 Bab 5: Fondasi Tak Terlihat (Advanced Concepts)

| Kategori | Topik | Deskripsi |
|----------|-------|-----------|
| **SCOPING** | let vs const vs var | Gunakan **const** secara default. Gunakan **let** hanya jika nilai perlu dirubah. Tinggalkan **var** di masa lalu. |
| **STRUCTURE** | Destructuring & Spread | Sihir membongkar dan menggabungkan koper data (Object/Array) dengan sangat cepat dan bersih. |
| **ORGANIZATION** | Modules (Import/Export) | Pisahkan mantra-mantramu ke dalam kitab-kitab kecil agar mudah dikelola dan tidak berantakan. |

---

## 🏆 Misi Tambahan untuk Calon Maha Penyihir

> Berikut adalah beberapa misi tanpa jawaban langsung untuk menguji dan mengasah kekuatan sihir Anda.

---

### 🔁 Misi Perulangan & Kondisional

#### MISI 1: Deret Fibonacci

Buat mantra `deretFibonacci(n)` yang menghasilkan `n` angka pertama dari deret Fibonacci (0, 1, 1, 2, 3, 5, ...).

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Tangani Kasus Dasar:** Jika `n` adalah 0, kembalikan array kosong. Jika `n` adalah 1, kembalikan `[0]`.
> 2. **Inisialisasi Deret:** Buat sebuah array `hasil` yang diawali dengan dua angka pertama: `[0, 1]`.
> 3. **Perulangan:** Lakukan loop dari `i = 2` hingga `i < n`. Kita mulai dari 2 karena dua angka pertama sudah ada.
> 4. **Hitung Angka Berikutnya:** Di dalam loop, angka Fibonacci berikutnya adalah jumlah dari dua angka sebelumnya. Ambil dua elemen terakhir dari array `hasil` (`hasil[i-1]` dan `hasil[i-2]`) dan jumlahkan.
> 5. **Tambahkan ke Deret:** Masukkan (push) hasil penjumlahan ke dalam array `hasil`.
> 6. **Kembalikan Hasil:** Setelah loop selesai, kembalikan array `hasil`.

---

#### MISI 2: Pencari Bilangan Prima

Buat mantra `cariPrima(batas)` yang menampilkan semua bilangan prima dari 1 hingga `batas`.

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Loop Utama:** Buat loop luar yang berjalan dari angka 2 hingga `batas`. Angka 1 bukan bilangan prima.
> 2. **Asumsi Awal:** Di setiap iterasi loop luar, asumsikan angka saat ini (`i`) adalah bilangan prima. Buat variabel boolean, misal `apakahPrima = true`.
> 3. **Loop Pengecekan:** Buat loop dalam untuk memeriksa pembagi. Loop ini berjalan dari `j = 2` hingga `j <= Math.sqrt(i)`. Pengecekan cukup sampai akar kuadrat untuk efisiensi.
> 4. **Kondisi Pembagian:** Di dalam loop dalam, periksa apakah `i % j === 0`. Jika ya, berarti `i` memiliki pembagi selain 1 dan dirinya sendiri.
> 5. **Ubah Asumsi:** Jika kondisi pembagian terpenuhi, ubah `apakahPrima` menjadi `false` dan hentikan loop dalam (gunakan `break`) karena sudah pasti bukan prima.
> 6. **Keputusan Akhir:** Setelah loop dalam selesai, periksa nilai `apakahPrima`. Jika masih `true`, maka angka `i` adalah bilangan prima. Masukkan ke dalam array hasil.
> 7. **Kembalikan Hasil:** Setelah loop luar selesai, kembalikan array yang berisi semua bilangan prima yang ditemukan.

---

#### MISI 3: Pola Piramida

Buat mantra `buatPiramida(tinggi)` yang menggambar piramida bintang setinggi `tinggi`.

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Loop Baris:** Buat loop luar yang berjalan dari `i = 1` hingga `tinggi`. Variabel `i` ini merepresentasikan nomor baris saat ini.
> 2. **Analisis Pola:** Untuk setiap baris `i`, kita perlu mencetak dua hal: spasi di awal dan bintang.
>    - Jumlah spasi = `tinggi - i`
>    - Jumlah bintang = `2 * i - 1`
> 3. **Buat String Baris:** Di dalam loop baris, siapkan sebuah string kosong, misal `stringBaris = ""`.
> 4. **Loop Spasi:** Buat loop dalam pertama untuk menambahkan spasi. Loop ini berjalan sebanyak `tinggi - i` kali, setiap kali menambahkan karakter spasi ke `stringBaris`.
> 5. **Loop Bintang:** Buat loop dalam kedua untuk menambahkan bintang. Loop ini berjalan sebanyak `2 * i - 1` kali, setiap kali menambahkan karakter `*` ke `stringBaris`.
> 6. **Cetak Baris:** Setelah kedua loop dalam selesai, `stringBaris` sudah lengkap. Cetak string tersebut menggunakan `console.log()`.
> 7. **Alternatif Modern:** Gunakan method `repeat()`: `spasi = ' '.repeat(tinggi - i)` dan `bintang = '*'.repeat(2 * i - 1)`. Lalu gabungkan dan cetak: `console.log(spasi + bintang)`.

---

### ⚡ Misi Fungsi Orde-Tinggi

#### MISI 1: Analisis Data Mahasiswa

Diberikan array objek mahasiswa. Buat fungsi yang mengembalikan rata-rata IPK TI, mahasiswa terbaik, dan lulusan dengan pujian.

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Filter Mahasiswa TI:** Gunakan `.filter()` pada array mahasiswa untuk membuat array baru `mahasiswaTI` yang hanya berisi mahasiswa dengan `jurusan === 'TI'`.
> 2. **Hitung Rata-rata IPK TI:**
>    - Gunakan `.reduce()` pada `mahasiswaTI`. Jumlahkan semua `ipk` mereka.
>    - Bagi total IPK dengan panjang array `mahasiswaTI`. Jangan lupa tangani kasus jika tidak ada mahasiswa TI (pembagian dengan nol).
> 3. **Cari Mahasiswa Terbaik:**
>    - Gunakan `.reduce()` pada array mahasiswa asli.
>    - Bandingkan `ipk` dari `mahasiswaSaatIni` dengan `ipk` dari `mahasiswaTerbaikSejauhIni` (akumulator).
>    - Jika IPK saat ini lebih tinggi, kembalikan `mahasiswaSaatIni`. Jika tidak, kembalikan `mahasiswaTerbaikSejauhIni`.
>    - Nilai awal untuk reduce bisa berupa objek mahasiswa pertama.
> 4. **Cari Lulusan Pujian:**
>    - Gunakan `.filter()` pada `mahasiswaTI` untuk menyaring yang `ipk > 3.5`.
>    - Gunakan `.map()` pada hasil filter untuk mengambil hanya properti `nama` dari setiap objek.
> 5. **Gabungkan Hasil:** Kembalikan sebuah objek yang berisi ketiga hasil di atas.

---

#### MISI 2: Pengelompokan Data

Gunakan `.reduce()` untuk mengubah array transaksi menjadi objek dengan tanggal sebagai key.

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Inisialisasi Reducer:** Panggil `.reduce()` pada array transaksi. Nilai awal (initial value) untuk akumulator adalah sebuah objek kosong `{}`.
> 2. **Fungsi Reducer:** Fungsi callback akan menerima dua argumen utama: `akumulator` (objek yang sedang kita bangun) dan `transaksiSaatIni` (elemen array yang sedang diproses).
> 3. **Ambil Kunci Pengelompokan:** Di dalam fungsi, dapatkan nilai yang akan menjadi kunci, yaitu `transaksiSaatIni.tanggal`.
> 4. **Cek Keberadaan Kunci:** Periksa apakah kunci (tanggal) tersebut sudah ada di dalam `akumulator`. Contoh: `if (!akumulator[tanggal])`.
> 5. **Buat Array Baru:** Jika kunci belum ada, buat properti baru di `akumulator` dengan kunci tersebut, dan berikan nilai berupa array kosong. Contoh: `akumulator[tanggal] = [];`.
> 6. **Masukkan Data:** Masukkan (push) `transaksiSaatIni` ke dalam array yang sesuai dengan tanggalnya. Contoh: `akumulator[tanggal].push(transaksiSaatIni);`.
> 7. **Kembalikan Akumulator:** **Sangat penting!** Selalu kembalikan `akumulator` di akhir setiap iterasi agar bisa digunakan di iterasi berikutnya.

---

### ⏳ Misi Async/Await & Promise

#### MISI 1: Pengambilan Data Paralel

Gunakan `Promise.all()` untuk mengambil data pengguna dan postingan secara bersamaan dari dua API.

> **🔬 Tahapan Logika Algoritma:**
>
> 1. **Buat Fungsi Async:** Buat sebuah fungsi utama yang ditandai dengan `async`, misal `ambilDataGabungan()`.
> 2. **Siapkan Promise:** Di dalam fungsi, siapkan dua pemanggilan `fetch()` ke API pengguna dan API postingan. Setiap `fetch()` akan mengembalikan sebuah Promise. Jangan gunakan `await` di sini dulu.
> 3. **Gunakan Promise.all:** Masukkan kedua promise dari `fetch()` ke dalam sebuah array. Panggil `Promise.all()` dengan array promise tersebut sebagai argumen. Gunakan `await` di depan `Promise.all()`.
> 4. **Destructuring Hasil:** `Promise.all` akan mengembalikan sebuah array berisi hasil dari kedua promise (dalam urutan yang sama). Gunakan destructuring array untuk menampung hasilnya, misal: `const [responsUser, responsPost] = await Promise.all(...)`.
> 5. **Proses Respons:** Untuk setiap respons, panggil method `.json()` untuk mengubahnya menjadi data JavaScript. Karena `.json()` juga mengembalikan promise, kita bisa menggunakan `Promise.all` lagi untuk ini atau memprosesnya secara terpisah.
> 6. **Gabungkan Data:** Setelah mendapatkan data JSON dari keduanya, gabungkan menjadi satu objek.
> 7. **Error Handling:** Bungkus seluruh logika di dalam blok `try...catch` untuk menangani kemungkinan error jaringan atau API.

---

#### MISI 2: Antrian Proses

Proses 10 tugas secara async, batasi hanya 3 tugas yang berjalan bersamaan pada satu waktu.

> **🔬 Tahapan Logika Algoritma (Pendekatan Sederhana):**
>
> 1. **Siapkan Tugas:** Buat sebuah array berisi semua tugas yang akan dijalankan. Setiap tugas bisa berupa fungsi yang mengembalikan Promise.
> 2. **Buat Fungsi Antrian:** Buat fungsi `async prosesAntrian(tugas, batasParalel)`.
> 3. **Loop dalam Kelompok (Chunk):** Gunakan loop `for` yang berjalan dari `i = 0` hingga `tugas.length`, dengan langkah `i += batasParalel`. Ini akan memproses tugas dalam kelompok-kelompok.
> 4. **Ambil Kelompok Tugas:** Di dalam loop, gunakan `.slice(i, i + batasParalel)` untuk mengambil kelompok tugas saat ini.
> 5. **Jalankan Kelompok Secara Paralel:** Untuk kelompok tugas yang sudah diambil, panggil setiap fungsi tugas untuk mendapatkan array promise.
> 6. **Tunggu Kelompok Selesai:** Gunakan `await Promise.all()` pada array promise dari kelompok tersebut. Ini akan memastikan kelompok saat ini selesai sebelum melanjutkan ke kelompok berikutnya.
> 7. **Kumpulkan Hasil:** Simpan hasil dari setiap `Promise.all` jika diperlukan.

---

### 🏆 Misi Level Master: Ujian Akhir

| Misi | Deskripsi |
|------|-----------|
| 🛍️ **Toko Online** | Kelola stok, hitung diskon, dan sortir produk berdasarkan kategori atau harga |
| 📊 **Data Mahasiswa** | Hitung rata-rata IPK per jurusan dan temukan mahasiswa terbaik di setiap angkatan |
| 💰 **Keuangan Pribadi** | Lacak pengeluaran, kategorikan transaksi, dan buat peringatan jika boros |
| 💬 **Chat Real-time** | Simulasikan pengiriman pesan, pencarian keyword, dan hitung pesan belum dibaca |
| 🎮 **Tebak Kata** | Bangun logika permainan dengan nyawa, progres tebakan, dan skor tertinggi |
| ⛓️ **API & Cache** | Membangun sistem pengambilan data dari API dengan caching dan retry otomatis |

---

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

---

## 📚 Bab 6: Materi Lanjutan untuk Full-Stack Ready {#-bab-6-materi-lanjutan-untuk-full-stack-ready}

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

> **🎯 Tujuan Bab:** Melengkapi pemahaman JavaScript modern untuk siap kerja di industri. Bab ini mencakup konsep-konsep advanced yang WAJIB dikuasai.

---

### 🔴 1. DOM Manipulation & Event Handling

#### 📖 Konsep Dasar: Apa itu DOM?

**DOM (Document Object Model)** adalah representasi tree structure dari HTML document. Jika HTML adalah **blueprint bangunan**, maka DOM adalah **bangunan fisik** yang bisa kamu ubah, hias, dan manipulasi.

```javascript
// HTML: <div id="app"><h1>Hello</h1></div>

// DOM Tree:
// document
// └── html
//     ├── head
//     └── body
//         └── div#app
//             └── h1
//                 └── "Hello"
```

**Mengapa DOM Penting?**
1. **Interactive UI:** Membuat website responsif terhadap user
2. **Dynamic Content:** Update konten tanpa reload page
3. **Form Handling:** Validasi dan proses input user
4. **Single Page Apps:** Foundation untuk React, Vue, Angular

---

#### 🔬 Tahapan Logika: DOM Manipulation

**1. SELECT ELEMENT - Memilih Elemen**

```javascript
// Algoritma Selection:
// 1. Tentukan selector (id, class, tag, attribute)
// 2. Pilih method yang sesuai
// 3. Simpan reference ke variable

// CARA 1: getElementById (paling cepat)
// Algoritma:
// 1. Cari element dengan id exact match
// 2. Return element atau null jika tidak ada
const app = document.getElementById('app');

// CARA 2: querySelector (paling flexible)
// Algoritma:
// 1. Parse CSS selector string
// 2. Return first match atau null
const button = document.querySelector('.btn-primary');
const firstItem = document.querySelector('li.item');

// CARA 3: querySelectorAll (multiple elements)
// Algoritma:
// 1. Parse CSS selector string
// 2. Return NodeList semua matches
const allButtons = document.querySelectorAll('button');

// CARA 4: getElementsByClassName/TagName (live collection)
// Algoritma:
// 1. Return HTMLCollection (live update)
// 2. Auto update saat DOM berubah
const allItems = document.getElementsByClassName('item');
```

**2. MANIPULATE CONTENT - Mengubah Konten**

```javascript
// Algoritma Content Manipulation:
// 1. Select element
// 2. Pilih property yang sesuai
// 3. Assign new value

const element = document.querySelector('#title');

// innerHTML - Parse HTML tags
// Algoritma:
// 1. Parse string sebagai HTML
// 2. Replace semua child nodes
// 3. Render ulang
element.innerHTML = '<strong>Bold Text</strong>';

// textContent - Plain text only (lebih aman)
// Algoritma:
// 1. Escape semua HTML characters
// 2. Set text content
// 3. No HTML parsing
element.textContent = '<strong>Plain Text</strong>';
// Output: <strong>Plain Text</strong> (literal)

// value - Untuk form elements
// Algoritma:
// 1. Get/set current value
// 2. Trigger input events
const input = document.querySelector('#email');
input.value = 'user@email.com';
```

**3. MANIPULATE STYLE - Mengubah Style**

```javascript
// Algoritma Style Manipulation:
// 1. Select element
// 2. Akses style property
// 3. Set value dengan unit

const box = document.querySelector('.box');

// CARA 1: inline style (specific)
// Algoritma:
// 1. Akses style object
// 2. Set property dengan camelCase
// 3. Value dengan unit string
box.style.backgroundColor = 'blue';
box.style.fontSize = '16px';
box.style.marginTop = '20px';

// CARA 2: classList (recommended)
// Algoritma:
// 1. Manipulate class names
// 2. CSS handle styling
box.classList.add('active');      // Add class
box.classList.remove('hidden');   // Remove class
box.classList.toggle('dark');     // Toggle class
box.classList.contains('active'); // Check class (boolean)

// CARA 3: setAttribute (full control)
// Algoritma:
// 1. Set attribute string
// 2. Parse dan apply styles
box.setAttribute('style', 'color: red; padding: 10px;');
```

**4. CREATE & DELETE ELEMENTS - Buat/Hapus Elemen**

```javascript
// Algoritma Create Element:
// 1. Create element node
// 2. Set properties/attributes
// 3. Append to parent

// CREATE
// Algoritma:
// 1. document.createElement(tagName)
// 2. Set content, style, attributes
// 3. Append ke parent
const newDiv = document.createElement('div');
newDiv.className = 'card';
newDiv.textContent = 'New Card';
newDiv.id = 'card-1';

// Append ke parent
// Algoritma:
// 1. parent.appendChild(child) - add ke akhir
// 2. parent.insertBefore(new, ref) - add sebelum ref
// 3. parent.replaceChild(new, old) - replace
const container = document.querySelector('.container');
container.appendChild(newDiv);

// DELETE
// Algoritma:
// 1. element.remove() - hapus diri sendiri
// 2. parent.removeChild(child) - hapus dari parent
newDiv.remove();

// DELETE ALL CHILDREN
// Algoritma:
// 1. Loop sambil ada firstChild
// 2. Remove firstChild terus
while (container.firstChild) {
    container.removeChild(container.firstChild);
}

// ATAU set innerHTML kosong
container.innerHTML = '';
```

---

#### 🔬 Tahapan Logika: Event Handling

**1. EVENT LISTENERS - Mendengarkan Event**

```javascript
// Algoritma Event Listening:
// 1. Select target element
// 2. Define event type (click, submit, etc)
// 3. Provide callback function
// 4. Browser call callback saat event terjadi

const button = document.querySelector('#submit');

// CARA 1: addEventListener (recommended)
// Algoritma:
// 1. Register listener ke element
// 2. Store dalam internal list
// 3. Trigger saat event occur
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Event object:', event);
});

// CARA 2: Arrow function dengan event object
// Algoritma:
// 1. Event object auto passed
// 2. Akses properties: target, type, preventDefault, dll
button.addEventListener('click', (e) => {
    console.log('Clicked element:', e.target);
    e.preventDefault(); // Stop default behavior
});

// CARA 3: Named function (reusable)
// Algoritma:
// 1. Define function terpisah
// 2. Pass reference (tanpa ())
function handleClick(event) {
    console.log('Handled by named function');
}
button.addEventListener('click', handleClick);

// REMOVE LISTENER
// Algoritma:
// 1. Harus reference function yang sama
// 2. removeEventListener(type, function)
button.removeEventListener('click', handleClick);
```

**2. COMMON EVENTS - Event yang Sering Dipakai**

```javascript
// MOUSE EVENTS
// Algoritma: Deteksi interaksi mouse
element.addEventListener('click', handler);      // Click
element.addEventListener('dblclick', handler);   // Double click
element.addEventListener('mousedown', handler);  // Button down
element.addEventListener('mouseup', handler);    // Button up
element.addEventListener('mousemove', handler);  // Mouse move
element.addEventListener('mouseenter', handler); // Enter element
element.addEventListener('mouseleave', handler); // Leave element

// KEYBOARD EVENTS
// Algoritma: Deteksi keyboard input
document.addEventListener('keydown', (e) => {
    console.log('Key pressed:', e.key);      // Key name
    console.log('Key code:', e.keyCode);     // Key code
    console.log('Ctrl:', e.ctrlKey);         // Ctrl pressed?
    console.log('Shift:', e.shiftKey);       // Shift pressed?
});

document.addEventListener('keyup', handler);   // Key released
document.addEventListener('keypress', handler); // Character key

// FORM EVENTS
// Algoritma: Handle form interaction
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    // Process form data
});

input.addEventListener('input', (e) => {
    console.log('Input value:', e.target.value); // Real-time value
});

input.addEventListener('change', (e) => {
    console.log('Value changed:', e.target.value); // On blur
});

input.addEventListener('focus', handler); // Focused
input.addEventListener('blur', handler);  // Lost focus

// DOCUMENT/WINDOW EVENTS
// Algoritma: Handle page/window events
window.addEventListener('load', handler);      // Page fully loaded
window.addEventListener('DOMContentLoaded', handler); // DOM ready
window.addEventListener('resize', handler);    // Window resized
window.addEventListener('scroll', handler);    // Window scrolled
```

**3. EVENT BUBBLING & CAPTURING - Event Propagation**

```javascript
// Algoritma Event Propagation:
// 1. Event terjadi di target element
// 2. Propagate ke ancestors (bubble) atau dari ancestors (capture)
// 3. Handler dipanggil sesuai phase

// EVENT BUBBLING (default)
// Algoritma:
// 1. Event mulai dari target (paling dalam)
// 2. Bubble ke parent
// 3. Bubble ke grandparent
// 4. Sampai ke document

// HTML: <div id="outer"><div id="inner">Click</div></div>
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');

// Bubble: inner → outer → document
inner.addEventListener('click', () => {
    console.log('Inner clicked (bubble)');
});

outer.addEventListener('click', () => {
    console.log('Outer clicked (bubble)');
});

// Click inner akan log:
// "Inner clicked (bubble)"
// "Outer clicked (bubble)"

// EVENT CAPTURING
// Algoritma:
// 1. Event mulai dari document (paling luar)
// 2. Capture ke target
// 3. Capture ke innermost

// Capture: document → outer → inner
outer.addEventListener('click', () => {
    console.log('Outer clicked (capture)');
}, true); // true = capture phase

inner.addEventListener('click', () => {
    console.log('Inner clicked (capture)');
}, true);

// Click inner akan log:
// "Outer clicked (capture)"
// "Inner clicked (capture)"

// STOP PROPAGATION
// Algoritma:
// 1. event.stopPropagation()
// 2. Stop event dari propagate
// 3. Handler lain tidak dipanggil
inner.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Inner clicked, propagation stopped');
});
```

**4. EVENT DELEGATION - Pattern Efisien**

```javascript
// Algoritma Event Delegation:
// 1. Add listener ke parent (bukan setiap child)
// 2. Gunakan event.target untuk identify source
// 3. Handle berdasarkan target

// ❌ TIDAK EFISIEN: Listener untuk setiap item
// Algoritma:
// 1. Loop semua items
// 2. Add listener ke setiap item
// 3. Memory intensive untuk banyak items
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log('Item clicked:', e.target);
    });
});

// ✅ EFISIEN: Event delegation
// Algoritma:
// 1. Add 1 listener ke parent
// 2. Check event.target
// 3. Handle jika target match selector
const list = document.querySelector('#list');

list.addEventListener('click', (e) => {
    // Find closest matching parent
    const item = e.target.closest('.item');
    
    // Check jika click di dalam item
    if (item && list.contains(item)) {
        console.log('Item clicked:', item.textContent);
    }
});

// APLIKASI: Dynamic content
// Algoritma:
// 1. Listener di parent
// 2. New child auto handled
// 3. No need to add listener ke new elements
list.addEventListener('click', (e) => {
    if (e.target.matches('.delete-btn')) {
        const item = e.target.closest('.item');
        item.remove();
    }
});

// Tambah new item (auto handled!)
const newItem = document.createElement('li');
newItem.className = 'item';
list.appendChild(newItem);
```

---

#### ⚠️ Jebakan Umum & Best Practices

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **innerHTML dengan user input** | XSS vulnerability | Gunakan textContent atau sanitize input |
| **Event listener tidak di-remove** | Memory leaks | Remove listener di cleanup/unmount |
| **this context hilang** | this tidak sesuai expected | Gunakan arrow function atau bind |
| **Event bubbling tidak diinginkan** | Parent handler ikut trigger | Gunakan stopPropagation |
| **Query selector di loop** | Performance issue | Cache selector di luar loop |
| **Direct style manipulation** | Hard to maintain | Gunakan classList toggle |

**Best Practices:**

```javascript
// 1. Cache DOM references
// ❌ Bad: Query setiap kali
function bad() {
    document.querySelector('#btn').click();
    document.querySelector('#btn').disabled = true;
}

// ✅ Good: Cache sekali
const btn = document.querySelector('#btn');
function good() {
    btn.click();
    btn.disabled = true;
}

// 2. Use event delegation
// ✅ Good: 1 listener untuk banyak elements
document.querySelector('#list').addEventListener('click', (e) => {
    const item = e.target.closest('.item');
    if (item) { /* handle */ }
});

// 3. Debounce expensive events
// ✅ Good: Limit execution rate
function debounce(fn, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

window.addEventListener('resize', debounce(() => {
    console.log('Resize handled');
}, 300));

// 4. Use documentFragment untuk batch insert
// ✅ Good: Single reflow
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}
list.appendChild(fragment); // Single DOM update
```

---

#### 💡 Aplikasi Dunia Nyata

**1. Form Validation:**

```javascript
// Algoritma Form Validation:
// 1. Listen submit event
// 2. Prevent default
// 3. Validate each field
// 4. Show errors
// 5. Submit jika valid

const form = document.querySelector('#registerForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = form.querySelector('#email').value;
    const password = form.querySelector('#password').value;
    const errors = [];
    
    // Validate email
    if (!email || !email.includes('@')) {
        errors.push('Email tidak valid');
    }
    
    // Validate password
    if (!password || password.length < 8) {
        errors.push('Password minimal 8 karakter');
    }
    
    if (errors.length > 0) {
        // Show errors
        const errorDiv = document.querySelector('#errors');
        errorDiv.innerHTML = errors.map(err => `<p>${err}</p>`).join('');
        errorDiv.style.display = 'block';
        return;
    }
    
    // Submit form
    console.log('Form valid, submitting...');
    form.submit();
});
```

**2. Modal/Popup:**

```javascript
// Algoritma Modal:
// 1. Show modal on trigger
// 2. Close on X button
// 3. Close on outside click
// 4. Close on Escape key

const modal = document.querySelector('#modal');
const openBtn = document.querySelector('#openModal');
const closeBtn = document.querySelector('#closeModal');

// Open modal
openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll
});

// Close on X button
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

// Close on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});
```

**3. Tab Navigation:**

```javascript
// Algoritma Tab System:
// 1. Click tab button
// 2. Remove active from all tabs
// 3. Add active to clicked tab
// 4. Hide all contents
// 5. Show corresponding content

const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active from all
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        // Add active to clicked
        tab.classList.add('active');
        
        // Show corresponding content
        const target = tab.dataset.target;
        document.querySelector(target).classList.add('active');
    });
});
```

---

#### 📊 Kompleksitas Waktu DOM Operations

| Operasi | Time Complexity | Keterangan |
|---------|----------------|------------|
| getElementById | O(1) | Hash lookup |
| querySelector | O(n) | CSS selector parsing |
| querySelectorAll | O(n) | Return NodeList |
| innerHTML get | O(n) | Serialize all children |
| innerHTML set | O(n) | Parse and render |
| textContent get | O(n) | Concatenate all text |
| textContent set | O(1) | Set text node |
| appendChild | O(1) | Single node |
| removeChild | O(1) | Single node |
| classList.add/remove | O(1) | Class manipulation |
| addEventListener | O(1) | Register listener |

---

### ⚔️ Latihan Bertahap: DOM Manipulation (LEVEL 1-5)

> **🎯 Misi:** Kuasai manipulasi DOM dari dasar hingga advanced dengan 5 level tantangan!

---

#### 🟢 LEVEL 1: Pilih & Ubah Elemen

**📖 Konsep:** Menggunakan selector untuk memilih dan memodifikasi elemen.

**🔬 Tahapan Logika:**
1. Pilih elemen dengan `getElementById` atau `querySelector`
2. Ubah properti `textContent` atau `innerHTML`
3. Ubah style dengan `.style.property`

**⚔️ Tantangan:**

```javascript
// SOAL 1: Ubah teks judul
function ubahJudul(judulBaru) {
    // TODO: Pilih elemen dengan id "judul"
    // TODO: Ubah textContent dengan judulBaru
}

// SOAL 2: Ubah warna background
function ubahWarnaBackground(idElemen, warna) {
    // TODO: Pilih elemen
    // TODO: Ubah style.backgroundColor
}

// SOAL 3: Tambahkan class active
function aktifkanElemen(idElemen) {
    // TODO: Pilih elemen
    // TODO: classList.add('active')
}
```

**✅ Solusi:**

```javascript
// SOLUSI 1
function ubahJudul(judulBaru) {
    const judul = document.getElementById("judul");
    if (judul) {
        judul.textContent = judulBaru;
    }
}

// SOLUSI 2
function ubahWarnaBackground(idElemen, warna) {
    const elemen = document.getElementById(idElemen);
    if (elemen) {
        elemen.style.backgroundColor = warna;
    }
}

// SOLUSI 3
function aktifkanElemen(idElemen) {
    const elemen = document.getElementById(idElemen);
    if (elemen) {
        elemen.classList.add("active");
    }
}
```

---

#### 🟡 LEVEL 2: Buat & Hapus Elemen

**📖 Konsep:** Membuat elemen baru secara dinamis dan menghapus elemen.

**🔬 Tahapan Logika:**
1. Buat elemen dengan `document.createElement`
2. Set atribut dan konten
3. Append dengan `appendChild` atau `insertBefore`
4. Hapus dengan `remove()` atau `removeChild`

**⚔️ Tantangan:**

```javascript
// SOAL 1: Buat elemen list baru
function tambahListItem(idList, teksItem) {
    // TODO: Buat li baru
    // TODO: Set textContent
    // TODO: Append ke ul/ol
}

// SOAL 2: Hapus elemen pertama dari list
function hapusItemPertama(idList) {
    // TODO: Pilih list
    // TODO: Dapatkan firstChild atau firstElementChild
    // TODO: Remove
}

// SOAL 3: Buat card produk
function buatCardProduk(produk) {
    // TODO: Buat div.card
    // TODO: Buat h3 untuk nama
    // TODO: Buat p untuk harga
    // TODO: Append semua
    // TODO: Return elemen card
}
```

**✅ Solusi:**

```javascript
// SOLUSI 1
function tambahListItem(idList, teksItem) {
    const list = document.getElementById(idList);
    if (!list) return;

    const li = document.createElement("li");
    li.textContent = teksItem;
    list.appendChild(li);
}

// SOLUSI 2
function hapusItemPertama(idList) {
    const list = document.getElementById(idList);
    if (!list || !list.firstElementChild) return;

    list.firstElementChild.remove();
}

// SOLUSI 3
function buatCardProduk(produk) {
    const card = document.createElement("div");
    card.className = "card";

    const nama = document.createElement("h3");
    nama.textContent = produk.nama;

    const harga = document.createElement("p");
    harga.className = "harga";
    harga.textContent = `Rp ${produk.harga.toLocaleString()}`;

    card.appendChild(nama);
    card.appendChild(harga);

    return card;
}
```

---

#### 🟠 LEVEL 3: Event Handling Basic

**📖 Konsep:** Menambahkan interaktivitas dengan event listeners.

**🔬 Tahapan Logika:**
1. Pilih elemen target
2. Gunakan `addEventListener(eventType, handler)`
3. Akses event object di handler
4. Manipulasi DOM berdasarkan event

**⚔️ Tantangan:**

```javascript
// SOAL 1: Click counter
function buatClickCounter() {
    // TODO: Buat button dengan teks "Klik saya!"
    // TODO: Buat variable counter = 0
    // TODO: AddEventListener click
    // TODO: Increment counter dan update textContent
}

// SOAL 2: Toggle dark mode
function buatDarkModeToggle() {
    // TODO: Pilih button toggle
    // TODO: AddEventListener click
    // TODO: Toggle class 'dark-mode' di document.body
}

// SOAL 3: Double click untuk hapus
function hapusDenganDoubleClick(selector) {
    // TODO: Pilih semua elemen dengan selector
    // TODO: Untuk setiap elemen, addEventListener 'dblclick'
    // TODO: Hapus elemen saat double click
}
```

**✅ Solusi:**

```javascript
// SOLUSI 1
function buatClickCounter() {
    const button = document.createElement("button");
    button.textContent = "Klik saya!";

    let counter = 0;

    button.addEventListener("click", () => {
        counter++;
        button.textContent = `Diklik ${counter} kali`;
    });

    return button;
}

// SOLUSI 2
function buatDarkModeToggle() {
    const toggle = document.getElementById("darkModeToggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// SOLUSI 3
function hapusDenganDoubleClick(selector) {
    const elemenList = document.querySelectorAll(selector);

    elemenList.forEach((elemen) => {
        elemen.addEventListener("dblclick", function() {
            this.remove();
        });
    });
}
```

---

#### 🔴 LEVEL 4: Form Handling & Validation

**📖 Konsep:** Menangani submit form dan validasi input user.

**🔬 Tahapan Logika:**
1. Pilih form element
2. AddEventListener 'submit'
3. `event.preventDefault()` untuk stop default
4. Ambil nilai dari input fields
5. Validasi setiap field
6. Tampilkan error atau proses data

**⚔️ Tantangan:**

```javascript
// SOAL 1: Validasi email format
function validasiEmail(email) {
    // TODO: Buat regex untuk email
    // TODO: Test dengan email input
    // TODO: Return true/false
}

// SOAL 2: Real-time validation
function buatRealTimeValidation(idInput) {
    // TODO: Pilih input
    // TODO: AddEventListener 'input' atau 'blur'
    // TODO: Validasi saat user mengetik
    // TODO: Tampilkan pesan error/success
}

// SOAL 3: Full form validation
function validasiFormRegistrasi(form) {
    // TODO: Prevent default submit
    // TODO: Validasi nama (min 3 karakter)
    // TODO: Validasi email (format valid)
    // TODO: Validasi password (min 8 karakter)
    // TODO: Validasi konfirmasi password (sama)
    // TODO: Return object {valid, errors}
}
```

**✅ Solusi:**

```javascript
// SOLUSI 1
function validasiEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// SOLUSI 2
function buatRealTimeValidation(idInput) {
    const input = document.getElementById(idInput);
    if (!input) return;

    const feedback = document.createElement("span");
    feedback.className = "validation-feedback";
    input.parentNode.appendChild(feedback);

    input.addEventListener("input", () => {
        const value = input.value.trim();

        if (value.length === 0) {
            feedback.textContent = "Wajib diisi";
            feedback.className = "feedback error";
        } else if (value.length < 3) {
            feedback.textContent = "Minimal 3 karakter";
            feedback.className = "feedback warning";
        } else {
            feedback.textContent = "✓ Valid";
            feedback.className = "feedback success";
        }
    });
}

// SOLUSI 3
function validasiFormRegistrasi(form) {
    const errors = [];

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nama = form.querySelector("#nama")?.value?.trim();
        const email = form.querySelector("#email")?.value?.trim();
        const password = form.querySelector("#password")?.value;
        const konfirmasi = form.querySelector("#konfirmasi")?.value;

        // Validasi nama
        if (!nama || nama.length < 3) {
            errors.push("Nama minimal 3 karakter");
        }

        // Validasi email
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.push("Email tidak valid");
        }

        // Validasi password
        if (!password || password.length < 8) {
            errors.push("Password minimal 8 karakter");
        }

        // Validasi konfirmasi
        if (password !== konfirmasi) {
            errors.push("Konfirmasi password tidak sama");
        }

        if (errors.length > 0) {
            alert("Error:\n" + errors.join("\n"));
            return { valid: false, errors };
        }

        // Form valid, bisa submit
        console.log("Form valid!", { nama, email });
        return { valid: true, data: { nama, email } };
    });
}
```

---

#### 🟣 LEVEL 5: Advanced DOM Projects

**📖 Konsep:** Membangun komponen interaktif kompleks.

**⚔️ Tantangan:**

```javascript
// PROYEK 1: Modal Dialog System
function buatModalSystem() {
    // TODO: Buat fungsi openModal(id)
    // TODO: Buat fungsi closeModal(id)
    // TODO: Close modal saat klik di luar konten
    // TODO: Close modal dengan tombol Escape
    // TODO: Prevent scroll body saat modal terbuka
}

// PROYEK 2: Tab Navigation
function buatTabNavigation() {
    // TODO: Click tab button
    // TODO: Remove active dari semua tabs
    // TODO: Add active ke tab yang diklik
    // TODO: Show corresponding content
    // TODO: Hide other contents
}

// PROYEK 3: Todo List App
function buatTodoList() {
    // TODO: Input field untuk todo baru
    // TODO: Button untuk add todo
    // TODO: List untuk menampilkan todos
    // TODO: Checkbox untuk mark complete
    // TODO: Button delete untuk setiap todo
    // TODO: Filter buttons (all/active/completed)
    // TODO: Save to localStorage
}

// PROYEK 4: Image Gallery dengan Lightbox
function buatImageGallery() {
    // TODO: Grid layout untuk thumbnails
    // TODO: Click thumbnail untuk open lightbox
    // TODO: Lightbox menampilkan gambar besar
    // TODO: Navigation (prev/next)
    // TODO: Close dengan X button atau Escape
    // TODO: Keyboard navigation (arrow keys)
}
```

**✅ Solusi Lengkap ada di `latihan-1.js`!**

---

### 🧠 Latihan Logika: Refleksi DOM

> **🎯 Pertanyaan Pemahaman:**
>
> 1. Apa perbedaan `innerHTML` dan `textContent`? Kapan menggunakan masing-masing?
> 2. Mengapa `addEventListener` lebih baik dari `onclick`?
> 3. Apa itu event delegation? Mengapa penting untuk performance?
> 4. Bagaimana cara mencegah event bubbling? Kapan perlu melakukannya?
> 5. Apa perbedaan `querySelector` dan `getElementById`?

---

### 🔴 2. Closures & Scope Deep Dive

#### 📖 Konsep Dasar: Scope & Closures

**Scope** adalah **visibility** atau **jangkauan** variable di dalam kode. Jika variable adalah **rahasia**, maka scope adalah **siapa yang boleh tahu rahasia tersebut**.

**Closure** adalah kombinasi dari **function + lexical environment** di mana function tersebut dibuat. Closure memungkinkan function untuk **mengakses variable dari outer scope** meskipun outer function sudah selesai dieksekusi.

```javascript
// SCOPE CHAIN:
// Global Scope
// └── Function Scope
//     └── Block Scope (let/const)

// CLOSURE:
// Outer function return inner function
// Inner function "remember" outer variables
// Even after outer function selesai!
```

**Mengapa Closures Penting?**
1. **Data Privacy:** Private variables
2. **Function Factories:** Generate functions dynamically
3. **Currying:** Partial application
4. **Memoization:** Cache results
5. **Event Handlers:** Maintain state
6. **Modules:** Encapsulation pattern

---

#### 🔬 Tahapan Logika: Understanding Closures

**1. LEXICAL SCOPE - Scope Berdasarkan Posisi**

```javascript
// Algoritma Lexical Scoping:
// 1. Inner function akses outer variable
// 2. Scope chain: inner → outer → global
// 3. Resolved saat compile time (bukan runtime)

// CONTOH 1: Basic lexical scope
// Algoritma:
// 1. Define outer function dengan variable
// 2. Define inner function
// 3. Inner akses outer variable
function outer() {
    const nama = 'Budi';  // Outer variable
    
    function inner() {    // Inner function
        console.log(nama); // Akses outer variable
    }
    
    inner(); // 'Budi'
}

outer();

// CONTOH 2: Nested scopes
// Algoritma:
// 1. Multiple levels of nesting
// 2. Each level akses semua outer levels
// 3. Shadowing jika nama sama
let a = 1; // Global scope

function level1() {
    let a = 2; // Level 1 scope
    
    function level2() {
        let a = 3; // Level 2 scope
        
        function level3() {
            console.log(a); // 3 (closest scope)
        }
        
        level3();
    }
    
    level2();
}

level1();

// CONTOH 3: Shadowing
// Algoritma:
// 1. Inner declare variable dengan nama sama
// 2. Inner menggunakan inner variable
// 3. Outer tetap menggunakan outer variable
const nama = 'Global';

function outer2() {
    const nama = 'Outer';
    
    function inner2() {
        const nama = 'Inner';
        console.log(nama); // 'Inner' (closest)
    }
    
    inner2();
    console.log(nama); // 'Outer'
}

outer2();
console.log(nama); // 'Global'
```

**2. CLOSURE BASIC - Function "Remember" Environment**

```javascript
// Algoritma Closure:
// 1. Outer function return inner function
// 2. Inner function referensi outer variable
// 3. Outer function selesai
// 4. Inner function masih bisa akses outer variable

// CONTOH 1: Basic closure
// Algoritma:
// 1. Create outer function dengan counter
// 2. Return inner function yang increment
// 3. Assign return value ke variable
// 4. Call variable sebagai function
function createCounter() {
    let count = 0; // Private variable
    
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// count variable TIDAK bisa diakses langsung
// console.log(count); // ReferenceError!

// CONTOH 2: Multiple closures
// Algoritma:
// 1. Call outer function multiple times
// 2. Setiap call buat closure baru
// 3. Setiap closure punya scope sendiri
const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1 (counter1 punya count sendiri)
console.log(counter2()); // 1 (counter2 punya count sendiri)
console.log(counter1()); // 2
console.log(counter2()); // 2

// CONTOH 3: Closure dengan parameter
// Algoritma:
// 1. Outer function terima parameter
// 2. Inner function gunakan parameter
// 3. Parameter "tersimpan" di closure
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**3. CLOSURE IN LOOP - Common Pitfall**

```javascript
// ❌ MASALAH: Closure dalam loop
// Algoritma yang SALAH:
// 1. Loop dengan var (function scope)
// 2. Inner function referensi loop variable
// 3. Semua function share variable yang sama
// 4. Saat dipanggil, variable sudah final value

// Problem dengan var
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3 (bukan 0, 1, 2!)
    }, 100);
}
// Kenapa? Semua closure share variable i yang sama
// Saat timeout dipanggil, loop sudah selesai, i = 3

// ✅ SOLUSI 1: Gunakan let (block scope)
// Algoritma:
// 1. Gunakan let bukan var
// 2. Setiap iteration punya i baru
// 3. Setiap closure dapat i yang berbeda
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 0, 1, 2 ✓
    }, 100);
}

// ✅ SOLUSI 2: IIFE (Immediately Invoked Function Expression)
// Algoritma:
// 1. Wrap dalam IIFE
// 2. Pass i sebagai parameter
// 3. IIFE buat scope baru untuk setiap iteration
for (var i = 0; i < 3; i++) {
    (function(currentI) {
        setTimeout(function() {
            console.log(currentI); // 0, 1, 2 ✓
        }, 100);
    })(i);
}

// ✅ SOLUSI 3: forEach
// Algoritma:
// 1. Gunakan array method
// 2. Callback dapat scope sendiri
[0, 1, 2].forEach(function(i) {
    setTimeout(function() {
        console.log(i); // 0, 1, 2 ✓
    }, 100);
});
```

**4. MODULE PATTERN - Closure untuk Encapsulation**

```javascript
// Algoritma Module Pattern:
// 1. IIFE create private scope
// 2. Private variables di dalam IIFE
// 3. Return object dengan public methods
// 4. Public methods punya akses ke private via closure

// CONTOH 1: Basic module
// Algoritma:
// 1. Wrap dalam IIFE
// 2. Define private variables
// 3. Return object dengan public API
const CounterModule = (function() {
    // Private variables
    let count = 0;
    const secret = '12345';
    
    // Private function
    function log(message) {
        console.log(`[Counter]: ${message}`);
    }
    
    // Public API
    return {
        increment: function() {
            count++;
            log(`Count incremented to ${count}`);
            return count;
        },
        
        decrement: function() {
            count--;
            log(`Count decremented to ${count}`);
            return count;
        },
        
        getCount: function() {
            return count;
        }
    };
})();

CounterModule.increment(); // 1
CounterModule.increment(); // 2
console.log(CounterModule.getCount()); // 2
console.log(CounterModule.count); // undefined (private!)
console.log(CounterModule.secret); // undefined (private!)

// CONTOH 2: Module dengan parameters
// Algoritma:
// 1. IIFE terima configuration
// 2. Create module dengan config
// 3. Return customized module
function createModule(config) {
    let state = config.initialValue || 0;
    
    return {
        get: function() {
            return state;
        },
        set: function(value) {
            state = value;
        },
        reset: function() {
            state = config.initialValue || 0;
        }
    };
}

const module1 = createModule({ initialValue: 100 });
const module2 = createModule({ initialValue: 200 });

console.log(module1.get()); // 100
console.log(module2.get()); // 200
```

---

#### 💡 Aplikasi Dunia Nyata

**1. Data Privacy (Private Variables):**

```javascript
// Algoritma Private Data:
// 1. Wrap dalam closure
// 2. Variable di luar jangkauan global
// 3. Hanya accessible via public methods

function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private!
    
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                return balance;
            }
            throw new Error('Invalid amount');
        },
        
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return balance;
            }
            throw new Error('Insufficient funds');
        },
        
        getBalance: function() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);
account.deposit(500); // 1500
account.withdraw(200); // 1300
console.log(account.getBalance()); // 1300
console.log(account.balance); // undefined (private!)
```

**2. Memoization (Cache Results):**

```javascript
// Algoritma Memoization:
// 1. Create cache object
// 2. Check cache sebelum compute
// 3. Return cached jika ada
// 4. Compute dan cache jika belum

function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        // Check cache
        if (cache[key]) {
            console.log('Returning from cache');
            return cache[key];
        }
        
        // Compute and cache
        console.log('Computing...');
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Usage: Expensive function
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoFib = memoize(fibonacci);
console.log(memoFib(10)); // Computing... then result
console.log(memoFib(10)); // Returning from cache!
```

**3. Function Currying:**

```javascript
// Algoritma Currying:
// 1. Function return function
// 2. Accumulate arguments
// 3. Execute saat semua arguments ada

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...moreArgs) {
                return curried.apply(this, args.concat(moreArgs));
            };
        }
    };
}

// Usage
function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
```

**4. Event Handler dengan State:**

```javascript
// Algoritma Stateful Handler:
// 1. Create handler dalam closure
// 2. Handler akses outer state
// 3. State persist across calls

function createClickTracker() {
    let clicks = 0;
    let lastClickTime = null;
    
    return function(event) {
        clicks++;
        lastClickTime = new Date();
        
        console.log(`Click #${clicks}`);
        console.log(`Last click: ${lastClickTime}`);
    };
}

const trackClicks = createClickTracker();
document.querySelector('#btn').addEventListener('click', trackClicks);
// clicks dan lastClickTime tetap accessible!
```

---

#### ⚠️ Jebakan Umum & Best Practices

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **Closure dalam loop dengan var** | Semua closure share variable sama | Gunakan let atau IIFE |
| **Memory leaks** | Closure prevent garbage collection | Remove references saat tidak dipakai |
| **this context hilang** | this tidak bind di closure | Gunakan arrow function atau bind |
| **Overusing closures** | Memory overhead | Gunakan hanya saat perlu |
| **Circular references** | Closure reference DOM element | Nullify references on cleanup |

**Best Practices:**

```javascript
// 1. Use let/const untuk block scope
// ✅ Good
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 100);
}

// 2. Clean up closures
// ✅ Good
function setup() {
    const handler = () => { /* ... */ };
    element.addEventListener('click', handler);
    
    // Cleanup function
    return () => {
        element.removeEventListener('click', handler);
    };
}

// 3. Avoid closures in tight loops
// ❌ Bad: Create closure setiap iteration
items.forEach(item => {
    item.handler = () => process(item);
});

// ✅ Good: Share handler
function createHandler(item) {
    return () => process(item);
}
// Or use data attributes
```

---

#### 📊 Memory Considerations

| Pattern | Memory Impact | Recommendation |
|---------|--------------|----------------|
| Simple closure | Low | Safe to use |
| Closure in loop | Medium | Use let/const |
| Closure with DOM | High | Clean up on remove |
| Nested closures | Medium-High | Use judiciously |
| Circular reference | Very High | Avoid or cleanup |

---

*(Catatan: Karena file sudah sangat panjang, saya akan menambahkan materi remaining 13 topik secara bertahap. Apakah Anda ingin saya lanjutkan dengan topik berikutnya?)*

---

### 🔴 3. this Keyword & Context Binding

#### 📖 Konsep Dasar: Apa itu `this`?

**`this`** adalah keyword special yang mereferensikan **context** di mana function dipanggil. Jika function adalah **pekerja**, maka `this` adalah **lingkungan/tempat** di mana pekerja tersebut bekerja.

**4 Aturan Binding `this`:**

```
┌─────────────────────────────────────────────────────────┐
│  1. DEFAULT BINDING                                     │
│     - Function dipanggil biasa (tidak ada context)      │
│     - this = global object (window/browser)             │
│     - Strict mode: this = undefined                     │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  2. IMPLICIT BINDING                                    │
│     - Function dipanggil sebagai method object          │
│     - this = object yang memanggil function             │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  3. EXPLICIT BINDING                                    │
│     - Function dipanggil dengan call/apply/bind         │
│     - this = object yang di-pass sebagai argument       │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  4. NEW BINDING                                         │
│     - Function dipanggil dengan keyword new             │
│     - this = object baru yang dibuat                    │
└─────────────────────────────────────────────────────────┘
```

**Mengapa `this` Penting?**
1. **Method Context:** Akses properties dalam object method
2. **Event Handlers:** Reference element yang trigger event
3. **Constructor Functions:** Initialize new objects
4. **Class Methods:** Access instance properties
5. **Function Borrowing:** Use method dari object lain

---

#### 🔬 Tahapan Logika: Memahami `this`

**1. DEFAULT BINDING - Function Biasa**

```javascript
// Algoritma Default Binding:
// 1. Function dipanggil tanpa context
// 2. Tidak ada object yang memanggil
// 3. this = global object (window)
// 4. Strict mode: this = undefined

// NON-STRICT MODE
// Algoritma:
// 1. Define function di global scope
// 2. Call function tanpa object
// 3. this reference ke window
function showThis() {
    console.log(this); // window object
}

showThis();

// STRICT MODE
// Algoritma:
// 1. 'use strict' di awal
// 2. Function dipanggil biasa
// 3. this = undefined (bukan window)
function showThisStrict() {
    'use strict';
    console.log(this); // undefined
}

showThisStrict();

// ARROW FUNCTION (special case)
// Algoritma:
// 1. Arrow function tidak punya this sendiri
// 2. this lexical dari outer scope
// 3. this tidak bisa di-rebind
const arrowThis = () => {
    console.log(this); // this dari outer scope
};

arrowThis();
```

**2. IMPLICIT BINDING - Method Object**

```javascript
// Algoritma Implicit Binding:
// 1. Function sebagai property object
// 2. Dipanggil dengan object.method()
// 3. this = object yang memanggil

// CONTOH 1: Basic method
// Algoritma:
// 1. Define object dengan method
// 2. Call method dengan dot notation
// 3. this = object
const person = {
    name: 'Budi',
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

person.greet(); // 'Hello, I'm Budi'
// this = person

// CONTOH 2: Nested object
// Algoritma:
// 1. Method di nested object
// 2. this = closest calling object
const company = {
    name: 'TechCorp',
    employee: {
        name: 'Budi',
        getName: function() {
            console.log(this.name);
        }
    }
};

company.employee.getName(); // 'Budi'
// this = employee (bukan company)

// CONTOH 3: Lost context
// Algoritma:
// 1. Extract method ke variable
// 2. Call variable sebagai function
// 3. this hilang (default binding)
const greet = person.greet;
greet(); // 'Hello, I'm undefined'
// this = window (bukan person)!

// CONTOH 4: Method chaining
// Algoritma:
// 1. Method return this
// 2. Chain multiple methods
// 3. this tetap reference object yang sama
const calculator = {
    result: 0,
    
    add: function(n) {
        this.result += n;
        return this; // Return this untuk chain
    },
    
    multiply: function(n) {
        this.result *= n;
        return this;
    }
};

calculator.add(5).multiply(2).add(10);
console.log(calculator.result); // 20
```

**3. EXPLICIT BINDING - call, apply, bind**

```javascript
// Algoritma Explicit Binding:
// 1. Panggil function dengan call/apply/bind
// 2. Pass object sebagai argument pertama
// 3. this = object yang di-pass

// CALL - Invoke immediately dengan arguments
// Algoritma:
// 1. function.call(thisArg, arg1, arg2, ...)
// 2. this = thisArg
// 3. Arguments passed individually
// 4. Execute immediately
function greet(greeting, punctuation) {
    console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const person1 = { name: 'Budi' };
const person2 = { name: 'Siti' };

greet.call(person1, 'Hello', '!');     // 'Hello, I'm Budi!'
greet.call(person2, 'Hi', '.');        // 'Hi, I'm Siti.'

// APPLY - Invoke immediately dengan array arguments
// Algoritma:
// 1. function.apply(thisArg, [argsArray])
// 2. this = thisArg
// 3. Arguments passed sebagai array
// 4. Execute immediately
greet.apply(person1, ['Hello', '!']);  // 'Hello, I'm Budi!'
greet.apply(person2, ['Hi', '.']);     // 'Hi, I'm Siti.'

// APLIKASI: Math.max dengan array
const numbers = [5, 2, 8, 1, 9];
const max = Math.max.apply(null, numbers); // 9
// Equivalent: Math.max(...numbers)

// BIND - Create new function dengan bound this
// Algoritma:
// 1. function.bind(thisArg)
// 2. Return NEW function
// 3. this permanently bound
// 4. Execute later

const greetPerson1 = greet.bind(person1);
greetPerson1('Hello', '!'); // 'Hello, I'm Budi!'

// Bind dengan partial application
// Algoritma:
// 1. Bind some arguments
// 2. Return function yang tunggu sisa arguments
// 3. Currying pattern

function multiply(a, b, c) {
    return a * b * c;
}

const double = multiply.bind(null, 2); // Partial application
console.log(double(3, 4)); // 24 (2 * 3 * 4)

const triple = multiply.bind(null, 3);
console.log(triple(4, 5)); // 60 (3 * 4 * 5)
```

**4. NEW BINDING - Constructor**

```javascript
// Algoritma New Binding:
// 1. Call function dengan keyword new
// 2. Create new empty object
// 3. this = new object
// 4. Return this (implicitly)

// CONSTRUCTOR FUNCTION
// Algoritma:
// 1. Define function dengan capital letter
// 2. Set properties dengan this
// 3. Call dengan new keyword
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, I'm ${this.name}`);
    };
}

const budi = new Person('Budi', 25);
const siti = new Person('Siti', 30);

budi.greet(); // 'Hello, I'm Budi'
siti.greet(); // 'Hello, I'm Siti'

// WHAT HAPPENS WITH new:
// Algoritma internal:
// 1. const obj = {};
// 2. obj.__proto__ = Constructor.prototype;
// 3. Constructor.call(obj, ...args);
// 4. return obj;

// MANUAL IMPLEMENTATION
function myNew(Constructor, ...args) {
    // 1. Create empty object
    const obj = {};
    
    // 2. Set prototype
    Object.setPrototypeOf(obj, Constructor.prototype);
    
    // 3. Call constructor dengan this = obj
    const result = Constructor.apply(obj, args);
    
    // 4. Return result or obj
    return result || obj;
}

const budi2 = myNew(Person, 'Budi', 25);
console.log(budi2.name); // 'Budi'
```

---

#### ⚠️ Jebakan Umum & Best Practices

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **this dalam callback** | this context hilang | Gunakan arrow function atau bind |
| **this dalam arrow function** | Arrow tidak punya this | Arrow inherit this dari outer |
| **Method extraction** | this hilang saat extract | Bind this atau gunakan arrow |
| **Event handler this** | this = element, bukan object | Bind atau arrow function |
| **Constructor tanpa new** | this = global object | Selalu gunakan new |

**Best Practices:**

```javascript
// 1. Use arrow functions untuk callbacks
// ✅ Good
const obj = {
    name: 'Budi',
    items: [1, 2, 3],
    
    // Arrow function inherit this dari outer
    process: function() {
        this.items.forEach(item => {
            console.log(this.name, item); // this = obj
        });
    }
};

// ❌ Bad
const obj2 = {
    name: 'Budi',
    items: [1, 2, 3],
    
    process: function() {
        this.items.forEach(function(item) {
            console.log(this.name, item); // this = undefined!
        });
    }
};

// 2. Bind this di constructor
// ✅ Good
function Counter() {
    this.count = 0;
    
    // Bind di constructor
    this.increment = this.increment.bind(this);
}

Counter.prototype.increment = function() {
    this.count++;
};

// 3. Use class syntax (modern)
// ✅ Good
class Counter {
    constructor() {
        this.count = 0;
    }
    
    // Arrow function sebagai class property
    increment = () => {
        this.count++;
    };
}

// 4. Explicit bind untuk event handlers
// ✅ Good
class Button {
    constructor(element) {
        this.element = element;
        this.clicks = 0;
        
        // Bind this
        this.handleClick = this.handleClick.bind(this);
        this.element.addEventListener('click', this.handleClick);
    }
    
    handleClick() {
        this.clicks++;
        console.log(this.clicks);
    }
}
```

---

#### 💡 Aplikasi Dunia Nyata

**1. Event Handler dengan Context:**

```javascript
// Algoritma:
// 1. Class dengan method handler
// 2. Bind this di constructor
// 3. Handler akses instance properties

class Modal {
    constructor(element) {
        this.element = element;
        this.isOpen = false;
        
        // Bind this untuk event handlers
        this.toggle = this.toggle.bind(this);
        this.closeOnEscape = this.closeOnEscape.bind(this);
        
        // Add event listeners
        this.element.querySelector('.toggle').addEventListener('click', this.toggle);
        document.addEventListener('keydown', this.closeOnEscape);
    }
    
    toggle() {
        this.isOpen = !this.isOpen;
        this.element.classList.toggle('open', this.isOpen);
    }
    
    closeOnEscape(event) {
        if (event.key === 'Escape' && this.isOpen) {
            this.toggle();
        }
    }
    
    destroy() {
        // Cleanup
        document.removeEventListener('keydown', this.closeOnEscape);
    }
}
```

**2. Function Borrowing:**

```javascript
// Algoritma:
// 1. Method dari object A
// 2. Dipakai di object B dengan call/apply
// 3. Reuse code tanpa duplication

const arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

// Borrow Array.prototype.slice
// Algoritma:
// 1. Access Array.prototype.slice
// 2. Call dengan arrayLike sebagai this
// 3. Return array baru
const realArray = Array.prototype.slice.call(arrayLike);
console.log(realArray); // ['a', 'b', 'c']

// Modern equivalent
const realArray2 = Array.from(arrayLike);
```

**3. Partial Application:**

```javascript
// Algoritma:
// 1. Bind some arguments
// 2. Return function untuk sisa arguments
// 3. Reuse dengan preset arguments

// Logging utility dengan preset level
function log(level, message, timestamp) {
    const time = timestamp ? new Date().toISOString() : '';
    console.log(`[${level}] ${message} ${time}`);
}

// Create specialized loggers
const info = log.bind(null, 'INFO');
const error = log.bind(null, 'ERROR');
const warn = log.bind(null, 'WARN');

info('Application started', true);
// [INFO] Application started 2024-01-01T00:00:00.000Z

error('Something went wrong', true);
// [ERROR] Something went wrong 2024-01-01T00:00:00.000Z
```

---

#### 📊 this Binding Priority

| Binding Type | Priority | Example |
|--------------|----------|---------|
| new binding | 1 (highest) | `new Func()` |
| explicit binding | 2 | `call/apply/bind` |
| implicit binding | 3 | `obj.method()` |
| default binding | 4 (lowest) | `func()` |

**Arrow Function Exception:**
- Arrow functions **TIDAK** punya this sendiri
- this lexical dari outer scope
- Cannot be rebound

---

### ⚔️ Latihan Bertahap: Closures & Scope (LEVEL 1-5)

> **🎯 Misi:** Kuasai closures dan scope dengan 5 level tantangan!

---

#### 🟢 LEVEL 1: Counter Sederhana

**📖 Konsep:** Closure memungkinkan variable tetap accessible meskipun outer function selesai.

**🔬 Tahapan Logika:**
1. Buat outer function dengan variable private
2. Return inner function yang mengakses variable tersebut
3. Setiap call ke inner function mengakses variable yang sama

**⚔️ Tantangan:**

```javascript
// SOAL 1: Buat counter yang increment
function buatCounter() {
    // TODO: Buat variable count = 0
    // TODO: Return function yang increment count
    // TODO: Return nilai count setelah increment
}

// SOAL 2: Buat counter dengan reset
function buatCounterDenganReset() {
    // TODO: Buat variable count = 0
    // TODO: Return object dengan method:
    //   - increment(): tambah 1
    //   - decrement(): kurang 1
    //   - reset(): set ke 0
    //   - getCount(): return count saat ini
}

// SOAL 3: Counter dengan step custom
function buatCounterDenganStep(step = 1) {
    // TODO: Buat variable count = 0
    // TODO: Return function yang increment dengan step
    // TODO: Step tidak bisa diubah dari luar
}
```

**✅ Solusi:**

```javascript
// SOLUSI 1
function buatCounter() {
    let count = 0;

    return () => {
        count++;
        return count;
    };
}

// Penggunaan:
const counter = buatCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// SOLUSI 2
function buatCounterDenganReset() {
    let count = 0;

    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => { count = 0; },
        getCount: () => count,
    };
}

// SOLUSI 3
function buatCounterDenganStep(step = 1) {
    let count = 0;

    return () => {
        count += step;
        return count;
    };
}
```

---

#### 🟡 LEVEL 2: Private Variable & Method

**📖 Konsep:** Closure memungkinkan encapsulation data seperti private members di OOP.

**🔬 Tahapan Logika:**
1. Buat variable di outer scope (private)
2. Buat function public yang bisa akses variable private
3. Return object dengan method public

**⚔️ Tantangan:**

```javascript
// SOAL 1: Buat akun bank dengan saldo private
function buatAkunBank(saldoAwal) {
    // TODO: Buat variable private saldo
    // TODO: Return object dengan method:
    //   - cekSaldo(): return saldo
    //   - menabung(jumlah): tambah saldo
    //   - tarik(jumlah): kurang saldo (jika cukup)
}

// SOAL 2: Buat user dengan data private
function buatUser(nama, email) {
    // TODO: Simpan nama dan email sebagai private
    // TODO: Return object dengan method:
    //   - getNama(): return nama
    //   - getEmail(): return email
    //   - updateEmail(emailBaru): update email
}

// SOAL 3: Buat shopping cart
function buatShoppingCart() {
    // TODO: Buat array items sebagai private
    // TODO: Return object dengan method:
    //   - addItem(nama, harga, qty)
    //   - removeItem(nama)
    //   - getTotal(): hitung total harga
    //   - getItemCount(): hitung total item
}
```

**✅ Solusi:**

```javascript
// SOLUSI 1
function buatAkunBank(saldoAwal) {
    let saldo = saldoAwal;

    return {
        cekSaldo: () => saldo,

        menabung: (jumlah) => {
            if (jumlah > 0) {
                saldo += jumlah;
                return saldo;
            }
            return "Jumlah harus positif";
        },

        tarik: (jumlah) => {
            if (jumlah > 0 && saldo >= jumlah) {
                saldo -= jumlah;
                return saldo;
            }
            return "Saldo tidak mencukupi";
        },
    };
}

// SOLUSI 2
function buatUser(nama, email) {
    let userData = { nama, email };

    return {
        getNama: () => userData.nama,
        getEmail: () => userData.email,
        updateEmail: (emailBaru) => {
            userData.email = emailBaru;
        },
    };
}

// SOLUSI 3
function buatShoppingCart() {
    let items = [];

    return {
        addItem: (nama, harga, qty) => {
            items.push({ nama, harga, qty });
        },

        removeItem: (nama) => {
            items = items.filter(item => item.nama !== nama);
        },

        getTotal: () => {
            return items.reduce((total, item) => total + (item.harga * item.qty), 0);
        },

        getItemCount: () => {
            return items.reduce((total, item) => total + item.qty, 0);
        },
    };
}
```

---

#### 🟠 LEVEL 3: Loop dengan Closure (Perbaiki Bug!)

**📖 Konsep:** Understanding hoisting dan block scope dengan let vs var.

**⚠️ BUG KLASIK:**

```javascript
// CODE YANG SALAH!
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(`Angka ${i}`);
    }, i * 1000);
}
// Output: "Angka 5" sebanyak 5 kali! (SALAH)

// MENGAPA?
// Karena var adalah function scope
// Saat setTimeout dijalankan, loop sudah selesai
// i sudah bernilai 5 di semua callback
```

**⚔️ Tantangan:**

```javascript
// SOAL 1: Perbaiki dengan let
function loopDenganLet() {
    // TODO: Gunakan let instead of var
    // TODO: Log angka 0-4 dengan delay 1 detik
}

// SOAL 2: Perbaiki dengan IIFE
function loopDenganIIFE() {
    // TODO: Gunakan var tapi wrap dengan IIFE
    // TODO: Pass i sebagai parameter ke IIFE
}

// SOAL 3: Buat sequential execution
function jalankanSequential() {
    // TODO: Jalankan 5 fungsi dengan delay 1 detik
    // TODO: Setiap fungsi log "Task 1", "Task 2", dst
}
```

**✅ Solusi:**

```javascript
// SOLUSI 1: Dengan let (block scope)
function loopDenganLet() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(`Angka ${i}`);
        }, i * 1000);
    }
}
// Output: Angka 0, Angka 1, Angka 2, Angka 3, Angka 4

// SOLUSI 2: Dengan IIFE
function loopDenganIIFE() {
    for (var i = 0; i < 5; i++) {
        ((angka) => {
            setTimeout(() => {
                console.log(`Angka ${angka}`);
            }, angka * 1000);
        })(i);
    }
}

// SOLUSI 3: Sequential execution
function jalankanSequential() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(`Task ${i}`);
        }, i * 1000);
    }
}
```

---

#### 🔴 LEVEL 4: Memoization & Function Factories

**📖 Konsep:** Menggunakan closure untuk cache dan generate functions.

**🔬 Tahapan Logika:**
1. Buat cache object di outer scope
2. Return function yang cek cache sebelum eksekusi
3. Simpan hasil di cache untuk akses berikutnya

**⚔️ Tantangan:**

```javascript
// SOAL 1: Buat memoize untuk fungsi berat
function memoize(fn) {
    // TODO: Buat cache object
    // TODO: Return function yang:
    //   - Generate key dari arguments
    //   - Cek cache, return jika ada
    //   - Jika tidak, call fn dan simpan di cache
}

// SOAL 2: Buat fungsi fibonacci dengan memoization
function fibonacciMemo() {
    // TODO: Buat cache untuk hasil fibonacci
    // TODO: Return function yang hitung fibonacci(n)
    // TODO: Gunakan cache untuk optimasi
}

// SOAL 3: Buat function factory untuk calculator
function buatOperator(operator) {
    // TODO: Return function yang melakukan operasi
    //   - 'add': return (a, b) => a + b
    //   - 'subtract': return (a, b) => a - b
    //   - 'multiply': return (a, b) => a * b
    //   - 'divide': return (a, b) => a / b
}
```

**✅ Solusi:**

```javascript
// SOLUSI 1
function memoize(fn) {
    const cache = {};

    return (...args) => {
        const key = JSON.stringify(args);

        if (cache[key]) {
            console.log(`Mengambil dari cache: ${key}`);
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        console.log(`Menghitung dan menyimpan di cache: ${key}`);
        return result;
    };
}

// SOLUSI 2
function fibonacciMemo() {
    const cache = {};

    const fib = (n) => {
        if (n <= 1) return n;

        if (cache[n]) {
            return cache[n];
        }

        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };

    return fib;
}

// SOLUSI 3
function buatOperator(operator) {
    switch (operator) {
        case 'add':
            return (a, b) => a + b;
        case 'subtract':
            return (a, b) => a - b;
        case 'multiply':
            return (a, b) => a * b;
        case 'divide':
            return (a, b) => a / b;
        default:
            return (a, b) => 0;
    }
}

// Penggunaan:
const add = buatOperator('add');
add(5, 3); // 8
```

---

#### 🟣 LEVEL 5: Module Pattern

**📖 Konsep:** Membangun module dengan public/private API menggunakan IIFE.

**⚔️ Tantangan:**

```javascript
// PROYEK 1: Module Kalkulator
const ModuleKalkulator = (() => {
    // TODO: Buat private variable: history, lastResult
    // TODO: Buat private function: addToHistory
    // TODO: Return object dengan public methods:
    //   - add, subtract, multiply, divide
    //   - getLastResult, getHistory, clearHistory
})();

// PROYEK 2: Module API Client
const ModuleAPIClient = (() => {
    // TODO: Buat private variable: baseURL, token
    // TODO: Return object dengan methods:
    //   - setBaseURL(url)
    //   - setToken(token)
    //   - get(endpoint)
    //   - post(endpoint, data)
})();

// PROYEK 3: Module Event Bus
const ModuleEventBus = (() => {
    // TODO: Buat private variable: events (object)
    // TODO: Return object dengan methods:
    //   - on(event, callback): subscribe
    //   - off(event, callback): unsubscribe
    //   - emit(event, data): publish
})();
```

**✅ Solusi:**

```javascript
// SOLUSI 1: Module Kalkulator
const ModuleKalkulator = (() => {
    let history = [];
    let lastResult = 0;

    const addToHistory = (operation, result) => {
        history.push({ operation, result, timestamp: new Date() });
    };

    return {
        add: (a, b) => {
            const result = a + b;
            lastResult = result;
            addToHistory(`${a} + ${b}`, result);
            return result;
        },

        subtract: (a, b) => {
            const result = a - b;
            lastResult = result;
            addToHistory(`${a} - ${b}`, result);
            return result;
        },

        multiply: (a, b) => {
            const result = a * b;
            lastResult = result;
            addToHistory(`${a} × ${b}`, result);
            return result;
        },

        divide: (a, b) => {
            if (b === 0) return "Error: Division by zero";
            const result = a / b;
            lastResult = result;
            addToHistory(`${a} ÷ ${b}`, result);
            return result;
        },

        getLastResult: () => lastResult,
        getHistory: () => [...history],
        clearHistory: () => {
            history = [];
            lastResult = 0;
        },
    };
})();

// SOLUSI 3: Module Event Bus
const ModuleEventBus = (() => {
    const events = {};

    return {
        on: (event, callback) => {
            if (!events[event]) {
                events[event] = [];
            }
            events[event].push(callback);
        },

        off: (event, callback) => {
            if (events[event]) {
                events[event] = events[event].filter(cb => cb !== callback);
            }
        },

        emit: (event, data) => {
            if (events[event]) {
                events[event].forEach(callback => callback(data));
            }
        },
    };
})();
```

---

### 🧠 Latihan Logika: Refleksi Closures

> **🎯 Pertanyaan Pemahaman:**
>
> 1. Apa itu lexical scoping? Bagaimana berbeda dengan dynamic scoping?
> 2. Mengapa closure bisa mengakses variable outer function setelah function selesai?
> 3. Apa perbedaan var, let, dan const dalam konteks closure?
> 4. Kapan menggunakan module pattern vs class?
> 5. Apa keuntungan dan kerugian memoization?

---

### 🔴 4. ES6+ Modern Features

#### 📖 Konsep Dasar: Modern JavaScript

**ES6 (ECMAScript 2015)** adalah update terbesar JavaScript sejak 1997. Jika JavaScript klasik adalah **telepon tombol**, ES6+ adalah **smartphone** dengan semua fitur modern.

**Mengapa ES6+ Penting?**
1. **Cleaner Code:** Less boilerplate, more readable
2. **Better Patterns:** Destructuring, spread, modules
3. **Modern Standard:** Semua framework pakai ES6+
4. **Productivity:** Write less, do more

---

#### 🔬 Tahapan Logika: ES6+ Features

**1. DESTRUCTURING - Bongkar Data**

```javascript
// Algoritma Destructuring:
// 1. Pattern matching di kiri
// 2. Extract values dari object/array
// 3. Assign ke variables

// ARRAY DESTRUCTURING
// Algoritma:
// 1. [var1, var2] = array
// 2. Extract by position
// 3. Skip dengan comma

const colors = ['red', 'green', 'blue'];

// Old way
const first = colors[0];
const second = colors[1];

// ES6 destructuring
const [red, green] = colors;
console.log(red, green); // 'red', 'green'

// Skip elements
const [, , blue] = colors;
console.log(blue); // 'blue'

// Rest pattern
const [primary, ...rest] = colors;
console.log(rest); // ['green', 'blue']

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1

// OBJECT DESTRUCTURING
// Algoritma:
// 1. {key1, key2} = object
// 2. Extract by key name
// 3. Rename dengan :

const user = {
    id: 1,
    name: 'Budi',
    email: 'budi@email.com',
    address: {
        city: 'Jakarta',
        country: 'Indonesia'
    }
};

// Basic destructuring
const { name, email } = user;
console.log(name, email); // 'Budi', 'budi@email.com'

// Rename variables
const { name: userName, id: userId } = user;
console.log(userName, userId); // 'Budi', 1

// Default values
const { age = 25 } = user;
console.log(age); // 25 (default)

// Nested destructuring
const { address: { city } } = user;
console.log(city); // 'Jakarta'

// FUNCTION PARAMETERS DESTRUCTURING
// Algoritma:
// 1. Destructure di parameter
// 2. Direct access to properties
// 3. Cleaner function signature

// Old way
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
}

// ES6 destructuring
function printUser({ name, email }) {
    console.log(name, email);
}

// With default values
function greet({ name = 'Guest', role = 'user' }) {
    console.log(`Hello ${name}, ${role}`);
}

greet({ name: 'Budi' }); // 'Hello Budi, user'
```

**2. SPREAD/REST OPERATOR - ...syntax**

```javascript
// Algoritma Spread/Rest:
// 1. ... перед array/object
// 2. Spread: Expand elements
// 3. Rest: Collect elements

// SPREAD FOR ARRAYS
// Algoritma:
// 1. ...array expand elements
// 2. Use in array literal
// 3. Use in function call

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr1];
console.log(copy); // [1, 2, 3]

// Function arguments
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6 (equivalent to sum(1,2,3))

// SPREAD FOR OBJECTS
// Algoritma:
// 1. ...object expand properties
// 2. Later properties override earlier
// 3. Shallow copy only

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Merge objects
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Override properties
const updated = { ...obj1, b: 99 };
console.log(updated); // { a: 1, b: 99 }

// REST OPERATOR
// Algoritma:
// 1. ...var di akhir pattern
// 2. Collect remaining elements
// 3. Result is array

// Array rest
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(rest); // [3, 4, 5]

// Object rest
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(rest); // { c: 3, d: 4 }

// Function rest parameters
// Algoritma:
// 1. ...args di parameter terakhir
// 2. Collect all remaining args
// 3. args adalah array

function multiply(multiplier, ...numbers) {
    return numbers.map(n => n * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
```

**3. OPTIONAL CHAINING - ?. operator**

```javascript
// Algoritma Optional Chaining:
// 1. obj?.prop access
// 2. Short-circuit jika null/undefined
// 3. Return undefined bukan error

// OLD WAY: Multiple checks
// Algoritma:
// 1. Check each level
// 2. Nested if statements
// 3. Verbose code

let street = user && user.address && user.address.street;

// ES6: Optional chaining
// Algoritma:
// 1. ?. check null/undefined
// 2. Short-circuit jika null
// 3. Return undefined

let street = user?.address?.street;

// OPTIONAL CHAINING VARIANTS
// Algoritma:
// 1. obj?.prop - property access
// 2. obj?.[expr] - dynamic property
// 3. obj?.method() - method call
// 4. arr?.[0] - array index

// Property access
console.log(user?.name); // undefined jika user null

// Dynamic property
const key = 'email';
console.log(user?.[key]); // undefined jika user null

// Method call
console.log(user?.getName?.()); // undefined jika method tidak ada

// Array access
console.log(items?.[0]); // undefined jika items null

// NULLISH COALESCING - ?? operator
// Algoritma:
// 1. left ?? right
// 2. Return left jika tidak null/undefined
// 3. Return right jika left null/undefined

const userName = user.name ?? 'Guest';
// Return user.name jika ada, 'Guest' jika null/undefined

// VS || operator
// Algoritma:
// 1. || check falsy (0, '', false, null, undefined)
// 2. ?? check only null/undefined

const count = 0;
console.log(count || 10); // 10 (0 is falsy)
console.log(count ?? 10); // 0 (0 is not null/undefined)
```

**4. ARROW FUNCTIONS - () => {}**

```javascript
// Algoritma Arrow Function:
// 1. (params) => expression
// 2. No function keyword
// 3. Implicit return untuk expression
// 4. this lexical dari outer

// BASIC SYNTAX
// Algoritma:
// 1. Single parameter: no parentheses
// 2. Multiple parameters: with parentheses
// 3. No parameters: empty parentheses

// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Single parameter (no parentheses)
const double = n => n * 2;

// No parameters
const sayHi = () => console.log('Hi');

// Return object (wrap in parentheses)
const getUser = () => ({ name: 'Budi', age: 25 });

// THIS BEHAVIOR
// Algoritma:
// 1. Arrow tidak punya this sendiri
// 2. this dari outer lexical scope
// 3. Cannot use as method

// ❌ Bad: Arrow as method
const obj = {
    name: 'Budi',
    greet: () => {
        console.log(`Hello ${this.name}`); // this = window!
    }
};

obj.greet(); // 'Hello undefined'

// ✅ Good: Regular function as method
const obj2 = {
    name: 'Budi',
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};

obj2.greet(); // 'Hello Budi'

// ✅ Good: Arrow in callback
const obj3 = {
    name: 'Budi',
    items: [1, 2, 3],
    
    process() {
        // Arrow inherit this dari process
        this.items.forEach(item => {
            console.log(this.name, item);
        });
    }
};

obj3.process(); // 'Budi' 1, 'Budi' 2, 'Budi' 3
```

**5. TEMPLATE LITERALS - `${}`**

```javascript
// Algoritma Template Literals:
// 1. Backticks `` bukan quotes
// 2. ${expression} untuk interpolation
// 3. Multi-line support

// STRING INTERPOLATION
// Algoritma:
// 1. `${variable}` insert value
// 2. Expression evaluated
// 3. Convert to string

const name = 'Budi';
const age = 25;

// Old way
const greeting = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template literal
const greeting = `Hello, my name is ${name} and I am ${age} years old`;

// EXPRESSIONS
// Algoritma:
// 1. ${any expression}
// 2. Evaluated at runtime
// 3. Result converted to string

const price = 100;
const tax = 0.1;

console.log(`Total: Rp ${price * (1 + tax)}`);
console.log(`Price is ${price > 50 ? 'expensive' : 'cheap'}`);

// MULTI-LINE STRINGS
// Algoritma:
// 1. Backticks preserve newlines
// 2. No need for \n
// 3. Indentation preserved

const html = `
<div class="card">
    <h2>${name}</h2>
    <p>Age: ${age}</p>
</div>
`;

// TAGGED TEMPLATES
// Algoritma:
// 1. tag`template`
// 2. Function process template
// 3. Custom string processing

function uppercase(strings, ...values) {
    return strings.reduce((acc, str, i) => acc + str + (values[i] || '').toUpperCase(), '');
}

const result = uppercase`Hello ${name}, you are ${age}!`;
console.log(result); // 'Hello BUDI, you are 25!'
```

**6. DEFAULT PARAMETERS**

```javascript
// Algoritma Default Parameters:
// 1. param = defaultValue
// 2. Used jika undefined
// 3. Evaluated at call time

// BASIC DEFAULT
// Algoritma:
// 1. Set default di parameter
// 2. Override jika argument ada
// 3. null tidak override default

function greet(name = 'Guest') {
    console.log(`Hello ${name}`);
}

greet();        // 'Hello Guest'
greet('Budi');  // 'Hello Budi'
greet(null);    // 'Hello null' (null tidak pakai default)

// DYNAMIC DEFAULT
// Algoritma:
// 1. Default bisa expression
// 2. Evaluated setiap call
// 3. Access previous parameters

function createGreeting(name, greeting = `Hello ${name}`) {
    console.log(greeting);
}

createGreeting('Budi'); // 'Hello Budi'

// DESTRUCTURED DEFAULT
// Algoritma:
// 1. Default dalam destructuring
// 2. Nested defaults
// 3. Object defaults

function createUser({ name = 'Guest', role = 'user' } = {}) {
    console.log(`${name} (${role})`);
}

createUser();                    // 'Guest (user)'
createUser({ name: 'Budi' });    // 'Budi (user)'
```

**7. ENHANCED OBJECT LITERALS**

```javascript
// Algoritma Enhanced Objects:
// 1. Shorthand properties
// 2. Method shorthand
// 3. Dynamic property names

// PROPERTY SHORTHAND
// Algoritma:
// 1. Variable name = property name
// 2. No need key: value
// 3. Just write variable

const name = 'Budi';
const age = 25;

// Old way
const user = {
    name: name,
    age: age
};

// ES6 shorthand
const user = {
    name,
    age
};

// METHOD SHORTHAND
// Algoritma:
// 1. No function keyword
// 2. Just name() {}
// 3. Same as name: function() {}

const obj = {
    // Old way
    greet: function() {
        console.log('Hello');
    },
    
    // ES6 shorthand
    greet() {
        console.log('Hello');
    }
};

// DYNAMIC PROPERTY NAMES
// Algoritma:
// 1. [expression] untuk key
// 2. Evaluated at runtime
// 3. Convert to string

const key = 'email';
const value = 'budi@email.com';

const user = {
    name: 'Budi',
    [key]: value,        // 'email': 'budi@email.com'
    [`is_${key}_valid`]: true  // 'is_email_valid': true
};
```

---

#### ⚠️ Jebakan Umum & Best Practices

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **Arrow function sebagai method** | this tidak bind benar | Gunakan regular function |
| **Spread shallow copy** | Nested objects masih reference | Gunakan deep clone |
| **Destructuring null** | Error jika destructuring null | Check null dulu atau default |
| **Default parameters dengan ||** | 0, '' dianggap falsy | Gunakan ?? atau default params |
| **Template literal XSS** | User input tidak escaped | Sanitize sebelum interpolate |

---

#### 📊 Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Destructuring | 49+ | 2+ | 8+ | 14+ |
| Spread/Rest | 46+ | 16+ | 8+ | 12+ |
| Optional Chaining | 80+ | 74+ | 13.1+ | 80+ |
| Arrow Functions | 45+ | 22+ | 10+ | 12+ |
| Template Literals | 41+ | 34+ | 9+ | 12+ |
| Default Parameters | 49+ | 15+ | 9+ | 14+ |

---

*(Catatan: Saya telah menambahkan 4 topik besar dengan detail lengkap. Masih ada 11 topik lagi dari saran-cepat-paham.md yang bisa ditambahkan. Apakah Anda ingin saya lanjutkan menambahkan topik-topik remaining?)*

---

### ⚔️ Latihan Bertahap: ES6+ Features (LEVEL 1-5)

> **🎯 Misi:** Kuasai fitur modern JavaScript dengan 5 level tantangan!

---

#### 🟢 LEVEL 1: Destructuring

**📖 Konsep:** Extract values dari array/object dengan syntax yang clean.

**🔬 Tahapan Logika:**
1. Pattern matching di kiri (=)
2. Extract by position (array) atau by key (object)
3. Rename dengan `:` jika perlu
4. Default values dengan `=`

**⚔️ Tantangan:**

```javascript
// SOAL 1: Array destructuring
const data = ['Merah', 'Kuning', 'Hijau', 'Biru'];

// TODO: Extract 'Merah' dan 'Kuning' ke variabel pertama dan kedua
// TODO: Skip 'Kuning', extract 'Merah' dan 'Hijau'
// TODO: Extract semua sisa ke variable 'sisanya'

// SOAL 2: Object destructuring
const user = {
    id: 1,
    nama: 'Budi',
    email: 'budi@email.com',
    umur: 25
};

// TODO: Extract nama dan email
// TODO: Extract nama dengan rename menjadi 'namaLengkap'
// TODO: Extract dengan default value untuk 'hobi' (tidak ada di object)

// SOAL 3: Nested destructuring
const produk = {
    nama: 'Laptop',
    harga: 10000000,
    spesifikasi: {
        ram: '16GB',
        storage: '512GB SSD'
    }
};

// TODO: Extract ram dan storage dari nested object
```

**✅ Solusi:**

```javascript
// SOLUSI 1
const [pertama, kedua] = data;
const [skip, , ketiga] = data;
const [primary, ...sisanya] = data;

// SOLUSI 2
const { nama, email } = user;
const { nama: namaLengkap } = user;
const { hobi = 'Coding' } = user;

// SOLUSI 3
const { spesifikasi: { ram, storage } } = produk;
```

---

#### 🟡 LEVEL 2: Spread & Rest Operator

**📖 Konsep:** Spread untuk expand, rest untuk collect multiple elements.

**⚔️ Tantangan:**

```javascript
// SOAL 1: Gabung array dengan spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// TODO: Gabungkan arr1 dan arr2 ke array baru
// TODO: Tambahkan angka 0 di awal dan 7 di akhir

// SOAL 2: Copy array tanpa mutate
const original = [1, 2, 3];

// TODO: Buat copy dari original
// TODO: Tambahkan 4 ke copy tanpa mengubah original

// SOAL 3: Gabung object
const obj1 = { nama: 'Budi', umur: 20 };
const obj2 = { kota: 'Jakarta', hobi: 'Coding' };

// TODO: Gabungkan obj1 dan obj2
// TODO: Override umur menjadi 21

// SOAL 4: Function dengan rest parameters
function jumlahkan(...angka) {
    // TODO: Return sum dari semua arguments
}
```

**✅ Solusi:**

```javascript
// SOLUSI 1
const gabungan = [...arr1, ...arr2];
const denganTambahan = [0, ...arr1, ...arr2, 7];

// SOLUSI 2
const copy = [...original];
copy.push(4);

// SOLUSI 3
const gabungan = { ...obj1, ...obj2 };
const override = { ...obj1, umur: 21 };

// SOLUSI 4
function jumlahkan(...angka) {
    return angka.reduce((total, n) => total + n, 0);
}
```

---

#### 🟠 LEVEL 3: Template Literals & String Methods

**📖 Konsep:** String interpolation dan methods modern.

**⚔️ Tantangan:**

```javascript
// SOAL 1: Template literal basic
const nama = 'Budi';
const umur = 25;

// TODO: Buat string: "Halo, nama saya Budi dan saya 25 tahun"

// SOAL 2: Multiline string
// TODO: Buat HTML string dengan template literal multiline

// SOAL 3: Expression dalam template
const harga = 100000;
const diskon = 0.1;

// TODO: Buat string dengan perhitungan: harga setelah diskon

// SOAL 4: String methods chain
const teks = '  Hello World  ';

// TODO: Chain methods untuk: trim → toLowerCase → split by space
```

**✅ Solusi:**

```javascript
// SOLUSI 1
const greeting = `Halo, nama saya ${nama} dan saya ${umur} tahun`;

// SOLUSI 2
const html = `
    <div class="card">
        <h2>${nama}</h2>
        <p>Umur: ${umur}</p>
    </div>
`;

// SOLUSI 3
const hargaAkhir = `Harga: Rp ${harga * (1 - diskon)}`;

// SOLUSI 4
const result = teks.trim().toLowerCase().split(' ');
```

---

#### 🔴 LEVEL 4: Optional Chaining & Nullish Coalescing

**📖 Konsep:** Akses nested properties dengan aman dan handle null/undefined.

**⚔️ Tantangan:**

```javascript
const data = {
    user: {
        profile: {
            nama: 'Budi',
            alamat: null
        }
    }
};

// SOAL 1: Optional chaining
// TODO: Akses data.user.profile.nama dengan aman
// TODO: Akses data.user.profile.alamat?.kota (alamat null)
// TODO: Akses data.user.profile.hobi (tidak ada)

// SOAL 2: Nullish coalescing
const nilai = 0;
const jumlah = null;

// TODO: Gunakan ?? untuk provide default value
// TODO: Bedakan dengan || operator

// SOAL 3: Combined usage
const config = {
    api: {
        timeout: undefined
    }
};

// TODO: Akses config.api.timeout dengan default 5000
```

**✅ Solusi:**

```javascript
// SOLUSI 1
const nama = data?.user?.profile?.nama; // 'Budi'
const kota = data?.user?.profile?.alamat?.kota; // undefined (tidak error!)
const hobi = data?.user?.profile?.hobi; // undefined

// SOLUSI 2
const nilaiDefault = nilai ?? 10; // 0 (karena 0 bukan null/undefined)
const jumlahDefault = jumlah ?? 0; // 0 (karena null)

const denganOr = nilai || 10; // 10 (karena 0 falsy)
const denganNullish = nilai ?? 10; // 0 (karena bukan null/undefined)

// SOLUSI 3
const timeout = config?.api?.timeout ?? 5000; // 5000
```

---

#### 🟣 LEVEL 5: Advanced ES6+ Patterns

**📖 Konsep:** Kombinasikan multiple ES6+ features untuk clean code.

**⚔️ Tantangan:**

```javascript
// PROYEK 1: Function dengan default parameters + destructuring
function createUser({
    nama = 'Guest',
    email,
    role = 'user',
    preferences = {}
} = {}) {
    // TODO: Return user object dengan default values
}

// PROYEK 2: Array transformation dengan spread
function mergeAndTransform(arr1, arr2, transformFn) {
    // TODO: Gabungkan arrays
    // TODO: Apply transformFn ke setiap element
    // TODO: Return array baru
}

// PROYEK 3: Dynamic object keys
function createObject(dynamicKeys, values) {
    // TODO: Buat object dengan keys dari dynamicKeys
    // TODO: Map values ke corresponding keys
}

// PROYEK 4: Tagged template literals
function upper(strings, ...values) {
    // TODO: Return string dengan values uppercase
}
```

**✅ Solusi:**

```javascript
// SOLUSI 1
function createUser({
    nama = 'Guest',
    email,
    role = 'user',
    preferences = {}
} = {}) {
    return {
        id: Date.now(),
        nama,
        email,
        role,
        preferences,
        createdAt: new Date().toISOString()
    };
}

// SOLUSI 2
function mergeAndTransform(arr1, arr2, transformFn) {
    return [...arr1, ...arr2].map(transformFn);
}

// SOLUSI 3
function createObject(dynamicKeys, values) {
    return dynamicKeys.reduce((obj, key, index) => {
        obj[key] = values[index];
        return obj;
    }, {});
}

// SOLUSI 4
function upper(strings, ...values) {
    return strings.reduce((acc, str, i) => {
        return acc + str + (values[i]?.toUpperCase() || '');
    }, '');
}

// Penggunaan:
const nama = 'budi';
const kota = 'jakarta';
upper`Halo, nama saya ${nama} dari ${kota}`;
// "Halo, nama saya BUDI dari JAKARTA"
```

---

### 🧠 Latihan Logika: Refleksi ES6+

> **🎯 Pertanyaan Pemahaman:**
>
> 1. Apa perbedaan spread dan rest operator? Kapan menggunakan masing-masing?
> 2. Mengapa destructuring lebih baik dari akses manual?
> 3. Apa perbedaan `||` dan `??`? Kapan menggunakan masing-masing?
> 4. Bagaimana optional chaining mencegah error?
> 5. Apa keuntungan template literals dibanding concatenation?

---

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

---

## 📚 Bab 7: Materi Lanjutan Full-Stack Ready (Part 2) {#-bab-7-materi-lanjutan-full-stack-ready-part-2}

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

> **🎯 Tujuan Bab:** Melengkapi pemahaman untuk production-ready development. Bab ini mencakup error handling, modules, regex, dan API integration.

---

### 🔴 5. Error Handling Best Practices

#### 📖 Konsep Dasar: Error Handling

**Error Handling** adalah cara kita **mengantisipasi dan menangani** kesalahan dalam program. Jika coding adalah **perjalanan**, error handling adalah **ban serep dan P3K** yang siap digunakan saat ada masalah.

**Mengapa Error Handling Penting?**
1. **Graceful Degradation:** Aplikasi tidak crash total
2. **User Experience:** User tahu apa yang terjadi
3. **Debugging:** Lebih mudah track bugs
4. **Data Integrity:** Prevent corrupt data
5. **Security:** Hide sensitive info dari error messages

---

#### 🔬 Tahapan Logika: Error Handling

**1. TRY-CATCH-FINALLY - Basic Pattern**

```javascript
// Algoritma Try-Catch:
// 1. Wrap code yang mungkin error di try block
// 2. Jika error terjadi, catch di catch block
// 3. Finally block selalu dijalankan (cleanup)

// BASIC TRY-CATCH
// Algoritma:
// 1. try { code yang mungkin error }
// 2. catch (error) { handle error }
// 3. Execution continue setelah catch

try {
    // Code yang mungkin error
    const result = riskyOperation();
    console.log('Result:', result);
} catch (error) {
    // Handle error
    console.error('Error occurred:', error.message);
    // Fallback value
    const result = defaultValue;
}

// TRY-CATCH-FINALLY
// Algoritma:
// 1. try { main code }
// 2. catch { error handler }
// 3. finally { cleanup - always runs }
// 4. finally runs even if return in try/catch

function processData(data) {
    let connection;
    
    try {
        connection = openConnection();
        const result = connection.process(data);
        return result;
    } catch (error) {
        console.error('Processing failed:', error);
        throw error; // Re-throw untuk caller handle
    } finally {
        // Always cleanup
        if (connection) {
            connection.close();
        }
    }
}

// NESTED TRY-CATCH
// Algoritma:
// 1. Outer try-catch handle high-level errors
// 2. Inner try-catch handle specific errors
// 3. Granular error handling

try {
    try {
        const data = JSON.parse(input);
        processData(data);
    } catch (parseError) {
        // Handle JSON parse errors
        console.error('Invalid JSON:', parseError.message);
    }
} catch (outerError) {
    // Handle other errors
    console.error('Unexpected error:', outerError);
}
```

**2. THROW CUSTOM ERRORS**

```javascript
// Algoritma Throw Error:
// 1. Create error object
// 2. throw error
// 3. Catch di caller

// BUILTIN ERROR TYPES
// Algoritma:
// 1. new Error(message)
// 2. new TypeError(message)
// 3. new RangeError(message)
// 4. new ReferenceError(message)

// Basic Error
throw new Error('Something went wrong!');

// Type Error
function divide(a, b) {
    if (typeof b !== 'number') {
        throw new TypeError('Divisor must be a number');
    }
    return a / b;
}

// Range Error
function setAge(age) {
    if (age < 0 || age > 150) {
        throw new RangeError('Age must be between 0 and 150');
    }
}

// CUSTOM ERROR CLASS
// Algoritma:
// 1. Extend Error class
// 2. Set name property
// 3. Capture stack trace
// 4. Add custom properties

class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
        this.timestamp = new Date();
        
        // Capture stack trace
        Error.captureStackTrace(this, ValidationError);
    }
}

// Usage
function validateEmail(email) {
    if (!email || !email.includes('@')) {
        throw new ValidationError('Invalid email format', 'email');
    }
    return true;
}

try {
    validateEmail('invalid');
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Validation failed for ${error.field}: ${error.message}`);
        console.error(`At: ${error.timestamp}`);
    } else {
        console.error('Unexpected error:', error);
    }
}

// ERROR WRAPPING
// Algoritma:
// 1. Catch low-level error
// 2. Create high-level error
// 3. Include original error as cause
// 4. Throw wrapped error

class DatabaseError extends Error {
    constructor(message, cause) {
        super(message);
        this.name = 'DatabaseError';
        this.cause = cause;
    }
}

async function fetchUser(id) {
    try {
        const response = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        return response;
    } catch (dbError) {
        // Wrap database error with context
        throw new DatabaseError(`Failed to fetch user ${id}`, dbError);
    }
}
```

**3. ERROR HANDLING PATTERNS**

```javascript
// PATTERN 1: Error-First Callback (Node.js style)
// Algoritma:
// 1. Callback parameter pertama adalah error
// 2. Jika error, parameter pertama tidak null
// 3. Check error dulu sebelum process result

function fetchData(callback) {
    try {
        const data = { id: 1, name: 'Budi' };
        callback(null, data); // Success: error = null
    } catch (error) {
        callback(error, null); // Error: pass error
    }
}

fetchData((error, data) => {
    if (error) {
        console.error('Fetch failed:', error);
        return;
    }
    console.log('Data:', data);
});

// PATTERN 2: Result Object Pattern
// Algoritma:
// 1. Return object dengan success flag
// 2. Jika success: { success: true, data: ... }
// 3. Jika error: { success: false, error: ... }

function safeParseJSON(str) {
    try {
        return {
            success: true,
            data: JSON.parse(str)
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

const result = safeParseJSON('{"name": "Budi"}');
if (result.success) {
    console.log('Parsed:', result.data);
} else {
    console.error('Parse failed:', result.error);
}

// PATTERN 3: Retry with Backoff
// Algoritma:
// 1. Try operation
// 2. If error, wait and retry
// 3. Exponential backoff
// 4. Max retries limit

async function fetchWithRetry(url, maxRetries = 3) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            lastError = error;
            
            if (attempt === maxRetries) {
                break; // Don't retry on last attempt
            }
            
            // Exponential backoff: 1s, 2s, 4s, ...
            const delay = Math.pow(2, attempt) * 1000;
            console.log(`Retry ${attempt}/${maxRetries} after ${delay}ms`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    
    throw lastError;
}

// PATTERN 4: Error Boundaries (React-like)
// Algoritma:
// 1. Wrap component/code in boundary
// 2. Catch errors in boundary
// 3. Show fallback UI
// 4. Log error for debugging

class ErrorBoundary {
    constructor() {
        this.error = null;
        this.hasError = false;
    }
    
    async execute(fn) {
        try {
            this.hasError = false;
            this.error = null;
            return await fn();
        } catch (error) {
            this.hasError = true;
            this.error = error;
            this.handleError(error);
            return this.getFallback();
        }
    }
    
    handleError(error) {
        console.error('Error caught by boundary:', error);
        // Log to server, analytics, etc.
    }
    
    getFallback() {
        return { message: 'Something went wrong' };
    }
}

// Usage
const boundary = new ErrorBoundary();
const result = await boundary.execute(() => riskyOperation());
```

**4. ASYNC ERROR HANDLING**

```javascript
// WITH .CATCH()
// Algoritma:
// 1. Promise chain dengan .catch()
// 2. Handle rejection
// 3. Return fallback atau re-throw

fetch('/api/data')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Fetch failed:', error);
        // Return fallback data
        return { data: [], error: true };
    });

// WITH ASYNC/AWAIT
// Algoritma:
// 1. Wrap dalam try-catch
// 2. Await setiap async operation
// 3. Handle error di catch block

async function fetchData() {
    try {
        const response = await fetch('/api/data');
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch failed:', error);
        throw error; // Re-throw untuk caller handle
    }
}

// MULTIPLE ASYNC OPERATIONS
// Algoritma:
// 1. Try block dengan multiple awaits
// 2. Catch handle any error
// 3. Finally untuk cleanup

async function processUserData(userId) {
    let connection;
    
    try {
        connection = await db.connect();
        const user = await connection.findUser(userId);
        const posts = await connection.findPosts(userId);
        
        return { user, posts };
    } catch (error) {
        console.error('Processing failed:', error);
        throw error;
    } finally {
        if (connection) {
            await connection.close();
        }
    }
}

// PARALLEL ERROR HANDLING
// Algoritma:
// 1. Promise.allSettled untuk handle semua
// 2. Check status setiap promise
// 3. Process successes, log failures

async function fetchAllData() {
    const results = await Promise.allSettled([
        fetch('/api/users').then(r => r.json()),
        fetch('/api/posts').then(r => r.json()),
        fetch('/api/comments').then(r => r.json())
    ]);
    
    const successes = [];
    const failures = [];
    
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            successes.push({ index, data: result.value });
        } else {
            failures.push({ index, error: result.reason });
        }
    });
    
    console.log(`Success: ${successes.length}, Failures: ${failures.length}`);
    return { successes, failures };
}
```

---

#### ⚠️ Jebakan Umum & Best Practices

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **Silent failures** | Error tidak di-log atau di-handle | Always log atau re-throw error |
| **Swallowing errors** | catch {} kosong tanpa action | Minimal log error |
| **Not preserving stack** | Throw new error tanpa preserve stack | Gunakan error.cause |
| **Generic error messages** | Error message tidak jelas | Specific, actionable messages |
| **Exposing sensitive info** | Error message show internal details | Sanitize error messages for users |
| **Not handling Promise rejections** | Unhandled promise rejection | Always add .catch() atau try-catch |

**Best Practices:**

```javascript
// 1. Always log errors
// ✅ Good
try {
    riskyOperation();
} catch (error) {
    console.error('Operation failed:', error);
    throw error;
}

// ❌ Bad
try {
    riskyOperation();
} catch (error) {
    // Silent failure!
}

// 2. Use specific error types
// ✅ Good
if (!email) {
    throw new ValidationError('Email is required', 'email');
}

// ❌ Bad
if (!email) {
    throw new Error('Error'); // Too generic!
}

// 3. Preserve stack trace
// ✅ Good
try {
    dbOperation();
} catch (dbError) {
    throw new DatabaseError('Failed to save', dbError);
}

// ❌ Bad
try {
    dbOperation();
} catch (dbError) {
    throw new Error('Failed to save'); // Original stack lost!
}

// 4. User-friendly messages
// ✅ Good
catch (error) {
    logger.error(error); // Technical log
    showUserMessage('Terjadi kesalahan. Silakan coba lagi.'); // User message
}

// ❌ Bad
catch (error) {
    alert(error.stack); // Expose internal details!
}
```

---

#### 💡 Aplikasi Dunia Nyata

**1. API Error Handler:**

```javascript
// Algoritma:
// 1. Centralized error handling
// 2. Classify errors by type
// 3. Handle each type appropriately

class ApiError extends Error {
    constructor(message, status, code) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.code = code;
    }
}

async function apiRequest(endpoint, options = {}) {
    try {
        const response = await fetch(`/api${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        });
        
        // Check HTTP status
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new ApiError(
                errorData.message || `HTTP ${response.status}`,
                response.status,
                errorData.code
            );
        }
        
        return await response.json();
    } catch (error) {
        if (error instanceof ApiError) {
            // Handle API errors
            switch (error.status) {
                case 401:
                    // Redirect to login
                    redirectToLogin();
                    break;
                case 403:
                    // Show permission denied
                    showPermissionDenied();
                    break;
                case 404:
                    // Show not found
                    showNotFound();
                    break;
                case 500:
                    // Show server error
                    showServerError();
                    break;
                default:
                    showErrorMessage(error.message);
            }
        } else if (error instanceof TypeError) {
            // Network error
            showNetworkError();
        } else {
            // Unknown error
            console.error('Unexpected error:', error);
            showGenericError();
        }
        
        throw error; // Re-throw for caller
    }
}
```

**2. Form Validation with Error Collection:**

```javascript
// Algoritma:
// 1. Collect all validation errors
// 2. Return all errors at once
// 3. Show user all issues to fix

class FormValidator {
    constructor(data) {
        this.data = data;
        this.errors = [];
    }
    
    validate() {
        this.errors = [];
        
        // Validate each field
        this.validateRequired('email', 'Email wajib diisi');
        this.validateEmail('email', 'Format email tidak valid');
        this.validateMinLength('password', 8, 'Password minimal 8 karakter');
        this.validateMatch('password', 'confirmPassword', 'Password tidak cocok');
        
        return {
            isValid: this.errors.length === 0,
            errors: this.errors
        };
    }
    
    validateRequired(field, message) {
        if (!this.data[field] || this.data[field].trim() === '') {
            this.errors.push({ field, message });
        }
    }
    
    validateEmail(field, message) {
        const email = this.data[field];
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.errors.push({ field, message });
        }
    }
    
    validateMinLength(field, min, message) {
        if (this.data[field] && this.data[field].length < min) {
            this.errors.push({ field, message });
        }
    }
    
    validateMatch(field1, field2, message) {
        if (this.data[field1] !== this.data[field2]) {
            this.errors.push({ field: field2, message });
        }
    }
}

// Usage
const validator = new FormValidator({
    email: 'invalid',
    password: '123',
    confirmPassword: '456'
});

const result = validator.validate();
if (!result.isValid) {
    console.log('Validation errors:', result.errors);
    // Show all errors to user
    result.errors.forEach(err => {
        showError(err.field, err.message);
    });
}
```

---

#### 📊 Error Handling Complexity

| Pattern | Complexity | Use Case |
|---------|-----------|----------|
| Try-Catch | O(1) | Synchronous operations |
| Promise .catch() | O(1) | Single async operation |
| Async/Await | O(1) | Multiple async operations |
| Retry with Backoff | O(2^n) | Unreliable operations |
| Error Boundary | O(1) | Component-level handling |

---

### 🔴 6. Modules & Import/Export

#### 📖 Konsep Dasar: ES6 Modules

**Modules** adalah cara **mengorganisir code** menjadi file-file terpisah yang bisa saling import/export. Jika code adalah **buku**, maka modules adalah **bab-bab** yang terpisah tapi saling terkait.

**Mengapa Modules Penting?**
1. **Code Organization:** Pisahkan code berdasarkan fungsi
2. **Reusability:** Pakai ulang code di multiple places
3. **Maintainability:** Lebih mudah debug dan update
4. **Namespace:** Hindari global scope pollution
5. **Tree Shaking:** Bundler bisa remove unused code

---

#### 🔬 Tahapan Logika: Module System

**1. EXPORT - Mengexport Code**

```javascript
// Algoritma Export:
// 1. Tentukan apa yang mau di-export
// 2. Gunakan export keyword
// 3. Other files bisa import

// NAMED EXPORTS
// Algoritma:
// 1. export sebelum declaration
// 2. Multiple exports per file
// 3. Importer harus pakai nama yang sama

// file: utils.js

// Export function
export function add(a, b) {
    return a + b;
}

// Export variable
export const PI = 3.14159;

// Export class
export class Calculator {
    add(a, b) { return a + b; }
}

// Export multiple at once
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

export { subtract, multiply };

// DEFAULT EXPORT
// Algoritma:
// 1. export default (satu per file)
// 2. Importer bisa pakai nama apapun
// 3. No curly braces saat import

// file: logger.js

// Default export function
export default function log(message) {
    console.log(`[LOG]: ${message}`);
}

// Default export class
export default class Logger {
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
}

// Default export value
const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000
};

export default config;

// COMBINED EXPORTS
// Algoritma:
// 1. Mix named and default exports
// 2. Default untuk main export
// 3. Named untuk utilities

// file: math.js

// Main class (default)
export default class MathUtils {
    static add(a, b) { return a + b; }
}

// Helper functions (named)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
```

**2. IMPORT - Mengimport Code**

```javascript
// Algoritma Import:
// 1. Tentukan apa yang mau di-import
// 2. Specify source file
// 3. Use imported code

// IMPORT NAMED EXPORTS
// Algoritma:
// 1. Import dengan curly braces {}
// 2. Nama harus sama dengan export
// 3. Bisa import multiple

// file: app.js
import { add, PI, Calculator } from './utils.js';

console.log(add(2, 3)); // 5
console.log(PI); // 3.14159

// IMPORT DEFAULT EXPORT
// Algoritma:
// 1. No curly braces
// 2. Bisa pakai nama apapun
// 3. Satu default per file

// file: app.js
import log from './logger.js';
import Logger from './logger.js';
import myLogger from './logger.js'; // Nama beda boleh

log('Hello');

// IMPORT COMBINED
// Algoritma:
// 1. Default tanpa braces
// 2. Named dengan braces
// 3. Pisahkan dengan koma

// file: app.js
import MathUtils, { add, subtract } from './math.js';

console.log(MathUtils.add(2, 3)); // 5
console.log(add(2, 3)); // 5

// IMPORT ALL (Namespace Import)
// Algoritma:
// 1. import * as name
// 2. Semua exports dalam namespace
// 3. Akses dengan name.export

// file: app.js
import * as Utils from './utils.js';

console.log(Utils.add(2, 3));
console.log(Utils.PI);

const calc = new Utils.Calculator();

// IMPORT DENGAN RENAME
// Algoritma:
// 1. import { original as newName }
// 2. Rename untuk avoid conflict
// 3. Use newName di code

// file: app.js
import { add as addNumbers, subtract as subtractNumbers } from './math.js';

console.log(addNumbers(5, 3)); // 8
```

**3. MODULE PATTERNS**

```javascript
// PATTERN 1: Barrel Export (index.js)
// Algoritma:
// 1. Create index.js di folder
// 2. Re-export dari multiple files
// 3. Cleaner imports

// file: utils/index.js
export { add, subtract } from './math.js';
export { formatDate, parseDate } from './date.js';
export { validateEmail, validatePhone } from './validation.js';

// Usage
import { add, formatDate, validateEmail } from './utils/index.js';
// Atau
import { add, formatDate, validateEmail } from './utils';

// PATTERN 2: Circular Dependency Handling
// Algoritma:
// 1. Avoid circular imports
// 2. Extract shared code ke third file
// 3. Both import dari shared file

// ❌ Bad: Circular dependency
// file: a.js
import { funcB } from './b.js';
export function funcA() { funcB(); }

// file: b.js
import { funcA } from './a.js';
export function funcB() { funcA(); }

// ✅ Good: Extract shared
// file: shared.js
export function sharedLogic() { /* ... */ }

// file: a.js
import { sharedLogic } from './shared.js';
export function funcA() { sharedLogic(); }

// file: b.js
import { sharedLogic } from './shared.js';
export function funcB() { sharedLogic(); }

// PATTERN 3: Lazy Loading (Dynamic Import)
// Algoritma:
// 1. import() function
// 2. Return Promise
// 3. Load on demand

// Static import (load immediately)
import { heavyModule } from './heavy.js';

// Dynamic import (load on demand)
async function loadModule() {
    const { heavyModule } = await import('./heavy.js');
    heavyModule.doSomething();
}

// Load on user action
button.addEventListener('click', async () => {
    const { heavyModule } = await import('./heavy.js');
    heavyModule.doSomething();
});

// PATTERN 4: Module with State
// Algoritma:
// 1. Private state dalam module
// 2. Export functions yang akses state
// 3. State shared across imports

// file: counter.js
let count = 0; // Private state

export function increment() {
    count++;
    return count;
}

export function decrement() {
    count--;
    return count;
}

export function getCount() {
    return count;
}

// file: app.js
import { increment, getCount } from './counter.js';

increment(); // 1
increment(); // 2
console.log(getCount()); // 2

// PATTERN 5: Configuration Module
// Algoritma:
// 1. Export config object
// 2. Import di multiple files
// 3. Centralized configuration

// file: config.js
export const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    debug: true,
    
    get fullApiUrl() {
        return `${this.apiUrl}/v1`;
    }
};

// file: api.js
import { config } from './config.js';

async function fetchData(endpoint) {
    const response = await fetch(`${config.fullApiUrl}${endpoint}`, {
        timeout: config.timeout
    });
    return response.json();
}
```

---

#### ⚠️ Jebakan Umum & Best Practices

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **Circular dependencies** | Module A import B, B import A | Extract shared code |
| **Default vs named confusion** | Lupa curly braces | Consistent naming convention |
| **Module side effects** | Code runs on import | Avoid side effects |
| **Large bundle size** | Import everything | Use tree-shaking, lazy load |
| **Relative path hell** | ../../../../utils | Use absolute paths/alias |

**Best Practices:**

```javascript
// 1. One module, one responsibility
// ✅ Good
// file: validators.js - hanya validation logic
export function validateEmail(email) { /* ... */ }
export function validatePhone(phone) { /* ... */ }

// ❌ Bad
// file: utils.js - everything mixed
export function validateEmail(email) { /* ... */ }
export function formatDate(date) { /* ... */ }
export function apiCall(url) { /* ... */ }

// 2. Named exports untuk tree-shaking
// ✅ Good (better tree-shaking)
export function add() { /* ... */ }
export function subtract() { /* ... */ }

// ❌ Bad (all or nothing)
export default {
    add() { /* ... */ },
    subtract() { /* ... */ }
};

// 3. Avoid side effects
// ✅ Good
export const config = { debug: true };

// ❌ Bad
console.log('Module loaded!'); // Side effect!
document.body.classList.add('loaded'); // Side effect!

// 4. Use index.js for clean exports
// ✅ Good
// utils/index.js
export * from './validators.js';
export * from './formatters.js';
export * from './helpers.js';

// Usage
import { validateEmail, formatDate } from './utils';

// 5. Lazy load heavy modules
// ✅ Good
async function loadChart() {
    const Chart = await import('chart.js');
    return Chart;
}

// Load only when needed
button.addEventListener('click', async () => {
    const Chart = await loadChart();
    new Chart(ctx, config);
});
```

---

#### 💡 Aplikasi Dunia Nyata

**1. Project Structure:**

```javascript
// Project structure dengan modules
// src/
// ├── index.js              // Entry point
// ├── config/
// │   ├── index.js          // Barrel export
// │   ├── database.js       // DB config
// │   └── api.js            // API config
// ├── utils/
// │   ├── index.js
// │   ├── validators.js     // Validation functions
// │   ├── formatters.js     // Format functions
// │   └── helpers.js        // Helper functions
// ├── services/
// │   ├── index.js
// │   ├── userService.js    // User-related API calls
// │   └── authService.js    // Auth-related API calls
// ├── models/
// │   ├── index.js
// │   ├── User.js           // User model/class
// │   └── Product.js        // Product model/class
// └── components/
//     ├── index.js
//     ├── Button.js         // Button component
//     └── Modal.js          // Modal component

// Usage in index.js
import { config } from './config';
import { validateEmail } from './utils';
import { userService } from './services';
import { User } from './models';
import { Button, Modal } from './components';

// Clean imports dengan barrel exports!
```

**2. Plugin System:**

```javascript
// Algoritma Plugin System:
// 1. Define plugin interface
// 2. Load plugins dynamically
// 3. Register and execute

// file: pluginManager.js
class PluginManager {
    constructor() {
        this.plugins = new Map();
    }
    
    async loadPlugin(name, path) {
        try {
            const plugin = await import(path);
            
            if (plugin.default && plugin.default.name) {
                this.plugins.set(name, plugin.default);
                console.log(`Plugin "${name}" loaded`);
            } else {
                throw new Error('Invalid plugin structure');
            }
        } catch (error) {
            console.error(`Failed to load plugin "${name}":`, error);
        }
    }
    
    executePlugin(name, ...args) {
        const plugin = this.plugins.get(name);
        
        if (plugin && plugin.execute) {
            return plugin.execute(...args);
        }
        
        throw new Error(`Plugin "${name}" not found or invalid`);
    }
    
    getPlugin(name) {
        return this.plugins.get(name);
    }
}

// Usage
const pluginManager = new PluginManager();

// Load plugins on demand
await pluginManager.loadPlugin('analytics', './plugins/analytics.js');
await pluginManager.loadPlugin('logging', './plugins/logging.js');

// Execute plugins
pluginManager.executePlugin('analytics', 'page_view', { page: '/home' });
pluginManager.executePlugin('logging', 'info', 'Application started');
```

---

#### 📊 Module Complexity

| Pattern | Bundle Impact | Load Time | Use Case |
|---------|--------------|-----------|----------|
| Static Import | Included at build | Immediate | Core dependencies |
| Dynamic Import | Separate chunk | On demand | Heavy modules |
| Barrel Export | Same as direct | Immediate | Clean API |
| Circular | Build error | N/A | Avoid! |

---

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

---

## 📚 Bab 8: Materi Lanjutan Full-Stack Ready (Part 3) {#-bab-8-materi-lanjutan-full-stack-ready-part-3}

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

> **🎯 Tujuan Bab:** Melengkapi skill untuk handling text processing dan API integration. Bab ini mencakup Regular Expressions dan HTTP/API fundamentals.

---

### 🟡 7. Regular Expressions (Regex)

#### 📖 Konsep Dasar: Pattern Matching

**Regular Expressions (Regex)** adalah **bahasa pattern** untuk matching, searching, dan manipulating text. Jika text adalah **lautan**, regex adalah **jaring** yang bisa menangkap ikan spesifik yang kamu mau.

**Mengapa Regex Penting?**
1. **Validation:** Email, phone, password validation
2. **Search & Replace:** Find complex patterns
3. **Data Extraction:** Extract data from text
4. **Text Processing:** Parse and transform text
5. **Input Sanitization:** Clean user input

---

#### 🔬 Tahapan Logika: Regex Pattern

**1. BASIC SYNTAX - Character Classes**

```javascript
// Algoritma Regex:
// 1. Define pattern dengan /pattern/
// 2. Test string dengan pattern
// 3. Return match atau tidak

// CHARACTER CLASSES
// Algoritma:
// 1. [...] match any character in brackets
// 2. [^...] match any character NOT in brackets
// 3. Predefined classes untuk common chars

const text = 'Hello World 123';

// Basic character class
const regex1 = /[aeiou]/;      // Match any vowel
console.log(text.match(regex1)); // ['e']

// Negated character class
const regex2 = /[^aeiou]/;     // Match any non-vowel
console.log(text.match(regex2)); // ['H']

// Range
const regex3 = /[a-z]/;        // Match lowercase letter
const regex4 = /[0-9]/;        // Match digit
const regex5 = /[A-Za-z0-9]/;  // Match alphanumeric

// PREDEFINED CLASSES
// Algoritma:
// 1. \d = digit [0-9]
// 2. \w = word [A-Za-z0-9_]
// 3. \s = whitespace (space, tab, newline)
// 4. . = any character (except newline)

const regex6 = /\d/;      // Match any digit
const regex7 = /\w/;      // Match any word character
const regex8 = /\s/;      // Match any whitespace
const regex9 = /./;       // Match any character

console.log('123'.match(/\d/));    // ['1']
console.log('abc'.match(/\w/));    // ['a']
console.log('a b'.match(/\s/));    // [' ']
```

**2. QUANTIFIERS - Berapa Kali Match**

```javascript
// Algoritma Quantifiers:
// 1. Tentukan berapa kali pattern occur
// 2. Greedy (maximal) vs Lazy (minimal)
// 3. Exact count atau range

// BASIC QUANTIFIERS
// Algoritma:
// 1. * = 0 or more
// 2. + = 1 or more
// 3. ? = 0 or 1 (optional)
// 4. {n} = exactly n times
// 5. {n,} = n or more
// 6. {n,m} = between n and m

const text = 'aaabbbccc';

console.log(text.match(/a*/));   // ['aaa'] (0 or more)
console.log(text.match(/a+/));   // ['aaa'] (1 or more)
console.log(text.match(/a?/));   // ['a'] (0 or 1)
console.log(text.match(/a{3}/)); // ['aaa'] (exactly 3)
console.log(text.match(/a{2,4}/)); // ['aaa'] (between 2-4)
console.log(text.match(/a{2,}/));  // ['aaa'] (2 or more)

// GREEDY VS LAZY
// Algoritma:
// 1. Greedy: match as much as possible
// 2. Lazy: match as little as possible
// 3. Add ? setelah quantifier untuk lazy

const html = '<div>content</div>';

// Greedy (default)
console.log(html.match(/<.*>/));  
// ['<div>content</div>'] (match semua)

// Lazy (add ?)
console.log(html.match(/<.*?>/)); 
// ['<div>'] (match minimal)

// APLIKASI: Email validation sederhana
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test('user@email.com')); // true
console.log(emailRegex.test('invalid')); // false
```

**3. ANCHORS & BOUNDARIES - Posisi Pattern**

```javascript
// Algoritma Anchors:
// 1. ^ = start of string
// 2. $ = end of string
// 3. \b = word boundary
// 4. \B = NOT word boundary

const text = 'Hello World';

// Start of string
console.log(text.match(/^Hello/)); // ['Hello']
console.log(text.match(/^World/)); // null

// End of string
console.log(text.match(/World$/)); // ['World']
console.log(text.match(/Hello$/)); // null

// Exact match (start AND end)
const exactRegex = /^Hello World$/;
console.log(exactRegex.test('Hello World')); // true
console.log(exactRegex.test('Hello World!')); // false

// Word boundary
const text2 = 'cat catches category';

console.log(text2.match(/\bcat\b/));  // ['cat'] (exact word)
console.log(text2.match(/\bcat/));    // ['cat'] (start of word)
console.log(text2.match(/cat\b/));    // ['cat'] (end of word)
console.log(text2.match(/\Bcat/));    // ['cat'] in 'catches' (not boundary)

// APLIKASI: Validate exact format
// Phone: 0812-3456-7890
const phoneRegex = /^\d{4}-\d{4}-\d{4}$/;
console.log(phoneRegex.test('0812-3456-7890')); // true
console.log(phoneRegex.test('081234567890'));   // false

// Password: 8-16 chars, letters and numbers only
const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;
console.log(passwordRegex.test('Abc12345')); // true
console.log(passwordRegex.test('abc'));      // false (too short)
```

**4. GROUPS & CAPTURE - Mengelompokkan Pattern**

```javascript
// Algoritma Groups:
// 1. (...) capture group
// 2. (?:...) non-capture group
// 3. \1, \2 backreference
// 4. Named groups (?<name>...)

const text = '2024-02-20';

// Capture groups
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
const match = text.match(dateRegex);

console.log(match[0]); // '2024-02-20' (full match)
console.log(match[1]); // '2024' (first group - year)
console.log(match[2]); // '02' (second group - month)
console.log(match[3]); // '20' (third group - day)

// Named capture groups
const namedRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const namedMatch = text.match(namedRegex);

console.log(namedMatch.groups.year);   // '2024'
console.log(namedMatch.groups.month);  // '02'
console.log(namedMatch.groups.day);    // '20'

// Backreference
// Algoritma:
// 1. \1 reference group 1
// 2. \2 reference group 2
// 3. Match same text as group

const duplicateRegex = /(\w+)\s+\1/;
console.log('hello hello'.match(duplicateRegex)); 
// ['hello hello', 'hello']

// Non-capture group
// Algoritma:
// 1. (?:...) group tapi tidak capture
// 2. Untuk grouping tanpa overhead
// 3. Cannot backreference

const nonCaptureRegex = /(?:https?:\/\/)?www\./;
console.log('https://www.example.com'.match(nonCaptureRegex));
// ['https://www.'] (hanya match, tidak capture)

// APLIKASI: Parse name format
const nameRegex = /(?<last>\w+),\s*(?<first>\w+)/;
const nameMatch = 'Doe, John'.match(nameRegex);

console.log(`${nameMatch.groups.first} ${nameMatch.groups.last}`);
// 'John Doe'
```

**5. FLAGS - Modifiers untuk Pattern**

```javascript
// Algoritma Flags:
// 1. i = case insensitive
// 2. g = global (all matches)
// 3. m = multiline
// 4. s = dotall (dot match newline)
// 5. u = unicode
// 6. y = sticky

const text = 'Hello hello HELLO';

// Case insensitive
console.log(text.match(/hello/i));    // ['Hello']
console.log(text.match(/hello/gi));   // ['Hello', 'hello', 'HELLO']

// Global match
const text2 = 'a1 b2 c3';
console.log(text2.match(/\d/));      // ['1'] (first only)
console.log(text2.match(/\d/g));     // ['1', '2', '3'] (all)

// Multiline
const multiline = `Line 1
Line 2
Line 3`;

console.log(multiline.match(/^Line \d/g));   
// ['Line 1'] (only first line)

console.log(multiline.match(/^Line \d/gm));  
// ['Line 1', 'Line 2', 'Line 3'] (all lines)

// COMBINED FLAGS
const email = 'USER@EMAIL.COM';
const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/i;  // Case insensitive
console.log(emailRegex.test(email)); // true

// APLIKASI: Replace all occurrences
const text3 = 'foo bar foo baz foo';
const replaced = text3.replace(/foo/g, 'XXX');
console.log(replaced); // 'XXX bar XXX baz XXX'
```

---

#### 🔬 Tahapan Logika: Regex Methods

**1. test() - Check Pattern Match**

```javascript
// Algoritma test():
// 1. regex.test(string)
// 2. Return true jika match
// 3. Return false jika tidak match

const regex = /hello/i;

console.log(regex.test('Hello World')); // true
console.log(regex.test('Goodbye'));     // false

// APLIKASI: Form validation
function validateInput(input, pattern) {
    return pattern.test(input);
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(validateInput('user@email.com', emailPattern)); // true
```

**2. match() - Get Matches**

```javascript
// Algoritma match():
// 1. string.match(regex)
// 2. Return array of matches
// 3. Return null jika tidak match

const text = 'The rain in Spain';

// Without global flag
console.log(text.match(/in/));  
// ['in', index: 5, input: 'The rain in Spain', groups: undefined]

// With global flag
console.log(text.match(/in/g));  
// ['in', 'in']

// With capture groups
const date = '2024-02-20';
console.log(date.match(/(\d{4})-(\d{2})-(\d{2})/));
// ['2024-02-20', '2024', '02', '20', index: 0, ...]
```

**3. matchAll() - Get All Matches with Details**

```javascript
// Algoritma matchAll():
// 1. string.matchAll(regex)
// 2. Return iterator
// 3. Loop untuk get all matches
// 4. Include groups dan index

const text = 'test1 test2 test3';
const regex = /test(\d)/g;

for (const match of text.matchAll(regex)) {
    console.log(match[0]); // Full match: 'test1', 'test2', 'test3'
    console.log(match[1]); // Group 1: '1', '2', '3'
    console.log(match.index); // Index: 0, 6, 12
}

// Convert to array
const allMatches = [...text.matchAll(regex)];
console.log(allMatches);
```

**4. replace() - Replace Matches**

```javascript
// Algoritma replace():
// 1. string.replace(search, replacement)
// 2. search bisa string atau regex
// 3. replacement bisa string atau function

const text = 'Hello World';

// Replace first occurrence
console.log(text.replace('l', 'L'));  
// 'HeLlo World'

// Replace all (with regex)
console.log(text.replace(/l/g, 'L')); 
// 'HeLLo WorLd'

// Replace with capture groups
const date = '2024-02-20';
const replaced = date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$2/$3/$1');
console.log(replaced); // '02/20/2024'

// Replace with function
const text2 = '100 200 300';
const doubled = text2.replace(/\d+/g, (match) => {
    return (parseInt(match) * 2).toString();
});
console.log(doubled); // '200 400 600'
```

---

#### ⚠️ Jebakan Umum & Best Practices

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **Catastrophic backtracking** | Nested quantifiers cause infinite loop | Avoid `(.+)+`, use specific patterns |
| **Greedy vs Lazy** | Default greedy match too much | Use `?` untuk lazy matching |
| **Global flag forgotten** | Only first match replaced | Add `g` flag untuk replace all |
| **Special chars not escaped** | `.`, `*`, `+` treated as regex | Escape dengan `\` |
| **Unicode issues** | Emoji, special chars break pattern | Use `u` flag, `\p{}` properties |

**Best Practices:**

```javascript
// 1. Test regex online first
// ✅ Use regex101.com atau regexr.com
// ✅ Visualize pattern
// ✅ Test dengan sample data

// 2. Use specific patterns
// ❌ Bad: Too general
const badRegex = /.+/;

// ✅ Good: Specific
const goodRegex = /[a-zA-Z0-9]+/;

// 3. Avoid catastrophic backtracking
// ❌ Bad: Nested quantifiers
const badRegex2 = /(.+)+/;  // Can hang browser!

// ✅ Good: Specific quantifiers
const goodRegex2 = /[a-z]{1,10}/;

// 4. Comment complex regex
// Use verbose mode or break down
const emailRegex = /^          # Start
                    [^\s@]+     # Username
                    @           # @ symbol
                    [^\s@]+     # Domain
                    \.          # Dot
                    [^\s@]+     # TLD
                    $/ix;       // Case insensitive, verbose

// 5. Extract to constants
// ❌ Bad
function validate(str) {
    return /^[a-z]+$/.test(str);
}

// ✅ Good
const LOWERCASE_LETTERS = /^[a-z]+$/;
function validate(str) {
    return LOWERCASE_LETTERS.test(str);
}
```

---

#### 💡 Aplikasi Dunia Nyata

**1. Input Validation:**

```javascript
// Algoritma Validation:
// 1. Define pattern untuk setiap field
// 2. Test input terhadap pattern
// 3. Return valid/invalid dengan message

const validators = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^(\+62|0)[0-9]{9,12}$/,
    username: /^[a-zA-Z0-9_]{3,16}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    url: /^https?:\/\/[^\s]+$/,
    date: /^\d{4}-\d{2}-\d{2}$/,
    time: /^\d{2}:\d{2}$/,
    creditCard: /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/
};

function validateField(value, type) {
    const pattern = validators[type];
    
    if (!pattern) {
        throw new Error(`Unknown validation type: ${type}`);
    }
    
    const isValid = pattern.test(value);
    
    return {
        isValid,
        message: isValid ? 'Valid' : `Invalid ${type} format`
    };
}

// Usage
console.log(validateField('user@email.com', 'email'));
// { isValid: true, message: 'Valid' }

console.log(validateField('invalid', 'email'));
// { isValid: false, message: 'Invalid email format' }
```

**2. Data Extraction:**

```javascript
// Algoritma Extraction:
// 1. Define pattern dengan capture groups
// 2. matchAll untuk get all matches
// 3. Extract captured data

function extractHashtags(text) {
    const hashtagRegex = /#(\w+)/g;
    const matches = [...text.matchAll(hashtagRegex)];
    return matches.map(m => m[1]);
}

const tweet = 'Learning #JavaScript and #Regex! #coding';
console.log(extractHashtags(tweet));
// ['JavaScript', 'Regex', 'coding']

function extractPrices(text) {
    const priceRegex = /Rp\s*(\d+[.,]?\d*)/gi;
    const matches = [...text.matchAll(priceRegex)];
    return matches.map(m => m[1]);
}

const description = 'Harga: Rp 50.000, diskon jadi Rp 40.000';
console.log(extractPrices(description));
// ['50.000', '40.000']

function extractLinks(text) {
    const urlRegex = /https?:\/\/[^\s]+/g;
    return text.match(urlRegex) || [];
}

const content = 'Visit https://example.com or http://test.com';
console.log(extractLinks(content));
// ['https://example.com', 'http://test.com']
```

**3. Text Transformation:**

```javascript
// Algoritma Transformation:
// 1. Define pattern
// 2. replace dengan transformation
// 3. Return transformed text

// Format phone number
function formatPhone(phone) {
    // Remove non-digits
    const cleaned = phone.replace(/\D/g, '');
    
    // Format: 0812-3456-7890
    return cleaned.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3');
}

console.log(formatPhone('081234567890')); // '0812-3456-7890'

// Slugify text
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')      // Remove special chars
        .replace(/\s+/g, '-')          // Replace spaces with dash
        .replace(/-+/g, '-')           // Remove multiple dashes
        .replace(/^-|-$/g, '');        // Trim dashes from ends
}

console.log(slugify('Hello World! This is a Test.'));
// 'hello-world-this-is-a-test'

// Mask sensitive data
function maskEmail(email) {
    return email.replace(/^(.{2}).+(@.+)$/, '$1***$2');
}

console.log(maskEmail('budi.santoso@email.com'));
// 'bu***@email.com'

function maskCreditCard(card) {
    return card.replace(/\d{4}-?\d{4}-?\d{4}-(\d{4})$/, '****-****-****-$1');
}

console.log(maskCreditCard('1234-5678-9012-3456'));
// '****-****-****-3456'
```

---

#### 📊 Regex Performance

| Pattern | Complexity | Note |
|---------|-----------|------|
| Simple literal | O(n) | Fast |
| Character class | O(n) | Fast |
| Quantifiers | O(n*m) | Depends on input |
| Nested quantifiers | O(2^n) | Avoid! |
| Backreferences | O(n*m) | Can be slow |
| Lookahead/behind | O(n*m) | Use sparingly |

---

### 🟡 8. API & HTTP Fundamentals

#### 📖 Konsep Dasar: HTTP & REST API

**HTTP (HyperText Transfer Protocol)** adalah **bahasa komunikasi** antara client (browser) dan server. Jika client adalah **pelanggan** dan server adalah **restoran**, maka HTTP adalah **menu dan cara order**.

**REST API** adalah **aturan** untuk request/response data. API adalah **pelayan** yang bawa pesanan dari client ke dapur (server) dan balik bawa makanan (data).

**Mengapa API & HTTP Penting?**
1. **Client-Server Communication:** Frontend ↔ Backend
2. **Third-party Integration:** Connect to external services
3. **Data Fetching:** Get dynamic data
4. **Microservices:** Service-to-service communication
5. **Modern Architecture:** Essential for web/mobile apps

---

#### 🔬 Tahapan Logika: HTTP Request/Response

**1. HTTP METHODS - Action Types**

```javascript
// Algoritma HTTP Methods:
// 1. GET: Retrieve data
// 2. POST: Create new data
// 3. PUT: Update existing data
// 4. DELETE: Remove data
// 5. PATCH: Partial update

// GET - Retrieve data
// Algoritma:
// 1. Request data dari server
// 2. Server return data
// 3. No side effects
// 4. Idempotent (same result multiple times)

const getUsers = async () => {
    const response = await fetch('/api/users');
    const users = await response.json();
    return users;
};

// POST - Create new data
// Algoritma:
// 1. Send data ke server
// 2. Server create new resource
// 3. Return created resource
// 4. Not idempotent

const createUser = async (userData) => {
    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    
    const newUser = await response.json();
    return newUser;
};

// PUT - Update existing data (full replace)
// Algoritma:
// 1. Send complete updated data
// 2. Server replace existing resource
// 3. Return updated resource
// 4. Idempotent

const updateUser = async (id, userData) => {
    const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    
    return await response.json();
};

// PATCH - Partial update
// Algoritma:
// 1. Send only changed fields
// 2. Server update specific fields
// 3. Return updated resource

const updateUserPartial = async (id, updates) => {
    const response = await fetch(`/api/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
    });
    
    return await response.json();
};

// DELETE - Remove data
// Algoritma:
// 1. Request delete resource
// 2. Server remove resource
// 3. Return success/failure
// 4. Idempotent

const deleteUser = async (id) => {
    const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE'
    });
    
    return await response.json();
};
```

**2. HTTP STATUS CODES - Response Codes**

```javascript
// Algoritma Status Codes:
// 1. 1xx: Informational
// 2. 2xx: Success
// 3. 3xx: Redirection
// 4. 4xx: Client Error
// 5. 5xx: Server Error

// 2XX SUCCESS
// 200 OK - Request successful
// 201 Created - Resource created
// 204 No Content - Success but no content

// 3XX REDIRECTION
// 301 Moved Permanently
// 302 Found (Temporary redirect)
// 304 Not Modified (Use cache)

// 4XX CLIENT ERRORS
// 400 Bad Request - Invalid request
// 401 Unauthorized - Need authentication
// 403 Forbidden - No permission
// 404 Not Found - Resource not found
// 409 Conflict - Resource conflict
// 422 Unprocessable Entity - Validation error
// 429 Too Many Requests - Rate limited

// 5XX SERVER ERRORS
// 500 Internal Server Error
// 502 Bad Gateway
// 503 Service Unavailable
// 504 Gateway Timeout

// HANDLE STATUS CODES
// Algoritma:
// 1. Check response.ok (2xx)
// 2. Check response.status
// 3. Handle different status codes
// 4. Throw error for non-2xx

async function apiRequest(url, options = {}) {
    const response = await fetch(url, options);
    
    // Check if successful (2xx)
    if (!response.ok) {
        // Handle specific status codes
        switch (response.status) {
            case 400:
                throw new BadRequestError('Invalid request');
            case 401:
                // Redirect to login
                redirectToLogin();
                throw new UnauthorizedError('Please login');
            case 403:
                throw new ForbiddenError('Access denied');
            case 404:
                throw new NotFoundError('Resource not found');
            case 429:
                // Rate limited, wait and retry
                const retryAfter = response.headers.get('Retry-After');
                await delay(retryAfter * 1000);
                return apiRequest(url, options);
            case 500:
                throw new ServerError('Server error');
            default:
                throw new Error(`HTTP ${response.status}`);
        }
    }
    
    return response;
}
```

**3. HTTP HEADERS - Metadata**

```javascript
// Algoritma Headers:
// 1. Request headers: Client → Server
// 2. Response headers: Server → Client
// 3. Metadata tentang request/response

// COMMON REQUEST HEADERS
// Algoritma:
// 1. Content-Type: Format of request body
// 2. Authorization: Authentication token
// 3. Accept: Expected response format
// 4. User-Agent: Client information

const headers = {
    'Content-Type': 'application/json',  // Sending JSON
    'Accept': 'application/json',        // Expect JSON response
    'Authorization': 'Bearer token123',  // Auth token
    'User-Agent': 'MyApp/1.0'            // Client info
};

// COMMON RESPONSE HEADERS
// Algoritma:
// 1. Content-Type: Format of response
// 2. Cache-Control: Caching instructions
// 3. Set-Cookie: Set cookies
// 4. X-RateLimit-Limit: Rate limit info

// ACCESS HEADERS
// Algoritma:
// 1. response.headers.get(name)
// 2. response.headers.has(name)
// 3. Iterate headers

async function fetchWithHeaders() {
    const response = await fetch('/api/data');
    
    // Get specific header
    const contentType = response.headers.get('Content-Type');
    const rateLimit = response.headers.get('X-RateLimit-Limit');
    
    // Check if header exists
    if (response.headers.has('Set-Cookie')) {
        console.log('Cookies set');
    }
    
    // Iterate all headers
    for (const [key, value] of response.headers.entries()) {
        console.log(`${key}: ${value}`);
    }
    
    return response;
}
```

**4. REQUEST/RESPONSE BODY - Data Payload**

```javascript
// Algoritma Request Body:
// 1. JSON.stringify data
// 2. Set Content-Type header
// 3. Send in body option

// SENDING JSON
// Algoritma:
// 1. Convert object to JSON string
// 2. Set Content-Type: application/json
// 3. Pass in body option

const userData = {
    name: 'Budi',
    email: 'budi@email.com',
    age: 25
};

const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
});

// SENDING FORM DATA
// Algoritma:
// 1. Create FormData object
// 2. Append fields
// 3. Send (no Content-Type header needed)

const formData = new FormData();
formData.append('name', 'Budi');
formData.append('email', 'budi@email.com');
formData.append('avatar', fileInput.files[0]);

const response = await fetch('/api/users', {
    method: 'POST',
    body: formData
    // Don't set Content-Type for FormData!
});

// Algoritma Response Body:
// 1. response.json() - Parse JSON
// 2. response.text() - Get text
// 3. response.blob() - Get binary data
// 4. response.formData() - Get FormData

// PARSE JSON RESPONSE
const data = await response.json();

// PARSE TEXT RESPONSE
const text = await response.text();

// DOWNLOAD FILE (BLOB)
const blob = await response.blob();
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'file.pdf';
a.click();

// HANDLE FORMDATA RESPONSE
const formData = await response.formData();
const value = formData.get('fieldName');
```

---

#### 🔬 Tahapan Logika: API Integration Patterns

**1. API CLIENT CLASS**

```javascript
// Algoritma API Client:
// 1. Base class untuk semua API calls
// 2. Centralized configuration
// 3. Error handling
// 4. Authentication

class ApiClient {
    constructor(baseURL, options = {}) {
        this.baseURL = baseURL;
        this.timeout = options.timeout || 5000;
        this.headers = options.headers || {};
        this.token = options.token || null;
    }
    
    // Set authentication token
    setToken(token) {
        this.token = token;
    }
    
    // Build full URL
    buildURL(endpoint) {
        return `${this.baseURL}${endpoint}`;
    }
    
    // Build headers
    buildHeaders(customHeaders = {}) {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...this.headers,
            ...customHeaders
        };
        
        // Add auth token if exists
        if (this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }
        
        return headers;
    }
    
    // Generic request method
    async request(endpoint, options = {}) {
        const url = this.buildURL(endpoint);
        const headers = this.buildHeaders(options.headers);
        
        const config = {
            ...options,
            headers
        };
        
        // Add timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);
        config.signal = controller.signal;
        
        try {
            const response = await fetch(url, config);
            clearTimeout(timeoutId);
            
            // Handle non-2xx responses
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new ApiError(
                    errorData.message || `HTTP ${response.status}`,
                    response.status,
                    errorData
                );
            }
            
            // Parse response
            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            }
            
            return await response.text();
        } catch (error) {
            if (error.name === 'AbortError') {
                throw new Error('Request timeout');
            }
            throw error;
        }
    }
    
    // HTTP method shortcuts
    get(endpoint, options = {}) {
        return this.request(endpoint, { ...options, method: 'GET' });
    }
    
    post(endpoint, data, options = {}) {
        return this.request(endpoint, { 
            ...options, 
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    
    put(endpoint, data, options = {}) {
        return this.request(endpoint, { 
            ...options, 
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
    
    patch(endpoint, data, options = {}) {
        return this.request(endpoint, { 
            ...options, 
            method: 'PATCH',
            body: JSON.stringify(data)
        });
    }
    
    delete(endpoint, options = {}) {
        return this.request(endpoint, { ...options, method: 'DELETE' });
    }
}

// Custom API Error class
class ApiError extends Error {
    constructor(message, status, data) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.data = data;
    }
}

// Usage
const api = new ApiClient('https://api.example.com', {
    timeout: 10000,
    headers: {
        'X-API-Key': 'your-api-key'
    }
});

// Set token after login
api.setToken('jwt-token-here');

// Make requests
const users = await api.get('/users');
const newUser = await api.post('/users', { name: 'Budi' });
const updatedUser = await api.put('/users/1', { name: 'Siti' });
await api.delete('/users/1');
```

**2. INTERCEPTORS & MIDDLEWARE**

```javascript
// Algoritma Interceptors:
// 1. Intercept request sebelum send
// 2. Modify request/response
// 3. Add logging, auth, etc

class ApiClientWithInterceptors extends ApiClient {
    constructor(baseURL, options = {}) {
        super(baseURL, options);
        this.requestInterceptors = [];
        this.responseInterceptors = [];
    }
    
    // Add request interceptor
    addRequestInterceptor(interceptor) {
        this.requestInterceptors.push(interceptor);
    }
    
    // Add response interceptor
    addResponseInterceptor(interceptor) {
        this.responseInterceptors.push(interceptor);
    }
    
    // Override request method
    async request(endpoint, options = {}) {
        // Apply request interceptors
        let config = { endpoint, options };
        for (const interceptor of this.requestInterceptors) {
            config = await interceptor(config);
        }
        
        // Make request
        const response = await super.request(config.endpoint, config.options);
        
        // Apply response interceptors
        let result = response;
        for (const interceptor of this.responseInterceptors) {
            result = await interceptor(result);
        }
        
        return result;
    }
}

// Usage
const api = new ApiClientWithInterceptors('https://api.example.com');

// Add logging interceptor
api.addRequestInterceptor(async ({ endpoint, options }) => {
    console.log(`Request: ${options.method || 'GET'} ${endpoint}`);
    return { endpoint, options };
});

// Add auth interceptor
api.addRequestInterceptor(async ({ endpoint, options }) => {
    const token = localStorage.getItem('token');
    if (token) {
        options.headers = {
            ...options.headers,
            'Authorization': `Bearer ${token}`
        };
    }
    return { endpoint, options };
});

// Add error handling interceptor
api.addResponseInterceptor(async (response) => {
    // Log all responses
    console.log('Response:', response);
    return response;
});
```

**3. CACHING STRATEGY**

```javascript
// Algoritma Caching:
// 1. Check cache before request
// 2. Return cached data if valid
// 3. Request from API if cache miss
// 4. Update cache with response

class CachedApiClient extends ApiClient {
    constructor(baseURL, options = {}) {
        super(baseURL, options);
        this.cache = new Map();
        this.cacheExpiry = options.cacheExpiry || 5 * 60 * 1000; // 5 minutes
    }
    
    // Generate cache key
    getCacheKey(endpoint, options = {}) {
        return `${options.method || 'GET'}:${endpoint}:${JSON.stringify(options.body || {})}`;
    }
    
    // Check if cache is valid
    isCacheValid(cachedItem) {
        return cachedItem && (Date.now() - cachedItem.timestamp) < this.cacheExpiry;
    }
    
    // Override request method
    async request(endpoint, options = {}) {
        const cacheKey = this.getCacheKey(endpoint, options);
        
        // Check cache for GET requests
        if ((options.method || 'GET') === 'GET') {
            const cached = this.cache.get(cacheKey);
            
            if (this.isCacheValid(cached)) {
                console.log('Cache hit:', cacheKey);
                return cached.data;
            }
        }
        
        // Make API request
        console.log('Cache miss, fetching from API:', cacheKey);
        const response = await super.request(endpoint, options);
        
        // Cache GET responses
        if ((options.method || 'GET') === 'GET') {
            this.cache.set(cacheKey, {
                data: response,
                timestamp: Date.now()
            });
        } else {
            // Invalidate related cache on write operations
            this.invalidateCache(endpoint);
        }
        
        return response;
    }
    
    // Invalidate cache
    invalidateCache(pattern) {
        for (const key of this.cache.keys()) {
            if (key.includes(pattern)) {
                this.cache.delete(key);
            }
        }
    }
    
    // Clear all cache
    clearCache() {
        this.cache.clear();
    }
}

// Usage
const api = new CachedApiClient('https://api.example.com', {
    cacheExpiry: 10 * 60 * 1000 // 10 minutes
});

// First call - API request
const users1 = await api.get('/users');

// Second call - from cache (faster!)
const users2 = await api.get('/users');

// After POST - cache invalidated
await api.post('/users', { name: 'New User' });

// Next GET - fresh from API
const users3 = await api.get('/users');
```

---

#### ⚠️ Jebakan Umum & Best Practices

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **Not handling errors** | Promise rejection tidak di-handle | Selalu pakai .catch() atau try-catch |
| **No timeout** | Request bisa hang forever | Set timeout dengan AbortController |
| **Hardcoded URLs** | URL tersebar di code | Gunakan base URL configuration |
| **No authentication** | Sensitive endpoints tanpa auth | Add auth token to requests |
| **Not handling 401** | Token expired tidak di-handle | Redirect to login on 401 |
| **Memory leaks** | Fetch tidak di-cleanup | Use AbortController untuk cleanup |

**Best Practices:**

```javascript
// 1. Centralized API configuration
// ✅ Good
const API_CONFIG = {
    baseURL: process.env.API_URL || 'https://api.example.com',
    timeout: 10000,
    retries: 3
};

// ❌ Bad
fetch('https://api.example.com/users');
fetch('https://api.example.com/posts');

// 2. Proper error handling
// ✅ Good
try {
    const response = await fetch('/api/users');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
} catch (error) {
    console.error('API Error:', error);
    showUserMessage('Gagal mengambil data');
}

// ❌ Bad
fetch('/api/users').then(r => r.json());

// 3. Use environment variables
// ✅ Good
const baseURL = process.env.API_URL;

// ❌ Bad
const baseURL = 'https://api.example.com';

// 4. Abstract API calls
// ✅ Good
const userService = {
    getAll: () => api.get('/users'),
    getById: (id) => api.get(`/users/${id}`),
    create: (data) => api.post('/users', data)
};

// ❌ Bad
fetch('/api/users');
fetch('/api/users/1');
```

---

#### 💡 Aplikasi Dunia Nyata

**1. Authentication Flow:**

```javascript
// Algoritma Authentication:
// 1. Login dengan credentials
// 2. Store token
// 3. Include token in subsequent requests
// 4. Refresh token when expired
// 5. Logout (clear token)

class AuthService {
    constructor(apiClient) {
        this.api = apiClient;
        this.tokenKey = 'auth_token';
        this.refreshTokenKey = 'refresh_token';
    }
    
    // Login
    async login(email, password) {
        const response = await this.api.post('/auth/login', {
            email,
            password
        });
        
        // Store tokens
        localStorage.setItem(this.tokenKey, response.token);
        localStorage.setItem(this.refreshTokenKey, response.refreshToken);
        
        return response.user;
    }
    
    // Logout
    async logout() {
        try {
            await this.api.post('/auth/logout');
        } finally {
            // Clear tokens even if API call fails
            localStorage.removeItem(this.tokenKey);
            localStorage.removeItem(this.refreshTokenKey);
        }
    }
    
    // Get current token
    getToken() {
        return localStorage.getItem(this.tokenKey);
    }
    
    // Refresh token
    async refreshToken() {
        const refreshToken = localStorage.getItem(this.refreshTokenKey);
        
        if (!refreshToken) {
            throw new Error('No refresh token');
        }
        
        const response = await this.api.post('/auth/refresh', {
            refreshToken
        });
        
        // Store new tokens
        localStorage.setItem(this.tokenKey, response.token);
        localStorage.setItem(this.refreshTokenKey, response.refreshToken);
        
        return response.token;
    }
    
    // Check if authenticated
    isAuthenticated() {
        return !!this.getToken();
    }
}

// Usage
const api = new ApiClient('https://api.example.com');
const authService = new AuthService(api);

// Login
const user = await authService.login('user@email.com', 'password123');

// API calls with auth token
api.setToken(authService.getToken());
const profile = await api.get('/users/me');

// Logout
await authService.logout();
```

**2. File Upload:**

```javascript
// Algoritma File Upload:
// 1. Select file from input
// 2. Create FormData
// 3. Upload dengan progress tracking
// 4. Handle response

class FileUploader {
    constructor(apiClient) {
        this.api = apiClient;
    }
    
    async upload(file, endpoint, onProgress) {
        const formData = new FormData();
        formData.append('file', file);
        
        // Track upload progress
        const xhr = new XMLHttpRequest();
        
        return new Promise((resolve, reject) => {
            // Progress event
            xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable && onProgress) {
                    const percentComplete = (event.loaded / event.total) * 100;
                    onProgress(percentComplete);
                }
            });
            
            // Load event (success)
            xhr.addEventListener('load', () => {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(new Error(`Upload failed: ${xhr.status}`));
                }
            });
            
            // Error event
            xhr.addEventListener('error', () => {
                reject(new Error('Upload failed'));
            });
            
            // Open and send
            xhr.open('POST', `${this.api.baseURL}${endpoint}`);
            xhr.setRequestHeader('Authorization', `Bearer ${this.api.token}`);
            xhr.send(formData);
        });
    }
    
    // Multiple file upload
    async uploadMultiple(files, endpoint, onProgress) {
        const formData = new FormData();
        
        for (const file of files) {
            formData.append('files', file);
        }
        
        const response = await this.api.request(endpoint, {
            method: 'POST',
            body: formData
            // Don't set Content-Type for FormData!
        });
        
        return response;
    }
}

// Usage
const uploader = new FileUploader(api);

// Single file upload with progress
const fileInput = document.querySelector('#fileInput');
const file = fileInput.files[0];

await uploader.upload(file, '/upload', (progress) => {
    console.log(`Upload progress: ${progress.toFixed(2)}%`);
    document.querySelector('#progressBar').style.width = `${progress}%`;
});

// Multiple files
const files = Array.from(fileInput.files);
const results = await uploader.uploadMultiple(files, '/upload-multiple');
```

---

#### 📊 API Performance

| Operation | Time | Note |
|-----------|------|------|
| GET request | 50-500ms | Depends on network |
| POST request | 100-1000ms | Data processing |
| File upload | 1s-60s+ | Depends on size |
| Cached request | <10ms | From memory |
| Timeout | 5-30s | Configurable |

---

*(Bersambung ke topik berikutnya: Prototypes & Classes, Browser Storage, Date & Time, Performance, Security, Testing, Git)*

---

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

---

## 📚 Bab 9: Materi Lanjutan Full-Stack Ready (Part 4 - Final) {#-bab-9-materi-lanjutan-full-stack-ready-part-4-final}

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

> **🎯 Tujuan Bab:** Melengkapi skill untuk production-ready development. Bab ini mencakup OOP, Storage, Date/Time, Performance, Security, Testing, dan Git.

---

### 🟡 9. Prototypes & Classes (OOP)

#### 📖 Konsep Dasar: Object-Oriented JavaScript

**Prototypes** adalah mekanisme di mana JavaScript objects mewarisi features dari object lain. Jika objects adalah **anak**, maka prototype adalah **orang tua** yang menurunkan sifat-sifatnya.

**Classes** adalah **syntactic sugar** di atas prototype-based inheritance. Membuat OOP lebih familiar untuk developer dari class-based languages.

**Mengapa Prototypes & Classes Penting?**
1. **Inheritance:** Code reuse melalui parent-child relationship
2. **Encapsulation:** Bundle data dan methods
3. **Polymorphism:** Same interface, different implementations
4. **Organization:** Structure code logically
5. **Framework Foundation:** React, Angular, Vue use classes

---

#### 🔬 Tahapan Logika: Prototypes

**1. PROTOTYPE CHAIN - Warisan Object**

```javascript
// Algoritma Prototype Chain:
// 1. Setiap object punya __proto__ property
// 2. __proto__ reference ke parent object
// 3. Property lookup chain: object → proto → proto's proto → null

// BASIC PROTOTYPE
// Algoritma:
// 1. Create object
// 2. Access __proto__
// 3. Chain ke Object.prototype

const obj = { name: 'Budi' };

console.log(obj.name);  // 'Budi' (own property)
console.log(obj.toString());  // '[object Object]' (from prototype)

// obj.__proto__ === Object.prototype
// Object.prototype.__proto__ === null

// PROTOTYPE WITH CONSTRUCTOR
// Algoritma:
// 1. Define constructor function
// 2. Add methods to prototype
// 3. All instances share methods

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add method to prototype (shared)
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

Person.prototype.getOlder = function() {
    this.age++;
};

// Create instances
const budi = new Person('Budi', 25);
const siti = new Person('Siti', 30);

console.log(budi.greet());  // 'Hello, I'm Budi'
console.log(siti.greet());  // 'Hello, I'm Siti'

// Methods are shared (not duplicated)
console.log(budi.greet === siti.greet);  // true

// PROTOTYPE CHAIN LOOKUP
// Algoritma:
// 1. Check own property
// 2. If not found, check __proto__
// 3. Continue up the chain
// 4. Return undefined if not found anywhere

console.log(budi.name);      // 'Budi' (own property)
console.log(budi.greet());   // From Person.prototype
console.log(budi.toString()); // From Object.prototype

// MODIFYING PROTOTYPE
// Algoritma:
// 1. Add to prototype
// 2. All instances get access immediately
// 3. Even existing instances!

Person.prototype.sayHi = function() {
    return 'Hi!';
};

console.log(budi.sayHi());  // 'Hi!' (works on existing instances!)
console.log(siti.sayHi());  // 'Hi!'
```

**2. PROTOTYPAL INHERITANCE - Parent-Child Relationship**

```javascript
// Algoritma Inheritance:
// 1. Create parent constructor
// 2. Create child constructor
// 3. Set child.prototype = Object.create(parent.prototype)
// 4. Set child.prototype.constructor = child
// 5. Call parent constructor from child

// PARENT CLASS
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    return `${this.name} is eating`;
};

// CHILD CLASS
function Dog(name, breed) {
    // Call parent constructor
    Animal.call(this, name);
    this.breed = breed;
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add child-specific methods
Dog.prototype.bark = function() {
    return `${this.name} says woof!`;
};

// Override parent method
Dog.prototype.eat = function() {
    return `${this.name} (the ${this.breed}) is eating dog food`;
};

// Usage
const dog = new Dog('Rex', 'German Shepherd');

console.log(dog.name);   // 'Rex' (from Animal)
console.log(dog.breed);  // 'German Shepherd' (from Dog)
console.log(dog.eat());  // 'Rex (the German Shepherd) is eating dog food' (overridden)
console.log(dog.bark()); // 'Rex says woof!' (from Dog)

// Check prototype chain
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true
```

---

#### 🔬 Tahapan Logika: ES6 Classes

**1. CLASS BASIC SYNTAX**

```javascript
// Algoritma Class:
// 1. class keyword
// 2. constructor method
// 3. Methods without function keyword
// 4. No commas between methods

// BASIC CLASS
// Algoritma:
// 1. Define class
// 2. Constructor initialize properties
// 3. Add methods

class Person {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Instance method
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    // Another method
    getOlder() {
        this.age++;
        return this.age;
    }
}

// Create instances
const budi = new Person('Budi', 25);
const siti = new Person('Siti', 30);

console.log(budi.greet());  // 'Hello, I'm Budi'
console.log(siti.getOlder()); // 31

// CLASS EXPRESSIONS
// Algoritma:
// 1. Anonymous class expression
// 2. Assign to variable
// 3. Or pass as argument

const Animal = class {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
};

const animal = new Animal('Generic');
console.log(animal.speak());
```

**2. CLASS INHERITANCE**

```javascript
// Algoritma Class Inheritance:
// 1. class Child extends Parent
// 2. Call super() in constructor
// 3. Override methods
// 4. Use super.methodName() to call parent

// PARENT CLASS
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        return `${this.name} is eating`;
    }
    
    sleep() {
        return `${this.name} is sleeping`;
    }
}

// CHILD CLASS
class Dog extends Animal {
    constructor(name, breed) {
        // Call parent constructor
        super(name);
        this.breed = breed;
    }
    
    // Override parent method
    eat() {
        return `${this.name} (the ${this.breed}) is eating dog food`;
    }
    
    // New method
    bark() {
        return `${this.name} says woof!`;
    }
    
    // Call parent method with super
    sleepAndDream() {
        const sleeping = super.sleep();
        return `${sleeping} and dreaming about bones`;
    }
}

// Usage
const dog = new Dog('Rex', 'German Shepherd');

console.log(dog.name);      // 'Rex' (from Animal)
console.log(dog.breed);     // 'German Shepherd' (from Dog)
console.log(dog.eat());     // Overridden method
console.log(dog.bark());    // Dog's own method
console.log(dog.sleep());   // Inherited from Animal
console.log(dog.sleepAndDream()); // Uses super.sleep()
```

**3. STATIC METHODS & PROPERTIES**

```javascript
// Algoritma Static:
// 1. static keyword
// 2. Called on class, not instance
// 3. Cannot access this (instance properties)

class MathUtils {
    // Static property
    static PI = 3.14159;
    
    // Static method
    static add(a, b) {
        return a + b;
    }
    
    // Another static method
    static circleArea(radius) {
        return this.PI * radius * radius;
    }
    
    // Instance method (non-static)
    describe() {
        return 'I am a MathUtils instance';
    }
}

// Access static members on CLASS (not instance)
console.log(MathUtils.PI);        // 3.14159
console.log(MathUtils.add(2, 3)); // 5
console.log(MathUtils.circleArea(5)); // 78.53975

// Cannot access static from instance
const math = new MathUtils();
console.log(math.describe()); // 'I am a MathUtils instance'
// console.log(math.PI);  // undefined
// console.log(math.add(2, 3)); // Error!

// USE CASE: Factory method
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    // Static factory method
    static createAdmin(name, email) {
        const user = new User(name, email);
        user.role = 'admin';
        return user;
    }
    
    // Another static factory
    static createGuest() {
        return new User('Guest', 'guest@example.com');
    }
}

const admin = User.createAdmin('Budi', 'budi@email.com');
console.log(admin.role); // 'admin'

const guest = User.createGuest();
console.log(guest.name); // 'Guest'
```

**4. GETTERS & SETTERS**

```javascript
// Algoritma Getters/Setters:
// 1. get propertyName() { }
// 2. set propertyName(value) { }
// 3. Access like properties (no parentheses)
// 4. Validation in setter

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    // Getter
    get area() {
        return this.width * this.height;
    }
    
    // Getter with calculation
    get perimeter() {
        return 2 * (this.width + this.height);
    }
    
    // Setter with validation
    set width(value) {
        if (value <= 0) {
            throw new Error('Width must be positive');
        }
        this._width = value;
    }
    
    get width() {
        return this._width;
    }
    
    set height(value) {
        if (value <= 0) {
            throw new Error('Height must be positive');
        }
        this._height = value;
    }
    
    get height() {
        return this._height;
    }
}

// Usage
const rect = new Rectangle(5, 10);

console.log(rect.area);      // 50 (getter, no parentheses!)
console.log(rect.perimeter); // 30

rect.width = 8;  // setter
console.log(rect.width); // 8 (getter)

// This will throw error
// rect.width = -5; // Error: Width must be positive
```

**5. PRIVATE FIELDS & METHODS**

```javascript
// Algoritma Private:
// 1. # prefix untuk private
// 2. Only accessible inside class
// 3. Cannot access from outside

class BankAccount {
    // Private field
    #balance = 0;
    
    // Private method
    #validateAmount(amount) {
        return amount > 0 && amount <= this.#balance;
    }
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    // Public method access private
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Amount must be positive');
        }
        this.#balance += amount;
        return this.#balance;
    }
    
    withdraw(amount) {
        if (!this.#validateAmount(amount)) {
            throw new Error('Insufficient funds');
        }
        this.#balance -= amount;
        return this.#balance;
    }
    
    // Getter for balance (read-only)
    get balance() {
        return this.#balance;
    }
}

// Usage
const account = new BankAccount(1000);

console.log(account.balance); // 1000 (via getter)
account.deposit(500);
console.log(account.balance); // 1500
account.withdraw(200);
console.log(account.balance); // 1300

// Cannot access private fields
// console.log(account.#balance); // SyntaxError!
// account.#validateAmount(100); // SyntaxError!
```

---

#### ⚠️ Jebakan Umum & Best Practices

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **Forgetting super()** | Child constructor tanpa super() | Always call super() first |
| **this before super()** | Access this before super() | Call super() before using this |
| **Arrow functions in class** | this tidak bind benar | Use regular functions for methods |
| **Private field access** | Cannot access #field outside | Use getters/setters |
| **Static vs instance** | Confusion when to use which | Static untuk utility, instance untuk data |

**Best Practices:**

```javascript
// 1. Use class for OOP patterns
// ✅ Good
class UserService {
    constructor(apiClient) {
        this.api = apiClient;
    }
    
    async getUser(id) {
        return this.api.get(`/users/${id}`);
    }
}

// 2. Use static for utility methods
// ✅ Good
class Validator {
    static isEmail(str) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
    }
    
    static isPhone(str) {
        return /^\d{10,}$/.test(str);
    }
}

// Usage
Validator.isEmail('user@email.com');

// 3. Use private fields for encapsulation
// ✅ Good
class Counter {
    #count = 0;
    
    increment() {
        this.#count++;
    }
    
    get count() {
        return this.#count;
    }
}
```

---

### 🟡 10. Local Storage & Session Storage

#### 📖 Konsep Dasar: Browser Storage

**Browser Storage** adalah cara menyimpan data **di browser user**. Jika server adalah **gudang pusat**, maka browser storage adalah **lemari pribadi** di rumah user.

**Types of Storage:**
1. **localStorage:** Persistent (tidak hilang saat browser ditutup)
2. **sessionStorage:** Session only (hilang saat tab ditutup)
3. **IndexedDB:** Complex data, large storage
4. **Cookies:** Small data, sent to server

---

#### 🔬 Tahapan Logika: Storage Operations

**1. LOCAL STORAGE - Persistent Storage**

```javascript
// Algoritma LocalStorage:
// 1. localStorage.setItem(key, value)
// 2. localStorage.getItem(key)
// 3. localStorage.removeItem(key)
// 4. localStorage.clear()

// BASIC OPERATIONS
// Algoritma:
// 1. Set item (string only)
// 2. Get item (return string)
// 3. Remove item
// 4. Clear all

// Set item
localStorage.setItem('name', 'Budi');
localStorage.setItem('age', '25');

// Get item
const name = localStorage.getItem('name');
console.log(name); // 'Budi'

// Remove item
localStorage.removeItem('age');

// Clear all
localStorage.clear();

// STORAGE LIMIT
// Algoritma:
// 1. Check quota (5-10MB typically)
// 2. Handle quota exceeded
// 3. Clean up old data

try {
    const largeData = 'x'.repeat(10 * 1024 * 1024); // 10MB
    localStorage.setItem('large', largeData);
} catch (error) {
    if (error.name === 'QuotaExceededError') {
        console.log('Storage full!');
        // Clean up old data
        localStorage.clear();
    }
}

// STORING OBJECTS
// Algoritma:
// 1. JSON.stringify object
// 2. Store as string
// 3. JSON.parse when retrieving

const user = {
    id: 1,
    name: 'Budi',
    email: 'budi@email.com',
    preferences: {
        theme: 'dark',
        language: 'id'
    }
};

// Store
localStorage.setItem('user', JSON.stringify(user));

// Retrieve
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); // 'Budi'
console.log(storedUser.preferences.theme); // 'dark'

// ERROR HANDLING
// Algoritma:
// 1. Wrap in try-catch
// 2. Handle parse errors
// 3. Provide fallback

function safeGetItem(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return defaultValue;
    }
}

function safeSetItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error('Error writing to localStorage:', error);
        return false;
    }
}

// Usage
safeSetItem('config', { theme: 'dark' });
const config = safeGetItem('config', { theme: 'light' });
```

**2. SESSION STORAGE - Temporary Storage**

```javascript
// Algoritma SessionStorage:
// 1. Same API as localStorage
// 2. Data cleared when tab closes
// 3. Per-tab storage (not shared)

// BASIC OPERATIONS
sessionStorage.setItem('tempData', 'Some data');
const data = sessionStorage.getItem('tempData');
sessionStorage.removeItem('tempData');

// USE CASE: Form data preservation
class FormPreserver {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.storageKey = `form_${formId}`;
        
        // Load saved data
        this.load();
        
        // Save on input change
        this.form.addEventListener('input', () => this.save());
        
        // Clear on submit
        this.form.addEventListener('submit', () => this.clear());
    }
    
    save() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        sessionStorage.setItem(this.storageKey, JSON.stringify(data));
    }
    
    load() {
        const saved = sessionStorage.getItem(this.storageKey);
        if (saved) {
            const data = JSON.parse(saved);
            for (const [key, value] of Object.entries(data)) {
                const input = this.form.querySelector(`[name="${key}"]`);
                if (input) {
                    input.value = value;
                }
            }
        }
    }
    
    clear() {
        sessionStorage.removeItem(this.storageKey);
    }
}

// Usage
const formPreserver = new FormPreserver('registrationForm');
// Form data auto-saved on every input!
```

**3. STORAGE MANAGER CLASS**

```javascript
// Algoritma Storage Manager:
// 1. Centralized storage handling
// 2. Expiry support
// 3. Namespacing
// 4. Error handling

class StorageManager {
    constructor(namespace = 'app', storage = localStorage) {
        this.namespace = namespace;
        this.storage = storage;
    }
    
    // Generate namespaced key
    getKey(key) {
        return `${this.namespace}:${key}`;
    }
    
    // Set with optional expiry
    set(key, value, expiryMs = null) {
        const item = {
            value,
            expiry: expiryMs ? Date.now() + expiryMs : null
        };
        
        try {
            this.storage.setItem(this.getKey(key), JSON.stringify(item));
            return true;
        } catch (error) {
            console.error('Storage set error:', error);
            return false;
        }
    }
    
    // Get with expiry check
    get(key, defaultValue = null) {
        try {
            const itemStr = this.storage.getItem(this.getKey(key));
            
            if (!itemStr) {
                return defaultValue;
            }
            
            const item = JSON.parse(itemStr);
            
            // Check expiry
            if (item.expiry && Date.now() > item.expiry) {
                this.remove(key);
                return defaultValue;
            }
            
            return item.value;
        } catch (error) {
            console.error('Storage get error:', error);
            return defaultValue;
        }
    }
    
    // Remove item
    remove(key) {
        this.storage.removeItem(this.getKey(key));
    }
    
    // Clear all (namespaced)
    clear() {
        const keys = Object.keys(this.storage);
        keys.forEach(key => {
            if (key.startsWith(this.namespace)) {
                this.storage.removeItem(key);
            }
        });
    }
    
    // Get all keys
    keys() {
        return Object.keys(this.storage)
            .filter(key => key.startsWith(this.namespace))
            .map(key => key.replace(`${this.namespace}:`, ''));
    }
}

// Usage
const appStorage = new StorageManager('myapp');

// Set with 1 hour expiry
appStorage.set('token', 'abc123', 60 * 60 * 1000);

// Get (returns null if expired)
const token = appStorage.get('token');

// Clear all app data
appStorage.clear();
```

---

#### 💡 Aplikasi Dunia Nyata

**1. Theme Preference:**

```javascript
// Algoritma Theme Manager:
// 1. Save theme preference
// 2. Load on page load
// 3. Apply to document

class ThemeManager {
    constructor() {
        this.storageKey = 'theme';
        this.load();
    }
    
    load() {
        const theme = localStorage.getItem(this.storageKey) || 'light';
        this.set(theme, false);
    }
    
    set(theme, save = true) {
        document.documentElement.setAttribute('data-theme', theme);
        
        if (save) {
            localStorage.setItem(this.storageKey, theme);
        }
    }
    
    toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        this.set(next);
    }
}

// Usage
const themeManager = new ThemeManager();
document.querySelector('#themeToggle').addEventListener('click', () => {
    themeManager.toggle();
});
```

**2. Shopping Cart Persistence:**

```javascript
// Algoritma Cart Persistence:
// 1. Save cart to localStorage
// 2. Load on page load
// 3. Sync across tabs

class PersistentCart {
    constructor() {
        this.storageKey = 'shopping_cart';
        this.items = this.load();
        
        // Listen for changes in other tabs
        window.addEventListener('storage', (e) => {
            if (e.key === this.storageKey) {
                this.items = JSON.parse(e.newValue || '[]');
                this.emit('change', this.items);
            }
        });
    }
    
    load() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : [];
    }
    
    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.items));
        this.emit('change', this.items);
    }
    
    add(product, qty = 1) {
        const existing = this.items.find(item => item.id === product.id);
        
        if (existing) {
            existing.qty += qty;
        } else {
            this.items.push({ ...product, qty });
        }
        
        this.save();
    }
    
    remove(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.save();
    }
    
    updateQty(productId, qty) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.qty = qty;
            this.save();
        }
    }
    
    clear() {
        this.items = [];
        this.save();
    }
    
    // Simple event emitter
    listeners = {};
    
    on(event, fn) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(fn);
    }
    
    emit(event, data) {
        (this.listeners[event] || []).forEach(fn => fn(data));
    }
}

// Usage
const cart = new PersistentCart();

cart.on('change', (items) => {
    console.log('Cart updated:', items);
    updateCartUI(items);
});

cart.add({ id: 1, name: 'Laptop', price: 5000000 }, 1);
cart.add({ id: 2, name: 'Mouse', price: 150000 }, 2);
```

---

#### 📊 Storage Comparison

| Type | Limit | Persistence | Scope | Use Case |
|------|-------|-------------|-------|----------|
| localStorage | 5-10MB | Permanent | Origin | User preferences, cached data |
| sessionStorage | 5-10MB | Tab session | Tab | Form data, temporary state |
| IndexedDB | Unlimited | Permanent | Origin | Large datasets, offline apps |
| Cookies | 4KB | Configurable | Sent to server | Auth tokens, tracking |

---

*(Bersambung ke topik berikutnya: Date & Time, Performance, Security, Testing, Git)*

---

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

---

## 📚 Bab 10: Materi Lanjutan Full-Stack Ready (Part 5 - Final Completion) {#-bab-10-materi-lanjutan-full-stack-ready-part-5-final-completion}

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

> **🎯 Tujuan Bab:** Melengkapi semua skill yang dibutuhkan untuk production-ready development. Bab final ini mencakup Date/Time, Performance, Security, Testing, dan Git.

---

### 🟡 11. Date & Time Manipulation

#### 📖 Konsep Dasar: Date & Time

**Date & Time** adalah salah satu aspek paling **tricky** dalam programming. Jika angka adalah **penggaris**, maka waktu adalah **sungai** yang terus mengalir dengan timezone, daylight saving, dan format yang berbeda-beda.

**Mengapa Date & Time Penting?**
1. **Timestamps:** Record when events occur
2. **Scheduling:** Set future events
3. **Duration:** Calculate time differences
4. **Formatting:** Display in user-friendly format
5. **Timezones:** Handle global users

---

#### 🔬 Tahapan Logika: Date Operations

**1. CREATING DATES**

```javascript
// Algoritma Creating Dates:
// 1. new Date() - current date/time
// 2. new Date(timestamp) - from milliseconds
// 3. new Date(dateString) - from string
// 4. new Date(year, month, day, ...) - from components

// CURRENT DATE/TIME
// Algoritma:
// 1. new Date() tanpa argument
// 2. Return current date/time
// 3. Based on system clock

const now = new Date();
console.log(now); // 2024-02-20T10:30:00.000Z

// FROM TIMESTAMP
// Algoritma:
// 1. Milliseconds since Jan 1, 1970 00:00:00 UTC
// 2. Positive = after 1970, negative = before
// 3. Use Date.now() for current timestamp

const timestamp = Date.now(); // Current timestamp
const dateFromTimestamp = new Date(timestamp);

const specificTimestamp = new Date(1609459200000); // Jan 1, 2021

// FROM DATE STRING
// Algoritma:
// 1. Parse ISO 8601 format (recommended)
// 2. Parse other formats (browser dependent)
// 3. Return Date object

const date1 = new Date('2024-02-20T10:30:00'); // ISO format
const date2 = new Date('2024-02-20'); // Date only
const date3 = new Date('Feb 20, 2024'); // Natural language

// FROM COMPONENTS
// Algoritma:
// 1. new Date(year, month, day, hour, minute, second, ms)
// 2. Month is 0-indexed (0 = January, 11 = December)
// 3. Omitted components default to 0

const date4 = new Date(2024, 1, 20); // Feb 20, 2024 (month 1 = February!)
const date5 = new Date(2024, 1, 20, 10, 30, 0); // With time
const date6 = new Date(2024, 1, 20, 10, 30, 0, 500); // With milliseconds

// ⚠️ COMMON MISTAKE: Month is 0-indexed!
const january = new Date(2024, 0, 1); // January 1, 2024
const december = new Date(2024, 11, 31); // December 31, 2024
```

**2. GETTING DATE COMPONENTS**

```javascript
// Algoritma Getting Components:
// 1. Use get methods
// 2. Local timezone by default
// 3. Use getUTC methods for UTC

const date = new Date('2024-02-20T10:30:45.123');

// GET COMPONENTS (Local Time)
// Algoritma:
// 1. getFullYear() - 4-digit year
// 2. getMonth() - 0-11 (0 = January)
// 3. getDate() - 1-31 (day of month)
// 4. getDay() - 0-6 (0 = Sunday)
// 5. getHours() - 0-23
// 6. getMinutes() - 0-59
// 7. getSeconds() - 0-59
// 8. getMilliseconds() - 0-999

console.log(date.getFullYear());    // 2024
console.log(date.getMonth());       // 1 (February)
console.log(date.getDate());        // 20
console.log(date.getDay());         // 2 (Tuesday)
console.log(date.getHours());       // 10
console.log(date.getMinutes());     // 30
console.log(date.getSeconds());     // 45
console.log(date.getMilliseconds()); // 123

// GET COMPONENTS (UTC)
// Algoritma:
// 1. Same methods with getUTC prefix
// 2. Return UTC time, not local

console.log(date.getUTCHours());    // Depends on timezone

// GET TIMESTAMP
// Algoritma:
// 1. getTime() - milliseconds since epoch
// 2. ValueOf() - same as getTime()

console.log(date.getTime());  // 1708423845123
console.log(date.valueOf());  // Same as getTime()
```

**3. SETTING DATE COMPONENTS**

```javascript
// Algoritma Setting Components:
// 1. Use set methods
// 2. Mutates original Date object
// 3. Auto-adjust overflow

const date = new Date();

// SET COMPONENTS
// Algoritma:
// 1. setFullYear(year)
// 2. setMonth(month) - 0-11
// 3. setDate(day) - 1-31
// 4. setHours(hour) - 0-23
// 5. setMinutes(min) - 0-59
// 6. setSeconds(sec) - 0-59
// 7. setMilliseconds(ms) - 0-999

date.setFullYear(2025);
date.setMonth(5);      // June
date.setDate(15);
date.setHours(14, 30, 0); // Set hour, minute, second

// AUTO-ADJUST OVERFLOW
// Algoritma:
// 1. Set value outside range
// 2. JavaScript auto-adjust
// 3. Carry over to next unit

const date2 = new Date(2024, 1, 20); // Feb 20, 2024
date2.setDate(32); // Feb 32? Auto-adjust to March 3!
console.log(date2.toDateString()); // 'Sun Mar 03 2024'

date2.setMonth(13); // Month 13? Auto-adjust to February next year!
console.log(date2.getFullYear()); // 2025
```

**4. DATE ARITHMETIC**

```javascript
// Algoritma Date Arithmetic:
// 1. Dates stored as milliseconds
// 2. Subtract dates = difference in ms
// 3. Add/subtract ms to change date

// DATE DIFFERENCE
// Algoritma:
// 1. Subtract two dates
// 2. Result in milliseconds
// 3. Convert to desired unit

const date1 = new Date('2024-01-01');
const date2 = new Date('2024-12-31');

const diffMs = date2 - date1;
const diffDays = diffMs / (1000 * 60 * 60 * 24);
const diffWeeks = diffDays / 7;
const diffMonths = diffDays / 30.44; // Average

console.log(`Days: ${diffDays}`);    // ~365
console.log(`Weeks: ${diffWeeks}`);  // ~52
console.log(`Months: ${diffMonths}`); // ~12

// ADD/SUBTRACT TIME
// Algoritma:
// 1. Get milliseconds to add
// 2. Add to date
// 3. Return new Date

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function addMonths(date, months) {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
}

function addYears(date, years) {
    const result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    return result;
}

// Usage
const today = new Date();
const tomorrow = addDays(today, 1);
const nextMonth = addMonths(today, 1);
const nextYear = addYears(today, 1);

// SUBTRACT DATES
function subtractDays(date, days) {
    return addDays(date, -days);
}

const yesterday = subtractDays(today, 1);
```

**5. DATE FORMATTING**

```javascript
// Algoritma Date Formatting:
// 1. toLocaleString() - user-friendly format
// 2. toISOString() - ISO 8601 format
// 3. Custom format with components

// BUILT-IN FORMATS
const date = new Date('2024-02-20T10:30:45');

// ISO Format (for APIs, storage)
console.log(date.toISOString());
// '2024-02-20T10:30:45.000Z'

// Locale String (for display)
console.log(date.toLocaleString()); // '2/20/2024, 10:30:45 AM' (US)
console.log(date.toLocaleString('id-ID')); // '20/2/2024 10.30.45' (Indonesian)

// Locale Date/Time
console.log(date.toLocaleDateString('id-ID')); // '20/2/2024'
console.log(date.toLocaleTimeString('id-ID')); // '10.30.45'

// CUSTOM FORMAT
// Algoritma:
// 1. Get components
// 2. Pad with zeros
// 3. Format string

function formatDate(date, format = 'YYYY-MM-DD') {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
}

// Usage
console.log(formatDate(date)); // '2024-02-20'
console.log(formatDate(date, 'DD/MM/YYYY')); // '20/02/2024'
console.log(formatDate(date, 'YYYY-MM-DD HH:mm:ss')); // '2024-02-20 10:30:45'

// INTL.DATEFORMATTER (Advanced)
// Algoritma:
// 1. Create DateTimeFormat instance
// 2. Configure options
// 3. Format date

const formatter = new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit'
});

console.log(formatter.format(date));
// 'Selasa, 20 Februari 2024 pukul 10.30'
```

**6. TIMEZONE HANDLING**

```javascript
// Algoritma Timezone:
// 1. Date object always stores UTC internally
// 2. Display in local timezone by default
// 3. Use options for specific timezone

// GET TIMEZONE OFFSET
// Algoritma:
// 1. getTimezoneOffset() returns minutes
// 2. Positive = behind UTC
// 3. Negative = ahead of UTC

const date = new Date();
const offset = date.getTimezoneOffset(); // e.g., -420 for UTC+7 (WIB)
console.log(`Timezone offset: ${offset} minutes`);

// FORMAT IN SPECIFIC TIMEZONE
// Algoritma:
// 1. Use Intl.DateTimeFormat
// 2. Set timeZone option
// 3. Format in that timezone

const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});

console.log(formatter.format(date)); // Time in Jakarta

// COMMON TIMEZONES
const timezones = {
    jakarta: 'Asia/Jakarta',      // UTC+7
    singapore: 'Asia/Singapore',  // UTC+8
    tokyo: 'Asia/Tokyo',          // UTC+9
    london: 'Europe/London',      // UTC+0/UTC+1
    newyork: 'America/New_York',  // UTC-5/UTC-4
    la: 'America/Los_Angeles'     // UTC-8/UTC-7
};

function formatInTimezone(date, timezone) {
    return new Intl.DateTimeFormat('id-ID', {
        timeZone: timezone,
        dateStyle: 'full',
        timeStyle: 'medium'
    }).format(date);
}

console.log(formatInTimezone(date, timezones.jakarta));
console.log(formatInTimezone(date, timezones.newyork));
```

---

#### ⚠️ Jebakan Umum & Best Practices

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **Month 0-indexed** | January = 0, December = 11 | Remember: month - 1 |
| **Timezone confusion** | Local vs UTC vs specific | Always specify timezone |
| **Date mutation** | set methods mutate original | Clone date first |
| **Daylight saving** | Time jumps forward/back | Use libraries for critical apps |
| **String parsing** | Format varies by browser | Use ISO 8601 format |

**Best Practices:**

```javascript
// 1. Use ISO 8601 for storage/APIs
// ✅ Good
const isoDate = '2024-02-20T10:30:00Z';

// ❌ Bad
const customDate = '02/20/2024'; // Ambiguous!

// 2. Clone dates before modifying
// ✅ Good
const newDate = new Date(originalDate.getTime());
newDate.setDate(newDate.getDate() + 1);

// ❌ Bad
const newDate = originalDate; // Same reference!
newDate.setDate(newDate.getDate() + 1); // Mutates original!

// 3. Use libraries for complex operations
// ✅ Good for complex: date-fns, dayjs, luxon
import { addDays, format } from 'date-fns';
const result = addDays(new Date(), 7);

// ✅ Native for simple
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
```

---

#### 💡 Aplikasi Dunia Nyata

**1. Age Calculator:**

```javascript
// Algoritma:
// 1. Get birth date
// 2. Get current date
// 3. Calculate year difference
// 4. Adjust if birthday hasn't occurred yet

function calculateAge(birthDate) {
    const birth = new Date(birthDate);
    const now = new Date();
    
    let age = now.getFullYear() - birth.getFullYear();
    const monthDiff = now.getMonth() - birth.getMonth();
    const dayDiff = now.getDate() - birth.getDate();
    
    // Adjust if birthday hasn't occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    
    return age;
}

console.log(calculateAge('2000-05-15')); // Age in years
```

**2. Countdown Timer:**

```javascript
// Algoritma:
// 1. Get target date
// 2. Calculate difference
// 3. Convert to days, hours, minutes, seconds
// 4. Update display

function countdown(targetDate) {
    const target = new Date(targetDate);
    const now = new Date();
    const diff = target - now;
    
    if (diff <= 0) {
        return { expired: true };
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
}

// Usage
const newYear = new Date('2025-01-01T00:00:00');
const remaining = countdown(newYear);
console.log(`Time until New Year: ${remaining.days}d ${remaining.hours}h ${remaining.minutes}m ${remaining.seconds}s`);
```

**3. Date Range Validator:**

```javascript
// Algoritma:
// 1. Get start and end dates
// 2. Validate end >= start
// 3. Check within allowed range

function validateDateRange(startDate, endDate, options = {}) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const now = new Date();
    
    // End must be after start
    if (end <= start) {
        return { valid: false, error: 'End date must be after start date' };
    }
    
    // Check minimum duration
    if (options.minDays) {
        const diffDays = (end - start) / (1000 * 60 * 60 * 24);
        if (diffDays < options.minDays) {
            return { valid: false, error: `Minimum ${options.minDays} days required` };
        }
    }
    
    // Check maximum duration
    if (options.maxDays) {
        const diffDays = (end - start) / (1000 * 60 * 60 * 24);
        if (diffDays > options.maxDays) {
            return { valid: false, error: `Maximum ${options.maxDays} days allowed` };
        }
    }
    
    // Check not in past
    if (options.notInPast && start < now) {
        return { valid: false, error: 'Start date cannot be in the past' };
    }
    
    return { valid: true };
}

// Usage
const result = validateDateRange('2024-03-01', '2024-03-07', {
    minDays: 3,
    maxDays: 30,
    notInPast: true
});

console.log(result); // { valid: true } or { valid: false, error: '...' }
```

---

#### 📊 Date Performance

| Operation | Time | Note |
|-----------|------|------|
| Create Date | O(1) | Fast |
| Get Component | O(1) | Fast |
| Set Component | O(1) | Fast |
| Date Arithmetic | O(1) | Fast |
| Format (toLocaleString) | O(1) | Moderate |
| Parse String | O(1) | Varies by format |

---

### 🟡 12. Performance Optimization

#### 📖 Konsep Dasar: Performance

**Performance Optimization** adalah seni membuat code **lebih cepat** dan **lebih efisien**. Jika code adalah **mobil**, optimization adalah **tuning engine** untuk dapat lebih cepat dengan bensin lebih sedikit.

**Mengapa Performance Penting?**
1. **User Experience:** Faster = happier users
2. **Resource Usage:** Less CPU, memory, battery
3. **Scalability:** Handle more users/data
4. **Cost:** Less server resources = less cost
5. **SEO:** Google ranks faster sites higher

---

#### 🔬 Tahapan Logika: Optimization Techniques

**1. DEBOUNCING - Rate Limiting User Input**

```javascript
// Algoritma Debouncing:
// 1. Function tidak langsung dipanggil
// 2. Reset timer setiap kali dipanggil
// 3. Execute hanya setelah delay tanpa panggilan baru
// 4. Cancel previous timer

// BASIC DEBOUNCE
// Algoritma:
// 1. Return wrapper function
// 2. Clear previous timeout
// 3. Set new timeout
// 4. Execute after delay

function debounce(fn, delay) {
    let timeoutId;
    
    return function(...args) {
        // Clear previous timeout
        clearTimeout(timeoutId);
        
        // Set new timeout
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// USAGE: Search input
// Algoritma:
// 1. User types
// 2. Debounced function waits
// 3. If user stops typing, execute search
// 4. If user continues, reset timer

const searchInput = document.querySelector('#search');

const debouncedSearch = debounce((query) => {
    console.log('Searching for:', query);
    // API call here
}, 300);

searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});

// User types "hello"
// h - timeout set (300ms)
// e - clear timeout, set new (300ms)
// l - clear timeout, set new (300ms)
// l - clear timeout, set new (300ms)
// o - clear timeout, set new (300ms)
// [wait 300ms]
// Execute search for "hello"

// DEBOUNCE WITH OPTIONS
// Algoritma:
// 1. immediate: execute on leading edge
// 2. cancel: cancel pending execution

function debounce(fn, delay, immediate = false) {
    let timeoutId;
    
    return function(...args) {
        const callNow = immediate && !timeoutId;
        
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            timeoutId = null;
            if (!immediate) {
                fn.apply(this, args);
            }
        }, delay);
        
        if (callNow) {
            fn.apply(this, args);
        }
    };
}

// Usage: Execute immediately, then debounce
const debouncedClick = debounce(() => {
    console.log('Clicked!');
}, 300, true);
```

**2. THROTTLING - Limiting Execution Rate**

```javascript
// Algoritma Throttling:
// 1. Function execute immediately
// 2. Cannot execute again until timeout
// 3. Ignore calls during timeout
// 4. Execute on next available slot

// BASIC THROTTLE
// Algoritma:
// 1. Track last execution time
// 2. Check if enough time passed
// 3. Execute if enough time passed
// 4. Ignore if not

function throttle(fn, limit) {
    let lastExecutionTime = 0;
    
    return function(...args) {
        const now = Date.now();
        
        if (now - lastExecutionTime >= limit) {
            lastExecutionTime = now;
            fn.apply(this, args);
        }
    };
}

// USAGE: Scroll event
// Algoritma:
// 1. Scroll fires many times per second
// 2. Throttle to once per 100ms
// 3. Prevent performance issues

const scrollHandler = throttle(() => {
    console.log('Scroll position:', window.scrollY);
    // Update UI, lazy load, etc.
}, 100);

window.addEventListener('scroll', scrollHandler);

// THROTTLE WITH TRAILING
// Algoritma:
// 1. Execute on leading edge
// 2. Also execute on trailing edge
// 3. Capture last call during timeout

function throttle(fn, limit) {
    let lastExecutionTime = 0;
    let timeoutId;
    let lastArgs;
    
    return function(...args) {
        const now = Date.now();
        lastArgs = args;
        
        if (now - lastExecutionTime >= limit) {
            // Execute immediately
            lastExecutionTime = now;
            fn.apply(this, args);
        } else {
            // Schedule trailing execution
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                lastExecutionTime = Date.now();
                fn.apply(this, lastArgs);
            }, limit - (now - lastExecutionTime));
        }
    };
}
```

**3. MEMOIZATION - Caching Function Results**

```javascript
// Algoritma Memoization:
// 1. Create cache object
// 2. Check cache before computing
// 3. Return cached result if exists
// 4. Compute and cache if not exists

// BASIC MEMOIZATION
// Algoritma:
// 1. Return wrapper function
// 2. Generate cache key from arguments
// 3. Check cache
// 4. Return cached or compute and cache

function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        // Generate cache key
        const key = JSON.stringify(args);
        
        // Check cache
        if (key in cache) {
            console.log('Returning from cache');
            return cache[key];
        }
        
        // Compute and cache
        console.log('Computing...');
        const result = fn.apply(this, args);
        cache[key] = result;
        
        return result;
    };
}

// USAGE: Expensive calculations
// Algoritma:
// 1. First call: compute
// 2. Subsequent calls: return cached

// Expensive function
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoized version
const memoFib = memoize(fibonacci);

console.log(memoFib(10)); // Computing... then result
console.log(memoFib(10)); // Returning from cache!
console.log(memoFib(11)); // Computing... (new input)

// MEMOIZATION WITH LIMIT
// Algoritma:
// 1. Limit cache size
// 2. Remove oldest entry when full
// 3. LRU (Least Recently Used) strategy

function memoizeWithLimit(fn, limit = 100) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            // Move to end (most recently used)
            const value = cache.get(key);
            cache.delete(key);
            cache.set(key, value);
            return value;
        }
        
        const result = fn.apply(this, args);
        
        cache.set(key, result);
        
        // Remove oldest if over limit
        if (cache.size > limit) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }
        
        return result;
    };
}
```

**4. LAZY LOADING - Load on Demand**

```javascript
// Algoritma Lazy Loading:
// 1. Don't load until needed
// 2. Load when user requests/scrolls
// 3. Show placeholder while loading
// 4. Cache after loading

// LAZY LOAD IMAGES
// Algoritma:
// 1. Check if image in viewport
// 2. If yes, load image
// 3. Use Intersection Observer API

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// HTML: <img data-src="image.jpg" alt="...">
lazyLoadImages();

// LAZY LOAD MODULES
// Algoritma:
// 1. Use dynamic import()
// 2. Load module on demand
// 3. Cache after loading

class LazyModule {
    constructor(modulePath) {
        this.modulePath = modulePath;
        this.module = null;
        this.loading = false;
    }
    
    async load() {
        if (this.module) {
            return this.module;
        }
        
        if (this.loading) {
            // Wait for existing load
            return new Promise(resolve => {
                const checkLoaded = () => {
                    if (this.module) {
                        resolve(this.module);
                    } else {
                        setTimeout(checkLoaded, 10);
                    }
                };
                checkLoaded();
            });
        }
        
        this.loading = true;
        this.module = await import(this.modulePath);
        this.loading = false;
        
        return this.module;
    }
}

// Usage
const chartModule = new LazyModule('./chart-library.js');

// Load only when needed
document.querySelector('#showChart').addEventListener('click', async () => {
    const Chart = await chartModule.load();
    // Use Chart library
});
```

**5. VIRTUAL SCROLLING - Render Only Visible Items**

```javascript
// Algoritma Virtual Scrolling:
// 1. Calculate visible range
// 2. Render only visible items
// 3. Update on scroll
// 4. Maintain scroll position

class VirtualList {
    constructor(container, items, itemHeight) {
        this.container = container;
        this.items = items;
        this.itemHeight = itemHeight;
        this.visibleCount = Math.ceil(container.clientHeight / itemHeight);
        
        this.setup();
    }
    
    setup() {
        // Set total height
        this.container.style.height = `${this.items.length * this.itemHeight}px`;
        this.container.style.overflowY = 'auto';
        this.container.style.position = 'relative';
        
        // Create viewport
        this.viewport = document.createElement('div');
        this.viewport.style.position = 'absolute';
        this.viewport.style.top = '0';
        this.viewport.style.left = '0';
        this.viewport.style.right = '0';
        this.container.appendChild(this.viewport);
        
        // Listen to scroll
        this.container.addEventListener('scroll', () => this.render());
        
        // Initial render
        this.render();
    }
    
    render() {
        const scrollTop = this.container.scrollTop;
        const startIndex = Math.floor(scrollTop / this.itemHeight);
        const endIndex = Math.min(startIndex + this.visibleCount, this.items.length);
        
        // Clear viewport
        this.viewport.innerHTML = '';
        
        // Position viewport
        this.viewport.style.transform = `translateY(${startIndex * this.itemHeight}px)`;
        
        // Render visible items
        for (let i = startIndex; i < endIndex; i++) {
            const item = document.createElement('div');
            item.style.height = `${this.itemHeight}px`;
            item.textContent = this.items[i];
            this.viewport.appendChild(item);
        }
    }
}

// Usage
const list = new VirtualList(
    document.querySelector('#list'),
    Array.from({length: 10000}, (_, i) => `Item ${i + 1}`),
    50 // item height in pixels
);
```

---

#### ⚠️ Jebakan Umum & Best Practices

| Jebakan | Penjelasan | Solusi |
|---------|------------|--------|
| **Over-optimization** | Optimize prematurely | Profile first, optimize bottlenecks |
| **Debounce vs Throttle** | Confuse when to use which | Debounce for input, Throttle for scroll |
| **Memory leaks** | Cache grows indefinitely | Limit cache size, cleanup |
| **Too aggressive lazy loading** | User waits for everything | Preload critical resources |
| **Ignoring network** | Only optimize JS | Optimize images, use CDN |

**Best Practices:**

```javascript
// 1. Profile before optimizing
// ✅ Good
console.time('operation');
expensiveOperation();
console.timeEnd('operation');

// Use browser DevTools Performance tab

// 2. Use appropriate technique
// ✅ Good
// Search input → debounce
searchInput.addEventListener('input', debounce(search, 300));

// Scroll event → throttle
window.addEventListener('scroll', throttle(handleScroll, 100));

// Expensive calculation → memoize
const memoizedCalc = memoize(expensiveCalc);

// 3. Cleanup resources
// ✅ Good
class Cache {
    constructor(maxSize = 100) {
        this.cache = new Map();
        this.maxSize = maxSize;
    }
    
    set(key, value) {
        if (this.cache.size >= this.maxSize) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    }
    
    clear() {
        this.cache.clear();
    }
}
```

---

#### 💡 Aplikasi Dunia Nyata

**1. Search with Debounce & Loading State:**

```javascript
// Algoritma:
// 1. Debounce search input
// 2. Show loading indicator
// 3. Fetch results
// 4. Hide loading, show results

class SearchComponent {
    constructor(inputSelector, resultsSelector) {
        this.input = document.querySelector(inputSelector);
        this.results = document.querySelector(resultsSelector);
        this.loading = false;
        
        this.setup();
    }
    
    setup() {
        const debouncedSearch = debounce((query) => {
            this.search(query);
        }, 300);
        
        this.input.addEventListener('input', (e) => {
            debouncedSearch(e.target.value);
        });
    }
    
    async search(query) {
        if (!query) {
            this.results.innerHTML = '';
            return;
        }
        
        this.showLoading();
        
        try {
            const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
            const data = await response.json();
            this.displayResults(data);
        } catch (error) {
            this.showError(error);
        } finally {
            this.hideLoading();
        }
    }
    
    showLoading() {
        this.loading = true;
        this.results.innerHTML = '<div class="loading">Searching...</div>';
    }
    
    hideLoading() {
        this.loading = false;
    }
    
    displayResults(data) {
        this.results.innerHTML = data.map(item => `
            <div class="result">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }
    
    showError(error) {
        this.results.innerHTML = `<div class="error">Error: ${error.message}</div>`;
    }
}

// Usage
new SearchComponent('#searchInput', '#searchResults');
```

**2. Infinite Scroll with Throttle:**

```javascript
// Algoritma:
// 1. Throttle scroll handler
// 2. Check if near bottom
// 3. Load more items
// 4. Append to list

class InfiniteScroll {
    constructor(container, loader, threshold = 100) {
        this.container = document.querySelector(container);
        this.loader = document.querySelector(loader);
        this.threshold = threshold;
        this.loading = false;
        this.page = 1;
        
        this.setup();
    }
    
    setup() {
        const throttledScroll = throttle(() => {
            this.checkScroll();
        }, 200);
        
        this.container.addEventListener('scroll', throttledScroll);
    }
    
    checkScroll() {
        const { scrollTop, scrollHeight, clientHeight } = this.container;
        
        // Check if near bottom
        if (scrollHeight - scrollTop - clientHeight < this.threshold) {
            if (!this.loading) {
                this.loadMore();
            }
        }
    }
    
    async loadMore() {
        this.loading = true;
        this.loader.style.display = 'block';
        
        try {
            const response = await fetch(`/api/items?page=${this.page + 1}`);
            const items = await response.json();
            
            if (items.length === 0) {
                // No more items
                this.container.removeEventListener('scroll', this.checkScroll);
                return;
            }
            
            this.appendItems(items);
            this.page++;
        } catch (error) {
            console.error('Failed to load more:', error);
        } finally {
            this.loading = false;
            this.loader.style.display = 'none';
        }
    }
    
    appendItems(items) {
        const list = this.container.querySelector('.list');
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item';
            div.textContent = item.name;
            list.appendChild(div);
        });
    }
}

// Usage
new InfiniteScroll('#container', '#loader');
```

---

#### 📊 Performance Comparison

| Technique | Use Case | Improvement |
|-----------|----------|-------------|
| Debounce | Search input | 90% fewer calls |
| Throttle | Scroll events | 95% fewer calls |
| Memoization | Expensive calculations | 99% faster (cached) |
| Lazy Loading | Images, modules | 50-80% faster initial load |
| Virtual Scrolling | Large lists | 100x faster rendering |

---

*(Bersambung ke topik berikutnya: Security, Testing, Git)*

---

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

---

## 📚 Bab 11: Materi Lanjutan Full-Stack Ready (Part 6 - Final Completion) {#-bab-11-materi-lanjutan-full-stack-ready-part-6-final-completion}

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)

> **🎯 Tujuan Bab:** Topik final untuk production-ready development. Bab ini mencakup Security, Testing, dan Git.

---

### 🟡 13. Security Basics

#### 📖 Konsep Dasar: Web Security

**Web Security** adalah praktik melindungi aplikasi web dari **serangan berbahaya**. Jika aplikasi adalah **rumah**, security adalah **kunci, alarm, dan pagar** yang melindungi dari pencuri.

**Mengapa Security Penting?**
1. **Data Protection:** Protect user data from theft
2. **Trust:** Users trust secure applications
3. **Compliance:** Legal requirements (GDPR, etc.)
4. **Business Continuity:** Prevent downtime from attacks
5. **Reputation:** Security breaches damage reputation

---

#### 🔬 Tahapan Logika: Security Threats & Prevention

**1. XSS (CROSS-SITE SCRIPTING)**

```javascript
// Algoritma XSS Attack:
// 1. Attacker injects malicious script
// 2. Script executes in victim's browser
// 3. Steal cookies, session, redirect

// ❌ VULNERABLE: User input directly in HTML
// Algoritma:
// 1. Get user input
// 2. Insert directly into innerHTML
// 3. Browser executes any script

const userInput = '<script>alert("XSS!")</script>';
document.getElementById('output').innerHTML = userInput; // DANGEROUS!

// ✅ SECURE: Escape user input
// Algoritma:
// 1. Get user input
// 2. Escape HTML special characters
// 3. Insert as text, not HTML

function escapeHTML(str) {
    const escapeChars = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;'
    };
    
    return str.replace(/[&<>"']/g, char => escapeChars[char]);
}

const safeInput = escapeHTML(userInput);
document.getElementById('output').textContent = safeInput; // SAFE!

// BEST PRACTICE: Use textContent, not innerHTML
// Algoritma:
// 1. Use textContent untuk user input
// 2. Browser automatically escapes
// 3. No script execution possible

document.getElementById('output').textContent = userInput; // SAFE!

// XSS VIA ATTRIBUTES
// ❌ VULNERABLE
const userUrl = 'javascript:alert("XSS!")';
link.href = userUrl; // DANGEROUS!

// ✅ SECURE: Validate URL scheme
function sanitizeUrl(url) {
    const validSchemes = ['http:', 'https:', 'mailto:'];
    
    try {
        const parsed = new URL(url);
        if (!validSchemes.includes(parsed.protocol)) {
            return '#'; // Invalid scheme
        }
        return url;
    } catch {
        return '#'; // Invalid URL
    }
}

link.href = sanitizeUrl(userUrl); // SAFE!
```

**2. CSRF (CROSS-SITE REQUEST FORGERY)**

```javascript
// Algoritma CSRF Attack:
// 1. User logged into bank.com
// 2. User visits malicious site
// 3. Malicious site submits form to bank.com
// 4. Browser sends cookies automatically
// 5. Bank processes request thinking it's from user

// ❌ VULNERABLE: No CSRF protection
// Algoritma:
// 1. Form without CSRF token
// 2. Any site can submit form
// 3. Browser sends auth cookies

// bank.com/transfer
<form action="/transfer" method="POST">
    <input name="to" value="attacker">
    <input name="amount" value="1000">
</form>

// ✅ SECURE: CSRF Token
// Algoritma:
// 1. Generate unique token per session
// 2. Include token in form
// 3. Verify token on server
// 4. Reject if token missing/invalid

// Server generates token
const csrfToken = generateRandomToken(); // Store in session
res.cookie('csrfToken', csrfToken);

// Include in form
<form action="/transfer" method="POST">
    <input type="hidden" name="csrfToken" value="<%= csrfToken %>">
    <input name="to" value="attacker">
    <input name="amount" value="1000">
</form>

// Verify on server
app.post('/transfer', (req, res) => {
    const token = req.body.csrfToken;
    
    if (token !== req.session.csrfToken) {
        return res.status(403).send('Invalid CSRF token');
    }
    
    // Process transfer
});

// FRONTEND: Include token in AJAX requests
// Algoritma:
// 1. Get token from cookie
// 2. Include in request header
// 3. Server verifies header

const csrfToken = getCookie('csrfToken');

fetch('/api/transfer', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
    },
    body: JSON.stringify({ to: 'user', amount: 100 })
});
```

**3. SQL INJECTION**

```javascript
// Algoritma SQL Injection:
// 1. Attacker inputs SQL in form
// 2. App concatenates SQL query
// 3. Attacker's SQL executes
// 4. Data breach or manipulation

// ❌ VULNERABLE: String concatenation
// Algoritma:
// 1. Get user input
// 2. Concatenate into SQL string
// 3. Execute query

const username = userInput; // "admin' OR '1'='1"
const query = `SELECT * FROM users WHERE username = '${username}'`;
// Result: SELECT * FROM users WHERE username = 'admin' OR '1'='1'
// Attacker logs in as admin!

// ✅ SECURE: Prepared Statements
// Algoritma:
// 1. Define query with placeholders
// 2. Pass parameters separately
// 3. Database treats as data, not SQL

// Using parameterized query
const query = 'SELECT * FROM users WHERE username = ?';
const params = [userInput];

db.execute(query, params); // SAFE!

// Even if userInput = "admin' OR '1'='1"
// Database searches for literal string, doesn't execute SQL

// NODE.JS EXAMPLE (mysql2)
// Algoritma:
// 1. Use connection.query with ?
// 2. Pass values as array
// 3. Library handles escaping

connection.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (error, results) => {
        // Handle results
    }
);

// NODE.JS EXAMPLE (PostgreSQL)
// Algoritma:
// 1. Use $1, $2 for placeholders
// 2. Pass values as array

client.query(
    'SELECT * FROM users WHERE email = $1',
    [email],
    (error, results) => {
        // Handle results
    }
);
```

**4. INPUT VALIDATION & SANITIZATION**

```javascript
// Algoritma Input Validation:
// 1. Define expected format
// 2. Validate input against format
// 3. Reject invalid input
// 4. Sanitize before use

// VALIDATE EMAIL
// Algoritma:
// 1. Check format with regex
// 2. Check length
// 3. Check for valid domain

function validateEmail(email) {
    // Check null/undefined
    if (!email) {
        return { valid: false, error: 'Email is required' };
    }
    
    // Check length
    if (email.length > 254) {
        return { valid: false, error: 'Email too long' };
    }
    
    // Check format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { valid: false, error: 'Invalid email format' };
    }
    
    return { valid: true };
}

// VALIDATE PASSWORD
// Algoritma:
// 1. Check minimum length
// 2. Check character types
// 3. Return strength score

function validatePassword(password) {
    const errors = [];
    let strength = 0;
    
    // Check length
    if (password.length < 8) {
        errors.push('Minimum 8 characters');
    } else if (password.length >= 12) {
        strength += 2;
    } else {
        strength += 1;
    }
    
    // Check uppercase
    if (/[A-Z]/.test(password)) {
        strength += 1;
    } else {
        errors.push('At least one uppercase letter');
    }
    
    // Check lowercase
    if (/[a-z]/.test(password)) {
        strength += 1;
    } else {
        errors.push('At least one lowercase letter');
    }
    
    // Check numbers
    if (/[0-9]/.test(password)) {
        strength += 1;
    } else {
        errors.push('At least one number');
    }
    
    // Check special characters
    if (/[!@#$%^&*]/.test(password)) {
        strength += 1;
    }
    
    return {
        valid: errors.length === 0,
        errors,
        strength: Math.min(strength, 5) // 0-5 scale
    };
}

// SANITIZE USER INPUT
// Algoritma:
// 1. Remove dangerous characters
// 2. Trim whitespace
// 3. Convert to expected format

function sanitizeInput(input) {
    if (typeof input !== 'string') {
        return input;
    }
    
    return input
        .trim()                      // Remove whitespace
        .replace(/[<>]/g, '')        // Remove < and >
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .slice(0, 1000);             // Limit length
}

// Usage
const cleanInput = sanitizeInput(userInput);
```

**5. SECURITY HEADERS**

```javascript
// Algoritma Security Headers:
// 1. Set headers in response
// 2. Browser enforces security
// 3. Prevent various attacks

// EXPRESS.JS EXAMPLE
// Algoritma:
// 1. Use helmet middleware
// 2. Or set headers manually

// Using helmet (recommended)
const helmet = require('helmet');
app.use(helmet());

// Manual headers
app.use((req, res, next) => {
    // Prevent clickjacking
    res.setHeader('X-Frame-Options', 'DENY');
    
    // Prevent MIME type sniffing
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    // Enable XSS filter
    res.setHeader('X-XSS-Protection', '1; mode=block');
    
    // Content Security Policy
    res.setHeader('Content-Security-Policy', 
        "default-src 'self'; " +
        "script-src 'self' https://trusted-cdn.com; " +
        "style-src 'self' 'unsafe-inline'; " +
        "img-src 'self' data: https:; " +
        "font-src 'self'"
    );
    
    // Strict Transport Security (HTTPS only)
    res.setHeader('Strict-Transport-Security', 
        'max-age=31536000; includeSubDomains');
    
    // Referrer Policy
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    next();
});
```

---

#### ⚠️ Security Checklist

| Threat | Prevention | Priority |
|--------|-----------|----------|
| **XSS** | Escape output, use textContent | 🔴 Critical |
| **CSRF** | CSRF tokens, SameSite cookies | 🔴 Critical |
| **SQL Injection** | Prepared statements | 🔴 Critical |
| **Clickjacking** | X-Frame-Options header | 🟡 High |
| **Data Theft** | HTTPS, encrypt sensitive data | 🔴 Critical |
| **Session Hijacking** | Secure cookies, rotate tokens | 🔴 Critical |

**Best Practices:**

```javascript
// 1. Never trust user input
// ✅ Good
const sanitized = sanitizeInput(userInput);
const validation = validateEmail(sanitized);

if (!validation.valid) {
    throw new Error(validation.error);
}

// 2. Use HTTPS everywhere
// ✅ Good
app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(`https://${req.hostname}${req.url}`);
    }
    next();
});

// 3. Secure cookies
// ✅ Good
res.cookie('session', sessionId, {
    httpOnly: true,     // Not accessible via JavaScript
    secure: true,       // HTTPS only
    sameSite: 'strict', // Prevent CSRF
    maxAge: 24 * 60 * 60 * 1000 // 1 day
});

// 4. Hash passwords
// ✅ Good
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Hash password
const hashedPassword = await bcrypt.hash(password, saltRounds);

// Verify password
const isValid = await bcrypt.compare(password, hashedPassword);

// 5. Rate limiting
// ✅ Good
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per window
    message: 'Too many requests, please try again later'
});

app.use('/api/', limiter);
```

---

### 🟡 14. Testing Fundamentals

#### 📖 Konsep Dasar: Testing

**Testing** adalah proses memverifikasi bahwa code bekerja **seperti yang diharapkan**. Jika code adalah **mobil**, testing adalah **test drive** sebelum jual ke customer.

**Mengapa Testing Penting?**
1. **Catch Bugs Early:** Find issues before production
2. **Regression Prevention:** Ensure changes don't break existing features
3. **Documentation:** Tests show how code should work
4. **Confidence:** Deploy with confidence
5. **Refactoring:** Safe to improve code structure

---

#### 🔬 Tahapan Logika: Testing Types

**1. UNIT TESTING - Test Individual Functions**

```javascript
// Algoritma Unit Testing:
// 1. Isolate function/component
// 2. Provide test input
// 3. Assert expected output
// 4. Run automatically

// JEST EXAMPLE
// Algoritma:
// 1. describe() group related tests
// 2. test() or it() define test case
// 3. expect() assert result

// Function to test
function add(a, b) {
    return a + b;
}

// Test file: add.test.js
describe('add function', () => {
    test('adds two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });
    
    test('adds negative numbers', () => {
        expect(add(-2, -3)).toBe(-5);
    });
    
    test('adds zero', () => {
        expect(add(5, 0)).toBe(5);
    });
    
    test('throws error for non-numbers', () => {
        expect(() => add('2', '3')).toThrow();
    });
});

// ASYNC TESTING
// Algoritma:
// 1. Return promise
// 2. Or use async/await
// 3. Assert resolved value

// Async function
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

// Test async function
test('fetches data successfully', async () => {
    const data = await fetchData('https://api.example.com/data');
    expect(data).toHaveProperty('items');
});

// Test with promises
test('fetches data successfully', () => {
    return fetchData('https://api.example.com/data')
        .then(data => {
            expect(data).toHaveProperty('items');
        });
});

// MOCKING
// Algoritma:
// 1. Replace real function with mock
// 2. Control return value
// 3. Verify calls

test('calls API correctly', () => {
    // Mock fetch
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ data: 'test' })
        })
    );
    
    fetchData('https://api.example.com/data');
    
    // Verify fetch was called
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/data');
});
```

**2. INTEGRATION TESTING - Test Component Interaction**

```javascript
// Algoritma Integration Testing:
// 1. Test multiple components together
// 2. Verify interaction
// 3. Check data flow

// EXPRESS.JS INTEGRATION TEST
// Algoritma:
// 1. Setup test server
// 2. Make HTTP requests
// 3. Assert responses

// app.js
const express = require('express');
const app = express();

app.get('/api/users/:id', async (req, res) => {
    const user = await db.getUser(req.params.id);
    res.json(user);
});

// app.test.js
const request = require('supertest');
const app = require('./app');

describe('GET /api/users/:id', () => {
    test('returns user for valid ID', async () => {
        const response = await request(app)
            .get('/api/users/1')
            .expect(200);
        
        expect(response.body).toHaveProperty('id', 1);
        expect(response.body).toHaveProperty('name');
    });
    
    test('returns 404 for invalid ID', async () => {
        await request(app)
            .get('/api/users/999')
            .expect(404);
    });
});
```

**3. END-TO-END (E2E) TESTING - Test Full User Flow**

```javascript
// Algoritma E2E Testing:
// 1. Automate browser
// 2. Simulate user actions
// 3. Verify UI changes
// 4. Test complete workflows

// CYPRESS EXAMPLE
// Algoritma:
// 1. Visit page
// 2. Find elements
// 3. Trigger events
// 4. Assert results

// cypress/e2e/login.cy.js
describe('Login Flow', () => {
    it('logs in successfully', () => {
        // Visit login page
        cy.visit('/login');
        
        // Fill form
        cy.get('#email').type('user@email.com');
        cy.get('#password').type('password123');
        
        // Submit
        cy.get('button[type="submit"]').click();
        
        // Assert redirect
        cy.url().should('include', '/dashboard');
        
        // Assert welcome message
        cy.get('.welcome-message')
            .should('contain', 'Welcome back!');
    });
    
    it('shows error for invalid credentials', () => {
        cy.visit('/login');
        
        cy.get('#email').type('wrong@email.com');
        cy.get('#password').type('wrongpassword');
        cy.get('button[type="submit"]').click();
        
        cy.get('.error-message')
            .should('contain', 'Invalid credentials');
    });
});

// PLAYWRIGHT EXAMPLE
// Algoritma:
// 1. Launch browser
// 2. Navigate to page
// 3. Interact with elements
// 4. Assert state

const { test, expect } = require('@playwright/test');

test('login flow', async ({ page }) => {
    await page.goto('/login');
    
    await page.fill('#email', 'user@email.com');
    await page.fill('#password', 'password123');
    await page.click('button[type="submit"]');
    
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('.welcome'))
        .toContainText('Welcome back!');
});
```

**4. TEST BEST PRACTICES**

```javascript
// Algoritma Good Tests:
// 1. AAA pattern: Arrange, Act, Assert
// 2. One assertion per test
// 3. Descriptive test names
// 4. Independent tests

// ✅ GOOD: AAA pattern
test('calculates total with tax', () => {
    // Arrange
    const items = [
        { price: 100, qty: 2 },
        { price: 50, qty: 1 }
    ];
    const taxRate = 0.1;
    
    // Act
    const total = calculateTotal(items, taxRate);
    
    // Assert
    expect(total).toBe(275); // (100*2 + 50*1) * 1.1
});

// ✅ GOOD: Descriptive names
describe('UserService', () => {
    describe('createUser', () => {
        test('creates user with valid data', () => {});
        test('throws error for duplicate email', () => {});
        test('hashes password before saving', () => {});
        test('sends welcome email', () => {});
    });
});

// ✅ GOOD: Independent tests
// Each test sets up its own data
test('test 1', () => {
    const data = setupTestData(); // Fresh data
    // ...
});

test('test 2', () => {
    const data = setupTestData(); // Fresh data, not affected by test 1
    // ...
});

// ❌ BAD: Tests depend on each other
let sharedData;

test('test 1', () => {
    sharedData = createData(); // Test 2 depends on this
});

test('test 2', () => {
    // Fails if test 1 not run first!
    useData(sharedData);
});
```

---

#### 📊 Testing Pyramid

```
        /\
       /  \
      / E2E \      Few tests (slow, expensive)
     /--------\
    /Integration\  Some tests
   /--------------\
  /     Unit       \  Many tests (fast, cheap)
 /------------------\
```

| Test Type | Speed | Cost | Coverage |
|-----------|-------|------|----------|
| Unit | Fast | Low | Individual functions |
| Integration | Medium | Medium | Component interaction |
| E2E | Slow | High | Full user flows |

---

### 🟡 15. Git & Version Control

#### 📖 Konsep Dasar: Git

**Git** adalah **time machine** untuk code. Setiap commit adalah **checkpoint** yang bisa kembali kapan saja. Jika code adalah **naskah**, Git adalah **editor** yang track setiap perubahan.

**Mengapa Git Penting?**
1. **Version History:** Track all changes
2. **Collaboration:** Multiple developers work together
3. **Backup:** Code stored remotely
4. **Rollback:** Revert to previous versions
5. **Branching:** Work on features independently

---

#### 🔬 Tahapan Logika: Git Operations

**1. BASIC COMMANDS**

```bash
# SETUP
# Algoritma:
# 1. Initialize repository
# 2. Configure user info

git init                          # Initialize new repo
git config user.name "Your Name"  # Set name
git config user.email "email@example.com"  # Set email

# CLONE
# Algoritma:
# 1. Copy remote repo
# 2. Setup tracking

git clone https://github.com/user/repo.git  # Clone repo
cd repo

# STATUS
# Algoritma:
# 1. Check file status
# 2. See what changed

git status        # See changed files
git status -s     # Short format

# ADD
# Algoritma:
# 1. Stage changes
# 2. Prepare for commit

git add file.txt          # Add specific file
git add .                 # Add all changes
git add -A                # Add all (including deleted)

# COMMIT
# Algoritma:
# 1. Save staged changes
# 2. Add commit message

git commit -m "Add feature X"           # Commit with message
git commit -am "Fix bug"                # Add and commit tracked files
git commit --amend                      # Edit last commit

# PUSH & PULL
# Algoritma:
# 1. Push: Send to remote
# 2. Pull: Get from remote

git push origin main        # Push to main branch
git pull origin main        # Pull from main branch
git push -u origin main     # Push and set upstream
```

**2. BRANCHING**

```bash
# Algoritma Branching:
# 1. Create branch for feature
# 2. Work independently
# 3. Merge when ready

# CREATE BRANCH
git branch feature-x              # Create branch
git checkout feature-x            # Switch to branch
git checkout -b feature-x         # Create and switch

# LIST BRANCHES
git branch                        # List local branches
git branch -a                     # List all branches
git branch -r                     # List remote branches

# MERGE
# Algoritma:
# 1. Switch to target branch
# 2. Merge source branch
# 3. Resolve conflicts if any

git checkout main                 # Switch to main
git merge feature-x               # Merge feature-x into main

# RESOLVE CONFLICTS
# Algoritma:
# 1. Git marks conflicts
# 2. Edit files to resolve
# 3. Add resolved files
# 4. Complete merge

# After merge conflict:
# 1. Edit conflicted files
# 2. Look for <<<<<<< and >>>>>>>
# 3. Choose which code to keep
git add resolved-file.txt         # Mark as resolved
git commit                        # Complete merge

# DELETE BRANCH
git branch -d feature-x           # Delete local branch
git push origin --delete feature-x # Delete remote branch
```

**3. VIEWING HISTORY**

```bash
# Algoritma History:
# 1. View commit log
# 2. See what changed
# 3. Compare versions

git log                           # Show commit history
git log --oneline                 # One line per commit
git log --graph                   # Show branch graph
git log --author="Name"          # Filter by author
git log --since="2024-01-01"     # Filter by date

# SHOW CHANGES
git show COMMIT_HASH              # Show commit details
git diff                          # Show unstaged changes
git diff --staged                 # Show staged changes
git diff branch1 branch2          # Compare branches

# BLAME
# Algoritma:
# 1. See who changed each line
# 2. When and why

git blame file.txt                # Show line-by-line history
```

**4. UNDOING CHANGES**

```bash
# Algoritma Undoing:
# 1. Discard local changes
# 2. Unstage files
# 3. Reset commits

# DISCARD CHANGES
git checkout -- file.txt          # Discard local changes
git restore file.txt              # Modern equivalent

# UNSTAGE
git reset HEAD file.txt           # Unstage file
git restore --staged file.txt     # Modern equivalent

# RESET COMMITS
git reset --soft HEAD~1           # Undo commit, keep changes
git reset --hard HEAD~1           # Undo commit, discard changes

# REVERT (safe for shared branches)
git revert COMMIT_HASH            # Create new commit that undoes
```

**5. GIT WORKFLOW**

```bash
# FEATURE BRANCH WORKFLOW
# Algoritma:
# 1. Create branch from main
# 2. Work on feature
# 3. Push to remote
# 4. Create pull request
# 5. Merge after review

# Start feature
git checkout main
git pull origin main
git checkout -b feature/new-feature

# Work on feature
# ... make changes ...
git add .
git commit -m "Add feature part 1"
git commit -m "Add feature part 2"

# Sync with main
git checkout main
git pull origin main
git checkout feature/new-feature
git merge main

# Push feature
git push -u origin feature/new-feature

# After PR approved
git checkout main
git merge feature/new-feature
git push origin main
```

---

#### ⚠️ Git Best Practices

| Practice | Description | Priority |
|----------|-------------|----------|
| **Commit often** | Small, focused commits | 🔴 High |
| **Descriptive messages** | Clear commit messages | 🔴 High |
| **Branch naming** | feature/, bugfix/, hotfix/ | 🟡 Medium |
| **Pull before push** | Avoid conflicts | 🔴 High |
| **Review before commit** | Check changes | 🔴 High |
| **Don't commit secrets** | No passwords, keys | 🔴 Critical |

**Good Commit Messages:**

```bash
# ✅ GOOD: Clear and descriptive
git commit -m "Add user authentication with JWT"
git commit -m "Fix login validation for email format"
git commit -m "Update dependencies to latest versions"

# ❌ BAD: Too vague
git commit -m "Fix stuff"
git commit -m "Update"
git commit -m "WIP"

# GOOD FORMAT:
# <type>(<scope>): <subject>
#
# <body>
#
# - type: feat, fix, docs, style, refactor, test, chore
# - scope: area of codebase
# - subject: what changed

# Example:
# feat(auth): Add password reset functionality
#
# - Add reset password endpoint
# - Send email with reset link
# - Add token expiration
```

---

#### 📊 Git Command Reference

| Command | Description | Use Case |
|---------|-------------|----------|
| `git init` | Initialize repo | Start new project |
| `git clone` | Copy remote repo | Get existing project |
| `git add` | Stage changes | Prepare for commit |
| `git commit` | Save changes | Create checkpoint |
| `git push` | Send to remote | Share changes |
| `git pull` | Get from remote | Update local |
| `git branch` | Manage branches | Feature development |
| `git merge` | Combine branches | Integrate features |
| `git log` | View history | See changes |
| `git diff` | Compare changes | Review before commit |
| `git reset` | Undo changes | Fix mistakes |
| `git revert` | Revert commit | Safe undo on shared |

---

## 📚 Bab 19: Data Structures & Algorithms Fundamentals {#-bab-19-data-structures-algorithms-fundamentals}

> **🎯 Misi Bab 19:** Menguasai struktur data fundamental dan algoritma yang menjadi dasar problem-solving dalam programming. Ini adalah **senjata rahasia** untuk menjadi developer yang handal dalam menyelesaikan masalah kompleks.

### 🔴 1. Data Structures: Stack & Queue

#### 📖 Konsep Dasar: Apa itu Stack?

**Stack (Tumpukan)** adalah struktur data yang mengikuti prinsip **LIFO (Last In, First Out)**. Bayangkan **tumpukan piring** di restoran:
- Piring yang **terakhir** ditaruh di atas adalah yang **pertama** diambil
- Anda hanya bisa akses piring di **paling atas**
- Tidak bisa mengambil piring di tengah tanpa memindahkan yang di atasnya

**Mengapa Stack Penting?**
1. **Function Call Stack:** Setiap function call disimpan di stack
2. **Undo/Redo:** History tindakan user
3. **Browser History:** Tombol back
4. **Expression Evaluation:** Kalkulator, compiler
5. **Backtracking Algorithms:** Maze solving, puzzle

---

#### 🔬 Algoritma Internal Stack Operations

**1. PUSH (Menambah Item)**

```javascript
// Algoritma Push:
// 1. Terima item baru
// 2. Taruh di index length (posisi terakhir)
// 3. Increment length
// 4. Return new length

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;  // Pointer ke item teratas
    }

    push(item) {
        // Langkah 1: Tambahkan item ke akhir array
        this.items.push(item);
        
        // Langkah 2: Update pointer top
        this.top++;
        
        // Langkah 3: Return success
        return true;
    }
}

// Contoh Penggunaan:
const stack = new Stack();
stack.push("Piring 1");  // top = 0
stack.push("Piring 2");  // top = 1
stack.push("Piring 3");  // top = 2
// Stack: ["Piring 1", "Piring 2", "Piring 3"]
```

**2. POP (Menghapus Item)**

```javascript
// Algoritma Pop:
// 1. Cek apakah stack kosong
// 2. Jika tidak, ambil item di index length-1
// 3. Hapus item tersebut
// 4. Decrement pointer top
// 5. Return item yang dihapus

class Stack {
    // ... constructor dan push ...

    pop() {
        // Langkah 1: Cek edge case - stack kosong
        if (this.isEmpty()) {
            console.log("Stack kosong! Tidak ada yang bisa di-pop");
            return null;
        }
        
        // Langkah 2: Ambil dan hapus item terakhir
        const item = this.items.pop();
        
        // Langkah 3: Update pointer
        this.top--;
        
        // Langkah 4: Return item
        return item;
    }
}

// Contoh Penggunaan:
const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");

console.log(stack.pop());  // "C" (terakhir masuk, pertama keluar)
console.log(stack.pop());  // "B"
console.log(stack.pop());  // "A"
console.log(stack.pop());  // null (stack kosong)
```

**3. PEEK (Melihat Item Teratas)**

```javascript
// Algoritma Peek:
// 1. Cek apakah stack kosong
// 2. Jika tidak, return item di index top
// 3. Tidak menghapus item

class Stack {
    // ... methods sebelumnya ...

    peek() {
        // Langkah 1: Cek edge case
        if (this.isEmpty()) {
            return null;
        }
        
        // Langkah 2: Return item teratas TANPA menghapus
        return this.items[this.top];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Contoh Penggunaan:
const stack = new Stack();
stack.push("X");
stack.push("Y");
stack.push("Z");

console.log(stack.peek());  // "Z" (hanya melihat)
console.log(stack.peek());  // "Z" (masih "Z", tidak berubah)
console.log(stack.pop());   // "Z" (sekarang dihapus)
console.log(stack.peek());  // "Y" (sekarang teratas adalah "Y")
```

---

#### 💡 Aplikasi Dunia Nyata: Stack

**1. Browser History (Tombol Back)**

```javascript
// Algoritma Browser History:
// 1. Setiap navigate → push URL ke stack
// 2. Tombol back → pop URL dari stack
// 3. Tombol forward → push ke forward stack

class BrowserHistory {
    constructor() {
        this.backStack = [];
        this.forwardStack = [];
        this.currentPage = null;
    }

    navigate(url) {
        // Jika ada halaman saat ini, simpan ke back stack
        if (this.currentPage) {
            this.backStack.push(this.currentPage);
        }
        
        // Reset forward stack (karena navigate baru)
        this.forwardStack = [];
        
        // Set halaman saat ini
        this.currentPage = url;
        
        console.log(`Navigating to: ${url}`);
    }

    goBack() {
        // Cek apakah bisa back
        if (this.backStack.length === 0) {
            console.log("Tidak ada history untuk kembali!");
            return null;
        }
        
        // Push current ke forward stack
        this.forwardStack.push(this.currentPage);
        
        // Pop dari back stack dan set sebagai current
        this.currentPage = this.backStack.pop();
        
        console.log(`Going back to: ${this.currentPage}`);
        return this.currentPage;
    }

    goForward() {
        // Cek apakah bisa forward
        if (this.forwardStack.length === 0) {
            console.log("Tidak ada halaman untuk forward!");
            return null;
        }
        
        // Push current ke back stack
        this.backStack.push(this.currentPage);
        
        // Pop dari forward stack dan set sebagai current
        this.currentPage = this.forwardStack.pop();
        
        console.log(`Going forward to: ${this.currentPage}`);
        return this.currentPage;
    }
}

// Contoh Penggunaan:
const browser = new BrowserHistory();
browser.navigate("google.com");
browser.navigate("youtube.com");
browser.navigate("github.com");
// Current: github.com, Back Stack: [google, youtube]

browser.goBack();  
// Current: youtube.com, Back Stack: [google], Forward Stack: [github]

browser.goBack();  
// Current: google.com, Back Stack: [], Forward Stack: [github, youtube]

browser.goForward(); 
// Current: youtube.com, Forward Stack: [github]
```

**2. Undo/Redo System**

```javascript
// Algoritma Undo/Redo:
// 1. Setiap action → push ke undo stack
// 2. Undo → pop dari undo, push ke redo
// 3. Redo → pop dari redo, push ke undo
// 4. Action baru → clear redo stack

class UndoRedoManager {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
        this.currentState = null;
    }

    execute(action) {
        // Simpan state saat ini ke undo stack
        if (this.currentState !== null) {
            this.undoStack.push(this.currentState);
        }
        
        // Clear redo stack (karena action baru)
        this.redoStack = [];
        
        // Execute action dan simpan result
        this.currentState = action();
        
        console.log("Action executed");
        return this.currentState;
    }

    undo() {
        if (this.undoStack.length === 0) {
            console.log("Nothing to undo!");
            return null;
        }
        
        // Push current ke redo stack
        this.redoStack.push(this.currentState);
        
        // Pop dari undo stack
        this.currentState = this.undoStack.pop();
        
        console.log("Undo performed");
        return this.currentState;
    }

    redo() {
        if (this.redoStack.length === 0) {
            console.log("Nothing to redo!");
            return null;
        }
        
        // Push current ke undo stack
        this.undoStack.push(this.currentState);
        
        // Pop dari redo stack
        this.currentState = this.redoStack.pop();
        
        console.log("Redo performed");
        return this.currentState;
    }
}

// Contoh Penggunaan:
const editor = new UndoRedoManager();

editor.execute(() => "Text A");      // State: "Text A"
editor.execute(() => "Text B");      // State: "Text B", Undo: ["Text A"]
editor.execute(() => "Text C");      // State: "Text C", Undo: ["Text A", "Text B"]

editor.undo();  // State: "Text B", Undo: ["Text A"], Redo: ["Text C"]
editor.undo();  // State: "Text A", Undo: [], Redo: ["Text C", "Text B"]

editor.redo();  // State: "Text B", Redo: ["Text C"]
```

**3. Function Call Stack (Expression Evaluation)**

```javascript
// Algoritma Calculator dengan Stack:
// 1. Parse expression
// 2. Push numbers ke stack
// 3. Pop dan calculate ketika encounter operator
// 4. Push result kembali

class Calculator {
    constructor() {
        this.stack = [];
    }

    // Reverse Polish Notation (RPN) Calculator
    // Contoh: "3 4 +" berarti 3 + 4
    evaluateRPN(expression) {
        const tokens = expression.split(" ");
        
        for (const token of tokens) {
            if (this.isNumber(token)) {
                // Jika angka, push ke stack
                this.stack.push(parseFloat(token));
            } else if (this.isOperator(token)) {
                // Jika operator, pop 2 angka dan calculate
                const b = this.stack.pop();
                const a = this.stack.pop();
                const result = this.calculate(a, b, token);
                this.stack.push(result);
            }
        }
        
        return this.stack.pop();
    }

    isNumber(str) {
        return !isNaN(parseFloat(str));
    }

    isOperator(str) {
        return ["+", "-", "*", "/"].includes(str);
    }

    calculate(a, b, operator) {
        switch (operator) {
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return a / b;
            default: throw new Error("Unknown operator");
        }
    }
}

// Contoh Penggunaan:
const calc = new Calculator();

// "3 4 +" = 3 + 4 = 7
console.log(calc.evaluateRPN("3 4 +"));  // 7

// "5 1 2 + 4 * + 3 -" = 5 + ((1 + 2) * 4) - 3 = 14
console.log(calc.evaluateRPN("5 1 2 + 4 * + 3 -"));  // 14
```

---

#### 📖 Konsep Dasar: Apa itu Queue?

**Queue (Antrean)** adalah struktur data yang mengikuti prinsip **FIFO (First In, First Out)**. Bayangkan **antrean di kasir**:
- Orang yang **pertama** datang adalah yang **pertama** dilayani
- Orang baru masuk di **belakang** antrean
- Orang yang dilayani keluar dari **depan** antrean

**Mengapa Queue Penting?**
1. **Task Queue:** Print queue, CPU scheduling
2. **Message Queue:** RabbitMQ, Kafka
3. **Breadth-First Search:** Graph traversal
4. **Buffer:** Streaming data, audio/video buffer
5. **Request Handling:** Web server request queue

---

#### 🔬 Algoritma Internal Queue Operations

**1. ENQUEUE (Menambah Item)**

```javascript
// Algoritma Enqueue:
// 1. Terima item baru
// 2. Taruh di belakang antrean (index length)
// 3. Increment length
// 4. Return success

class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(item) {
        // Langkah 1: Tambahkan item ke belakang
        this.items[this.rear] = item;
        
        // Langkah 2: Increment rear pointer
        this.rear++;
        
        // Langkah 3: Return success
        return true;
    }
}

// Contoh Penggunaan:
const queue = new Queue();
queue.enqueue("Orang 1");  // rear = 1
queue.enqueue("Orang 2");  // rear = 2
queue.enqueue("Orang 3");  // rear = 3
// Queue: ["Orang 1", "Orang 2", "Orang 3"]
```

**2. DEQUEUE (Menghapus Item)**

```javascript
// Algoritma Dequeue:
// 1. Cek apakah queue kosong
// 2. Jika tidak, ambil item di front
// 3. Increment front pointer
// 4. Return item

class Queue {
    // ... constructor dan enqueue ...

    dequeue() {
        // Langkah 1: Cek edge case - queue kosong
        if (this.isEmpty()) {
            console.log("Queue kosong!");
            return null;
        }
        
        // Langkah 2: Ambil item di depan
        const item = this.items[this.front];
        
        // Langkah 3: Hapus referensi (optional, untuk memory management)
        delete this.items[this.front];
        
        // Langkah 4: Increment front pointer
        this.front++;
        
        // Langkah 5: Return item
        return item;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    peek() {
        return this.items[this.front];
    }

    size() {
        return this.rear - this.front;
    }
}

// Contoh Penggunaan:
const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log(queue.dequeue());  // "A" (pertama masuk, pertama keluar)
console.log(queue.dequeue());  // "B"
console.log(queue.dequeue());  // "C"
console.log(queue.dequeue());  // null (queue kosong)
```

---

#### 💡 Aplikasi Dunia Nyata: Queue

**1. Print Queue System**

```javascript
// Algoritma Print Queue:
// 1. Document masuk → enqueue ke queue
// 2. Printer ready → dequeue dan print
// 3. Priority document → enqueue di depan (priority queue)

class PrintQueue {
    constructor() {
        this.queue = [];
    }

    addDocument(name, pages, isPriority = false) {
        const document = {
            id: Date.now(),
            name,
            pages,
            isPriority,
            addedAt: new Date()
        };

        if (isPriority) {
            // Priority document: enqueue di depan (setelah priority lain)
            const priorityIndex = this.queue.findIndex(doc => !doc.isPriority);
            if (priorityIndex === -1) {
                this.queue.push(document);
            } else {
                this.queue.splice(priorityIndex, 0, document);
            }
        } else {
            // Normal document: enqueue di belakang
            this.queue.push(document);
        }

        console.log(`Document added: ${name} (${pages} pages)`);
        return document.id;
    }

    printNext() {
        if (this.queue.length === 0) {
            console.log("No documents to print!");
            return null;
        }

        // Dequeue document pertama
        const document = this.queue.shift();
        
        console.log(`Printing: ${document.name} (${document.pages} pages)`);
        console.log(`Estimated time: ${document.pages * 2} seconds`);
        
        return document;
    }

    showQueue() {
        console.log("\n=== Print Queue ===");
        if (this.queue.length === 0) {
            console.log("Queue is empty");
            return;
        }

        this.queue.forEach((doc, index) => {
            const priority = doc.isPriority ? "🔴 PRIORITY" : "⚪ NORMAL";
            console.log(`${index + 1}. ${doc.name} - ${doc.pages} pages ${priority}`);
        });
        console.log("====================\n");
    }
}

// Contoh Penggunaan:
const printer = new PrintQueue();

printer.addDocument("Report.pdf", 10);        // Normal
printer.addDocument("Memo.docx", 2);          // Normal
printer.addDocument("Urgent.pdf", 5, true);   // Priority!
printer.addDocument("Backup.txt", 1);         // Normal

printer.showQueue();
// 1. Urgent.pdf - 5 pages 🔴 PRIORITY
// 2. Report.pdf - 10 pages ⚪ NORMAL
// 3. Memo.docx - 2 pages ⚪ NORMAL
// 4. Backup.txt - 1 page ⚪ NORMAL

printer.printNext();  // Prints Urgent.pdf first!
```

**2. Task Scheduler (CPU Scheduling)**

```javascript
// Algoritma Round-Robin Scheduling:
// 1. Setiap task dapat time slice
// 2. Jika tidak selesai, enqueue kembali
// 3. Lanjut ke task berikutnya
// 4. Repeat hingga semua selesai

class TaskScheduler {
    constructor(timeSlice = 100) {
        this.queue = [];
        this.timeSlice = timeSlice; // ms
    }

    addTask(name, duration) {
        const task = {
            id: Date.now(),
            name,
            remainingTime: duration,
            totalTime: duration
        };

        this.queue.push(task);
        console.log(`Task added: ${name} (${duration}ms)`);
    }

    async run() {
        console.log("\n🚀 Starting Task Scheduler...\n");

        while (this.queue.length > 0) {
            // Dequeue task pertama
            const task = this.queue.shift();

            console.log(`⏳ Running: ${task.name} (${task.remainingTime}ms remaining)`);

            // Simulate execution untuk time slice
            await this.sleep(Math.min(this.timeSlice, task.remainingTime));

            // Kurangi remaining time
            task.remainingTime -= this.timeSlice;

            // Jika belum selesai, enqueue kembali
            if (task.remainingTime > 0) {
                console.log(`⏸️  Pausing: ${task.name}, re-queueing...`);
                this.queue.push(task);
            } else {
                console.log(`✅ Completed: ${task.name}`);
            }

            // Small delay untuk visualisasi
            await this.sleep(50);
        }

        console.log("\n🎉 All tasks completed!\n");
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    showQueue() {
        console.log("\n=== Task Queue ===");
        this.queue.forEach((task, index) => {
            const progress = ((task.totalTime - task.remainingTime) / task.totalTime * 100).toFixed(0);
            console.log(`${index + 1}. ${task.name} - ${progress}% complete`);
        });
        console.log("==================\n");
    }
}

// Contoh Penggunaan:
const scheduler = new TaskScheduler(200);

scheduler.addTask("Download", 500);
scheduler.addTask("Install", 400);
scheduler.addTask("Configure", 300);

// scheduler.run();  // Uncomment untuk menjalankan
```

---

#### ⚔️ Latihan Bertahap: Stack & Queue

| Level | Tantangan | Deskripsi | Difficulty |
|-------|-----------|-----------|------------|
| 1 | Validasi Parentheses | Cek keseimbangan `()`, `{}`, `[]` | ⭐⭐ |
| 2 | Reverse String dengan Stack | Balik string menggunakan stack | ⭐⭐ |
| 3 | Implementasi Stack dengan Queue | Buat stack menggunakan 2 queues | ⭐⭐⭐ |
| 4 | Queue dengan 2 Stack | Buat queue menggunakan 2 stacks | ⭐⭐⭐ |
| 5 | LRU Cache | Least Recently Used cache | ⭐⭐⭐⭐⭐ |

---

**Latihan 1: Validasi Parentheses**

```javascript
// 🎯 TUJUAN: Mengecek keseimbangan brackets
// ⏱️ WAKTU: 15 menit
// 💪 KESULITAN: ⭐⭐

// SOAL:
// Buat fungsi yang mengecek apakah string memiliki parentheses yang seimbang
// (), {}, [] harus buka dan tutup dengan benar

// CONTOH:
// isValidParentheses("()") → true
// isValidParentheses("()[]{}") → true
// isValidParentheses("(]") → false
// isValidParentheses("([)]") → false
// isValidParentheses("{[]}") → true

// ✍️ TULIS KODE ANDA DI SINI
function isValidParentheses(str) {
    // Langkah 1: Buat stack untuk tracking opening brackets
    // Langkah 2: Buat map untuk matching pairs
    // Langkah 3: Loop setiap character
    //   - Jika opening bracket, push ke stack
    //   - Jika closing bracket:
    //     * Cek apakah stack kosong → false
    //     * Pop dari stack dan cek apakah match → jika tidak, false
    // Langkah 4: Setelah loop, cek apakah stack kosong
    //   - Jika ya → true (semua match)
    //   - Jika tidak → false (ada yang tidak match)
    
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (const char of str) {
        // TODO: Implementasi
    }
    
    return stack.length === 0;
}

// ✅ TEST CASE
console.log(isValidParentheses("()"));           // true
console.log(isValidParentheses("()[]{}"));       // true
console.log(isValidParentheses("(]"));           // false
console.log(isValidParentheses("([)]"));         // false
console.log(isValidParentheses("{[]}"));         // true
console.log(isValidParentheses(""));             // true
console.log(isValidParentheses("(("));           // false
```

---

**Latihan 2: Queue dengan 2 Stack**

```javascript
// 🎯 TUJUAN: Implementasi Queue menggunakan 2 Stack
// ⏱️ WAKTU: 20 menit
// 💪 KESULITAN: ⭐⭐⭐⭐

// SOAL:
// Buat class Queue yang menggunakan 2 stack internal
// untuk mensimulasikan behavior FIFO menggunakan LIFO

// HINT:
// - Stack 1 untuk enqueue
// - Stack 2 untuk dequeue
// - Saat dequeue, jika stack 2 kosong, pop semua dari stack 1 ke stack 2

// ✍️ TULIS KODE ANDA DI SINI
class QueueWithStacks {
    constructor() {
        this.stack1 = [];  // Untuk enqueue
        this.stack2 = [];  // Untuk dequeue
    }

    enqueue(item) {
        // TODO: Push ke stack1
    }

    dequeue() {
        // TODO: 
        // 1. Jika stack2 kosong, pop semua dari stack1 dan push ke stack2
        // 2. Pop dari stack2
        // 3. Jika keduanya kosong, return null
    }

    peek() {
        // TODO: Lihat item pertama tanpa menghapus
    }

    isEmpty() {
        // TODO: Cek apakah kedua stack kosong
    }
}

// ✅ TEST CASE
const queue = new QueueWithStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());  // 1 (FIFO!)
console.log(queue.dequeue());  // 2
queue.enqueue(4);
console.log(queue.dequeue());  // 3
console.log(queue.dequeue());  // 4
console.log(queue.dequeue());  // null
```

---

### 🔴 2. Linked List Fundamentals

#### 📖 Konsep Dasar: Apa itu Linked List?

**Linked List** adalah struktur data linear yang terdiri dari **node-node** yang terhubung melalui **pointer**. Berbeda dengan array yang contiguous di memory, linked list tersebar di memory dan dihubungkan dengan reference.

**Analogi:** **Treasure Hunt** (Mencari Harta Karun)
- Setiap clue mengarah ke lokasi berikutnya
- Anda tidak bisa langsung ke clue ke-5 tanpa melalui clue 1-4
- Setiap clue berisi: **harta** (data) + **petunjuk lokasi berikutnya** (pointer)

**Jenis-Jenis Linked List:**
1. **Singly Linked List:** Setiap node punya 1 pointer ke node berikutnya
2. **Doubly Linked List:** Setiap node punya 2 pointer (ke depan dan ke belakang)
3. **Circular Linked List:** Node terakhir pointing ke node pertama

---

#### 🔬 Struktur Node

```javascript
// Struktur Node untuk Singly Linked List
class Node {
    constructor(data) {
        this.data = data;      // Data/Value
        this.next = null;      // Pointer ke node berikutnya
    }
}

// Struktur Node untuk Doubly Linked List
class DoublyNode {
    constructor(data) {
        this.data = data;      // Data/Value
        this.next = null;      // Pointer ke node berikutnya
        this.prev = null;      // Pointer ke node sebelumnya
    }
}

// Visualisasi:
// Singly: [Data|Next] → [Data|Next] → [Data|Next] → null
// Doubly: null ← [Prev|Data|Next] ↔ [Prev|Data|Next] ↔ [Prev|Data|Next] → null
```

---

#### 🔬 Algoritma Internal Singly Linked List

**1. APPEND (Menambah di Akhir)**

```javascript
// Algoritma Append:
// 1. Buat node baru dengan data
// 2. Jika list kosong, set head = node baru
// 3. Jika tidak kosong:
//    - Traverse dari head hingga node terakhir (node.next === null)
//    - Set node terakhir.next = node baru
// 4. Increment length

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(data) {
        // Langkah 1: Buat node baru
        const newNode = new Node(data);

        // Langkah 2: Cek edge case - list kosong
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Langkah 3: Tambahkan di akhir
            this.tail.next = newNode;
            this.tail = newNode;
        }

        // Langkah 4: Increment length
        this.length++;

        return this;
    }
}

// Contoh Penggunaan:
const list = new SinglyLinkedList();
list.append(10);  // [10]
list.append(20);  // [10] → [20]
list.append(30);  // [10] → [20] → [30]
```

**2. PREPEND (Menambah di Awal)**

```javascript
// Algoritma Prepend:
// 1. Buat node baru dengan data
// 2. Set node baru.next = head
// 3. Set head = node baru
// 4. Jika list kosong, set tail juga = node baru
// 5. Increment length

class SinglyLinkedList {
    // ... constructor dan append ...

    prepend(data) {
        // Langkah 1: Buat node baru
        const newNode = new Node(data);

        // Langkah 2: Set pointer node baru ke head
        newNode.next = this.head;

        // Langkah 3: Update head
        this.head = newNode;

        // Langkah 4: Jika list tadi kosong, set tail juga
        if (this.tail === null) {
            this.tail = newNode;
        }

        // Langkah 5: Increment length
        this.length++;

        return this;
    }
}

// Contoh Penggunaan:
const list = new SinglyLinkedList();
list.append(20);      // [20]
list.prepend(10);     // [10] → [20]
list.prepend(5);      // [5] → [10] → [20]
```

**3. INSERT AT (Menyisipkan di Posisi Tertentu)**

```javascript
// Algoritma Insert At:
// 1. Validasi index (0 <= index <= length)
// 2. Jika index = 0, gunakan prepend
// 3. Jika index = length, gunakan append
// 4. Jika di tengah:
//    - Traverse ke node sebelum index (index - 1)
//    - Buat node baru
//    - Set node baru.next = previousNode.next
//    - Set previousNode.next = node baru
// 5. Increment length

class SinglyLinkedList {
    // ... methods sebelumnya ...

    insertAt(index, data) {
        // Langkah 1: Validasi index
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds");
        }

        // Langkah 2: Edge case - insert di awal
        if (index === 0) {
            return this.prepend(data);
        }

        // Langkah 3: Edge case - insert di akhir
        if (index === this.length) {
            return this.append(data);
        }

        // Langkah 4: Insert di tengah
        // 4a. Traverse ke node sebelum index
        const previousNode = this.getNodeAt(index - 1);

        // 4b. Buat node baru
        const newNode = new Node(data);

        // 4c. Set pointer node baru
        newNode.next = previousNode.next;

        // 4d. Update pointer previous node
        previousNode.next = newNode;

        // Langkah 5: Increment length
        this.length++;

        return this;
    }

    getNodeAt(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
}

// Contoh Penggunaan:
const list = new SinglyLinkedList();
list.append(10);      // [10]
list.append(20);      // [10] → [20]
list.append(30);      // [10] → [20] → [30]
list.insertAt(1, 15); // [10] → [15] → [20] → [30]
```

**4. DELETE AT (Menghapus di Posisi Tertentu)**

```javascript
// Algoritma Delete At:
// 1. Validasi index (0 <= index < length)
// 2. Jika index = 0:
//    - Set head = head.next
//    - Jika length = 1, set tail = null
// 3. Jika di tengah/akhir:
//    - Traverse ke node sebelum index
//    - Set previousNode.next = nodeToDelete.next
//    - Jika nodeToDelete adalah tail, update tail
// 4. Decrement length

class SinglyLinkedList {
    // ... methods sebelumnya ...

    deleteAt(index) {
        // Langkah 1: Validasi index
        if (index < 0 || index >= this.length) {
            return null;
        }

        let deletedNode;

        // Langkah 2: Edge case - delete di awal
        if (index === 0) {
            deletedNode = this.head;
            this.head = this.head.next;

            // Jika hanya ada 1 node, update tail juga
            if (this.length === 1) {
                this.tail = null;
            }
        } else {
            // Langkah 3: Delete di tengah/akhir
            const previousNode = this.getNodeAt(index - 1);
            deletedNode = previousNode.next;

            // Update pointer
            previousNode.next = deletedNode.next;

            // Jika delete node terakhir, update tail
            if (deletedNode === this.tail) {
                this.tail = previousNode;
            }
        }

        // Langkah 4: Decrement length
        this.length--;

        return deletedNode;
    }
}

// Contoh Penggunaan:
const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);  // [10] → [20] → [30] → [40]

list.deleteAt(0); // [20] → [30] → [40]
list.deleteAt(1); // [20] → [40]
list.deleteAt(1); // [20]
```

**5. SEARCH & GET**

```javascript
class SinglyLinkedList {
    // ... methods sebelumnya ...

    // Search berdasarkan value
    search(value) {
        let currentNode = this.head;
        let index = 0;

        while (currentNode !== null) {
            if (currentNode.data === value) {
                return index;  // Found!
            }
            currentNode = currentNode.next;
            index++;
        }

        return -1;  // Not found
    }

    // Get node di index tertentu
    get(index) {
        return this.getNodeAt(index);
    }

    // Get semua data sebagai array
    toArray() {
        const result = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            result.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return result;
    }

    // Print list untuk debugging
    print() {
        const elements = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            elements.push(String(currentNode.data));
            currentNode = currentNode.next;
        }

        console.log(elements.join(" → "));
    }
}

// Contoh Penggunaan:
const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);

console.log(list.search(20));  // 1 (index)
console.log(list.search(99));  // -1 (not found)

console.log(list.get(1)?.data);  // 20

console.log(list.toArray());  // [10, 20, 30]

list.print();  // "10 → 20 → 30"
```

---

#### 💡 Aplikasi Dunia Nyata: Linked List

**1. Music Playlist**

```javascript
// Algoritma Music Playlist:
// 1. Setiap song adalah node
// 2. Next pointer = lagu berikutnya
// 3. Support: next(), previous(), add(), remove()

class Song {
    constructor(title, artist, duration) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.next = null;
    }
}

class MusicPlaylist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
        this.length = 0;
    }

    addSong(title, artist, duration) {
        const song = new Song(title, artist, duration);

        if (!this.head) {
            this.head = song;
            this.tail = song;
            this.current = song;
        } else {
            this.tail.next = song;
            this.tail = song;
        }

        this.length++;
        console.log(`Added: ${title} - ${artist}`);
    }

    playNext() {
        if (!this.current) return null;

        this.current = this.current.next;
        if (!this.current) {
            // Loop back to start (circular)
            this.current = this.head;
        }

        this.printCurrent();
        return this.current;
    }

    playPrevious() {
        if (!this.current || this.current === this.head) {
            this.current = this.head;
            return null;
        }

        // Find previous node
        let previous = this.head;
        while (previous && previous.next !== this.current) {
            previous = previous.next;
        }

        this.current = previous;
        this.printCurrent();
        return this.current;
    }

    printCurrent() {
        if (this.current) {
            console.log(`🎵 Now Playing: ${this.current.title} - ${this.current.artist}`);
        }
    }

    showPlaylist() {
        console.log("\n=== Playlist ===");
        let current = this.head;
        let index = 1;

        while (current) {
            const marker = current === this.current ? "▶ " : "  ";
            console.log(`${marker}${index}. ${current.title} - ${current.artist} (${current.duration})`);
            current = current.next;
            index++;
        }
        console.log("================\n");
    }
}

// Contoh Penggunaan:
const playlist = new MusicPlaylist();
playlist.addSong("Bohemian Rhapsody", "Queen", "5:55");
playlist.addSong("Hotel California", "Eagles", "6:30");
playlist.addSong("Stairway to Heaven", "Led Zeppelin", "8:02");

playlist.showPlaylist();
playlist.playNext();
playlist.playNext();
playlist.playPrevious();
```

---

#### ⚔️ Latihan Bertahap: Linked List

| Level | Tantangan | Deskripsi | Difficulty |
|-------|-----------|-----------|------------|
| 1 | Reverse Linked List | Balik arah pointer linked list | ⭐⭐⭐ |
| 2 | Detect Cycle | Deteksi apakah ada cycle | ⭐⭐⭐ |
| 3 | Find Middle | Cari node tengah | ⭐⭐ |
| 4 | Remove Duplicates | Hapus duplicate values | ⭐⭐⭐ |
| 5 | Merge Two Lists | Merge 2 sorted linked lists | ⭐⭐⭐⭐ |

---

**Latihan 1: Reverse Linked List**

```javascript
// 🎯 TUJUAN: Membalik arah pointer linked list
// ⏱️ WAKTU: 20 menit
// 💪 KESULITAN: ⭐⭐⭐

// SOAL:
// Buat fungsi yang membalik linked list
// Input: 1 → 2 → 3 → 4 → null
// Output: 4 → 3 → 2 → 1 → null

// ✍️ TULIS KODE ANDA DI SINI
function reverseList(head) {
    // ALGORITMA:
    // 1. Init 3 pointers: prev = null, current = head, next = null
    // 2. Loop selama current !== null:
    //    - Simpan next node: next = current.next
    //    - Balik pointer: current.next = prev
    //    - Move pointers: prev = current, current = next
    // 3. Return prev (yang sekarang jadi head baru)
    
    let prev = null;
    let current = head;
    let next = null;
    
    while (current !== null) {
        // TODO: Implementasi
    }
    
    return prev;
}
```

---

**Latihan 2: Detect Cycle**

```javascript
// 🎯 TUJUAN: Mendeteksi apakah linked list memiliki cycle
// ⏱️ WAKTU: 20 menit
// 💪 KESULITAN: ⭐⭐⭐⭐

// SOAL:
// Buat fungsi yang mendeteksi cycle dalam linked list
// Cycle terjadi jika node terakhir pointing ke node di tengah

// HINT: Gunakan Floyd's Cycle Detection (Tortoise and Hare)
// - Slow pointer: move 1 step
// - Fast pointer: move 2 steps
// - Jika ada cycle, fast akan catch up slow

// ✍️ TULIS KODE ANDA DI SINI
function hasCycle(head) {
    // ALGORITMA:
    // 1. Init slow = head, fast = head
    // 2. Loop selama fast !== null && fast.next !== null:
    //    - slow = slow.next (1 step)
    //    - fast = fast.next.next (2 steps)
    //    - Jika slow === fast, ada cycle!
    // 3. Jika loop selesai tanpa match, tidak ada cycle
    
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        // TODO: Implementasi
    }
    
    return false;
}
```

---

### 📊 Kompleksitas Waktu: Data Structures

| Operation | Array | Stack | Queue | Linked List |
|-----------|-------|-------|-------|-------------|
| Access | O(1) | O(n) | O(n) | O(n) |
| Search | O(n) | O(n) | O(n) | O(n) |
| Insert | O(n) | O(1) | O(1) | O(1)* |
| Delete | O(n) | O(1) | O(1) | O(1)* |
| Push/Enqueue | O(1)* | O(1) | O(1) | O(1) |
| Pop/Dequeue | O(1) | O(1) | O(1) | O(1) |

*\*Amortized atau dengan pointer yang tepat*

---

## 📚 Bab 20: Algorithm Complexity & Big O Notation {#-bab-20-algorithm-complexity-big-o}

> **🎯 Misi Bab 20:** Memahami cara menganalisis performa algoritma dan memilih solusi yang optimal. Ini adalah **skill wajib** untuk technical interview dan writing efficient code.

### 🔴 1. Big O Notation Fundamentals

#### 📖 Konsep Dasar: Apa itu Big O?

**Big O Notation** adalah cara untuk mengukur **seberapa cepat algoritma kamu** seiring dengan bertambahnya input. Bukan mengukur waktu dalam detik, tapi mengukur **berapa banyak operasi** yang dilakukan.

**Analogi:** **Mengirim Paket**
- **O(1):** Kirim 1 paket atau 1000 paket, waktu sama (email)
- **O(n):** Kirim paket, waktu proporsional dengan jumlah paket (kurir)
- **O(n²):** Kirim paket ke setiap orang yang saling kenal (meetup group)
- **O(log n):** Cari nama di telepon (binary search)

**Mengapa Big O Penting?**
1. **Predict Performance:** Tahu bagaimana code scale
2. **Compare Solutions:** Pilih algoritma terbaik
3. **Identify Bottlenecks:** Tahu bagian mana yang lambat
4. **Technical Interviews:** Topik wajib interview

---

#### 🔬 Hierarki Big O (Tercepat ke Ter lambat)

```
O(1)        < O(log n)    < O(n)        < O(n log n)    < O(n²)       < O(2^n)
Constant    Logarithmic   Linear        Linearithmic    Quadratic     Exponential
   ↓            ↓             ↓               ↓               ↓             ↓
SANGAT       SANGAT        BAIK          OKAY            BURUK       SANGAT
CEPAT        CEPAT                                    (hindari!)     BURUK
```

---

#### 🔍 Analisis Setiap Big O

**1. O(1) - Constant Time** ⭐⭐⭐⭐⭐

```javascript
// KARAKTERISTIK:
// - Waktu eksekusi TIDAK tergantung ukuran input
// - Secepat apapun input, waktu tetap

// CONTOH 1: Access Array Element
function getElement(arr, index) {
    return arr[index];  // 1 operasi, tidak peduli arr panjangnya 10 atau 10 juta
}

// CONTOH 2: Push/Pop (Array)
function pushExample(arr, item) {
    arr.push(item);  // O(1) amortized
}

// CONTOH 3: Object Property Access
const user = { name: "Budi", age: 25 };
function getName(obj) {
    return obj.name;  // O(1)
}

// VISUALISASI:
// Input: 10    → 100 ops
// Input: 1000  → 100 ops
// Input: 1M    → 100 ops
// (Tetap sama!)
```

**2. O(log n) - Logarithmic Time** ⭐⭐⭐⭐⭐

```javascript
// KARAKTERISTIK:
// - Waktu bertambah sangat lambat saat input membesar
// - Setiap step mengurangi masalah menjadi setengah
// - SANGAT efisien untuk data besar

// CONTOH: Binary Search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;  // Found!
        }

        if (arr[mid] < target) {
            left = mid + 1;  // Search right half
        } else {
            right = mid - 1;  // Search left half
        }
    }

    return -1;  // Not found
}

// MENGAPA O(log n)?
// Input: 1024 elements
// Step 1: 1024 → 512
// Step 2: 512 → 256
// Step 3: 256 → 128
// ...
// Step 10: 2 → 1
// Total: 10 steps = log₂(1024)

// VISUALISASI:
// Input: 10       → ~3 ops
// Input: 100      → ~7 ops
// Input: 1000     → ~10 ops
// Input: 1,000,000 → ~20 ops
// (Bertambah sangat lambat!)
```

**3. O(n) - Linear Time** ⭐⭐⭐⭐

```javascript
// KARAKTERISTIK:
// - Waktu bertambah proporsional dengan input
// - 2x input = 2x waktu
// - Paling umum, biasanya acceptable

// CONTOH 1: Find Maximum
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;  // Loop n kali
}

// CONTOH 2: Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// CONTOH 3: Print All Elements
function printAll(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);  // n kali print
    }
}

// VISUALISASI:
// Input: 10       → 10 ops
// Input: 100      → 100 ops
// Input: 1000     → 1000 ops
// Input: 1,000,000 → 1,000,000 ops
// (Proporsional!)
```

**4. O(n log n) - Linearithmic Time** ⭐⭐⭐

```javascript
// KARAKTERISTIK:
// - Sedikit lebih lambat dari linear
// - Masih acceptable untuk data besar
// - Optimal untuk sorting algorithms

// CONTOH: Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursive: T(n) = 2T(n/2) + O(n)
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
}

// MENGAPA O(n log n)?
// - Divide: log n levels (membagi 2 terus)
// - Conquer: n work di setiap level
// - Total: n × log n

// VISUALISASI:
// Input: 10       → ~33 ops
// Input: 100      → ~664 ops
// Input: 1000     → ~9965 ops
// Input: 1,000,000 → ~19,931,568 ops
```

**5. O(n²) - Quadratic Time** ⭐⭐

```javascript
// KARAKTERISTIK:
// - Waktu bertambah kuadrat dengan input
// - 2x input = 4x waktu
// - BURUK untuk data besar, hindari!

// CONTOH 1: Bubble Sort
function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {           // n iterations
        for (let j = 0; j < n - i - 1; j++) { // n iterations
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;  // Total: n × n = n² operations
}

// CONTOH 2: Print All Pairs
function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {      // n
        for (let j = 0; j < arr.length; j++) {  // n
            console.log(arr[i], arr[j]);        // n × n = n²
        }
    }
}

// CONTOH 3: Contains Duplicates
function hasDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;  // n × (n-1)/2 ≈ n²/2 = O(n²)
}

// VISUALISASI:
// Input: 10       → 100 ops
// Input: 100      → 10,000 ops
// Input: 1000     → 1,000,000 ops
// Input: 10,000   → 100,000,000 ops
// (Meledak!)
```

**6. O(2^n) - Exponential Time** ⭐

```javascript
// KARAKTERISTIK:
// - Waktu bertambah eksponensial
// - 1x input tambahan = 2x waktu
// - SANGAT BURUK, hindari sebisa mungkin!

// CONTOH: Recursive Fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
    //         ↙️              ↘️
    //    fibonacci(n-1)    fibonacci(n-2)
    //   /        \         /         \
    // ...        ...     ...         ...
    // Total calls: 2^n
}

// VISUALISASI:
// Input: 10   → 1,024 ops
// Input: 20   → 1,048,576 ops
// Input: 30   → 1,073,741,824 ops
// Input: 40   → 1,099,511,627,776 ops
// (Kiamat!)

// SOLUSI: Gunakan Dynamic Programming (O(n))
function fibonacciDP(n) {
    if (n <= 1) return n;

    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];  // O(n) - JAUH lebih baik!
}
```

---

#### ⚔️ Latihan Bertahap: Big O Analysis

**Latihan 1: Analyze Time Complexity**

```javascript
// 🎯 TUJUAN: Menganalisis Big O dari berbagai fungsi
// ⏱️ WAKTU: 15 menit
// 💪 KESULITAN: ⭐⭐⭐

// SOAL: Tentukan Big O dari setiap fungsi berikut:

// FUNGSI 1
function func1(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// JAWABAN: _____

// FUNGSI 2
function func2(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            result.push(arr[i] + arr[j]);
        }
    }
    return result;
}
// JAWABAN: _____

// FUNGSI 3
function func3(arr) {
    let first = arr[0];
    let last = arr[arr.length - 1];
    return first + last;
}
// JAWABAN: _____

// FUNGSI 4
function func4(arr) {
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i *= 2;
    }
}
// JAWABAN: _____

// FUNGSI 5
function func5(n) {
    if (n <= 1) return 1;
    return func5(n - 1) + func5(n - 1);
}
// JAWABAN: _____
```

---

### 🔴 2. Space Complexity

#### 📖 Konsep Dasar: Space Complexity

**Space Complexity** mengukur **berapa banyak memory** yang digunakan algoritma relatif terhadap input size.

**Jenis Memory Usage:**
1. **Fixed Space:** Variable, constant (O(1))
2. **Variable Space:** Array, recursion stack (O(n))

---

#### 🔍 Analisis Space Complexity

**1. O(1) - Constant Space**

```javascript
// CONTOH 1: Sum Array
function sumArray(arr) {
    let sum = 0;      // 1 variable
    let i = 0;        // 1 variable
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;       // Total: 2 variables = O(1)
}

// CONTOH 2: Find Max
function findMax(arr) {
    let max = arr[0];  // 1 variable
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;        // Total: 2 variables = O(1)
}
```

**2. O(n) - Linear Space**

```javascript
// CONTOH 1: Create New Array
function doubleArray(arr) {
    const result = [];      // n elements
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;          // Total: n elements = O(n)
}

// CONTOH 2: Recursion (Call Stack)
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);  // n stack frames = O(n)
}
// factorial(5):
// factorial(5)
// └─ factorial(4)
//    └─ factorial(3)
//       └─ factorial(2)
//          └─ factorial(1)
//             └─ factorial(0)
// Total: 6 stack frames
```

**3. O(n²) - Quadratic Space**

```javascript
// CONTOH: 2D Array
function createMatrix(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i + j;
        }
    }
    return matrix;  // n × n = n² elements = O(n²)
}
```

---

#### ⚖️ Time vs Space Trade-off

**Seringkali:**
- **Faster algorithm** = **More memory**
- **Less memory** = **Slower algorithm**

**CONTOH: Memoization**

```javascript
// TANPA Memoization: O(2^n) time, O(n) space
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// DENGAN Memoization: O(n) time, O(n) space
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;

    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// TRADE-OFF:
// - Tukar space (memo object) untuk dapat speed
// - Worth it untuk n besar!
```

---

## 📚 Bab 21: TypeScript Fundamentals {#-bab-21-typescript-fundamentals}

> **🎯 Misi Bab 21:** Menguasai TypeScript, superset typed dari JavaScript yang menjadi **industry standard** untuk development modern. TypeScript membantu catch errors sebelum runtime dan membuat code lebih maintainable.

### 🔴 1. TypeScript Basics

#### 📖 Konsep Dasar: Apa itu TypeScript?

**TypeScript** adalah **JavaScript dengan superpower**: **Type System**. Jika JavaScript adalah **mobil manual**, TypeScript adalah **mobil otomatis** dengan safety features.

**Keuntungan TypeScript:**
1. **Type Safety:** Catch errors saat compile, bukan runtime
2. **Better IDE Support:** Autocomplete, refactoring, navigation
3. **Documentation:** Type annotations sebagai documentation
4. **Confidence:** Refactor dengan percaya diri
5. **Industry Standard:** Dipakai Google, Microsoft, Airbnb, dll

---

#### 🔬 Basic Types

**1. Primitive Types**

```typescript
// STRING
let name: string = "Budi";
let message: string = `Hello, ${name}`;

// NUMBER (integer & float)
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xf00d;  // Hexadecimal
let binary: number = 0b1010;  // Binary

// BOOLEAN
let isActive: boolean = true;
let isDone: boolean = false;

// NULL & UNDEFINED
let nothing: null = null;
let notDefined: undefined = undefined;

// ANY (hindari sebisa mungkin!)
let flexible: any = 4;
flexible = "now string";
flexible = true;

// UNKNOWN (type-safe version of any)
let unknownValue: unknown = 4;
// flexible = unknownValue;  // Error! Harus type guard dulu
if (typeof unknownValue === 'number') {
    flexible = unknownValue;  // OK
}

// VOID (untuk function yang tidak return)
function logMessage(message: string): void {
    console.log(message);
    // Tidak ada return
}

// NEVER (function yang tidak pernah return)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {}
}
```

**2. Array Types**

```typescript
// ARRAY SYNTAX 1
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Budi", "Siti", "Andi"];

// ARRAY SYNTAX 2 (Generic)
let ages: Array<number> = [25, 30, 35];

// READONLY ARRAY
let readonlyArray: readonly number[] = [1, 2, 3];
// readonlyArray.push(4);  // Error! Cannot modify

// TUPLE (fixed-length array dengan types)
let person: [string, number, boolean] = ["Budi", 25, true];
let name: string = person[0];  // "Budi"
let age: number = person[1];   // 25

// Tuple dengan labels (TypeScript 4+)
let namedPerson: [name: string, age: number] = ["Budi", 25];
```

**3. Object Types**

```typescript
// OBJECT TYPE ANNOTATION
let user: {
    name: string;
    age: number;
    isActive: boolean;
} = {
    name: "Budi",
    age: 25,
    isActive: true
};

// OPTIONAL PROPERTIES
let product: {
    id: number;
    name: string;
    description?: string;  // Optional
} = {
    id: 1,
    name: "Laptop"
    // description tidak wajib
};

// READONLY PROPERTIES
let config: {
    readonly apiKey: string;
    baseUrl: string;
} = {
    apiKey: "secret123",
    baseUrl: "https://api.example.com"
};
// config.apiKey = "new";  // Error! Readonly
```

---

#### 🔬 Type Aliases & Interfaces

**1. Type Aliases**

```typescript
// BASIC TYPE ALIAS
type UserID = string;
type Age = number;
type IsActive = boolean;

let userId: UserID = "user123";
let age: Age = 25;

// OBJECT TYPE ALIAS
type User = {
    id: number;
    name: string;
    email: string;
    age?: number;  // Optional
};

let user1: User = {
    id: 1,
    name: "Budi",
    email: "budi@example.com"
};

// UNION TYPES
type Status = "pending" | "success" | "error";
let orderStatus: Status = "pending";

type ID = string | number;
let userId1: ID = "abc123";
let userId2: ID = 123;

// INTERSECTION TYPES
type A = { a: number };
type B = { b: string };
type C = A & B;  // { a: number, b: string }

let c: C = { a: 1, b: "hello" };

// TYPE ALIAS DENGAN FUNCTIONS
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;
```

**2. Interfaces**

```typescript
// BASIC INTERFACE
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;  // Optional
    readonly createdAt: Date;  // Readonly
}

let laptop: Product = {
    id: 1,
    name: "Laptop",
    price: 5000000,
    createdAt: new Date()
};

// INTERFACE EXTENSION
interface ElectronicProduct extends Product {
    brand: string;
    warranty: number;  // months
}

let phone: ElectronicProduct = {
    id: 2,
    name: "Smartphone",
    price: 3000000,
    createdAt: new Date(),
    brand: "Samsung",
    warranty: 12
};

// INTERFACE DENGAN METHODS
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide?(a: number, b: number): number;  // Optional
}

class BasicCalculator implements Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }
}

// INTERFACE MERGING (Declaration Merging)
interface User {
    id: number;
    name: string;
}

interface User {
    email: string;
    age?: number;
}

// Result: { id: number, name: string, email: string, age?: number }
let user: User = {
    id: 1,
    name: "Budi",
    email: "budi@example.com"
};
```

---

### 🔴 2. Functions in TypeScript

#### 🔬 Function Types

```typescript
// FUNCTION DENGAN TYPE ANNOTATIONS
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}

// DEFAULT PARAMETERS
function greetDefault(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

// REST PARAMETERS
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

sum(1, 2, 3, 4, 5);  // 15

// FUNCTION TYPE
type BinaryOperation = (a: number, b: number) => number;

const add: BinaryOperation = (a, b) => a + b;
const subtract: BinaryOperation = (a, b) => a - b;

// VOID FUNCTIONS
function log(message: string): void {
    console.log(message);
    // Implicit return undefined
}

// NEVER FUNCTIONS
function throwError(message: string): never {
    throw new Error(message);
}

// FUNCTION OVERLOADS
function formatDate(date: Date): string;
function formatDate(timestamp: number): string;
function formatDate(input: Date | number): string {
    if (input instanceof Date) {
        return input.toISOString();
    }
    return new Date(input).toISOString();
}

formatDate(new Date());      // OK
formatDate(1234567890);      // OK
formatDate("2024-01-01");    // Error!
```

---

### 🔴 3. Generics

#### 📖 Konsep Dasar: Apa itu Generics?

**Generics** adalah **parameter untuk types**. Seperti function parameters, tapi untuk types. Memungkinkan kita membuat **reusable components** yang bekerja dengan berbagai types.

**Analogi:** **Container Serbaguna**
- Tanpa generics: Kotak khusus buku, kotak khusus baju
- Dengan generics: Kotak<T> bisa isi apa saja

---

#### 🔬 Generic Functions

```typescript
// TANPA GENERICS (kurang flexible)
function identity(arg: number): number {
    return arg;
}
// Hanya works untuk number!

// DENGAN GENERICS
function identity<T>(arg: T): T {
    return arg;
}

// Usage:
let output1 = identity<string>("Hello");  // type: string
let output2 = identity<number>(42);       // type: number
let output3 = identity("Hello");          // type inference: string

// MULTIPLE TYPE PARAMETERS
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const result = merge({ name: "Budi" }, { age: 25 });
// type: { name: string } & { age: number }

// GENERIC CONSTRAINTS
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // OK karena T extends Lengthwise
    return arg;
}

loggingIdentity("Hello");     // OK, string punya length
loggingIdentity([1, 2, 3]);   // OK, array punya length
loggingIdentity(42);          // Error, number tidak punya length

// GENERIC DENGAN DEFAULT
function createArray<T = string>(length: number, value: T): T[] {
    return Array(length).fill(value);
}

let strings = createArray(3, "Hello");  // string[]
let numbers = createArray<number>(3, 5); // number[]
let defaults = createArray(3, "Test");   // string[] (default)
```

---

#### 🔬 Generic Classes & Interfaces

```typescript
// GENERIC CLASS
class Box<T> {
    constructor(public content: T) {}

    getContent(): T {
        return this.content;
    }

    setContent(newContent: T): void {
        this.content = newContent;
    }
}

const stringBox = new Box<string>("Hello");
stringBox.getContent();  // "Hello"

const numberBox = new Box<number>(42);
numberBox.getContent();  // 42

// GENERIC INTERFACE
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

let pair1: KeyValuePair<string, number> = {
    key: "age",
    value: 25
};

let pair2: KeyValuePair<number, string> = {
    key: 1,
    value: "One"
};

// GENERIC TYPE ALIAS
type Callback<T> = (data: T) => void;

const logCallback: Callback<string> = (data) => {
    console.log(data);
};

// GENERIC UTILITY TYPES
type Nullable<T> = T | null;
type Maybe<T> = T | undefined;

let nullableString: Nullable<string> = "Hello";
nullableString = null;  // OK

let maybeNumber: Maybe<number> = 42;
maybeNumber = undefined;  // OK
```

---

### 🔴 4. Advanced Types

#### 🔬 Utility Types

```typescript
// PARTIAL<T> - Semua properties jadi optional
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

const todoUpdate: Partial<Todo> = {
    title: "Learn TypeScript"
    // description dan completed optional
};

// REQUIRED<T> - Semua properties jadi required
const requiredTodo: Required<Todo> = {
    title: "Learn TS",
    description: "Complete guide",
    completed: false
};

// READONLY<T> - Semua properties jadi readonly
const readonlyTodo: Readonly<Todo> = {
    title: "Learn TS",
    description: "Complete guide",
    completed: true
};
// readonlyTodo.title = "New";  // Error!

// PICK<T, K> - Pick beberapa properties
type TodoPreview = Pick<Todo, "title" | "completed">;
const preview: TodoPreview = {
    title: "Learn TS",
    completed: true
};

// OMIT<T, K> - Omit beberapa properties
type TodoCreate = Omit<Todo, "completed">;
const newTodo: TodoCreate = {
    title: "Learn TS",
    description: "Complete guide"
};

// RECORD<K, T> - Object dengan key type K dan value type T
type UserRoles = Record<string, "admin" | "user" | "guest">;
const roles: UserRoles = {
    user1: "admin",
    user2: "user",
    user3: "guest"
};

// EXCLUDE<T, U> - Exclude types
type NonNullable<T> = Exclude<T, null | undefined>;
type Valid = NonNullable<string | number | null | undefined>;  // string | number

// EXTRACT<T, U> - Extract types
type OnlyStrings = Extract<string | number | boolean, string>;  // string
```

---

#### 🔬 Type Guards & Type Predicates

```typescript
// TYPEOF TYPE GUARD
function printId(id: number | string) {
    if (typeof id === "string") {
        // id: string
        console.log(id.toUpperCase());
    } else {
        // id: number
        console.log(id.toFixed(2));
    }
}

// INSTANCEOF TYPE GUARD
class Dog {
    bark() { console.log("Woof!"); }
}
class Cat {
    meow() { console.log("Meow!"); }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

// TYPE PREDICATES
function isFish(pet: Fish | Bird): pet is Fish {
    return "swim" in pet;
}

function move(pet: Fish | Bird) {
    if (isFish(pet)) {
        // pet: Fish
        pet.swim();
    } else {
        // pet: Bird
        pet.fly();
    }
}

// DISCRIMINATED UNIONS
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
```

---

### ⚔️ Latihan Bertahap: TypeScript

**Latihan 1: Basic Types**

```typescript
// 🎯 TUJUAN: Memahami basic types
// ⏱️ WAKTU: 10 menit
// 💪 KESULITAN: ⭐⭐

// SOAL: Lengkapi type annotations

let userName: _____ = "Budi";
let userAge: _____ = 25;
let isActive: _____ = true;
let scores: _____ _____ = [90, 85, 95];
let user: { _____: _____, _____: _____ } = { name: "Budi", age: 25 };
```

**Latihan 2: Function Types**

```typescript
// 🎯 TUJUAN: Function dengan types
// ⏱️ WAKTU: 15 menit
// 💪 KESULITAN: ⭐⭐⭐

// SOAL: Buat function dengan proper type annotations

// 1. Function yang menerima 2 numbers dan return number
function add(_____, _____): _____ {
    return a + b;
}

// 2. Function yang menerima string dan return void
function logMessage(_____): _____ {
    console.log(message);
}

// 3. Function dengan optional parameter
function greet(name: string, _____): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}
```

**Latihan 3: Generics**

```typescript
// 🎯 TUJUAN: Memahami generics
// ⏱️ WAKTU: 20 menit
// 💪 KESULITAN: ⭐⭐⭐⭐

// SOAL: Implementasi generic functions

// 1. Generic function yang return first element
function getFirst<T>(arr: T[]): _____ {
    return arr[0];
}

// 2. Generic function dengan constraint
function logLength<T extends { length: number }>(arg: T): void {
    console.log(_____.length);
}

// 3. Generic class
class Stack<T> {
    private items: T[] = [];

    push(item: _____): void {
        this.items.push(item);
    }

    pop(): _____ {
        return this.items.pop() || null;
    }
}
```

---

## 📚 Bab 22: Node.js Fundamentals {#-bab-22-nodejs-fundamentals}

> **🎯 Misi Bab 22:** Menguasai Node.js untuk backend development. Ini adalah **gateway** untuk menjadi full-stack developer dengan JavaScript.

### 🔴 1. Node.js Runtime Concepts

#### 📖 Konsep Dasar: Apa itu Node.js?

**Node.js** adalah **JavaScript runtime** yang memungkinkan kita menjalankan JavaScript di **server** (bukan hanya di browser). Jika browser JavaScript adalah **pilot**, Node.js adalah **kapten kapal** yang mengendalikan server.

**Keunggulan Node.js:**
1. **Non-blocking I/O:** Handle ribuan concurrent connections
2. **Event-driven:** Efficient untuk real-time apps
3. **NPM Ecosystem:** 2+ million packages
4. **JavaScript Everywhere:** Same language for frontend & backend
5. **Fast Execution:** V8 engine (same as Chrome)

---

#### 🔬 Event Loop di Node.js

```javascript
// EVENT LOOP PHASES:
// 1. Timers: setTimeout, setInterval
// 2. Pending Callbacks: I/O callbacks
// 3. Idle, Prepare: Internal use
// 4. Poll: Retrieve new I/O events
// 5. Check: setImmediate()
// 6. Close Callbacks: socket.on('close')

// CONTOH: Event Loop Order
console.log("1. Start");  // Sync

setTimeout(() => {
    console.log("2. setTimeout");  // Timer phase
}, 0);

setImmediate(() => {
    console.log("3. setImmediate");  // Check phase
});

Promise.resolve().then(() => {
    console.log("4. Promise");  // Microtask queue
});

console.log("5. End");  // Sync

// OUTPUT (biasanya):
// 1. Start
// 5. End
// 4. Promise
// 2. setTimeout
// 3. setImmediate
// (atau 3 sebelum 2, tergantung timing)
```

---

#### 🔬 Global Objects

```javascript
// __dirname & __filename
console.log(__dirname);   // /path/to/directory
console.log(__filename);  // /path/to/file.js

// process object
console.log(process.version);      // Node version
console.log(process.pid);          // Process ID
console.log(process.argv);         // Command line arguments
console.log(process.env);          // Environment variables
console.log(process.cwd());        // Current working directory

// process methods
process.exit(0);                   // Exit process
process.nextTick(() => {});        // Next tick queue
process.memoryUsage();             // Memory info

// global object (window di browser)
global.myGlobal = "I'm global!";
```

---

### 🔴 2. File System (fs module)

#### 🔬 Reading Files

```javascript
const fs = require('fs').promises;
const path = require('path');

// ASYNC (Promise-based)
async function readFileAsync() {
    try {
        // Read file
        const content = await fs.readFile(
            path.join(__dirname, 'file.txt'),
            'utf-8'
        );
        console.log(content);

        // Read with options
        const buffer = await fs.readFile('image.png');

    } catch (error) {
        console.error('Error:', error);
    }
}

// CALLBACK (old style)
fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// SYNC (blocking - hindari di production!)
try {
    const content = fs.readFileSync('file.txt', 'utf-8');
    console.log(content);
} catch (error) {
    console.error(error);
}
```

#### 🔬 Writing Files

```javascript
// WRITE FILE
async function writeFileAsync() {
    try {
        // Write string
        await fs.writeFile(
            'output.txt',
            'Hello, Node.js!',
            'utf-8'
        );

        // Append to file
        await fs.appendFile('output.txt', '\nMore content...');

        // Write with options
        await fs.writeFile('data.json', JSON.stringify({ name: "Budi" }), {
            encoding: 'utf-8',
            flag: 'w'  // 'w' = write, 'a' = append
        });

    } catch (error) {
        console.error('Error:', error);
    }
}
```

#### 🔬 File Operations

```javascript
// FILE INFO
async function fileInfo() {
    try {
        const stats = await fs.stat('file.txt');
        
        console.log('Size:', stats.size, 'bytes');
        console.log('Created:', stats.birthtime);
        console.log('Modified:', stats.mtime);
        console.log('Is file:', stats.isFile());
        console.log('Is directory:', stats.isDirectory());
        
    } catch (error) {
        console.error('Error:', error);
    }
}

// DELETE FILE
async function deleteFile() {
    try {
        await fs.unlink('file.txt');
        console.log('File deleted!');
    } catch (error) {
        console.error('Error:', error);
    }
}

// RENAME/MOVE FILE
async function renameFile() {
    try {
        await fs.rename('old.txt', 'new.txt');
        console.log('File renamed!');
    } catch (error) {
        console.error('Error:', error);
    }
}

// CREATE DIRECTORY
async function createDirectory() {
    try {
        await fs.mkdir('newFolder');
        await fs.mkdir('a/b/c', { recursive: true });
        console.log('Directories created!');
    } catch (error) {
        console.error('Error:', error);
    }
}

// READ DIRECTORY
async function readDirectory() {
    try {
        const files = await fs.readdir(__dirname);
        console.log('Files in directory:', files);
        
        const filesWithStats = await fs.readdir(__dirname, { withFileTypes: true });
        filesWithStats.forEach(file => {
            console.log(`${file.name} - ${file.isDirectory() ? 'DIR' : 'FILE'}`);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}
```

---

#### 🔬 Streams

```javascript
// STREAMS: Process data chunk by chunk (memory efficient)

// READ STREAM
const readStream = fs.createReadStream('large-file.txt', {
    highWaterMark: 64 * 1024,  // 64KB chunks
    encoding: 'utf-8'
});

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
    console.log('File fully read');
});

// WRITE STREAM
const writeStream = fs.createWriteStream('output.txt');

for (let i = 1; i <= 5; i++) {
    writeStream.write(`Line ${i}\n`);
}

writeStream.end();

// PIPE
const read = fs.createReadStream('input.txt');
const write = fs.createWriteStream('output.txt');

read.pipe(write);
```

---

### 🔴 3. HTTP Module

```javascript
const http = require('http');

// BASIC SERVER
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

// ROUTING
const server2 = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home</h1>');
    } else if (req.url === '/api/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify([{ id: 1, name: 'Budi' }]));
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});
```

---

### 🔴 4. NPM & Package Management

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "jest": "^29.0.0"
  }
}
```

**Semantic Versioning:**
- `^1.0.0` → Minor & Patch updates
- `~1.0.0` → Patch updates only
- `1.0.0` → Exact version

---

### 🔴 5. Express.js Basics

```javascript
const express = require('express');
const app = express();

app.use(express.json());

// GET
app.get('/', (req, res) => {
    res.send('Hello!');
});

// POST
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ id: Date.now(), name, email });
});

// ERROR HANDLING
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(3000);
```

---

## ⚔️ Latihan Bertahap: Node.js & TypeScript

### LEVEL 1: File Operations

```javascript
// 🎯 TUJUAN: Memahami File System
// ⏱️ WAKTU: 20 menit

const fs = require('fs').promises;

// 1. Read file
async function readFile(filePath) {
    return await fs.readFile(filePath, 'utf-8');
}

// 2. Write file
async function writeFile(filePath, content) {
    await fs.writeFile(filePath, content, 'utf-8');
}

// 3. Get file size
async function getFileSize(filePath) {
    const stats = await fs.stat(filePath);
    return stats.size;
}
```

### LEVEL 2: Express REST API

```javascript
// 🎯 TUJUAN: Membuat CRUD API
// ⏱️ WAKTU: 30 menit

const express = require('express');
const app = express();

app.use(express.json());

let users = [
    { id: 1, name: 'Budi' },
    { id: 2, name: 'Siti' }
];

// GET all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
});

// POST create user
app.post('/api/users', (req, res) => {
    const { name } = req.body;
    const newUser = { id: Date.now(), name };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(3000);
```

---

> **🎉 SELAMAT!** Anda telah menyelesaikan panduan lengkap JavaScript, TypeScript, dan Node.js!

---

## 🧪 BONUS SECTION: Latihan Komprehensif

> **📖 Konsep:** Seorang developer handal bukan hanya bisa menulis code, tapi juga bisa **mencari dan memperbaiki bug**. Latihlah kemampuan debugging Anda!

---

#### 🔍 BUG 1: Scope Issue

**⚠️ Code dengan Bug:**

```javascript
function hitungTotal(items) {
    var total = 0;

    for (var i = 0; i < items.length; i++) {
        setTimeout(() => {
            console.log(`Item ${i}: ${items[i].harga}`);
        }, 1000);

        total += items[i].harga;
    }

    return total;
}

const items = [
    { nama: 'Laptop', harga: 5000000 },
    { nama: 'Mouse', harga: 150000 },
    { nama: 'Keyboard', harga: 300000 }
];

hitungTotal(items);
// BUG: Semua log menampilkan "Item 3: undefined"!
```

**🐛 Temukan Bugnya:**
- Variable `i` menggunakan `var` (function scope)
- Saat setTimeout dijalankan, loop sudah selesai dan `i = 3`

**✅ Solusi:**

```javascript
function hitungTotal(items) {
    let total = 0; // GANTI var dengan let

    for (let i = 0; i < items.length; i++) { // GANTI var dengan let
        setTimeout(() => {
            console.log(`Item ${i}: ${items[i].harga}`);
        }, 1000);

        total += items[i].harga;
    }

    return total;
}
```

---

#### 🔍 BUG 2: Async/Await Error

**⚠️ Code dengan Bug:**

```javascript
async function fetchUserData(userId) {
    const response = fetch(`https://api.example.com/users/${userId}`);
    const data = response.json();
    return data;
}
```

**🐛 Temukan Bugnya:**
- `fetch()` return Promise, harus di-await
- `response.json()` juga return Promise, harus di-await
- Tidak ada error handling

**✅ Solusi:**

```javascript
async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}
```

---

#### 🔍 BUG 3: Array Mutation

**⚠️ Code dengan Bug:**

```javascript
function tambahDiskon(products, diskon) {
    const result = products.map(product => {
        product.harga = product.harga * (1 - diskon);
        return product;
    });

    return result;
}

const products = [
    { nama: 'Laptop', harga: 5000000 },
    { nama: 'Mouse', harga: 150000 }
];

tambahDiskon(products, 0.1);
// BUG: Array original 'products' terubah!
```

**🐛 Temukan Bugnya:**
- `map()` mengembalikan reference ke object yang sama
- Modifikasi `product.harga` mengubah object original

**✅ Solusi:**

```javascript
function tambahDiskon(products, diskon) {
    const result = products.map(product => {
        // Buat object baru dengan spread
        return {
            ...product,
            harga: product.harga * (1 - diskon)
        };
    });

    return result;
}
```

---

#### 🔍 BUG 4: This Binding

**⚠️ Code dengan Bug:**

```javascript
const user = {
    nama: 'Budi',
    sapa: function() {
        console.log(`Halo, saya ${this.nama}`);
    },
    getSapaan: function() {
        const callback = function() {
            console.log(`Halo, saya ${this.nama}`);
        };
        callback();
    }
};

user.getSapaan();
// BUG: "Halo, saya undefined" - this tidak bind dengan benar!
```

**🐛 Temukan Bugnya:**
- Regular function `callback` punya `this` sendiri
- `this` di callback tidak sama dengan `this` di `getSapaan`

**✅ Solusi:**

```javascript
const user = {
    nama: 'Budi',
    sapa: function() {
        console.log(`Halo, saya ${this.nama}`);
    },
    getSapaan: function() {
        // CARA 1: Gunakan arrow function
        const callback = () => {
            console.log(`Halo, saya ${this.nama}`);
        };
        callback();

        // CARA 2: Bind this
        // const callback = function() {
        //     console.log(`Halo, saya ${this.nama}`);
        // }.bind(this);

        // CARA 3: Simpan reference
        // const self = this;
        // const callback = function() {
        //     console.log(`Halo, saya ${self.nama}`);
        // };
    }
};
```

---

#### 🔍 BUG 5: Equality Check

**⚠️ Code dengan Bug:**

```javascript
function compareArrays(arr1, arr2) {
    if (arr1 === arr2) {
        return true;
    }
    return false;
}

compareArrays([1, 2, 3], [1, 2, 3]);
// BUG: Return false, padahal isinya sama!
```

**🐛 Temukan Bugnya:**
- Array adalah object, comparison by reference bukan value
- Dua array berbeda selalu `!==` meskipun isinya sama

**✅ Solusi:**

```javascript
function compareArrays(arr1, arr2) {
    // Check length dulu
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Compare setiap element
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

// ATAU dengan JSON.stringify (untuk simple arrays)
function compareArraysJSON(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}
```

---

### 🎯 BAGIAN 2: Mini Projects (Capstone)

> **📖 Konsep:** Terapkan semua ilmu Anda dalam 5 proyek lengkap yang bisa jadi portfolio!

---

#### 🟢 PROJECT 1: Todo List App

**Fitur:**
- Add, edit, delete todos
- Mark as complete/incomplete
- Filter (all/active/completed)
- Save to localStorage
- Dark mode toggle

**Starter Code:**

```javascript
class TodoApp {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.init();
    }

    init() {
        // TODO: Setup event listeners
        // TODO: Render initial todos
    }

    addTodo(text) {
        // TODO: Add new todo
        // TODO: Save to localStorage
        // TODO: Re-render
    }

    deleteTodo(id) {
        // TODO: Delete todo by id
    }

    toggleComplete(id) {
        // TODO: Toggle completed status
    }

    render() {
        // TODO: Render todos to DOM
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}
```

**✅ Solusi Lengkap ada di `latihan-1.js`!**

---

#### 🟡 PROJECT 2: Weather Dashboard

**Fitur:**
- Search city by name
- Display current weather
- 5-day forecast
- Temperature unit toggle (C/F)
- Loading states & error handling

**Starter Code:**

```javascript
class WeatherDashboard {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.openweathermap.org/data/2.5';
        this.init();
    }

    init() {
        // TODO: Setup event listeners
        // TODO: Load default city
    }

    async fetchWeather(city) {
        // TODO: Fetch current weather
        // TODO: Handle errors
        // TODO: Display data
    }

    async fetchForecast(city) {
        // TODO: Fetch 5-day forecast
    }

    convertTemp(celsius, unit) {
        // TODO: Convert C to F if needed
        return unit === 'F' ? (celsius * 9/5) + 32 : celsius;
    }
}
```

---

#### 🟠 PROJECT 3: E-Commerce Shopping Cart

**Fitur:**
- Product listing
- Add to cart
- Update quantity
- Remove from cart
- Calculate total with tax/shipping
- Checkout form validation

**Starter Code:**

```javascript
class ShoppingCart {
    constructor() {
        this.products = [];
        this.cart = [];
        this.taxRate = 0.1;
        this.shippingRate = 15000;
        this.init();
    }

    init() {
        // TODO: Load products
        // TODO: Setup event listeners
    }

    addToCart(productId, qty = 1) {
        // TODO: Find product
        // TODO: Add to cart or increase qty
        // TODO: Update UI
    }

    removeFromCart(productId) {
        // TODO: Remove from cart
    }

    updateQuantity(productId, qty) {
        // TODO: Update quantity
        // TODO: Remove if qty = 0
    }

    calculateTotal() {
        // TODO: Calculate subtotal
        // TODO: Add tax
        // TODO: Add shipping
        // TODO: Return total
    }

    checkout(customerData) {
        // TODO: Validate customer data
        // TODO: Process order
        // TODO: Clear cart
    }
}
```

---

#### 🔴 PROJECT 4: Recipe Finder App

**Fitur:**
- Search recipes by ingredient
- Filter by category/meal type
- View recipe details
- Save favorite recipes
- Meal planner

**Starter Code:**

```javascript
class RecipeFinder {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        this.init();
    }

    async searchByIngredient(ingredients) {
        // TODO: Call recipe API
        // TODO: Display results
    }

    async getRecipeDetails(id) {
        // TODO: Fetch recipe details
    }

    addToFavorites(recipe) {
        // TODO: Add to favorites
        // TODO: Save to localStorage
    }

    removeFromFavorites(id) {
        // TODO: Remove from favorites
    }

    planMeal(day, recipe) {
        // TODO: Add recipe to meal plan
    }
}
```

---

#### 🟣 PROJECT 5: Task Management Board (Kanban)

**Fitur:**
- Create columns (Todo, In Progress, Done)
- Add/edit/delete tasks
- Drag and drop tasks
- Filter by assignee/priority
- Export to JSON

**Starter Code:**

```javascript
class KanbanBoard {
    constructor() {
        this.columns = {
            todo: [],
            inProgress: [],
            done: []
        };
        this.init();
    }

    init() {
        // TODO: Load from localStorage
        // TODO: Setup drag & drop
        // TODO: Render columns
    }

    addTask(column, task) {
        // TODO: Add task to column
        // TODO: Save
    }

    moveTask(fromColumn, toColumn, taskId) {
        // TODO: Move task between columns
    }

    deleteTask(column, taskId) {
        // TODO: Delete task
    }

    exportBoard() {
        // TODO: Export to JSON
        // TODO: Download file
    }
}
```

---

### 📚 BAGIAN 3: Latihan Per Bab (Quick Reference)

> **📖 Konsep:** Quick exercises untuk setiap bab sebagai review!

---

#### Bab 8: Error Handling

```javascript
// LEVEL 1: Basic try-catch
function safeJSONParse(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return null;
    }
}

// LEVEL 2: Custom error
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

// LEVEL 3: Async error handling
async function safeFetch(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

// LEVEL 4: Retry logic
async function retry(fn, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (e) {
            if (i === retries - 1) throw e;
        }
    }
}

// LEVEL 5: Error boundary pattern
class ErrorBoundary {
    constructor() {
        this.hasError = false;
        this.error = null;
    }

    async execute(fn) {
        try {
            this.hasError = false;
            return await fn();
        } catch (e) {
            this.hasError = true;
            this.error = e;
            this.handleError(e);
        }
    }

    handleError(error) {
        console.error('ErrorBoundary caught:', error);
    }
}
```

---

#### Bab 9: Modules

```javascript
// LEVEL 1: Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// LEVEL 2: Default export
export default class Calculator {
    multiply(a, b) { return a * b; }
}

// LEVEL 3: Re-exports
export { add, subtract } from './math.js';

// LEVEL 4: Dynamic import
async function loadModule(name) {
    return await import(`./modules/${name}.js`);
}

// LEVEL 5: Module pattern
const Module = (() => {
    let privateVar = 0;

    return {
        increment: () => ++privateVar,
        getValue: () => privateVar
    };
})();
```

---

#### Bab 10: Regex

```javascript
// LEVEL 1: Basic pattern
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// LEVEL 2: Character classes
const digitRegex = /\d+/;
const wordRegex = /\w+/;

// LEVEL 3: Capture groups
const dateRegex = /(\d{2})\/(\d{2})\/(\d{4})/;

// LEVEL 4: Replace with regex
const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-');

// LEVEL 5: Advanced validation
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
```

---

#### Bab 11: API & HTTP

```javascript
// LEVEL 1: GET request
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}

// LEVEL 2: POST request
async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await response.json();
}

// LEVEL 3: With auth
async function getWithAuth(url, token) {
    const response = await fetch(url, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return await response.json();
}

// LEVEL 4: Parallel requests
async function fetchAll(urls) {
    return await Promise.all(urls.map(url => fetch(url)));
}

// LEVEL 5: API client class
class APIClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(endpoint) {
        return await this.request(endpoint);
    }

    async post(endpoint, data) {
        return await this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }

    async request(endpoint, options = {}) {
        const response = await fetch(`${this.baseURL}${endpoint}`, options);
        return await response.json();
    }
}
```

---

#### Bab 12: OOP & Classes

```javascript
// LEVEL 1: Basic class
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

// LEVEL 2: Getters/Setters
class Product {
    constructor(price) {
        this._price = price;
    }

    get price() { return this._price; }
    set price(value) {
        if (value < 0) throw new Error('Invalid price');
        this._price = value;
    }
}

// LEVEL 3: Inheritance
class Employee extends Person {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }
}

// LEVEL 4: Static methods
class MathUtils {
    static PI = Math.PI;
    static add(a, b) { return a + b; }
}

// LEVEL 5: Private fields
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    get balance() { return this.#balance; }
}
```

---

#### Bab 13: Browser Storage

```javascript
// LEVEL 1: LocalStorage basic
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');

// LEVEL 2: Object storage
localStorage.setItem('user', JSON.stringify({ name: 'Budi' }));
const user = JSON.parse(localStorage.getItem('user'));

// LEVEL 3: SessionStorage
sessionStorage.setItem('cart', JSON.stringify([]));

// LEVEL 4: Storage Manager class
class StorageManager {
    constructor(prefix) {
        this.prefix = prefix;
    }

    set(key, value) {
        localStorage.setItem(`${this.prefix}${key}`, JSON.stringify(value));
    }

    get(key) {
        return JSON.parse(localStorage.getItem(`${this.prefix}${key}`));
    }
}

// LEVEL 5: Expiring storage
class ExpiringStorage {
    set(key, value, ttl) {
        localStorage.setItem(key, JSON.stringify({
            value,
            expiry: Date.now() + ttl
        }));
    }

    get(key) {
        const item = JSON.parse(localStorage.getItem(key));
        if (Date.now() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return item.value;
    }
}
```

---

#### Bab 14: Date & Time

```javascript
// LEVEL 1: Basic date
const now = new Date();
const year = now.getFullYear();

// LEVEL 2: Formatting
const formatted = now.toLocaleDateString('id-ID');

// LEVEL 3: Arithmetic
const tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);

// LEVEL 4: Validation
function isValidDate(date) {
    return !isNaN(date.getTime());
}

// LEVEL 5: Time ago function
function timeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return 'Baru saja';
    if (seconds < 3600) return `${Math.floor(seconds/60)} menit yang lalu`;
    if (seconds < 86400) return `${Math.floor(seconds/3600)} jam yang lalu`;
    return `${Math.floor(seconds/86400)} hari yang lalu`;
}
```

---

#### Bab 15: Performance

```javascript
// LEVEL 1: Debounce
function debounce(fn, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

// LEVEL 2: Throttle
function throttle(fn, limit) {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            fn(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// LEVEL 3: Memoization
function memoize(fn) {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];
        cache[key] = fn(...args);
        return cache[key];
    };
}

// LEVEL 4: Lazy loading with generator
function* lazyLoad(data) {
    for (const item of data) {
        yield item;
    }
}

// LEVEL 5: Batch processing
function batchProcess(array, size, processor) {
    const results = [];
    for (let i = 0; i < array.length; i += size) {
        const batch = array.slice(i, i + size);
        results.push(...batch.map(processor));
    }
    return results;
}
```

---

#### Bab 16: Security

```javascript
// LEVEL 1: XSS prevention
function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// LEVEL 2: Input validation
function validateInput(input, pattern) {
    return pattern.test(input);
}

// LEVEL 3: CSRF token
function generateCSRFToken() {
    return crypto.randomUUID();
}

// LEVEL 4: Password hashing
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

// LEVEL 5: CSP helper
function generateCSP(directives) {
    return Object.entries(directives)
        .map(([key, values]) => `${key} ${values.join(' ')}`)
        .join('; ');
}
```

---

#### Bab 17: Testing

```javascript
// LEVEL 1: Simple assert
function assert(actual, expected, message) {
    if (actual !== expected) {
        throw new Error(message || `Expected ${expected}, got ${actual}`);
    }
}

// LEVEL 2: Test suite
function describe(name, fn) {
    console.log(`\n${name}`);
    fn();
}

function it(name, fn) {
    try {
        fn();
        console.log(`  ✓ ${name}`);
    } catch (e) {
        console.error(`  ✗ ${name}: ${e.message}`);
    }
}

// LEVEL 3: AAA pattern
function test(name, fn) {
    console.log(`Testing: ${name}`);
    try {
        fn();
        console.log('  Passed');
    } catch (e) {
        console.error(`  Failed: ${e.message}`);
    }
}

// LEVEL 4: Mock function
function createMock(impl) {
    const mock = (...args) => {
        mock.calls.push(args);
        return impl?.(...args);
    };
    mock.calls = [];
    return mock;
}

// LEVEL 5: Async testing
async function testAsync(name, fn) {
    try {
        await fn();
        console.log(`  ✓ ${name}`);
    } catch (e) {
        console.error(`  ✗ ${name}: ${e.message}`);
    }
}
```

---

#### Bab 18: Git

```javascript
// LEVEL 1: Basic commands
const gitCommands = {
    'git init': 'Initialize repo',
    'git add .': 'Stage all files',
    'git commit -m "msg"': 'Commit changes',
    'git push': 'Push to remote',
    'git pull': 'Pull from remote'
};

// LEVEL 2: Branching
// git branch feature-1    - Create branch
// git checkout feature-1  - Switch branch
// git merge feature-1     - Merge branch

// LEVEL 3: Undo changes
// git reset --hard HEAD~1  - Undo last commit
// git revert <commit>      - Safe undo

// LEVEL 4: Commit convention
function generateCommitMessage(type, scope, description) {
    return `${type}(${scope}): ${description}`;
}

// LEVEL 5: Git simulation
class GitSimulation {
    constructor() {
        this.commits = [];
        this.staged = [];
    }

    add(file) {
        this.staged.push(file);
    }

    commit(message) {
        this.commits.push({
            hash: Math.random().toString(36).substring(7),
            message,
            files: [...this.staged]
        });
        this.staged = [];
    }

    log() {
        this.commits.forEach(c => console.log(`${c.hash} - ${c.message}`));
    }
}
```

---

## 🎉 SELAMAT! ANDA TELAH MENYELESAIKAN PANDUAN LENGKAP

> **📚 Ringkasan Materi yang Telah Dipelajari:**
>
> ### Fundamental (Bab 0)
> - ✅ String Manipulation
> - ✅ Number & Math Operations
> - ✅ Array Utilities
> - ✅ Object Utilities
> - ✅ JSON
> - ✅ Control Flow
>
> ### Functional Programming (Bab 1)
> - ✅ map, filter, reduce
> - ✅ Chaining & Composition
>
> ### Advanced Concepts
> - ✅ Async Programming & Event Loop
> - ✅ Promise & async/await
> - ✅ Closures & Scope
> - ✅ this Keyword & Binding
> - ✅ ES6+ Features
> - ✅ Error Handling
> - ✅ Modules
> - ✅ Prototypes & Classes
> - ✅ Regular Expressions
> - ✅ Date & Time
>
> ### Web Development
> - ✅ DOM Manipulation
> - ✅ Event Handling
> - ✅ Browser Storage
> - ✅ API & HTTP
> - ✅ Performance Optimization
>
> ### Production Ready
> - ✅ Security Basics
> - ✅ Testing Fundamentals
> - ✅ Git & Version Control
>
> ### 🆕 Advanced Topics (NEW!)
> - ✅ **Bab 19: Data Structures & Algorithms**
>   - Stack (LIFO) & Queue (FIFO)
>   - Linked List (Singly & Doubly)
>   - Real-world applications
> 
> - ✅ **Bab 20: Algorithm Complexity & Big O**
>   - O(1), O(log n), O(n), O(n log n), O(n²), O(2^n)
>   - Time & Space Complexity
>   - Trade-off analysis
> 
> - ✅ **Bab 21: TypeScript Fundamentals**
>   - Basic Types & Type Annotations
>   - Interfaces & Type Aliases
>   - Generics & Utility Types
>   - Advanced Types (Type Guards, Discriminated Unions)
> 
> - ✅ **Bab 22: Node.js Fundamentals**
>   - Event Loop & Runtime Concepts
>   - File System (fs module)
>   - Streams & HTTP Module
>   - NPM & Package Management
>   - Express.js Basics

---

## 🎓 Selamat Berpetualang!

> Kamu telah menguasai **seluruh dasar-dasar sihir data**. Sekarang, pintu gerbang dunia nyata telah terbuka. Teruslah berlatih, karena seorang penyihir sejati tak pernah berhenti belajar.
>
> **"The expert in anything was once a beginner."**
>
> **PREMIUM EDITION v2.0 - 2024**

**📖 Total Materi: 23 Bab Lengkap**
**📝 Total Baris: 20,500+ baris**
**💻 Total Code Examples: 1000+ examples**
**🎯 Total Latihan: 250+ exercises**
**🐛 Total Debugging Challenges: 5 bugs**
**🎯 Total Mini Projects: 8 projects**

---

### 📊 Ringkasan Latihan per Bab

| Bab | Topik | Jumlah Latihan | Level |
|-----|-------|----------------|-------|
| 0 | String, Number, Array, Object | 20+ | 1-8 |
| 1 | map, filter, reduce | 16+ | 1-6, 11-20 |
| 5 | DOM Manipulation | 15+ | 1-5 |
| 6 | Closures & Scope | 15+ | 1-5 |
| 7 | ES6+ Features | 15+ | 1-5 |
| 8 | Error Handling | 10+ | 1-5 |
| 9 | Modules | 10+ | 1-5 |
| 10 | Regular Expressions | 10+ | 1-5 |
| 11 | API & HTTP | 10+ | 1-5 |
| 12 | Prototypes & Classes | 10+ | 1-5 |
| 13 | Browser Storage | 10+ | 1-5 |
| 14 | Date & Time | 10+ | 1-5 |
| 15 | Performance | 10+ | 1-5 |
| 16 | Security | 10+ | 1-5 |
| 17 | Testing | 10+ | 1-5 |
| 18 | Git | 10+ | 1-5 |
| **19** | **Data Structures & Algorithms** | **10+** | **1-5** |
| **20** | **Big O Notation** | **5+** | **1-5** |
| **21** | **TypeScript** | **10+** | **1-5** |
| **22** | **Node.js** | **10+** | **1-5** |
| **Bonus** | **Debugging Exercises** | **5 bugs** | **-** |
| **Bonus** | **Mini Projects** | **8 projects** | **-** |

**🎯 TOTAL: 250+ Latihan + 5 Debugging Challenges + 8 Mini Projects!**

---

## 🔙 Navigasi Cepat

| Link | Deskripsi |
|------|-----------|
| [⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif) | Kembali ke navigasi utama |
| [📚 Bab 0: Fundamental](#-bab-0-kitab-dasar-mantra) | String, Number, Array, Object, JSON |
| [⚡ Bab 1: Functional Programming](#-bab-1-tiga-mantra-agung-penguasa-array-map-filter-reduce) | map, filter, reduce |
| [🌐 Bab 5: Web Development](#-bab-5-dom-manipulation--event-handling) | DOM, Events, Storage |
| [🛠️ Bab 15: Performance](#-bab-15-performance-optimization) | Optimization techniques |
| [🔒 Bab 16: Security](#-bab-16-security-basics) | Security best practices |
| [🧪 Bab 17: Testing](#-bab-17-testing-fundamentals) | Unit, Integration, E2E |
| [📦 Bab 18: Git](#-bab-18-git--version-control) | Version control |

---

### ⌨️ Keyboard Shortcuts

| Shortcut | Aksi |
|----------|------|
| `Ctrl + Home` | Kembali ke Daftar Isi |
| `Ctrl + F` | Cari dalam dokumen |
| `Ctrl + End` | Ke akhir dokumen |
| `Alt + ←` | Kembali (setelah klik link) |

---

## 🎓 Selamat Berpetualang!

> Kamu telah menguasai dasar-dasar sihir data. Sekarang, pintu gerbang dunia nyata telah terbuka. Teruslah berlatih, karena seorang penyihir sejati tak pernah berhenti belajar.

**PREMIUM EDITION v2.0 - 2024**

[⬆️ Kembali ke Daftar Isi](#-daftar-isi-interaktif)
