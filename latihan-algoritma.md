# Latihan Algoritma: Simulasi CRUD dan Manipulasi Data Spreadsheet Apps Script dalam JavaScript

## BAB 0: FUNDAMENTAL MODERN JAVASCRIPT (Wajib Dikuasai)

Sebelum masuk ke simulasi Spreadsheet, kita harus menguasai "senjata" utama JavaScript modern. Tanpa memahami ini, kode kita akan panjang, berantakan, dan sulit dibaca.

Kita akan membahas pilar-pilar utama:
1.  **Manipulasi Array Tingkat Tinggi** (`.map`, `.filter`, `.reduce`).
2.  **Conditional Logic** (statements `if`, `else if`, `else`, operator ternary).
3.  **Loops** (for, while, for...of).
4.  **Asynchronous Programming** (`Promise`, `async`, `await`) untuk interaksi antarmuka (DOM).
5.  **Variables and Scoping** (`var`, `let`, `const`, hoisting, scope chains).
6.  **Functions** (function declarations, expressions, arrow functions, closures).
7.  **Objects and Prototypes** (object literals, constructors, prototypes, inheritance).
8.  **Error Handling** (try/catch/finally, custom errors, debugging).
9.  **Destructuring and Spread Operator** (extracting values, spreading arrays/objects).
10. **Template Literals and String Methods** (template strings, string manipulation).
11. **Modules and Import/Export** (ES6 modules, importing/exporting functionality).

---

### BAGIAN A: Trio Ajaib Manipulasi Array (Map, Filter, Reduce)

Bayangkan Array adalah sebuah **Kereta Barang** yang membawa banyak kotak. Kita punya tiga jenis robot untuk memproses kotak-kotak ini.

#### 1. `.map()` - Robot Transformasi (Ubah Bentuk)

**Konsep:**
`map` digunakan ketika kamu ingin mengubah **setiap item** dalam array menjadi bentuk lain, tetapi **jumlah itemnya tetap sama**.

*   **Analogy:** Kamu punya 10 kentang mentah. Masuk ke mesin `.map(goreng)`, keluarnya 10 kentang goreng. Jumlahnya tetap 10, tapi bentuknya berubah.
*   **Rumus:** `Array Lama (Panjang N)` -> `Array Baru (Panjang N)`

**Contoh Dasar:**
Kita ingin mengalikan semua angka dengan 2.

```javascript
const angka = [1, 2, 3, 4, 5];

// Cara Kuno (For Loop)
let hasilKuno = [];
for (let i = 0; i < angka.length; i++) {
  hasilKuno.push(angka[i] * 2);
}

// Cara Modern (.map)
// "Ambil setiap 'item', lalu kembalikan 'item * 2'"
const hasilMap = angka.map(item => item * 2);

console.log(hasilMap); // Output: [2, 4, 6, 8, 10]
```

**Latihan 0.1 (Map):**
Diberikan data harga dalam Rupiah, ubah menjadi format string dengan prefix "Rp.".
```javascript
const harga = [5000, 12000, 3000];

// TUGAS: Gunakan .map() agar output menjadi ["Rp. 5000", "Rp. 12000", "Rp. 3000"]
const hargaFormat = harga.map(h => `Rp. ${h}`); 
console.log(hargaFormat);
```

---

#### 2. `.filter()` - Robot Seleksi (Penyaring)

**Konsep:**
`filter` digunakan ketika kamu ingin mengambil **sebagian item** yang memenuhi syarat tertentu. Jumlah item bisa berkurang.

*   **Analogy:** Kamu punya 10 buah (apel merah, apel hijau, jeruk). Masuk saringan `.filter(hanyaApelMerah)`, keluarnya cuma 3 apel merah. Sisanya dibuang.
*   **Rumus:** `Array Lama (Panjang N)` -> `Array Baru (Panjang <= N)`

**Contoh Dasar:**
Kita ingin mencari angka genap saja.

```javascript
const angka = [1, 2, 3, 4, 5, 6];

// Cara Modern (.filter)
// "Ambil 'item', jika (item % 2 === 0) simpan, jika tidak buang."
const genap = angka.filter(item => item % 2 === 0);

console.log(genap); // Output: [2, 4, 6]
```

**Latihan 0.2 (Filter):**
Diberikan daftar nilai siswa, ambil hanya yang lulus (nilai >= 75).
```javascript
const nilaiSiswa = [80, 50, 90, 65, 75, 40];

// TUGAS: Gunakan .filter()
const lulus = nilaiSiswa.filter(n => n >= 75);
console.log(lulus); // Output harus: [80, 90, 75]
```

---

#### 3. `.reduce()` - Robot Penggabung (Akumulator)

**Konsep:**
`reduce` adalah yang paling powerful (dan sering membingungkan). Ia digunakan untuk **merangkum** seluruh array menjadi **satu nilai tunggal** (bisa berupa angka, string, object, atau array baru).

*   **Analogy:** Kamu belanja di kasir.
    1.  Kasir mulai dengan total Rp 0 (Nilai Awal).
    2.  Ambil barang pertama (Rp 5.000), total jadi Rp 5.000.
    3.  Ambil barang kedua (Rp 10.000), total jadi Rp 15.000.
    4.  Hasil akhirnya adalah satu struk total belanja.

**Sintaks:**
```javascript
array.reduce((totalSementara, itemSaatIni) => {
  return totalSementara + itemSaatIni;
}, nilaiAwal);
```

**Contoh Dasar:**
Menjumlahkan total angka.

```javascript
const angka = [10, 20, 30];

// total: akumulator (celengan)
// item: angka yang sedang diproses
const total = angka.reduce((celengan, item) => {
  return celengan + item;
}, 0); // 0 adalah nilai awal celengan

console.log(total); // Output: 60
```

**Latihan 0.3 (Reduce):**
Hitung total gaji guru dari array object.
```javascript
const gajiGuru = [
  { nama: "Budi", gaji: 3000000 },
  { nama: "Siti", gaji: 4000000 },
  { nama: "Joko", gaji: 3500000 }
];

// TUGAS: Gunakan .reduce() untuk menghitung total gaji
const totalGaji = gajiGuru.reduce((total, guru) => {
    return total + guru.gaji;
}, 0);

console.log(totalGaji); // Output harus: 10500000
```

---

#### 4. Chaining (Menggabungkan Jurus)

Kekuatan sebenarnya muncul saat kita menggabungkan ketiganya.

**Skenario:**
Dari data guru, kita ingin:
1.  Hanya ambil guru yang gajinya di bawah 4 juta (**Filter**).
2.  Naikkan gaji mereka sebesar 10% (**Map**).
3.  Hitung total pengeluaran sekolah untuk kenaikan gaji ini (**Reduce**).

```javascript
const dataGuru = [
  { nama: "A", gaji: 3000000 },
  { nama: "B", gaji: 5000000 },
  { nama: "C", gaji: 3500000 }
];

const totalAnggaran = dataGuru
  .filter(guru => guru.gaji < 4000000)        // 1. Saring: Sisa A dan C
  .map(guru => guru.gaji * 0.1)               // 2. Ubah: Ambil 10% nya saja (300rb, 350rb)
  .reduce((total, kenaikan) => total + kenaikan, 0); // 3. Jumlahkan: 650rb

console.log("Total Anggaran Kenaikan:", totalAnggaran); // 650000
```

### Latihan Fungsi Orde-Tinggi Tambahan

Berikut adalah beberapa latihan tambahan untuk memperkuat pemahaman Anda tentang fungsi orde-tinggi:

**Latihan: Latihan Map**
Transformasikan array objek siswa untuk mendapatkan hanya namanya saja.

```javascript
const siswa = [
  { nama: "Alice", nilai: 85 },
  { nama: "Bob", nilai: 92 },
  { nama: "Charlie", nilai: 78 }
];

const namaSiswa = siswa.map(siswa => siswa.nama);
console.log(namaSiswa); // ["Alice", "Bob", "Charlie"]
```

**Latihan: Latihan Filter**
Filter siswa yang nilainya di atas 80.

```javascript
const siswa = [
  { nama: "Alice", nilai: 85 },
  { nama: "Bob", nilai: 92 },
  { nama: "Charlie", nilai: 78 },
  { nama: "Diana", nilai: 88 }
];

const siswaBerprestasi = siswa.filter(siswa => siswa.nilai > 80);
console.log(siswaBerprestasi);
// [{ nama: "Alice", nilai: 85 }, { nama: "Bob", nilai: 92 }, { nama: "Diana", nilai: 88 }]
```

**Latihan: Latihan Reduce**
Temukan nilai tertinggi di antara siswa.

```javascript
const siswa = [
  { nama: "Alice", nilai: 85 },
  { nama: "Bob", nilai: 92 },
  { nama: "Charlie", nilai: 78 },
  { nama: "Diana", nilai: 88 }
];

const nilaiTertinggi = siswa.reduce((maks, siswa) => {
  return siswa.nilai > maks ? siswa.nilai : maks;
}, 0);

console.log(nilaiTertinggi); // 92
```

**Latihan Tambahan Fungsi Orde-Tinggi**

**Latihan 4: Analisis Data Mahasiswa**
Diberikan array objek mahasiswa dengan properti nama, jurusan, dan IPK. Buat fungsi yang:
1. Menghitung rata-rata IPK mahasiswa TI
2. Menemukan mahasiswa dengan IPK tertinggi
3. Mengembalikan daftar nama mahasiswa TI dengan IPK di atas 3.5

**Petunjuk:**
1. Buat fungsi bernama `analisisMahasiswa` yang menerima array mahasiswa
2. Gunakan filter untuk mendapatkan hanya mahasiswa TI
3. Gunakan reduce untuk menghitung rata-rata IPK dari mahasiswa TI
4. Gunakan reduce untuk menemukan mahasiswa dengan IPK tertinggi
5. Gunakan filter dan map untuk mendapatkan nama mahasiswa TI dengan IPK > 3.5
6. Kembalikan objek dengan ketiga hasil tersebut

**Latihan 5: Pengolahan Data Penjualan**
Diberikan array objek penjualan dengan properti produk, harga, jumlah, dan tanggal. Buat fungsi yang:
1. Menghitung total pendapatan
2. Mengelompokkan penjualan berdasarkan bulan
3. Menemukan produk terlaris (berdasarkan jumlah terjual)

**Petunjuk:**
1. Buat fungsi bernama `olahDataPenjualan` yang menerima array penjualan
2. Gunakan reduce untuk menghitung total pendapatan (harga * jumlah untuk setiap penjualan)
3. Gunakan reduce untuk mengelompokkan penjualan berdasarkan bulan (ekstrak bulan dari tanggal)
4. Gunakan reduce untuk menghitung total jumlah terjual per produk, lalu temukan produk dengan jumlah tertinggi
5. Kembalikan objek dengan ketiga hasil tersebut

---

## Promise

### Memahami Promise

Promise adalah objek yang mewakili penyelesaian (atau kegagalan) dari sebuah operasi asynchronous dan nilainya. Promise sangat penting dalam pemrograman JavaScript modern karena banyak API asynchronous mengembalikan Promise.

Promise memiliki tiga status:
- Pending: Status awal, belum selesai atau gagal
- Fulfilled: Operasi selesai dengan sukses
- Rejected: Operasi gagal

### Membuat Promise

```javascript
// Membuat promise sederhana
const myPromise = new Promise((resolve, reject) => {
  // Simulasikan operasi asynchronous
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("Operasi berhasil!");
    } else {
      reject("Operasi gagal!");
    }
  }, 1000);
});

// Menggunakan promise
myPromise
  .then(result => {
    console.log(result); // Akan mencetak "Operasi berhasil!" jika sukses
  })
  .catch(error => {
    console.error(error); // Akan mencetak "Operasi gagal!" jika gagal
  });
```

**Penjabaran langkah demi langkah:**
1. Buat Promise baru dengan constructor `new Promise()`
2. Constructor menerima fungsi executor dengan parameter `resolve` dan `reject`
3. Dalam executor, lakukan operasi asynchronous
4. Panggil `resolve(value)` jika operasi sukses
5. Panggil `reject(error)` jika operasi gagal
6. Gunakan `.then()` untuk menangani hasil sukses
7. Gunakan `.catch()` untuk menangani kesalahan

### Metode-Metode Promise

#### 1. Promise.all()
Menjalankan beberapa promise secara paralel dan menunggu semua selesai.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // [3, 42, "foo"]
});
```

#### 2. Promise.race()
Mengembalikan promise yang selesai pertama.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(value => {
  console.log(value); // "two" - karena selesai lebih cepat
});
```

#### 3. Promise.allSettled()
Menunggu semua promise selesai (baik sukses maupun gagal).

```javascript
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).then(results => {
  results.forEach(result => console.log(result.status));
  // "fulfilled"
  // "rejected"
});
```

### Latihan Promise

Berikut adalah beberapa latihan untuk memperkuat pemahaman Anda tentang Promise:

**Latihan 1: Promise Dasar**
Buat sebuah promise yang menyelesaikan setelah 2 detik dan mengembalikan pesan "Hello World".

**Petunjuk:**
1. Buat promise baru menggunakan `new Promise()`
2. Dalam executor function, gunakan `setTimeout` untuk menunda penyelesaian
3. Setelah 2 detik, panggil `resolve` dengan pesan "Hello World"
4. Gunakan `.then()` untuk mencetak hasilnya

**Latihan 2: Promise dengan Kondisi**
Buat sebuah promise yang secara acak menentukan apakah operasi berhasil atau gagal.

**Petunjuk:**
1. Dalam executor function, buat variabel boolean acak (gunakan `Math.random()`)
2. Jika hasilnya > 0.5, resolve dengan pesan sukses
3. Jika tidak, reject dengan pesan kesalahan
4. Gunakan `.then()` dan `.catch()` untuk menangani kedua kemungkinan

**Latihan 3: Promise Chain dan Transformasi**
Buat rangkaian promise yang mengubah input angka dengan beberapa operasi.

**Petunjuk:**
1. Buat promise pertama yang mengalikan angka dengan 2
2. Gunakan `.then()` untuk membuat promise kedua yang menambahkan 10
3. Gunakan `.then()` lagi untuk membuat promise ketiga yang membagi dengan 2
4. Tambahkan `.catch()` untuk menangani kesalahan
5. Cetak hasil akhirnya

**Latihan Tambahan Promise**

**Latihan 4: Promise.all untuk Paralelisasi**
Buat beberapa promise yang menyelesaikan setelah durasi berbeda, lalu gunakan `Promise.all` untuk menunggu semua selesai.

**Petunjuk:**
1. Buat 3 promise yang menyelesaikan setelah 1, 2, dan 3 detik
2. Gunakan `Promise.all()` untuk menunggu semua selesai
3. Cetak hasilnya ketika semua promise selesai

**Latihan 5: Manipulasi Spreadsheet dengan Promise**
Buat fungsi yang mengembalikan promise untuk mengambil data dari spreadsheet.

**Petunjuk:**
1. Buat fungsi yang mengembalikan promise
2. Dalam promise, ambil data dari spreadsheet
3. Resolve dengan data yang diambil
4. Gunakan `.then()` untuk memproses data

---

### BAGIAN B: Asynchronous JavaScript & DOM (Async/Await)

JavaScript itu "Single Threaded" (hanya punya satu tangan). Ia tidak bisa melakukan dua hal berat sekaligus. Jika kita menyuruhnya mengambil data dari server (yang butuh waktu 2 detik), dan kita tidak menggunakan teknik Asynchronous, maka **seluruh halaman web akan macet/hang** selama 2 detik itu.

#### 1. Konsep Synchronous vs Asynchronous

*   **Synchronous (Antrian Bank):** Kamu harus menunggu orang di depanmu selesai dilayani, baru kamu maju. Jika orang depan lama, kamu bengong.
*   **Asynchronous (Restoran):** Kamu pesan makanan. Pelayan ke dapur. Kamu **tidak** berdiri diam di kasir menunggu masakan jadi. Kamu duduk, main HP, ngobrol. Nanti kalau makanan jadi, pelayan mengantar (Callback/Promise).

#### 2. Simulasi Server (Promise)

Di dunia nyata, mengambil data (fetch) itu tidak instan. Kita akan mensimulasikan "loading" menggunakan `setTimeout`.

```javascript
// Fungsi ini pura-pura mengambil data dari Google Sheet (butuh waktu 2 detik)
function ambilDataDariServer() {
  return new Promise((resolve, reject) => {
    console.log("⏳ Sedang menghubungi server...");

    setTimeout(() => {
      const sukses = true; // Coba ubah jadi false untuk simulasi error

      if (sukses) {
        const data = ["Guru A", "Guru B", "Guru C"];
        resolve(data); // Janji ditepati, ini datanya
      } else {
        reject("Koneksi Gagal!"); // Janji diingkari, ini errornya
      }
    }, 2000); // Delay 2000ms (2 detik)
  });
}
```

#### 3. Cara Lama vs Cara Baru (`async`/`await`)

Dulu kita pakai `.then()`. Sekarang kita pakai `async/await` yang jauh lebih rapi, seolah-olah kodenya synchronous.

**Aturan Main:**
1.  Kata kunci `await` hanya boleh dipakai di dalam fungsi yang ada label `async`.
2.  `await` artinya: "JavaScript, tolong **berhenti sebentar di baris ini**, tunggu sampai proses ini selesai/datanya sampai, baru lanjut ke baris bawahnya."

```javascript
async function prosesDataAbsensi() {
  console.log("1. Memulai aplikasi...");

  try {
    // JavaScript akan PAUSE di sini selama 2 detik
    // Tapi UI browser TIDAK macet (user masih bisa scroll/klik lain)
    const hasil = await ambilDataDariServer(); 
    
    console.log("2. Data diterima:", hasil);
    console.log("3. Menampilkan ke tabel...");
  } catch (error) {
    // Jika reject() dipanggil, lari ke sini
    console.log("❌ Error:", error);
  }
}

prosesDataAbsensi();
```

#### 4. Integrasi dengan DOM (Latihan Nyata)

Mari kita buat simulasi tombol di HTML yang mengambil data guru.

**Skenario:**
1.  User klik tombol "Load Data".
2.  Teks tombol berubah jadi "Loading...".
3.  Tunggu 2 detik.
4.  Tampilkan data di layar.
5.  Kembalikan teks tombol.

**Kode Simulasi (Copy-Paste ke Console Browser atau File HTML):**

```html
<!-- HTML Sederhana -->
<button id="btn-load">Load Data Guru</button>
<div id="hasil-container"></div>
<div id="error-msg" style="color: red;"></div>

<script>
  // 1. Simulasi API (Backend)
  function apiGetGuru() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulasi random error (20% kemungkinan gagal)
        if (Math.random() > 0.8) {
          reject("Server Timeout (Simulasi Error)");
        } else {
          resolve([
            { id: 1, nama: "Budi Santoso", mapel: "Matematika" },
            { id: 2, nama: "Siti Aminah", mapel: "Biologi" }
          ]);
        }
      }, 1500); // Delay 1.5 detik
    });
  }

  // 2. Logika Frontend (Async/Await)
  const btn = document.getElementById('btn-load');
  const container = document.getElementById('hasil-container');
  const errorDiv = document.getElementById('error-msg');

  btn.addEventListener('click', async function() {
    // A. State Loading (Persiapan)
    btn.disabled = true;           // Matikan tombol biar gak diklik 2x
    btn.innerText = "Loading...";  // Beri feedback visual
    container.innerHTML = "";      // Bersihkan data lama
    errorDiv.innerText = "";       // Bersihkan error lama

    try {
      // B. Proses Asynchronous (Tunggu data)
      const dataGuru = await apiGetGuru(); // <--- PAUSE DI SINI

      // C. State Sukses (Render Data)
      // Menggunakan .map() untuk mengubah object jadi string HTML
      const htmlList = dataGuru
        .map(guru => `<p><b>${guru.nama}</b> - ${guru.mapel}</p>`)
        .join('');
      
      container.innerHTML = htmlList;
      console.log("Data berhasil dimuat!");

    } catch (pesanError) {
      // D. State Error (Penanganan Masalah)
      errorDiv.innerText = "Gagal memuat: " + pesanError;
      console.error(pesanError);

    } finally {
      // E. Cleanup (Selalu dijalankan, sukses atau gagal)
      btn.disabled = false;
      btn.innerText = "Load Data Guru";
    }
  });
</script>
```

**Penjelasan Alur DOM di atas:**
1.  **Event Listener:** Kita pasang "telinga" di tombol. Saat diklik, jalankan fungsi `async`.
2.  **UX (User Experience):** Sebelum `await`, kita ubah UI agar user tahu sistem sedang bekerja (`btn.innerText = "Loading..."`). Ini sangat penting!
3.  **Await:** Browser menunggu Promise `apiGetGuru` selesai.
4.  **Try/Catch:** Menjaga agar jika API error, halaman web tidak crash/putih, tapi menampilkan pesan error yang sopan.
5.  **Finally:** Memastikan tombol kembali aktif, entah prosesnya sukses atau gagal.

### Latihan Async/Await

Berikut adalah beberapa latihan untuk memperkuat pemahaman Anda tentang async/await:

**Latihan 1: Pengambilan Data Berganda**
Buat fungsi async yang mengambil data dari dua API berbeda secara paralel, lalu menggabungkan hasilnya.

**Petunjuk:**
1. Buat fungsi async bernama `ambilDanGabungkanData`
2. Gunakan `Promise.all()` untuk mengambil data dari dua API secara paralel
3. Misalnya, ambil data pengguna dari satu API dan postingan dari API lain
4. Gabungkan data tersebut menjadi satu struktur data
5. Kembalikan hasil penggabungan
6. Tangani kemungkinan kesalahan dari masing-masing API

**Latihan 2: Pengolahan File Async**
Buat fungsi async yang membaca beberapa file teks, menggabungkan isinya, dan menyimpan hasilnya ke file baru.

**Petunjuk:**
1. Buat fungsi async bernama `gabungkanFile`
2. Gunakan fungsi async untuk membaca beberapa file (misalnya, readFile dari fs.promises)
3. Gunakan Promise.all() untuk membaca semua file secara paralel
4. Gabungkan isi file-file tersebut
5. Simpan hasil penggabungan ke file baru
6. Tangani kesalahan jika file tidak ditemukan atau tidak bisa dibaca

**Latihan 3: Queue Proses Async**
Buat fungsi async yang memproses array item secara async satu per satu, tetapi tidak lebih dari 3 item yang diproses bersamaan.

**Petunjuk:**
1. Buat fungsi async bernama `prosesAntrian`
2. Terima array item dan fungsi pemrosesan async
3. Gunakan pendekatan batch untuk membatasi jumlah item yang diproses bersamaan
4. Misalnya, proses maksimal 3 item bersamaan, tunggu sampai selesai, lalu proses 3 berikutnya
5. Kembalikan hasil dari semua item yang telah diproses
6. Pastikan kesalahan pada satu item tidak mengganggu proses item lain

**Latihan Tambahan Async/Await**

**Latihan 4: Sistem Sinkronisasi Data**
Buat fungsi async yang menyinkronkan data antara spreadsheet lokal dan API eksternal.

**Petunjuk:**
1. Buat fungsi async bernama `sinkronisasiData`
2. Ambil data dari spreadsheet lokal
3. Ambil data terbaru dari API eksternal
4. Bandingkan data untuk menentukan perubahan (tambah, ubah, hapus)
5. Gunakan Promise.all untuk memproses sinkronisasi secara efisien
6. Update kedua sisi (spreadsheet dan API) agar konsisten
7. Tangani konflik data jika terjadi

**Latihan 5: Pipeline Pengolahan Data**
Buat fungsi async yang mengolah data melalui beberapa tahapan: pengambilan, pembersihan, transformasi, dan penyimpanan.

**Petunjuk:**
1. Buat fungsi async bernama `pipelinePengolahanData`
2. Buat fungsi-fungsi kecil untuk setiap tahapan: `ambilData`, `bersihkanData`, `transformasiData`, `simpanData`
3. Gunakan async/await untuk menjalankan tahapan secara berurutan
4. Tambahkan logging untuk melacak kemajuan setiap tahapan
5. Gunakan try/catch untuk menangani kesalahan di setiap tahapan
6. Kembalikan ringkasan hasil pengolahan

---

## Variables and Scoping

### Memahami Variables dan Scoping

Variabel adalah tempat penyimpanan data dalam program. Dalam JavaScript, ada tiga cara untuk mendeklarasikan variabel: `var`, `let`, dan `const`, masing-masing dengan perilaku scoping yang berbeda.

**Penting untuk dipahami:**
- **Scope** adalah wilayah atau ruang lingkup di mana sebuah variabel dapat diakses
- **Hoisting** adalah mekanisme JavaScript yang memindahkan deklarasi variabel ke atas scope-nya

### 1. `var` - Function-scoped Variable

**Konsep:**
Variabel yang dideklarasikan dengan `var` memiliki scope fungsional, bukan blok. Ini berarti variabel tersebut dapat diakses di seluruh fungsi tempat ia dideklarasikan, bahkan dari dalam blok-blok seperti `if`, `for`, atau `while`.

**Contoh Dasar:**
```javascript
function contohVar() {
  if (true) {
    var x = 10; // var tidak memiliki block scope
    console.log("Di dalam blok if:", x); // Output: 10
  }

  console.log("Di luar blok if:", x); // Output: 10 - bisa diakses di luar blok if
}

contohVar();
```

**Penjabaran langkah demi langkah:**
1. Fungsi `contohVar()` dipanggil
2. Blok `if(true)` dieksekusi, variabel `x` dideklarasikan dengan `var` dan diberi nilai 10
3. Karena `var` tidak memiliki block scope, variabel `x` tersedia di seluruh fungsi `contohVar`
4. `console.log` di dalam blok `if` mencetak nilai `x` (10)
5. `console.log` di luar blok `if` juga bisa mengakses `x` dan mencetak nilai yang sama (10)

**Hoisting dengan `var`:**
`var` mengalami hoisting, artinya deklarasi variabel dipindahkan ke atas scope-nya saat kompilasi, tetapi tidak dengan inisialisasinya.

```javascript
function hoistingVar() {
  console.log(y); // Output: undefined (bukan error)
  var y = 5;
  console.log(y); // Output: 5
}

hoistingVar();
```

**Penjabaran hoisting:**
1. JavaScript membaca seluruh fungsi dan "mengangkat" semua deklarasi `var` ke atas scope
2. Kode di atas secara internal diproses seperti ini:
   ```javascript
   function hoistingVar() {
     var y;        // Deklarasi diangkat ke sini
     console.log(y); // undefined karena belum diinisialisasi
     y = 5;        // Inisialisasi tetap di tempat aslinya
     console.log(y); // 5 karena sudah diinisialisasi
   }
   ```
3. Variabel yang dideklarasikan dengan `var` diinisialisasi dengan `undefined` secara otomatis

### 2. `let` - Block-scoped Variable

**Konsep:**
Variabel yang dideklarasikan dengan `let` memiliki scope blok, artinya hanya dapat diakses dalam blok `{}` tempat ia dideklarasikan. Ini termasuk blok `if`, `for`, `while`, `switch`, dan fungsi.

**Contoh Dasar:**
```javascript
function contohLet() {
  if (true) {
    let z = 20; // let memiliki block scope
    console.log("Di dalam blok if:", z); // Output: 20
  }

  // console.log("Di luar blok if:", z); // Ini akan menghasilkan error ReferenceError
  console.log("Variabel z tidak bisa diakses di sini");
}

contohLet();
```

**Penjabaran langkah demi langkah:**
1. Fungsi `contohLet()` dipanggil
2. Blok `if(true)` dieksekusi, variabel `z` dideklarasikan dengan `let` dan diberi nilai 20
3. Karena `let` memiliki block scope, variabel `z` hanya tersedia di dalam blok `if`
4. `console.log` di dalam blok `if` mencetak nilai `z` (20)
5. Jika kita coba mengakses `z` di luar blok `if`, akan terjadi error `ReferenceError`

**Temporal Dead Zone (TDZ) dengan `let`:**
Berbeda dengan `var`, `let` tidak bisa diakses sebelum dideklarasikan, bahkan sebelum inisialisasi:

```javascript
function tdzExample() {
  // console.log(temp); // Error: Cannot access 'temp' before initialization
  let temp = "Hello";
  console.log(temp); // Output: "Hello"
}

tdzExample();
```

### 3. `const` - Block-scoped Constant

**Konsep:**
`const` digunakan untuk mendeklarasikan konstanta yang tidak dapat di-reassign. Namun, jika nilainya adalah objek atau array, kontennya masih bisa dimodifikasi.

**Contoh Dasar:**
```javascript
// Deklarasi konstanta primitif
const PI = 3.14159;
console.log(PI); // Output: 3.14159

// Mencoba mengganti nilai akan menyebabkan error
// PI = 3.14; // TypeError: Assignment to constant variable

// Deklarasi konstanta objek
const person = { name: "John", age: 30 };
console.log(person); // Output: { name: "John", age: 30 }

// Ini diperbolehkan - konten objek bisa diubah
person.age = 31;
person.city = "New York";
console.log(person); // Output: { name: "John", age: 31, city: "New York" }

// Ini akan menyebabkan error - tidak bisa reassign
// person = {}; // TypeError: Assignment to constant variable
```

**Penjabaran langkah demi langkah:**
1. `const PI` dideklarasikan dan diberi nilai 3.14159 - nilai ini tidak bisa diubah
2. `const person` dideklarasikan dan diberi nilai objek - referensi ke objek tidak bisa diubah
3. Properti dalam objek `person` bisa dimodifikasi karena objek itu sendiri tidak diganti
4. Mencoba mengganti `person` dengan objek baru akan menyebabkan error

### 4. Scope Chain

**Konsep:**
JavaScript mencari variabel dalam scope tertentu, dan jika tidak ditemukan, akan mencari ke scope yang lebih tinggi (parent scope), dan seterusnya hingga global scope. Ini disebut scope chain.

**Contoh Dasar:**
```javascript
// Global scope
let globalVar = "Global";

function outerFunction() {
  // Outer function scope
  let outerVar = "Outer";

  function innerFunction() {
    // Inner function scope
    let innerVar = "Inner";

    // Semua variabel ini bisa diakses dari innerFunction
    console.log("Global:", globalVar); // Output: Global
    console.log("Outer:", outerVar);   // Output: Outer
    console.log("Inner:", innerVar);   // Output: Inner
  }

  innerFunction();

  // Di sini hanya bisa mengakses globalVar dan outerVar
  console.log("Global dari outer:", globalVar); // Output: Global
  console.log("Outer dari outer:", outerVar);   // Output: Outer
  // console.log(innerVar); // Error - innerVar tidak tersedia di outerFunction
}

outerFunction();

// Di global scope hanya bisa mengakses globalVar
console.log("Global dari global:", globalVar); // Output: Global
// console.log(outerVar); // Error - outerVar tidak tersedia di global scope
```

**Penjabaran langkah demi langkah:**
1. `globalVar` dideklarasikan di global scope - bisa diakses dari mana saja
2. `outerFunction` dideklarasikan di global scope
3. Di dalam `outerFunction`, `outerVar` dideklarasikan - bisa diakses di `outerFunction` dan semua fungsi di dalamnya
4. Di dalam `innerFunction`, `innerVar` dideklarasikan - hanya bisa diakses di `innerFunction`
5. Saat `innerFunction` mencari variabel, ia mencari dalam urutan: inner scope → outer scope → global scope

### Latihan Variables and Scoping

**Latihan 1: Perbedaan var, let, dan const**
Coba jalankan kode berikut dan pahami perbedaannya:

```javascript
function perbedaanScoping() {
  // Dengan var - tidak ada block scope
  console.log("=== Perulangan dengan var ===");
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100); // Output: 3, 3, 3
  }

  // Dengan let - ada block scope
  console.log("=== Perulangan dengan let ===");
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200); // Output: 0, 1, 2
  }

  // Demonstrasi TDZ
  console.log("=== Temporal Dead Zone ===");
  try {
    console.log(tempVar); // undefined karena hoisting
    var tempVar = "available";
  } catch(e) {
    console.log("Error dengan var:", e.message);
  }

  try {
    // console.log(tempLet); // Error karena TDZ
    let tempLet = "available";
  } catch(e) {
    console.log("Error dengan let:", e.message);
  }
}

perbedaanScoping();
```

**Penjabaran latihan:**
1. Dengan `var` dalam perulangan `for`, variabel `i` hanya dibuat satu kali dan digunakan berulang kali
2. Ketika `setTimeout` dieksekusi nanti, semua callback merujuk ke variabel `i` yang sama dengan nilai akhir 3
3. Dengan `let` dalam perulangan `for`, variabel `j` dibuat ulang di setiap iterasi, jadi setiap callback `setTimeout` merujuk ke salinan `j` yang berbeda
4. Ini menunjukkan pentingnya memahami perbedaan scope antara `var` dan `let`

---

## Functions

### Memahami Functions

Fungsi adalah blok kode yang dapat digunakan kembali untuk melakukan tugas tertentu. Dalam JavaScript, fungsi adalah "first-class citizens", artinya mereka bisa disimpan dalam variabel, dilewatkan sebagai parameter, dan dikembalikan dari fungsi lain.

**Konsep Penting:**
- **Function** adalah subrutin yang dapat dipanggil berulang kali
- **Parameters** adalah variabel yang didefinisikan dalam deklarasi fungsi
- **Arguments** adalah nilai aktual yang dilewatkan saat memanggil fungsi
- **Return value** adalah nilai yang dikembalikan oleh fungsi

### 1. Function Declaration

**Konsep:**
Fungsi yang didefinisikan dengan cara ini mengalami hoisting, artinya bisa dipanggil sebelum didefinisikan dalam kode.

**Contoh Dasar:**
```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
```

**Penjabaran langkah demi langkah:**
1. Fungsi `greet` dideklarasikan dengan satu parameter `name`
2. Ketika fungsi dipanggil dengan argumen `"Alice"`, parameter `name` menerima nilai `"Alice"`
3. Di dalam fungsi, template literal digunakan untuk menggabungkan string
4. Fungsi mengembalikan string `"Hello, Alice!"`
5. Nilai kembalian ditangkap dan dicetak oleh `console.log`

**Kelebihan Function Declaration:**
- Mengalami hoisting, jadi bisa dipanggil sebelum didefinisikan
- Sintaks yang jelas dan mudah dibaca
- Cocok untuk fungsi yang akan digunakan di banyak tempat

### 2. Function Expression

**Konsep:**
Fungsi yang disimpan dalam variabel. Tidak mengalami hoisting seperti function declaration.

**Contoh Dasar:**
```javascript
// Function expression
const greetExpression = function(name) {
  return `Hello, ${name}!`;
};

console.log(greetExpression("Bob")); // Output: Hello, Bob!
```

**Penjabaran langkah demi langkah:**
1. Variabel `greetExpression` dideklarasikan dengan `const`
2. Sebuah fungsi anonim ditetapkan sebagai nilai variabel
3. Fungsi ini menerima parameter `name` dan mengembalikan string
4. Ketika `greetExpression("Bob")` dipanggil, parameter `name` menerima nilai `"Bob"`
5. Fungsi mengembalikan `"Hello, Bob!"` yang kemudian dicetak

**Perbedaan dengan Function Declaration:**
- Tidak mengalami hoisting (harus didefinisikan sebelum dipanggil)
- Lebih fleksibel karena bisa disimpan dalam variabel
- Bisa digunakan untuk membuat fungsi secara dinamis

### 3. Arrow Functions

**Konsep:**
Sintaks ringkas untuk menulis fungsi. Arrow function memiliki perbedaan penting dalam konteks `this`.

**Contoh Dasar:**
```javascript
// Arrow function dengan blok kode
const greetArrow = (name) => {
  return `Hello, ${name}!`;
};

// Arrow function dengan ekspresi tunggal (implisit return)
const greetShort = name => `Hello, ${name}!`;

// Arrow function dengan banyak parameter
const add = (a, b) => a + b;

console.log(greetArrow("Charlie")); // Output: Hello, Charlie!
console.log(greetShort("David"));   // Output: Hello, David!
console.log(add(5, 3));             // Output: 8
```

**Penjabaran langkah demi langkah:**
1. Arrow function dengan parameter tunggal tidak perlu tanda kurung: `name => ...`
2. Arrow function dengan ekspresi tunggal tidak perlu `return` dan kurung kurawal
3. Arrow function dengan banyak parameter perlu tanda kurung: `(a, b) => ...`
4. Arrow function dengan blok kode memerlukan `return` eksplisit

**Kelebihan Arrow Functions:**
- Sintaks lebih ringkas
- Tidak memiliki `this` sendiri (mengambil dari lingkungan luar)
- Cocok untuk fungsi pendek dan callback

### 4. Closures

**Konsep:**
Closure adalah kombinasi fungsi dan lingkungan leksikal (lexical environment) di mana fungsi tersebut dideklarasikan. Closure memungkinkan fungsi untuk mengakses variabel dari scope induknya bahkan setelah fungsi induk selesai dieksekusi.

**Contoh Dasar:**
```javascript
function createCounter() {
  let count = 0;  // Variabel dalam scope outer function

  return function() {  // Inner function
    count++;          // Mengakses variabel dari outer scope
    return count;
  };
}

const counter = createCounter();  // counter sekarang adalah inner function
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```

**Penjabaran langkah demi langkah:**
1. `createCounter()` dipanggil, membuat variabel `count` dengan nilai 0
2. Fungsi inner (anonymous function) dikembalikan dan disimpan dalam `counter`
3. Meskipun `createCounter()` sudah selesai, inner function masih bisa mengakses `count`
4. Setiap kali `counter()` dipanggil, ia menaikkan dan mengembalikan nilai `count`
5. Nilai `count` tetap dipertahankan antar pemanggilan karena closure

**Contoh Lain - Factory Function:**
```javascript
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15
```

### 5. Higher-Order Functions

**Konsep:**
Fungsi yang menerima fungsi lain sebagai parameter atau mengembalikan fungsi disebut Higher-Order Function (HOF). Ini adalah konsep penting dalam pemrograman fungsional.

**Contoh 1: Fungsi yang menerima fungsi lain sebagai parameter**
```javascript
// Fungsi yang menerima fungsi lain sebagai parameter
function executeTwice(fn, arg) {
  fn(arg);
  fn(arg);
}

executeTwice(console.log, "Hello"); // Output: Hello dua kali
```

**Penjabaran:**
1. `executeTwice` adalah HOF karena menerima fungsi `fn` sebagai parameter
2. Fungsi `console.log` dilewatkan sebagai argumen pertama
3. `"Hello"` dilewatkan sebagai argumen kedua
4. `fn(arg)` dipanggil dua kali, sehingga `"Hello"` dicetak dua kali

**Contoh 2: Fungsi yang mengembalikan fungsi**
```javascript
// Fungsi yang mengembalikan fungsi
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10
```

**Penjabaran:**
1. `multiplyBy(2)` dipanggil, mengembalikan fungsi inner
2. Fungsi inner disimpan dalam variabel `double`
3. Ketika `double(5)` dipanggil, fungsi inner menerima 5 sebagai `number`
4. Fungsi inner mengalikan `number` (5) dengan `factor` (2), menghasilkan 10

**Contoh 3: Fungsi yang melakukan keduanya**
```javascript
function executeWithLogging(fn, ...args) {
  console.log("Memanggil fungsi dengan argumen:", args);
  const result = fn(...args);
  console.log("Hasil:", result);
  return result;
}

const sum = executeWithLogging((a, b) => a + b, 3, 4);
// Output: Memanggil fungsi dengan argumen: [3, 4]
// Output: Hasil: 7
```

### Latihan Functions

**Latihan 1: Membuat Fungsi dengan Berbagai Cara**
Buat fungsi yang menghitung kuadrat dari sebuah angka dengan tiga cara berbeda: declaration, expression, dan arrow function.

```javascript
// 1. Function declaration
function kuadratDeclaration(x) {
  return x * x;
}

// 2. Function expression
const kuadratExpression = function(x) {
  return x * x;
};

// 3. Arrow function
const kuadratArrow = x => x * x;

console.log("Function Declaration:", kuadratDeclaration(4));  // Output: 16
console.log("Function Expression:", kuadratExpression(4));   // Output: 16
console.log("Arrow Function:", kuadratArrow(4));            // Output: 16

// Semua fungsi menghasilkan output yang sama meskipun sintaks berbeda
```

**Latihan 2: Membuat Closure untuk Counter dengan Increment Dinamis**
Buat fungsi yang mengembalikan counter yang bisa diatur increment-nya.

```javascript
function createCustomCounter(initialValue = 0, increment = 1) {
  let count = initialValue;

  return function() {
    count += increment;
    return count;
  };
}

const counterByOne = createCustomCounter();      // Mulai dari 0, increment 1
const counterByFive = createCustomCounter(10, 5); // Mulai dari 10, increment 5

console.log("Counter by 1:", counterByOne()); // Output: 1
console.log("Counter by 1:", counterByOne()); // Output: 2
console.log("Counter by 5:", counterByFive()); // Output: 15
console.log("Counter by 5:", counterByFive()); // Output: 20
```

**Penjabaran latihan:**
1. Fungsi `createCustomCounter` menerima nilai awal dan increment sebagai parameter
2. Ia mengembalikan fungsi inner yang memiliki akses ke variabel `count`, `initialValue`, dan `increment` karena closure
3. Setiap instance counter memiliki state sendiri yang independen dari counter lain
4. Ini menunjukkan kekuatan closure dalam membuat fungsi dengan state privat

---

## Objects and Prototypes

### Memahami Objects dan Prototypes

Objek adalah struktur data fundamental dalam JavaScript yang digunakan untuk menyimpan koleksi data dalam bentuk pasangan key-value. Objek memungkinkan kita mengorganisasi data dan fungsi terkait dalam satu unit.

**Konsep Penting:**
- **Object** adalah kumpulan properti yang terdiri dari key (nama properti) dan value (nilai)
- **Property** adalah pasangan key-value dalam objek
- **Method** adalah fungsi yang disimpan sebagai properti dalam objek
- **Prototype** adalah mekanisme pewarisan dalam JavaScript

### 1. Object Literals

**Konsep:**
Cara paling umum untuk membuat objek di JavaScript. Menggunakan kurung kurawal `{}` dan mendefinisikan properti secara langsung.

**Contoh Dasar:**
```javascript
const person = {
  // Properties (key-value pairs)
  name: "John Doe",
  age: 30,
  occupation: "Developer",

  // Method (function as property)
  greet: function() {
    return `Hello, I'm ${this.name}`;
  },

  // ES6 shorthand method syntax
  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
  }
};

console.log(person.name);         // Output: John Doe
console.log(person.greet());      // Output: Hello, I'm John Doe
console.log(person.introduce());  // Output: Hi, I'm John Doe and I'm 30 years old
```

**Penjabaran langkah demi langkah:**
1. Objek `person` dibuat dengan sintaks object literal `{ }`
2. Properti `name`, `age`, dan `occupation` didefinisikan dengan nilai masing-masing
3. Method `greet` didefinisikan sebagai fungsi anonim
4. Method `introduce` menggunakan sintaks ES6 shorthand method
5. `this.name` dan `this.age` merujuk ke properti dalam objek yang sama
6. Akses properti menggunakan dot notation: `person.name`
7. Panggil method dengan: `person.greet()`

**Contoh Lain - Nested Objects:**
```javascript
const company = {
  name: "Tech Corp",
  founded: 2020,
  address: {
    street: "123 Main St",
    city: "Jakarta",
    country: "Indonesia"
  },
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" }
  ]
};

// Akses nested properties
console.log(company.address.city);           // Output: Jakarta
console.log(company.employees[0].name);      // Output: Alice
```

### 2. Constructor Functions

**Konsep:**
Fungsi yang digunakan untuk membuat objek baru dengan struktur yang sama. Digunakan dengan kata kunci `new`.

**Contoh Dasar:**
```javascript
// Constructor function
function Person(name, age, occupation) {
  // Properties
  this.name = name;
  this.age = age;
  this.occupation = occupation;

  // Method
  this.greet = function() {
    return `Hello, I'm ${this.name}`;
  };
}

// Membuat objek baru dengan constructor
const person1 = new Person("Alice", 25, "Designer");
const person2 = new Person("Bob", 35, "Manager");

console.log(person1.greet()); // Output: Hello, I'm Alice
console.log(person2.greet()); // Output: Hello, I'm Bob
console.log(person1.name);    // Output: Alice
console.log(person2.age);     // Output: 35
```

**Penjabaran langkah demi langkah:**
1. Fungsi `Person` didefinisikan sebagai constructor
2. Parameter `name`, `age`, `occupation` digunakan untuk menginisialisasi properti
3. `this.propertyName` digunakan untuk menetapkan nilai ke properti objek baru
4. `new Person(...)` membuat objek baru dan menjalankan constructor
5. `this` dalam constructor merujuk ke objek yang sedang dibuat
6. Setiap objek yang dibuat memiliki salinan method `greet`

**Catatan Penting:**
- Setiap objek yang dibuat dengan constructor akan memiliki salinan method sendiri
- Ini bisa boros memori jika banyak objek dibuat
- Solusi: gunakan prototype (lihat bagian berikut)

### 3. Prototypes

**Konsep:**
Prototipe adalah mekanisme di mana objek-objek JavaScript mewarisi properti dan metode dari objek lain. Ini memungkinkan objek berbagi metode tanpa membuat salinan untuk setiap instance.

**Contoh Dasar:**
```javascript
// Constructor function
function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
  // Hindari menempatkan method di sini untuk efisiensi memori
}

// Menambahkan metode ke prototype
Person.prototype.introduce = function() {
  return `Hi, I'm ${this.name} and I work as a ${this.occupation}`;
};

// Menambahkan lebih banyak method ke prototype
Person.prototype.getBirthYear = function() {
  const currentYear = new Date().getFullYear();
  return currentYear - this.age;
};

// Membuat objek
const person1 = new Person("Alice", 25, "Designer");
const person2 = new Person("Bob", 35, "Manager");

// Method dari prototype tersedia untuk semua instance
console.log(person1.introduce());    // Output: Hi, I'm Alice and I work as a Designer
console.log(person2.introduce());    // Output: Hi, I'm Bob and I work as a Manager
console.log(person1.getBirthYear()); // Output: (year based on age)
console.log(person2.getBirthYear()); // Output: (year based on age)

// Memeriksa apakah method berasal dari prototype
console.log(person1.hasOwnProperty('name'));      // Output: true
console.log(person1.hasOwnProperty('introduce')); // Output: false
console.log('introduce' in person1);              // Output: true
```

**Penjabaran langkah demi langkah:**
1. Constructor `Person` didefinisikan tanpa method di dalamnya
2. Method `introduce` ditambahkan ke `Person.prototype`
3. Semua instance `Person` mewarisi method ini melalui prototype chain
4. Method hanya disimpan satu kali di prototype, tidak di setiap instance
5. Ini lebih efisien dalam penggunaan memori
6. `hasOwnProperty` memeriksa apakah properti milik objek itu sendiri
7. Operator `in` memeriksa apakah properti ada di objek atau prototype chain

**Prototype Inheritance:**
```javascript
// Parent constructor
function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
}

Person.prototype.introduce = function() {
  return `Hi, I'm ${this.name} and I work as a ${this.occupation}`;
};

// Child constructor
function Developer(name, age, language) {
  // Panggil parent constructor
  Person.call(this, name, age, "Developer"); // Menggunakan call untuk mengatur 'this'
  this.language = language;
}

// Set up prototype chain
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

// Tambahkan method spesifik untuk Developer
Developer.prototype.code = function() {
  return `${this.name} is coding in ${this.language}`;
};

// Override method dari parent
Developer.prototype.introduce = function() {
  return `Hi, I'm ${this.name}, a Developer who codes in ${this.language}`;
};

const dev = new Developer("Carol", 28, "JavaScript");

console.log(dev.introduce()); // Output: Hi, I'm Carol, a Developer who codes in JavaScript
console.log(dev.code());      // Output: Carol is coding in JavaScript
console.log(dev.age);         // Output: 28 (diwariskan dari Person)
```

### 4. ES6 Classes (Syntactic Sugar)

**Konsep:**
ES6 memperkenalkan sintaks kelas yang merupakan syntactic sugar untuk prototypal inheritance. Ini membuat kode lebih mirip bahasa berbasis kelas tradisional.

**Contoh Dasar:**
```javascript
class Animal {
  // Constructor method
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  // Regular method
  speak() {
    return `${this.name} makes a sound`;
  }

  // Method untuk mengubah state
  rename(newName) {
    this.name = newName;
    return `Animal renamed to ${this.name}`;
  }
}

// Membuat instance dari class
const animal = new Animal("Leo", "Lion");
console.log(animal.speak());        // Output: Leo makes a sound
console.log(animal.rename("Simba")); // Output: Animal renamed to Simba
console.log(animal.name);           // Output: Simba
```

**Penjabaran langkah demi langkah:**
1. Class `Animal` didefinisikan dengan keyword `class`
2. Method `constructor` digunakan untuk inisialisasi objek
3. Method lain didefinisikan tanpa kata kunci `function`
4. `this` digunakan untuk mengakses properti instance
5. `new Animal(...)` membuat instance dari class

**Class Inheritance:**
```javascript
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {  // Dog extends Animal
  constructor(name, breed) {
    super(name, "Dog");     // Panggil constructor parent
    this.breed = breed;
  }

  // Override method dari parent
  speak() {
    return `${this.name} barks`;
  }

  // Method spesifik untuk Dog
  fetch() {
    return `${this.name} fetches the ball`;
  }

  // Method yang menggunakan method parent
  fullIntroduction() {
    return `${super.speak()} and I'm a ${this.breed}`;
  }
}

const dog = new Dog("Buddy", "Golden Retriever");

console.log(dog.speak());           // Output: Buddy barks
console.log(dog.fetch());           // Output: Buddy fetches the ball
console.log(dog.fullIntroduction()); // Output: Buddy barks and I'm a Golden Retriever
console.log(dog.name);              // Output: Buddy (diwariskan dari Animal)
console.log(dog.species);           // Output: Dog (diwariskan dari Animal)
```

**Penjabaran inheritance:**
1. `extends` digunakan untuk membuat class turunan
2. `super()` digunakan untuk memanggil constructor parent
3. `super.methodName()` digunakan untuk memanggil method dari parent
4. Method bisa di-override di child class
5. Child class mewarisi semua properti dan method dari parent

### Latihan Objects and Prototypes

**Latihan 1: Membuat Objek Mahasiswa**
Buat objek mahasiswa dengan property nama, nim, jurusan, dan IPK, serta method untuk menampilkan informasi dan mengecek status lulus.

```javascript
const student = {
  name: "Siti",
  studentId: "1234567890",
  major: "Computer Science",
  gpa: 3.75,

  // Method untuk mendapatkan informasi lengkap
  getInfo() {
    return `Name: ${this.name}, NIM: ${this.studentId}, Major: ${this.major}, GPA: ${this.gpa}`;
  },

  // Method untuk mengecek status kelulusan
  isGraduating() {
    return this.gpa >= 2.0;
  },

  // Method untuk mengecek predikat kelulusan
  getGradePredicate() {
    if (this.gpa >= 3.8) return "Summa Cum Laude";
    if (this.gpa >= 3.5) return "Cum Laude";
    if (this.gpa >= 3.0) return "Satisfactory";
    return "Pass";
  }
};

console.log(student.getInfo());         // Output: Name: Siti, NIM: 1234567890, Major: Computer Science, GPA: 3.75
console.log(student.isGraduating());    // Output: true
console.log(student.getGradePredicate()); // Output: Cum Laude
```

**Latihan 2: Membuat Constructor Function untuk Produk**
Buat constructor function untuk produk dengan prototype methods.

```javascript
// Constructor function untuk produk
function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
  this.inStock = true; // Default value
}

// Method di prototype untuk efisiensi memori
Product.prototype.getPriceWithTax = function(taxRate = 0.1) {
  return this.price * (1 + taxRate);
};

Product.prototype.applyDiscount = function(discountPercent) {
  this.price = this.price * (1 - discountPercent / 100);
  return this.price;
};

Product.prototype.getProductDetails = function() {
  return `${this.name} (${this.category}): $${this.price} (In Stock: ${this.inStock})`;
};

// Buat beberapa produk
const laptop = new Product("MacBook Pro", 1200, "Electronics");
const book = new Product("JavaScript Guide", 30, "Books");

console.log(laptop.getProductDetails());
// Output: MacBook Pro (Electronics): $1200 (In Stock: true)

console.log("Price with tax:", laptop.getPriceWithTax(0.15));
// Output: Price with tax: 1380

laptop.applyDiscount(10); // Apply 10% discount
console.log("After discount:", laptop.price);
// Output: After discount: 1080
```

**Penjabaran latihan:**
1. Constructor function `Product` digunakan untuk membuat objek produk dengan struktur yang konsisten
2. Method ditempatkan di prototype untuk efisiensi memori
3. Method `getPriceWithTax` menghitung harga termasuk pajak
4. Method `applyDiscount` mengubah harga produk dengan diskon
5. Method `getProductDetails` mengembalikan representasi string dari produk
6. Setiap instance produk memiliki akses ke semua method di prototype

---

## Error Handling

### Memahami Error Handling

Error handling adalah proses menangani kesalahan yang terjadi saat eksekusi program. JavaScript menyediakan mekanisme try/catch/finally untuk menangani error. Ini penting untuk membuat aplikasi yang robust dan user-friendly.

**Konsep Penting:**
- **Error** adalah objek yang merepresentasikan masalah dalam eksekusi program
- **Exception** adalah error yang dilempar (thrown) selama eksekusi
- **Try/catch** adalah struktur untuk menangani exception
- **Finally** adalah blok yang selalu dijalankan, terlepas dari apakah ada error atau tidak

### 1. Try/Catch/Finally

**Konsep:**
Struktur dasar untuk menangani error dalam JavaScript. Memungkinkan program terus berjalan meskipun terjadi error.

**Contoh Dasar:**
```javascript
try {
  // Kode yang mungkin menghasilkan error
  let result = 10 / 0;
  console.log(result); // Output: Infinity

  // Contoh error
  throw new Error("Ini adalah error buatan");
} catch (error) {
  // Ditangkap jika terjadi error
  console.log("Terjadi error:", error.message);
} finally {
  // Bagian ini selalu dijalankan
  console.log("Blok finally selalu dijalankan");
}
```

**Penjabaran langkah demi langkah:**
1. Blok `try` mengeksekusi kode yang mungkin menyebabkan error
2. `10 / 0` menghasilkan `Infinity` (bukan error dalam JavaScript)
3. `throw new Error(...)` secara sengaja melempar error
4. Blok `catch` menangkap error dan mengeksekusi kode penanganan
5. Blok `finally` selalu dijalankan, baik ada error maupun tidak
6. `error.message` adalah properti dari objek error yang berisi pesan error

**Contoh Lain - Penanganan Error Spesifik:**
```javascript
try {
  const data = JSON.parse('{"name": "John", "age": 30}'); // Parsing JSON yang valid
  console.log(data.name); // Output: John

  const invalidJson = JSON.parse('invalid json'); // Ini akan menyebabkan error
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("JSON parsing error:", error.message);
  } else {
    console.log("Error lain:", error.message);
  }
} finally {
  console.log("Parsing selesai");
}
```

**Penjabaran:**
1. `JSON.parse` digunakan untuk mengkonversi string JSON ke objek JavaScript
2. Jika string JSON tidak valid, `JSON.parse` akan melempar `SyntaxError`
3. `instanceof` digunakan untuk memeriksa jenis error tertentu
4. Kita bisa menangani error berbeda dengan cara berbeda

### 2. Jenis-jenis Error Umum

JavaScript memiliki beberapa jenis error bawaan yang sering ditemui:

**ReferenceError:**
```javascript
try {
  console.log(undefinedVariable); // Variabel tidak didefinisikan
} catch (error) {
  console.log("Jenis error:", error.name);      // Output: ReferenceError
  console.log("Pesan error:", error.message);   // Output: undefinedVariable is not defined
  console.log("Stack trace:", error.stack);     // Output: Informasi stack trace
}
```

**TypeError:**
```javascript
try {
  const num = 5;
  num.toUpperCase(); // Number tidak memiliki metode toUpperCase
} catch (error) {
  console.log("Jenis error:", error.name);      // Output: TypeError
  console.log("Pesan error:", error.message);   // Output: num.toUpperCase is not a function
}
```

**SyntaxError:**
```javascript
// SyntaxError terjadi saat parsing, tidak bisa ditangkap dengan try/catch
// eval('function test() {'); // Ini akan menyebabkan SyntaxError saat parsing
```

**RangeError:**
```javascript
try {
  const arr = new Array(-1); // Membuat array dengan panjang negatif
} catch (error) {
  console.log("Jenis error:", error.name);      // Output: RangeError
  console.log("Pesan error:", error.message);   // Output: Invalid array length
}
```

**Contoh Lengkap - Penanganan Berbagai Jenis Error:**
```javascript
function handleError(value) {
  try {
    if (typeof value === 'undefined') {
      throw new ReferenceError("Nilai tidak boleh undefined");
    }

    if (typeof value !== 'string') {
      throw new TypeError("Nilai harus berupa string");
    }

    if (value.length > 100) {
      throw new RangeError("String terlalu panjang");
    }

    return value.toUpperCase();
  } catch (error) {
    switch (error.name) {
      case 'ReferenceError':
        console.log("Referensi error:", error.message);
        break;
      case 'TypeError':
        console.log("Tipe error:", error.message);
        break;
      case 'RangeError':
        console.log("Rentang error:", error.message);
        break;
      default:
        console.log("Error tidak diketahui:", error.message);
    }
    return null;
  }
}

console.log(handleError(undefined));  // Referensi error: Nilai tidak boleh undefined
console.log(handleError(123));        // Tipe error: Nilai harus berupa string
console.log(handleError("A".repeat(150))); // Rentang error: String terlalu panjang
console.log(handleError("hello"));    // HELLO
```

### 3. Custom Errors

**Konsep:**
Anda bisa membuat error khusus untuk kebutuhan aplikasi Anda dengan membuat class yang extends dari Error.

**Contoh Dasar:**
```javascript
// Membuat custom error class
class ValidationError extends Error {
  constructor(message, field) {
    super(message);           // Memanggil constructor dari Error
    this.field = field;       // Properti tambahan
    this.name = 'ValidationError'; // Nama error
  }
}

// Fungsi yang menggunakan custom error
function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    throw new ValidationError('Email harus berupa string', 'email');
  }

  if (!email.includes('@')) {
    throw new ValidationError('Format email tidak valid', 'email');
  }

  if (email.length > 254) {
    throw new ValidationError('Email terlalu panjang', 'email');
  }

  return true;
}

// Menggunakan fungsi dengan penanganan error
try {
  validateEmail('invalid-email');
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation Error pada field ${error.field}: ${error.message}`);
  } else {
    console.log("Error umum:", error.message);
  }
}
```

**Penjabaran langkah demi langkah:**
1. Class `ValidationError` extends dari `Error`
2. Constructor memanggil `super(message)` untuk menginisialisasi Error
3. Properti tambahan seperti `field` ditambahkan
4. `instanceof` digunakan untuk memeriksa apakah error adalah jenis tertentu
5. Ini memungkinkan penanganan error yang lebih spesifik

**Contoh Lain - Multiple Custom Errors:**
```javascript
// Custom error untuk validasi umur
class AgeValidationError extends ValidationError {
  constructor(age) {
    super(`Umur ${age} tidak valid. Harus antara 0 dan 150.`, 'age');
    this.age = age;
    this.name = 'AgeValidationError';
  }
}

// Custom error untuk validasi nama
class NameValidationError extends ValidationError {
  constructor(name) {
    super(`Nama "${name}" tidak valid. Tidak boleh kosong dan maksimal 50 karakter.`, 'name');
    this.nameValue = name;
    this.name = 'NameValidationError';
  }
}

function validatePerson(name, age) {
  if (!name || name.trim() === '' || name.length > 50) {
    throw new NameValidationError(name);
  }

  if (typeof age !== 'number' || age < 0 || age > 150) {
    throw new AgeValidationError(age);
  }

  return { name: name.trim(), age };
}

// Testing
try {
  validatePerson("", 25);
} catch (error) {
  if (error instanceof NameValidationError) {
    console.log(`Nama error: ${error.message}`);
  } else if (error instanceof AgeValidationError) {
    console.log(`Umur error: ${error.message}`);
  } else {
    console.log("Error:", error.message);
  }
}
```

### 4. Async Error Handling

**Konsep:**
Dalam operasi asynchronous, error handling memerlukan pendekatan khusus karena kode tidak berjalan secara sinkron.

**Dengan Promise:**
```javascript
// Fungsi async yang mengembalikan Promise
function asyncOperation(success, delay = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Operasi berhasil");
      } else {
        reject(new Error("Operasi gagal"));
      }
    }, delay);
  });
}

// Menggunakan .catch() untuk menangani error
asyncOperation(false)
  .then(result => {
    console.log("Berhasil:", result);
  })
  .catch(error => {
    console.log("Error:", error.message);
  })
  .finally(() => {
    console.log("Operasi selesai (berhasil atau gagal)");
  });
```

**Dengan async/await:**
```javascript
async function handleAsyncOperation() {
  try {
    console.log("Memulai operasi async...");
    const result = await asyncOperation(true, 500);
    console.log("Berhasil:", result);

    // Coba operasi yang gagal
    const failedResult = await asyncOperation(false, 500);
    console.log("Ini tidak akan dicetak:", failedResult);
  } catch (error) {
    console.log("Async error:", error.message);
  } finally {
    console.log("Async operasi selesai");
  }
}

handleAsyncOperation();
```

**Penjabaran async error handling:**
1. Dengan `.then().catch()`, error ditangani di `.catch()`
2. Dengan `async/await`, error ditangani dengan `try/catch`
3. `await` menunggu Promise selesai sebelum melanjutkan
4. Jika Promise rejected, `await` akan melempar error yang bisa ditangkap dengan `catch`

**Contoh Lengkap - Async Error Chaining:**
```javascript
async function complexAsyncProcess() {
  try {
    console.log("Langkah 1: Mengambil data...");
    const data = await asyncOperation(true, 300);
    console.log("Data diterima:", data);

    console.log("Langkah 2: Memproses data...");
    const processed = await asyncOperation(true, 300);
    console.log("Data diproses:", processed);

    console.log("Langkah 3: Menyimpan data...");
    const saved = await asyncOperation(false, 300); // Ini akan gagal
    console.log("Data disimpan:", saved);
  } catch (error) {
    console.log("Proses gagal pada langkah:", error.message);
    // Bisa menambahkan logika untuk recovery atau fallback
  }
}

complexAsyncProcess();
```

### Latihan Error Handling

**Latihan 1: Validasi Form Sederhana**
Buat fungsi validasi form yang melempar error jika input tidak valid.

```javascript
class FormValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.field = field;
    this.name = 'FormValidationError';
  }
}

function validateForm(formData) {
  // Validasi nama
  if (!formData.name || typeof formData.name !== 'string' || formData.name.trim() === '') {
    throw new FormValidationError('name', 'Name is required and must be a non-empty string');
  }

  // Validasi email
  if (!formData.email || typeof formData.email !== 'string' || !formData.email.includes('@')) {
    throw new FormValidationError('email', 'Valid email is required');
  }

  // Validasi usia
  if (!formData.age || typeof formData.age !== 'number' || formData.age < 18) {
    throw new FormValidationError('age', 'Age must be a number and 18 or older');
  }

  return {
    valid: true,
    message: "Form is valid",
    sanitizedData: {
      name: formData.name.trim(),
      email: formData.email.toLowerCase(),
      age: formData.age
    }
  };
}

// Testing
try {
  const result = validateForm({
    name: "John Doe",
    email: "john@example.com",
    age: 25
  });
  console.log("Form valid!", result.sanitizedData);
} catch (error) {
  if (error instanceof FormValidationError) {
    console.log(`Validation error on ${error.field}: ${error.message}`);
  } else {
    console.log("Unexpected error:", error.message);
  }
}
```

**Latihan 2: Async Error Handling dalam Chain**
Buat fungsi async yang melakukan beberapa operasi berurutan dan menangani error di setiap langkah.

```javascript
async function processUserData(userId) {
  try {
    // Langkah 1: Ambil data pengguna
    console.log("Mengambil data pengguna...");
    const user = await asyncOperation(true, 200);
    console.log("Data pengguna diterima:", user);

    // Langkah 2: Validasi data
    console.log("Memvalidasi data...");
    if (!userId) {
      throw new Error("User ID tidak valid");
    }

    // Langkah 3: Proses data
    console.log("Memproses data...");
    const processed = await asyncOperation(true, 200);
    console.log("Data diproses:", processed);

    // Langkah 4: Simpan hasil
    console.log("Menyimpan hasil...");
    const saved = await asyncOperation(true, 200);
    console.log("Hasil disimpan:", saved);

    return { success: true, userId, message: "Proses berhasil" };
  } catch (error) {
    console.log("Error dalam proses:", error.message);
    return { success: false, userId, error: error.message };
  }
}

// Testing
processUserData(123).then(result => {
  console.log("Hasil akhir:", result);
});
```

**Penjabaran latihan:**
1. Custom error class memungkinkan penanganan error yang lebih spesifik
2. Validasi dilakukan secara bertahap dengan pesan error yang informatif
3. Async error handling memungkinkan proses berjalan meskipun ada error
4. Error ditangani dengan cara yang user-friendly dan informatif

---

## Destructuring and Spread Operator

### Memahami Destructuring dan Spread Operator

Destructuring dan spread operator adalah fitur ES6 yang membuat ekstraksi nilai dari array dan objek lebih mudah dan elegan. Kedua fitur ini sangat berguna untuk menulis kode yang lebih ringkas dan ekspresif.

**Konsep Penting:**
- **Destructuring** adalah cara untuk mengekstrak nilai dari array atau objek ke dalam variabel terpisah
- **Spread operator** (`...`) digunakan untuk menyebarkan/memecah elemen dari iterable (array, string, objek)
- **Rest parameters** (`...`) digunakan untuk mengumpulkan beberapa argumen menjadi satu array

### 1. Array Destructuring

**Konsep:**
Array destructuring memungkinkan kita untuk mengekstrak nilai dari array ke dalam variabel terpisah menggunakan sintaks yang mirip dengan array literal.

**Contoh Dasar:**
```javascript
const colors = ['red', 'green', 'blue'];

// Destructuring assignment
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);  // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor);  // Output: blue
```

**Penjabaran langkah demi langkah:**
1. Array `colors` berisi 3 elemen: `'red'`, `'green'`, `'blue'`
2. Sintaks `[firstColor, secondColor, thirdColor]` menciptakan 3 variabel
3. Nilai dari indeks 0, 1, 2 dari array diassign ke variabel yang sesuai
4. `firstColor` mendapat nilai `'red'`, `secondColor` mendapat `'green'`, dst.

**Skipping Elements (Melewati Elemen):**
```javascript
const fruits = ['apple', 'banana', 'cherry'];
const [firstFruit, , thirdFruit] = fruits;  // Lewatkan elemen tengah

console.log(firstFruit);  // Output: apple
console.log(thirdFruit);  // Output: cherry
```

**Penjabaran:**
1. Koma kosong `, ,` digunakan untuk melewati elemen kedua
2. `firstFruit` mendapat elemen pertama, `thirdFruit` mendapat elemen ketiga
3. Elemen kedua ('banana') dilewati

**Default Values (Nilai Bawaan):**
```javascript
const numbers = [5];  // Hanya satu elemen
const [x, y = 10, z = 20] = numbers;

console.log(x); // Output: 5
console.log(y); // Output: 10 (default karena tidak ada di array)
console.log(z); // Output: 20 (default karena tidak ada di array)
```

**Penjabaran:**
1. Array `numbers` hanya memiliki satu elemen: `5`
2. `x` mendapat nilai dari indeks 0: `5`
3. `y` dan `z` tidak memiliki nilai dari array, jadi menggunakan nilai default: `10` dan `20`

**Nested Array Destructuring:**
```javascript
const matrix = [[1, 2], [3, 4], [5, 6]];
const [[first, second], [third, fourth]] = matrix;

console.log(first);   // Output: 1
console.log(second);  // Output: 2
console.log(third);   // Output: 3
console.log(fourth);  // Output: 4
```

**Penjabaran:**
1. Array `matrix` berisi array-array bersarang
2. Destructuring dilakukan pada level atas dan dalam array bersarang
3. `[[first, second], [third, fourth]]` mengekstrak elemen dari array dalam array

### 2. Object Destructuring

**Konsep:**
Object destructuring memungkinkan kita untuk mengekstrak nilai dari objek ke dalam variabel terpisah menggunakan sintaks yang mirip dengan objek literal.

**Contoh Dasar:**
```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York'
};

// Basic destructuring
const { firstName, lastName, age } = person;
console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe
console.log(age);       // Output: 30
```

**Penjabaran langkah demi langkah:**
1. Objek `person` memiliki properti `firstName`, `lastName`, `age`, `city`
2. Sintaks `{ firstName, lastName, age }` menciptakan variabel dengan nama yang sama
3. Nilai dari properti objek yang sesuai diassign ke variabel
4. Hanya `firstName`, `lastName`, dan `age` yang diambil, `city` diabaikan

**Renaming Variables (Mengganti Nama Variabel):**
```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York'
};

// Mengganti nama variabel saat destructuring
const { firstName: fName, lastName: lName, city: hometown } = person;

console.log(fName);     // Output: John
console.log(lName);     // Output: Doe
console.log(hometown);  // Output: New York
```

**Penjabaran:**
1. Sintaks `oldName: newName` mengganti nama variabel yang dibuat
2. `firstName` di objek menjadi `fName` di variabel
3. Ini berguna untuk menghindari konflik nama atau membuat nama lebih deskriptif

**Default Values (Nilai Bawaan):**
```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
  // Tidak ada properti 'country'
};

// Memberikan nilai default untuk properti yang tidak ada
const { firstName, lastName, country = 'USA', occupation = 'Unknown' } = person;

console.log(firstName);    // Output: John
console.log(lastName);     // Output: Doe
console.log(country);      // Output: USA (default)
console.log(occupation);   // Output: Unknown (default)
```

**Penjabaran:**
1. Objek `person` tidak memiliki properti `country` dan `occupation`
2. Nilai default ditentukan dengan `= defaultValue`
3. Jika properti tidak ditemukan di objek, nilai default digunakan

**Nested Object Destructuring:**
```javascript
const employee = {
  name: 'Jane',
  department: 'Engineering',
  address: {
    street: '123 Main St',
    city: 'New York',
    zipCode: '10001'
  },
  contact: {
    phone: '555-1234',
    email: 'jane@example.com'
  }
};

// Destructuring objek bersarang
const {
  name,
  address: { street, zipCode },
  contact: { email }
} = employee;

console.log(name);    // Output: Jane
console.log(street);  // Output: 123 Main St
console.log(zipCode); // Output: 10001
console.log(email);   // Output: jane@example.com
```

**Penjabaran:**
1. Properti `address` dan `contact` adalah objek bersarang
2. Destructuring dilakukan pada objek bersarang dengan sintaks `properti: { subProperti }`
3. Kita bisa mengekstrak properti dari objek bersarang secara langsung

### 3. Spread Operator (...)

**Konsep:**
Spread operator (`...`) digunakan untuk menyebarkan/memecah elemen dari iterable (array, string, objek) ke dalam konteks yang sesuai.

**Dengan Array:**
```javascript
// Menggabungkan dua array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Menyalin array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
copiedArray.push(4);
console.log(originalArray); // Output: [1, 2, 3]
console.log(copiedArray);   // Output: [1, 2, 3, 4]

// Menyisipkan elemen di tengah array
const middle = [2, 3];
const fullArray = [1, ...middle, 4, 5];
console.log(fullArray); // Output: [1, 2, 3, 4, 5]
```

**Penjabaran:**
1. `...arr1` menyebarkan semua elemen dari `arr1` ke dalam array baru
2. Spread operator membuat salinan dangkal (shallow copy) dari array
3. Elemen bisa disisipkan sebelum, sesudah, atau di tengah spread array

**Dengan String:**
```javascript
// Mengubah string menjadi array karakter
const chars = [...'hello'];
console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']

// Menggabungkan karakter dari beberapa string
const combinedChars = [...'abc', ...'def'];
console.log(combinedChars); // Output: ['a', 'b', 'c', 'd', 'e', 'f']
```

**Penjabaran:**
1. String adalah iterable, jadi bisa digunakan dengan spread operator
2. Setiap karakter dalam string menjadi elemen terpisah dalam array

**Dengan Objek:**
```javascript
// Menggabungkan objek
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Menyalin objek
const originalObj = { name: 'John', age: 30 };
const copiedObj = { ...originalObj };
copiedObj.city = 'New York';
console.log(originalObj); // Output: { name: 'John', age: 30 }
console.log(copiedObj);   // Output: { name: 'John', age: 30, city: 'New York' }

// Override properti
const objWithOverride = { ...obj1, b: 20, e: 5 };
console.log(objWithOverride); // Output: { a: 1, b: 20, e: 5 }
```

**Penjabaran:**
1. Spread operator pada objek menyalin semua properti enumerable
2. Jika ada nama properti yang sama, properti terakhir yang digunakan
3. Ini membuat shallow copy dari objek

### 4. Rest Parameters

**Konsep:**
Rest parameters (`...`) digunakan untuk mengumpulkan beberapa argumen menjadi satu array. Ini sangat berguna untuk fungsi yang menerima jumlah argumen yang bervariasi.

**Contoh Dasar:**
```javascript
function sum(...numbers) {
  console.log("Jumlah argumen:", numbers.length);
  console.log("Argumen:", numbers);

  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));           // Output: 6
console.log(sum(1, 2, 3, 4, 5));    // Output: 15
console.log(sum());                 // Output: 0
```

**Penjabaran langkah demi langkah:**
1. Parameter `...numbers` mengumpulkan semua argumen yang diteruskan ke fungsi
2. `numbers` adalah array yang berisi semua argumen
3. Fungsi `reduce` digunakan untuk menjumlahkan semua elemen dalam array
4. Rest parameter harus menjadi parameter terakhir dalam daftar parameter

**Rest Parameters dengan Parameter Biasa:**
```javascript
function greet(greeting, ...names) {
  console.log("Greeting:", greeting);
  console.log("Names:", names);

  return names.map(name => `${greeting}, ${name}!`).join(' ');
}

console.log(greet("Hello", "Alice", "Bob", "Charlie"));
// Output: "Hello, Alice! Hello, Bob! Hello, Charlie!"
```

**Penjabaran:**
1. Parameter pertama `greeting` menerima argumen pertama
2. `...names` mengumpulkan semua argumen sisanya
3. Kita bisa menggunakan metode array pada `names` untuk memproses semua nama

**Destructuring dengan Rest:**
```javascript
// Dalam array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...remaining] = numbers;

console.log(first);      // Output: 1
console.log(second);     // Output: 2
console.log(remaining);  // Output: [3, 4, 5]

// Dalam object destructuring (ES2018+)
const person = { name: 'John', age: 30, city: 'NYC', occupation: 'Engineer' };
const { name, ...otherProps } = person;

console.log(name);       // Output: John
console.log(otherProps); // Output: { age: 30, city: 'NYC', occupation: 'Engineer' }
```

**Penjabaran:**
1. Dalam array destructuring, `...remaining` mengumpulkan semua elemen yang tersisa
2. Dalam object destructuring, `...otherProps` mengumpulkan semua properti yang tidak di-destructure
3. Rest harus menjadi elemen terakhir dalam destructuring

### Latihan Destructuring dan Spread Operator

**Latihan 1: Swap Nilai dengan Destructuring**
Gunakan destructuring untuk menukar nilai dua variabel tanpa variabel sementara.

```javascript
let a = 10;
let b = 20;

console.log(`Before swap: a=${a}, b=${b}`);

// Swap dengan destructuring
[a, b] = [b, a];

console.log(`After swap: a=${a}, b=${b}`); // Output: After swap: a=20, b=10
```

**Penjabaran:**
1. Sintaks `[a, b] = [b, a]` membuat array `[b, a]` dengan nilai saat ini
2. Array tersebut kemudian di-destructure ke variabel `a` dan `b`
3. Hasilnya adalah nilai `a` dan `b` ditukar

**Latihan 2: Fungsi untuk Memproses Data Pengguna**
Gunakan destructuring untuk memproses data pengguna dari API.

```javascript
// Simulasi data dari API
const apiResponse = {
  status: 'success',
  data: {
    user: {
      id: 123,
      profile: {
        name: 'John Doe',
        email: 'john@example.com',
        preferences: {
          theme: 'dark',
          notifications: true
        }
      },
      metadata: {
        createdAt: '2023-01-01',
        lastLogin: '2023-12-01'
      }
    }
  }
};

// Gunakan destructuring untuk mengambil data yang dibutuhkan
function processUserData(response) {
  const {
    status,
    data: {
      user: {
        id,
        profile: { name, email, preferences: { theme } },
        metadata: { lastLogin }
      }
    }
  } = response;

  return {
    status,
    userId: id,
    userName: name,
    userEmail: email,
    userTheme: theme,
    lastLoginDate: lastLogin
  };
}

const processedData = processUserData(apiResponse);
console.log(processedData);
// Output: {
//   status: 'success',
//   userId: 123,
//   userName: 'John Doe',
//   userEmail: 'john@example.com',
//   userTheme: 'dark',
//   lastLoginDate: '2023-12-01'
// }
```

**Penjabaran latihan:**
1. Destructuring digunakan untuk mengekstrak data bersarang dari objek respons API
2. Kita bisa langsung mengambil properti dari level yang dalam
3. Nama variabel bisa diganti menggunakan sintaks `originalName: newName`
4. Ini membuat kode lebih ringkas dan mudah dibaca

---

## Template Literals and String Methods

### Memahami Template Literals dan String Methods

Template literals dan string methods adalah fitur penting untuk manipulasi string dalam JavaScript. Template literals memungkinkan pembuatan string yang lebih fleksibel dengan dukungan untuk multiline dan ekspresi interpolasi, sedangkan string methods menyediakan berbagai fungsi untuk memanipulasi dan menganalisis string.

**Konsep Penting:**
- **Template literals** menggunakan backticks (`` ` ``) dan memungkinkan interpolasi ekspresi dengan `${expression}`
- **String methods** adalah fungsi bawaan untuk memanipulasi string
- **Multiline strings** bisa dibuat dengan mudah menggunakan template literals
- **Expression interpolation** memungkinkan evaluasi ekspresi langsung dalam string

### 1. Template Literals

**Konsep:**
Template literals adalah cara modern untuk membuat string yang mendukung multiline, ekspresi interpolasi, dan fungsi tag. Mereka menggunakan backticks (`` ` ``) sebagai pembatas.

**Contoh Dasar:**
```javascript
const name = 'Alice';
const age = 25;

// Basic template literal
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is Alice and I am 25 years old.
```

**Penjabaran langkah demi langkah:**
1. Template literal dibuat dengan backticks (`` ` ``) bukan kutip satu atau dua
2. Ekspresi interpolasi menggunakan sintaks `${expression}`
3. Ekspresi dalam `${}` dievaluasi dan hasilnya dikonversi ke string
4. Hasil evaluasi digabungkan ke dalam string

**Multiline Strings:**
```javascript
// Tanpa template literal (cara lama)
const oldWay = 'This is line 1\n' +
              'This is line 2\n' +
              'This is line 3';

// Dengan template literal (cara baru)
const newWay = `
This is line 1
This is line 2
This is line 3
`;

console.log(oldWay);
console.log(newWay);
```

**Penjabaran:**
1. Tanpa template literal, kita harus menggunakan `\n` untuk baris baru
2. Dengan template literal, baris baru bisa langsung ditulis
3. Spasi dan indentasi juga dipertahankan dalam template literal

**Expression Interpolation:**
```javascript
const price = 10;
const tax = 0.1;
const discount = 0.05;

// Ekspresi kompleks dalam interpolasi
const total = `Total cost: $${(price * (1 + tax)) * (1 - discount)}`;
console.log(total); // Output: Total cost: $10.45

// Interpolasi dengan fungsi
const formatCurrency = (amount) => `$${amount.toFixed(2)}`;
const message = `The price is ${formatCurrency(price)}`;
console.log(message); // Output: The price is $10.00

// Interpolasi dengan objek
const user = { name: 'John', age: 30 };
const userInfo = `User: ${user.name}, Age: ${user.age}`;
console.log(userInfo); // Output: User: John, Age: 30
```

**Penjabaran:**
1. Ekspresi dalam `${}` bisa berupa perhitungan matematika
2. Fungsi bisa dipanggil langsung dalam interpolasi
3. Properti objek bisa diakses dalam interpolasi

### 2. Tagged Template Literals

**Konsep:**
Tagged template literals memungkinkan Anda memproses template literals dengan fungsi kustom. Fungsi tag menerima bagian-bagian dari template literal sebagai argumen.

**Contoh Dasar:**
```javascript
function highlight(strings, ...values) {
  // 'strings' adalah array dari string literal
  // 'values' adalah array dari nilai-nilai yang diinterpolasi
  console.log('Strings:', strings);
  console.log('Values:', values);

  return strings.reduce((result, string, i) => {
    const value = values[i] ? `<mark>${values[i]}</mark>` : '';
    return result + string + value;
  }, '');
}

const name = 'Bob';
const age = 30;
const highlighted = highlight`Hello, my name is ${name} and I am ${age} years old.`;

console.log(highlighted);
// Output: Hello, my name is <mark>Bob</mark> and I am <mark>30</mark> years old.
```

**Penjabaran langkah demi langkah:**
1. Fungsi `highlight` adalah "tag" untuk template literal
2. Parameter pertama (`strings`) berisi bagian-bagian string literal
3. Parameter kedua (`...values`) adalah rest parameter yang berisi nilai-nilai yang diinterpolasi
4. Fungsi menggabungkan kembali string dan nilai-nilai dengan pemrosesan khusus
5. Dalam contoh ini, nilai-nilai diapit dengan tag `<mark>`

**Contoh Lain - Sanitasi HTML:**
```javascript
function sanitizeHTML(strings, ...values) {
  const sanitizedValues = values.map(value => {
    // Sanitasi nilai untuk mencegah XSS
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');
  });

  return strings.reduce((result, string, i) => {
    return result + string + (sanitizedValues[i] || '');
  }, '');
}

const userInput = '<script>alert("XSS")</script>';
const safeOutput = sanitizeHTML`User said: ${userInput}`;
console.log(safeOutput);
// Output: User said: &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;
```

**Penjabaran:**
1. Fungsi tag memproses nilai-nilai yang diinterpolasi untuk sanitasi
2. Karakter-karakter berbahaya diganti dengan entitas HTML
3. Ini membantu mencegah serangan XSS (Cross-Site Scripting)

### 3. String Methods Umum

**Konsep:**
JavaScript menyediakan banyak metode bawaan untuk memanipulasi string. Ini adalah fungsi-fungsi yang bisa dipanggil langsung pada string.

**Metode Trim dan Case:**
```javascript
const text = '  Hello, World!  ';

// trim() - menghapus spasi di awal dan akhir
console.log(`Original: '${text}'`);           // Output: Original: '  Hello, World!  '
console.log(`Trimmed: '${text.trim()}'`);    // Output: Trimmed: 'Hello, World!'

// toUpperCase() / toLowerCase()
console.log(text.trim().toUpperCase());      // Output: "HELLO, WORLD!"
console.log(text.trim().toLowerCase());      // Output: "hello, world!"

// trimStart() dan trimEnd() - menghapus spasi dari awal atau akhir saja
console.log(`Start trimmed: '${text.trimStart()}'`); // Output: Start trimmed: 'Hello, World!  '
console.log(`End trimmed: '${text.trimEnd()}'`);     // Output: End trimmed: '  Hello, World!'
```

**Penjabaran:**
1. `trim()` menghapus spasi dari awal dan akhir string
2. `toUpperCase()` dan `toLowerCase()` mengubah besar/kecil huruf
3. `trimStart()` dan `trimEnd()` hanya menghapus dari satu sisi

**Metode Pencarian:**
```javascript
const text = 'JavaScript is awesome and JavaScript is fun';

// indexOf() - mencari posisi substring (pertama kali ditemukan)
console.log(text.indexOf('JavaScript'));    // Output: 0
console.log(text.indexOf('JavaScript', 5)); // Output: 27 (cari dari indeks 5)

// lastIndexOf() - mencari dari akhir
console.log(text.lastIndexOf('JavaScript')); // Output: 27

// includes() - memeriksa apakah string mengandung substring
console.log(text.includes('awesome'));      // Output: true
console.log(text.includes('Python'));       // Output: false

// startsWith() / endsWith()
console.log(text.startsWith('JavaScript')); // Output: true
console.log(text.endsWith('fun'));          // Output: true
console.log(text.startsWith('is', 11));     // Output: true (cari dari indeks 11)
```

**Penjabaran:**
1. `indexOf()` mengembalikan indeks pertama kemunculan substring
2. `lastIndexOf()` mencari dari akhir string
3. `includes()` mengembalikan boolean
4. `startsWith()` dan `endsWith()` bisa menerima parameter offset

**Metode Penggantian dan Pemisahan:**
```javascript
const text = 'apple,banana,cherry,apple';

// replace() - mengganti kemunculan pertama
console.log(text.replace('apple', 'orange')); // Output: orange,banana,cherry,apple

// replaceAll() - mengganti semua kemunculan
console.log(text.replaceAll('apple', 'orange')); // Output: orange,banana,cherry,orange

// replace() dengan regex untuk mengganti semua
console.log(text.replace(/apple/g, 'orange')); // Output: orange,banana,cherry,orange

// split() - membagi string menjadi array
const fruits = text.split(',');
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'apple']

// split() dengan limit
const limited = text.split(',', 2);
console.log(limited); // Output: ['apple', 'banana']
```

**Penjabaran:**
1. `replace()` hanya mengganti kemunculan pertama
2. `replaceAll()` mengganti semua kemunculan
3. Regex dengan flag `g` bisa digunakan untuk mengganti semua
4. `split()` membagi string berdasarkan delimiter

**Metode Ekstraksi:**
```javascript
const text = 'JavaScript';

// slice() - mengambil bagian dari string
console.log(text.slice(0, 4));   // Output: "Java"
console.log(text.slice(4));      // Output: "Script"
console.log(text.slice(-6));     // Output: "Script" (dari akhir)
console.log(text.slice(4, -2));  // Output: "Scri" (dari indeks 4 ke 2 karakter dari akhir)

// substring() - mirip dengan slice tapi tidak menerima nilai negatif
console.log(text.substring(0, 4));  // Output: "Java"
console.log(text.substring(4, 10)); // Output: "Script"

// substr() - deprecated, tapi masih digunakan (posisi, panjang)
console.log(text.substr(4, 6));     // Output: "Script"
```

**Penjabaran:**
1. `slice()` bisa menggunakan indeks negatif (dihitung dari akhir)
2. `substring()` tidak menerima indeks negatif
3. `substr()` adalah metode yang deprecated tapi masih berfungsi

**Contoh Lengkap - Manipulasi String:**
```javascript
function processText(input) {
  // Langkah-langkah pemrosesan:
  // 1. Hapus spasi di awal/akhir
  // 2. Ubah ke lowercase
  // 3. Ganti spasi dengan underscore
  // 4. Ambil 10 karakter pertama
  return input
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_')  // Ganti satu atau lebih spasi dengan underscore
    .slice(0, 10);
}

console.log(processText("  Hello World  ")); // Output: "hello_worl"
console.log(processText("JavaScript is Great")); // Output: "javascript"
```

**Penjabaran:**
1. Method chaining digunakan untuk memproses string secara bertahap
2. Setiap metode mengembalikan string baru yang bisa diproses lebih lanjut
3. Ini adalah pendekatan fungsional dalam pemrosesan string

### 4. Template Literals dalam Konteks CRUD

**Konsep:**
Template literals sangat berguna dalam operasi CRUD, terutama saat membuat query, pesan log, atau struktur data dinamis.

**Contoh dalam Konteks CRUD:**
```javascript
// Simulasi data pengguna
const user = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin'
};

// Membuat pesan log
const logMessage = `User ${user.name} (ID: ${user.id}, Role: ${user.role}) logged in at ${new Date().toISOString()}`;
console.log(logMessage);

// Membuat query string sederhana (hanya contoh, jangan gunakan dalam produksi karena SQL injection)
const queryString = `SELECT * FROM users WHERE id=${user.id} AND email='${user.email}'`;
console.log(queryString);

// Membuat struktur data JSON
const jsonData = `{
  "id": ${user.id},
  "name": "${user.name}",
  "email": "${user.email}",
  "role": "${user.role}"
}`;
console.log(jsonData);

// Membuat pesan notifikasi
const notification = `Hello ${user.name}, your account has been ${user.role === 'admin' ? 'activated with full privileges' : 'activated'}. Welcome!`;
console.log(notification);
```

**Penjabaran:**
1. Template literals memudahkan pembuatan string dinamis
2. Ekspresi kondisional bisa digunakan dalam interpolasi
3. Ini membuat kode lebih mudah dibaca daripada concatenation biasa

### Latihan Template Literals dan String Methods

**Latihan 1: Format Data Pengguna**
Gunakan template literals dan string methods untuk memformat informasi pengguna.

```javascript
function formatUser(user) {
  const { name, email, joinDate } = user;

  // Format nama: hapus spasi, pisahkan kata, kapitalisasi huruf pertama
  const formattedName = name
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  // Ekstrak domain dari email
  const domain = email.split('@')[1];

  // Format tanggal
  const formattedDate = new Date(joinDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Gunakan template literal untuk format output
  return `
    User Information:
    ==================
    Name: ${formattedName}
    Email: ${email}
    Domain: ${domain}
    Join Date: ${formattedDate}
  `.trim();
}

const user = {
  name: '  john doe  ',
  email: 'john.doe@example.com',
  joinDate: '2023-01-15'
};

console.log(formatUser(user));
/* Output:
    User Information:
    ==================
    Name: John Doe
    Email: john.doe@example.com
    Domain: example.com
    Join Date: January 15, 2023
*/
```

**Penjabaran latihan:**
1. Method chaining digunakan untuk memproses nama: trim → split → map → join
2. `charAt(0).toUpperCase()` mengkapitalisasi huruf pertama
3. `slice(1).toLowerCase()` membuat sisa huruf kecil
4. Template literal digunakan untuk format output yang rapi
5. `toLocaleDateString()` digunakan untuk format tanggal yang lebih manusiawi

**Latihan 2: Pembuatan Query Builder Sederhana**
Gunakan template literals untuk membuat fungsi pembantu query builder.

```javascript
function buildQuery(table, conditions = {}, options = {}) {
  // Mulai dengan SELECT
  let query = `SELECT * FROM ${table}`;

  // Tambahkan WHERE clause jika ada kondisi
  if (Object.keys(conditions).length > 0) {
    const whereClauses = Object.entries(conditions).map(([key, value]) => {
      // Untuk keamanan, seharusnya menggunakan prepared statements
      // Ini hanya contoh sederhana
      if (typeof value === 'string') {
        return `${key} = '${value}'`;
      } else {
        return `${key} = ${value}`;
      }
    });

    query += ` WHERE ${whereClauses.join(' AND ')}`;
  }

  // Tambahkan ORDER BY jika disediakan
  if (options.orderBy) {
    query += ` ORDER BY ${options.orderBy}`;
  }

  // Tambahkan LIMIT jika disediakan
  if (options.limit) {
    query += ` LIMIT ${options.limit}`;
  }

  return query;
}

// Testing
const query1 = buildQuery('users', { status: 'active', age: 25 });
console.log(query1);
// Output: SELECT * FROM users WHERE status = 'active' AND age = 25

const query2 = buildQuery('products', { category: 'electronics' }, { orderBy: 'price DESC', limit: 10 });
console.log(query2);
// Output: SELECT * FROM products WHERE category = 'electronics' ORDER BY price DESC LIMIT 10
```

**Penjabaran latihan:**
1. Template literals digunakan untuk membangun query secara dinamis
2. `Object.entries()` digunakan untuk iterasi kondisi
3. `map()` dan `join()` digunakan untuk membuat klausa WHERE
4. Opsi tambahan seperti ORDER BY dan LIMIT ditambahkan jika tersedia
5. Ini menunjukkan kekuatan template literals dalam pembuatan string dinamis

---

## Modules and Import/Export

### Memahami Modules dan Import/Export

ES6 modules adalah sistem standar untuk mengorganisasi dan mengelola kode JavaScript dalam file-file terpisah. Ini memungkinkan kita untuk membuat kode yang modular, reusable, dan lebih mudah dipelihara.

**Konsep Penting:**
- **Module** adalah file JavaScript yang menyediakan fungsionalitas yang bisa digunakan di file lain
- **Export** adalah cara untuk mengekspor nilai (variabel, fungsi, objek) dari sebuah module
- **Import** adalah cara untuk mengimpor nilai dari module lain
- **Named exports/imports** digunakan untuk mengekspor/mengimpor nilai dengan nama spesifik
- **Default exports/imports** digunakan untuk mengekspor/mengimpor nilai utama dari sebuah module

### 1. Named Exports

**Konsep:**
Named exports memungkinkan Anda mengekspor lebih dari satu nilai dari sebuah modul. Setiap nilai diekspor dengan nama spesifik.

**Contoh Dasar:**
```javascript
// mathUtils.js (contoh struktur modul)
// Named exports langsung pada deklarasi
export const PI = 3.14159;
export const E = 2.71828;

// Named exports untuk fungsi
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}
```

**Penjabaran langkah demi langkah:**
1. Gunakan kata kunci `export` sebelum deklarasi variabel/fungsi
2. Setiap nilai yang diexport memiliki nama spesifik
3. Bisa mengekspor banyak nilai dari satu modul
4. Nama harus digunakan saat mengimpor

**Contoh Lain - Named Exports:**
```javascript
// constants.js
export const API_URL = 'https://api.example.com';
export const MAX_RETRIES = 3;
export const TIMEOUT_MS = 5000;

// helpers.js
export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
```

### 2. Named Imports

**Konsep:**
Named imports digunakan untuk mengimpor nilai yang diekspor dengan nama spesifik dari modul lain.

**Contoh Dasar:**
```javascript
// Untuk Named Imports, sintaksnya seperti ini:
// import { name1, name2 } from './moduleName.js';

// Contoh simulasi (karena kita tidak bisa benar-benar mengimpor di sini):
const mathUtils = {
  PI: 3.14159,
  E: 2.71828,
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

// Simulasi named imports
const { add, subtract, PI } = mathUtils;

console.log(add(5, 3));      // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(PI);             // Output: 3.14159
```

**Penjabaran langkah demi langkah:**
1. Gunakan kurung kurawal `{}` untuk menentukan nilai yang ingin diimpor
2. Nama harus cocok dengan nama saat diekspor
3. Bisa mengimpor beberapa nilai sekaligus
4. Bisa mengganti nama saat mengimpor (alias)

**Named Imports dengan Aliases:**
```javascript
// Simulasi named imports dengan alias
const { add: tambah, subtract: kurang, PI: phi } = mathUtils;

console.log(tambah(10, 5));  // Output: 15
console.log(kurang(10, 5));  // Output: 5
console.log(phi);            // Output: 3.14159
```

**Penjabaran:**
1. Gunakan sintaks `originalName as newName` untuk mengganti nama
2. Ini berguna untuk menghindari konflik nama atau membuat nama lebih deskriptif
3. Alias hanya berlaku di file yang mengimpor

### 3. Default Exports

**Konsep:**
Default export digunakan untuk mengekspor satu nilai utama dari sebuah modul. Hanya boleh ada satu default export per file.

**Contoh Dasar:**
```javascript
// calculator.js (contoh modul dengan default export)
// Default export untuk satu nilai utama
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

export default calculator;

// Atau bisa juga langsung diexport:
// export default {
//   add: (a, b) => a + b,
//   subtract: (a, b) => a - b,
//   multiply: (a, b) => a * b,
//   divide: (a, b) => a / b
// };

// Atau fungsi sebagai default export:
// export default function calculate(operation, a, b) {
//   switch(operation) {
//     case 'add': return a + b;
//     case 'subtract': return a - b;
//     case 'multiply': return a * b;
//     case 'divide': return a / b;
//     default: throw new Error('Unknown operation');
//   }
// }
```

**Penjabaran:**
1. Gunakan `export default` untuk mengekspor nilai utama
2. Hanya boleh satu default export per file
3. Bisa mengekspor fungsi, objek, kelas, atau nilai primitif
4. Saat mengimpor, bisa menggunakan nama apa saja

### 4. Default Imports

**Konsep:**
Default imports digunakan untuk mengimpor nilai default dari sebuah modul.

**Contoh Dasar:**
```javascript
// Untuk Default Import, sintaksnya seperti ini:
// import defaultValue from './moduleName.js';

// Simulasi default import
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

// Simulasi penggunaan
console.log(calculator.add(4, 5));    // Output: 9
console.log(calculator.multiply(4, 5)); // Output: 20
```

**Penjabaran:**
1. Tidak menggunakan kurung kurawal saat mengimpor default
2. Bisa menggunakan nama apa saja saat mengimpor
3. Default export adalah nilai utama dari modul

### 5. Mixed Imports

**Konsep:**
Mixed imports menggabungkan named dan default imports dalam satu pernyataan import.

**Contoh Dasar:**
```javascript
// mathLibrary.js
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

const Calculator = {
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

export default Calculator;

// Simulasi mixed imports:
const moduleContent = {
  PI: 3.14159,
  E: 2.71828,
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  default: {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  }
};

// Simulasi: import Calculator, { PI, add } from './mathLibrary.js';
const Calculator = moduleContent.default;
const { PI, add } = moduleContent;

console.log(PI);                          // Output: 3.14159
console.log(add(2, 3));                 // Output: 5
console.log(Calculator.multiply(2, 3)); // Output: 6
```

**Penjabaran:**
1. Default import biasanya diletakkan pertama
2. Named imports dalam kurung kurawal
3. Bisa menggabungkan keduanya dalam satu pernyataan
4. Default dan named bisa diimpor dari modul yang sama

### 6. Export All dan Re-export

**Konsep:**
Kita bisa mengimpor semua dari modul lain dan mengekspor ulang (re-export) ke modul lain.

**Contoh Export All:**
```javascript
// utilities.js
export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// mathHelpers.js
export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}

// index.js - menggabungkan semua utilitas
// export * from './utilities.js';  // Re-export semua dari utilities
// export * from './mathHelpers.js'; // Re-export semua dari mathHelpers

// Atau bisa selective re-export:
// export { formatDate, capitalize } from './utilities.js';
// export { square, cube } from './mathHelpers.js';

// Simulasi export all:
const utilities = {
  formatDate: (date) => new Date(date).toLocaleDateString(),
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
};

const mathHelpers = {
  square: (x) => x * x,
  cube: (x) => x * x * x
};

// Simulasi re-export
const combinedUtils = { ...utilities, ...mathHelpers };
console.log(combinedUtils.formatDate('2023-01-01')); // Output: formatted date
console.log(combinedUtils.square(4));                // Output: 16
```

**Re-export dengan Renaming:**
```javascript
// mathOperations.js
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }

// advancedMath.js
// Re-export dengan renaming
// export { add as sum, multiply as product } from './mathOperations.js';

// Simulasi:
const mathOperations = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

// Simulasi renaming
const { add: sum, multiply: product } = mathOperations;
console.log(sum(2, 3));     // Output: 5
console.log(product(2, 3)); // Output: 6
```

### 7. Practical Module Example in CRUD Context

**Konsep:**
Berikut contoh bagaimana modules bisa digunakan dalam konteks CRUD (Create, Read, Update, Delete) untuk membuat kode yang modular dan terorganisir.

**Contoh Struktur Modul CRUD:**
```javascript
// models/User.js - Modul untuk definisi User
export class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }
}

// services/userService.js - Modul untuk operasi CRUD
const users = [];

export function createUser(userData) {
  const user = new User(Date.now(), userData.name, userData.email);
  users.push(user);
  return user;
}

export function getUserById(id) {
  return users.find(user => user.id == id);
}

export function updateUser(id, updates) {
  const userIndex = users.findIndex(user => user.id == id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updates };
    return users[userIndex];
  }
  return null;
}

export function deleteUser(id) {
  const userIndex = users.findIndex(user => user.id == id);
  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  }
  return null;
}

export function getAllUsers() {
  return [...users];
}

// controllers/userController.js - Modul untuk logika bisnis
import { createUser, getUserById, updateUser, deleteUser, getAllUsers } from './userService.js';
import { User } from '../models/User.js';

export async function handleGetUser(req, res) {
  try {
    const user = getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function handleCreateUser(req, res) {
  try {
    const user = createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Simulasi penggunaan modul-modul ini:
console.log("=== Simulasi Penggunaan Modul CRUD ===");

// Membuat user baru
const newUser = createUser({ name: 'John Doe', email: 'john@example.com' });
console.log('Created user:', newUser);

// Mendapatkan user
const retrievedUser = getUserById(newUser.id);
console.log('Retrieved user:', retrievedUser);

// Memperbarui user
const updatedUser = updateUser(newUser.id, { name: 'John Smith' });
console.log('Updated user:', updatedUser);

// Mendapatkan semua users
const allUsers = getAllUsers();
console.log('All users:', allUsers);
```

**Penjabaran struktur modul CRUD:**
1. **Models**: Mendefinisikan struktur data (kelas User)
2. **Services**: Berisi fungsi-fungsi CRUD
3. **Controllers**: Berisi logika bisnis dan menangani permintaan
4. Setiap modul memiliki tanggung jawab spesifik
5. Modul bisa diimpor dan digunakan di tempat lain

### Latihan Modules dan Import/Export

**Latihan 1: Membuat Modul Utilitas Sederhana**
Buat modul utilitas yang menyediakan fungsi-fungsi umum dan ekspor dalam berbagai bentuk.

```javascript
// utils/stringUtils.js
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function reverse(str) {
  return str.split('').reverse().join('');
}

export function truncate(str, length = 100, suffix = '...') {
  if (str.length <= length) return str;
  return str.substring(0, length) + suffix;
}

// utils/arrayUtils.js
export function unique(arr) {
  return [...new Set(arr)];
}

export function shuffle(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

// utils/dateUtils.js
export function formatDate(date, format = 'YYYY-MM-DD') {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
}

export function daysAgo(date) {
  const today = new Date();
  const past = new Date(date);
  const diffTime = Math.abs(today - past);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// utils/index.js - menggabungkan semua utilitas
// export * from './stringUtils.js';
// export * from './arrayUtils.js';
// export * from './dateUtils.js';

// Default export untuk objek utilitas terorganisir
const utils = {
  string: {
    capitalize,
    reverse,
    truncate
  },
  array: {
    unique,
    shuffle,
    chunk
  },
  date: {
    formatDate,
    daysAgo
  }
};

// export default utils;

// Simulasi penggunaan:
console.log("=== Penggunaan Modul Utils ===");

// Named imports simulation
const stringFunctions = { capitalize, reverse, truncate };
const arrayFunctions = { unique, shuffle, chunk };
const dateFunctions = { formatDate, daysAgo };

// Penggunaan fungsi-fungsi
console.log(stringFunctions.capitalize('hello world')); // Output: "Hello world"
console.log(stringFunctions.reverse('abcde'));          // Output: "edcba"
console.log(arrayFunctions.unique([1, 2, 2, 3, 3, 4])); // Output: [1, 2, 3, 4]
console.log(dateFunctions.formatDate('2023-01-15'));    // Output: "2023-01-15"

// Simulasi default import
const utilsSimulated = {
  string: stringFunctions,
  array: arrayFunctions,
  date: dateFunctions
};

console.log(utilsSimulated.string.truncate('This is a long text', 10)); // Output: "This is a..."
console.log(utilsSimulated.array.shuffle([1, 2, 3, 4, 5]));            // Output: shuffled array
```

**Penjabaran latihan:**
1. Modul dibagi berdasarkan kategori fungsionalitas
2. Named exports digunakan untuk fungsi-fungsi individual
3. Default export digunakan untuk menggabungkan semua fungsi dalam satu objek
4. Ini membuat API yang konsisten dan mudah digunakan
5. Struktur modular membuat kode lebih mudah dipelihara dan diuji

**Latihan 2: Membangun Sistem Modul untuk Aplikasi Kecil**
Buat sistem modul untuk aplikasi manajemen tugas sederhana.

```javascript
// models/Task.js
export class Task {
  constructor(title, description, priority = 'medium', completed = false) {
    this.id = Date.now() + Math.random(); // ID sederhana
    this.title = title;
    this.description = description;
    this.priority = priority; // 'low', 'medium', 'high'
    this.completed = completed;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  toggleCompleted() {
    this.completed = !this.completed;
    this.updatedAt = new Date();
  }
}

// services/taskService.js
let tasks = [];

export function createTask(taskData) {
  const task = new Task(taskData.title, taskData.description, taskData.priority);
  tasks.push(task);
  return task;
}

export function getAllTasks() {
  return [...tasks];
}

export function getTaskById(id) {
  return tasks.find(task => task.id == id);
}

export function updateTask(id, updates) {
  const taskIndex = tasks.findIndex(task => task.id == id);
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updates, updatedAt: new Date() };
    return tasks[taskIndex];
  }
  return null;
}

export function deleteTask(id) {
  const taskIndex = tasks.findIndex(task => task.id == id);
  if (taskIndex !== -1) {
    return tasks.splice(taskIndex, 1)[0];
  }
  return null;
}

export function getTasksByPriority(priority) {
  return tasks.filter(task => task.priority === priority);
}

export function getCompletedTasks() {
  return tasks.filter(task => task.completed);
}

export function getPendingTasks() {
  return tasks.filter(task => !task.completed);
}

// Simulasi penggunaan modul task
console.log("\n=== Penggunaan Modul Task ===");

// Membuat beberapa tugas
const task1 = createTask({
  title: 'Learn JavaScript Modules',
  description: 'Study ES6 modules and best practices',
  priority: 'high'
});

const task2 = createTask({
  title: 'Build a Project',
  description: 'Create a small application using modules',
  priority: 'medium'
});

console.log('Created tasks:', tasks.length);

// Mendapatkan tugas dengan prioritas tinggi
const highPriorityTasks = getTasksByPriority('high');
console.log('High priority tasks:', highPriorityTasks.length);

// Menandai tugas pertama sebagai selesai
task1.toggleCompleted();
console.log('Task 1 completed:', task1.completed);

// Mendapatkan tugas yang belum selesai
const pendingTasks = getPendingTasks();
console.log('Pending tasks:', pendingTasks.length);

// Menampilkan semua tugas
console.log('All tasks:', getAllTasks());
```

**Penjabaran latihan 2:**
1. Struktur modul mengikuti pola MVC (Model-View-Controller)
2. Model mendefinisikan struktur data
3. Service menyediakan fungsi CRUD
4. Setiap modul memiliki tanggung jawab spesifik
5. Fungsi-fungsi diorganisir secara logis dan mudah digunakan

---

### LATIHAN MANDIRI (Sebelum Lanjut ke BAB 1)

Cobalah kerjakan ini di console browser Anda:

1.  Buat array `angka = [1, 2, 3, 4, 5]`.
2.  Gunakan `.filter` untuk ambil angka > 2.
3.  Sambung dengan `.map` untuk kali 10 hasil saringan tadi.
4.  Sambung dengan `.reduce` untuk menjumlahkan semuanya.
5.  Hasil akhirnya harus: `(30 + 40 + 50) = 120`.

Jika sudah paham konsep ini, Anda siap masuk ke simulasi CRUD Spreadsheet yang sebenarnya!

---

## Pendahuluan: Simulasi Aplikasi Absensi Guru dengan JavaScript

Lupakan contoh-contoh abstrak. Kita akan langsung terjun ke dalam simulasi membangun **Aplikasi Absensi Guru** menggunakan konsep Google Apps Script, tetapi **disimulasikan sepenuhnya dalam JavaScript murni**.

Anggaplah komputer adalah **Robot Pekerja** yang sangat bodoh tapi patuh. Tugas kita adalah memberinya instruksi super detail untuk memproses data dari "Google Sheet" (simulasi dalam array JavaScript) dan menampilkannya di web.

**Penting:** Ini adalah simulasi JavaScript murni, bukan Apps Script asli! Kita akan mensimulasikan konsep Apps Script dalam JavaScript biasa untuk melatih pola pikir algoritma.

Setiap bab dalam panduan ini adalah satu **fitur CRUD** yang akan kita bangun untuk aplikasi absensi, dan kita akan membedah **proses berpikir** di baliknya dari nol.

**Struktur Data Utama (Simulasi Google Sheets):**

```javascript
// Simulasi Sheet 'database' - Data Guru
const dataGuru = [
  ["Nama Lengkap", "NIP", "Jabatan", "Unit Kerja", "Email", "Password", "PIN", "LastCheckInDate", "DeviceID", "fotoProfil"], // Header
  ["Guru Demo 1", "198001012010011001", "Guru Kelas", "Kelas 1A", "guru1@sekolah.id", "1234", "123456", "", "", ""],
  ["Guru Demo 2", "198505052015012002", "Waka Kurikulum", "Kelas 2B", "guru2@sekolah.id", "1234", "123456", "", "", ""],
  ["Admin Demo", "00000000", "Kepala Sekolah", "SDN Pasirhalang", "admin@sekolah.id", "1234", "123456", "", "", ""]
];

// Simulasi Sheet 'data-absensi' - Data Absensi
const dataAbsensi = [
  ["Tanggal", "Nama Guru", "Check In Time", "Check In Status", "Check In Koordinat", "Check In Foto",
   "Check Out Time", "Check Out Status", "Check Out Koordinat", "Check Out Foto",
   "Izin Time", "Izin Status", "Izin Alasan", "Alpha", "Override By Admin", "Admin Name"], // Header
];

// Simulasi Sheet 'config' - Konfigurasi Sekolah
const configSekolah = [
  ["Parameter", "Nilai"],
  ["Latitude", -6.752088],
  ["Longitude", 107.458523],
  ["Radius", 50],
  ["Jam Masuk", "07:00"],
  ["Jam Batas Izin", "09:00"],
  ["Jam Pulang", "14:00"],
  ["Nama Sekolah", "SDN Pasirhalang"],
  ["Jam Pulang Jumat", "11:00"]
];

// Simulasi Sheet 'jadwal-kerja' - Jadwal Hari Kerja/Libur
const jadwalKerja = [
  ["Tanggal", "Status", "Keterangan"],
  ["2026-01-01", "Libur", "Tahun Baru"],
  ["2026-01-02", "Kerja", "-"],
  ["2026-01-03", "Kerja", "-"],
  ["2026-01-04", "Libur", "Hari Minggu"],
  ["2026-01-05", "Kerja", "-"]
];
```

Mari kita mulai membangun fitur CRUD pertama.

---

## BAB 1: READ - Mengambil & Menampilkan Data Guru (Loop Dasar)

### Skenario Proyek Absensi
Sebagai langkah awal, kita ingin menampilkan daftar semua guru yang terdaftar di sistem. Ini adalah operasi **READ** pertama dalam CRUD.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Analisis & Rencana Logika (Bahasa Manusia)**
*   **Tujuan:** Mengunjungi setiap baris data guru dan menampilkannya dalam format yang mudah dibaca.
*   **Rencana:** "Robot, ambil data dari sheet database. Lalu, untuk setiap baris (kecuali header), tampilkan informasi lengkap guru tersebut."

**2. Identifikasi Konsep Kunci**
*   **PENGULANGAN (Loop):** Untuk mengunjungi setiap baris data.
*   **SKIP HEADER:** Melewati baris pertama (indeks 0) karena itu adalah judul kolom.
*   **DESTRUCTURING:** Mengurai array untuk mengakses data berdasarkan indeks.

**3. Desain Algoritma Detail (Cetak Biru untuk Robot)**
*   **Untuk Pengulangan (Loop):**
    *   **Titik Mulai:** Mulai dari indeks 1 (lewati header). -> `let i = 1;`
    *   **Aturan Berhenti:** Setelah baris terakhir. -> `i < dataGuru.length`
    *   **Langkah Selanjutnya:** Tambah 1 ke `i` di setiap putaran. -> `i++`
*   **Aksi di Dalam Setiap Pengulangan:**
    *   Ambil baris guru: `const barisGuru = dataGuru[i]`
    *   Tampilkan informasi lengkap dengan format yang rapi.

**4. Implementasi & Penjelasan Kode**
```javascript
function tampilkanSemuaGuru() {
  console.log("=== DAFTAR SEMUA GURU ===");

  // Loop dimulai dari 1 untuk melewati header
  for (let i = 1; i < dataGuru.length; i++) {
    const barisGuru = dataGuru[i];

    // Akses data berdasarkan indeks kolom
    const nama = barisGuru[0];
    const nip = barisGuru[1];
    const jabatan = barisGuru[2];
    const unitKerja = barisGuru[3];
    const email = barisGuru[4];

    console.log(`\nGuru ke-${i}:`);
    console.log(`  Nama: ${nama}`);
    console.log(`  NIP: ${nip}`);
    console.log(`  Jabatan: ${jabatan}`);
    console.log(`  Unit: ${unitKerja}`);
    console.log(`  Email: ${email}`);
  }
}

tampilkanSemuaGuru();
```

**5. Simulasi Alternatif dengan .forEach()**
```javascript
function tampilkanSemuaGuruForEach() {
  console.log("=== DAFTAR SEMUA GURU (forEach) ===");

  // Lewati header dengan slice(1)
  dataGuru.slice(1).forEach((barisGuru, index) => {
    const [nama, nip, jabatan, unitKerja, email] = barisGuru;

    console.log(`\nGuru ke-${index + 1}:`);
    console.log(`  Nama: ${nama}`);
    console.log(`  NIP: ${nip}`);
    console.log(`  Jabatan: ${jabatan}`);
    console.log(`  Unit: ${unitKerja}`);
    console.log(`  Email: ${email}`);
  });
}

tampilkanSemuaGuruForEach();
```

**6. Latihan Perulangan**
Berikut adalah beberapa latihan untuk memperkuat pemahaman Anda tentang perulangan:

**Latihan 1: Perulangan For Dasar**
Buat fungsi yang mencetak semua angka genap dari 0 hingga 20.

```javascript
function cetakAngkaGenap() {
  for (let i = 0; i <= 20; i += 2) {
    console.log(i);
  }
}

cetakAngkaGenap();
```

**Latihan 2: Latihan Perulangan While**
Buat fungsi yang menghasilkan angka acak antara 1 dan 10 sampai mendapatkan angka 7, lalu berhenti.

```javascript
function sampaiTujuh() {
  let num;
  let percobaan = 0;

  while (num !== 7) {
    num = Math.floor(Math.random() * 10) + 1; // Angka acak 1-10
    percobaan++;
    console.log(`Percobaan ${percobaan}: ${num}`);
  }

  console.log(`Menemukan 7 setelah ${percobaan} percobaan!`);
}

sampaiTujuh();
```

**Latihan 3: Manipulasi Array dengan For...of**
Diberikan array skor siswa, hitung rata-rata skornya.

```javascript
function hitungRataRata(skors) {
  let total = 0;

  for (const skor of skors) {
    total += skor;
  }

  return total / skors.length;
}

const skorSiswa = [85, 92, 78, 96, 88];
console.log(`Rata-rata skor: ${hitungRataRata(skorSiswa)}`);
```

**Latihan Tambahan Perulangan**

**Latihan 4: Deret Fibonacci**
Buat fungsi yang mencetak deret Fibonacci sebanyak n bilangan (misalnya, untuk n=10: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34).

**Petunjuk:**
1. Buat fungsi bernama `deretFibonacci` yang menerima parameter `n`
2. Inisialisasi dua variabel pertama dari deret Fibonacci (0 dan 1)
3. Gunakan perulangan for untuk menghitung dan mencetak n bilangan
4. Dalam setiap iterasi, hitung bilangan berikutnya dengan menjumlahkan dua bilangan sebelumnya
5. Perbarui nilai dua variabel sebelumnya untuk iterasi berikutnya

**Latihan 5: Bilangan Prima**
Buat fungsi yang mencetak semua bilangan prima antara 1 dan n.

**Petunjuk:**
1. Buat fungsi bernama `cetakPrima` yang menerima parameter `n`
2. Gunakan perulangan luar untuk mengiterasi dari 2 ke n
3. Untuk setiap bilangan, gunakan perulangan dalam untuk memeriksa apakah bilangan tersebut prima
4. Bilangan prima adalah bilangan yang hanya habis dibagi oleh 1 dan dirinya sendiri
5. Untuk memeriksa apakah bilangan x prima, cukup periksa pembagian dari 2 hingga akar kuadrat dari x
6. Jika bilangan adalah prima, cetak bilangan tersebut

---

## Kondisional

### Memahami Kondisional

Kondisional memungkinkan program Anda membuat keputusan berdasarkan kondisi tertentu. Mereka seperti mengajukan pertanyaan "ya/tidak" dalam kode Anda dan mengeksekusi jalur kode yang berbeda tergantung pada jawabannya.

### Struktur Kondisional Dasar

#### 1. Pernyataan If
Struktur kondisional paling dasar.

```javascript
const usia = 18;

if (usia >= 18) {
  console.log("Anda berhak memilih!");
}
```

**Penjabaran logika:**
1. Evaluasi kondisi `usia >= 18`
2. Jika benar, eksekusi kode di dalam kurung kurawal
3. Jika salah, lewati kode di dalam kurung kurawal

#### 2. Pernyataan If...Else
Memberikan alternatif ketika kondisinya salah.

```javascript
const suhu = 25;

if (suhu > 30) {
  console.log("Cuaca sangat panas!");
} else {
  console.log("Cuaca tidak terlalu panas.");
}
```

**Penjabaran logika:**
1. Jika kondisi pertama benar, eksekusi blok pertama
2. Jika kondisi pertama salah, eksekusi blok else
3. Tepat satu dari blok-blok tersebut akan berjalan

#### 3. Rantai If...Else If...Else
Untuk beberapa kondisi.

```javascript
const skor = 85;

if (skor >= 90) {
  console.log("Nilai: A");
} else if (skor >= 80) {
  console.log("Nilai: B");
} else if (skor >= 70) {
  console.log("Nilai: C");
} else {
  console.log("Nilai: E");
}
```

**Penjabaran logika:**
1. Periksa kondisi pertama
2. Jika salah, periksa kondisi berikutnya
3. Teruskan pemeriksaan sampai kondisi benar atau mencapai else terakhir
4. Hanya kondisi pertama yang benar yang akan dieksekusi

#### 4. Operator Ternary
Cara singkat untuk pernyataan if...else sederhana.

```javascript
const usia = 20;
const status = usia >= 18 ? "dewasa" : "remaja";
console.log(status); // Output: "dewasa"
```

**Sintaks:** `kondisi ? nilaiJikaBenar : nilaiJikaSalah`

### Operator Logika dalam Kondisional

#### AND (&&), OR (||), NOT (!)

```javascript
const usia = 25;
const punyaSim = true;

// Operator AND: kedua kondisi harus benar
if (usia >= 18 && punyaSim) {
  console.log("Boleh mengemudi secara legal");
}

// Operator OR: setidaknya satu kondisi harus benar
const akhirPekan = true;
const hariLibur = false;
if (akhirPekan || hariLibur) {
  console.log("Tidak ada kerjaan hari ini!");
}

// Operator NOT: membalikkan nilai boolean
const sudahLogin = false;
if (!sudahLogin) {
  console.log("Silakan login terlebih dahulu");
}
```

### Latihan Kondisional

Berikut adalah beberapa latihan untuk memperkuat pemahaman Anda tentang kondisional:

**Latihan 1: Klasifikasi Usia**
Buat fungsi yang menerima usia dan mengembalikan kategori usia: "Anak-anak" (0-12), "Remaja" (13-17), "Dewasa" (18-59), atau "Lansia" (60+).

**Petunjuk:**
1. Buat fungsi bernama `klasifikasiUsia` yang menerima parameter `usia`
2. Gunakan struktur if...else if...else untuk memeriksa rentang usia
3. Pastikan urutan kondisi benar (dari yang paling spesifik ke umum, atau gunakan operator perbandingan yang tepat)
4. Kembalikan string kategori yang sesuai

**Latihan 2: Validasi Password**
Buat fungsi yang memvalidasi kekuatan password berdasarkan kriteria: minimal 8 karakter, mengandung huruf besar, huruf kecil, dan angka.

**Petunjuk:**
1. Buat fungsi bernama `validasiPassword` yang menerima parameter `password`
2. Periksa panjang password menggunakan properti `.length`
3. Gunakan metode string seperti `.includes()`, `.some()`, atau ekspresi reguler untuk memeriksa keberadaan huruf besar, huruf kecil, dan angka
4. Gunakan operator logika && untuk menggabungkan semua kondisi
5. Kembalikan true jika password memenuhi semua kriteria, false jika tidak

**Latihan 3: Kalkulator Sederhana**
Buat fungsi yang menerima dua angka dan operator (+, -, *, /) serta mengembalikan hasil perhitungan.

**Petunjuk:**
1. Buat fungsi bernama `kalkulator` yang menerima tiga parameter: `angka1`, `angka2`, dan `operator`
2. Gunakan switch statement atau if...else if...else untuk menentukan operasi berdasarkan operator
3. Lakukan operasi matematika yang sesuai untuk setiap kasus
4. Tangani kasus pembagian dengan nol (jika operator adalah '/' dan angka2 adalah 0)
5. Kembalikan hasil perhitungan atau pesan kesalahan

**Latihan Tambahan Kondisional**

**Latihan 4: Sistem Diskon Toko**
Buat fungsi yang menghitung harga akhir setelah diskon berdasarkan total belanja dan status keanggotaan (premium/gold/silver/regular).

**Petunjuk:**
1. Buat fungsi bernama `hitungDiskon` dengan parameter `totalBelanja` dan `statusAnggota`
2. Gunakan struktur switch atau if...else untuk menentukan persentase diskon berdasarkan status
3. Tambahkan kondisi tambahan: jika total belanja > 1jt, tambah diskon 5%
4. Kembalikan harga akhir setelah diskon

**Latihan 5: Validasi Tanggal**
Buat fungsi yang memvalidasi apakah tanggal yang diberikan valid (termasuk pengecekan tahun kabisat).

**Petunjuk:**
1. Buat fungsi bernama `validasiTanggal` dengan parameter `hari`, `bulan`, `tahun`
2. Periksa apakah bulan valid (1-12)
3. Periksa apakah hari valid berdasarkan bulan (perhatikan Februari dan tahun kabisat)
4. Untuk tahun kabisat: habis dibagi 4, tapi tidak habis dibagi 100, kecuali juga habis dibagi 400
5. Kembalikan true jika tanggal valid, false jika tidak

---

## BAB 2: READ dengan Filter - Menghitung Guru per Jabatan (Loop dengan Keputusan)

### Skenario Proyek Absensi
Manajemen ingin tahu, dari semua guru, berapa banyak yang jabatannya "Guru Kelas"? Kita perlu membuat fungsi yang bisa menghitung ini berdasarkan kriteria jabatan.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Analisis & Rencana Logika (Bahasa Manusia)**
*   **Tujuan:** Menghitung jumlah guru yang memenuhi kriteria jabatan tertentu.
*   **Rencana:** "Robot, siapkan 'mesin hitung' mulai dari 0. Kunjungi setiap baris data guru (lewati header). Untuk setiap guru, lihat kolom jabatan. Jika tertulis 'Guru Kelas', tambahkan 1 ke mesin hitung. Jika tidak, abaikan. Setelah semua baris diperiksa, laporkan angka akhir di mesin hitung."

**2. Identifikasi Konsep Kunci**
*   **PENGULANGAN (Loop):** Untuk mengunjungi setiap baris.
*   **KEPUTUSAN (Kondisional / if):** Untuk memfilter berdasarkan kriteria.
*   **AKUMULATOR:** Variabel untuk menyimpan hasil hitungan.

**3. Desain Algoritma Detail (Cetak Biru untuk Robot)**
*   **Persiapan (Sebelum Loop):**
    *   Buat variabel `jumlahGuruKelas` dengan nilai awal `0`.
    *   Definisikan konstanta `INDEKS_JABATAN = 2` (kolom jabatan ada di indeks 2).
*   **Untuk Pengulangan (Loop):**
    *   **Titik Mulai:** Mulai dari indeks 1 (lewati header). -> `let i = 1;`
    *   **Aturan Berhenti:** Setelah baris terakhir. -> `i < dataGuru.length`
    *   **Langkah Selanjutnya:** Pindah ke baris berikutnya. -> `i++`
*   **Aksi & Keputusan di Dalam Setiap Pengulangan:**
    *   Ambil baris guru: `const barisGuru = dataGuru[i]`
    *   Ambil data jabatan: `const jabatanGuru = barisGuru[INDEKS_JABATAN]`
    *   **Buat Keputusan:**
        *   **Syarat:** Apakah `jabatanGuru` sama dengan `"Guru Kelas"`?
        *   **Aksi Jika YA:** Tambahkan 1 ke `jumlahGuruKelas`. -> `jumlahGuruKelas++`
        *   **Aksi Jika TIDAK:** Tidak melakukan apa-apa.
*   **Setelah Loop Selesai:**
    *   Kembalikan nilai akhir dari `jumlahGuruKelas`.

**4. Implementasi & Penjelasan Kode**
```javascript
function hitungGuruPerJabatan(targetJabatan) {
  // Persiapan 'mesin hitung' sebelum loop
  let jumlahGuru = 0;
  const INDEKS_JABATAN = 2; // Kolom jabatan ada di indeks 2

  // Loop dimulai dari 1 untuk melewati header
  for (let i = 1; i < dataGuru.length; i++) {
    const barisGuru = dataGuru[i];
    const jabatanGuru = barisGuru[INDEKS_JABATAN];

    // Implementasi dari 'Desain Keputusan' kita
    if (jabatanGuru === targetJabatan) {
      // Jika syarat terpenuhi, tambahkan 1 ke mesin hitung
      jumlahGuru = jumlahGuru + 1;
    }
  }

  // Setelah loop selesai, kembalikan hasil akhir
  return jumlahGuru;
}

// Test fungsi
const totalGuruKelas = hitungGuruPerJabatan("Guru Kelas");
console.log(`Total guru dengan jabatan 'Guru Kelas': ${totalGuruKelas}`); // Output: 1

const totalWakaKurikulum = hitungGuruPerJabatan("Waka Kurikulum");
console.log(`Total guru dengan jabatan 'Waka Kurikulum': ${totalWakaKurikulum}`); // Output: 1
```

**5. Simulasi Alternatif dengan .filter()**
```javascript
function hitungGuruPerJabatanFilter(targetJabatan) {
  return dataGuru.slice(1).filter(guru => guru[2] === targetJabatan).length;
}

// Test fungsi alternatif
const totalGuruKelasFilter = hitungGuruPerJabatanFilter("Guru Kelas");
console.log(`Total guru dengan jabatan 'Guru Kelas' (filter): ${totalGuruKelasFilter}`); // Output: 1
```

---

## BAB 3: READ dengan Transformasi - Menyiapkan Data Guru untuk Frontend

### Skenario Proyek Absensi
Data mentah `["Guru Demo 1", "198001012010011001", "Guru Kelas", ...]` sulit dibaca di kode frontend. Kita tidak mau menghafal bahwa `baris[0]` adalah nama dan `baris[2]` adalah jabatan.

Tugas kita adalah mengubah setiap baris data guru menjadi format **Objek** yang lebih deskriptif, seperti ini:
`{ nama: "Guru Demo 1", nip: "198001012010011001", jabatan: "Guru Kelas", ... }`

### Tahapan Pola Pikir & Pembentukan Logika

**1. Analisis & Rencana Logika (Bahasa Manusia)**
*   **Tujuan:** Mengubah setiap baris array guru menjadi sebuah objek yang terstruktur.
*   **Rencana:** "Robot, siapkan sebuah 'wadah' kosong untuk menampung hasil. Kunjungi setiap baris guru (lewati header). Untuk setiap baris, buat sebuah 'kartu data' (objek) kosong. Isi kartu data itu: properti `nama` diisi dengan data dari kolom pertama, `nip` dari kolom kedua, dan seterusnya. Setelah satu kartu data selesai, masukkan ke dalam wadah. Lakukan ini untuk semua baris. Terakhir, berikan aku wadah yang sudah terisi penuh."

**2. Identifikasi Konsep Kunci**
*   **PENGULANGAN (Loop):** Untuk mengunjungi setiap baris.
*   **AKUMULATOR (Array):** Wadah untuk menampung hasil transformasi.
*   **TRANSFORMASI:** Mengubah bentuk data dari array ke objek.

**3. Desain Algoritma Detail (Cetak Biru untuk Robot)**
*   **Persiapan (Sebelum Loop):**
    *   Buat array kosong: `const guruObjects = [];`.
*   **Untuk Pengulangan (Loop):**
    *   **Titik Mulai:** Mulai dari indeks 1 (lewati header). -> `let i = 1;`
    *   **Aturan Berhenti:** Sampai baris terakhir. -> `i < dataGuru.length`
    *   **Langkah Selanjutnya:** Pindah ke baris berikutnya. -> `i++`
*   **Aksi Transformasi di Dalam Setiap Pengulangan:**
    *   Ambil baris array: `const barisGuru = dataGuru[i]`
    *   Buat objek guru dengan properti deskriptif:
        *   `nama: barisGuru[0]`
        *   `nip: barisGuru[1]`
        *   `jabatan: barisGuru[2]`
        *   `unitKerja: barisGuru[3]`
        *   `email: barisGuru[4]`
        *   `pin: barisGuru[6]`
        *   `deviceId: barisGuru[8]`
    *   Masukkan objek ke array: `guruObjects.push(objekGuru);`
*   **Setelah Loop Selesai:**
    *   Kembalikan array `guruObjects`.

**4. Implementasi & Penjelasan Kode**
```javascript
function transformDataGuruUntukFrontend() {
  // 1. Persiapan wadah hasil
  const guruObjects = [];

  // 2. Loop untuk mengunjungi setiap baris data guru
  for (let i = 1; i < dataGuru.length; i++) {
    const barisGuru = dataGuru[i];

    // 3. Proses Transformasi di dalam loop
    // Membuat objek dengan properti yang deskriptif
    const objekGuru = {
      nama: barisGuru[0],           // Ambil data dari indeks 0
      nip: barisGuru[1],            // Ambil data dari indeks 1
      jabatan: barisGuru[2],        // Ambil data dari indeks 2
      unitKerja: barisGuru[3],      // Ambil data dari indeks 3
      email: barisGuru[4],          // Ambil data dari indeks 4
      pin: barisGuru[6],            // Ambil data dari indeks 6 (PIN)
      lastCheckIn: barisGuru[7],    // Ambil data dari indeks 7
      deviceId: barisGuru[8],       // Ambil data dari indeks 8
      fotoProfil: barisGuru[9]      // Ambil data dari indeks 9
    };

    // 4. Masukkan objek yang sudah jadi ke dalam wadah hasil
    guruObjects.push(objekGuru);
  }

  // 5. Kembalikan wadah yang sudah berisi data yang ditransformasi
  return guruObjects;
}

const dataGuruSiapKirim = transformDataGuruUntukFrontend();
console.log("Data guru yang siap dikirim ke Frontend:", dataGuruSiapKirim);
```

**5. Simulasi Alternatif dengan .map()**
```javascript
function transformDataGuruMap() {
  return dataGuru.slice(1).map(barisGuru => ({
    nama: barisGuru[0],
    nip: barisGuru[1],
    jabatan: barisGuru[2],
    unitKerja: barisGuru[3],
    email: barisGuru[4],
    pin: barisGuru[6],
    lastCheckIn: barisGuru[7],
    deviceId: barisGuru[8],
    fotoProfil: barisGuru[9]
  }));
}

const dataGuruMap = transformDataGuruMap();
console.log("Data guru (map):", dataGuruMap);
```

---

## BAB 4: READ dengan Pencarian - Mencari Guru Berdasarkan NIP

### Skenario Proyek Absensi
Sistem login mengetik NIP "198001012010011001" untuk autentikasi. Aplikasi harus menemukan data guru tersebut dari ratusan baris data guru.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Analisis & Rencana Logika**
*   **Tujuan:** Menemukan **satu** baris data guru yang cocok dengan NIP yang dicari.
*   **Rencana:** "Robot, ini NIP yang saya cari: '198001012010011001'. Kunjungi setiap baris data guru. Cek kolom NIP. Apakah sama dengan NIP ini? Jika YA, ambil data itu, berikan padaku, dan **berhenti mencari** (tidak perlu cek sisanya). Jika sampai baris terakhir tidak ketemu, bilang 'Data tidak ditemukan'."

**2. Identifikasi Konsep Kunci**
*   **PENGULANGAN (Loop):** Untuk memeriksa satu per satu.
*   **KEPUTUSAN (If):** Untuk mencocokkan NIP.
*   **PENGHENTIAN DINI (Return):** Efisiensi, berhenti begitu ketemu.

**3. Desain Algoritma Detail**
*   **Input:** `targetNIP` (misal: "198001012010011001").
*   **Loop:** Dari `i = 1` sampai akhir data guru.
*   **Di dalam Loop:**
    *   Ambil NIP dari baris saat ini: `currentNIP = dataGuru[i][1]` (NIP ada di indeks 1).
    *   Cek: `if (currentNIP === targetNIP)`.
    *   Jika Ya: `return` objek guru lengkap.
*   **Di luar Loop (Jika loop selesai tanpa return):**
    *   `return null` (artinya tidak ketemu).

**4. Implementasi Kode**
```javascript
function cariGuruBerdasarkanNIP(targetNIP) {
  for (let i = 1; i < dataGuru.length; i++) {
    const barisGuru = dataGuru[i];
    const nipSaatIni = barisGuru[1]; // NIP ada di kolom 1

    // Cek kesamaan NIP
    if (nipSaatIni === targetNIP) {
      // KETEMU! Langsung kembalikan hasilnya dan fungsi berhenti di sini.
      return {
        nama: barisGuru[0],
        nip: barisGuru[1],
        jabatan: barisGuru[2],
        unitKerja: barisGuru[3],
        email: barisGuru[4],
        pin: barisGuru[6],
        deviceId: barisGuru[8]
      };
    }
  }

  // Jika kode sampai di sini, berarti loop sudah selesai dan tidak ada yang cocok.
  return null;
}

// Test pencarian
const hasilPencarianGuru = cariGuruBerdasarkanNIP("198001012010011001");
if (hasilPencarianGuru) {
  console.log("Ditemukan:", hasilPencarianGuru.nama, "-", hasilPencarianGuru.jabatan);
} else {
  console.log("Guru tidak ditemukan.");
}

// Test NIP yang tidak ada
const hasilTidakAda = cariGuruBerdasarkanNIP("999999999999999999");
if (hasilTidakAda) {
  console.log("Ditemukan:", hasilTidakAda.nama);
} else {
  console.log("Guru dengan NIP tersebut tidak ditemukan.");
}
```

**5. Simulasi Alternatif dengan .find()**
```javascript
function cariGuruFind(targetNIP) {
  const guruDitemukan = dataGuru.slice(1).find(guru => guru[1] === targetNIP);
  
  if (guruDitemukan) {
    return {
      nama: guruDitemukan[0],
      nip: guruDitemukan[1],
      jabatan: guruDitemukan[2],
      unitKerja: guruDitemukan[3],
      email: guruDitemukan[4],
      pin: guruDitemukan[6],
      deviceId: guruDitemukan[8]
    };
  }
  
  return null;
}

const hasilFind = cariGuruFind("198001012010011001");
console.log("Hasil pencarian (find):", hasilFind);
```

---

## BAB 5: CREATE - Menambahkan Data Guru Baru ke Spreadsheet

### Skenario Proyek Absensi
Kita perlu menambahkan guru baru ke dalam sistem. Ini adalah operasi **CREATE** dalam CRUD.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Analisis & Rencana Logika**
*   **Tujuan:** Menambahkan baris data guru baru ke dalam array data guru.
*   **Rencana:** "Robot, buat baris data baru sesuai format yang sudah ada. Tambahkan baris tersebut ke akhir array data guru."

**2. Identifikasi Konsep Kunci**
*   **ARRAY PUSH:** Menambahkan elemen baru ke akhir array.
*   **VALIDASI DATA:** Memastikan data yang dimasukkan sesuai format.

**3. Desain Algoritma Detail**
*   **Input:** Data guru baru (nama, nip, jabatan, dll).
*   **Validasi:** Pastikan semua data wajib diisi.
*   **Buat Baris Baru:** Susun data dalam format array sesuai struktur sheet.
*   **Tambahkan ke Array:** Gunakan `push()` untuk menambahkan baris ke array.

**4. Implementasi Kode**
```javascript
function tambahGuruBaru(nama, nip, jabatan, unitKerja, email, password, pin) {
  // Validasi data wajib
  if (!nama || !nip || !jabatan || !unitKerja || !email) {
    console.log("Error: Data wajib tidak boleh kosong!");
    return false;
  }

  // Buat baris data baru sesuai format sheet
  const barisBaru = [
    nama,           // Kolom A: Nama Lengkap
    nip,            // Kolom B: NIP
    jabatan,        // Kolom C: Jabatan
    unitKerja,      // Kolom D: Unit Kerja
    email,          // Kolom E: Email
    password || "1234", // Kolom F: Password (default jika tidak disediakan)
    pin || "000000",   // Kolom G: PIN (default jika tidak disediakan)
    "",             // Kolom H: LastCheckInDate
    "",             // Kolom I: DeviceID
    ""              // Kolom J: Foto Profil
  ];

  // Tambahkan baris baru ke array data guru
  dataGuru.push(barisBaru);
  
  console.log(`✅ Guru baru berhasil ditambahkan: ${nama} (${nip})`);
  return true;
}

// Test penambahan guru baru
tambahGuruBaru(
  "Guru Baru", 
  "199001012020012003", 
  "Guru Matematika", 
  "Kelas 3A", 
  "gurubaru@sekolah.id", 
  "password123", 
  "789012"
);

console.log("Data guru setelah penambahan:");
console.table(dataGuru.slice(1)); // Tampilkan semua data guru kecuali header
```

**5. Simulasi Alternatif dengan Validasi Lebih Lengkap**
```javascript
function tambahGuruValidasiLengkap(guruData) {
  // Validasi data wajib
  const requiredFields = ['nama', 'nip', 'jabatan', 'unitKerja', 'email'];
  for (const field of requiredFields) {
    if (!guruData[field]) {
      console.log(`Error: Field ${field} wajib diisi!`);
      return false;
    }
  }

  // Validasi format NIP (harus angka dan panjang tertentu)
  if (!/^\d+$/.test(guruData.nip) || guruData.nip.length < 8) {
    console.log("Error: Format NIP tidak valid!");
    return false;
  }

  // Validasi format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(guruData.email)) {
    console.log("Error: Format email tidak valid!");
    return false;
  }

  // Buat baris data baru
  const barisBaru = [
    guruData.nama,
    guruData.nip,
    guruData.jabatan,
    guruData.unitKerja,
    guruData.email,
    guruData.password || "1234",
    guruData.pin || "000000",
    "",
    "",
    ""
  ];

  // Cek apakah NIP sudah ada
  const nipExists = dataGuru.slice(1).some(guru => guru[1] === guruData.nip);
  if (nipExists) {
    console.log("Error: NIP sudah terdaftar!");
    return false;
  }

  // Tambahkan ke array
  dataGuru.push(barisBaru);
  console.log(`✅ Guru baru berhasil ditambahkan: ${guruData.nama} (${guruData.nip})`);
  return true;
}

// Test penambahan guru dengan validasi
tambahGuruValidasiLengkap({
  nama: "Guru Validasi",
  nip: "198505052015012004",
  jabatan: "Guru Bahasa Indonesia",
  unitKerja: "Kelas 4B",
  email: "guruvalidasi@sekolah.id",
  password: "sandi123",
  pin: "321098"
});
```

---

## BAB 6: UPDATE - Memperbarui Data Guru di Spreadsheet

### Skenario Proyek Absensi
Kita perlu memperbarui informasi seorang guru, misalnya mengganti email atau unit kerja. Ini adalah operasi **UPDATE** dalam CRUD.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Analisis & Rencana Logika**
*   **Tujuan:** Memperbarui data seorang guru berdasarkan identitasnya (NIP).
*   **Rencana:** "Robot, cari guru berdasarkan NIP. Jika ditemukan, ubah data sesuai dengan informasi baru yang diberikan."

**2. Identifikasi Konsep Kunci**
*   **PENCARIAN:** Menemukan data yang akan diupdate.
*   **MODIFIKASI ARRAY:** Mengganti nilai di indeks tertentu.
*   **VALIDASI:** Memastikan data yang diupdate valid.

**3. Desain Algoritma Detail**
*   **Input:** NIP guru dan data baru yang akan diupdate.
*   **Cari Guru:** Temukan indeks baris guru berdasarkan NIP.
*   **Update Data:** Ganti nilai-nilai yang sesuai di baris tersebut.
*   **Output:** Status keberhasilan update.

**4. Implementasi Kode**
```javascript
function updateGuruByNIP(nip, newData) {
  // Cari indeks guru berdasarkan NIP
  let guruIndex = -1;
  for (let i = 1; i < dataGuru.length; i++) {
    if (dataGuru[i][1] === nip) {
      guruIndex = i;
      break;
    }
  }

  // Jika guru tidak ditemukan
  if (guruIndex === -1) {
    console.log(`Error: Guru dengan NIP ${nip} tidak ditemukan!`);
    return false;
  }

  // Update data sesuai dengan newData
  if (newData.nama !== undefined) dataGuru[guruIndex][0] = newData.nama;
  if (newData.jabatan !== undefined) dataGuru[guruIndex][2] = newData.jabatan;
  if (newData.unitKerja !== undefined) dataGuru[guruIndex][3] = newData.unitKerja;
  if (newData.email !== undefined) dataGuru[guruIndex][4] = newData.email;
  if (newData.password !== undefined) dataGuru[guruIndex][5] = newData.password;
  if (newData.pin !== undefined) dataGuru[guruIndex][6] = newData.pin;

  console.log(`✅ Data guru dengan NIP ${nip} berhasil diperbarui!`);
  return true;
}

// Test update data guru
updateGuruByNIP("198001012010011001", {
  email: "gurudemo1_baru@sekolah.id",
  unitKerja: "Kelas 1B"
});

// Tampilkan data guru setelah update
console.log("Data guru setelah update:");
console.table(dataGuru.slice(1));
```

**5. Simulasi Alternatif dengan .findIndex()**
```javascript
function updateGuruFindIndex(nip, newData) {
  // Cari indeks guru berdasarkan NIP
  const guruIndex = dataGuru.findIndex(row => row[1] === nip && row !== dataGuru[0]); // Lewati header
  
  if (guruIndex === -1) {
    console.log(`Error: Guru dengan NIP ${nip} tidak ditemukan!`);
    return false;
  }

  // Update data sesuai dengan newData
  Object.keys(newData).forEach(key => {
    switch(key) {
      case 'nama':
        dataGuru[guruIndex][0] = newData[key];
        break;
      case 'jabatan':
        dataGuru[guruIndex][2] = newData[key];
        break;
      case 'unitKerja':
        dataGuru[guruIndex][3] = newData[key];
        break;
      case 'email':
        dataGuru[guruIndex][4] = newData[key];
        break;
      case 'password':
        dataGuru[guruIndex][5] = newData[key];
        break;
      case 'pin':
        dataGuru[guruIndex][6] = newData[key];
        break;
    }
  });

  console.log(`✅ Data guru dengan NIP ${nip} berhasil diperbarui!`);
  return true;
}

// Test update dengan findIndex
updateGuruFindIndex("198505052015012002", {
  jabatan: "Waka Kurikulum Senior",
  email: "gurudemo2_baru@sekolah.id"
});
```

---

## BAB 7: DELETE - Menghapus Data Guru dari Spreadsheet

### Skenario Proyek Absensi
Kita perlu menghapus data seorang guru dari sistem. Ini adalah operasi **DELETE** dalam CRUD.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Analisis & Rencana Logika**
*   **Tujuan:** Menghapus data seorang guru berdasarkan identitasnya (NIP).
*   **Rencana:** "Robot, cari guru berdasarkan NIP. Jika ditemukan, hapus baris tersebut dari array data guru."

**2. Identifikasi Konsep Kunci**
*   **PENCARIAN:** Menemukan data yang akan dihapus.
*   **PENGHAPUSAN ARRAY:** Menghapus elemen dari array.
*   **VALIDASI:** Memastikan data yang akan dihapus benar-benar ada.

**3. Desain Algoritma Detail**
*   **Input:** NIP guru yang akan dihapus.
*   **Cari Guru:** Temukan indeks baris guru berdasarkan NIP.
*   **Hapus Data:** Gunakan `splice()` untuk menghapus baris tersebut.
*   **Output:** Status keberhasilan penghapusan.

**4. Implementasi Kode**
```javascript
function hapusGuruByNIP(nip) {
  // Cari indeks guru berdasarkan NIP
  let guruIndex = -1;
  for (let i = 1; i < dataGuru.length; i++) {
    if (dataGuru[i][1] === nip) {
      guruIndex = i;
      break;
    }
  }

  // Jika guru tidak ditemukan
  if (guruIndex === -1) {
    console.log(`Error: Guru dengan NIP ${nip} tidak ditemukan!`);
    return false;
  }

  // Simpan data guru yang akan dihapus untuk konfirmasi
  const guruDihapus = [...dataGuru[guruIndex]];
  
  // Hapus baris guru dari array
  dataGuru.splice(guruIndex, 1);
  
  console.log(`✅ Guru dengan NIP ${nip} (${guruDihapus[0]}) berhasil dihapus!`);
  return true;
}

// Test hapus data guru (kita tambahkan dulu guru dummy untuk dihapus)
tambahGuruBaru(
  "Guru Dummy", 
  "999999999999999999", 
  "Guru Honor", 
  "Kelas 5A", 
  "dummy@sekolah.id", 
  "dummy123", 
  "999999"
);

// Hapus guru dummy
hapusGuruByNIP("999999999999999999");

// Tampilkan data guru setelah penghapusan
console.log("Data guru setelah penghapusan:");
console.table(dataGuru.slice(1));
```

**5. Simulasi Alternatif dengan .filter()**
```javascript
function hapusGuruFilter(nip) {
  const jumlahSebelum = dataGuru.length;
  
  // Filter data guru, kecuali yang memiliki NIP yang akan dihapus
  const dataBaru = dataGuru.filter((row, index) => {
    // Jangan filter header (index 0)
    if (index === 0) return true;
    return row[1] !== nip;
  });
  
  const jumlahSesudah = dataBaru.length;
  
  if (jumlahSebelum === jumlahSesudah) {
    console.log(`Error: Guru dengan NIP ${nip} tidak ditemukan!`);
    return false;
  }
  
  // Ganti array dataGuru dengan data baru
  for (let i = 0; i < dataGuru.length; i++) {
    dataGuru.pop(); // Kosongkan array
  }
  
  // Tambahkan kembali semua data baru
  dataBaru.forEach(row => dataGuru.push(row));
  
  console.log(`✅ Guru dengan NIP ${nip} berhasil dihapus!`);
  return true;
}
```

---

## BAB 8: CRUD Lengkap untuk Data Absensi

### Skenario Proyek Absensi
Kita akan menerapkan semua operasi CRUD (Create, Read, Update, Delete) untuk data absensi, yang merupakan inti dari aplikasi absensi guru.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Analisis & Rencana Logika**
*   **Tujuan:** Membuat sistem manajemen data absensi lengkap.
*   **Rencana:** Implementasikan semua operasi CRUD untuk data absensi.

**2. Desain Fungsi CRUD untuk Absensi**

**CREATE - Tambah Data Absensi**
```javascript
function tambahDataAbsensi(tanggal, namaGuru, tipeAbsensi, status, koordinat = "-", foto = "-", alasan = "-") {
  // Validasi data wajib
  if (!tanggal || !namaGuru || !tipeAbsensi || !status) {
    console.log("Error: Data absensi wajib tidak boleh kosong!");
    return false;
  }

  // Validasi tipe absensi
  const tipeValid = ["Check In", "Check Out", "Izin"];
  if (!tipeValid.includes(tipeAbsensi)) {
    console.log(`Error: Tipe absensi tidak valid! Gunakan: ${tipeValid.join(", ")}`);
    return false;
  }

  // Buat baris data absensi baru sesuai struktur sheet
  let barisBaru = [
    tanggal,        // A: Tanggal
    namaGuru,       // B: Nama Guru
    "-",            // C: Check In Time
    "-",            // D: Check In Status
    "-",            // E: Check In Koordinat
    "-",            // F: Check In Foto
    "-",            // G: Check Out Time
    "-",            // H: Check Out Status
    "-",            // I: Check Out Koordinat
    "-",            // J: Check Out Foto
    "-",            // K: Izin Time
    "-",            // L: Izin Status
    "-",            // M: Izin Alasan
    false,          // N: Alpha
    "-",            // O: Override By Admin
    "-"             // P: Admin Name
  ];

  // Isi kolom sesuai tipe absensi
  switch(tipeAbsensi) {
    case "Check In":
      barisBaru[2] = new Date().toLocaleTimeString(); // Check In Time
      barisBaru[3] = status; // Check In Status
      barisBaru[4] = koordinat; // Check In Koordinat
      barisBaru[5] = foto; // Check In Foto
      break;
    case "Check Out":
      barisBaru[6] = new Date().toLocaleTimeString(); // Check Out Time
      barisBaru[7] = status; // Check Out Status
      barisBaru[8] = koordinat; // Check Out Koordinat
      barisBaru[9] = foto; // Check Out Foto
      break;
    case "Izin":
      barisBaru[10] = new Date().toLocaleTimeString(); // Izin Time
      barisBaru[11] = status; // Izin Status
      barisBaru[12] = alasan; // Izin Alasan
      break;
  }

  // Tambahkan baris baru ke array data absensi
  dataAbsensi.push(barisBaru);
  console.log(`✅ Data absensi berhasil ditambahkan: ${tipeAbsensi} - ${namaGuru}`);
  return true;
}

// Test penambahan data absensi
tambahDataAbsensi("2026-01-30", "Guru Demo 1", "Check In", "Hadir", "-6.752088,107.458523", "https://example.com/foto.jpg");
tambahDataAbsensi("2026-01-30", "Guru Demo 1", "Check Out", "Hadir", "-6.752088,107.458523", "https://example.com/foto-pulang.jpg");
tambahDataAbsensi("2026-01-30", "Guru Demo 2", "Izin", "Menunggu Persetujuan", "-", "-", "Sakit Demam");

console.log("Data absensi setelah penambahan:");
console.table(dataAbsensi.slice(1)); // Tampilkan semua data absensi kecuali header
```

**READ - Ambil Data Absensi**
```javascript
function getDataAbsensiByNama(namaGuru) {
  const hasil = [];
  
  for (let i = 1; i < dataAbsensi.length; i++) {
    if (dataAbsensi[i][1] === namaGuru) {
      hasil.push(dataAbsensi[i]);
    }
  }
  
  return hasil;
}

function getDataAbsensiByTanggal(tanggal) {
  const hasil = [];
  
  for (let i = 1; i < dataAbsensi.length; i++) {
    if (dataAbsensi[i][0] === tanggal) {
      hasil.push(dataAbsensi[i]);
    }
  }
  
  return hasil;
}

// Test ambil data absensi
const absensiGuru1 = getDataAbsensiByNama("Guru Demo 1");
console.log("Absensi Guru Demo 1:", absensiGuru1);

const absensiTanggal = getDataAbsensiByTanggal("2026-01-30");
console.log("Absensi Tanggal 2026-01-30:", absensiTanggal);
```

**UPDATE - Update Data Absensi**
```javascript
function updateDataAbsensi(index, newData) {
  if (index < 1 || index >= dataAbsensi.length) {
    console.log("Error: Indeks data absensi tidak valid!");
    return false;
  }

  // Update data sesuai dengan newData
  if (newData.tanggal !== undefined) dataAbsensi[index][0] = newData.tanggal;
  if (newData.namaGuru !== undefined) dataAbsensi[index][1] = newData.namaGuru;
  if (newData.checkInTime !== undefined) dataAbsensi[index][2] = newData.checkInTime;
  if (newData.checkInStatus !== undefined) dataAbsensi[index][3] = newData.checkInStatus;
  if (newData.checkOutTime !== undefined) dataAbsensi[index][6] = newData.checkOutTime;
  if (newData.checkOutStatus !== undefined) dataAbsensi[index][7] = newData.checkOutStatus;
  if (newData.izinStatus !== undefined) dataAbsensi[index][11] = newData.izinStatus;
  if (newData.izinAlasan !== undefined) dataAbsensi[index][12] = newData.izinAlasan;
  if (newData.override !== undefined) dataAbsensi[index][13] = newData.override;
  if (newData.adminName !== undefined) dataAbsensi[index][14] = newData.adminName;

  console.log(`✅ Data absensi pada indeks ${index} berhasil diperbarui!`);
  return true;
}

// Test update data absensi
updateDataAbsensi(1, { checkInStatus: "Terlambat" });
```

**DELETE - Hapus Data Absensi**
```javascript
function hapusDataAbsensi(index) {
  if (index < 1 || index >= dataAbsensi.length) {
    console.log("Error: Indeks data absensi tidak valid!");
    return false;
  }

  const dataDihapus = [...dataAbsensi[index]];
  dataAbsensi.splice(index, 1);
  
  console.log(`✅ Data absensi berhasil dihapus: ${dataDihapus[1]} - ${dataDihapus[2]}`);
  return true;
}
```

---

## BAB 9: Simulasi Login dan Otentikasi

### Skenario Proyek Absensi
Kita perlu membuat sistem login untuk guru/admin yang mencocokkan NIP/email dan password dengan data di spreadsheet.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Analisis & Rencana Logika**
*   **Tujuan:** Memvalidasi kredensial login pengguna.
*   **Rencana:** "Robot, ambil NIP/email dan password dari input. Cari di sheet database. Jika cocok, kembalikan data pengguna. Jika tidak, kembalikan pesan error."

**2. Desain Fungsi Login**
```javascript
function validateLogin(identifier, password) {
  // identifier bisa berupa NIP atau Email
  let userFound = null;
  
  // Cari berdasarkan NIP atau Email
  for (let i = 1; i < dataGuru.length; i++) {
    const row = dataGuru[i];
    if (row[1] === identifier || row[4] === identifier) { // NIP atau Email
      userFound = row;
      break;
    }
  }
  
  // Jika user tidak ditemukan
  if (!userFound) {
    return { success: false, message: "NIP atau Email tidak ditemukan." };
  }
  
  // Validasi password
  if (userFound[5] !== password) {
    return { success: false, message: "Password salah." };
  }
  
  // Login berhasil, kembalikan data pengguna
  return {
    success: true,
    data: {
      nama: userFound[0],
      nip: userFound[1],
      jabatan: userFound[2],
      unitKerja: userFound[3],
      email: userFound[4],
      isAdmin: userFound[2].toLowerCase().includes('admin') || userFound[2].toLowerCase().includes('kepala sekolah')
    }
  };
}

// Test login
const loginResult = validateLogin("guru1@sekolah.id", "1234");
console.log("Hasil login:", loginResult);

const loginResult2 = validateLogin("198001012010011001", "1234");
console.log("Hasil login (dengan NIP):", loginResult2);
```

---

## BAB 10: Integrasi Frontend (Menampilkan Data di HTML)

### Skenario Proyek Nyata
Kita sudah punya data dalam bentuk Array of Objects (dari Bab 3). Sekarang kita harus menampilkannya ke dalam tabel HTML di sisi user (browser).

### Tahapan Pola Pikir & Pembentukan Logika

**1. Analisis & Rencana Logika**
*   **Tujuan:** Mengubah data JSON menjadi elemen HTML (`<tr>` dan `<td>`) agar tampil di layar.
*   **Rencana:** "Robot (Browser), ambil wadah tabel (`<tbody>`). Kosongkan isinya dulu. Lalu, ambil daftar karyawan. Untuk setiap karyawan: buat baris baru (`<tr>`). Buat sel nama (`<td>`), isi dengan nama. Buat sel departemen, isi dengan departemen. Tempelkan sel-sel itu ke baris. Tempelkan baris itu ke wadah tabel."

**2. Identifikasi Konsep Kunci**
*   **DOM Manipulation:** Membuat dan mengubah elemen HTML via JavaScript.
*   **Looping (forEach):** Karena data sudah berupa array of objects, `forEach` lebih bersih daripada `for` biasa.

**3. Simulasi HTML dan JavaScript untuk Tampilan Data**
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulasi Tampilan Data Absensi</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
        }
        
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        
        th {
            background-color: #f2f2f2;
        }
        
        .btn {
            padding: 8px 12px;
            margin: 2px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .btn-primary {
            background-color: #007bff;
            color: white;
        }
        
        .btn-success {
            background-color: #28a745;
            color: white;
        }
        
        .btn-danger {
            background-color: #dc3545;
            color: white;
        }
    </style>
</head>
<body>
    <h1>Data Guru</h1>
    <table id="tabel-guru">
        <thead>
            <tr>
                <th>Nama</th>
                <th>NIP</th>
                <th>Jabatan</th>
                <th>Unit Kerja</th>
                <th>Email</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody id="tabel-guru-body">
            <!-- Data akan diisi oleh JavaScript -->
        </tbody>
    </table>
    
    <h1>Data Absensi</h1>
    <table id="tabel-absensi">
        <thead>
            <tr>
                <th>Tanggal</th>
                <th>Nama Guru</th>
                <th>Tipe</th>
                <th>Status</th>
                <th>Waktu</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody id="tabel-absensi-body">
            <!-- Data akan diisi oleh JavaScript -->
        </tbody>
    </table>

    <script>
        // Ambil data dari simulasi yang sudah kita buat
        const dataGuruSiap = [
            { nama: "Guru Demo 1", nip: "198001012010011001", jabatan: "Guru Kelas", unitKerja: "Kelas 1A", email: "guru1@sekolah.id" },
            { nama: "Guru Demo 2", nip: "198505052015012002", jabatan: "Waka Kurikulum", unitKerja: "Kelas 2B", email: "guru2@sekolah.id" },
            { nama: "Admin Demo", nip: "00000000", jabatan: "Kepala Sekolah", unitKerja: "SDN Pasirhalang", email: "admin@sekolah.id" }
        ];
        
        const dataAbsensiSiap = [
            { tanggal: "2026-01-30", namaGuru: "Guru Demo 1", tipe: "Check In", status: "Hadir", waktu: "07:15" },
            { tanggal: "2026-01-30", namaGuru: "Guru Demo 1", tipe: "Check Out", status: "Hadir", waktu: "14:30" },
            { tanggal: "2026-01-30", namaGuru: "Guru Demo 2", tipe: "Izin", status: "Menunggu Persetujuan", waktu: "08:00" }
        ];

        function renderTabelGuru(data) {
            const tabelBody = document.getElementById('tabel-guru-body');
            tabelBody.innerHTML = ''; // Kosongkan isi lama

            data.forEach((guru, index) => {
                const barisBaru = document.createElement('tr');

                // Buat sel-sel data
                const selNama = document.createElement('td');
                selNama.textContent = guru.nama;
                
                const selNIP = document.createElement('td');
                selNIP.textContent = guru.nip;
                
                const selJabatan = document.createElement('td');
                selJabatan.textContent = guru.jabatan;
                
                const selUnit = document.createElement('td');
                selUnit.textContent = guru.unitKerja;
                
                const selEmail = document.createElement('td');
                selEmail.textContent = guru.email;
                
                const selAksi = document.createElement('td');
                const btnEdit = document.createElement('button');
                btnEdit.className = 'btn btn-primary';
                btnEdit.textContent = 'Edit';
                btnEdit.onclick = () => editGuru(index);
                
                const btnHapus = document.createElement('button');
                btnHapus.className = 'btn btn-danger';
                btnHapus.textContent = 'Hapus';
                btnHapus.onclick = () => hapusGuru(index);
                
                selAksi.appendChild(btnEdit);
                selAksi.appendChild(btnHapus);

                // Gabungkan ke baris
                barisBaru.appendChild(selNama);
                barisBaru.appendChild(selNIP);
                barisBaru.appendChild(selJabatan);
                barisBaru.appendChild(selUnit);
                barisBaru.appendChild(selEmail);
                barisBaru.appendChild(selAksi);

                // Tambahkan baris ke tabel
                tabelBody.appendChild(barisBaru);
            });
        }

        function renderTabelAbsensi(data) {
            const tabelBody = document.getElementById('tabel-absensi-body');
            tabelBody.innerHTML = ''; // Kosongkan isi lama

            data.forEach((absensi, index) => {
                const barisBaru = document.createElement('tr');

                // Buat sel-sel data
                const selTanggal = document.createElement('td');
                selTanggal.textContent = absensi.tanggal;
                
                const selNama = document.createElement('td');
                selNama.textContent = absensi.namaGuru;
                
                const selTipe = document.createElement('td');
                selTipe.textContent = absensi.tipe;
                
                const selStatus = document.createElement('td');
                selStatus.textContent = absensi.status;
                
                const selWaktu = document.createElement('td');
                selWaktu.textContent = absensi.waktu;
                
                const selAksi = document.createElement('td');
                const btnEdit = document.createElement('button');
                btnEdit.className = 'btn btn-primary';
                btnEdit.textContent = 'Edit';
                btnEdit.onclick = () => editAbsensi(index);
                
                const btnHapus = document.createElement('button');
                btnHapus.className = 'btn btn-danger';
                btnHapus.textContent = 'Hapus';
                btnHapus.onclick = () => hapusAbsensi(index);
                
                selAksi.appendChild(btnEdit);
                selAksi.appendChild(btnHapus);

                // Gabungkan ke baris
                barisBaru.appendChild(selTanggal);
                barisBaru.appendChild(selNama);
                barisBaru.appendChild(selTipe);
                barisBaru.appendChild(selStatus);
                barisBaru.appendChild(selWaktu);
                barisBaru.appendChild(selAksi);

                // Tambahkan baris ke tabel
                tabelBody.appendChild(barisBaru);
            });
        }

        // Fungsi-fungsi aksi
        function editGuru(index) {
            alert(`Edit guru pada indeks ${index}: ${dataGuruSiap[index].nama}`);
        }
        
        function hapusGuru(index) {
            if (confirm(`Yakin ingin menghapus guru ${dataGuruSiap[index].nama}?`)) {
                dataGuruSiap.splice(index, 1);
                renderTabelGuru(dataGuruSiap);
            }
        }
        
        function editAbsensi(index) {
            alert(`Edit absensi pada indeks ${index}: ${dataAbsensiSiap[index].namaGuru}`);
        }
        
        function hapusAbsensi(index) {
            if (confirm(`Yakin ingin menghapus data absensi ${dataAbsensiSiap[index].namaGuru}?`)) {
                dataAbsensiSiap.splice(index, 1);
                renderTabelAbsensi(dataAbsensiSiap);
            }
        }

        // Render tabel saat halaman dimuat
        document.addEventListener('DOMContentLoaded', function() {
            renderTabelGuru(dataGuruSiap);
            renderTabelAbsensi(dataAbsensiSiap);
        });
    </script>
</body>
</html>
```

---

## BAB 11: Simulasi Sistem Absensi Lengkap (Check In/Out, Izin)

### Skenario Proyek Absensi
Kita akan membuat simulasi sistem absensi lengkap termasuk Check In, Check Out, dan pengajuan izin.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Desain Fungsi Check In**
```javascript
function prosesCheckIn(namaGuru, lat, lng, foto = null) {
  // Validasi apakah guru sudah check in hari ini
  const today = new Date().toISOString().split('T')[0];
  const sudahCheckIn = dataAbsensi.some(absensi => 
    absensi[0] === today && 
    absensi[1] === namaGuru && 
    absensi[2] !== "-" // Sudah ada waktu check in
  );
  
  if (sudahCheckIn) {
    return { success: false, message: "Anda sudah melakukan Check In hari ini." };
  }
  
  // Validasi lokasi (simulasi)
  const jarak = hitungJarak(lat, lng, configSekolah[1][1], configSekolah[2][1]);
  const radius = configSekolah[3][1];
  
  if (jarak > radius) {
    return { success: false, message: `Anda berada di luar area sekolah (${Math.round(jarak)}m dari sekolah).` };
  }
  
  // Tentukan status (hadir atau terlambat)
  const jamMasuk = configSekolah[4][1]; // Jam masuk dari konfigurasi
  const waktuSekarang = new Date();
  const jamSekarang = waktuSekarang.getHours() + ':' + waktuSekarang.getMinutes().toString().padStart(2, '0');
  
  const status = isLate(jamMasuk, jamSekarang) ? 'Terlambat' : 'Hadir';
  
  // Tambahkan data absensi
  tambahDataAbsensi(today, namaGuru, "Check In", status, `${lat},${lng}`, foto || "-");
  
  return { 
    success: true, 
    message: `✅ Check In Berhasil!\nStatus: ${status}\nWaktu: ${jamSekarang}`,
    status: status
  };
}

// Fungsi bantu untuk cek keterlambatan
function isLate(jamMasuk, jamSekarang) {
  const [jamMasukH, jamMasukM] = jamMasuk.split(':').map(Number);
  const [jamSekarangH, jamSekarangM] = jamSekarang.split(':').map(Number);
  
  if (jamSekarangH > jamMasukH) return true;
  if (jamSekarangH === jamMasukH && jamSekarangM > jamMasukM) return true;
  return false;
}

// Fungsi bantu untuk menghitung jarak
function hitungJarak(lat1, lng1, lat2, lng2) {
  const R = 6371e3; // Radius bumi dalam meter
  const φ1 = lat1 * Math.PI/180;
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lng2-lng1) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c; // Jarak dalam meter
}

// Test proses check in
const hasilCheckIn = prosesCheckIn("Guru Demo 1", -6.752088, 107.458523, "https://example.com/foto_checkin.jpg");
console.log("Hasil Check In:", hasilCheckIn);
```

**2. Desain Fungsi Check Out**
```javascript
function prosesCheckOut(namaGuru, lat, lng) {
  // Validasi apakah guru sudah check in hari ini
  const today = new Date().toISOString().split('T')[0];
  const sudahCheckIn = dataAbsensi.some(absensi => 
    absensi[0] === today && 
    absensi[1] === namaGuru && 
    absensi[2] !== "-" // Sudah ada waktu check in
  );
  
  if (!sudahCheckIn) {
    return { success: false, message: "Anda belum melakukan Check In hari ini." };
  }
  
  // Validasi apakah sudah check out hari ini
  const sudahCheckOut = dataAbsensi.some(absensi => 
    absensi[0] === today && 
    absensi[1] === namaGuru && 
    absensi[6] !== "-" // Sudah ada waktu check out
  );
  
  if (sudahCheckOut) {
    return { success: false, message: "Anda sudah melakukan Check Out hari ini." };
  }
  
  // Validasi waktu pulang
  const jamPulang = configSekolah[6][1]; // Jam pulang dari konfigurasi
  const waktuSekarang = new Date();
  const jamSekarang = waktuSekarang.getHours() + ':' + waktuSekarang.getMinutes().toString().padStart(2, '0');
  
  const [jamPulangH, jamPulangM] = jamPulang.split(':').map(Number);
  const [jamSekarangH, jamSekarangM] = jamSekarang.split(':').map(Number);
  
  if (jamSekarangH < jamPulangH || (jamSekarangH === jamPulangH && jamSekarangM < jamPulangM)) {
    return { success: false, message: `Belum saatnya Check Out. Jam pulang pukul ${jamPulang}.` };
  }
  
  // Tambahkan data absensi
  tambahDataAbsensi(today, namaGuru, "Check Out", "Hadir", `${lat},${lng}`, "-", "-");
  
  return { 
    success: true, 
    message: `✅ Check Out Berhasil!\nWaktu: ${jamSekarang}`
  };
}

// Test proses check out
const hasilCheckOut = prosesCheckOut("Guru Demo 1", -6.752088, 107.458523);
console.log("Hasil Check Out:", hasilCheckOut);
```

**3. Desain Fungsi Pengajuan Izin**
```javascript
function prosesIzin(namaGuru, jenisIzin, alasan, foto = null) {
  // Validasi waktu izin (sebelum jam batas izin)
  const jamBatasIzin = configSekolah[5][1]; // Jam batas izin dari konfigurasi
  const waktuSekarang = new Date();
  const jamSekarang = waktuSekarang.getHours() + ':' + waktuSekarang.getMinutes().toString().padStart(2, '0');
  
  const [jamBatasH, jamBatasM] = jamBatasIzin.split(':').map(Number);
  const [jamSekarangH, jamSekarangM] = jamSekarang.split(':').map(Number);
  
  if (jamSekarangH > jamBatasH || (jamSekarangH === jamBatasH && jamSekarangM > jamBatasM)) {
    return { success: false, message: `Batas waktu pengajuan izin (${jamBatasIzin}) sudah habis.` };
  }
  
  // Tambahkan data absensi izin
  const today = new Date().toISOString().split('T')[0];
  tambahDataAbsensi(today, namaGuru, "Izin", "Menunggu Persetujuan", "-", foto || "-", `${jenisIzin} - ${alasan}`);
  
  return { 
    success: true, 
    message: `✅ Pengajuan Izin Terkirim!\nJenis: ${jenisIzin}\nStatus: Menunggu Persetujuan`
  };
}

// Test proses izin
const hasilIzin = prosesIzin("Guru Demo 2", "Sakit", "Demam tinggi", "https://example.com/foto_sakit.jpg");
console.log("Hasil Izin:", hasilIzin);
```

---

## BAB 12: Simulasi Sistem Monitoring dan Statistik

### Skenario Proyek Absensi
Kita perlu membuat sistem monitoring untuk administrator melihat kehadiran guru secara real-time dan statistik bulanan.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Desain Fungsi Monitoring Harian**
```javascript
function getMonitoringHarian() {
  const today = new Date().toISOString().split('T')[0];
  const semuaGuru = dataGuru.slice(1).map(guru => ({
    nama: guru[0],
    jabatan: guru[2]
  }));
  
  // Ambil data absensi hari ini
  const absensiHariIni = dataAbsensi.filter(absensi => absensi[0] === today);
  
  // Mapping absensi per guru
  const absensiMap = new Map();
  absensiHariIni.forEach(absensi => {
    const nama = absensi[1];
    if (!absensiMap.has(nama)) {
      absensiMap.set(nama, []);
    }
    absensiMap.get(nama).push(absensi);
  });
  
  // Hitung statistik
  let total = 0, hadir = 0, sakit = 0, izin = 0, alpha = 0;
  
  const monitoringList = semuaGuru.map(guru => {
    total++;
    const absensiGuru = absensiMap.get(guru.nama) || [];
    
    let statusFinal = 'Alpha';
    let detail = '-';
    let waktu = '-';
    
    // Proses absensi guru
    for (const absensi of absensiGuru) {
      if (absensi[10] !== "-") { // Izin
        if (absensi[12].toLowerCase().includes('sakit')) {
          statusFinal = 'Sakit';
          sakit++;
        } else {
          statusFinal = 'Izin';
          izin++;
        }
        detail = absensi[12];
      } else if (absensi[2] !== "-") { // Check In
        statusFinal = absensi[3]; // Hadir atau Terlambat
        hadir++;
        detail = absensi[3] === 'Terlambat' ? 'Terlambat' : 'Tepat Waktu';
        waktu = absensi[2];
      }
    }
    
    // Jika status tetap alpha, tambahkan ke alpha
    if (statusFinal === 'Alpha') {
      alpha++;
    }
    
    return {
      nama: guru.nama,
      jabatan: guru.jabatan,
      status: statusFinal,
      detail: detail,
      waktu: waktu
    };
  });
  
  // Urutkan: Alpha dulu, lalu Izin/Sakit, lalu Hadir
  monitoringList.sort((a, b) => {
    const score = (s) => {
      if (s === 'Alpha') return 0;
      if (s === 'Sakit') return 1;
      if (s === 'Izin') return 2;
      return 3;
    };
    return score(a.status) - score(b.status);
  });
  
  return {
    stats: { total, hadir, sakit, izin, alpha },
    list: monitoringList,
    date: new Date().toLocaleDateString('id-ID', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  };
}

// Test monitoring harian
const monitoring = getMonitoringHarian();
console.log("Monitoring Harian:", monitoring);
```

**2. Desain Fungsi Statistik Bulanan**
```javascript
function getStatistikBulanan(namaGuru, bulan, tahun) {
  const targetBulan = parseInt(bulan);
  const targetTahun = parseInt(tahun);
  
  // Filter data absensi berdasarkan bulan dan tahun
  const absensiBulanan = dataAbsensi.filter(absensi => {
    if (absensi[1] !== namaGuru) return false;
    
    const tanggal = new Date(absensi[0]);
    return tanggal.getMonth() + 1 === targetBulan && tanggal.getFullYear() === targetTahun;
  });
  
  // Hitung statistik
  let hadir = 0, izin = 0, alpha = 0;
  
  absensiBulanan.forEach(absensi => {
    if (absensi[2] !== "-" && absensi[3] === "Hadir") { // Check In dengan status Hadir
      hadir++;
    } else if (absensi[11] === "Izin") { // Status Izin
      izin++;
    }
  });
  
  // Hitung hari kerja dari jadwal kerja
  let hariKerja = 0;
  jadwalKerja.slice(1).forEach(jadwal => {
    const tanggal = new Date(jadwal[0]);
    if (tanggal.getMonth() + 1 === targetBulan && tanggal.getFullYear() === targetTahun && jadwal[1] === "Kerja") {
      hariKerja++;
    }
  });
  
  // Hitung alpha (hanya jika hari kerja)
  alpha = Math.max(0, hariKerja - hadir - izin);
  
  return {
    stats: {
      hadir,
      izin,
      alpha,
      hariKerja
    },
    absensi: absensiBulanan
  };
}

// Test statistik bulanan
const statistik = getStatistikBulanan("Guru Demo 1", 1, 2026);
console.log("Statistik Bulanan:", statistik);
```

---

## BAB 13: Simulasi Sistem Approval Izin

### Skenario Proyek Absensi
Administrator perlu menyetujui atau menolak pengajuan izin dari guru. Kita akan membuat sistem approval.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Desain Fungsi Ambil Pengajuan Pending**
```javascript
function getPengajuanPending() {
  const pendingList = [];
  
  for (let i = 1; i < dataAbsensi.length; i++) {
    const absensi = dataAbsensi[i];
    // Cek apakah status izin adalah "Menunggu Persetujuan"
    if (absensi[11] === "Menunggu Persetujuan") {
      pendingList.push({
        index: i,
        tanggal: absensi[0],
        nama: absensi[1],
        tipe: absensi[2],
        foto: absensi[5],
        alasan: absensi[12]
      });
    }
  }
  
  return { success: true, list: pendingList };
}

// Test ambil pengajuan pending
const pending = getPengajuanPending();
console.log("Pengajuan Pending:", pending);
```

**2. Desain Fungsi Proses Approval**
```javascript
function prosesApproval(index, action, adminName, reason = "") {
  if (index < 1 || index >= dataAbsensi.length) {
    return { success: false, message: "Data tidak ditemukan." };
  }
  
  const absensi = dataAbsensi[index];
  
  // Validasi status saat ini
  if (absensi[11] !== "Menunggu Persetujuan") {
    return { success: false, message: "Data sudah diproses sebelumnya." };
  }
  
  let newStatus = "";
  
  if (action === "APPROVE") {
    newStatus = "Izin";
  } else if (action === "REJECT") {
    newStatus = "Alpha"; // Jika ditolak, dianggap alpha
    
    // Update alasan penolakan
    const oldReason = absensi[12];
    absensi[12] = `${oldReason} [DITOLAK: ${reason}]`;
  } else {
    return { success: false, message: "Aksi tidak valid. Gunakan APPROVE atau REJECT." };
  }
  
  // Update status
  absensi[11] = newStatus;
  
  // Update info admin
  absensi[13] = "YES"; // Override By Admin
  absensi[14] = adminName; // Admin Name
  
  return { 
    success: true, 
    message: `Pengajuan berhasil ${action === "APPROVE" ? "DISETUJUI" : "DITOLAK"}` 
  };
}

// Test proses approval
const approvalResult = prosesApproval(3, "APPROVE", "Admin Demo");
console.log("Hasil Approval:", approvalResult);
```

---

## BAB 14: Simulasi Sistem Jadwal Kerja

### Skenario Proyek Absensi
Kita perlu sistem untuk menentukan apakah suatu tanggal adalah hari kerja atau libur.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Desain Fungsi Cek Hari Kerja**
```javascript
function cekHariKerja(tanggalStr) {
  // Cek di jadwal kerja
  for (let i = 1; i < jadwalKerja.length; i++) {
    if (jadwalKerja[i][0] === tanggalStr) {
      return {
        isWorkDay: jadwalKerja[i][1] === "Kerja",
        status: jadwalKerja[i][1],
        keterangan: jadwalKerja[i][2]
      };
    }
  }
  
  // Jika tanggal tidak ditemukan di jadwal, cek hari biasa
  const tanggal = new Date(tanggalStr);
  const day = tanggal.getDay(); // 0 = Minggu, 6 = Sabtu
  
  if (day === 0 || day === 6) {
    return {
      isWorkDay: false,
      status: "Libur",
      keterangan: day === 0 ? "Hari Minggu" : "Hari Sabtu"
    };
  }
  
  // Default adalah hari kerja
  return {
    isWorkDay: true,
    status: "Kerja",
    keterangan: "-"
  };
}

// Test cek hari kerja
const hariKerja = cekHariKerja("2026-01-02");
console.log("Info Hari Kerja:", hariKerja);

const hariLibur = cekHariKerja("2026-01-04"); // Hari Minggu
console.log("Info Hari Libur:", hariLibur);
```

**2. Desain Fungsi Tambah Jadwal Kerja**
```javascript
function tambahJadwalKerja(tanggal, status, keterangan = "-") {
  // Validasi status
  const statusValid = ["Kerja", "Libur"];
  if (!statusValid.includes(status)) {
    console.log(`Error: Status tidak valid! Gunakan: ${statusValid.join(", ")}`);
    return false;
  }
  
  // Validasi format tanggal
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(tanggal)) {
    console.log("Error: Format tanggal tidak valid! Gunakan YYYY-MM-DD");
    return false;
  }
  
  // Cek apakah tanggal sudah ada
  const tanggalExists = jadwalKerja.slice(1).some(jadwal => jadwal[0] === tanggal);
  if (tanggalExists) {
    console.log(`Error: Jadwal untuk tanggal ${tanggal} sudah ada!`);
    return false;
  }
  
  // Tambahkan jadwal baru
  jadwalKerja.push([tanggal, status, keterangan]);
  console.log(`✅ Jadwal kerja berhasil ditambahkan: ${tanggal} - ${status}`);
  return true;
}

// Test tambah jadwal kerja
tambahJadwalKerja("2026-02-14", "Libur", "Valentine's Day");
```

---

## BAB 15: Simulasi Sistem Manajemen Perangkat (Device ID)

### Skenario Proyek Absensi
Untuk keamanan, sistem hanya mengizinkan satu perangkat per akun guru.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Desain Fungsi Validasi Perangkat**
```javascript
function validateDevice(namaGuru, deviceId) {
  // Cari data guru
  let guruIndex = -1;
  for (let i = 1; i < dataGuru.length; i++) {
    if (dataGuru[i][0] === namaGuru) {
      guruIndex = i;
      break;
    }
  }
  
  if (guruIndex === -1) {
    return { success: false, message: "Guru tidak ditemukan." };
  }
  
  const guru = dataGuru[guruIndex];
  const existingDeviceId = guru[8]; // Kolom DeviceID
  
  // Jika belum ada device ID terdaftar, pasangkan otomatis
  if (!existingDeviceId) {
    guru[8] = deviceId;
    return { success: true, message: "Perangkat berhasil dipasangkan." };
  }
  
  // Jika device ID sudah terdaftar, cocokkan
  if (existingDeviceId === deviceId) {
    return { success: true, message: "Perangkat valid." };
  }
  
  // Cek apakah device ID ini sedang digunakan oleh guru lain
  for (let i = 1; i < dataGuru.length; i++) {
    if (i !== guruIndex && dataGuru[i][8] === deviceId) {
      return { 
        success: false, 
        message: `Perangkat ini sudah terdaftar untuk guru lain (${dataGuru[i][0]}).` 
      };
    }
  }
  
  // Jika device ID baru dan tidak digunakan oleh guru lain, update
  guru[8] = deviceId;
  return { success: true, message: "Perangkat berhasil diperbarui." };
}

// Test validasi perangkat
const deviceValidation = validateDevice("Guru Demo 1", "DEVICE-ABC123");
console.log("Validasi Perangkat:", deviceValidation);
```

---

## BAB 16: Simulasi Sistem Laporan dan Ekspor Data

### Skenario Proyek Absensi
Administrator perlu membuat laporan bulanan dan mengekspor data dalam berbagai format.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Desain Fungsi Generate Laporan Bulanan**
```javascript
function generateLaporanBulanan(bulan, tahun) {
  const targetBulan = parseInt(bulan);
  const targetTahun = parseInt(tahun);
  
  // Ambil semua guru
  const semuaGuru = dataGuru.slice(1).map(guru => guru[0]);
  
  // Generate laporan per guru
  const laporan = {};
  
  semuaGuru.forEach(namaGuru => {
    const statistik = getStatistikBulanan(namaGuru, bulan, tahun);
    laporan[namaGuru] = statistik.stats;
  });
  
  return {
    bulan: targetBulan,
    tahun: targetTahun,
    laporan: laporan,
    totalGuru: semuaGuru.length
  };
}

// Test generate laporan bulanan
const laporanBulanan = generateLaporanBulanan(1, 2026);
console.log("Laporan Bulanan:", laporanBulanan);
```

**2. Desain Fungsi Ekspor ke Format CSV**
```javascript
function eksporKeCSV(data, namaFile) {
  // Buat header dari kunci objek pertama
  if (data.length === 0) return "";
  
  const headers = Object.keys(data[0]);
  let csv = headers.join(',') + '\n';
  
  // Tambahkan baris data
  data.forEach(row => {
    const values = headers.map(header => {
      let value = row[header];
      // Escape commas and wrap in quotes if needed
      if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
        value = '"' + value.replace(/"/g, '""') + '"';
      }
      return value;
    });
    csv += values.join(',') + '\n';
  });
  
  // Simulasi download
  console.log(`CSV untuk ${namaFile}:\n${csv}`);
  return csv;
}

// Contoh penggunaan ekspor
const dataLaporan = [
  { nama: "Guru Demo 1", hadir: 20, izin: 2, alpha: 1 },
  { nama: "Guru Demo 2", hadir: 18, izin: 3, alpha: 2 }
];
eksporKeCSV(dataLaporan, "laporan_kehadiran.csv");
```

---

## BAB 17: Simulasi Sistem Notifikasi dan Monitoring Real-time

### Skenario Proyek Absensi
Sistem perlu memberikan notifikasi real-time tentang status izin dan kehadiran.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Desain Sistem Monitoring Status Izin**
```javascript
function checkStatusIzinTerbaru(namaGuru) {
  // Ambil semua data izin untuk guru ini
  const dataIzin = dataAbsensi.filter(absensi => 
    absensi[1] === namaGuru && 
    absensi[2] === "Izin"
  );
  
  // Ambil izin terbaru
  if (dataIzin.length === 0) {
    return { success: true, status: null };
  }
  
  const izinTerbaru = dataIzin[dataIzin.length - 1];
  return {
    success: true,
    status: izinTerbaru[11], // Status izin
    alasan: izinTerbaru[12]  // Alasan izin
  };
}

// Test cek status izin
const statusIzin = checkStatusIzinTerbaru("Guru Demo 2");
console.log("Status Izin Terbaru:", statusIzin);
```

**2. Desain Sistem Polling Notifikasi**
```javascript
function startPollingNotifikasi(namaGuru) {
  console.log(`Memulai polling notifikasi untuk ${namaGuru}...`);
  
  // Simulasi polling setiap 10 detik
  const interval = setInterval(() => {
    const statusIzin = checkStatusIzinTerbaru(namaGuru);
    
    if (statusIzin.success && statusIzin.status) {
      if (statusIzin.status === "Izin") {
        console.log(`🔔 NOTIFIKASI: Pengajuan izin Anda telah DISETUJUI!`);
        console.log(`   Alasan: ${statusIzin.alasan}`);
      } else if (statusIzin.status === "Alpha") {
        console.log(`🔔 NOTIFIKASI: Pengajuan izin Anda DITOLAK dan tercatat sebagai ALPHA.`);
        console.log(`   Alasan: ${statusIzin.alasan}`);
      }
    }
  }, 10000); // 10 detik
  
  // Kembalikan fungsi untuk menghentikan polling
  return () => clearInterval(interval);
}

// Test polling notifikasi (hanya untuk simulasi)
// const stopPolling = startPollingNotifikasi("Guru Demo 2");
// setTimeout(() => {
//   console.log("Menghentikan polling...");
//   stopPolling();
// }, 30000); // Hentikan setelah 30 detik
```

---

## BAB 18: Simulasi Sistem Keamanan dan Validasi Input

### Skenario Proyek Absensi
Sistem harus memiliki validasi input yang ketat dan perlindungan terhadap serangan.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Desain Fungsi Validasi Input**
```javascript
function validateInput(data, rules) {
  const errors = [];
  
  for (const field in rules) {
    const value = data[field];
    const validations = rules[field];
    
    for (const validation of validations) {
      switch(validation.type) {
        case 'required':
          if (!value || value.toString().trim() === '') {
            errors.push(`${field} wajib diisi`);
          }
          break;
        case 'minLength':
          if (value && value.length < validation.value) {
            errors.push(`${field} minimal ${validation.value} karakter`);
          }
          break;
        case 'maxLength':
          if (value && value.length > validation.value) {
            errors.push(`${field} maksimal ${validation.value} karakter`);
          }
          break;
        case 'pattern':
          if (value && !validation.value.test(value)) {
            errors.push(`${field} tidak valid`);
          }
          break;
        case 'custom':
          if (!validation.validator(value)) {
            errors.push(validation.message || `${field} tidak valid`);
          }
          break;
      }
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

// Contoh penggunaan validasi input
const inputData = {
  nama: "Guru Baru",
  nip: "123456789012345678",
  email: "gurubaru@sekolah.id",
  password: "123"
};

const validationRules = {
  nama: [
    { type: 'required' },
    { type: 'minLength', value: 3 },
    { type: 'maxLength', value: 100 }
  ],
  nip: [
    { type: 'required' },
    { type: 'pattern', value: /^\d+$/ }, // Hanya angka
    { type: 'minLength', value: 8 },
    { type: 'maxLength', value: 18 }
  ],
  email: [
    { type: 'required' },
    { type: 'pattern', value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
  ],
  password: [
    { type: 'required' },
    { type: 'minLength', value: 6 },
    { type: 'custom', validator: (pwd) => /[A-Z]/.test(pwd), message: "Password harus mengandung huruf kapital" }
  ]
};

const validationResult = validateInput(inputData, validationRules);
console.log("Validasi Input:", validationResult);
```

**2. Desain Fungsi Sanitasi Input**
```javascript
function sanitizeInput(input) {
  if (typeof input === 'string') {
    // Hilangkan tag HTML dan karakter berbahaya
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
      .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
      .replace(/<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi, '')
      .trim();
  }
  return input;
}

// Test sanitasi input
const dirtyInput = "<script>alert('XSS')</script>Hello <b>World</b>";
const cleanInput = sanitizeInput(dirtyInput);
console.log("Input sebelum sanitasi:", dirtyInput);
console.log("Input setelah sanitasi:", cleanInput);
```

---

## BAB 19: Simulasi Sistem Cache dan Performa

### Skenario Proyek Absensi
Untuk meningkatkan performa, kita perlu sistem cache untuk menyimpan data yang sering diakses.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Desain Sistem Cache Sederhana**
```javascript
class SimpleCache {
  constructor(maxSize = 100, ttl = 300000) { // TTL = 5 menit default
    this.cache = new Map();
    this.maxSize = maxSize;
    this.ttl = ttl;
  }
  
  set(key, value) {
    // Hapus entri lama jika melebihi ukuran maksimum
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    this.cache.set(key, {
      value: value,
      timestamp: Date.now()
    });
  }
  
  get(key) {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }
    
    // Periksa apakah item sudah kadaluarsa
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }
  
  has(key) {
    return this.get(key) !== null;
  }
  
  delete(key) {
    return this.cache.delete(key);
  }
  
  clear() {
    this.cache.clear();
  }
  
  size() {
    return this.cache.size;
  }
}

// Buat instance cache
const cache = new SimpleCache();

// Fungsi yang menggunakan cache
function getDataGuruCached() {
  const cacheKey = 'data-guru';
  let cachedData = cache.get(cacheKey);
  
  if (cachedData) {
    console.log("Mengambil data dari cache");
    return cachedData;
  }
  
  console.log("Mengambil data dari sumber asli");
  // Simulasi operasi mahal
  const data = transformDataGuruUntukFrontend();
  
  // Simpan ke cache
  cache.set(cacheKey, data);
  return data;
}

// Test cache
console.log("Panggilan pertama:");
const data1 = getDataGuruCached();
console.log("Jumlah guru:", data1.length);

console.log("\nPanggilan kedua (harus dari cache):");
const data2 = getDataGuruCached();
console.log("Jumlah guru:", data2.length);
```

**2. Desain Indeks untuk Pencarian Cepat**
```javascript
// Bangun indeks untuk pencarian cepat berdasarkan NIP
function buildNIPIndex() {
  const nipIndex = new Map();
  
  for (let i = 1; i < dataGuru.length; i++) {
    const row = dataGuru[i];
    const nip = row[1];
    nipIndex.set(nip, i); // Simpan indeks baris
  }
  
  return nipIndex;
}

// Gunakan indeks untuk pencarian cepat
function findGuruByNIPOptimized(nip) {
  const nipIndex = buildNIPIndex();
  const rowIndex = nipIndex.get(nip);
  
  if (rowIndex === undefined) {
    return null;
  }
  
  const row = dataGuru[rowIndex];
  return {
    nama: row[0],
    nip: row[1],
    jabatan: row[2],
    unitKerja: row[3],
    email: row[4],
    pin: row[6],
    deviceId: row[8]
  };
}

// Test pencarian teroptimasi
console.time("Pencarian dengan indeks");
const hasilCepat = findGuruByNIPOptimized("198001012010011001");
console.timeEnd("Pencarian dengan indeks");
console.log("Hasil pencarian cepat:", hasilCepat);
```

---

## BAB 20: Kesimpulan dan Praktik Terbaik

### Skenario Proyek Absensi
Setelah mempelajari semua aspek CRUD dan manipulasi data spreadsheet, mari kita rangkum praktik terbaik dan pelajaran penting.

### Tahapan Pola Pikir & Pembentukan Logika

**1. Praktik Terbaik dalam Manipulasi Data Spreadsheet:**

1. **Validasi Input**: Selalu validasi data sebelum menyimpan ke spreadsheet
2. **Sanitasi Data**: Bersihkan input dari potensi XSS atau injeksi
3. **Penanganan Error**: Tangani error dengan baik dan berikan pesan yang jelas
4. **Efisiensi Loop**: Gunakan metode array modern (.map, .filter, .find) ketika sesuai
5. **Indeks untuk Pencarian**: Bangun indeks untuk pencarian cepat pada dataset besar
6. **Cache untuk Performa**: Gunakan cache untuk data yang sering diakses
7. **Keamanan Otentikasi**: Implementasikan sistem login dan validasi perangkat
8. **Audit Trail**: Simpan riwayat perubahan data untuk keperluan audit

**2. Contoh Implementasi Komprehensif**
```javascript
// Contoh implementasi sistem absensi lengkap dengan semua praktik terbaik
class SistemAbsensi {
  constructor() {
    this.dataGuru = dataGuru;
    this.dataAbsensi = dataAbsensi;
    this.configSekolah = configSekolah;
    this.jadwalKerja = jadwalKerja;
    this.cache = new SimpleCache();
    this.nipIndex = this.buildNIPIndex();
  }
  
  buildNIPIndex() {
    const index = new Map();
    for (let i = 1; i < this.dataGuru.length; i++) {
      index.set(this.dataGuru[i][1], i);
    }
    return index;
  }
  
  validateLogin(identifier, password) {
    const rowIndex = this.nipIndex.get(identifier) || 
                     this.dataGuru.findIndex(row => row[4] === identifier && row !== this.dataGuru[0]);
    
    if (rowIndex === -1 || rowIndex === undefined) {
      return { success: false, message: "NIP atau Email tidak ditemukan." };
    }
    
    const user = this.dataGuru[rowIndex];
    if (user[5] !== password) {
      return { success: false, message: "Password salah." };
    }
    
    return {
      success: true,
      data: {
        nama: user[0],
        nip: user[1],
        jabatan: user[2],
        unitKerja: user[3],
        email: user[4],
        isAdmin: user[2].toLowerCase().includes('admin') || user[2].toLowerCase().includes('kepala sekolah')
      }
    };
  }
  
  async prosesAbsensi(data) {
    const { nama, tipe, lat, lng, foto, alasan, deviceId } = data;
    
    // Validasi perangkat
    const deviceValidation = validateDevice(nama, deviceId);
    if (!deviceValidation.success) {
      return { success: false, message: deviceValidation.message };
    }
    
    // Cek apakah hari ini adalah hari kerja
    const todayStr = new Date().toISOString().split('T')[0];
    const workDayStatus = cekHariKerja(todayStr);
    if (!workDayStatus.isWorkDay) {
      return {
        success: false,
        message: `Hari ini adalah ${workDayStatus.status} (${workDayStatus.keterangan}). Absensi tidak dapat dilakukan.`
      };
    }
    
    // Proses berdasarkan tipe
    switch(tipe) {
      case 'Check In':
        return this.prosesCheckIn(nama, lat, lng, foto);
      case 'Check Out':
        return this.prosesCheckOut(nama, lat, lng);
      case 'Izin':
        return this.prosesIzin(nama, alasan, foto);
      default:
        return { success: false, message: 'Tipe absensi tidak valid' };
    }
  }
  
  prosesCheckIn(nama, lat, lng, foto) {
    const today = new Date().toISOString().split('T')[0];
    const sudahCheckIn = this.dataAbsensi.some(absensi => 
      absensi[0] === today && 
      absensi[1] === nama && 
      absensi[2] !== "-"
    );
    
    if (sudahCheckIn) {
      return { success: false, message: "Anda sudah melakukan Check In hari ini." };
    }
    
    // Validasi lokasi
    const jarak = hitungJarak(lat, lng, this.configSekolah[1][1], this.configSekolah[2][1]);
    const radius = this.configSekolah[3][1];
    
    if (jarak > radius) {
      return { success: false, message: `Anda berada di luar area sekolah (${Math.round(jarak)}m dari sekolah).` };
    }
    
    // Tentukan status
    const jamMasuk = this.configSekolah[4][1];
    const waktuSekarang = new Date();
    const jamSekarang = waktuSekarang.getHours() + ':' + waktuSekarang.getMinutes().toString().padStart(2, '0');
    const status = isLate(jamMasuk, jamSekarang) ? 'Terlambat' : 'Hadir';
    
    // Tambahkan data
    tambahDataAbsensi(today, nama, "Check In", status, `${lat},${lng}`, foto || "-", "-");
    
    return { 
      success: true, 
      message: `✅ Check In Berhasil!\nStatus: ${status}\nWaktu: ${jamSekarang}`,
      status: status
    };
  }
  
  prosesCheckOut(nama, lat, lng) {
    const today = new Date().toISOString().split('T')[0];
    const sudahCheckIn = this.dataAbsensi.some(absensi => 
      absensi[0] === today && 
      absensi[1] === nama && 
      absensi[2] !== "-"
    );
    
    if (!sudahCheckIn) {
      return { success: false, message: "Anda belum melakukan Check In hari ini." };
    }
    
    const sudahCheckOut = this.dataAbsensi.some(absensi => 
      absensi[0] === today && 
      absensi[1] === nama && 
      absensi[6] !== "-"
    );
    
    if (sudahCheckOut) {
      return { success: false, message: "Anda sudah melakukan Check Out hari ini." };
    }
    
    // Validasi waktu pulang
    const jamPulang = this.configSekolah[6][1];
    const waktuSekarang = new Date();
    const jamSekarang = waktuSekarang.getHours() + ':' + waktuSekarang.getMinutes().toString().padStart(2, '0');
    
    const [jamPulangH, jamPulangM] = jamPulang.split(':').map(Number);
    const [jamSekarangH, jamSekarangM] = jamSekarang.split(':').map(Number);
    
    if (jamSekarangH < jamPulangH || (jamSekarangH === jamPulangH && jamSekarangM < jamPulangM)) {
      return { success: false, message: `Belum saatnya Check Out. Jam pulang pukul ${jamPulang}.` };
    }
    
    tambahDataAbsensi(today, nama, "Check Out", "Hadir", `${lat},${lng}`, "-", "-");
    
    return { 
      success: true, 
      message: `✅ Check Out Berhasil!\nWaktu: ${jamSekarang}`
    };
  }
  
  prosesIzin(nama, alasan, foto) {
    const jamBatasIzin = this.configSekolah[5][1];
    const waktuSekarang = new Date();
    const jamSekarang = waktuSekarang.getHours() + ':' + waktuSekarang.getMinutes().toString().padStart(2, '0');
    
    const [jamBatasH, jamBatasM] = jamBatasIzin.split(':').map(Number);
    const [jamSekarangH, jamSekarangM] = jamSekarang.split(':').map(Number);
    
    if (jamSekarangH > jamBatasH || (jamSekarangH === jamBatasH && jamSekarangM > jamBatasM)) {
      return { success: false, message: `Batas waktu pengajuan izin (${jamBatasIzin}) sudah habis.` };
    }
    
    const today = new Date().toISOString().split('T')[0];
    tambahDataAbsensi(today, nama, "Izin", "Menunggu Persetujuan", "-", foto || "-", alasan);
    
    return { 
      success: true, 
      message: `✅ Pengajuan Izin Terkirim!\nStatus: Menunggu Persetujuan`
    };
  }
  
  getMonitoringHarian() {
    const cacheKey = 'monitoring-harian';
    let cachedData = this.cache.get(cacheKey);
    
    if (cachedData) {
      return cachedData;
    }
    
    const today = new Date().toISOString().split('T')[0];
    const semuaGuru = this.dataGuru.slice(1).map(guru => ({
      nama: guru[0],
      jabatan: guru[2]
    }));
    
    const absensiHariIni = this.dataAbsensi.filter(absensi => absensi[0] === today);
    const absensiMap = new Map();
    
    absensiHariIni.forEach(absensi => {
      const nama = absensi[1];
      if (!absensiMap.has(nama)) {
        absensiMap.set(nama, []);
      }
      absensiMap.get(nama).push(absensi);
    });
    
    let total = 0, hadir = 0, sakit = 0, izin = 0, alpha = 0;
    
    const monitoringList = semuaGuru.map(guru => {
      total++;
      const absensiGuru = absensiMap.get(guru.nama) || [];
      
      let statusFinal = 'Alpha';
      let detail = '-';
      let waktu = '-';
      
      for (const absensi of absensiGuru) {
        if (absensi[10] !== "-") {
          if (absensi[12].toLowerCase().includes('sakit')) {
            statusFinal = 'Sakit';
            sakit++;
          } else {
            statusFinal = 'Izin';
            izin++;
          }
          detail = absensi[12];
        } else if (absensi[2] !== "-") {
          statusFinal = absensi[3];
          hadir++;
          detail = absensi[3] === 'Terlambat' ? 'Terlambat' : 'Tepat Waktu';
          waktu = absensi[2];
        }
      }
      
      if (statusFinal === 'Alpha') {
        alpha++;
      }
      
      return {
        nama: guru.nama,
        jabatan: guru.jabatan,
        status: statusFinal,
        detail: detail,
        waktu: waktu
      };
    });
    
    monitoringList.sort((a, b) => {
      const score = (s) => {
        if (s === 'Alpha') return 0;
        if (s === 'Sakit') return 1;
        if (s === 'Izin') return 2;
        return 3;
      };
      return score(a.status) - score(b.status);
    });
    
    const result = {
      stats: { total, hadir, sakit, izin, alpha },
      list: monitoringList,
      date: new Date().toLocaleDateString('id-ID', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };
    
    // Simpan ke cache
    this.cache.set(cacheKey, result);
    return result;
  }
}

// Test implementasi komprehensif
const sistemAbsensi = new SistemAbsensi();

// Test login
const loginResult = sistemAbsensi.validateLogin("guru1@sekolah.id", "1234");
console.log("Login Result:", loginResult);

// Test proses absensi
const absensiResult = sistemAbsensi.prosesAbsensi({
  nama: "Guru Demo 1",
  tipe: "Check In",
  lat: -6.752088,
  lng: 107.458523,
  foto: "https://example.com/foto.jpg",
  deviceId: "DEVICE-ABC123"
});
console.log("Absensi Result:", absensiResult);

// Test monitoring harian
const monitoringResult = sistemAbsensi.getMonitoringHarian();
console.log("Monitoring Result:", monitoringResult);
```

### Kesimpulan

Selamat! Anda telah mempelajari secara menyeluruh tentang **CRUD dan manipulasi data spreadsheet** dalam konteks aplikasi absensi guru, disimulasikan sepenuhnya dalam **JavaScript murni**.

**Pola Pikir yang Telah Dibentuk:**
1. **Analisis dulu, baru coding.** Tulis dulu rencananya dalam bahasa manusia.
2. **Pecah masalah.** "Buat Aplikasi Absensi" itu terlalu besar. Pecah jadi "Login", "Check In", "Check Out", "Izin", dll.
3. **Kuasai Loop & If.** Hampir semua logika bisnis aplikasi hanyalah kombinasi cerdas dari Pengulangan (`for`, `.forEach`, `.map`) dan Keputusan (`if`, `.filter`, `.find`).
4. **Validasi Input.** Jangan pernah percaya input dari user.
5. **Efisiensi.** Gunakan indeks dan cache untuk performa optimal.
6. **Keamanan.** Implementasikan otentikasi dan validasi perangkat.
7. **Notifikasi Real-time.** Gunakan polling atau WebSocket untuk update langsung.

Teruslah berlatih dengan mencoba memodifikasi skenario di atas (misalnya: tambah fitur laporan, sistem peringatan keterlambatan, dll.) untuk memperkuat pemahaman Anda tentang algoritma dan manipulasi data.