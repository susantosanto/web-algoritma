/* =========================================================================
   LATIHAN DASAR JAVASCRIPT — TANPA JAWABAN + FRAMEWORK PEMECAHAN MASALAH
   =========================================================================
   Setiap latihan dilengkapi dengan:
     - SOAL           : apa yang harus diselesaikan
     - PETUNJUK        : hint untuk memulai
     - KONSEP YANG DIPAKAI: konsep JavaScript yang relevan

   Gunakan FRAMEWORK 7 LANGKAH dari file ALGORITMA-PEMECAHAN-MASALAH.md
   untuk menyelesaikan setiap latihan.

   Cara pakai:
     Buka terminal di folder ini, lalu ketik:
        node latihan-dasar.js
     Untuk menjalankan latihan tertentu, uncomment pemanggilannya di bawah.
   ========================================================================= */

/* =========================================================================
   BAGIAN 1 — ARRAY (Wadah Menyimpan Banyak Data)
   =========================================================================

   KONSEP:
   - Array adalah "kotak" yang menampung BANYAK nilai dalam satu variabel
   - Tiap nilai punya INDEX (nomor urut), mulai dari 0
   - Akses: namaArray[index]
   - Tambah: array.push(item)
   - Hapus: array.pop()
   - Jumlah: array.length
   ========================================================================= */

// --- LATIHAN 1.1 (Level: Pemula) ---
// SOAL: Buat array berisi 5 nama temanmu, lalu cetak nama ke-3
// PETUNJUK: Ingat index mulai dari 0!
// KONSEP: Array, index, console.log
function latihanArray_1() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 1.2 (Level: Pemula) ---
// SOAL: Buat array angka [10, 20, 30, 40, 50]
//       Cetak angka PERTAMA dan TERAKHIR
// PETUNJUK: Angka terakhir bisa diakses dengan array[array.length - 1]
// KONSEP: Array, length, index
function latihanArray_2() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 1.3 (Level: Sedang) ---
// SOAL: Buat array buah ["apel", "mangga", "jeruk"]
//       Tambah "pisang" di akhir, lalu hapus "apel" dari awal
//       Cetak hasilnya
// PETUNJUK: push() untuk tambah, unshift() untuk hapus dari awal
// KONSEP: push(), unshift(), shift()
function latihanArray_3() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 1.4 (Level: Sedang) ---
// SOAL: Buat array angka [5, 10, 15, 20, 25]
//       Cari dan cetak posisi (index) angka 15
// PETUNJUK: Gunakan loop dan if untuk mencari
// KONSEP: For Loop, If, Array
function latihanArray_4() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 1.5 (Level: Aplikatif) ---
// SOAL: Buat array of objects berisi 3 siswa:
//       { nama: "...", nilai: ... }
//       Cetak nama siswa yang nilainya paling tinggi
// PETUNJUK: Gunakan loop + perbandingan untuk cari max
// KONSEP: Array of Objects, For Loop, If Else
function latihanArray_5() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 1.6 (Level: Challenge) ---
// SOAL: Buat array angka [3, 7, 2, 8, 1, 9, 4]
//       Balik urutan array tanpa pakai .reverse()
//       Cetak hasilnya
// PETUNJUK: Buat array baru, lalu masukkan dari belakang
// KONSEP: Array, For Loop
function latihanArray_6() {
  // TULIS KODEMU DI SINI
}

/* =========================================================================
   BAGIAN 2 — FOR LOOP (Mengulang Perintah Berkali-kali)
   =========================================================================

   KONSEP:
   - For Loop dipakai untuk mengulang blok kode
   - Bentuk: for (let i = 0; i < batas; i++) { ... }
   - i = 0: titik mulai
   - i < batas: kondisi berhenti
   - i++: langkah tiap putaran
   ========================================================================= */

// --- LATIHAN 2.1 (Level: Pemula) ---
// SOAL: Cetak angka 1 sampai 10, masing-masing di baris baru
// PETUNJUK: Mulai dari i = 1, berhenti saat i = 10
// KONSEP: For Loop
function latihanFor_1() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 2.2 (Level: Pemula) ---
// SOAL: Cetak angka GANJIL dari 1 sampai 20
// PETUNJUK: Gunakan i += 2 atau cek dengan i % 2 !== 0
// KONSEP: For Loop, Modulo
function latihanFor_2() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 2.3 (Level: Sedang) ---
// SOAL: Hitung jumlah semua angka dari 1 sampai 100
// PETUNJUK: Gunakan variabel penampung (akumulator)
// KONSEP: For Loop, Akumulasi
function latihanFor_3() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 2.4 (Level: Sedang) ---
// SOAL: Cetak perkalian 7 dari 7×1 sampai 7×10
//       Contoh: 7×1 = 7, 7×2 = 14, ...
// PETUNJUK: Gunakan i sebagai pengali
// KONSEP: For Loop, Template String
function latihanFor_4() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 2.5 (Level: Aplikatif) ---
// SOAL: Buat pola bintang seperti ini:
//       *
//       **
//       ***
//       ****
//       *****
// PETUNJUK: Loop untuk baris, dan gunakan string berulang
// KONSEP: Nested Loop, String.repeat()
function latihanFor_5() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 2.6 (Level: Challenge) ---
// SOAL: Buat program faktorial (n!)
//       Input: 5 → Output: 5×4×3×2×1 = 120
// PETUNJUK: Gunakan akumulasi dengan perkalian
// KONSEP: For Loop, Akumulasi
function latihanFor_6(n) {
  // TULIS KODEMU DI SINI
}

/* =========================================================================
   BAGIAN 3 — FOR LOOP + IF ELSE (Ulang + Keputusan)
   =========================================================================

   KONSEP:
   - If Else untuk mengambil KEPUTUSAN
   - if (kondisi) { ... } else { ... }
   - Kondisi bisa: ===, !==, >, <, >=, <=, && (dan), || (atau)
   - Modulo (%) untuk cek genap/ganjil atau habis dibagi
   ========================================================================= */

// --- LATIHAN 3.1 (Level: Pemula) ---
// SOAL: Untuk angka 1-20, cetak:
//       - "GENAP" jika angka genap
//       - "GANJIL" jika angka ganjil
//       - "LIMA" jika habis dibagi 5
// PETUNJUK: Gunakan if-else if-else
// KONSEP: If Else, Modulo
function latihanForIf_1() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 3.2 (Level: Pemula) ---
// SOAL: Buat array angka [1-10], hitung:
//       - Berapa banyak angka genap?
//       - Berapa banyak angka ganjil?
// PETUNJUK: Gunakan 2 variabel akumulator
// KONSEP: For Loop, If, Akumulasi
function latihanForIf_2() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 3.3 (Level: Sedang) ---
// SOAL: Cari angka TERBESAR dan TERKECIL dalam array [45, 12, 88, 3, 67]
// PETUNJUK: Anggap pertama sebagai max/min, lalu bandingkan dengan sisanya
// KONSEP: For Loop, If, Perbandingan
function latihanForIf_3() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 3.4 (Level: Sedang) ---
// SOAL: Klasifikasikan angka 1-30 menjadi:
//       - "KECIL" jika < 10
//       - "SEDANG" jika 10-20
//       - "BESAR" jika > 20
// PETUNJUK: Gunakan if-else if-else
// KONSEP: If Else, Range
function latihanForIf_4() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 3.5 (Level: Aplikatif) ---
// SOAL: Dari array [85, 92, 78, 95, 60, 88]
//       Hitung rata-rata, dan cetak:
//       - Angka di atas rata-rata
//       - Angka di bawah rata-rata
// PETUNJUK: Hitung total dulu, bagi panjang, baru bandingkan
// KONSEP: For Loop, If, Akumulasi
function latihanForIf_5() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 3.6 (Level: Challenge) ---
// SOAL: Buat program menentukan PRIMA atau BUKAN untuk angka 1-50
//       (Prima: hanya habis dibagi 1 dan dirinya sendiri)
// PETUNJUK: Prima harus > 1, lalu cek apakah ada pembagi selain 1 dan dirinya
// KONSEP: Nested Loop, If, Modulo
function latihanForIf_6() {
  // TULIS KODEMU DI SINI
}

/* =========================================================================
   BAGIAN 4 — OBJECT (Menyimpan Data Berpasangan Key: Value)
   =========================================================================

   KONSEP:
   - Object menyimpan data BERNama (pakai "kunci"/key)
   - const obj = { key1: value1, key2: value2 }
   - Akses: obj.key atau obj["key"]
   - Ubah: obj.key = newValue
   - Tambah: obj.keyBaru = value
   - Object bisa bersarang (nested)
   ========================================================================= */

// --- LATIHAN 4.1 (Level: Pemula) ---
// SOAL: Buat object buku dengan properti:
//       judul, penulis, tahun, halaman
//       Cetak semua info buku
// PETUNJUK: Akses dengan obj.properti
// KONSEP: Object, console.log
function latihanObj_1() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 4.2 (Level: Pemula) ---
// SOAL: Buat object siswa dengan:
//       - nama, umur, alamat (object: jalan, kota, kodePos)
//       Cetak kota tempat tinggal siswa
// PETUNJUK: Object bisa bersarang, akses dengan obj.alamat.kota
// KONSEP: Nested Object
function latihanObj_2() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 4.3 (Level: Sedang) ---
// SOAL: Buat array of objects berisi 3 produk:
//       { nama, harga, stok }
//       Hitung total nilai semua produk (harga × stok)
// PETUNJUK: Loop array, akses property objek, akumulasi
// KONSEP: Array of Objects, For Loop, Akumulasi
function latihanObj_3() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 4.4 (Level: Sedang) ---
// SOAL: Dari array siswa [{ nama, nilai }]:
//       Tambah property "status" ke setiap siswa:
//       - "LULUS" jika nilai >= 75
//       - "TIDAK LULUS" jika < 75
// PETUNJUK: Loop + If + ubah object
// KONSEP: Array of Objects, For Loop, If Else
function latihanObj_4() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 4.5 (Level: Aplikatif) ---
// SOAL: Buat program sederhana "Kontak":
//       - Simpan kontak (nama, telepon, email)
//       - Fungsi cari kontak berdasarkan nama
//       - Tampilkan hasil pencarian
// PETUNJUK: Gunakan array of objects + loop + if
// KONSEP: Object, Array, For Loop, If
function latihanObj_5() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 4.6 (Level: Challenge) ---
// SOAL: Dari array siswa [{ nama, kelas, nilai }]:
//       Kelompokkan siswa berdasarkan KELAS:
//       { "1A": [...], "1B": [...], "2A": [...] }
// PETUNJUK: Gunakan object kosong sebagai penampung, cek apakah key sudah ada
// KONSEP: Array of Objects, Object, For Loop, If
function latihanObj_6() {
  // TULIS KODEMU DI SINI
}

/* =========================================================================
   BAGIAN 5 — SPREAD OPERATOR (...) "Menyebar" Isi Array/Object
   =========================================================================

   KONSEP:
   - ... (spread) artinya "sebar isinya"
   - Copy array: [...array]
   - Copy object: { ...object }
   - Gabung array: [...a, ...b]
   - Gabung object: { ...a, ...b }
   - Spread membuat SALINAN, data asli tidak berubah
   ========================================================================= */

// --- LATIHAN 5.1 (Level: Pemula) ---
// SOAL: Buat array [1, 2, 3], copy ke array baru
//       Tambah 4 ke array baru
//       Buktikan array asli TIDAK berubah
// PETUNJUK: Gunakan [...array] untuk copy
// KONSEP: Spread Operator
function latihanSpread_1() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 5.2 (Level: Pemula) ---
// SOAL: Gabungkan array buah ["apel", "mangga"] dengan ["jeruk", "pisang"]
//       Cetak hasilnya
// PETUNJUK: [...a, ...b]
// KONSEP: Spread Operator
function latihanSpread_2() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 5.3 (Level: Sedang) ---
// SOAL: Buat object user { nama: "Budi", umur: 17 }
//       Buat object baru dengan semua data user + tambah "role: 'admin'"
//       Data user asli TIDAK boleh berubah
// PETUNJUK: { ...user, role: "admin" }
// KONSEP: Spread Operator Object
function latihanSpread_3() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 5.4 (Level: Sedang) ---
// SOAL: Gabungkan 2 object:
//       base = { a: 1, b: 2 }
//       tambahan = { b: 99, c: 3 }
//       Cetak hasilnya (b harus bernilai 99, bukan 2)
// PETUNJUK: Object di belakang menimpa yang di depan
// KONSEP: Spread Operator Object
function latihanSpread_4() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 5.5 (Level: Aplikatif) ---
// SOAL: Buat array [1, 2, 3], lalu:
//       - Buat array baru tanpa elemen pertama
//       - Buat array baru tanpa elemen terakhir
//       - Buat array baru dengan tambahan 0 di awal dan 4 di akhir
// PETUNJUK: Gabungkan spread dengan slice
// KONSEP: Spread Operator, Array
function latihanSpread_5() {
  // TULIS KODEMU DI SINI
}

/* =========================================================================
   BAGIAN 6 — DESTRUCTURING (Mengambil Nilai Langsung ke Variabel)
   =========================================================================

   KONSEP:
   - Destructuring = cara singkat mengambil nilai dari array/object
   - Array: const [a, b, c] = array
   - Object: const { nama, umur } = object
   - Bisa skip elemen array: const [a, , c] = array
   - Bisa ganti nama: const { nama: n } = object
   - Bisa kasih default: const { umur = 0 } = object
   ========================================================================= */

// --- LATIHAN 6.1 (Level: Pemula) ---
// SOAL: Dari array ["Merah", "Hijau", "Biru"]
//       Ambil warna pertama dan ketiga ke variabel berbeda
//       Cetak hasilnya
// PETUNJUK: const [pertama, , ketiga] = array
// KONSEP: Destructuring Array
function latihanDest_1() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 6.2 (Level: Pemula) ---
// SOAL: Dari object { nama: "Andi", umur: 20, kota: "Bandung" }
//       Ambil hanya nama dan kota ke variabel
//       Cetak: "Andi tinggal di Bandung"
// PETUNJUK: const { nama, kota } = object
// KONSEP: Destructuring Object
function latihanDest_2() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 6.3 (Level: Sedang) ---
// SOAL: Buat fungsi yang menerima object { nama, nilai }
//       Destructuring langsung di parameter
//       Kembalikan string: "[nama] dapat nilai [nilai]"
// PETUNJUK: function cetakNilai({ nama, nilai }) { ... }
// KONSEP: Destructuring di Parameter
function latihanDest_3(data) {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 6.4 (Level: Sedang) ---
// SOAL: Dari array [10, 20, 30, 40, 50]
//       Ambil elemen ke-1, ke-3, ke-5 (skip yang lain)
// PETUNJUK: const [a, , b, , c] = array
// KONSEP: Destructuring Array, Skip
function latihanDest_4() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 6.5 (Level: Aplikatif) ---
// SOAL: Dari object { nama: "Budi" } (tidak ada property "umur")
//       Destructuring dengan default value untuk umur (default: 0)
//       Cetak hasilnya
// PETUNJUK: const { nama, umur = 0 } = object
// KONSEP: Destructuring, Default Value
function latihanDest_5() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 6.6 (Level: Challenge) ---
// SOAL: Gabungkan spread + destructuring:
//       Buat object { nama: "Siti", umur: 17 }
//       Tambah property "kota: Surabaya"
//       Lalu destructuring untuk ambil nama dan kota
//       Cetak: "Siti dari Surabaya"
// PETUNJUK: { ...obj, prop: val } lalu destructuring
// KONSEP: Spread + Destructuring
function latihanDest_6() {
  // TULIS KODEMU DI SINI
}

/* =========================================================================
   BAGIAN 7 — MAP (Ubah Tiap Elemen Menjadi Nilai Baru)
   =========================================================================

   KONSEP:
   - .map() membuat array BARU dengan jumlah elemen SAMA
   - Setiap elemen diubah berdasarkan fungsi yang diberikan
   - WAJIB return nilai baru
   - Data asli TIDAK berubah
   - array.map(item => item * 2)
   ========================================================================= */

// --- LATIHAN 7.1 (Level: Pemula) ---
// SOAL: Kalikan semua angka dalam [1, 2, 3, 4] dengan 2
//       Cetak array asli dan array hasil
// PETUNJUK: array.map(x => x * 2)
// KONSEP: Map
function latihanMap_1() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 7.2 (Level: Pemula) ---
// SOAL: Ubah array angka [5000, 12000, 3000] menjadi format rupiah
//       ["Rp. 5.000", "Rp. 12.000", "Rp. 3.000"]
// PETUNJUK: Gunakan template string dan toLocaleString("id-ID")
// KONSEP: Map, Template String
function latihanMap_2() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 7.3 (Level: Sedang) ---
// SOAL: Dari array siswa [{ nama, nilai }]:
//       Buat array baru berisi hanya NAMA siswa
// PETUNJUK: s => s.nama
// KONSEP: Map, Array of Objects
function latihanMap_3() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 7.4 (Level: Sedang) ---
// SOAL: Dari array angka [1, 2, 3, 4, 5]:
//       Buat array baru berisi kuadrat setiap angka
//       [1, 4, 9, 16, 25]
// PETUNJUK: x => x * x atau x => x ** 2
// KONSEP: Map, Math
function latihanMap_4() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 7.5 (Level: Aplikatif) ---
// SOAL: Dari array angka [1, 2, 3, 4, 5, 6]:
//       Buat array baru berisi "GENAP" atau "GANJIL" untuk setiap angka
// PETUNJUK: Gunakan ternary operator dengan modulo
// KONSEP: Map, If/Else (Ternary)
function latihanMap_5() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 7.6 (Level: Challenge) ---
// SOAL: Dari array siswa [{ nama, nilai }]:
//       Buat array baru dengan format: "Nama: [nama] | Nilai: [nilai]"
//       Tambahkan property "grade" (A/B/C) ke setiap object
// PETUNJUK: Gunakan spread + if/else di dalam map
// KONSEP: Map, Spread, If/Else
function latihanMap_6() {
  // TULIS KODEMU DI SINI
}

/* =========================================================================
   BAGIAN 8 — FILTER (Ambil Hanya Yang Memenuhi Syarat)
   =========================================================================

   KONSEP:
   - .filter() membuat array BARU yang lebih KECIL atau SAMA
   - Hanya elemen yang return true akan diambil
   - Data asli TIDAK berubah
   - array.filter(x => x > 3)
   ========================================================================= */

// --- LATIHAN 8.1 (Level: Pemula) ---
// SOAL: Dari array [1, 2, 3, 4, 5, 6]:
//       Ambil hanya angka GENAP
// PETUNJUK: x => x % 2 === 0
// KONSEP: Filter, Modulo
function latihanFilter_1() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 8.2 (Level: Pemula) ---
// SOAL: Dari array [80, 50, 90, 65, 75, 40]:
//       Ambil hanya angka yang >= 75 (lulus)
// PETUNJUK: n => n >= 75
// KONSEP: Filter, Perbandingan
function latihanFilter_2() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 8.3 (Level: Sedang) ---
// SOAL: Dari array produk [{ nama, harga }]:
//       Ambil hanya produk dengan harga > 100000
// PETUNJUK: p => p.harga > 100000
// KONSEP: Filter, Array of Objects
function latihanFilter_3() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 8.4 (Level: Sedang) ---
// SOAL: Dari array angka [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
//       Ambil angka yang habis dibagi 3
// PETUNJUK: x => x % 3 === 0
// KONSEP: Filter, Modulo
function latihanFilter_4() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 8.5 (Level: Aplikatif) ---
// SOAL: Dari array kata ["apel", "mangga", "anggur", "jeruk", "alpukat"]:
//       Ambil kata yang MULAI dengan huruf "a" atau "A"
// PETUNJUK: Gunakan .startsWith() atau .charAt(0)
// KONSEP: Filter, String Method
function latihanFilter_5() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 8.6 (Level: Challenge) ---
// SOAL: Dari array angka [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]:
//       Ambil angka yang PRIMA saja
// PETUNJUK: Buat fungsi cek prima, lalu gunakan di filter
// KONSEP: Filter, Function Helper
function latihanFilter_6() {
  // TULIS KODEMU DI SINI
}

/* =========================================================================
   BAGIAN 9 — REDUCE (Gabungkan Semua Elemen Jadi Satu Nilai)
   =========================================================================

   KONSEP:
   - .reduce() mengubah array menjadi SATU nilai
   - array.reduce((akumulator, item) => { ... }, nilaiAwal)
   - akumulator (acc): hasil sementara yang ditumpuk
   - WAJIB return acc yang diperbarui
   - Berguna untuk: total, rata-rata, frekuensi, grouping
   ========================================================================= */

// --- LATIHAN 9.1 (Level: Pemula) ---
// SOAL: Jumlahkan semua angka dalam [10, 20, 30, 40, 50]
// PETUNJUK: (acc, item) => acc + item, 0
// KONSEP: Reduce, Akumulasi
function latihanReduce_1() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 9.2 (Level: Sedang) ---
// SOAL: Hitung rata-rata dari [85, 90, 78, 92, 88]
// PETUNJUK: Total dibagi panjang array
// KONSEP: Reduce, Akumulasi
function latihanReduce_2() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 9.3 (Level: Sedang) ---
// SOAL: Dari array produk [{ nama, harga }]:
//       Hitung total harga semua produk
// PETUNJUK: (acc, p) => acc + p.harga, 0
// KONSEP: Reduce, Array of Objects
function latihanReduce_3() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 9.4 (Level: Aplikatif) ---
// SOAL: Dari array ["apel", "mangga", "apel", "jeruk", "mangga", "apel"]:
//       Hitung FREKUENSI kemunculan setiap buah
//       Hasil: { apel: 3, mangga: 2, jeruk: 1 }
// PETUNJUK: acc[item] = (acc[item] || 0) + 1
// KONSEP: Reduce, Object
function latihanReduce_4() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 9.5 (Level: Aplikatif) ---
// SOAL: Dari array angka [1, 2, 3, 4, 5]:
//       Cari angka TERBESAR tanpa Math.max
// PETUNJUK: Bandingkan acc dengan item
// KONSEP: Reduce, Perbandingan
function latihanReduce_5() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 9.6 (Level: Challenge) ---
// SOAL: Dari array siswa [{ nama, kelas, nilai }]:
//       Kelompokkan berdasarkan KELAS menggunakan reduce
//       { "1A": [{...}], "1B": [{...}] }
// PETUNJUK: Buat object kosong, cek apakah key sudah ada
// KONSEP: Reduce, Grouping
function latihanReduce_6() {
  // TULIS KODEMU DI SINI
}

/* =========================================================================
   BAGIAN 10 — ASYNC / AWAIT (Menunggu Proses yang Butuh Waktu)
   =========================================================================

   KONSEP:
   - Async/Await untuk menangani operasi asynchronous
   - Promise = janji nilai akan datang nanti
   - async = tanda fungsi bisa menunggu promise
   - await = berhenti sampai promise selesai
   - await HANYA boleh di dalam fungsi async
   ========================================================================= */

// Helper: membuat Promise yang selesai setelah 'ms' milidetik
const tunggu = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// --- LATIHAN 10.1 (Level: Pemula) ---
// SOAL: Buat fungsi async yang:
//       1. Cetak "Mulai..."
//       2. Tunggu 1 detik
//       3. Cetak "Selesai!"
// PETUNJUK: Gunakan await tunggu(1000)
// KONSEP: Async/Await
async function latihanAsync_1() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 10.2 (Level: Sedang) ---
// SOAL: Buat Promise yang mengembalikan data user setelah 500ms:
//       { id: 1, nama: "Budi", role: "admin" }
//       Lalu await hasilnya dan cetak
// PETUNJUK: new Promise((resolve) => setTimeout(() => resolve(data), ms))
// KONSEP: Promise, Async/Await
async function latihanAsync_2() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 10.3 (Level: Sedang) ---
// SOAL: Jalankan 2 timer BERURUTAN (total 2 detik):
//       - Timer 1: 1 detik, cetak "Langkah 1 selesai"
//       - Timer 2: 1 detik, cetak "Langkah 2 selesai"
// PETUNJUK: 2 await berurutan
// KONSEP: Async/Await Sequential
async function latihanAsync_3() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 10.4 (Level: Aplikatif) ---
// SOAL: Jalankan 2 timer BERSAMAAN (total ~1 detik):
//       - Timer 1: 1 detik
//       - Timer 2: 1 detik
//       Cetak "Selesai bersamaan!"
// PETUNJUK: Promise.all([tunggu(1000), tunggu(1000)])
// KONSEP: Async/Await Parallel
async function latihanAsync_4() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 10.5 (Level: Challenge) ---
// SOAL: Buat program sederhana "Loading":
//       1. Cetak "Loading..."
//       2. Tunggu 2 detik
//       3. Cetak "Data berhasil dimuat!"
//       4. Tunggu 1 detik
//       5. Cetak "Proses selesai!"
// PETUNJUK: Jalankan dengan await di dalam async function
// KONSEP: Async/Await, Sequential
async function latihanAsync_5() {
  // TULIS KODEMU DI SINI
}

/* =========================================================================
   BAGIAN 11 — FUNCTION (Membungkus Kode untuk Dipakai Ulang)
   =========================================================================

   KONSEP:
   - Function adalah blok kode yang bisa DIPANGGIL ulang
   - Bisa menerima INPUT (parameter) dan mengembalikan OUTPUT (return)
   - Types:
     1. Function Declaration: function nama() { ... }
     2. Function Expression: const nama = function() { ... }
     3. Arrow Function: const nama = () => { ... }
   - Parameter: input yang didefinisikan saat deklarasi
   - Argument: input yang dikirim saat pemanggilan
   - Return: mengembalikan nilai dari function
   - Scope: variabel hanya bisa diakses di dalam scope-nya
   ========================================================================= */

// --- LATIHAN 11.1 (Level: Pemula) ---
// SOAL: Buat function `sapa(nama)` yang:
//       - Menerima parameter "nama"
//       - Mengembalikan string "Halo, [nama]!"
//       Coba panggil dengan beberapa nama
// PETUNJUK: function sapa(nama) { return `Halo, ${nama}!` }
// KONSEP: Function Declaration, Parameter, Return
function latihanFunc_1() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 11.2 (Level: Pemula) ---
// SOAL: Buat function `tambah(a, b)` yang mengembalikan hasil penjumlahan
//       Gunakan 3 cara:
//       1. Function Declaration
//       2. Function Expression
//       3. Arrow Function
// PETUNJUK: const tambah = (a, b) => a + b;
// KONSEP: 3 Cara Deklarasi Function
function latihanFunc_2() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 11.3 (Level: Sedang) ---
// SOAL: Buat function `cekGenapGanjil(angka)` yang:
//       - Mengembalikan "GENAP" jika angka genap
//       - Mengembalikan "GANJIL" jika angka ganjil
//       Gunakan ternary operator
// PETUNJUK: return angka % 2 === 0 ? "GENAP" : "GANJIL";
// KONSEP: Function, Return, Ternary
function latihanFunc_3() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 11.4 (Level: Sedang) ---
// SOAL: Buat function `hitungLuasPersegiPanjang(panjang, lebar)`:
//       - Parameter default: panjang = 10, lebar = 5
//       - Mengembalikan luas (panjang × lebar)
//       Coba panggil tanpa argument, dengan 1 argument, dan dengan 2 argument
// PETUNJUK: function hitungLuas(panjang = 10, lebar = 5) { ... }
// KONSEP: Function, Default Parameter
function latihanFunc_4() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 11.5 (Level: Sedang) ---
// SOAL: Buat function `cetakArray(arr)` yang:
//       - Menerima array
//       - Mencetak setiap elemen dalam format: "Item 1: [nilai]"
//       - Tidak mengembalikan apa-apa (void)
// PETUNJUK: Gunakan for loop, tidak perlu return
// KONSEP: Function, Parameter, Console.log
function latihanFunc_5() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 11.6 (Level: Sedang) ---
// SOAL: Buat function `ambilYangLulus(siswa, batas)` yang:
//       - Menerima array siswa [{ nama, nilai }] dan batas nilai
//       - Mengembalikan array nama siswa yang nilainya >= batas
//       Contoh: ambilYangLulus([{nama:"Budi",nilai:80}], 75) → ["Budi"]
// PETUNJUK: Filter lalu map
// KONSEP: Function, Return, Array Methods
function latihanFunc_6() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 11.7 (Level: Aplikatif) ---
// SOAL: Buat function `formatRupiah(angka)` yang:
//       - Mengkonversi angka ke format rupiah
//       - 15000 → "Rp. 15.000"
//       - 1250000 → "Rp. 1.250.000"
// PETUNJUK: Gunakan toLocaleString("id-ID") atau manipulasi string
// KONSEP: Function, String/Number Method
function latihanFunc_7() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 11.8 (Level: Aplikatif) ---
// SOAL: Buat function `generatePassword(n)` yang:
//       - Menerima panjang password (n)
//       - Mengembalikan password acak dari huruf dan angka
//       - Contoh: generatePassword(8) → "a3k9x2m1"
// PETUNJUK: Gunakan karakter string + loop + Math.random()
// KONSEP: Function, Loop, Math, String
function latihanFunc_8() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 11.9 (Level: Challenge) ---
// SOAL: Buat function `fizzBuzz(n)` yang mengembalikan array dari 1 sampai n:
//       - Jika habis dibagi 3: "Fizz"
//       - Jika habis dibagi 5: "Buzz"
//       - Jika habis dibagi 3 dan 5: "FizzBuzz"
//       - Jika tidak: angka itu sendiri
//       Contoh: fizzBuzz(5) → [1, 2, "Fizz", 4, "Buzz"]
// PETUNJUK: Gunakan loop + if-else if-else
// KONSEP: Function, Loop, If Else
function latihanFunc_9() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 11.10 (Level: Challenge) ---
// SOAL: Buat function `cekPalindrom(kata)` yang:
//       - Mengembalikan true jika kata adalah palindrom
//       - Mengembalikan false jika bukan
//       - "katak" → true, "javascript" → false
// PETUNJUK: Balik string, bandingkan dengan asli
// KONSEP: Function, String Method, Return Boolean
function latihanFunc_10() {
  // TULIS KODEMU DI SINI
}

/* =========================================================================
   BAGIAN 12 — CHAINING (Menggabungkan Banyak Metode)
   =========================================================================

   KONSEP:
   - Chaining = menggabungkan map, filter, reduce dalam 1 ekspresi
   - Urutan penting: filter → map → reduce (atau sesuai kebutuhan)
   - Membuat kode lebih ringkas dan efisien
   - array.filter(...).map(...).reduce(...)
   ========================================================================= */

// --- LATIHAN 12.1 (Level: Sedang) ---
// SOAL: Dari array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
//       1. Filter: ambil yang genap
//       2. Map: kalikan dengan 3
//       3. Cetak hasilnya
// PETUNJUK: arr.filter(...).map(...)
// KONSEP: Chaining (Filter + Map)
function latihanChain_1() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 12.2 (Level: Sedang) ---
// SOAL: Dari array siswa [{ nama, nilai }]:
//       1. Filter: ambil yang lulus (nilai >= 75)
//       2. Map: ambil nama saja
//       3. Cetak array nama
// PETUNJUK: arr.filter(...).map(s => s.nama)
// KONSEP: Chaining (Filter + Map + Array of Objects)
function latihanChain_2() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 12.3 (Level: Aplikatif) ---
// SOAL: Dari array produk [{ nama, harga, stok }]:
//       1. Filter: ambil yang stok > 0
//       2. Map: format "Nama: [nama] | Harga: Rp. [harga]"
//       3. Cetak hasilnya
// PETUNJUK: filter → map → forEach atau console.log
// KONSEP: Chaining + Template String
function latihanChain_3() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 12.4 (Level: Aplikatif) ---
// SOAL: Dari array angka [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
//       1. Filter: ambil yang genap
//       2. Map: kuadratkan
//       3. Reduce: jumlahkan semua
//       4. Return total
// PETUNJUK: filter → map → reduce
// KONSEP: Chaining Full
function latihanChain_4() {
  // TULIS KODEMU DI SINI
}

// --- LATIHAN 12.5 (Level: Challenge) ---
// SOAL: Dari array siswa [{ nama, kelas, nilai }]:
//       1. Filter: ambil yang kelas "1A"
//       2. Map: ambil object { nama, nilai }
//       3. Reduce: hitung rata-rata nilai
//       4. Return rata-rata
// PETUNJUK: filter → map → reduce (total / panjang)
// KONSEP: Chaining + Logic
function latihanChain_5() {
  // TULIS KODEMU DI SINI
}

/* =========================================================================
   CARA MENJALANKAN LATIHAN
   =========================================================================
   Uncomment fungsi yang ingin dijalankan di bawah ini,
   lalu jalankan: node latihan-dasar.js
   ========================================================================= */

console.log("===========================================");
console.log("LATIHAN DASAR JAVASCRIPT");
console.log("============================================");
console.log("");

// Array
// latihanArray_1();
// latihanArray_2();
// latihanArray_3();
// latihanArray_4();
// latihanArray_5();
// latihanArray_6();

// For Loop
// latihanFor_1();
// latihanFor_2();
// latihanFor_3();
// latihanFor_4();
// latihanFor_5();
// latihanFor_6();

// For Loop + If Else
// latihanForIf_1();
// latihanForIf_2();
// latihanForIf_3();
// latihanForIf_4();
// latihanForIf_5();
// latihanForIf_6();

// Object
// latihanObj_1();
// latihanObj_2();
// latihanObj_3();
// latihanObj_4();
// latihanObj_5();
// latihanObj_6();

// Spread
// latihanSpread_1();
// latihanSpread_2();
// latihanSpread_3();
// latihanSpread_4();
// latihanSpread_5();

// Destructuring
// latihanDest_1();
// latihanDest_2();
// latihanDest_3(data);
// latihanDest_4();
// latihanDest_5();
// latihanDest_6();

// Map
// latihanMap_1();
// latihanMap_2();
// latihanMap_3();
// latihanMap_4();
// latihanMap_5();
// latihanMap_6();

// Filter
// latihanFilter_1();
// latihanFilter_2();
// latihanFilter_3();
// latihanFilter_4();
// latihanFilter_5();
// latihanFilter_6();

// Reduce
// latihanReduce_1();
// latihanReduce_2();
// latihanReduce_3();
// latihanReduce_4();
// latihanReduce_5();
// latihanReduce_6();

// Async/Await
// (async () => {
//   await latihanAsync_1();
//   await latihanAsync_2();
//   await latihanAsync_3();
//   await latihanAsync_4();
//   await latihanAsync_5();
// })();

// Function
// latihanFunc_1();
// latihanFunc_2();
// latihanFunc_3();
// latihanFunc_4();
// latihanFunc_5();
// latihanFunc_6();
// latihanFunc_7();
// latihanFunc_8();
// latihanFunc_9();
// latihanFunc_10();

// Chaining
// latihanChain_1();
// latihanChain_2();
// latihanChain_3();
// latihanChain_4();
// latihanChain_5();

console.log("");
console.log("===========================================");
console.log("SELESAI! Kerjakan latihan di atas.");
console.log("Gunakan framework di ALGORITMA-PEMECAHAN-MASALAH.md");
console.log("===========================================");

/* =========================================================================
   SELESAI 🎉
   =========================================================================
   Total Latihan:
   - Array: 6 latihan
   - For Loop: 6 latihan
   - For Loop + If Else: 6 latihan
   - Object: 6 latihan
   - Spread: 5 latihan
   - Destructuring: 6 latihan
   - Map: 6 latihan
   - Filter: 6 latihan
   - Reduce: 6 latihan
   - Async/Await: 5 latihan
   - Function: 10 latihan
   - Chaining: 5 latihan
   ─────────────────────────────
   TOTAL: 73 latihan!

   Gunakan 7 LANGKAH UNIVERSAL untuk setiap latihan:
   1. Pahami masalahnya
   2. Bedah masalahnya
   3. Tentukan strategi
   4. Tulis pseudo-code
   5. Uji manual
   6. Tulis kode
   7. Verifikasi

   Semangat belajar! 💪
   ========================================================================= */
