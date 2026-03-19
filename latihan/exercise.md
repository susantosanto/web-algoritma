# 📅 Hari 3: String Manipulation - Latihan Algoritma & Debugging

> **Role:** Interviewer Kerja  
> **Posisi:** Junior Frontend Developer  
> **Topik:** `slice`, `split`, `replace`, `includes`, Template Literals  
> **Integrasi:** Math.floor & Math.random (Hari 2)

---

## 🎯 Cara Mengerjakan

1. Kerjakan **satu latihan pada satu waktu**
2. Tulis kodemu di file terpisah (misal: `latihan/hari3-solusi.js`)
3. Share kodemu untuk setiap latihan
4. Saya akan evaluasi dan beri nilai 1-10
5. **Jangan lihat jawaban** sebelum mencoba sendiri!

---

## 📝 LATIHAN CODING (BERTAHAP)

### Latihan 1: Inisial Nama

**Deskripsi:**
Buat fungsi `buatInisial(namaLengkap)` yang mengambil nama lengkap dan mengembalikan inisial dalam format huruf kapital dengan titik.

**Contoh:**

```javascript
buatInisial('budi santoso'); // "B.S."
buatInisial('siti aminah nur'); // "S.A.N."
buatInisal('alex'); // "A."
```

**🧠 Bangun Logika Dulu (JANGAN CODING DULU!):**

Pikirkan langkah-langkah ini SEBELUM menulis kode:

1. **Pecah masalah:** Bagaimana cara memisahkan nama depan, tengah, belakang?
   - Metode string apa yang bisa memisahkan kata berdasarkan spasi?

2. **Proses setiap kata:** Setelah dipisah, apa yang harus dilakukan dengan setiap kata?
   - Ambil huruf pertama dari setiap kata (metode apa?)
   - Ubah ke huruf kapital (metode apa?)

3. **Gabungkan hasil:** Bagaimana cara menggabungkan semua inisial dengan titik?
   - Bisa pakai loop atau array method
   - Tambahkan titik di akhir

4. **Edge case:** Apa yang terjadi jika:
   - Nama hanya satu kata?
   - Ada spasi berlebih di awal/akhir?

**Tugas:**

- Implementasikan fungsi dengan logika yang sudah kamu pikirkan
- Test dengan berbagai input

---

### Latihan 2: Sensor Kata Kasar + Random Emoji

**Deskripsi:**
Buat fungsi `sensorKataRandom(kalimat, kataKasar, emojiList)` yang:

1. Mengganti kata-kata kasar dengan bintang (`*`) sebanyak jumlah huruf
2. Menambahkan emoji random di akhir kalimat

**Contoh:**

```javascript
const emoji = ['😅', '🙈', '💩', '🤦'];
sensorKataRandom('Dasar bodoh kamu!', 'bodoh', emoji);
// "Dasar ***** kamu! 😅" (emoji random)

sensorKataRandom('Anjing itu galak', 'Anjing', emoji);
// "****** itu galak 🙈" (emoji random)
```

**🧠 Bangun Logika Dulu (JANGAN CODING DULU!):**

Pikirkan langkah-langkah ini SEBELUM menulis kode:

1. **Sensor kata (review Hari 3):**
   - Bagaimana cara mengecek apakah kata kasar ada dalam kalimat?
   - Bagaimana cara membuat bintang pengganti sebanyak huruf kata?
   - Metode string apa untuk replace?

2. **Pilih emoji random (integrasi Hari 2):**
   - Bagaimana cara mengambil elemen random dari array emoji?
   - Rumus: `Math.floor(Math.random() * panjangArray)`
   - Kenapa perlu Math.floor? Kenapa tidak langsung Math.random()?

3. **Gabungkan hasil:**
   - Setelah kalimat disensor, bagaimana menambahkan emoji di akhir?
   - Template literal atau concatenation?

4. **Edge case:**
   - Apa yang terjadi jika emojiList kosong?
   - Apa yang terjadi jika kata tidak ditemukan?

**Tugas:**

- Implementasikan fungsi dengan logika yang sudah kamu pikirkan
- Test dengan berbagai input
- Pastikan emoji yang dipilih benar-benar random

---

### Latihan 3: Generate Password Random dengan Pola

**Deskripsi:**
Buat fungsi `generatePassword(panjang, pola)` yang membuat password random dengan aturan:

- `pola = "upper"` : Semua huruf kapital random (A-Z)
- `pola = "lower"` : Semua huruf kecil random (a-z)
- `pola = "mixed"` : Campuran huruf kapital dan kecil random
- `pola = "number"` : Angka random (0-9)

**Contoh:**

```javascript
generatePassword(8, 'upper'); // "XKJHGFDS" (random, semua kapital)
generatePassword(6, 'lower'); // "xkjhgf" (random, semua kecil)
generatePassword(10, 'mixed'); // "XkJhGfDsAq" (random, campuran)
generatePassword(5, 'number'); // "12345" (random, angka semua)
```

**🧠 Bangun Logika Dulu (JANGAN CODING DULU!):**

Pikirkan langkah-langkah ini SEBELUM menulis kode:

1. **Siapkan karakter pool:**
   - Buat string berisi semua huruf kapital: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   - Buat string berisi semua huruf kecil: "abcdefghijklmnopqrstuvwxyz"
   - Buat string berisi semua angka: "0123456789"
   - Berdasarkan pola, tentukan pool mana yang dipakai

2. **Ambil karakter random (integrasi Hari 2):**
   - Loop sebanyak `panjang` parameter
   - Setiap iterasi, pilih karakter random dari pool
   - Rumus: `pool[Math.floor(Math.random() * pool.length)]`
   - Kenapa rumus ini? Jelaskan alurnya!

3. **Bangun password:**
   - Mulai dari string kosong
   - Setiap iterasi, tambahkan karakter random ke string
   - Return hasil akhir

4. **Edge case:**
   - Apa yang terjadi jika panjang = 0?
   - Apa yang terjadi jika pola tidak dikenali?
   - Apa yang terjadi jika panjang negatif?

**Tugas:**

- Implementasikan fungsi dengan logika yang sudah kamu pikirkan
- Test dengan berbagai panjang dan pola
- Jalankan berkali-kali untuk memastikan randomness

---

### Latihan 4: Format Nomor Telepon dengan Random Masking

**Deskripsi:**
Buat fungsi `formatNomorTelepon(nomor, maskingLevel)` yang:

1. Memformat nomor telepon dengan strip (seperti Latihan 3 asli)
2. Menyembunyikan sebagian digit dengan `*` berdasarkan level masking

**Level Masking:**

- `maskingLevel = 0` : Tidak ada masking (tampilkan semua)
- `maskingLevel = 1` : Masking 3 digit terakhir
- `maskingLevel = 2` : Masking 6 digit terakhir
- `maskingLevel = 3` : Masking semua kecuali 4 digit pertama

**Contoh:**

```javascript
formatNomorTelepon('081234567890', 0);
// "0812-3456-7890"

formatNomorTelepon('081234567890', 1);
// "0812-3456-***"

formatNomorTelepon('081234567890', 2);
// "0812-***-***"

formatNomorTelepon('081234567890', 3);
// "0812-****-****"
```

**🧠 Bangun Logika Dulu (JANGAN CODING DULU!):**

Pikirkan langkah-langkah ini SEBELUM menulis kode:

1. **Format dasar (review):**
   - Bagaimana cara memotong nomor menjadi grup 4-4-4?
   - Metode string apa untuk slice di posisi tertentu?
   - Bagaimana menggabungkan dengan strip `-`?

2. **Masking logic:**
   - Berdasarkan maskingLevel, berapa digit yang di-mask?
   - Bagaimana cara mengganti digit tertentu dengan `*`?
   - Apakah masking dilakukan sebelum atau sesudah format?

3. **Integrasi random (opsional bonus):**
   - Bagaimana jika posisi masking di-random?
   - Misal maskingLevel=1, tapi 3 digit yang di-mask random dari 4 digit terakhir
   - Pakai Math.random() untuk pilih posisi

4. **Edge case:**
   - Apa yang terjadi jika nomor kurang dari 4 digit?
   - Apa yang terjadi jika maskingLevel > 3?
   - Apa yang terjadi jika nomor bukan string angka?

**Tugas:**

- Implementasikan fungsi dengan logika yang sudah kamu pikirkan
- Test dengan berbagai nomor dan masking level
- Bonus: Implementasi random masking position

---

### Latihan 5: Game Tebak Kata dengan Hint Random

**Deskripsi:**
Buat sistem game sederhana dengan 3 fungsi:

1. `pilihKataRandom(kataList)` - Pilih kata random dari list
2. `buatHint(kata, jumlahHint)` - Buat hint dengan menampilkan sebagian huruf random
3. `cekTebakan(tebakan, kataAsli)` - Cek apakah tebakan benar (case-insensitive)

**Contoh:**

```javascript
const kataList = ['JAVASCRIPT', 'PYTHON', 'RUBY', 'GOLANG'];

// Game flow:
const kataRahasia = pilihKataRandom(kataList); // "JAVASCRIPT" (random)
const hint = buatHint(kataRahasia, 3); // "J_V_S_R_P_T" (random huruf ditampilkan)
const hasil = cekTebakan('javascript', kataRahasia); // { benar: true, pesan: "Selamat! Benar!" }
```

**Detail Fungsi:**

**1. pilihKataRandom(kataList)**

- Return kata random dari array menggunakan Math.random()

**2. buatHint(kata, jumlahHint)**

- Tampilkan `jumlahHint` huruf random dari kata
- Huruf lainnya diganti `_`
- Contoh: "JAVASCRIPT" dengan 3 hint → "J_V_S_R_P_T" atau "\_A_A_C_I_T" (random)

**3. cekTebakan(tebakan, kataAsli)**

- Bandingkan case-insensitive
- Return object: `{ benar: boolean, pesan: string }`

**🧠 Bangun Logika Dulu (JANGAN CODING DULU!):**

Pikirkan langkah-langkah ini SEBELUM menulis kode:

**Untuk pilihKataRandom:**

1. Bagaimana cara ambil elemen random dari array?
2. Rumus: `array[Math.floor(Math.random() * array.length)]`
3. Kenapa harus Math.floor? Apa yang terjadi jika tidak?

**Untuk buatHint:**

1. Bagaimana cara memilih posisi huruf random yang akan ditampilkan?
2. Apakah boleh posisi yang sama terpilih 2 kali?
3. Bagaimana cara mengganti huruf di posisi tertentu dengan `_`?
4. Metode string apa yang bisa replace di posisi tertentu?

**Untuk cekTebakan:**

1. Bagaimana cara compare 2 string case-insensitive?
2. Metode string apa untuk normalisasi (toLowerCase/toUpperCase)?
3. Bagaimana format return object yang informatif?

**Tugas:**

- Implementasikan ketiga fungsi
- Buat game loop sederhana (pilih kata → buat hint → minta tebakan → cek)
- Test dengan berbagai kata

---

## 🐛 LATIHAN DEBUGGING

### Debugging 1: Reverse String

**Temukan 2 bug dalam kode berikut:**

```javascript
function reverseString(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return str;
}
```

**Masalah:** Fungsi seharusnya mengembalikan string terbalik, tapi mengembalikan string asli.

**Tugas:**

1. Identifikasi kedua bug
2. Jelaskan kenapa ini bug
3. Perbaiki kodenya

**Petunjuk:** Satu bug di logika loop, satu bug di return.

---

### Debugging 2: Count Vowel

**Temukan 3 bug dalam kode berikut:**

```javascript
function hitungVokal(kalimat) {
  let vokal = 'aeiou';
  let count = 0;

  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] == vokal) {
      count++;
    }
  }

  return count;
}
```

**Masalah:** Fungsi selalu mengembalikan 0 meskipun ada vokal.

**Tugas:**

1. Temukan semua bug (ada 3)
2. Jelaskan setiap bug
3. Perbaiki kodenya

**Petunjuk:** Operator perbandingan, cara cek karakter dalam string, case sensitivity.

---

### Debugging 3: Random Number Generator

**Temukan 3 bug dalam kode berikut:**

```javascript
function generateRandomNumber(min, max) {
  let random = Math.random() * (max - min);
  let result = Math.ceil(random) + min;

  if (result > max) {
    result = max + 1;
  }

  return result;
}
```

**Masalah:**

- Fungsi seharusnya menghasilkan angka random antara min dan max (inclusive)
- Ada bug di rumus dan logika

**Contoh yang diharapkan:**

```javascript
generateRandomNumber(1, 6); // Harus antara 1-6 (inclusive)
generateRandomNumber(10, 20); // Harus antara 10-20 (inclusive)
```

**Tugas:**

1. Temukan semua bug (ada 3)
2. Jelaskan setiap bug
3. Perbaiki kodenya

**Petunjuk:** Rumus Math.random yang benar, Math.floor vs Math.ceil, edge case handling.

---

### Debugging 4: Remove Duplicate Character

**Temukan 3 bug dalam kode berikut:**

```javascript
function hapusDuplikat(str) {
  let result = [];

  for (let char of str) {
    if (result.includes(str)) {
      result.push(char);
    }
  }

  return result;
}
```

**Masalah:**

- Fungsi seharusnya menghapus karakter duplikat
- Return seharusnya string, bukan array

**Contoh yang diharapkan:**

```javascript
hapusDuplikat('hello'); // "helo"
hapusDuplikat('book'); // "bok"
```

**Tugas:**

1. Temukan semua bug (ada 3)
2. Jelaskan setiap bug
3. Perbaiki kodenya

**Petunjuk:** Logika kondisi terbalik, variable yang dicek salah, return type.

---

### Debugging 5: Random Shuffle String

**Temukan 4 bug dalam kode berikut:**

```javascript
function shuffleString(str) {
  let arr = str.split('');
  let shuffled = [];

  for (let i = 0; i < arr.length; i++) {
    let randomIndex = Math.random() * arr.length;
    shuffled.push(arr[randomIndex]);
  }

  return shuffled;
}
```

**Masalah:**

- Fungsi seharusnya mengacak urutan karakter string
- Return seharusnya string, bukan array
- Ada bug di rumus random dan logika shuffle

**Contoh yang diharapkan:**

```javascript
shuffleString('hello'); // "olleh" atau "lehol" (random shuffle)
shuffleString('abc'); // "bca" atau "cab" (random shuffle)
```

**Tugas:**

1. Temukan semua bug (ada 4)
2. Jelaskan setiap bug
3. Perbaiki kodenya

**Petunjuk:**

1. Math.random() return float, perlu Math.floor()
2. Array index harus integer
3. Return type harus string
4. Algoritma shuffle yang benar (Fisher-Yates atau sederhana)

---

## ✅ Checklist Penilaian

Setiap latihan akan dinilai berdasarkan:

| Kriteria                  | Poin   |
| ------------------------- | ------ |
| Logika algoritma benar    | 4      |
| Syntax JavaScript benar   | 2      |
| Edge case ditangani       | 2      |
| Code readability & naming | 2      |
| **Total**                 | **10** |

---

## 📤 Cara Submit Jawaban

Ketik: **"Saya sudah selesai mengerjakan Latihan [X]"**  
Lalu paste kodemu di sini.

Saya akan:

1. Review kodemu
2. Berikan feedback
3. Beri nilai 1-10
4. Berikan insight untuk perbaikan

---

## 💡 Tips Mengerjakan

1. **Pahami masalah dulu** - Baca deskripsi 2-3 kali
2. **Break down** - Pecah masalah besar jadi langkah-langkah kecil
3. **Pseudo-code** - Tulis logika dalam bahasa Indonesia dulu
4. **Test manual** - Trace kode dengan contoh input di kertas
5. **Handle edge case** - Pikirkan input aneh (kosong, null, sangat panjang)
6. **Integrasi Math** - Untuk soal random, pahami dulu konsep Math.random() dan Math.floor()

---

## 🔗 Integrasi Hari 2 (Math) dengan Hari 3 (String)

Beberapa soal di atas menggabungkan konsep:

| Konsep Hari 2       | Konsep Hari 3        | Integrasi                         |
| ------------------- | -------------------- | --------------------------------- |
| `Math.random()`     | `split()`, `slice()` | Pick random character dari string |
| `Math.floor()`      | Array indexing       | Akses elemen array random         |
| Operator aritmatika | Template literal     | Format output dinamis             |
| Logika `&&`, `\|\|` | String validation    | Validasi input kompleks           |

---

**Selamat Mengerjakan! 🚀**

> 💡 **Remember:** Di dunia kerja, yang penting bukan seberapa cepat kamu coding, tapi seberapa baik kamu **memahami masalah** sebelum coding. Pola pikir algoritma > hafalan syntax!

> 🎯 **Focus:** Kuasai pola pikir logika DULU, kode akan mengikuti dengan sendirinya.
