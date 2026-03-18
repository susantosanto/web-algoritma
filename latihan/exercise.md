# 📅 Hari 2: Math & Logic - Latihan Algoritma & Debugging

> **Role:** Interviewer Kerja  
> **Posisi:** Junior Frontend Developer  
> **Topik:** Operator Aritmatika, `Math.floor()`, `Math.random()`, Logika `&&`, `||`, `!`

---

## 🎯 Cara Mengerjakan

1. Kerjakan **satu latihan pada satu waktu**
2. Tulis kodemu di file terpisah (misal: `latihan/hari2-solusi.js`)
3. Share kodemu untuk setiap latihan
4. Saya akan evaluasi dan beri nilai 1-10
5. **Jangan lihat jawaban** sebelum mencoba sendiri!

---

## 📝 LATIHAN CODING

### Latihan 1: Generator OTP (One-Time Password)

**Deskripsi:**  
Buat fungsi `generateOTP(length)` yang menghasilkan kode OTP berupa angka random dengan panjang digit yang ditentukan.

**Contoh:**
```javascript
generateOTP(4) // "5832" (contoh, akan berbeda setiap kali)
generateOTP(6) // "183947"
```

**Langkah Implementasi (Ikuti logika ini):**
1. Tentukan string yang berisi digit angka 0-9
2. Inisialisasi string kosong untuk menampung hasil OTP
3. Loop sebanyak `length` parameter:
   - Generate index random dari string digit
   - Ambil karakter pada index tersebut
   - Tambahkan ke hasil OTP
4. Return hasil OTP

**Constraint:** Harus menggunakan `Math.floor()` dan `Math.random()`

---

### Latihan 2: Tebak Angka

**Deskripsi:**  
Buat fungsi `tebakAngka(tebakan, angkaRahasia)` yang mengembalikan pesan berdasarkan tebakan user.

**Aturan:**
- Jika tebakan **sama dengan** angkaRahasia → "🎉 Selamat! Jawaban Anda benar!"
- Jika tebakan **lebih besar** dari angkaRahasia → "Terlalu tinggi, coba lagi!"
- Jika tebakan **lebih kecil** dari angkaRahasia → "Terlalu rendah, coba lagi!"
- Jika input **bukan angka** → "Input harus berupa angka!"

**Contoh:**
```javascript
tebakAngka(5, 5)   // "🎉 Selamat! Jawaban Anda benar!"
tebakAngka(8, 5)   // "Terlalu tinggi, coba lagi!"
tebakAngka(2, 5)   // "Terlalu rendah, coba lagi!"
tebakAngka("a", 5) // "Input harus berupa angka!"
```

**Langkah Implementasi (Ikuti logika ini):**
1. Validasi input `tebakan` menggunakan `typeof` atau `isNaN()`
2. Gunakan operator perbandingan (`>`, `<`, `===`)
3. Gunakan `if...else if...else` untuk kondisi
4. Return pesan yang sesuai

---

### Latihan 3: Kalkulator Diskon

**Deskripsi:**  
Buat fungsi `hitungDiskon(harga, jenisMember)` yang menghitung harga akhir setelah diskon.

**Aturan Diskon:**
| Jenis Member | Diskon |
|--------------|--------|
| "gold"       | 20%    |
| "silver"     | 15%    |
| "bronze"     | 10%    |
| Lainnya      | 0%     |

**Contoh:**
```javascript
hitungDiskon(100000, "gold")   // 80000
hitungDiskon(100000, "silver") // 85000
hitungDiskon(100000, "bronze") // 90000
hitungDiskon(100000, "none")   // 100000
```

**Langkah Implementasi (Ikuti logika ini):**
1. Tentukan persentase diskon berdasarkan `jenisMember`
2. Gunakan `if...else if...else` atau `switch` untuk cek jenis member
3. Hitung nilai diskon: `harga * (persenDiskon / 100)`
4. Hitung harga akhir: `harga - nilaiDiskon`
5. Return harga akhir (gunakan `Math.floor()` untuk bulatkan)

---

### Latihan 4: Validasi Login Sederhana

**Deskripsi:**  
Buat fungsi `validasiLogin(username, password)` yang mengecek apakah login berhasil.

**Aturan:**
- Username harus **minimal 5 karakter**
- Password harus **minimal 8 karakter** dan **mengandung angka**
- Return object: `{ success: boolean, message: string }`

**Contoh:**
```javascript
validasiLogin("user", "pass1234")  
// { success: false, message: "Username minimal 5 karakter" }

validasiLogin("user123", "pass")  
// { success: false, message: "Password minimal 8 karakter" }

validasiLogin("user123", "password")  
// { success: false, message: "Password harus mengandung angka" }

validasiLogin("user123", "pass1234")  
// { success: true, message: "Login berhasil!" }
```

**Langkah Implementasi (Ikuti logika ini):**
1. Cek panjang `username` menggunakan `.length`
2. Cek panjang `password` menggunakan `.length`
3. Cek apakah `password` mengandung angka (gunakan regex atau loop)
4. Gunakan operator logika `&&`, `||`, `!` untuk kombinasi kondisi
5. Return object dengan properti `success` dan `message`

---

## 🐛 LATIHAN DEBUGGING

### Debugging 1: Random Number Generator

**Temukan bug dalam kode berikut:**

```javascript
function getRandomNumber(min, max) {
    let random = Math.random() * (max - min) + min;
    return Math.ceil(random);
}
```

**Masalah:** Fungsi ini tidak pernah menghasilkan angka `max`.  
**Tugas:** 
1. Identifikasi baris yang salah
2. Jelaskan kenapa ini salah
3. Perbaiki kodenya

**Petunjuk:** Perhatikan rumus range dan fungsi pembulatan.

---

### Debugging 2: Cek Bilangan Genap

**Temukan 3 bug dalam kode berikut:**

```javascript
function isEven(num) {
    if (num % 2 = 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}
```

**Tugas:**
1. Temukan semua bug (ada 3)
2. Jelaskan setiap bug
3. Perbaiki kodenya

**Petunjuk:** Operator assignment vs comparison, tipe data return.

---

### Debugging 3: Kalkulator BMI

**Temukan 2 bug dalam kode berikut:**

```javascript
function hitungBMI(berat, tinggi) {
    // BMI = berat / (tinggi * tinggi)
    // tinggi dalam meter
    let bmi = berat / tinggi * 2;
    
    if (bmi < 18.5) {
        return "Kurus";
    } else if (bmi >= 18.5 || bmi < 25) {
        return "Normal";
    } else {
        return "Gemuk";
    }
}
```

**Tugas:**
1. Temukan bug logika matematika
2. Temukan bug logika kondisi
3. Perbaiki kodenya

**Petunjuk:** Urutan operasi matematika dan operator logika yang tepat.

---

### Debugging 4: Validasi Email Sederhana

**Temukan 2 bug dalam kode berikut:**

```javascript
function validasiEmail(email) {
    if (!email.includes("@")) {
        return true;
    }
    
    if (email.length < 5) {
        return true;
    }
    
    return false;
}
```

**Tugas:**
1. Temukan bug logika validasi
2. Jelaskan kenapa ini salah
3. Perbaiki kodenya

**Petunjuk:** Logika return `true`/`false` terbalik.

---

## ✅ Checklist Penilaian

Setiap latihan akan dinilai berdasarkan:

| Kriteria | Poin |
|----------|------|
| Logika benar | 4 |
| Syntax benar | 2 |
| Edge case ditangani | 2 |
| Code readability | 2 |
| **Total** | **10** |

---

## 📤 Cara Submit Jawaban

Ketik: **"Saya sudah selesai mengerjakan Latihan [X]"**  
Lalu paste kodemu di sini.

Saya akan:
1. Review kodemu
2. Berikan feedback
3. Beri nilai 1-10
4. Berikan latihan berikutnya

---

**Selamat Mengerjakan! 🚀**

> 💡 **Tips:** Jangan terburu-buru. Pahami logika dulu, baru tulis kode. Debugging adalah skill yang sama pentingnya dengan coding!
