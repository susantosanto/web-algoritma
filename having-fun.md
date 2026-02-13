# Belajar Seru dengan Dasar-Dasar JavaScript: Panduan Lengkap

Selamat datang di perjalanan Anda untuk menguasai dasar-dasar JavaScript! Panduan ini akan membawa Anda melalui konsep-konsep penting secara bertahap, dengan penjelasan terperinci dan latihan praktis untuk membangun pemikiran algoritmik Anda baik untuk pengembangan JavaScript maupun manipulasi spreadsheet Google Apps Script.

## Daftar Isi
1. [Perulangan](#perulangan)
2. [Kondisional](#kondisional)
3. [Fungsi Orde-Tinggi](#fungsi-ordetinggi)
4. [Promise](#promise)
5. [Async/Await](#asyncawait)
6. [Variables and Scoping](#variables-and-scoping)
7. [Functions](#functions)
8. [Objects and Prototypes](#objects-and-prototypes)
9. [Error Handling](#error-handling)
10. [Destructuring and Spread Operator](#destructuring-and-spread-operator)
11. [Template Literals and String Methods](#template-literals-and-string-methods)
12. [Modules and Import/Export](#modules-and-importexport)

---

## Perulangan

### Memahami Perulangan

Perulangan adalah blok bangunan fundamental dalam pemrograman yang memungkinkan kita mengulangi tindakan secara efisien. Bayangkan perulangan sebagai cara untuk mengotomatisasi tugas-tugas berulang - daripada menulis kode yang sama beberapa kali, kita menulisnya sekali di dalam perulangan dan membiarkan komputer menangani pengulangannya.

**Konsep Penting:**
- **Perulangan** adalah struktur kontrol yang mengizinkan kode untuk dieksekusi berulang kali
- **Iterasi** adalah satu kali eksekusi dari blok kode dalam perulangan
- **Counter** adalah variabel yang digunakan untuk melacak jumlah iterasi
- **Kondisi terminasi** adalah kondisi yang menentukan kapan perulangan harus berhenti

### Jenis-Jenis Perulangan

#### 1. Perulangan For
Perulangan `for` ideal digunakan ketika Anda tahu persis berapa kali Anda ingin mengulangi suatu aksi.

**Contoh Dasar:**
```javascript
// Sintaks dasar perulangan for:
// for (inisialisasi; kondisi; inkrementasi/dekrementasi) {
//   // kode untuk dieksekusi
// }

// Contoh: Mencetak angka 1 sampai 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**Penjabaran langkah demi langkah:**
1. **Inisialisasi (`let i = 1`)**: Membuat variabel counter `i` dan mengaturnya ke 1
2. **Kondisi (`i <= 5`)**: Perulangan terus berjalan selama `i` kurang dari atau sama dengan 5
3. **Inkrementasi (`i++`)**: Setelah setiap iterasi, kita meningkatkan `i` sebesar 1
4. **Aksi (`console.log(i)`)**: Mencetak nilai saat ini dari `i`
5. **Perulangan**: Proses ini diulang hingga kondisi menjadi salah

**Langkah-langkah eksekusi:**
- Iterasi 1: `i = 1`, `1 <= 5` (benar), cetak 1, lalu `i++` → `i = 2`
- Iterasi 2: `i = 2`, `2 <= 5` (benar), cetak 2, lalu `i++` → `i = 3`
- Iterasi 3: `i = 3`, `3 <= 5` (benar), cetak 3, lalu `i++` → `i = 4`
- Iterasi 4: `i = 4`, `4 <= 5` (benar), cetak 4, lalu `i++` → `i = 5`
- Iterasi 5: `i = 5`, `5 <= 5` (benar), cetak 5, lalu `i++` → `i = 6`
- Iterasi 6: `i = 6`, `6 <= 5` (salah), perulangan berhenti

**Contoh Lain - Perulangan For:**
```javascript
// Mencetak angka genap dari 0 hingga 10
for (let i = 0; i <= 10; i += 2) {
  console.log(`Angka genap: ${i}`);
}
```

**Penjabaran:**
1. Inisialisasi: `i = 0` (dimulai dari 0)
2. Kondisi: `i <= 10` (lanjutkan selama i kurang dari atau sama dengan 10)
3. Inkrementasi: `i += 2` (tambahkan 2 ke i setiap iterasi)
4. Aksi: Cetak angka genap saat ini

#### 2. Perulangan While
Perulangan `while` terus berjalan selama kondisi tertentu benar. Ini berguna ketika Anda tidak tahu sebelumnya berapa banyak iterasi yang akan Anda perlukan.

**Contoh Dasar:**
```javascript
// Sintaks:
// while (kondisi) {
//   // kode untuk dieksekusi
// }

// Contoh: Menghitung mundur dari 5 ke 1
let hitungan = 5;
while (hitungan > 0) {
  console.log(hitungan);
  hitungan--; // Penting: mengurangi hitungan agar akhirnya mengakhiri perulangan
}
console.log("Lepaskan!");
```

**Penjabaran langkah demi langkah:**
1. **Inisialisasi**: `hitungan` diatur ke 5
2. **Pengecekan kondisi**: Periksa apakah `hitungan > 0` - jika benar, eksekusi badan perulangan
3. **Di dalam perulangan**:
   - Cetak nilai saat ini dari `hitungan`
   - Kurangi `hitungan` sebesar 1 dengan `hitungan--`
4. **Kembali ke langkah 2**: Dengan nilai baru dari `hitungan`
5. **Berhenti**: Ketika `hitungan` mencapai 0, kondisi menjadi salah dan perulangan berakhir

**Langkah-langkah eksekusi:**
- Iterasi 1: `hitungan = 5`, `5 > 0` (benar), cetak 5, `hitungan--` → `hitungan = 4`
- Iterasi 2: `hitungan = 4`, `4 > 0` (benar), cetak 4, `hitungan--` → `hitungan = 3`
- Iterasi 3: `hitungan = 3`, `3 > 0` (benar), cetak 3, `hitungan--` → `hitungan = 2`
- Iterasi 4: `hitungan = 2`, `2 > 0` (benar), cetak 2, `hitungan--` → `hitungan = 1`
- Iterasi 5: `hitungan = 1`, `1 > 0` (benar), cetak 1, `hitungan--` → `hitungan = 0`
- Iterasi 6: `hitungan = 0`, `0 > 0` (salah), perulangan berhenti

**Contoh Lain - Perulangan While:**
```javascript
// Perulangan dengan kondisi kompleks
let angka = 1;
let jumlah = 0;

while (angka <= 5) {
  jumlah += angka;  // Tambahkan angka ke jumlah
  console.log(`Angka: ${angka}, Jumlah: ${jumlah}`);
  angka++;          // Tambahkan angka untuk iterasi berikutnya
}

console.log(`Total jumlah: ${jumlah}`); // Output: Total jumlah: 15
```

**Penjabaran:**
1. Inisialisasi: `angka = 1`, `jumlah = 0`
2. Kondisi: `angka <= 5` (lanjutkan selama angka kurang dari atau sama dengan 5)
3. Di dalam perulangan: tambahkan `angka` ke `jumlah`, cetak status, tambahkan `angka`
4. Ulangi hingga kondisi tidak terpenuhi

#### 3. Perulangan For...of
Sempurna untuk mengiterasi array dan objek yang dapat diiterasi lainnya.

**Contoh Dasar:**
```javascript
const buah = ['apel', 'pisang', 'jeruk'];

for (const buahnya of buah) {
  console.log(buahnya);
}
```

**Penjabaran langkah demi langkah:**
1. **Definisikan array**: `buah` berisi array dengan tiga elemen
2. **Perulangan `for...of`**: Secara otomatis menangani iterasi
3. **Pada setiap iterasi**: `buahnya` berisi elemen saat ini dari array
4. **Tidak perlu manajemen indeks manual**: Iterator internal menangani posisi

**Langkah-langkah eksekusi:**
- Iterasi 1: `buahnya = 'apel'`, cetak 'apel'
- Iterasi 2: `buahnya = 'pisang'`, cetak 'pisang'
- Iterasi 3: `buahnya = 'jeruk'`, cetak 'jeruk'
- Selesai: Tidak ada elemen lagi dalam array

**Contoh Lain - Perulangan For...of:**
```javascript
// Dengan string (string juga iterable)
const nama = "JavaScript";
for (const karakter of nama) {
  console.log(karakter);
}

// Dengan array objek
const mahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 92 },
  { nama: "Citra", nilai: 78 }
];

for (const mhs of mahasiswa) {
  console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}`);
}
```

**Penjabaran:**
1. String adalah iterable, jadi `for...of` akan mengiterasi setiap karakter
2. Array objek juga iterable, `for...of` mengiterasi setiap objek dalam array
3. Tidak perlu mengelola indeks secara manual

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

**Penjabaran latihan:**
1. Fungsi `cetakAngkaGenap()` didefinisikan
2. Perulangan `for` dimulai dengan `i = 0`
3. Kondisi: `i <= 20` (lanjutkan selama i kurang dari atau sama dengan 20)
4. Inkrementasi: `i += 2` (tambahkan 2 ke i setiap iterasi, hanya menghasilkan angka genap)
5. Aksi: Cetak nilai `i` saat ini
6. Perulangan berhenti ketika `i` melebihi 20

#### 3. Perulangan For...of (telah dibahas sebelumnya)

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

**Penjabaran langkah demi langkah:**
1. **Inisialisasi**: Variabel `num` dibiarkan undefined, `percobaan` diatur ke 0
2. **Kondisi perulangan**: `num !== 7` - perulangan akan terus berjalan selama `num` tidak sama dengan 7
3. **Di dalam perulangan**:
   - `num` diisi dengan angka acak antara 1-10 menggunakan `Math.floor(Math.random() * 10) + 1`
   - `percobaan` ditambah 1
   - Status percobaan dicetak
4. **Kembali ke kondisi**: Periksa apakah `num` sekarang sama dengan 7
5. **Berhenti**: Ketika `num` sama dengan 7, perulangan berhenti dan pesan akhir dicetak

**Langkah-langkah eksekusi (simulasi):**
- Iterasi 1: `num = 3`, `3 !== 7` (benar), `percobaan = 1`, cetak "Percobaan 1: 3"
- Iterasi 2: `num = 9`, `9 !== 7` (benar), `percobaan = 2`, cetak "Percobaan 2: 9"
- Iterasi 3: `num = 7`, `7 !== 7` (salah), perulangan berhenti
- Cetak "Menemukan 7 setelah 3 percobaan!"

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

**Penjabaran langkah demi langkah:**
1. **Inisialisasi**: Variabel `total` diatur ke 0 untuk menyimpan jumlah skor
2. **Perulangan `for...of`**: Iterasi melalui setiap skor dalam array `skors`
3. **Di dalam perulangan**: Tambahkan setiap `skor` ke `total`
4. **Setelah perulangan**: Hitung rata-rata dengan membagi `total` dengan jumlah skor (`skors.length`)
5. **Kembalikan hasil**: Fungsi mengembalikan nilai rata-rata

**Langkah-langkah eksekusi:**
- Array input: `[85, 92, 78, 96, 88]`
- Iterasi 1: `skor = 85`, `total = 0 + 85 = 85`
- Iterasi 2: `skor = 92`, `total = 85 + 92 = 177`
- Iterasi 3: `skor = 78`, `total = 177 + 78 = 255`
- Iterasi 4: `skor = 96`, `total = 255 + 96 = 351`
- Iterasi 5: `skor = 88`, `total = 351 + 88 = 439`
- Rata-rata: `439 / 5 = 87.8`

---

## Kondisional

### Memahami Kondisional

Kondisional memungkinkan program Anda membuat keputusan berdasarkan kondisi tertentu. Mereka seperti mengajukan pertanyaan "ya/tidak" dalam kode Anda dan mengeksekusi jalur kode yang berbeda tergantung pada jawabannya.

**Konsep Penting:**
- **Kondisional** adalah struktur kontrol yang memungkinkan eksekusi selektif kode
- **Ekspresi boolean** adalah ekspresi yang menghasilkan nilai `true` atau `false`
- **Cabang** adalah jalur kode yang berbeda yang bisa diambil tergantung pada kondisi
- **Operator logika** digunakan untuk menggabungkan atau memanipulasi kondisi

### Struktur Kondisional Dasar

#### 1. Pernyataan If
Struktur kondisional paling dasar.

**Contoh Dasar:**
```javascript
const usia = 18;

if (usia >= 18) {
  console.log("Anda berhak memilih!");
}
```

**Penjabaran langkah demi langkah:**
1. **Inisialisasi**: Variabel `usia` diatur ke 18
2. **Evaluasi kondisi**: Ekspresi `usia >= 18` dievaluasi
   - `18 >= 18` menghasilkan `true`
3. **Eksekusi cabang**: Karena kondisi benar, kode dalam kurung kurawal dieksekusi
4. **Output**: "Anda berhak memilih!" dicetak ke konsol

**Langkah-langkah eksekusi:**
- `usia = 18`
- `usia >= 18` → `18 >= 18` → `true`
- Karena `true`, eksekusi `console.log("Anda berhak memilih!")`
- Cetak "Anda berhak memilih!"

#### 2. Pernyataan If...Else
Memberikan alternatif ketika kondisinya salah.

**Contoh Dasar:**
```javascript
const suhu = 25;

if (suhu > 30) {
  console.log("Cuaca sangat panas!");
} else {
  console.log("Cuaca tidak terlalu panas.");
}
```

**Penjabaran langkah demi langkah:**
1. **Inisialisasi**: Variabel `suhu` diatur ke 25
2. **Evaluasi kondisi**: Ekspresi `suhu > 30` dievaluasi
   - `25 > 30` menghasilkan `false`
3. **Eksekusi cabang**: Karena kondisi salah, kode dalam `else` dieksekusi
4. **Output**: "Cuaca tidak terlalu panas." dicetak ke konsol

**Langkah-langkah eksekusi:**
- `suhu = 25`
- `suhu > 30` → `25 > 30` → `false`
- Karena `false`, eksekusi `console.log("Cuaca tidak terlalu panas.")`
- Cetak "Cuaca tidak terlalu panas."

#### 3. Rantai If...Else If...Else
Untuk beberapa kondisi.

**Contoh Dasar:**
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

**Penjabaran langkah demi langkah:**
1. **Inisialisasi**: Variabel `skor` diatur ke 85
2. **Evaluasi kondisi pertama**: `skor >= 90` → `85 >= 90` → `false`
3. **Evaluasi kondisi kedua**: `skor >= 80` → `85 >= 80` → `true`
4. **Eksekusi cabang**: Karena kondisi kedua benar, kode dalam cabang `else if` dieksekusi
5. **Output**: "Nilai: B" dicetak ke konsol

**Langkah-langkah eksekusi:**
- `skor = 85`
- `skor >= 90` → `85 >= 90` → `false` (lewati blok if pertama)
- `skor >= 80` → `85 >= 80` → `true` (eksekusi blok else if ini)
- Cetak "Nilai: B"
- Sisa kondisi (`skor >= 70`) dan `else` dilewati karena sudah menemukan kebenaran

#### 4. Operator Ternary
Cara singkat untuk pernyataan if...else sederhana.

**Contoh Dasar:**
```javascript
const usia = 20;
const status = usia >= 18 ? "dewasa" : "remaja";
console.log(status); // Output: "dewasa"
```

**Penjabaran langkah demi langkah:**
1. **Inisialisasi**: Variabel `usia` diatur ke 20
2. **Evaluasi kondisi**: Ekspresi `usia >= 18` dievaluasi
   - `20 >= 18` menghasilkan `true`
3. **Eksekusi ternary**: Karena kondisi benar, ambil nilai sebelum titik dua (`"dewasa"`)
4. **Assignment**: Nilai `"dewasa"` ditetapkan ke variabel `status`
5. **Output**: "dewasa" dicetak ke konsol

**Sintaks:** `kondisi ? nilaiJikaBenar : nilaiJikaSalah`

**Langkah-langkah eksekusi:**
- `usia = 20`
- `usia >= 18` → `20 >= 18` → `true`
- Karena `true`, ambil `"dewasa"`
- `status = "dewasa"`
- `console.log("dewasa")` → cetak "dewasa"

### Operator Logika dalam Kondisional

#### AND (&&), OR (||), NOT (!)

**Contoh Dasar:**
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

**Penjabaran operator AND (&&):**
1. **Inisialisasi**: `usia = 25`, `punyaSim = true`
2. **Evaluasi kondisi**: `usia >= 18 && punyaSim`
   - `usia >= 18` → `25 >= 18` → `true`
   - `punyaSim` → `true`
   - `true && true` → `true`
3. **Eksekusi**: Karena hasilnya `true`, cetak "Boleh mengemudi secara legal"

**Penjabaran operator OR (||):**
1. **Inisialisasi**: `akhirPekan = true`, `hariLibur = false`
2. **Evaluasi kondisi**: `akhirPekan || hariLibur`
   - `akhirPekan` → `true`
   - `hariLibur` → `false`
   - `true || false` → `true`
3. **Eksekusi**: Karena hasilnya `true`, cetak "Tidak ada kerjaan hari ini!"

**Penjabaran operator NOT (!):**
1. **Inisialisasi**: `sudahLogin = false`
2. **Evaluasi kondisi**: `!sudahLogin`
   - `sudahLogin` → `false`
   - `!false` → `true`
3. **Eksekusi**: Karena hasilnya `true`, cetak "Silakan login terlebih dahulu"

### Logika Kondisional Kompleks

**Contoh:**
```javascript
function cekKelayakan(usia, kewarganegaraan, catatanPidana) {
  if (usia >= 18 && kewarganegaraan === "Indonesia" && !catatanPidana) {
    return "Berhak menjadi anggota juri";
  } else if (usia >= 18 && kewarganegaraan === "Indonesia") {
    return "Tidak layak karena catatan pidana";
  } else if (usia >= 18) {
    return "Tidak layak karena kewarganegaraan";
  } else {
    return "Tidak layak karena usia";
  }
}

console.log(cekKelayakan(25, "Indonesia", false)); // Berhak menjadi anggota juri
console.log(cekKelayakan(17, "Indonesia", false)); // Tidak layak karena usia
```

**Penjabaran fungsi `cekKelayakan`:**
1. **Parameter**: Fungsi menerima `usia`, `kewarganegaraan`, dan `catatanPidana`
2. **Cabang pertama**: Jika semua kondisi terpenuhi (`usia >= 18` DAN `kewarganegaraan === "Indonesia"` DAN `!catatanPidana`)
   - `25 >= 18` → `true`
   - `"Indonesia" === "Indonesia"` → `true`
   - `!false` → `true`
   - `true && true && true` → `true`
   - Kembalikan "Berhak menjadi anggota juri"
3. **Cabang kedua**: Jika usia cukup dan kewarganegaraan Indonesia tapi ada catatan pidana
4. **Cabang ketiga**: Jika usia cukup tapi kewarganegaraan bukan Indonesia
5. **Cabang else**: Jika usia tidak mencukupi

**Langkah-langkah eksekusi untuk `cekKelayakan(25, "Indonesia", false)`:**
- `usia = 25`, `kewarganegaraan = "Indonesia"`, `catatanPidana = false`
- Cabang 1: `25 >= 18 && "Indonesia" === "Indonesia" && !false` → `true && true && true` → `true`
- Kembalikan "Berhak menjadi anggota juri"

**Langkah-langkah eksekusi untuk `cekKelayakan(17, "Indonesia", false)`:**
- `usia = 17`, `kewarganegaraan = "Indonesia"`, `catatanPidana = false`
- Cabang 1: `17 >= 18 && ...` → `false && ...` → `false` (kort sirkuit)
- Cabang 2: `17 >= 18 && ...` → `false` (tidak perlu dicek kewarganegaraan)
- Cabang 3: `17 >= 18` → `false`
- Cabang else: Kembalikan "Tidak layak karena usia"

---

## Fungsi Orde-Tinggi

### Memahami Fungsi Orde-Tinggi

Fungsi orde-tinggi adalah fungsi yang baik mengambil fungsi lain sebagai argumen atau mengembalikan fungsi. Dalam JavaScript, fungsi adalah "warga kelas satu," artinya mereka bisa disimpan dalam variabel, dilewatkan sebagai argumen, dan dikembalikan dari fungsi lain.

**Konsep Penting:**
- **Fungsi orde-tinggi** adalah fungsi yang menerima fungsi lain sebagai parameter atau mengembalikan fungsi
- **Callback** adalah fungsi yang dilewatkan sebagai argumen ke fungsi lain
- **Higher-order function (HOF)** adalah fungsi yang beroperasi pada fungsi lain
- **Pure function** adalah fungsi yang tidak memiliki efek samping dan selalu mengembalikan hasil yang sama untuk input yang sama

Tiga fungsi orde-tinggi yang paling penting untuk manipulasi data adalah:
- `map()` - Transformasi data
- `filter()` - Seleksi elemen spesifik
- `reduce()` - Agregasi data

### 1. Fungsi Map

Fungsi `map()` membuat array baru dengan mentransformasi setiap elemen dari array asli.

**Contoh Dasar:**
```javascript
const angka = [1, 2, 3, 4, 5];

// Kalikan setiap angka dengan 2
const ganda = angka.map(num => num * 2);
console.log(ganda); // [2, 4, 6, 8, 10]

// Versi lebih eksplisit
const gandaEksplisit = angka.map(function(num) {
  return num * 2;
});
```

**Penjabaran langkah demi langkah:**
1. **Inisialisasi**: Array `angka` berisi `[1, 2, 3, 4, 5]`
2. **Pemanggilan `map`**: Fungsi `map` dipanggil pada array `angka`
3. **Fungsi transformasi**: Fungsi `num => num * 2` dilewatkan sebagai argumen
4. **Iterasi dan transformasi**:
   - Elemen 1: `num = 1`, `1 * 2 = 2`
   - Elemen 2: `num = 2`, `2 * 2 = 4`
   - Elemen 3: `num = 3`, `3 * 2 = 6`
   - Elemen 4: `num = 4`, `4 * 2 = 8`
   - Elemen 5: `num = 5`, `5 * 2 = 10`
5. **Kembalikan array baru**: Array `[2, 4, 6, 8, 10]` dikembalikan

**Langkah-langkah eksekusi:**
- `angka = [1, 2, 3, 4, 5]`
- `angka.map(num => num * 2)`
- Iterasi 1: `num = 1`, hasil = `2`
- Iterasi 2: `num = 2`, hasil = `4`
- Iterasi 3: `num = 3`, hasil = `6`
- Iterasi 4: `num = 4`, hasil = `8`
- Iterasi 5: `num = 5`, hasil = `10`
- Kembalikan `[2, 4, 6, 8, 10]`

**Contoh Lain - Transformasi Objek:**
```javascript
const mahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 92 },
  { nama: "Citra", nilai: 78 }
];

// Ekstrak hanya nama mahasiswa
const namaSiswa = mahasiswa.map(mhs => mhs.nama);
console.log(namaSiswa); // ["Andi", "Budi", "Citra"]

// Tambahkan grade berdasarkan nilai
const mahasiswaDenganGrade = mahasiswa.map(mhs => {
  let grade;
  if (mhs.nilai >= 90) grade = "A";
  else if (mhs.nilai >= 80) grade = "B";
  else if (mhs.nilai >= 70) grade = "C";
  else grade = "D";

  return {
    ...mhs,
    grade: grade
  };
});

console.log(mahasiswaDenganGrade);
// [
//   { nama: "Andi", nilai: 85, grade: "B" },
//   { nama: "Budi", nilai: 92, grade: "A" },
//   { nama: "Citra", nilai: 78, grade: "C" }
// ]
```

**Penjabaran transformasi objek:**
1. **Array input**: Array objek mahasiswa dengan nama dan nilai
2. **Fungsi transformasi**: Fungsi yang menerima objek mahasiswa dan mengembalikan objek baru
3. **Logika grade**: Menentukan grade berdasarkan nilai
4. **Spread operator**: `...mhs` menyalin properti asli
5. **Penambahan properti**: Menambahkan properti `grade` ke objek baru

### 2. Fungsi Filter

Fungsi `filter()` membuat array baru yang hanya berisi elemen-elemen yang memenuhi kondisi tertentu.

**Contoh Dasar:**
```javascript
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Dapatkan hanya angka genap
const genap = angka.filter(num => num % 2 === 0);
console.log(genap); // [2, 4, 6, 8, 10]

// Versi lebih eksplisit
const genapEksplisit = angka.filter(function(num) {
  return num % 2 === 0;
});
```

**Penjabaran langkah demi langkah:**
1. **Inisialisasi**: Array `angka` berisi `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
2. **Pemanggilan `filter`**: Fungsi `filter` dipanggil pada array `angka`
3. **Fungsi predikat**: Fungsi `num => num % 2 === 0` dilewatkan sebagai argumen
4. **Iterasi dan pengecekan kondisi**:
   - Elemen 1: `num = 1`, `1 % 2 === 0` → `false` (lewati)
   - Elemen 2: `num = 2`, `2 % 2 === 0` → `true` (masukkan)
   - Elemen 3: `num = 3`, `3 % 2 === 0` → `false` (lewati)
   - Elemen 4: `num = 4`, `4 % 2 === 0` → `true` (masukkan)
   - Dan seterusnya...
5. **Kembalikan array baru**: Array `[2, 4, 6, 8, 10]` dikembalikan

**Langkah-langkah eksekusi:**
- `angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
- `angka.filter(num => num % 2 === 0)`
- Iterasi 1: `num = 1`, `1 % 2 === 0` → `false`, tidak masukkan
- Iterasi 2: `num = 2`, `2 % 2 === 0` → `true`, masukkan `2`
- Iterasi 3: `num = 3`, `3 % 2 === 0` → `false`, tidak masukkan
- Iterasi 4: `num = 4`, `4 % 2 === 0` → `true`, masukkan `4`
- Iterasi 5: `num = 5`, `5 % 2 === 0` → `false`, tidak masukkan
- Iterasi 6: `num = 6`, `6 % 2 === 0` → `true`, masukkan `6`
- Iterasi 7: `num = 7`, `7 % 2 === 0` → `false`, tidak masukkan
- Iterasi 8: `num = 8`, `8 % 2 === 0` → `true`, masukkan `8`
- Iterasi 9: `num = 9`, `9 % 2 === 0` → `false`, tidak masukkan
- Iterasi 10: `num = 10`, `10 % 2 === 0` → `true`, masukkan `10`
- Kembalikan `[2, 4, 6, 8, 10]`

**Contoh Lain - Filter Objek:**
```javascript
const produk = [
  { nama: "Laptop", harga: 1200, kategori: "Elektronik" },
  { nama: "Buku", harga: 20, kategori: "Pendidikan" },
  { nama: "Telepon", harga: 800, kategori: "Elektronik" },
  { nama: "Meja", harga: 300, kategori: "Perabotan" }
];

// Filter produk elektronik dengan harga di atas 500
const elektronikMahal = produk.filter(produk =>
  produk.kategori === "Elektronik" && produk.harga > 500
);

console.log(elektronikMahal);
// [
//   { nama: "Laptop", harga: 1200, kategori: "Elektronik" },
//   { nama: "Telepon", harga: 800, kategori: "Elektronik" }
// ]
```

**Penjabaran filter kompleks:**
1. **Array input**: Array objek produk dengan berbagai properti
2. **Fungsi predikat**: Fungsi yang menggabungkan beberapa kondisi dengan `&&`
3. **Kondisi pertama**: `produk.kategori === "Elektronik"`
4. **Kondisi kedua**: `produk.harga > 500`
5. **Kedua kondisi harus benar**: Menggunakan operator AND (`&&`)
6. **Hasil**: Hanya objek yang memenuhi kedua kondisi yang disertakan

### 3. Fungsi Reduce

Fungsi `reduce()` menggabungkan semua elemen array menjadi satu nilai.

**Contoh Dasar:**
```javascript
const angka = [1, 2, 3, 4, 5];

// Jumlahkan semua angka
const jumlah = angka.reduce((akumulator, nilaiSaatIni) => {
  return akumulator + nilaiSaatIni;
}, 0); // 0 adalah nilai awal untuk akumulator

console.log(jumlah); // 15
```

**Penjabaran langkah demi langkah:**
1. **Inisialisasi**: Array `angka` berisi `[1, 2, 3, 4, 5]`
2. **Pemanggilan `reduce`**: Fungsi `reduce` dipanggil pada array `angka`
3. **Fungsi reducer**: Fungsi `(akumulator, nilaiSaatIni) => akumulator + nilaiSaatIni` dilewatkan
4. **Nilai awal**: `0` digunakan sebagai nilai awal akumulator
5. **Iterasi dan reduksi**:
   - Iterasi 1: `akumulator = 0`, `nilaiSaatIni = 1`, hasil = `0 + 1 = 1`
   - Iterasi 2: `akumulator = 1`, `nilaiSaatIni = 2`, hasil = `1 + 2 = 3`
   - Iterasi 3: `akumulator = 3`, `nilaiSaatIni = 3`, hasil = `3 + 3 = 6`
   - Iterasi 4: `akumulator = 6`, `nilaiSaatIni = 4`, hasil = `6 + 4 = 10`
   - Iterasi 5: `akumulator = 10`, `nilaiSaatIni = 5`, hasil = `10 + 5 = 15`
6. **Kembalikan hasil akhir**: Nilai `15` dikembalikan

**Langkah-langkah eksekusi:**
- `angka = [1, 2, 3, 4, 5]`
- `angka.reduce((akumulator, nilaiSaatIni) => akumulator + nilaiSaatIni, 0)`
- Iterasi 1: `akumulator = 0`, `nilaiSaatIni = 1`, `akumulator = 0 + 1 = 1`
- Iterasi 2: `akumulator = 1`, `nilaiSaatIni = 2`, `akumulator = 1 + 2 = 3`
- Iterasi 3: `akumulator = 3`, `nilaiSaatIni = 3`, `akumulator = 3 + 3 = 6`
- Iterasi 4: `akumulator = 6`, `nilaiSaatIni = 4`, `akumulator = 6 + 4 = 10`
- Iterasi 5: `akumulator = 10`, `nilaiSaatIni = 5`, `akumulator = 10 + 5 = 15`
- Kembalikan `15`

**Sintaks:** `array.reduce((akumulator, nilaiSaatIni, indeksSaatIni, array) => {...}, nilaiAwal)`

**Contoh Lain - Reduce untuk Objek:**
```javascript
const transaksi = [
  { jenis: "debit", jumlah: 100 },
  { jenis: "kredit", jumlah: 50 },
  { jenis: "debit", jumlah: 200 },
  { jenis: "kredit", jumlah: 75 }
];

// Hitung saldo akhir (debit = pengeluaran, kredit = pemasukan)
const saldoAkhir = transaksi.reduce((saldo, transaksi) => {
  if (transaksi.jenis === "debit") {
    return saldo - transaksi.jumlah;
  } else {
    return saldo + transaksi.jumlah;
  }
}, 0); // Mulai dengan saldo 0

console.log(saldoAkhir); // -75 (karena total debit lebih besar dari kredit)
```

**Penjabaran reduce untuk objek:**
1. **Array input**: Array objek transaksi dengan jenis dan jumlah
2. **Nilai awal**: Saldo awal diatur ke `0`
3. **Fungsi reducer**: Fungsi yang menyesuaikan saldo berdasarkan jenis transaksi
4. **Logika**: Jika debit, kurangi saldo; jika kredit, tambah saldo
5. **Iterasi**: Proses setiap transaksi secara berurutan
6. **Hasil akhir**: Saldo setelah semua transaksi diproses

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

**Penjabaran latihan map:**
1. **Array input**: Array objek siswa dengan properti nama dan nilai
2. **Fungsi transformasi**: Fungsi yang mengambil objek siswa dan mengembalikan hanya properti `nama`
3. **Hasil**: Array string yang hanya berisi nama-nama siswa
4. **Proses**: `siswa.map(siswa => siswa.nama)` mengambil properti `nama` dari setiap objek

---

## Promise

### Memahami Promise

Promise adalah objek yang mewakili penyelesaian (atau kegagalan) dari sebuah operasi asynchronous dan nilainya. Promise sangat penting dalam pemrograman JavaScript modern karena banyak API asynchronous mengembalikan Promise.

**Konsep Penting:**
- **Promise** adalah objek yang mewakili penyelesaian atau kegagalan dari operasi asynchronous
- **State** adalah status dari sebuah promise: pending, fulfilled, atau rejected
- **Resolver** adalah fungsi yang digunakan untuk menyelesaikan promise
- **Chaining** adalah kemampuan untuk menghubungkan beberapa operasi asynchronous

Promise memiliki tiga status:
- **Pending**: Status awal, belum selesai atau gagal
- **Fulfilled**: Operasi selesai dengan sukses
- **Rejected**: Operasi gagal

### Membuat Promise

**Contoh Dasar:**
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
1. **Membuat promise**: `new Promise((resolve, reject) => { ... })`
2. **Executor function**: Fungsi yang menerima `resolve` dan `reject` sebagai parameter
3. **Simulasi async**: `setTimeout` digunakan untuk mensimulasikan operasi asynchronous
4. **Kondisi sukses**: Jika `success` adalah `true`, panggil `resolve` dengan pesan sukses
5. **Kondisi gagal**: Jika `success` adalah `false`, panggil `reject` dengan pesan error
6. **Penanganan hasil**: Gunakan `.then()` untuk menangani hasil sukses dan `.catch()` untuk error

**Langkah-langkah eksekusi:**
- Buat promise baru dengan executor function
- Executor function berjalan segera
- `setTimeout` diatur untuk menjalankan callback setelah 1 detik
- Setelah 1 detik, kondisi `success` dicek
- Jika `true`, panggil `resolve("Operasi berhasil!")`
- Promise berpindah dari status pending ke fulfilled
- `.then()` menangani hasil dari `resolve`
- Cetak "Operasi berhasil!"

### Metode-Metode Promise

#### 1. Promise.all()
Menjalankan beberapa promise secara paralel dan menunggu semua selesai.

**Contoh Dasar:**
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

**Penjabaran:**
1. **Promise 1**: `Promise.resolve(3)` langsung selesai dengan nilai 3
2. **Promise 2**: Nilai primitif 42 secara otomatis dibungkus dalam promise yang selesai
3. **Promise 3**: Promise yang menunggu 100ms sebelum selesai dengan nilai "foo"
4. **Promise.all**: Menunggu semua promise selesai
5. **Hasil**: Array nilai-nilai dalam urutan yang sama dengan array input

**Langkah-langkah eksekusi:**
- `promise1` selesai segera dengan nilai 3
- `promise2` selesai segera dengan nilai 42
- `promise3` menunggu 100ms, lalu selesai dengan nilai "foo"
- `Promise.all` menunggu semua promise selesai
- Setelah semua selesai, `.then()` dipanggil dengan `[3, 42, "foo"]`

#### 2. Promise.race()
Mengembalikan promise yang selesai pertama.

**Contoh Dasar:**
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

**Penjabaran:**
1. **Promise 1**: Menunggu 500ms sebelum selesai
2. **Promise 2**: Menunggu 100ms sebelum selesai
3. **Promise.race**: Menunggu promise pertama yang selesai
4. **Hasil**: Nilai dari promise yang selesai pertama

**Langkah-langkah eksekusi:**
- `promise2` selesai lebih cepat (100ms) dengan nilai "two"
- `promise1` masih menunggu (akan selesai dalam 500ms)
- `Promise.race` mengembalikan promise yang menyelesaikan pertama
- `.then()` dipanggil dengan nilai "two"

#### 3. Promise.allSettled()
Menunggu semua promise selesai (baik sukses maupun gagal).

**Contoh Dasar:**
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

**Penjabaran:**
1. **Promise 1**: Selesai dengan sukses
2. **Promise 2**: Gagal setelah 100ms
3. **Promise.allSettled**: Menunggu semua promise selesai (tidak peduli sukses atau gagal)
4. **Hasil**: Array objek dengan status dan nilai/error dari setiap promise

**Langkah-langkah eksekusi:**
- `promise1` selesai segera dengan status "fulfilled"
- `promise2` gagal setelah 100ms dengan status "rejected"
- `Promise.allSettled` menunggu kedua promise selesai
- `.then()` dipanggil dengan array hasil yang berisi status masing-masing promise

### Latihan Promise Tahap 1 (Mudah)

**Latihan 1: Promise Dasar**
Buat sebuah promise yang menyelesaikan setelah 2 detik dan mengembalikan pesan "Hello World".

**Petunjuk:**
1. Buat promise baru menggunakan `new Promise()`
2. Dalam executor function, gunakan `setTimeout` untuk menunda penyelesaian
3. Setelah 2 detik, panggil `resolve` dengan pesan "Hello World"
4. Gunakan `.then()` untuk mencetak hasilnya

**Solusi:**
```javascript
const helloPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 2000); // 2 detik
});

helloPromise.then(result => {
  console.log(result); // Output: "Hello World"
});
```

**Penjabaran latihan:**
1. **Membuat promise**: `new Promise((resolve, reject) => { ... })`
2. **Timeout**: `setTimeout` diatur untuk 2000ms (2 detik)
3. **Resolve**: Setelah 2 detik, `resolve("Hello World")` dipanggil
4. **Penanganan**: `.then()` menangani hasil dari promise
5. **Output**: "Hello World" dicetak setelah 2 detik

---

## Async/Await

### Memahami Pemrograman Asinkron

Pemrograman asinkron memungkinkan kode Anda melakukan operasi yang memakan waktu (seperti mengambil data dari internet, membaca file, atau menunggu input pengguna) tanpa memblokir bagian lain dari program Anda.

Bayangkan seperti memesan makanan di restoran:
- **Sinkron**: Anda menunggu di meja kasir sampai makanan siap (memblokir)
- **Asinkron**: Anda duduk di meja dan terus berbicara sambil menunggu makanan Anda (tidak memblokir)

Async/await adalah sintaksis yang dibangun di atas Promise untuk membuat kode asynchronous terlihat dan terasa seperti synchronous.

**Konsep Penting:**
- **Async function**: Fungsi yang mengembalikan promise secara implisit
- **Await**: Operator untuk menunggu penyelesaian promise
- **Non-blocking**: Kode bisa terus berjalan sambil menunggu operasi async
- **Error handling**: Menggunakan try/catch untuk menangani error async

### Sintaks Async/Await

**Contoh Dasar:**
```javascript
// Mendeklarasikan fungsi async
async function ambilData() {
  try {
    // Simulasikan pengambilan data (biasanya ini panggilan API)
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, nama: "John Doe", email: "john@example.com" });
      }, 1000);
    });

    console.log("Data diterima:", response);
    return response;
  } catch (error) {
    console.error("Kesalahan mengambil data:", error);
  }
}

// Memanggil fungsi async
ambilData().then(data => {
  console.log("Fungsi selesai dengan data:", data);
});
```

**Penjabaran langkah demi langkah:**
1. **Deklarasi async**: Fungsi dideklarasikan dengan kata kunci `async`
2. **Penggunaan await**: Di dalam fungsi, gunakan `await` untuk menjeda eksekusi sampai promise selesai
3. **Try/catch**: Bungkus dalam try/catch untuk menangani kemungkinan kesalahan
4. **Fungsi mengembalikan promise**: Fungsi secara otomatis mengembalikan Promise

**Langkah-langkah eksekusi:**
- Fungsi `ambilData()` dipanggil
- `await new Promise(...)` menunggu 1 detik
- Setelah 1 detik, promise selesai dengan data
- `response` menerima data `{ id: 1, nama: "John Doe", email: "john@example.com" }`
- `console.log("Data diterima:", response)` mencetak data
- Fungsi mengembalikan data
- `.then()` menangani hasil dari fungsi async

### Contoh Dunia Nyata: Mengambil Data dari API

**Contoh Dasar:**
```javascript
async function ambilDataUser(idUser) {
  try {
    // Simulasikan panggilan API dengan fetch (dalam kode nyata, ini akan menjadi endpoint API sebenarnya)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`);

    if (!response.ok) {
      throw new Error(`Kesalahan HTTP! Status: ${response.status}`);
    }

    const userData = await response.json();
    console.log("Data pengguna:", userData);
    return userData;
  } catch (error) {
    console.error("Gagal mengambil data pengguna:", error.message);
    throw error; // Lempar ulang agar kode pemanggil bisa menanganinya
  }
}

// Menggunakan fungsi
async function utama() {
  try {
    const user = await ambilDataUser(1);
    console.log(`Halo, ${user.name}!`);
  } catch (error) {
    console.log("Tidak bisa mengambil informasi pengguna");
  }
}

utama();
```

**Penjabaran contoh dunia nyata:**
1. **Fungsi async**: `ambilDataUser` dideklarasikan sebagai async
2. **Penggunaan await**: `await fetch(...)` menunggu respons dari API
3. **Pengecekan status**: Dicek apakah respons OK
4. **Parsing JSON**: `await response.json()` menunggu parsing JSON selesai
5. **Penanganan error**: Menggunakan try/catch untuk menangani error
6. **Fungsi utama**: Fungsi `utama` juga async untuk bisa menggunakan await

**Langkah-langkah eksekusi:**
- Fungsi `utama()` dipanggil
- `await ambilDataUser(1)` menunggu pengambilan data user dengan ID 1
- `ambilDataUser` membuat request ke API
- Setelah respons diterima, JSON diparsing
- Data user dikembalikan
- `console.log(\`Halo, ${user.name}!\`);` mencetak sapaan
- Jika terjadi error, ditangani oleh blok catch

### Penanganan Kesalahan dengan Async/Await

Penanganan kesalahan yang tepat sangat penting dalam kode asinkron:

**Contoh Dasar:**
```javascript
async function pemrosesanDataRobust() {
  try {
    // Beberapa operasi async
    const data1 = await ambilDariSumber1();
    const data2 = await ambilDariSumber2();

    // Proses data
    const dataTerproses = prosesData(data1, data2);

    // Simpan hasilnya
    await simpanHasil(dataTerproses);

    console.log("Semua operasi selesai dengan sukses!");
  } catch (error) {
    // Tangani kesalahan apa pun yang terjadi di blok try
    console.error("Terjadi kesalahan selama pemrosesan:", error.message);

    // Secara opsional, coba pulihkan atau bersihkan
    await bersihkanSetelahError();
  }
}

// Fungsi bantu (disimulasikan)
function ambilDariSumber1() {
  return new Promise(resolve => setTimeout(() => resolve([1, 2, 3]), 500));
}

function ambilDariSumber2() {
  return new Promise(resolve => setTimeout(() => resolve([4, 5, 6]), 500));
}

function prosesData(data1, data2) {
  return data1.concat(data2);
}

function simpanHasil(results) {
  return new Promise(resolve => setTimeout(() => {
    console.log("Hasil disimpan:", results);
    resolve();
  }, 300));
}

function bersihkanSetelahError() {
  return new Promise(resolve => {
    console.log("Membersihkan setelah error...");
    resolve();
  });
}

pemrosesanDataRobust();
```

**Penjabaran penanganan kesalahan:**
1. **Try block**: Berisi semua operasi async yang mungkin gagal
2. **Await**: Menunggu setiap operasi async selesai sebelum melanjutkan
3. **Catch block**: Menangkap error dari operasi async manapun dalam try block
4. **Pembersihan**: Opsional, membersihkan setelah error terjadi

**Langkah-langkah eksekusi:**
- Masuk ke blok try
- `await ambilDariSumber1()` menunggu 500ms, mengembalikan `[1, 2, 3]`
- `await ambilDariSumber2()` menunggu 500ms, mengembalikan `[4, 5, 6]`
- `prosesData([1, 2, 3], [4, 5, 6])` menggabungkan array
- `await simpanHasil([1, 2, 3, 4, 5, 6])` menunggu 300ms
- Cetak "Semua operasi selesai dengan sukses!"
- Jika ada error, masuk ke blok catch dan cetak pesan error

### Latihan Async/Await

**Latihan 1: Pengambilan Data Berganda**
Buat fungsi async yang mengambil data dari dua API berbeda secara paralel, lalu menggabungkan hasilnya.

**Petunjuk:**
1. Buat fungsi async bernama `ambilDanGabungkanData`
2. Gunakan `Promise.all()` untuk mengambil data dari dua API secara paralel
3. Misalnya, ambil data pengguna dari satu API dan postingan dari API lain
4. Gabungkan data tersebut menjadi satu struktur data
5. Kembalikan hasil penggabungan
6. Tangani kemungkinan kesalahan dari masing-masing API

**Solusi:**
```javascript
async function ambilDanGabungkanData() {
  try {
    // Ambil data dari dua sumber secara paralel
    const [userData, postData] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json())
    ]);

    // Gabungkan data
    const hasilGabungan = {
      user: userData,
      post: postData
    };

    return hasilGabungan;
  } catch (error) {
    console.error('Error mengambil data:', error);
    throw error;
  }
}

// Testing
ambilDanGabungkanData()
  .then(data => console.log('Data gabungan:', data))
  .catch(error => console.error('Error:', error));
```

**Penjabaran latihan:**
1. **Fungsi async**: `ambilDanGabungkanData` dideklarasikan sebagai async
2. **Promise.all**: Mengambil dua data secara paralel
3. **Destructuring**: Hasil dari Promise.all dipecah menjadi `userData` dan `postData`
4. **Penggabungan**: Data digabungkan ke dalam objek baru
5. **Penanganan error**: Menggunakan try/catch untuk menangani error
6. **Pengembalian**: Hasil digabungkan dikembalikan

---

### LATIHAN KOMPREHENSIF: IMPLEMENTASI APLIKASI NYATA

Mari kita buat contoh komprehensif yang menggabungkan semua konsep yang telah kita pelajari:

```javascript
// Simulasikan data penjualan dari API
const dataPenjualan = [
  { id: 1, produk: "Laptop", harga: 1200, jumlah: 2, wilayah: "Utara", tanggal: "2023-01-15" },
  { id: 2, produk: "Mouse", harga: 25, jumlah: 5, wilayah: "Selatan", tanggal: "2023-01-16" },
  { id: 3, produk: "Keyboard", harga: 75, jumlah: 3, wilayah: "Utara", tanggal: "2023-01-17" },
  { id: 4, produk: "Monitor", harga: 300, jumlah: 1, wilayah: "Timur", tanggal: "2023-01-18" },
  { id: 5, produk: "Headphone", harga: 150, jumlah: 4, wilayah: "Barat", tanggal: "2023-01-19" },
  { id: 6, produk: "Tablet", harga: 400, jumlah: 2, wilayah: "Utara", tanggal: "2023-01-20" }
];

// Fungsi untuk menghitung total pendapatan untuk setiap penjualan
function hitungTotal(penjualan) {
  return penjualan.harga * penjualan.jumlah;
}

// Fungsi untuk menentukan apakah penjualan bernilai tinggi (>500)
function adalahPenjualanBernilaiTinggi(penjualan) {
  return hitungTotal(penjualan) > 500;
}

// Fungsi utama pemrosesan
async function prosesLaporanPenjualan() {
  console.log("Memulai pemrosesan laporan penjualan...\n");

  try {
    // Langkah 1: Tambahkan total yang dihitung ke setiap penjualan
    console.log("Langkah 1: Menghitung total untuk setiap penjualan...");
    const penjualanDenganTotal = dataPenjualan.map(penjualan => ({
      ...penjualan,
      total: hitungTotal(penjualan)
    }));

    console.log("Penjualan dengan total dihitung.\n");

    // Langkah 2: Filter penjualan bernilai tinggi
    console.log("Langkah 2: Memfilter penjualan bernilai tinggi (total > 500)...");
    const penjualanBernilaiTinggi = penjualanDenganTotal.filter(adalahPenjualanBernilaiTinggi);

    console.log(`Ditemukan ${penjualanBernilaiTinggi.length} penjualan bernilai tinggi.\n`);

    // Langkah 3: Hitung statistik
    console.log("Langkah 3: Menghitung statistik penjualan...");

    // Total pendapatan dari penjualan bernilai tinggi
    const pendapatanBernilaiTinggi = penjualanBernilaiTinggi.reduce((jumlah, penjualan) => jumlah + penjualan.total, 0);

    // Rata-rata pendapatan per penjualan bernilai tinggi
    const rataRataBernilaiTinggi = penjualanBernilaiTinggi.length > 0
      ? pendapatanBernilaiTinggi / penjualanBernilaiTinggi.length
      : 0;

    // Hitung penjualan berdasarkan wilayah
    const penjualanWilayah = penjualanDenganTotal.reduce((acc, penjualan) => {
      acc[penjualan.wilayah] = (acc[penjualan.wilayah] || 0) + penjualan.total;
      return acc;
    }, {});

    console.log("Statistik dihitung.\n");

    // Langkah 4: Simulasikan menyimpan ke spreadsheet (operasi async)
    console.log("Langkah 4: Menyimpan laporan ke spreadsheet...");
    await simpanKeSpreadsheet({
      penjualanBernilaiTinggi,
      pendapatanBernilaiTinggi,
      rataRataBernilaiTinggi,
      penjualanWilayah
    });

    console.log("\nPemrosesan laporan selesai dengan sukses!");

    // Tampilkan hasil
    console.log("\n--- RINGKASAN LAPORAN ---");
    console.log(`Penjualan bernilai tinggi: ${penjualanBernilaiTinggi.length}`);
    console.log(`Total pendapatan dari penjualan bernilai tinggi: Rp${pendapatanBernilaiTinggi}`);
    console.log(`Rata-rata penjualan bernilai tinggi: Rp${rataRataBernilaiTinggi.toFixed(2)}`);
    console.log("Penjualan berdasarkan wilayah:");
    for (const [wilayah, pendapatan] of Object.entries(penjualanWilayah)) {
      console.log(`  ${wilayah}: Rp${pendapatan}`);
    }

  } catch (error) {
    console.error("Kesalahan memproses laporan penjualan:", error);
  }
}

// Fungsi simulasi untuk menyimpan data ke spreadsheet
async function simpanKeSpreadsheet(laporanData) {
  // Simulasikan operasi async (seperti menyimpan ke Google Sheets)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data berhasil disimpan ke spreadsheet!");
      resolve();
    }, 1000);
  });
}

// Jalankan contoh komprehensif
prosesLaporanPenjualan();
```

**Penjabaran contoh komprehensif:**
1. **Data awal**: Array `dataPenjualan` berisi informasi penjualan
2. **Fungsi bantu**: `hitungTotal()` menghitung total pendapatan per penjualan
3. **Fungsi predikat**: `adalahPenjualanBernilaiTinggi()` menentukan penjualan bernilai tinggi
4. **Langkah 1 - Transformasi**: Gunakan `map()` untuk menambahkan total ke setiap penjualan
5. **Langkah 2 - Seleksi**: Gunakan `filter()` untuk mendapatkan penjualan bernilai tinggi
6. **Langkah 3 - Agregasi**: Gunakan `reduce()` untuk menghitung statistik
7. **Langkah 4 - Async**: Gunakan `async/await` untuk operasi penyimpanan
8. **Error handling**: Gunakan try/catch untuk menangani error
9. **Output**: Tampilkan ringkasan hasil

**Langkah-langkah eksekusi:**
- `prosesLaporanPenjualan()` dipanggil
- `dataPenjualan.map()` mentransformasi setiap item, menambahkan properti `total`
- `penjualanDenganTotal.filter()` menyaring penjualan dengan total > 500
- `penjualanBernilaiTinggi.reduce()` menghitung total pendapatan dari penjualan bernilai tinggi
- `penjualanDenganTotal.reduce()` mengelompokkan penjualan berdasarkan wilayah
- `await simpanKeSpreadsheet()` menunggu operasi penyimpanan selesai
- Hasil akhir ditampilkan dalam bentuk ringkasan

Contoh komprehensif ini menunjukkan:
1. **Perulangan**: Menggunakan `map()` untuk mengiterasi data
2. **Kondisional**: Menggunakan fungsi predikat untuk filtering
3. **Fungsi orde-tinggi**: Menggunakan `map()`, `filter()`, dan `reduce()`
4. **Async/await**: Menangani operasi asynchronous

Dengan berlatih konsep-konsep ini dan memahami logika di balik setiap langkah, Anda akan mengembangkan keterampilan berpikir algoritmik yang kuat yang sangat penting untuk pengembangan JavaScript dan manipulasi spreadsheet Google Apps Script.

---

## Latihan Tambahan Tanpa Jawaban

Berikut ini adalah latihan-latihan komprehensif yang dirancang untuk mengasah kemampuan algoritmik Anda tanpa menyediakan jawaban langsung. Setiap latihan dilengkapi dengan petunjuk langkah-demi-langkah untuk membantu Anda memecahkan masalah.

### Latihan Perulangan

**Latihan 1: Deret Fibonacci**
Buat fungsi yang mencetak deret Fibonacci sebanyak n bilangan (misalnya, untuk n=10: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34).

**Petunjuk:**
1. Buat fungsi bernama `deretFibonacci` yang menerima parameter `n`
2. Inisialisasi dua variabel pertama dari deret Fibonacci (0 dan 1)
3. Gunakan perulangan for untuk menghitung dan mencetak n bilangan
4. Dalam setiap iterasi, hitung bilangan berikutnya dengan menjumlahkan dua bilangan sebelumnya
5. Perbarui nilai dua variabel sebelumnya untuk iterasi berikutnya

**Latihan 2: Bilangan Prima**
Buat fungsi yang mencetak semua bilangan prima antara 1 dan n.

**Petunjuk:**
1. Buat fungsi bernama `cetakPrima` yang menerima parameter `n`
2. Gunakan perulangan luar untuk mengiterasi dari 2 ke n
3. Untuk setiap bilangan, gunakan perulangan dalam untuk memeriksa apakah bilangan tersebut prima
4. Bilangan prima adalah bilangan yang hanya habis dibagi oleh 1 dan dirinya sendiri
5. Untuk memeriksa apakah bilangan x prima, cukup periksa pembagian dari 2 hingga akar kuadrat dari x
6. Jika bilangan adalah prima, cetak bilangan tersebut

**Latihan 3: Pola Segitiga**
Buat fungsi yang mencetak pola segitiga bintang dengan tinggi n (misalnya, untuk n=5):
```
*
**
***
****
*****
```

**Petunjuk:**
1. Buat fungsi bernama `cetakSegitiga` yang menerima parameter `n`
2. Gunakan perulangan luar untuk mengontrol jumlah baris
3. Gunakan perulangan dalam untuk mengontrol jumlah bintang dalam setiap baris
4. Dalam perulangan dalam, gunakan `process.stdout.write('*')` untuk mencetak bintang tanpa baris baru
5. Setelah selesai mencetak bintang dalam satu baris, gunakan `console.log()` untuk pindah baris

**Latihan 4: Manipulasi Spreadsheet - Perulangan**
Buat fungsi yang menghitung jumlah total penjualan dari kolom B dalam spreadsheet, lalu menempatkan hasilnya di sel D1.

**Petunjuk:**
1. Buat fungsi bernama `hitungTotalPenjualan`
2. Dapatkan sheet aktif menggunakan `SpreadsheetApp.getActiveSheet()`
3. Dapatkan rentang data menggunakan `getDataRange()`
4. Ambil semua nilai menggunakan `getValues()`
5. Gunakan perulangan untuk mengiterasi melalui baris-baris data (abaikan header jika ada)
6. Ambil nilai dari kolom B (indeks 1) untuk setiap baris dan tambahkan ke total
7. Setel nilai total ke sel D1 menggunakan `getRange('D1').setValue(total)`

### Latihan Lanjutan Perulangan

**Latihan 5: Matriks Perkalian**
Buat fungsi yang mencetak tabel perkalian berukuran n x n.

**Petunjuk:**
1. Buat fungsi bernama `tabelPerkalian` yang menerima parameter `n`
2. Gunakan perulangan luar untuk mengontrol baris
3. Gunakan perulangan dalam untuk mengontrol kolom
4. Dalam setiap iterasi, hitung hasil perkalian baris * kolom
5. Format output agar rapih dalam bentuk tabel

**Latihan 6: Deret Aritmatika**
Buat fungsi yang mencetak n suku pertama dari deret aritmatika dengan suku pertama a dan beda b.

**Petunjuk:**
1. Buat fungsi bernama `deretAritmatika` dengan parameter `n`, `a` (suku pertama), dan `b` (beda)
2. Gunakan perulangan untuk menghitung dan mencetak setiap suku
3. Rumus suku ke-n: Un = a + (n-1)*b
4. Cetak setiap suku dalam deret tersebut

**Latihan 7: Manipulasi Spreadsheet - Pencarian Data**
Buat fungsi yang mencari data tertentu dalam spreadsheet dan mengembalikan nomor barisnya.

**Petunjuk:**
1. Buat fungsi bernama `cariDataDiSpreadsheet` yang menerima parameter `dataYangDicari`
2. Dapatkan sheet aktif dan rentang data
3. Ambil semua nilai menggunakan `getValues()`
4. Gunakan perulangan bersarang untuk mengiterasi baris dan kolom
5. Bandingkan setiap sel dengan data yang dicari
6. Jika ditemukan, kembalikan nomor barisnya
7. Jika tidak ditemukan, kembalikan -1

### Latihan Kondisional

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

**Latihan 4: Manipulasi Spreadsheet - Kondisional**
Buat fungsi yang mengevaluasi nilai siswa di kolom B dan memberikan predikat di kolom C (A untuk >=90, B untuk >=80, C untuk >=70, D untuk >=60, E untuk <60).

**Petunjuk:**
1. Buat fungsi bernama `beriPredikat`
2. Dapatkan sheet aktif dan rentang data
3. Ambil semua nilai menggunakan `getValues()`
4. Gunakan perulangan untuk mengiterasi melalui baris data
5. Untuk setiap baris, ambil nilai dari kolom B (indeks 1)
6. Gunakan struktur kondisional untuk menentukan predikat berdasarkan nilai
7. Tetapkan predikat ke sel di kolom C (indeks 2) untuk baris yang sama

### Latihan Lanjutan Kondisional

**Latihan 5: Sistem Diskon Toko**
Buat fungsi yang menghitung harga akhir setelah diskon berdasarkan total belanja dan status keanggotaan (premium/gold/silver/regular).

**Petunjuk:**
1. Buat fungsi bernama `hitungDiskon` dengan parameter `totalBelanja` dan `statusAnggota`
2. Gunakan struktur switch atau if...else untuk menentukan persentase diskon berdasarkan status
3. Tambahkan kondisi tambahan: jika total belanja > 1jt, tambah diskon 5%
4. Kembalikan harga akhir setelah diskon

**Latihan 6: Validasi Tanggal**
Buat fungsi yang memvalidasi apakah tanggal yang diberikan valid (termasuk pengecekan tahun kabisat).

**Petunjuk:**
1. Buat fungsi bernama `validasiTanggal` dengan parameter `hari`, `bulan`, `tahun`
2. Periksa apakah bulan valid (1-12)
3. Periksa apakah hari valid berdasarkan bulan (perhatikan Februari dan tahun kabisat)
4. Untuk tahun kabisat: habis dibagi 4, tapi tidak habis dibagi 100, kecuali juga habis dibagi 400
5. Kembalikan true jika tanggal valid, false jika tidak

**Latihan 7: Manipulasi Spreadsheet - Kondisional Kompleks**
Buat fungsi yang memberikan bonus kepada karyawan berdasarkan kinerja dan masa kerja.

**Petunjuk:**
1. Buat fungsi bernama `hitungBonusKaryawan`
2. Ambil data karyawan dari spreadsheet (nama, kinerja, masa kerja, gaji pokok)
3. Gunakan kondisional bersarang untuk menentukan besaran bonus:
   - Kinerja A: 20% dari gaji pokok
   - Kinerja B: 10% dari gaji pokok
   - Kinerja C: 5% dari gaji pokok
4. Tambahkan bonus tambahan 5% jika masa kerja > 5 tahun
5. Update kolom bonus di spreadsheet

### Latihan Fungsi Orde-Tinggi

**Latihan 1: Analisis Data Mahasiswa**
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

**Latihan 2: Pengolahan Data Penjualan**
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

**Latihan 3: Transformasi Data Pengguna**
Diberikan array objek pengguna dengan properti nama, email, dan umur. Buat fungsi yang:
1. Mengubah semua nama menjadi huruf kapital
2. Memfilter pengguna yang berusia di atas 18
3. Mengembalikan array hanya dengan properti nama dan email

**Petunjuk:**
1. Buat fungsi bernama `transformasiPengguna` yang menerima array pengguna
2. Gunakan chain dari map, filter, dan map lagi
3. Pertama, gunakan map untuk mengubah nama menjadi huruf kapital
4. Kemudian, gunakan filter untuk hanya menyertakan pengguna > 18 tahun
5. Akhirnya, gunakan map untuk membuat objek baru hanya dengan nama dan email
6. Kembalikan hasil akhirnya

**Latihan 4: Manipulasi Spreadsheet - Fungsi Orde-Tinggi**
Buat fungsi yang membaca data dari spreadsheet (nama, nilai, kelas) dan:
1. Menghitung rata-rata nilai per kelas
2. Menemukan siswa dengan nilai tertinggi
3. Mengembalikan daftar siswa yang lulus (nilai >= 75)

**Petunjuk:**
1. Buat fungsi bernama `analisisNilaiSpreadsheet`
2. Dapatkan data dari spreadsheet menggunakan `getValues()`
3. Konversi data ke array objek (abaikan header)
4. Gunakan reduce untuk menghitung rata-rata per kelas (kelompokkan dulu berdasarkan kelas)
5. Gunakan reduce untuk menemukan siswa dengan nilai tertinggi
6. Gunakan filter untuk mendapatkan siswa yang lulus
7. Kembalikan objek dengan ketiga hasil tersebut

### Latihan Lanjutan Fungsi Orde-Tinggi

**Latihan 5: Sistem Rekomendasi Produk**
Buat fungsi yang merekomendasikan produk berdasarkan riwayat pembelian pengguna dan rating produk.

**Petunjuk:**
1. Buat fungsi bernama `rekomendasiProduk` dengan parameter `riwayatPembelian` dan `daftarProduk`
2. Gunakan filter untuk mengecualikan produk yang sudah dibeli
3. Gunakan map untuk menghitung skor rekomendasi berdasarkan kategori produk yang pernah dibeli
4. Gunakan sort untuk mengurutkan produk berdasarkan skor dan rating
5. Kembalikan 5 produk teratas sebagai rekomendasi

**Latihan 6: Analisis Sentimen Teks**
Buat fungsi yang menganalisis sentimen dari array komentar (positif/negatif/netral).

**Petunjuk:**
1. Buat fungsi bernama `analisisSentimen` dengan parameter `komentarArray`
2. Siapkan daftar kata positif dan negatif
3. Gunakan map untuk menghitung skor sentimen setiap komentar
4. Gunakan reduce untuk menghitung total sentimen keseluruhan
5. Kembalikan objek dengan jumlah komentar positif, negatif, dan netral

**Latihan 7: Manipulasi Spreadsheet - Analisis Data Kompleks**
Buat fungsi yang menganalisis data penjualan dari spreadsheet dan membuat ringkasan performa bulanan.

**Petunjuk:**
1. Buat fungsi bernama `analisisPerformaBulanan`
2. Ambil data penjualan dari spreadsheet (tanggal, produk, jumlah, harga)
3. Gunakan map untuk menghitung total per transaksi
4. Gunakan reduce untuk mengelompokkan data berdasarkan bulan
5. Hitung total penjualan, rata-rata harian, dan tren pertumbuhan per bulan
6. Update sheet ringkasan dengan hasil analisis

### Latihan Async/Await

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

**Latihan 4: Manipulasi Spreadsheet - Async**
Buat fungsi async yang mengambil data dari API eksternal, lalu memperbarui spreadsheet dengan data tersebut.

**Petunjuk:**
1. Buat fungsi async bernama `updateSpreadsheetDariAPI`
2. Gunakan fetch atau UrlFetchApp (untuk Apps Script) untuk mengambil data dari API
3. Tunggu hasilnya dengan await
4. Dapatkan sheet aktif
5. Bersihkan data yang diambil agar sesuai dengan format spreadsheet
6. Perbarui sel-sel yang relevan dengan data baru
7. Tangani kesalahan jika API tidak merespons atau data tidak valid

### Latihan Lanjutan Promise

**Latihan 6: Promise Chain Kompleks**
Buat sistem antrian tugas asynchronous menggunakan promise chaining.

**Petunjuk:**
1. Buat fungsi `buatAntrianTugas` yang menerima array fungsi tugas
2. Gunakan promise chaining untuk mengeksekusi tugas satu per satu
3. Setiap tugas mengembalikan promise
4. Tugas berikutnya hanya mulai setelah tugas sebelumnya selesai
5. Tambahkan penanganan kesalahan untuk setiap tugas
6. Kembalikan hasil akhir setelah semua tugas selesai

**Latihan 7: Manipulasi Spreadsheet dengan Promise Chain**
Buat sistem pembaruan data spreadsheet yang kompleks menggunakan promise chain.

**Petunjuk:**
1. Buat fungsi yang mengambil data dari beberapa sheet berbeda
2. Gunakan promise chain untuk menggabungkan data dari berbagai sumber
3. Lakukan validasi data di setiap tahap
4. Update sheet target dengan data yang telah diproses
5. Gunakan `.finally()` untuk membersihkan sumber daya
6. Tambahkan logging untuk melacak proses

### Latihan Lanjutan Async/Await

**Latihan 5: Sistem Sinkronisasi Data**
Buat fungsi async yang menyinkronkan data antara spreadsheet lokal dan API eksternal.

**Petunjuk:**
1. Buat fungsi async bernama `sinkronisasiData`
2. Ambil data dari spreadsheet lokal
3. Ambil data terbaru dari API eksternal
4. Bandingkan data untuk menentukan perubahan (tambah, ubah, hapus)
5. Gunakan Promise.all untuk memproses sinkronisasi secara efisien
6. Update kedua sisi (spreadsheet dan API) agar konsisten
7. Tangani konflik data jika terjadi

**Latihan 6: Pipeline Pengolahan Data**
Buat fungsi async yang mengolah data melalui beberapa tahapan: pengambilan, pembersihan, transformasi, dan penyimpanan.

**Petunjuk:**
1. Buat fungsi async bernama `pipelinePengolahanData`
2. Buat fungsi-fungsi kecil untuk setiap tahapan: `ambilData`, `bersihkanData`, `transformasiData`, `simpanData`
3. Gunakan async/await untuk menjalankan tahapan secara berurutan
4. Tambahkan logging untuk melacak kemajuan setiap tahapan
5. Gunakan try/catch untuk menangani kesalahan di setiap tahapan
6. Kembalikan ringkasan hasil pengolahan

**Latihan 7: Sistem Monitoring dan Notifikasi**
Buat fungsi async yang memonitor kondisi tertentu dan mengirim notifikasi jika terpenuhi.

**Petunjuk:**
1. Buat fungsi async bernama `monitorDanNotifikasi`
2. Buat fungsi untuk mengambil data kondisi dari berbagai sumber
3. Gunakan setInterval atau pendekatan polling untuk memeriksa kondisi secara berkala
4. Jika kondisi terpenuhi, kirim notifikasi (email, SMS, atau update spreadsheet)
5. Gunakan Promise untuk menangani pengiriman notifikasi
6. Simpan log aktivitas monitoring ke spreadsheet
7. Tangani kesalahan jaringan atau layanan notifikasi

---

## Kesimpulan dan Praktik Terbaik

Selamat! Anda telah mempelajari secara menyeluruh tentang konsep-konsep fundamental JavaScript: perulangan, kondisional, fungsi orde-tinggi, promise, dan async/await.

**Pola Pikir yang Telah Dibentuk:**
1. **Analisis dulu, baru coding.** Tulis dulu rencananya dalam bahasa manusia.
2. **Pecah masalah.** "Buat Aplikasi" itu terlalu besar. Pecah jadi "Login", "Check In", "Check Out", dll.
3. **Kuasai Loop & If.** Hampir semua logika bisnis aplikasi hanyalah kombinasi cerdas dari Pengulangan (`for`, `.forEach`, `.map`) dan Keputusan (`if`, `.filter`, `.find`).
4. **Validasi Input.** Jangan pernah percaya input dari user.
5. **Efisiensi.** Gunakan indeks dan cache untuk performa optimal.
6. **Keamanan.** Implementasikan otentikasi dan validasi perangkat.
7. **Notifikasi Real-time.** Gunakan polling atau WebSocket untuk update langsung.

Teruslah berlatih dengan mencoba memodifikasi skenario di atas (misalnya: tambah fitur laporan, sistem peringatan keterlambatan, dll.) untuk memperkuat pemahaman Anda tentang algoritma dan manipulasi data.
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

#### 3. Perulangan For...of
Sempurna untuk mengiterasi array dan objek yang dapat diiterasi lainnya.

```javascript
const buah = ['apel', 'pisang', 'jeruk'];

for (const buahnya of buah) {
  console.log(buahnya);
}
```

**Penjabaran langkah demi langkah:**
1. Definisikan array buah
2. Perulangan `for...of` secara otomatis menangani iterasi
3. Pada setiap iterasi, `buahnya` berisi elemen saat ini
4. Tidak perlu manajemen indeks manual!

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

### Aplikasi Perulangan dalam Manipulasi Spreadsheet

Saat bekerja dengan Google Apps Script, perulangan sangat penting untuk memproses data spreadsheet:

```javascript
// Contoh: Memproses rentang sel dalam spreadsheet
function prosesDataSpreadsheet() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getDataRange();
  const values = range.getValues(); // Mendapatkan array 2D dari nilai sel

  // Perulangan melalui baris (mulai dari indeks 1 untuk melewati header)
  for (let i = 1; i < values.length; i++) {
    const row = values[i];

    // Proses setiap baris
    const nama = row[0]; // Misal kolom A adalah nama
    const skor = row[1]; // Misal kolom B adalah skor

    // Terapkan logika kondisional berdasarkan skor
    if (skor >= 90) {
      sheet.getRange(i + 1, 3).setValue('A'); // Kolom C mendapat nilai 'A'
    } else if (skor >= 80) {
      sheet.getRange(i + 1, 3).setValue('B');
    }
    // ... lanjutkan untuk nilai lainnya
  }
}
```

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

### Logika Kondisional Kompleks

```javascript
function cekKelayakan(usia, kewarganegaraan, catatanPidana) {
  if (usia >= 18 && kewarganegaraan === "Indonesia" && !catatanPidana) {
    return "Berhak menjadi anggota juri";
  } else if (usia >= 18 && kewarganegaraan === "Indonesia") {
    return "Tidak layak karena catatan pidana";
  } else if (usia >= 18) {
    return "Tidak layak karena kewarganegaraan";
  } else {
    return "Tidak layak karena usia";
  }
}

console.log(cekKelayakan(25, "Indonesia", false)); // Berhak menjadi anggota juri
console.log(cekKelayakan(17, "Indonesia", false)); // Tidak layak karena usia
```

### Aplikasi Kondisional dalam Manipulasi Spreadsheet

```javascript
function kategorikanBiaya() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();

  for (let i = 1; i < values.length; i++) { // Lewati baris header
    const jumlah = values[i][1]; // Misal kolom B memiliki jumlah
    const cellKategori = sheet.getRange(i + 1, 3); // Kolom C untuk kategori

    if (jumlah > 1000) {
      cellKategori.setValue("Prioritas Tinggi");
    } else if (jumlah > 500) {
      cellKategori.setValue("Prioritas Sedang");
    } else if (jumlah > 100) {
      cellKategori.setValue("Prioritas Rendah");
    } else {
      cellKategori.setValue("Biaya yang Diawasi");
    }
  }
}
```

---

## Fungsi Orde-Tinggi

### Memahami Fungsi Orde-Tinggi

Fungsi orde-tinggi adalah fungsi yang baik mengambil fungsi lain sebagai argumen atau mengembalikan fungsi. Dalam JavaScript, fungsi adalah "warga kelas satu," artinya mereka bisa disimpan dalam variabel, dilewatkan sebagai argumen, dan dikembalikan dari fungsi lain.

Tiga fungsi orde-tinggi yang paling penting untuk manipulasi data adalah:
- `map()` - Transformasi data
- `filter()` - Seleksi elemen spesifik
- `reduce()` - Agregasi data

### 1. Fungsi Map

Fungsi `map()` membuat array baru dengan mentransformasi setiap elemen dari array asli.

```javascript
const angka = [1, 2, 3, 4, 5];

// Kalikan setiap angka dengan 2
const ganda = angka.map(num => num * 2);
console.log(ganda); // [2, 4, 6, 8, 10]

// Versi lebih eksplisit
const gandaEksplisit = angka.map(function(num) {
  return num * 2;
});
```

**Penjabaran langkah demi langkah:**
1. Ambil array asli `[1, 2, 3, 4, 5]`
2. Terapkan fungsi transformasi `num => num * 2` ke setiap elemen:
   - 1 → 1 * 2 = 2
   - 2 → 2 * 2 = 4
   - 3 → 3 * 2 = 6
   - 4 → 4 * 2 = 8
   - 5 → 5 * 2 = 10
3. Kembalikan array baru dengan nilai-nilai yang ditransformasi: `[2, 4, 6, 8, 10]`

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

### 2. Fungsi Filter

Fungsi `filter()` membuat array baru yang hanya berisi elemen-elemen yang memenuhi kondisi tertentu.

```javascript
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Dapatkan hanya angka genap
const genap = angka.filter(num => num % 2 === 0);
console.log(genap); // [2, 4, 6, 8, 10]

// Versi lebih eksplisit
const genapEksplisit = angka.filter(function(num) {
  return num % 2 === 0;
});
```

**Penjabaran langkah demi langkah:**
1. Ambil array asli `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
2. Uji setiap elemen dengan kondisi `num % 2 === 0`:
   - 1 % 2 === 0 → salah (lewati)
   - 2 % 2 === 0 → benar (masukkan)
   - 3 % 2 === 0 → salah (lewati)
   - 4 % 2 === 0 → benar (masukkan)
   - Dan seterusnya...
3. Kembalikan array baru hanya dengan elemen-elemen yang lolos ujian: `[2, 4, 6, 8, 10]`

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

### 3. Fungsi Reduce

Fungsi `reduce()` menggabungkan semua elemen array menjadi satu nilai.

```javascript
const angka = [1, 2, 3, 4, 5];

// Jumlahkan semua angka
const jumlah = angka.reduce((akumulator, nilaiSaatIni) => {
  return akumulator + nilaiSaatIni;
}, 0); // 0 adalah nilai awal untuk akumulator

console.log(jumlah); // 15

// Eksekusi langkah demi langkah:
// Iterasi ke-1: akumulator = 0, nilaiSaatIni = 1 → 0 + 1 = 1
// Iterasi ke-2: akumulator = 1, nilaiSaatIni = 2 → 1 + 2 = 3
// Iterasi ke-3: akumulator = 3, nilaiSaatIni = 3 → 3 + 3 = 6
// Iterasi ke-4: akumulator = 6, nilaiSaatIni = 4 → 6 + 4 = 10
// Iterasi ke-5: akumulator = 10, nilaiSaatIni = 5 → 10 + 5 = 15
```

**Sintaks:** `array.reduce((akumulator, nilaiSaatIni, indeksSaatIni, array) => {...}, nilaiAwal)`

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

### Menggabungkan Fungsi Orde-Tinggi

Salah satu aspek paling kuat dari fungsi-fungsi ini adalah bahwa mereka bisa dirangkai bersama!

```javascript
const produk = [
  { nama: "Laptop", harga: 1200, kategori: "Elektronik" },
  { nama: "Buku", harga: 20, kategori: "Pendidikan" },
  { nama: "Telepon", harga: 800, kategori: "Elektronik" },
  { nama: "Meja", harga: 300, kategori: "Perabotan" }
];

// Dapatkan nama elektronik mahal (harga > 500)
const elektronikMahal = produk
  .filter(produk => produk.kategori === "Elektronik" && produk.harga > 500)
  .map(produk => produk.nama);

console.log(elektronikMahal); // ["Laptop", "Telepon"]

// Penjabaran dari rantai:
// 1. Mulai dengan semua produk
// 2. Filter: simpan hanya Elektronik dengan harga di atas 500 → Laptop dan Telepon
// 3. Map: ekstrak hanya nama-namanya → ["Laptop", "Telepon"]
```

### Fungsi Orde-Tinggi dalam Manipulasi Spreadsheet

```javascript
function prosesDataPenjualan() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();

  // Ekstrak header (baris pertama)
  const headers = values[0];

  // Konversi baris data ke objek
  const dataPenjualan = values.slice(1).map(row => {
    return {
      produk: row[0],
      jumlah: row[1],
      harga: row[2],
      wilayah: row[3]
    };
  });

  // Filter penjualan di wilayah Utara
  const penjualanUtara = dataPenjualan.filter(penjualan => penjualan.wilayah === "Utara");

  // Hitung total pendapatan wilayah Utara
  const pendapatanUtara = penjualanUtara.reduce((total, penjualan) => {
    return total + (penjualan.jumlah * penjualan.harga);
  }, 0);

  console.log(`Total pendapatan wilayah Utara: Rp${pendapatanUtara}`);

  // Perbarui sel dengan hasilnya
  sheet.getRange("F2").setValue(pendapatanUtara);
}
```

<a name="promise"></a>

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

### Latihan Promise Tahap 1 (Mudah)

**Latihan 1: Promise Dasar**
Buat sebuah promise yang menyelesaikan setelah 2 detik dan mengembalikan pesan "Hello World".

**Petunjuk:**
1. Buat promise baru menggunakan `new Promise()`
2. Dalam executor function, gunakan `setTimeout` untuk menunda penyelesaian
3. Setelah 2 detik, panggil `resolve` dengan pesan "Hello World"
4. Gunakan `.then()` untuk mencetak hasilnya

### Latihan Promise Tahap 2 (Sedang)

**Latihan 2: Promise dengan Kondisi**
Buat sebuah promise yang secara acak menentukan apakah operasi berhasil atau gagal.

**Petunjuk:**
1. Dalam executor function, buat variabel boolean acak (gunakan `Math.random()`)
2. Jika hasilnya > 0.5, resolve dengan pesan sukses
3. Jika tidak, reject dengan pesan kesalahan
4. Gunakan `.then()` dan `.catch()` untuk menangani kedua kemungkinan

### Latihan Promise Tahap 3 (Sulit)

**Latihan 3: Promise Chain dan Transformasi**
Buat rangkaian promise yang mengubah input angka dengan beberapa operasi.

**Petunjuk:**
1. Buat promise pertama yang mengalikan angka dengan 2
2. Gunakan `.then()` untuk membuat promise kedua yang menambahkan 10
3. Gunakan `.then()` lagi untuk membuat promise ketiga yang membagi dengan 2
4. Tambahkan `.catch()` untuk menangani kesalahan
5. Cetak hasil akhirnya

### Latihan Promise Lanjutan

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

## Async/Await

### Memahami Pemrograman Asinkron

Pemrograman asinkron memungkinkan kode Anda melakukan operasi yang memakan waktu (seperti mengambil data dari internet, membaca file, atau menunggu input pengguna) tanpa memblokir bagian lain dari program Anda.

Bayangkan seperti memesan makanan di restoran:
- Sinkron: Anda menunggu di meja kasir sampai makanan siap (memblokir)
- Asinkron: Anda duduk di meja dan terus berbicara sambil menunggu makanan Anda (tidak memblokir)

Async/await adalah sintaksis yang dibangun di atas Promise untuk membuat kode asynchronous terlihat dan terasa seperti synchronous.

### Sintaks Async/Await

```javascript
// Mendeklarasikan fungsi async
async function ambilData() {
  try {
    // Simulasikan pengambilan data (biasanya ini panggilan API)
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, nama: "John Doe", email: "john@example.com" });
      }, 1000);
    });

    console.log("Data diterima:", response);
    return response;
  } catch (error) {
    console.error("Kesalahan mengambil data:", error);
  }
}

// Memanggil fungsi async
ambilData().then(data => {
  console.log("Fungsi selesai dengan data:", data);
});
```

**Penjabaran langkah demi langkah:**
1. Deklarasikan fungsi dengan kata kunci `async`
2. Di dalam fungsi, gunakan `await` untuk menjeda eksekusi sampai promise selesai
3. Bungkus dalam try/catch untuk menangani kemungkinan kesalahan
4. Fungsi secara otomatis mengembalikan Promise

### Contoh Dunia Nyata: Mengambil Data dari API

```javascript
async function ambilDataUser(idUser) {
  try {
    // Simulasikan panggilan API dengan fetch (dalam kode nyata, ini akan menjadi endpoint API sebenarnya)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`);

    if (!response.ok) {
      throw new Error(`Kesalahan HTTP! Status: ${response.status}`);
    }

    const userData = await response.json();
    console.log("Data pengguna:", userData);
    return userData;
  } catch (error) {
    console.error("Gagal mengambil data pengguna:", error.message);
    throw error; // Lempar ulang agar kode pemanggil bisa menanganinya
  }
}

// Menggunakan fungsi
async function utama() {
  try {
    const user = await ambilDataUser(1);
    console.log(`Halo, ${user.name}!`);
  } catch (error) {
    console.log("Tidak bisa mengambil informasi pengguna");
  }
}

utama();
```

### Async/Await dalam Manipulasi Spreadsheet

Saat bekerja dengan Google Apps Script, banyak operasi bersifat asinkron:

```javascript
async function prosesDataSpreadsheetAsync() {
  try {
    // Dapatkan spreadsheet aktif
    const sheet = SpreadsheetApp.getActiveSheet();

    // Simulasikan pengambilan data eksternal (seperti dari API)
    const dataEksternal = await ambilDataEksternal(); // Ini akan menjadi operasi async

    // Perbarui spreadsheet dengan data baru
    const barisTerakhir = sheet.getLastRow() + 1;
    sheet.getRange(barisTerakhir, 1).setValue(dataEksternal.id);
    sheet.getRange(barisTerakhir, 2).setValue(dataEksternal.nama);
    sheet.getRange(barisTerakhir, 3).setValue(dataEksternal.nilai);

    console.log("Spreadsheet berhasil diperbarui!");
  } catch (error) {
    console.error("Kesalahan memproses spreadsheet:", error);
  }
}

// Fungsi simulasi untuk mengambil data eksternal
function ambilDataEksternal() {
  // Dalam Apps Script nyata, ini mungkin panggilan UrlFetchApp.fetch()
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Date.now(),
        nama: "Catatan Baru",
        nilai: Math.random() * 100
      });
    }, 1000);
  });
}
```

### Penanganan Kesalahan dengan Async/Await

Penanganan kesalahan yang tepat sangat penting dalam kode asinkron:

```javascript
async function pemrosesanDataRobust() {
  try {
    // Beberapa operasi async
    const data1 = await ambilDariSumber1();
    const data2 = await ambilDariSumber2();

    // Proses data
    const dataTerproses = prosesData(data1, data2);

    // Simpan hasilnya
    await simpanHasil(dataTerproses);

    console.log("Semua operasi selesai dengan sukses!");
  } catch (error) {
    // Tangani kesalahan apa pun yang terjadi di blok try
    console.error("Terjadi kesalahan selama pemrosesan:", error.message);

    // Secara opsional, coba pulihkan atau bersihkan
    await bersihkanSetelahError();
  }
}

// Fungsi bantu (disimulasikan)
function ambilDariSumber1() {
  return new Promise(resolve => setTimeout(() => resolve([1, 2, 3]), 500));
}

function ambilDariSumber2() {
  return new Promise(resolve => setTimeout(() => resolve([4, 5, 6]), 500));
}

function prosesData(data1, data2) {
  return data1.concat(data2);
}

function simpanHasil(results) {
  return new Promise(resolve => setTimeout(() => {
    console.log("Hasil disimpan:", results);
    resolve();
  }, 300));
}

function bersihkanSetelahError() {
  return new Promise(resolve => {
    console.log("Membersihkan setelah error...");
    resolve();
  });
}

pemrosesanDataRobust();
```

---

## Menyatukan Semuanya: Latihan Komprehensif

Mari buat contoh komprehensif yang menggabungkan semua konsep yang telah kita pelajari:

```javascript
// Simulasikan spreadsheet dengan data penjualan
const dataPenjualan = [
  { id: 1, produk: "Laptop", harga: 1200, jumlah: 2, wilayah: "Utara", tanggal: "2023-01-15" },
  { id: 2, produk: "Mouse", harga: 25, jumlah: 5, wilayah: "Selatan", tanggal: "2023-01-16" },
  { id: 3, produk: "Keyboard", harga: 75, jumlah: 3, wilayah: "Utara", tanggal: "2023-01-17" },
  { id: 4, produk: "Monitor", harga: 300, jumlah: 1, wilayah: "Timur", tanggal: "2023-01-18" },
  { id: 5, produk: "Headphone", harga: 150, jumlah: 4, wilayah: "Barat", tanggal: "2023-01-19" },
  { id: 6, produk: "Tablet", harga: 400, jumlah: 2, wilayah: "Utara", tanggal: "2023-01-20" }
];

// Fungsi untuk menghitung total pendapatan untuk setiap penjualan
function hitungTotal(penjualan) {
  return penjualan.harga * penjualan.jumlah;
}

// Fungsi untuk menentukan apakah penjualan bernilai tinggi (>500)
function adalahPenjualanBernilaiTinggi(penjualan) {
  return hitungTotal(penjualan) > 500;
}

// Fungsi utama pemrosesan
async function prosesLaporanPenjualan() {
  console.log("Memulai pemrosesan laporan penjualan...\n");

  try {
    // Langkah 1: Tambahkan total yang dihitung ke setiap penjualan
    console.log("Langkah 1: Menghitung total untuk setiap penjualan...");
    const penjualanDenganTotal = dataPenjualan.map(penjualan => ({
      ...penjualan,
      total: hitungTotal(penjualan)
    }));

    console.log("Penjualan dengan total dihitung.\n");

    // Langkah 2: Filter penjualan bernilai tinggi
    console.log("Langkah 2: Memfilter penjualan bernilai tinggi (total > 500)...");
    const penjualanBernilaiTinggi = penjualanDenganTotal.filter(adalahPenjualanBernilaiTinggi);

    console.log(`Ditemukan ${penjualanBernilaiTinggi.length} penjualan bernilai tinggi.\n`);

    // Langkah 3: Hitung statistik
    console.log("Langkah 3: Menghitung statistik penjualan...");

    // Total pendapatan dari penjualan bernilai tinggi
    const pendapatanBernilaiTinggi = penjualanBernilaiTinggi.reduce((jumlah, penjualan) => jumlah + penjualan.total, 0);

    // Rata-rata pendapatan per penjualan bernilai tinggi
    const rataRataBernilaiTinggi = penjualanBernilaiTinggi.length > 0
      ? pendapatanBernilaiTinggi / penjualanBernilaiTinggi.length
      : 0;

    // Hitung penjualan berdasarkan wilayah
    const penjualanWilayah = penjualanDenganTotal.reduce((acc, penjualan) => {
      acc[penjualan.wilayah] = (acc[penjualan.wilayah] || 0) + penjualan.total;
      return acc;
    }, {});

    console.log("Statistik dihitung.\n");

    // Langkah 4: Simulasikan menyimpan ke spreadsheet (operasi async)
    console.log("Langkah 4: Menyimpan laporan ke spreadsheet...");
    await simpanKeSpreadsheet({
      penjualanBernilaiTinggi,
      pendapatanBernilaiTinggi,
      rataRataBernilaiTinggi,
      penjualanWilayah
    });

    console.log("\nPemrosesan laporan selesai dengan sukses!");

    // Tampilkan hasil
    console.log("\n--- RINGKASAN LAPORAN ---");
    console.log(`Penjualan bernilai tinggi: ${penjualanBernilaiTinggi.length}`);
    console.log(`Total pendapatan dari penjualan bernilai tinggi: Rp${pendapatanBernilaiTinggi}`);
    console.log(`Rata-rata penjualan bernilai tinggi: Rp${rataRataBernilaiTinggi.toFixed(2)}`);
    console.log("Penjualan berdasarkan wilayah:");
    for (const [wilayah, pendapatan] of Object.entries(penjualanWilayah)) {
      console.log(`  ${wilayah}: Rp${pendapatan}`);
    }

  } catch (error) {
    console.error("Kesalahan memproses laporan penjualan:", error);
  }
}

// Fungsi simulasi untuk menyimpan data ke spreadsheet
async function simpanKeSpreadsheet(laporanData) {
  // Simulasikan operasi async (seperti menyimpan ke Google Sheets)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data berhasil disimpan ke spreadsheet!");
      resolve();
    }, 1000);
  });
}

// Jalankan contoh komprehensif
prosesLaporanPenjualan();
```

Contoh komprehensif ini menunjukkan:
1. **Perulangan**: Memproses array data
2. **Kondisional**: Menentukan penjualan bernilai tinggi
3. **Fungsi orde-tinggi**: Menggunakan map, filter, dan reduce
4. **Async/await**: Simulasi operasi spreadsheet

Dengan berlatih konsep-konsep ini dan memahami logika di balik setiap langkah, Anda akan mengembangkan keterampilan berpikir algoritmik yang kuat yang sangat penting untuk pengembangan JavaScript dan manipulasi spreadsheet Google Apps Script.

---

## Latihan Tambahan Tanpa Jawaban

Berikut ini adalah latihan-latihan komprehensif yang dirancang untuk mengasah kemampuan algoritmik Anda tanpa menyediakan jawaban langsung. Setiap latihan dilengkapi dengan petunjuk langkah-demi-langkah untuk membantu Anda memecahkan masalah.

### Latihan Perulangan

**Latihan 1: Deret Fibonacci**
Buat fungsi yang mencetak deret Fibonacci sebanyak n bilangan (misalnya, untuk n=10: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34).

**Petunjuk:**
1. Buat fungsi bernama `deretFibonacci` yang menerima parameter `n`
2. Inisialisasi dua variabel pertama dari deret Fibonacci (0 dan 1)
3. Gunakan perulangan for untuk menghitung dan mencetak n bilangan
4. Dalam setiap iterasi, hitung bilangan berikutnya dengan menjumlahkan dua bilangan sebelumnya
5. Perbarui nilai dua variabel sebelumnya untuk iterasi berikutnya

**Latihan 2: Bilangan Prima**
Buat fungsi yang mencetak semua bilangan prima antara 1 dan n.

**Petunjuk:**
1. Buat fungsi bernama `cetakPrima` yang menerima parameter `n`
2. Gunakan perulangan luar untuk mengiterasi dari 2 ke n
3. Untuk setiap bilangan, gunakan perulangan dalam untuk memeriksa apakah bilangan tersebut prima
4. Bilangan prima adalah bilangan yang hanya habis dibagi oleh 1 dan dirinya sendiri
5. Untuk memeriksa apakah bilangan x prima, cukup periksa pembagian dari 2 hingga akar kuadrat dari x
6. Jika bilangan adalah prima, cetak bilangan tersebut

**Latihan 3: Pola Segitiga**
Buat fungsi yang mencetak pola segitiga bintang dengan tinggi n (misalnya, untuk n=5):
```
*
**
***
****
*****
```

**Petunjuk:**
1. Buat fungsi bernama `cetakSegitiga` yang menerima parameter `n`
2. Gunakan perulangan luar untuk mengontrol jumlah baris
3. Gunakan perulangan dalam untuk mengontrol jumlah bintang dalam setiap baris
4. Dalam perulangan dalam, gunakan `process.stdout.write('*')` untuk mencetak bintang tanpa baris baru
5. Setelah selesai mencetak bintang dalam satu baris, gunakan `console.log()` untuk pindah baris

**Latihan 4: Manipulasi Spreadsheet - Perulangan**
Buat fungsi yang menghitung jumlah total penjualan dari kolom B dalam spreadsheet, lalu menempatkan hasilnya di sel D1.

**Petunjuk:**
1. Buat fungsi bernama `hitungTotalPenjualan`
2. Dapatkan sheet aktif menggunakan `SpreadsheetApp.getActiveSheet()`
3. Dapatkan rentang data menggunakan `getDataRange()`
4. Ambil semua nilai menggunakan `getValues()`
5. Gunakan perulangan untuk mengiterasi melalui baris-baris data (abaikan header jika ada)
6. Ambil nilai dari kolom B (indeks 1) untuk setiap baris dan tambahkan ke total
7. Setel nilai total ke sel D1 menggunakan `getRange('D1').setValue(total)`

### Latihan Lanjutan Perulangan

**Latihan 5: Matriks Perkalian**
Buat fungsi yang mencetak tabel perkalian berukuran n x n.

**Petunjuk:**
1. Buat fungsi bernama `tabelPerkalian` yang menerima parameter `n`
2. Gunakan perulangan luar untuk mengontrol baris
3. Gunakan perulangan dalam untuk mengontrol kolom
4. Dalam setiap iterasi, hitung hasil perkalian baris * kolom
5. Format output agar rapih dalam bentuk tabel

**Latihan 6: Deret Aritmatika**
Buat fungsi yang mencetak n suku pertama dari deret aritmatika dengan suku pertama a dan beda b.

**Petunjuk:**
1. Buat fungsi bernama `deretAritmatika` dengan parameter `n`, `a` (suku pertama), dan `b` (beda)
2. Gunakan perulangan untuk menghitung dan mencetak setiap suku
3. Rumus suku ke-n: Un = a + (n-1)*b
4. Cetak setiap suku dalam deret tersebut

**Latihan 7: Manipulasi Spreadsheet - Pencarian Data**
Buat fungsi yang mencari data tertentu dalam spreadsheet dan mengembalikan nomor barisnya.

**Petunjuk:**
1. Buat fungsi bernama `cariDataDiSpreadsheet` yang menerima parameter `dataYangDicari`
2. Dapatkan sheet aktif dan rentang data
3. Ambil semua nilai menggunakan `getValues()`
4. Gunakan perulangan bersarang untuk mengiterasi baris dan kolom
5. Bandingkan setiap sel dengan data yang dicari
6. Jika ditemukan, kembalikan nomor barisnya
7. Jika tidak ditemukan, kembalikan -1

### Latihan Kondisional

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

**Latihan 4: Manipulasi Spreadsheet - Kondisional**
Buat fungsi yang mengevaluasi nilai siswa di kolom B dan memberikan predikat di kolom C (A untuk >=90, B untuk >=80, C untuk >=70, D untuk >=60, E untuk <60).

**Petunjuk:**
1. Buat fungsi bernama `beriPredikat`
2. Dapatkan sheet aktif dan rentang data
3. Ambil semua nilai menggunakan `getValues()`
4. Gunakan perulangan untuk mengiterasi melalui baris data
5. Untuk setiap baris, ambil nilai dari kolom B (indeks 1)
6. Gunakan struktur kondisional untuk menentukan predikat berdasarkan nilai
7. Tetapkan predikat ke sel di kolom C (indeks 2) untuk baris yang sama

### Latihan Lanjutan Kondisional

**Latihan 5: Sistem Diskon Toko**
Buat fungsi yang menghitung harga akhir setelah diskon berdasarkan total belanja dan status keanggotaan (premium/gold/silver/regular).

**Petunjuk:**
1. Buat fungsi bernama `hitungDiskon` dengan parameter `totalBelanja` dan `statusAnggota`
2. Gunakan struktur switch atau if...else untuk menentukan persentase diskon berdasarkan status
3. Tambahkan kondisi tambahan: jika total belanja > 1jt, tambah diskon 5%
4. Kembalikan harga akhir setelah diskon

**Latihan 6: Validasi Tanggal**
Buat fungsi yang memvalidasi apakah tanggal yang diberikan valid (termasuk pengecekan tahun kabisat).

**Petunjuk:**
1. Buat fungsi bernama `validasiTanggal` dengan parameter `hari`, `bulan`, `tahun`
2. Periksa apakah bulan valid (1-12)
3. Periksa apakah hari valid berdasarkan bulan (perhatikan Februari dan tahun kabisat)
4. Untuk tahun kabisat: habis dibagi 4, tapi tidak habis dibagi 100, kecuali juga habis dibagi 400
5. Kembalikan true jika tanggal valid, false jika tidak

**Latihan 7: Manipulasi Spreadsheet - Kondisional Kompleks**
Buat fungsi yang memberikan bonus kepada karyawan berdasarkan kinerja dan masa kerja.

**Petunjuk:**
1. Buat fungsi bernama `hitungBonusKaryawan`
2. Ambil data karyawan dari spreadsheet (nama, kinerja, masa kerja, gaji pokok)
3. Gunakan kondisional bersarang untuk menentukan besaran bonus:
   - Kinerja A: 20% dari gaji pokok
   - Kinerja B: 10% dari gaji pokok
   - Kinerja C: 5% dari gaji pokok
4. Tambahkan bonus tambahan 5% jika masa kerja > 5 tahun
5. Update kolom bonus di spreadsheet

### Latihan Fungsi Orde-Tinggi

**Latihan 1: Analisis Data Mahasiswa**
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

**Latihan 2: Pengolahan Data Penjualan**
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

**Latihan 3: Transformasi Data Pengguna**
Diberikan array objek pengguna dengan properti nama, email, dan umur. Buat fungsi yang:
1. Mengubah semua nama menjadi huruf kapital
2. Memfilter pengguna yang berusia di atas 18
3. Mengembalikan array hanya dengan properti nama dan email

**Petunjuk:**
1. Buat fungsi bernama `transformasiPengguna` yang menerima array pengguna
2. Gunakan chain dari map, filter, dan map lagi
3. Pertama, gunakan map untuk mengubah nama menjadi huruf kapital
4. Kemudian, gunakan filter untuk hanya menyertakan pengguna > 18 tahun
5. Akhirnya, gunakan map untuk membuat objek baru hanya dengan nama dan email
6. Kembalikan hasil akhirnya

**Latihan 4: Manipulasi Spreadsheet - Fungsi Orde-Tinggi**
Buat fungsi yang membaca data dari spreadsheet (nama, nilai, kelas) dan:
1. Menghitung rata-rata nilai per kelas
2. Menemukan siswa dengan nilai tertinggi
3. Mengembalikan daftar siswa yang lulus (nilai >= 75)

**Petunjuk:**
1. Buat fungsi bernama `analisisNilaiSpreadsheet`
2. Dapatkan data dari spreadsheet menggunakan `getValues()`
3. Konversi data ke array objek (abaikan header)
4. Gunakan reduce untuk menghitung rata-rata per kelas (kelompokkan dulu berdasarkan kelas)
5. Gunakan reduce untuk menemukan siswa dengan nilai tertinggi
6. Gunakan filter untuk mendapatkan siswa yang lulus
7. Kembalikan objek dengan ketiga hasil tersebut

### Latihan Lanjutan Fungsi Orde-Tinggi

**Latihan 5: Sistem Rekomendasi Produk**
Buat fungsi yang merekomendasikan produk berdasarkan riwayat pembelian pengguna dan rating produk.

**Petunjuk:**
1. Buat fungsi bernama `rekomendasiProduk` dengan parameter `riwayatPembelian` dan `daftarProduk`
2. Gunakan filter untuk mengecualikan produk yang sudah dibeli
3. Gunakan map untuk menghitung skor rekomendasi berdasarkan kategori produk yang pernah dibeli
4. Gunakan sort untuk mengurutkan produk berdasarkan skor dan rating
5. Kembalikan 5 produk teratas sebagai rekomendasi

**Latihan 6: Analisis Sentimen Teks**
Buat fungsi yang menganalisis sentimen dari array komentar (positif/negatif/netral).

**Petunjuk:**
1. Buat fungsi bernama `analisisSentimen` dengan parameter `komentarArray`
2. Siapkan daftar kata positif dan negatif
3. Gunakan map untuk menghitung skor sentimen setiap komentar
4. Gunakan reduce untuk menghitung total sentimen keseluruhan
5. Kembalikan objek dengan jumlah komentar positif, negatif, dan netral

**Latihan 7: Manipulasi Spreadsheet - Analisis Data Kompleks**
Buat fungsi yang menganalisis data penjualan dari spreadsheet dan membuat ringkasan performa bulanan.

**Petunjuk:**
1. Buat fungsi bernama `analisisPerformaBulanan`
2. Ambil data penjualan dari spreadsheet (tanggal, produk, jumlah, harga)
3. Gunakan map untuk menghitung total per transaksi
4. Gunakan reduce untuk mengelompokkan data berdasarkan bulan
5. Hitung total penjualan, rata-rata harian, dan tren pertumbuhan per bulan
6. Update sheet ringkasan dengan hasil analisis

### Latihan Async/Await

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

**Latihan 4: Manipulasi Spreadsheet - Async**
Buat fungsi async yang mengambil data dari API eksternal, lalu memperbarui spreadsheet dengan data tersebut.

**Petunjuk:**
1. Buat fungsi async bernama `updateSpreadsheetDariAPI`
2. Gunakan fetch atau UrlFetchApp (untuk Apps Script) untuk mengambil data dari API
3. Tunggu hasilnya dengan await
4. Dapatkan sheet aktif
5. Bersihkan data yang diambil agar sesuai dengan format spreadsheet
6. Perbarui sel-sel yang relevan dengan data baru
7. Tangani kesalahan jika API tidak merespons atau data tidak valid

### Latihan Lanjutan Promise

**Latihan 6: Promise Chain Kompleks**
Buat sistem antrian tugas asynchronous menggunakan promise chaining.

**Petunjuk:**
1. Buat fungsi `buatAntrianTugas` yang menerima array fungsi tugas
2. Gunakan promise chaining untuk mengeksekusi tugas satu per satu
3. Setiap tugas mengembalikan promise
4. Tugas berikutnya hanya mulai setelah tugas sebelumnya selesai
5. Tambahkan penanganan kesalahan untuk setiap tugas
6. Kembalikan hasil akhir setelah semua tugas selesai

**Latihan 7: Manipulasi Spreadsheet dengan Promise Chain**
Buat sistem pembaruan data spreadsheet yang kompleks menggunakan promise chain.

**Petunjuk:**
1. Buat fungsi yang mengambil data dari beberapa sheet berbeda
2. Gunakan promise chain untuk menggabungkan data dari berbagai sumber
3. Lakukan validasi data di setiap tahap
4. Update sheet target dengan data yang telah diproses
5. Gunakan `.finally()` untuk membersihkan sumber daya
6. Tambahkan logging untuk melacak proses

### Latihan Lanjutan Async/Await

**Latihan 5: Sistem Sinkronisasi Data**
Buat fungsi async yang menyinkronkan data antara spreadsheet lokal dan API eksternal.

**Petunjuk:**
1. Buat fungsi async bernama `sinkronisasiData`
2. Ambil data dari spreadsheet lokal
3. Ambil data terbaru dari API eksternal
4. Bandingkan data untuk menentukan perubahan (tambah, ubah, hapus)
5. Gunakan Promise.all untuk memproses sinkronisasi secara efisien
6. Update kedua sisi (spreadsheet dan API) agar konsisten
7. Tangani konflik data jika terjadi

**Latihan 6: Pipeline Pengolahan Data**
Buat fungsi async yang mengolah data melalui beberapa tahapan: pengambilan, pembersihan, transformasi, dan penyimpanan.

**Petunjuk:**
1. Buat fungsi async bernama `pipelinePengolahanData`
2. Buat fungsi-fungsi kecil untuk setiap tahapan: `ambilData`, `bersihkanData`, `transformasiData`, `simpanData`
3. Gunakan async/await untuk menjalankan tahapan secara berurutan
4. Tambahkan logging untuk melacak kemajuan setiap tahapan
5. Gunakan try/catch untuk menangani kesalahan di setiap tahapan
6. Kembalikan ringkasan hasil pengolahan

**Latihan 7: Sistem Monitoring dan Notifikasi**
Buat fungsi async yang memonitor kondisi tertentu dan mengirim notifikasi jika terpenuhi.

**Petunjuk:**
1. Buat fungsi async bernama `monitorDanNotifikasi`
2. Buat fungsi untuk mengambil data kondisi dari berbagai sumber
3. Gunakan setInterval atau pendekatan polling untuk memeriksa kondisi secara berkala
4. Jika kondisi terpenuhi, kirim notifikasi (email, SMS, atau update spreadsheet)
5. Gunakan Promise untuk menangani pengiriman notifikasi
6. Simpan log aktivitas monitoring ke spreadsheet
7. Tangani kesalahan jaringan atau layanan notifikasi

---

## Variables and Scoping

### Memahami Variables dan Scoping

Variabel adalah tempat penyimpanan data dalam program. Dalam JavaScript, ada tiga cara untuk mendeklarasikan variabel: `var`, `let`, dan `const`, masing-masing dengan perilaku scoping yang berbeda.

### 1. `var` - Function-scoped Variable

Variabel yang dideklarasikan dengan `var` memiliki scope fungsional, bukan blok. Ini berarti variabel tersebut dapat diakses di seluruh fungsi tempat ia dideklarasikan.

```javascript
function contohVar() {
  if (true) {
    var x = 10; // var tidak memiliki block scope
  }

  console.log(x); // Output: 10 - bisa diakses di luar blok if
}

contohVar();
```

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

### 2. `let` - Block-scoped Variable

Variabel yang dideklarasikan dengan `let` memiliki scope blok, artinya hanya dapat diakses dalam blok `{}` tempat ia dideklarasikan.

```javascript
function contohLet() {
  if (true) {
    let z = 20; // let memiliki block scope
    console.log(z); // Output: 20
  }

  // console.log(z); // Ini akan menghasilkan error ReferenceError
}

contohLet();
```

### 3. `const` - Block-scoped Constant

`const` digunakan untuk mendeklarasikan konstanta yang tidak dapat di-reassign. Namun, jika nilainya adalah objek atau array, kontennya masih bisa dimodifikasi.

```javascript
const PI = 3.14159;
// PI = 3.14; // Ini akan menghasilkan error

const person = { name: "John", age: 30 };
person.age = 31; // Ini diperbolehkan - konten objek bisa diubah
console.log(person); // Output: { name: "John", age: 31 }

// person = {}; // Ini akan menghasilkan error - tidak bisa reassign
```

### 4. Scope Chain

JavaScript mencari variabel dalam scope tertentu, dan jika tidak ditemukan, akan mencari ke scope yang lebih tinggi (parent scope), dan seterusnya hingga global scope.

```javascript
let globalVar = "Global";

function outerFunction() {
  let outerVar = "Outer";

  function innerFunction() {
    let innerVar = "Inner";

    // Semua variabel ini bisa diakses dari innerFunction
    console.log(globalVar); // Output: Global
    console.log(outerVar);  // Output: Outer
    console.log(innerVar);  // Output: Inner
  }

  innerFunction();
}

outerFunction();
```

### Latihan Variables and Scoping

**Latihan 1: Perbedaan var, let, dan const**
Coba jalankan kode berikut dan pahami perbedaannya:

```javascript
function perbedaanScoping() {
  // Dengan var
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100); // Output: 3, 3, 3
  }

  // Dengan let
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200); // Output: 0, 1, 2
  }
}

perbedaanScoping();
```

---

## Functions

### Memahami Functions

Fungsi adalah blok kode yang dapat digunakan kembali untuk melakukan tugas tertentu. Dalam JavaScript, fungsi adalah "first-class citizens", artinya mereka bisa disimpan dalam variabel, dilewatkan sebagai parameter, dan dikembalikan dari fungsi lain.

### 1. Function Declaration

Fungsi yang didefinisikan dengan cara ini mengalami hoisting, artinya bisa dipanggil sebelum didefinisikan dalam kode.

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
```

### 2. Function Expression

Fungsi yang disimpan dalam variabel. Tidak mengalami hoisting seperti function declaration.

```javascript
// Function expression
const greetExpression = function(name) {
  return `Hello, ${name}!`;
};

console.log(greetExpression("Bob")); // Output: Hello, Bob!
```

### 3. Arrow Functions

Sintaks ringkas untuk menulis fungsi. Arrow function memiliki perbedaan penting dalam konteks `this`.

```javascript
// Arrow function
const greetArrow = (name) => {
  return `Hello, ${name}!`;
};

// Atau versi lebih ringkas jika hanya satu parameter dan satu ekspresi
const greetShort = name => `Hello, ${name}!`;

console.log(greetArrow("Charlie")); // Output: Hello, Charlie!
console.log(greetShort("David"));   // Output: Hello, David!
```

### 4. Closures

Closure adalah kombinasi fungsi dan lingkungan leksikal (lexical environment) di mana fungsi tersebut dideklarasikan. Closure memungkinkan fungsi untuk mengakses variabel dari scope induknya bahkan setelah fungsi induk selesai dieksekusi.

```javascript
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```

### 5. Higher-Order Functions

Fungsi yang menerima fungsi lain sebagai parameter atau mengembalikan fungsi disebut Higher-Order Function.

```javascript
// Fungsi yang menerima fungsi lain sebagai parameter
function executeTwice(fn, arg) {
  fn(arg);
  fn(arg);
}

executeTwice(console.log, "Hello"); // Output: Hello dua kali

// Fungsi yang mengembalikan fungsi
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10
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

console.log(kuadratDeclaration(4));  // Output: 16
console.log(kuadratExpression(4));   // Output: 16
console.log(kuadratArrow(4));        // Output: 16
```

---

## Objects and Prototypes

### Memahami Objects dan Prototypes

Objek adalah struktur data fundamental dalam JavaScript yang digunakan untuk menyimpan koleksi data dalam bentuk pasangan key-value.

### 1. Object Literals

Cara paling umum untuk membuat objek di JavaScript.

```javascript
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Developer",
  greet: function() {
    return `Hello, I'm ${this.name}`;
  },
  // ES6 shorthand method
  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
  }
};

console.log(person.name);         // Output: John Doe
console.log(person.greet());      // Output: Hello, I'm John Doe
console.log(person.introduce());  // Output: Hi, I'm John Doe and I'm 30 years old
```

### 2. Constructor Functions

Fungsi yang digunakan untuk membuat objek baru dengan struktur yang sama.

```javascript
function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
  this.greet = function() {
    return `Hello, I'm ${this.name}`;
  };
}

const person1 = new Person("Alice", 25, "Designer");
const person2 = new Person("Bob", 35, "Manager");

console.log(person1.greet()); // Output: Hello, I'm Alice
console.log(person2.greet()); // Output: Hello, I'm Bob
```

### 3. Prototypes

Prototipe adalah mekanisme di mana objek-objek JavaScript mewarisi properti dan metode dari objek lain.

```javascript
// Menambahkan metode ke prototype
Person.prototype.introduce = function() {
  return `Hi, I'm ${this.name} and I work as a ${this.occupation}`;
};

console.log(person1.introduce()); // Output: Hi, I'm Alice and I work as a Designer

// Prototype inheritance
function Developer(name, age, language) {
  Person.call(this, name, age, "Developer"); // Call parent constructor
  this.language = language;
}

// Set up prototype chain
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.code = function() {
  return `${this.name} is coding in ${this.language}`;
};

const dev = new Developer("Carol", 28, "JavaScript");
console.log(dev.introduce()); // Output: Hi, I'm Carol and I work as a Developer
console.log(dev.code());      // Output: Carol is coding in JavaScript
```

### 4. ES6 Classes (Syntactic Sugar)

ES6 memperkenalkan sintaks kelas yang merupakan syntactic sugar untuk prototypal inheritance.

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

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog"); // Call parent constructor
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks`;
  }

  fetch() {
    return `${this.name} fetches the ball`;
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.speak());  // Output: Buddy barks
console.log(dog.fetch());  // Output: Buddy fetches the ball
```

### Latihan Objects and Prototypes

**Latihan 1: Membuat Objek Mahasiswa**
Buat objek mahasiswa dengan property nama, nim, jurusan, dan IPK, serta method untuk menampilkan informasi dan mengecek status lulus.

```javascript
const student = {
  name: "Siti",
  studentId: "1234567890",
  major: "Computer Science",
  gpa: 3.75,

  getInfo() {
    return `Name: ${this.name}, NIM: ${this.studentId}, Major: ${this.major}, GPA: ${this.gpa}`;
  },

  isGraduating() {
    return this.gpa >= 2.0;
  }
};

console.log(student.getInfo());      // Output: Name: Siti, NIM: 1234567890, Major: Computer Science, GPA: 3.75
console.log(student.isGraduating()); // Output: true
```

---

## Error Handling

### Memahami Error Handling

Error handling adalah proses menangani kesalahan yang terjadi saat eksekusi program. JavaScript menyediakan mekanisme try/catch/finally untuk menangani error.

### 1. Try/Catch/Finally

Struktur dasar untuk menangani error dalam JavaScript.

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

### 2. Jenis-jenis Error Umum

JavaScript memiliki beberapa jenis error bawaan:

```javascript
// ReferenceError - variabel tidak didefinisikan
try {
  console.log(undefinedVariable);
} catch (error) {
  console.log("ReferenceError:", error.message);
}

// TypeError - operasi pada tipe data yang tidak sesuai
try {
  const num = 5;
  num.toUpperCase(); // number tidak memiliki metode toUpperCase
} catch (error) {
  console.log("TypeError:", error.message);
}

// SyntaxError - kesalahan sintaks (terjadi saat parsing, tidak bisa ditangkap dengan try/catch)
// eval('alert(1);'); // Jika sintaks salah, akan error
```

### 3. Custom Errors

Anda bisa membuat error khusus untuk kebutuhan aplikasi Anda.

```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
    this.name = 'ValidationError';
  }
}

function validateEmail(email) {
  if (!email.includes('@')) {
    throw new ValidationError('Invalid email format', 'email');
  }
  return true;
}

try {
  validateEmail('invalid-email');
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation Error on ${error.field}: ${error.message}`);
  }
}
```

### 4. Async Error Handling

Dalam operasi asynchronous, error handling memerlukan pendekatan khusus.

```javascript
// Dengan Promise
function asyncOperation(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Operasi berhasil");
      } else {
        reject(new Error("Operasi gagal"));
      }
    }, 1000);
  });
}

asyncOperation(false)
  .then(result => console.log(result))
  .catch(error => console.log("Error:", error.message));

// Dengan async/await
async function handleAsyncOperation() {
  try {
    const result = await asyncOperation(false);
    console.log(result);
  } catch (error) {
    console.log("Async error:", error.message);
  }
}

handleAsyncOperation();
```

### Latihan Error Handling

**Latihan 1: Validasi Form Sederhana**
Buat fungsi validasi form yang melempar error jika input tidak valid.

```javascript
function validateForm(formData) {
  if (!formData.name || formData.name.trim() === '') {
    throw new Error("Name is required");
  }

  if (!formData.email || !formData.email.includes('@')) {
    throw new Error("Valid email is required");
  }

  if (!formData.age || formData.age < 18) {
    throw new Error("Age must be 18 or older");
  }

  return { valid: true, message: "Form is valid" };
}

try {
  validateForm({ name: "John", email: "john@example.com", age: 25 });
  console.log("Form valid!");
} catch (error) {
  console.log("Validation error:", error.message);
}
```

---

## Destructuring and Spread Operator

### Memahami Destructuring dan Spread Operator

Destructuring dan spread operator adalah fitur ES6 yang membuat ekstraksi nilai dari array dan objek lebih mudah dan elegan.

### 1. Array Destructuring

Mengambil nilai dari array dan menetapkannya ke variabel.

```javascript
const colors = ['red', 'green', 'blue'];

// Destructuring assignment
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);  // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor);  // Output: blue

// Skipping elements
const [a, , c] = ['apple', 'banana', 'cherry'];
console.log(a); // Output: apple
console.log(c); // Output: cherry

// Default values
const [x, y = 10, z = 20] = [5];
console.log(x); // Output: 5
console.log(y); // Output: 10
console.log(z); // Output: 20
```

### 2. Object Destructuring

Mengambil nilai dari objek dan menetapkannya ke variabel.

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

// Renaming variables
const { city: hometown } = person;
console.log(hometown);  // Output: New York

// Default values
const { country = 'USA' } = person;
console.log(country);   // Output: USA

// Nested destructuring
const employee = {
  name: 'Jane',
  address: {
    street: '123 Main St',
    zipCode: '10001'
  }
};

const { address: { street, zipCode } } = employee;
console.log(street);  // Output: 123 Main St
console.log(zipCode); // Output: 10001
```

### 3. Spread Operator (...)

Spread operator memungkinkan iterable (seperti array atau string) untuk dipecah-pecah.

```javascript
// Dengan array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Dengan string
const chars = [...'hello'];
console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']

// Dengan objek
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Copy array/objek
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
copiedArray.push(4);
console.log(originalArray); // Output: [1, 2, 3]
console.log(copiedArray);   // Output: [1, 2, 3, 4]
```

### 4. Rest Parameters

Rest parameters memungkinkan fungsi menerima jumlah argumen tak terbatas sebagai array.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));      // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Destructuring dengan rest
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(rest);  // Output: [2, 3, 4, 5]
```

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

---

## Template Literals and String Methods

### Memahami Template Literals dan String Methods

Template literals dan string methods adalah fitur penting untuk manipulasi string dalam JavaScript.

### 1. Template Literals

Template literals memungkinkan string multiline dan ekspresi interpolasi.

```javascript
const name = 'Alice';
const age = 25;

// Basic template literal
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is Alice and I am 25 years old.

// Multiline string
const multiline = `
This is a
multiline
string
`;
console.log(multiline);

// Expression interpolation
const price = 10;
const tax = 0.1;
const total = `Total cost: $${price + (price * tax)}`;
console.log(total); // Output: Total cost: $11
```

### 2. Tagged Template Literals

Tagged template literals memungkinkan Anda memproses template literals dengan fungsi kustom.

```javascript
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? `<mark>${values[i]}</mark>` : '';
    return result + string + value;
  }, '');
}

const name = 'Bob';
const age = 30;
const highlighted = highlight`Hello, my name is ${name} and I am ${age} years old.`;
console.log(highlighted); // Output: Hello, my name is <mark>Bob</mark> and I am <mark>30</mark> years old.
```

### 3. String Methods Umum

Beberapa metode string yang sering digunakan:

```javascript
const text = '  Hello, World!  ';

// trim() - menghapus spasi di awal dan akhir
console.log(text.trim()); // Output: "Hello, World!"

// toUpperCase() / toLowerCase()
console.log(text.trim().toUpperCase()); // Output: "HELLO, WORLD!"
console.log(text.trim().toLowerCase()); // Output: "hello, world!"

// indexOf() - mencari posisi substring
console.log(text.indexOf('World')); // Output: 8

// includes() - memeriksa apakah string mengandung substring
console.log(text.includes('Hello')); // Output: true

// startsWith() / endsWith()
console.log(text.trim().startsWith('Hello')); // Output: true
console.log(text.trim().endsWith('World!'));  // Output: true

// replace() / replaceAll()
console.log(text.trim().replace('World', 'JavaScript')); // Output: "Hello, JavaScript!"

// split() - membagi string menjadi array
const words = 'apple,banana,cherry'.split(',');
console.log(words); // Output: ['apple', 'banana', 'cherry']

// slice() - mengambil bagian dari string
console.log('JavaScript'.slice(0, 4)); // Output: "Java"
```

### 4. Template Literals dalam Konteks CRUD

Template literals sangat berguna dalam operasi CRUD, terutama saat membuat query atau pesan:

```javascript
// Contoh penggunaan dalam konteks CRUD
const user = { id: 1, name: 'John', email: 'john@example.com' };

// Membuat pesan log
const logMessage = `User ${user.name} (ID: ${user.id}) logged in at ${new Date().toISOString()}`;
console.log(logMessage);

// Membuat query string sederhana
const queryString = `SELECT * FROM users WHERE id=${user.id} AND email='${user.email}'`;
console.log(queryString);
```

### Latihan Template Literals dan String Methods

**Latihan 1: Format Data Pengguna**
Gunakan template literals dan string methods untuk memformat informasi pengguna.

```javascript
function formatUser(user) {
  const { name, email, joinDate } = user;
  const formattedName = name.trim().split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');

  const domain = email.split('@')[1];

  return `
    User Information:
    Name: ${formattedName}
    Domain: ${domain}
    Join Date: ${new Date(joinDate).toLocaleDateString()}
  `.trim();
}

const user = {
  name: '  john doe  ',
  email: 'john.doe@example.com',
  joinDate: '2023-01-15'
};

console.log(formatUser(user));
```

---

## Modules and Import/Export

### Memahami Modules dan Import/Export

ES6 modules adalah sistem standar untuk mengorganisasi dan mengelola kode JavaScript dalam file-file terpisah.

### 1. Named Exports

Named exports memungkinkan Anda mengekspor lebih dari satu nilai dari sebuah modul.

```javascript
// mathUtils.js (dalam konteks simulasi)
// Named exports
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Default export (hanya satu per file)
export default function multiply(a, b) {
  return a * b;
}
```

### 2. Named Imports

Mengimpor nilai yang diekspor dengan nama spesifik.

```javascript
// Contoh impor (dalam konteks simulasi)
// import { add, subtract, PI } from './mathUtils.js';

// Karena kita tidak bisa benar-benar mengimpor di sini, kita buat contoh fungsional:
const moduleExports = {
  PI: 3.14159,
  E: 2.71828,
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  default: (a, b) => a * b
};

// Named imports simulation
const { add, subtract, PI } = moduleExports;
console.log(add(5, 3));      // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(PI);             // Output: 3.14159
```

### 3. Default Imports

Mengimpor nilai default dari sebuah modul.

```javascript
// Default import simulation
const multiply = moduleExports.default;
console.log(multiply(4, 5)); // Output: 20
```

### 4. Mixed Imports

Menggabungkan named dan default imports.

```javascript
// Mixed import simulation
// import multiply, { add, subtract, PI } from './mathUtils.js';

// Simulasi:
const mixedImport = {
  default: moduleExports.default,
  ...moduleExports
};

const multiplyFunc = mixedImport.default;
const { add: addFunc, subtract: subFunc, PI: piValue } = mixedImport;

console.log(multiplyFunc(2, 3)); // Output: 6
console.log(addFunc(2, 3));      // Output: 5
```

### 5. Export All dan Re-export

```javascript
// Contoh export all (dalam konteks simulasi)
// export * from './mathUtils.js'; // Re-export semua

// Export with renaming
// export { add as sum, subtract as difference } from './mathUtils.js';
```

### 6. Practical Module Example in CRUD Context

Berikut contoh bagaimana modules bisa digunakan dalam konteks CRUD:

```javascript
// crudOperations.js simulation
const crudModule = {
  // Data storage simulation
  dataStore: [],

  // Create
  create(record) {
    record.id = Date.now(); // Simple ID generation
    this.dataStore.push(record);
    return record;
  },

  // Read
  read(id) {
    return this.dataStore.find(item => item.id == id);
  },

  // Update
  update(id, updates) {
    const index = this.dataStore.findIndex(item => item.id == id);
    if (index !== -1) {
      this.dataStore[index] = { ...this.dataStore[index], ...updates };
      return this.dataStore[index];
    }
    return null;
  },

  // Delete
  delete(id) {
    const index = this.dataStore.findIndex(item => item.id == id);
    if (index !== -1) {
      return this.dataStore.splice(index, 1)[0];
    }
    return null;
  },

  // List all
  list() {
    return [...this.dataStore];
  }
};

// Simulasi penggunaan
const newUser = crudModule.create({ name: 'John', email: 'john@example.com' });
console.log('Created:', newUser);

const retrievedUser = crudModule.read(newUser.id);
console.log('Retrieved:', retrievedUser);

const updatedUser = crudModule.update(newUser.id, { email: 'john.doe@example.com' });
console.log('Updated:', updatedUser);

const allUsers = crudModule.list();
console.log('All users:', allUsers);
```

### Latihan Modules dan Import/Export

**Latihan 1: Membuat Modul Utilitas Sederhana**
Buat modul utilitas yang menyediakan fungsi-fungsi umum dan ekspor dalam berbagai bentuk.

```javascript
// Simulasi modul utils
const utilsModule = {
  // Named exports
  formatDate(date) {
    return new Date(date).toLocaleDateString('id-ID');
  },

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },

  isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  // Default export
  default: {
    // Utility object
    array: {
      unique(arr) {
        return [...new Set(arr)];
      },

      shuffle(arr) {
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      }
    },

    string: {
      truncate(str, length) {
        return str.length > length ? str.substring(0, length) + '...' : str;
      }
    }
  }
};

// Simulasi penggunaan
const { formatDate, capitalize, isEmailValid } = utilsModule;
const utils = utilsModule.default;

console.log(formatDate('2023-05-15'));                    // Output: 15/5/2023 (tergantung locale)
console.log(capitalize('hello WORLD'));                   // Output: Hello world
console.log(isEmailValid('test@example.com'));            // Output: true
console.log(utils.array.unique([1, 2, 2, 3, 3, 4]));    // Output: [1, 2, 3, 4]
console.log(utils.string.truncate('Long text', 5));       // Output: Long...
```

---

## Kesimpulan dan Praktik Terbaik

Selamat! Anda telah mempelajari secara menyeluruh tentang konsep-konsep fundamental JavaScript: perulangan, kondisional, fungsi orde-tinggi, promise, dan async/await.

**Pola Pikir yang Telah Dibentuk:**
1. **Analisis dulu, baru coding.** Tulis dulu rencananya dalam bahasa manusia.
2. **Pecah masalah.** "Buat Aplikasi" itu terlalu besar. Pecah jadi "Login", "Check In", "Check Out", dll.
3. **Kuasai Loop & If.** Hampir semua logika bisnis aplikasi hanyalah kombinasi cerdas dari Pengulangan (`for`, `.forEach`, `.map`) dan Keputusan (`if`, `.filter`, `.find`).
4. **Validasi Input.** Jangan pernah percaya input dari user.
5. **Efisiensi.** Gunakan indeks dan cache untuk performa optimal.
6. **Keamanan.** Implementasikan otentikasi dan validasi perangkat.
7. **Notifikasi Real-time.** Gunakan polling atau WebSocket untuk update langsung.

Teruslah berlatih dengan mencoba memodifikasi skenario di atas (misalnya: tambah fitur laporan, sistem peringatan keterlambatan, dll.) untuk memperkuat pemahaman Anda tentang algoritma dan manipulasi data.