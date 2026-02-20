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

## 📚 Bab 0: Kitab Dasar Mantra

> **⚔️ Persenjataan Dasar:** Sebelum merapal mantra kompleks, seorang penyihir handal harus menguasai perkakas dasarnya. Bab ini adalah **gudang senjata** Anda, berisi mantra-mantra utilitas yang akan Anda gunakan **setiap hari**.

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

### 📦 3. Sihir Wadah (Array Utilities)

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

## Bab 1: Tiga Mantra Agung Penguasa Array (`map`, `filter`, `reduce`)

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

## 🎓 Selamat Berpetualang!

> Kamu telah menguasai dasar-dasar sihir data. Sekarang, pintu gerbang dunia nyata telah terbuka. Teruslah berlatih, karena seorang penyihir sejati tak pernah berhenti belajar.

**PREMIUM EDITION v2.0 - 2024**
