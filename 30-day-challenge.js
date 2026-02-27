/**
 * ============================================================================
 * 🎯 30-DAY JAVASCRIPT CHALLENGE - DARI NOL!
 * ============================================================================
 * 
 * CARA PAKAI FILE INI:
 * 
 * 1. BUKA browser (Chrome/Firefox)
 * 2. TEKAN F12
 * 3. KLIK tab "Console"
 * 4. COPY code dari file ini
 * 5. PASTE di Console
 * 6. TEKAN Enter
 * 7. LIHAT hasilnya!
 * 
 * SETIAP HARI:
 * - Baca teori (5 menit)
 * - Copy contoh code (5 menit)
 * - Kerjakan latihan (10 menit)
 * - TOTAL: 20 menit
 * 
 * JANGAN LUPA: Centang ✅ di checklist START-HERE.md setelah selesai!
 * 
 */

// ============================================================================
// 📅 MINGGU 1: DASAR-DASAR
// ============================================================================

// ============================================================================
// HARI 1: VARIABLE - Tempat Menyimpan Data
// ============================================================================
console.log("\n========================================");
console.log("📅 HARI 1: VARIABLE");
console.log("========================================\n");

/*
╔══════════════════════════════════════════════════╗
║  TEORI (BACA 5 MENIT)                            ║
╚══════════════════════════════════════════════════╝

VARIABLE = KOTAK untuk menyimpan data

Analogi:
┌─────────────┐
│   nama      │  ← Label di kotak
│  "Budi"     │  ← Isi kotak
└─────────────┘

CARA BUAT VARIABLE:
let namaVariable = isiData;

CONTOH:
let nama = "Budi";
  │    │    │
  │    │    └─ Isi: teks "Budi"
  │    └────── Artinya: sama dengan
  └─────────── Nama variable: "nama"

CARA PAKAI:
console.log(nama);  // Output: "Budi"

JENIS VARIABLE:
1. let  = Bisa diubah isinya
2. const = Tidak bisa diubah (constant)
3. var  = Cara lama (jangan dipakai!)

*/

// ───────────────────────────────────────────────────────────────────────────
// CONTOH CODE (COPY-PASTE KE CONSOLE & RUN!)
// ───────────────────────────────────────────────────────────────────────────

console.log("--- CONTOH 1: Variable Sederhana ---");

// Langkah 1: Buat variable
let nama = "Budi";

// Langkah 2: Tampilkan isi variable
console.log("Nama saya:", nama);

// Langkah 3: Ubah isi variable
nama = "Siti";
console.log("Sekarang nama:", nama);


console.log("\n--- CONTOH 2: Variable Angka ---");

let umur = 25;
console.log("Umur:", umur);

let tinggi = 170.5;
console.log("Tinggi:", tinggi, "cm");


console.log("\n--- CONTOH 3: Operasi dengan Variable ---");

let a = 10;
let b = 5;

let tambah = a + b;
console.log(a, "+", b, "=", tambah);

let kali = a * b;
console.log(a, "×", b, "=", kali);


// ───────────────────────────────────────────────────────────────────────────
// LATIHAN 1: IKUTI STEP-BY-STEP INI
// ───────────────────────────────────────────────────────────────────────────

console.log("\n--- LATIHAN 1: Buat Variable Namamu ---");

// STEP 1: Buat variable dengan namamu
// Ganti "???" dengan namamu dalam tanda kutip
let namaSaya = "???";

// STEP 2: Tampilkan dengan console.log
console.log("Nama saya:", namaSaya);

// STEP 3: Run code ini (tekan Enter di console)
// STEP 4: Harusnya output: "Nama saya: [namamu]"


console.log("\n--- LATIHAN 2: Variable Umur ---");

// STEP 1: Buat variable umur
// Ganti 0 dengan umurmu (tanpa tanda kutip karena angka!)
let umurSaya = 0;

// STEP 2: Tampilkan
console.log("Umur saya:", umurSaya, "tahun");


console.log("\n--- LATIHAN 3: Hitung Luas Persegi ---");

// DIKETAHUI:
// Persegi punya sisi = 5 cm
// Rumus luas: sisi × sisi

let sisi = 5;

// STEP 1: Hitung luas
// Ganti ??? dengan rumus: sisi × sisi
let luas = ???;

// STEP 2: Tampilkan hasil
console.log("Sisi persegi:", sisi, "cm");
console.log("Luas persegi:", luas, "cm²");

// STEP 3: Run code ini
// STEP 4: Harusnya output: "Luas persegi: 25 cm²"


// ───────────────────────────────────────────────────────────────────────────
// TANTANGAN HARI 1 (COBA SENDIRI!)
// ───────────────────────────────────────────────────────────────────────────

console.log("\n--- 🎯 TANTANGAN HARI 1 ---");

/*
SOAL:
Buat 3 variable:
1. namaKota = nama kotamu (teks, pakai tanda kutip)
2. suhu = suhu saat ini (angka, tanpa tanda kutip)
3. cuaca = "Cerah" atau "Hujan" (teks)

Lalu tampilkan seperti ini:
"Di [kota], suhu [suhu]°C, cuaca [cuaca]"

CONTOH OUTPUT:
"Di Jakarta, suhu 32°C, cuaca Cerah"
*/

// TODO: Kerjakan di sini!
// HINT:
// let namaKota = "???";
// let suhu = ???;
// let cuaca = "???";
// console.log("Di", namaKota, ", suhu", suhu, "°C, cuaca", cuaca);


console.log("\n✅ HARI 1 SELESAI!");
console.log("➡️ BESOK: Lanjut Hari 2 (Tipe Data)");
console.log("➡️ JANGAN LUPA: Centang ✅ checklist di START-HERE.md!");

// ============================================================================
// HARI 2: TIPE DATA DASAR
// ============================================================================
console.log("\n\n========================================");
console.log("📅 HARI 2: TIPE DATA DASAR");
console.log("========================================\n");

/*
╔══════════════════════════════════════════════════╗
║  TEORI (BACA 5 MENIT)                            ║
╚══════════════════════════════════════════════════╝

TIPE DATA = Jenis-jenis data yang bisa disimpan

4 TIPE DATA DASAR:

1. STRING = Teks
   - Harus pakai tanda kutip: "..." atau '...'
   - Contoh: "Halo", "Budi", "123"
   
2. NUMBER = Angka
   - Tidak pakai tanda kutip
   - Contoh: 25, 3.14, -10
   
3. BOOLEAN = Benar/Salah
   - Cuma 2 value: true atau false
   - Untuk keputusan (nanti di Hari 6)
   
4. UNDEFINED = Belum ada nilai
   - Variable yang belum diisi

CARA CEK TIPE DATA:
typeof variable

*/

// ───────────────────────────────────────────────────────────────────────────
// CONTOH CODE
// ───────────────────────────────────────────────────────────────────────────

console.log("--- CONTOH 1: String (Teks) ---");

let nama = "Budi";
let sapaan = "Halo, nama saya";

console.log(sapaan, nama);
console.log("Tipe data:", typeof nama);  // Output: "string"


console.log("\n--- CONTOH 2: Number (Angka) ---");

let umur = 25;
let tinggi = 170.5;
let negatif = -10;

console.log("Umur:", umur);
console.log("Tinggi:", tinggi);
console.log("Negatif:", negatif);
console.log("Tipe data umur:", typeof umur);  // Output: "number"


console.log("\n--- CONTOH 3: Boolean (Benar/Salah) ---");

let sudahMenikah = true;
let belumLulus = false;

console.log("Sudah menikah?", sudahMenikah);
console.log("Belum lulus?", belumLulus);
console.log("Tipe data:", typeof sudahMenikah);  // Output: "boolean"


console.log("\n--- CONTOH 4: Undefined ---");

let belumDiisi;
console.log("Isi variable:", belumDiisi);  // Output: undefined
console.log("Tipe data:", typeof belumDiisi);  // Output: "undefined"


// ───────────────────────────────────────────────────────────────────────────
// LATIHAN 2
// ───────────────────────────────────────────────────────────────────────────

console.log("\n--- LATIHAN 1: Buat Variable dengan Tipe Berbeda ---");

// STEP 1: Buat variable string (teks, pakai tanda kutip)
let namaDepan = "???";

// STEP 2: Buat variable number (angka, tanpa tanda kutip)
let umurAnda = ???;

// STEP 3: Buat variable boolean (true atau false)
let sudahSekolah = ???;

// STEP 4: Tampilkan semua
console.log("Nama:", namaDepan);
console.log("Umur:", umurAnda);
console.log("Sudah sekolah?", sudahSekolah);


console.log("\n--- LATIHAN 2: Cek Tipe Data ---");

// STEP 1: Buat variable
let angka = 100;
let teks = "Seratus";
let bool = true;

// STEP 2: Cek tipe data dengan typeof
console.log("Tipe data angka:", typeof angka);
console.log("Tipe data teks:", typeof teks);
console.log("Tipe data bool:", typeof bool);

// STEP 3: Run dan lihat outputnya!


console.log("\n--- LATIHAN 3: String Concatenation (Gabung Teks) ---");

// STEP 1: Buat 2 variable string
let depan = "Budi";
let belakang = "Santoso";

// STEP 2: Gabungkan dengan +
let namaLengkap = depan + " " + belakang;

// STEP 3: Tampilkan
console.log("Nama lengkap:", namaLengkap);

// TODO: Sekarang coba dengan namamu!
// let namaDepanMu = "???";
// let namaBelakangMu = "???";
// let namaLengkapMu = ???;
// console.log("Nama lengkapmu:", namaLengkapMu);


// ───────────────────────────────────────────────────────────────────────────
// TANTANGAN HARI 2
// ───────────────────────────────────────────────────────────────────────────

console.log("\n--- 🎯 TANTANGAN HARI 2 ---");

/*
SOAL:
Buat biodata sederhana dengan 5 variable:

1. nama (string) - namamu
2. umur (number) - umurmu
3. tinggi (number) - tinggi badan dalam cm
4. sudahLulus (boolean) - true jika sudah lulus, false jika belum
5. hobi (string) - hobimu

Lalu tampilkan seperti ini:
"=== BIODATA SAYA ==="
"Nama: [nama]"
"Umur: [umur] tahun"
"Tinggi: [tinggi] cm"
"Sudah lulus? [sudahLulus]"
"Hobi: [hobi]"
*/

// TODO: Kerjakan di sini!


console.log("\n✅ HARI 2 SELESAI!");
console.log("➡️ BESOK: Lanjut Hari 3 (Operasi Matematika)");

// ============================================================================
// HARI 3: OPERASI MATEMATIKA
// ============================================================================
console.log("\n\n========================================");
console.log("📅 HARI 3: OPERASI MATEMATIKA");
console.log("========================================\n");

/*
╔══════════════════════════════════════════════════╗
║  TEORI (BACA 5 MENIT)                            ║
╚══════════════════════════════════════════════════╝

OPERASI MATEMATIKA DI JAVASCRIPT:

+  = Tambah
-  = Kurang
*  = Kali
/  = Bagi
%  = Modulus (sisa bagi)
** = Pangkat

CONTOH:
5 + 3 = 8
5 - 3 = 2
5 * 3 = 15
5 / 3 = 1.666...
5 % 3 = 2  (sisa dari 5 dibagi 3)
5 ** 2 = 25 (5 pangkat 2)

SHORTCUT:
x += 5  = x = x + 5
x -= 5  = x = x - 5
x *= 5  = x = x * 5
x++     = x = x + 1 (increment)
x--     = x = x - 1 (decrement)

*/

// ───────────────────────────────────────────────────────────────────────────
// CONTOH CODE
// ───────────────────────────────────────────────────────────────────────────

console.log("--- CONTOH 1: Operasi Dasar ---");

let a = 10;
let b = 3;

console.log(a, "+", b, "=", a + b);
console.log(a, "-", b, "=", a - b);
console.log(a, "*", b, "=", a * b);
console.log(a, "/", b, "=", a / b);
console.log(a, "%", b, "=", a % b, "← Sisa bagi");
console.log(a, "**", b, "=", a ** b);


console.log("\n--- CONTOH 2: Modulus (Sisa Bagi) ---");

// Modulus berguna untuk cek ganjil/genap!
let angka1 = 10;
let angka2 = 11;

console.log(angka1, "% 2 =", angka1 % 2, "← Genap (sisa 0)");
console.log(angka2, "% 2 =", angka2 % 2, "← Ganjil (sisa 1)");


console.log("\n--- CONTOH 3: Shortcut ---");

let x = 10;
console.log("x awal:", x);

x += 5;  // x = x + 5
console.log("x += 5 →", x);

x -= 3;  // x = x - 3
console.log("x -= 3 →", x);

x *= 2;  // x = x * 2
console.log("x *= 2 →", x);

x++;  // x = x + 1
console.log("x++ →", x);


// ───────────────────────────────────────────────────────────────────────────
// LATIHAN 3
// ───────────────────────────────────────────────────────────────────────────

console.log("\n--- LATIHAN 1: Hitung Luas & Keliling ---");

// DIKETAHUI: Persegi panjang
let panjang = 10;
let lebar = 5;

// STEP 1: Hitung luas (panjang × lebar)
let luas = ???;

// STEP 2: Hitung keliling (2 × (panjang + lebar))
let keliling = ???;

// STEP 3: Tampilkan
console.log("Panjang:", panjang);
console.log("Lebar:", lebar);
console.log("Luas:", luas);
console.log("Keliling:", keliling);


console.log("\n--- LATIHAN 2: Konversi Suhu ---");

// Rumus: Celcius ke Fahrenheit
// F = (C × 9/5) + 32

let celcius = 30;
let fahrenheit = ???;  // TODO: Masukkan rumus

console.log(celcius, "°C =", fahrenheit, "°F");


console.log("\n--- LATIHAN 3: Cek Ganjil/Genap ---");

// Jika angka % 2 = 0 → Genap
// Jika angka % 2 = 1 → Ganjil

let angka = 17;
let sisaBagi = angka % 2;

console.log("Angka:", angka);
console.log("Sisa bagi dengan 2:", sisaBagi);
// TODO: Tampilkan apakah ganjil atau genap


// ───────────────────────────────────────────────────────────────────────────
// TANTANGAN HARI 3
// ───────────────────────────────────────────────────────────────────────────

console.log("\n--- 🎯 TANTANGAN HARI 3 ---");

/*
SOAL:
Buat kalkulator sederhana untuk belanja:

DIKETAHUI:
- Harga 1 apel = 5000
- Beli 7 apel
- Punya uang = 50000

HITUNG:
1. Total belanja = harga × jumlah
2. Kembalian = uang - total belanja
3. Bisa beli berapa lagi? = kembalian ÷ harga

TAMPILKAN:
"=== KALKULATOR BELANJA ==="
"Harga apel: Rp 5000"
"Jumlah beli: 7"
"Total belanja: Rp ???"
"Uang: Rp 50000"
"Kembalian: Rp ???"
"Bisa beli lagi: ??? apel"
*/

// TODO: Kerjakan di sini!
// HINT:
// let harga = 5000;
// let jumlah = 7;
// let uang = 50000;
// let totalBelanja = ???;
// let kembalian = ???;
// let bisaBeliLagi = ???;


console.log("\n✅ HARI 3 SELESAI!");
console.log("➡️ BESOK: Lanjut Hari 4 (Operasi String)");

// ============================================================================
// HARI 4: OPERASI STRING
// ============================================================================
console.log("\n\n========================================");
console.log("📅 HARI 4: OPERASI STRING");
console.log("========================================\n");

/*
╔══════════════════════════════════════════════════╗
║  TEORI (BACA 5 MENIT)                            ║
╚══════════════════════════════════════════════════╝

STRING = Teks

OPERASI STRING:

1. CONCATENATION (Gabung)
   "Halo" + " " + "Dunia" = "Halo Dunia"

2. LENGTH (Panjang)
   "Halo".length = 4

3. UPPERCASE (Huruf Besar)
   "halo".toUpperCase() = "HALO"

4. LOWERCASE (Huruf Kecil)
   "HALO".toLowerCase() = "halo"

5. CHARAT (Ambil Karakter)
   "Halo".charAt(0) = "H"
   "Halo".charAt(1) = "a"
   
   Index dimulai dari 0!
   H a l o
   0 1 2 3

6. INCLUDES (Cek Apakah Ada)
   "Halo Dunia".includes("Dunia") = true

*/

// ───────────────────────────────────────────────────────────────────────────
// CONTOH CODE
// ───────────────────────────────────────────────────────────────────────────

console.log("--- CONTOH 1: Gabung String ---");

let depan = "Budi";
let belakang = "Santoso";

let namaLengkap = depan + " " + belakang;
console.log("Nama lengkap:", namaLengkap);


console.log("\n--- CONTOH 2: Panjang String ---");

let teks = "JavaScript";
console.log("Teks:", teks);
console.log("Panjang:", teks.length, "karakter");


console.log("\n--- CONTOH 3: Upper & Lower Case ---");

let nama = "budi santoso";
console.log("Asli:", nama);
console.log("Upper:", nama.toUpperCase());
console.log("Lower:", "BUDI SANTOSO".toLowerCase());


console.log("\n--- CONTOH 4: CharAt ---");

let kata = "Halo";
console.log("Kata:", kata);
console.log("Karakter ke-0:", kata.charAt(0));
console.log("Karakter ke-1:", kata.charAt(1));
console.log("Karakter ke-2:", kata.charAt(2));
console.log("Karakter ke-3:", kata.charAt(3));


console.log("\n--- CONTOH 5: Includes ---");

let kalimat = "Saya suka JavaScript";
console.log("Kalimat:", kalimat);
console.log("Apakah ada 'suka'?", kalimat.includes("suka"));
console.log("Apakah ada 'benci'?", kalimat.includes("benci"));


// ───────────────────────────────────────────────────────────────────────────
// LATIHAN 4
// ───────────────────────────────────────────────────────────────────────────

console.log("\n--- LATIHAN 1: Format Nama ---");

// DIKETAHUI: Nama masih berantakan
let namaBerantakan = "  budi   santoso  ";

// STEP 1: Hapus spasi di awal/akhir dengan trim()
let namaRapi = namaBerantakan.trim();

// STEP 2: Ubah ke huruf kecil
// TODO: namaRapi = namaRapi.???();

// STEP 3: Tampilkan
console.log("Asli:", namaBerantakan);
console.log("Rapi:", namaRapi);


console.log("\n--- LATIHAN 2: Inisial Nama ---");

let namaDepan = "Budi";
let namaBelakang = "Santoso";

// STEP 1: Ambil huruf pertama
let inisialDepan = namaDepan.charAt(0);
let inisialBelakang = ???;  // TODO: Ambil huruf pertama nama belakang

// STEP 2: Gabungkan dengan titik
let inisialLengkap = inisialDepan + ". " + inisialBelakang + ".";

console.log("Inisial:", inisialLengkap);


console.log("\n--- LATIHAN 3: Template Literal ---");

// Cara MODERN gabung string dengan variable
// Pakai backtick (`) bukan quote (')

let nama = "Budi";
let umur = 25;

// CARA LAMA (ribet):
let kalimat1 = "Nama saya " + nama + " dan saya " + umur + " tahun";

// CARA BARU (mudah!):
let kalimat2 = `Nama saya ${nama} dan saya ${umur} tahun`;

console.log("Cara lama:", kalimat1);
console.log("Cara baru:", kalimat2);

// TODO: Buat kalimat dengan template literal tentang dirimu


// ───────────────────────────────────────────────────────────────────────────
// TANTANGAN HARI 4
// ───────────────────────────────────────────────────────────────────────────

console.log("\n--- 🎯 TANTANGAN HARI 4 ---");

/*
SOAL:
Buat program untuk validasi email sederhana:

DIKETAHUI:
- Email input: "  Budi@Example.com  "

YANG HARUS DILAKUKAN:
1. Hapus spasi di awal/akhir (trim)
2. Ubah ke lowercase
3. Cek apakah ada "@" (includes)
4. Cek panjang email (length)

TAMPILKAN:
"Email asli: [email]"
"Email setelah dibersihkan: [email]"
"Panjang email: ??? karakter"
"Ada simbol @? [true/false]"
"Email valid? [true jika ada @ dan panjang > 5]"
*/

// TODO: Kerjakan di sini!
// HINT:
// let emailInput = "  Budi@Example.com  ";
// let emailBersih = emailInput.???.???();
// let adaAt = emailBersih.???(???);
// let panjang = emailBersih.???;
// let valid = adaAt && panjang > 5;


console.log("\n✅ HARI 4 SELESAI!");
console.log("➡️ BESOK: Lanjut Hari 5 (Comparison & Logic)");

// ============================================================================
// HARI 5: COMPARISON & LOGIC
// ============================================================================
console.log("\n\n========================================");
console.log("📅 HARI 5: COMPARISON & LOGIC");
console.log("========================================\n");

/*
╔══════════════════════════════════════════════════╗
║  TEORI (BACA 5 MENIT)                            ║
╚══════════════════════════════════════════════════╝

COMPARISON = Membandingkan 2 nilai

OPERATOR COMPARISON:

==  = Sama dengan (tidak cek tipe)
=== = Sama dengan (cek tipe juga)
!=  = Tidak sama
!== = Tidak sama (cek tipe)
>   = Lebih besar
<   = Lebih kecil
>=  = Lebih besar atau sama
<=  = Lebih kecil atau sama

HASIL: true atau false (boolean)

CONTOH:
5 == 5     → true
5 == "5"   → true (tidak cek tipe)
5 === "5"  → false (cek tipe: number vs string)
5 > 3      → true
5 < 3      → false

OPERATOR LOGIC:

&& = AND (dan) - keduanya harus true
|| = OR (atau) - salah satu true
!  = NOT (bukan) - membalik nilai

CONTOH:
true && true  → true
true && false → false
true || false → true
!true         → false

*/

// ───────────────────────────────────────────────────────────────────────────
// CONTOH CODE
// ───────────────────────────────────────────────────────────────────────────

console.log("--- CONTOH 1: Comparison ---");

console.log("5 == 5:", 5 == 5);
console.log("5 == '5':", 5 == "5", "← true karena tidak cek tipe");
console.log("5 === '5':", 5 === "5", "← false karena tipe beda");
console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 >= 5:", 5 >= 5);


console.log("\n--- CONTOH 2: Operator Logic ---");

let sudahBayar = true;
let sudahDaftar = true;

// AND: Keduanya harus true
console.log("Bisa ikut? (AND):", sudahBayar && sudahDaftar);

// OR: Salah satu true
let punyaKTP = false;
let punyaSIM = true;
console.log("Bisa daftar? (OR):", punyaKTP || punyaSIM);

// NOT: Membalik
console.log("NOT true:", !true);
console.log("NOT false:", !false);


console.log("\n--- CONTOH 3: Cek Ganjil/Genap ---");

let angka = 10;
let isGenap = angka % 2 === 0;

console.log(angka, "genap?", isGenap);


// ───────────────────────────────────────────────────────────────────────────
// LATIHAN 5
// ───────────────────────────────────────────────────────────────────────────

console.log("\n--- LATIHAN 1: Cek Usia ---");

let usia = 17;

// STEP 1: Cek apakah sudah dewasa (>= 17)
let sudahDewasa = ???;  // TODO: Buat comparison

console.log("Usia:", usia);
console.log("Sudah dewasa?", sudahDewasa);


console.log("\n--- LATIHAN 2: Cek Lulus ---");

let nilai = 75;
let nilaiMinimal = 70;

// STEP 1: Cek apakah lulus (nilai >= nilaiMinimal)
let lulus = ???;  // TODO: Buat comparison

console.log("Nilai:", nilai);
console.log("Nilai minimal:", nilaiMinimal);
console.log("Lulus?", lulus);


console.log("\n--- LATIHAN 3: Operator Logic ---");

// DIKETAHUI:
let punyaUang = true;
let adaWaktu = false;

// STEP 1: Cek apakah bisa nonton (punya uang DAN ada waktu)
let bisaNonton = ???;  // TODO: Pakai &&

// STEP 2: Cek apakah bisa streaming (punya uang ATAU ada waktu)
let bisaStreaming = ???;  // TODO: Pakai ||

console.log("Punya uang?", punyaUang);
console.log("Ada waktu?", adaWaktu);
console.log("Bisa nonton bioskop?", bisaNonton);
console.log("Bisa streaming?", bisaStreaming);


// ───────────────────────────────────────────────────────────────────────────
// TANTANGAN HARI 5
// ───────────────────────────────────────────────────────────────────────────

console.log("\n--- 🎯 TANTANGAN HARI 5 ---");

/*
SOAL:
Buat sistem validasi login sederhana:

DIKETAHUI:
- Username benar: "admin"
- Password benar: "12345"
- Username input: "admin"
- Password input: "wrong"

YANG HARUS DILAKUKAN:
1. Cek apakah username benar
2. Cek apakah password benar
3. Login berhasil jika username DAN password benar

TAMPILKAN:
"Username input: [username]"
"Password input: [password]"
"Username benar? [true/false]"
"Password benar? [true/false]"
"Login berhasil? [true/false]"
*/

// TODO: Kerjakan di sini!
// HINT:
// let usernameBenar = "admin";
// let passwordBenar = "12345";
// let usernameInput = "admin";
// let passwordInput = "wrong";
// let usernameCocok = ???;
// let passwordCocok = ???;
// let loginBerhasil = ???;


console.log("\n✅ HARI 5 SELESAI!");
console.log("➡️ BESOK: Lanjut Hari 6 (If-Else - Kondisi)!");
console.log("➡️ SEMANGAT! Minggu 1 hampir selesai!");

// ============================================================================
// 🎉 MINGGU 1 COMPLETE CHECKPOINT
// ============================================================================

console.log("\n\n========================================");
console.log("🎉 MINGGU 1 COMPLETE!");
console.log("========================================\n");

/*
SELAMAT! Kamu sudah belajar:

✅ Hari 1: Variable
✅ Hari 2: Tipe Data
✅ Hari 3: Operasi Matematika
✅ Hari 4: Operasi String
✅ Hari 5: Comparison & Logic

BESOK: Mulai Minggu 2 - Control Flow (If-Else, Loop)

JANGAN LUPA:
✅ Centang checklist di START-HERE.md
✅ Istirahat yang cukup
✅ Besok lanjut lagi!
*/

// ============================================================================
// CATATAN: HARI 6-30 AKAN DITAMBAHKAN
// ============================================================================

console.log("\n\n📝 CATATAN:");
console.log("Hari 6-30 akan ditambahkan secara bertahap.");
console.log("Untuk sekarang, ulangi Hari 1-5 sampai benar-benar paham!");
console.log("Konsisten 20 menit/hari > 5 jam sekali seminggu!");
