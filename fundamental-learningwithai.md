# 🤖 Fundamental JavaScript: Metode Learning with AI

> **Panduan Harian:** Gunakan file ini sebagai peta jalan belajar Anda selama 30 hari. Materi ini mencakup **seluruh topik** dari `cepat-paham.md` (Fundamental, Advanced, Web Dev, hingga Node.js & CS).

---

## 📅 Action Plan: 30 Hari Belajar dengan AI (Workflow Detail)

Bagian ini adalah panduan harian Anda. Jangan bingung, ikuti saja langkah per langkah.

### 🔄 Workflow Harian (Lakukan ini setiap hari)

Setiap hari, alokasikan waktu 30-60 menit. Ikuti siklus ini:

1.  **Cek Jadwal:** Lihat topik hari ini di tabel bawah.
2.  **Minta Teori (10 menit):** Gunakan prompt *"Jelaskan konsep [Topik Hari Ini] untuk pemula dengan analogi sehari-hari"*. Baca penjelasannya.
3.  **Minta Contoh (5 menit):** Gunakan prompt *"Berikan contoh kode sederhana penggunaan [Topik Hari Ini]"*.
4.  **Praktek (30 menit):**
    *   Ketik ulang kode contoh (jangan copy-paste).
    *   Eksperimen: Ganti variabelnya, ubah nilainya.
    *   Minta tantangan: *"Buatkan soal latihan coding sederhana tentang [Topik Hari Ini]"*.
5.  **Review (5 menit):** Jika ada error, copy error-nya dan tanya AI: *"Kenapa kode ini error?"*.

---

### 🗓️ Jadwal 30 Hari

#### **Minggu 1: JavaScript Core (Fondasi & Logika)**
*Mencakup: String, Number, Control Flow, Functions, Scope.*

*   **Hari 1:** **Variable & Tipe Data.** `let`, `const`, String, Number, Boolean.
*   **Hari 2:** **Math & Logic.** Operator aritmatika, `Math.floor/random`, Logika `&&`, `||`, `!`.
*   **Hari 3:** **String Manipulation.** `slice`, `split`, `replace`, `includes`, `Template Literals`.
*   **Hari 4:** **Control Flow.** `if/else`, `switch`, Truthy/Falsy values.
*   **Hari 5:** **Loops.** `for`, `while`, `break`, `continue`.
*   **Hari 6:** **Functions.** Function Declaration, Expression, Arrow Function.
*   **Hari 7:** **Scope & Closures.** Global vs Local scope, konsep Closure, IIFE.

#### **Minggu 2: Data Structures & Modern JS**
*Mencakup: Array, Object, JSON, ES6+, Modules.*

*   **Hari 8:** **Array Basics.** `push`, `pop`, `shift`, `unshift`, `slice`, `splice`.
*   **Hari 9:** **Array Power Methods.** `map`, `filter`, `reduce`, `sort`, `find`.
*   **Hari 10:** **Object Mastery.** `Object.keys`, `values`, `entries`, `freeze`, `assign`.
*   **Hari 11:** **JSON & Data.** `JSON.stringify`, `JSON.parse`, Deep vs Shallow Copy.
*   **Hari 12:** **ES6+ Features.** Destructuring, Spread/Rest Operator, Optional Chaining `?.`, Nullish Coalescing `??`.
*   **Hari 13:** **Advanced Functions.** Keyword `this` (call/apply/bind), Modules (`import`/`export`).
*   **Hari 14:** **Mini Project 1:** Sistem Manajemen Data (CRUD sederhana di memori).

#### **Minggu 3: OOP, Async & Web APIs**
*Mencakup: Classes, Error Handling, Async, DOM, Storage.*

*   **Hari 15:** **OOP JavaScript.** `class`, `constructor`, `extends`, `super`, `static`.
*   **Hari 16:** **Error Handling & Regex.** `try...catch`, `throw`, Custom Error, Regex dasar (`test`, `match`).
*   **Hari 17:** **Asynchronous Concept.** Callback, Event Loop, Promise (`.then`, `.catch`).
*   **Hari 18:** **Modern Async.** `async/await`, `Promise.all`, `fetch` API (HTTP Methods).
*   **Hari 19:** **DOM Manipulation.** `querySelector`, `innerHTML`, `classList`, `createElement`.
*   **Hari 20:** **Events & Storage.** `addEventListener`, Event Delegation, `localStorage`, `sessionStorage`.
*   **Hari 21:** **Mini Project 2:** Aplikasi Web Interaktif (misal: Todo List dengan Storage).

#### **Minggu 4: Production Ready & Advanced Topics**
*Mencakup: Performance, Security, CS Fundamentals, Node.js, TS.*

*   **Hari 22:** **Performance.** Konsep `Debounce`, `Throttle`, dan `Memoization`.
*   **Hari 23:** **Security & Git.** XSS, CSRF, Input Validation, Git Basics (`add`, `commit`, `push`).
*   **Hari 24:** **Testing.** Konsep Unit Testing (Jest basics), Debugging strategies.
*   **Hari 25:** **CS Fundamentals 1.** Big O Notation, Stack, Queue.
*   **Hari 26:** **CS Fundamentals 2.** Linked List, Basic Algorithms.
*   **Hari 27:** **TypeScript Intro.** Basic Types, Interfaces, Type Safety.
*   **Hari 28:** **Node.js Intro.** Runtime environment, File System (`fs`), Simple HTTP Server.
*   **Hari 29:** **Final Project:** Integrasi Frontend + Mock API/Logic kompleks.
*   **Hari 30:** **Review & Next Steps.** Refactoring Final Project, Code Review dengan AI.

---

## 💬 Contoh Prompting dengan AI

Gunakan template prompt di bawah ini untuk berinteraksi dengan AI (ChatGPT/Claude/Gemini) sesuai kebutuhan belajar Anda. Ganti bagian di dalam kurung `[...]` sesuai topik yang sedang dipelajari.

### 1. Prompt Memahami Konsep dan Analogi
*Gunakan ini saat baru memulai topik baru agar paham gambaran besarnya.*

```text
[Role] Bertindaklah sebagai Guru SD yang mengajar coding.
[Context] Saya sedang belajar topik [Topik: Misal "Array"].
[Instruction] Jelaskan konsep [Topik] ini kepada saya menggunakan analogi dunia nyata yang sangat sederhana (seperti kotak mainan, kereta api, atau resep masakan).
[Purpose] Agar saya bisa membayangkan bagaimana cara kerjanya sebelum melihat kodenya.
```

### 2. Prompt Deep Dive (Masalah Umum)
*Gunakan ini untuk memahami "kenapa" dan "bagaimana" di balik layar, atau jebakan umum.*

```text
[Role] Senior JavaScript Developer.
[Instruction] Jelaskan secara mendalam tentang [Topik: Misal "Asynchronous JavaScript"].
[Deep Dive] Apa masalah umum atau kesalahpahaman yang sering dialami pemula di topik ini? Kenapa hal itu terjadi?
[Solution] Berikan contoh kode "Salah" vs "Benar" dan jelaskan perbedaannya.
```

### 3. Prompt Analogi Visual
*Gunakan ini jika Anda tipe pembelajar visual.*

```text
[Role] Desainer Instruksional.
[Instruction] Saya kesulitan memahami perbedaan antara [Konsep A: map] dan [Konsep B: forEach].
[Visual] Bisakah kamu mendeskripsikan sebuah diagram atau ilustrasi visual (menggunakan teks/ascii art) yang menggambarkan alur kerja keduanya?
[Comparison] Buat tabel perbandingan sederhana antara keduanya.
```

### 4. Prompt Merancang Data
*Gunakan ini sebelum mulai coding project untuk memastikan struktur data Anda benar.*

```text
[Role] Software Architect.
[Task] Bantu saya merancang struktur data untuk aplikasi [Nama App: Misal "Manajemen Perpustakaan"].
[Requirements]
- Aplikasi ini butuh menyimpan data Buku (judul, penulis, stok).
- Data Anggota (nama, ID, buku yang dipinjam).
- Riwayat Peminjaman.
[Output] Tuliskan contoh struktur data JSON yang efisien untuk kasus ini. Jelaskan kenapa struktur ini dipilih.
```

### 5. Prompt Simulasi
*Gunakan ini untuk latihan mental atau roleplay interview.*

```text
[Role] Interviewer Kerja.
[Context] Saya sedang melamar posisi Junior Frontend Developer.
[Task] Berikan saya satu soal studi kasus coding tentang [Topik: Misal "DOM Manipulation"].
[Instruction] Jangan berikan jawabannya dulu. Biarkan saya mencoba menjawab dengan kode saya, lalu koreksi jawaban saya dan berikan nilai 1-10.
```

### 6. Prompt Debugging (Mencari Error Code)
*Gunakan ini saat kode Anda error atau tidak jalan.*

```text
[Role] Debugger Expert.
[Context] Kode saya error atau tidak berjalan sesuai keinginan.
[Error Message] (Paste error di sini jika ada, misal: "TypeError: Cannot read property of undefined")
[Code Snippet]
```javascript
// Paste kode Anda di sini
const data = null;
console.log(data.length);
```
[Instruction] Lakukan analisis "Chain of Thought" (berpikir langkah demi langkah):
1. Analisis apa yang kode ini coba lakukan.
2. Telusuri baris per baris di mana kemungkinan error terjadi.
3. Jelaskan penyebab error dengan bahasa sederhana.
4. Berikan kode perbaikan yang benar.
```

### 🐛 Prompt Debugging (Infinite Loop)
```text
Browser saya hang/crash saat menjalankan kode ini:

let i = 0;
while (i < 10) {
  console.log(i);
}

Analisis mengapa terjadi Infinite Loop. Apa yang kurang dalam blok `while` tersebut? (Hint: Increment).
```
---

> **💡 Tips Terakhir:**
> Konsistensi > Intensitas. Lebih baik belajar 30 menit setiap hari daripada 5 jam tapi cuma seminggu sekali. Gunakan AI saat Anda *stuck*, tapi pastikan Anda mengerti solusinya sebelum lanjut.