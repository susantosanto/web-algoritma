# 🏗️ FRAMEWORK ARSITEKTUR APLIKASI UNTUK VIBE CODER

> **Tujuan**: Membantu kamu memahami arsitektur aplikasi dari dasar hingga semi-kompleks, sehingga bisa berkomunikasi dengan AI agent untuk membangun aplikasi yang terstruktur.

> **Penting**: Framework ini menjelaskan ARSITEKTUR dalam bahasa manusia, bukan istilah teknis yang membingungkan. Kamu tidak perlu jadi ahli arsitektur untuk membangun aplikasi yang bagus.

---

## 🎯 PENGERTIAN DASAR

### **Apa itu Arsitektur Aplikasi?**

```
ARSITEKTUR = "Cara mengatur bagian-bagian aplikasi agar bisa bekerja sama dengan baik."

Bayangkan seperti MEMBANGUN RUMAH:
- Fondasi = Database
- Dinding = Backend Logic
- Jendela = API
- Cat & Dekorasi = Frontend
- Listrik & Air = Integrasi (Email, Payment, dll)

Tanpa arsitektur yang baik:
- Rumah bisa roboh (aplikasi crash)
- Tidak bisa dikembangkan (sulit tambah fitur)
- Tidak nyaman dipakai (performa buruk)
```

### **Mengapa Vibe Coder Perlu Paham Arsitektur?**

```
Karena AI agent (seperti saya) akan bertanya:
"Bagaimana arsitektur yang kamu mau?"

Kalau kamu tidak paham:
→ Jawabanmu tidak jelas
→ AI membuat asumsi yang salah
→ Hasilnya tidak sesuai keinginan

Kalau kamu paham:
→ Jawabanmu spesifik
→ AI mengerti kebutuhanmu
→ Hasilnya sesuai ekspektasi
```

---

## 📐 5 LEVEL ARSITEKTUR (Dari Sederhana ke Kompleks)

### **LEVEL 1: MONOLITH SEDERHANA**
```
Untuk: Aplikasi kecil, MVP, prototype
Contoh: To-do list, landing page, calculator

Struktur:
┌─────────────────────────────────┐
│           APLIKASI              │
│  ┌─────────────────────────┐   │
│  │      Frontend           │   │
│  │  (HTML, CSS, JS)        │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │      Backend            │   │
│  │  (Logic, Database)      │   │
│  └─────────────────────────┘   │
└─────────────────────────────────┘

Karakteristik:
- Semua kode di SATU tempat
- Tidak ada pemisahan yang rumit
- Mudah dibuat dan dipahami
- Cocok untuk 1-2 fitur saja
```

**Kapan pakai Level 1:**
- ✅ Belajar membuat aplikasi pertama
- ✅ Membuat MVP (Minimum Viable Product)
- ✅ Aplikasi untuk diri sendiri
- ✅ Prototype untuk presentasi
- ❌ Jika butuh banyak fitur
- ❌ Jika akan dipakai banyak user

---

### **LEVEL 2: MONOLITH TERSTRUKTUR**
```
Untuk: Aplikasi sedang, 3-10 fitur
Contoh: Blog, e-commerce sederhana, portofolio

Struktur:
┌─────────────────────────────────────┐
│             APLIKASI                │
│  ┌─────────────────────────────┐   │
│  │         Frontend            │   │
│  │  ┌───────┐ ┌───────┐      │   │
│  │  │ Pages │ │Components│     │   │
│  │  └───────┘ └───────┘      │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │         Backend             │   │
│  │  ┌───────┐ ┌───────┐      │   │
│  │  │Routes │ │Controllers│    │   │
│  │  └───────┘ └───────┘      │   │
│  │  ┌───────┐ ┌───────┐      │   │
│  │  │Models │ │Services│      │   │
│  │  └───────┘ └───────┘      │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │         Database            │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘

Karakteristik:
- Masih di SATU aplikasi
- Tapi sudah DIPECAH berdasarkan FUNGSI
- Lebih rapi dan mudah dikelola
- Cocok untuk tim kecil (1-3 orang)
```

**Kapan pakai Level 2:**
- ✅ Aplikasi untuk klien kecil
- ✅ Startup dengan fitur yang jelas
- ✅ Aplikasi yang akan dipakai 10-1000 user
- ❌ Jika butuh banyak team
- ❌ Jika performa sangat kritis

---

### **LEVEL 3: LAYERED ARCHITECTURE**
```
Untuk: Aplikasi yang butuh fleksibilitas
Contoh: Aplikasi bisnis, CRM, sistem internal

Struktur:
┌─────────────────────────────────────┐
│         PRESENTATION LAYER         │
│    (UI, Pages, Components)         │
└─────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│         APPLICATION LAYER           │
│    (Use Cases, Business Logic)      │
└─────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│         DOMAIN LAYER                │
│    (Entities, Business Rules)       │
└─────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│         INFRASTRUCTURE LAYER        │
│    (Database, External Services)    │
└─────────────────────────────────────┘

Karakteristik:
- Setiap layer punya TUGAS SENDIRI
- Layer atas tidak langsung akses layer bawah
- Mudah diubah per layer
- Lebih terstruktur dan maintainable
```

**Penjelasan Tiap Layer:**
```
1. PRESENTATION LAYER (Tampilan)
   - Apa yang dilihat user
   - Button, form, list, dll
   - TIDAK ada logika bisnis di sini

2. APPLICATION LAYER (Orkestrasi)
   - Mengatur alur kerja
   - Memanggil service yang tepat
   - Mengkoordinasi beberapa operasi

3. DOMAIN LAYER (Inti Bisnis)
   - Aturan bisnis yang PALING PENTING
   - Data structure utama
   - Validation rules

4. INFRASTRUCTURE LAYER (Teknis)
   - Database operations
   - API calls ke layanan eksternal
   - File operations
```

---

### **LEVEL 4: COMPONENT-BASED ARCHITECTURE**
```
Untuk: Aplikasi modern dengan banyak fitur
Contoh: Social media, marketplace, SaaS

Struktur:
┌─────────────────────────────────────────┐
│              APLIKASI                   │
│  ┌─────────────┐  ┌─────────────┐     │
│  │   MODULE A   │  │   MODULE B   │    │
│  │  (User)      │  │  (Product)   │    │
│  │  ┌────────┐  │  │  ┌────────┐  │   │
│  │  │Component│  │  │  │Component│  │   │
│  │  │Component│  │  │  │Component│  │   │
│  │  └────────┘  │  │  └────────┘  │   │
│  └─────────────┘  └─────────────┘     │
│  ┌─────────────┐  ┌─────────────┐     │
│  │   MODULE C   │  │   MODULE D   │    │
│  │  (Order)     │  │  (Payment)   │    │
│  │  ┌────────┐  │  │  ┌────────┐  │   │
│  │  │Component│  │  │  │Component│  │   │
│  │  └────────┘  │  │  └────────┘  │   │
│  └─────────────┘  └─────────────┘     │
└─────────────────────────────────────────┘

Karakteristik:
- Aplikasi dipecah jadi MODULE/MODULE kecil
- Tiap module bisa dikerjakan TIM BERBEDA
- Module bisa di-reuse di tempat lain
- Lebih scalable dan maintainable
```

**Penjelasan Komponen:**
```
MODULE = Fitur utama (User, Product, Order, Payment)
COMPONENT = Bagian kecil dari module (Form, Button, List)

Contoh Module "User":
├── UserModule
│   ├── RegisterForm (Component)
│   ├── LoginForm (Component)
│   ├── UserProfile (Component)
│   └── UserList (Component)
```

---

### **LEVEL 5: MICROSERVICES (SEMI-KOMPLEKS)**
```
Untuk: Aplikasi besar, banyak tim, high traffic
Contoh: Gojek, Shopee, Netflix

Struktur:
┌──────────┐  ┌──────────┐  ┌──────────┐
│ Service A │  │ Service B │  │ Service C │
│  (User)   │  │  (Order)  │  │(Payment) │
└────┬─────┘  └────┬─────┘  └────┬─────┘
     │              │              │
     └──────────────┼──────────────┘
                    │
              ┌─────▼─────┐
              │    API     │
              │   Gateway  │
              └─────┬─────┘
                    │
        ┌───────────┼───────────┐
        │           │           │
   ┌────▼───┐  ┌────▼───┐  ┌────▼───┐
   │ DB A   │  │ DB B   │  │ DB C   │
   └────────┘  └────────┘  └────────┘

Karakteristik:
- Setiap service = APLIKASI TERPISAH
- Bisa pakai bahasa/b teknologi berbeda
- Bisa di-deploy secara terpisah
- Sangat scalable
```

**Kapan pakai Level 5:**
- ✅ Aplikasi dengan jutaan user
- ✅ Banyak tim yang bekerja bersamaan
- ✅ Butuh scaling yang agresif
- ❌ Terlalu kompleks untuk aplikasi kecil
- ❌ Butuh infrastruktur dan DevOps yang mumpuni

---

## 🎯 KOMPONEN ARSITEKTUR (BAGIAN-BAGIAN YANG HARUS DIPAHAMI)

### **1. FRONTEND (Tampilan)**

```
Apa itu: Apa yang DILIHAT dan DIKLIK oleh user

Bagian-bagian:
┌─────────────────────────────────────┐
│              FRONTEND               │
│  ┌─────────────────────────────┐   │
│  │           PAGES             │   │
│  │  Halaman-halaman aplikasi   │   │
│  │  (Home, About, Contact)     │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │        COMPONENTS           │   │
│  │  Bagian kecil yang dipakai  │   │
│  │  berulang (Button, Card)    │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │          STATE              │   │
│  │  Data yang berubah-ubah     │   │
│  │  (Cart, User Login, etc)    │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │         STYLING             │   │
│  │  Tampilan visual            │   │
│  │  (Colors, Layout, Font)     │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘

Yang perlu kamu pahami:
- Pages = Halaman yang bisa diakses user
- Components = Blok bangunan yang bisa dipakai ulang
- State = "Memori" aplikasi saat ini
- Styling = "Cat" yang membuat cantik
```

---

### **2. BACKEND (Logika)**

```
Apa itu: "Otak" yang memproses semua permintaan

Bagian-bagian:
┌─────────────────────────────────────┐
│              BACKEND                │
│  ┌─────────────────────────────┐   │
│  │           ROUTES            │   │
│  │  "Jalan" untuk mencapai     │   │
│  │  fungsi tertentu            │   │
│  │  (/api/users, /api/orders)  │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │        CONTROLLERS          │   │
│  │  Menerima request,          │   │
│  │  memanggil service,         │   │
│  │  mengembalikan response     │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │         SERVICES            │   │
│  │  Logika bisnis utama        │   │
│  │  (Proses order, Validasi)   │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │          MODELS             │   │
│  │  Struktur data &            │   │
│  │  interaksi database         │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘

Yang perlu kamu pahami:
- Routes = Alamat/URL yang bisa dipanggil
- Controllers = Penerima tamu (request)
- Services = Pekerja yang melakukan tugas
- Models = Model data yang disimpan
```

---

### **3. DATABASE (Penyimpanan)**

```
Apa itu: "Gudang" tempat menyimpan semua data

Jenis Database:
┌─────────────────────────────────────┐
│           DATABASE                  │
│                                     │
│  ┌─────────────────────────────┐   │
│  │    RELATIONAL (SQL)         │   │
│  │  Data disimpan dalam        │   │
│  │  TABEL (seperti Excel)      │   │
│  │  Contoh: MySQL, PostgreSQL  │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │    DOCUMENT (NoSQL)         │   │
│  │  Data disimpan dalam        │   │
│  │  DOCUMENT (seperti JSON)    │   │
│  │  Contoh: MongoDB, Firebase  │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘

Yang perlu kamu pahami:
- Database = Tempat data DISIMPAN permanen
- Tanpa database = data hilang saat refresh
- SQL = Pakai tabel dengan hubungan (relasi)
- NoSQL = Pakai dokumen/fleksibel
```

---

### **4. API (Penghubung)**

```
Apa itu: "Telepon" antara frontend dan backend

Cara Kerja:
┌──────────┐                        ┌──────────┐
│ Frontend │  ──── Request ────►    │ Backend  │
│          │                        │          │
│          │  ◄──── Response ────   │          │
└──────────┘                        └──────────┘
        │                                  │
        │         Melalui API              │
        │         (HTTP/HTTPS)             │
        │                                  │

Jenis Request:
- GET    = Ambil data
- POST   = Buat data baru
- PUT    = Update data
- DELETE = Hapus data

Contoh API:
GET /api/users       → Ambil semua user
POST /api/users      → Buat user baru
GET /api/users/123   → Ambil user id 123
PUT /api/users/123   → Update user id 123
DELETE /api/users/123 → Hapus user id 123
```

---

### **5. AUTHENTICATION (Keamanan)**

```
Apa itu: "Satpam" yang menjaga siapa yang boleh masuk

Alur Login:
┌──────────┐     ┌──────────┐     ┌──────────┐
│   User   │     │ Frontend │     │ Backend  │
└────┬─────┘     └────┬─────┘     └────┬─────┘
     │                │                │
     │ 1. Input      │                │
     │    Email &    │                │
     │    Password   │                │
     │──────────────►│                │
     │                │ 2. Kirim ke   │
     │                │    Backend    │
     │                │──────────────►│
     │                │                │ 3. Cek di
     │                │                │    Database
     │                │                │
     │                │ 4. Kirim      │
     │                │    Token      │
     │                │◄──────────────│
     │ 5. Simpan     │                │
     │    Token      │                │
     │◄──────────────│                │
     │                │                │

Yang perlu kamu pahami:
- Authentication = MEMASTIKAN kamu adalah kamu
- Authorization = MEMASTIKAN kamu BOLEH melakukan X
- Token = "Tiket masuk" yang berlaku terbatas
- Password = TIDAK PERNAH disimpan langsung (di-hash)
```

---

### **6. STATE MANAGEMENT (Manajemen Status)**

```
Apa itu: "Memori" yang menyimpan data penting

Contoh State:
┌─────────────────────────────────────┐
│            STATE APLIKASI           │
│                                     │
│  ┌─────────────────────────────┐   │
│  │      USER STATE             │   │
│  │  - isLogin: true            │   │
│  │  - nama: "Budi"             │   │
│  │  - email: "budi@mail.com"   │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │      CART STATE             │   │
│  │  - items: [...]             │   │
│  │  - totalHarga: 50000        │   │
│  │  - jumlahItem: 3            │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │      UI STATE               │   │
│  │  - isLoading: false         │   │
│  │  - isSidebarOpen: true      │   │
│  │  - theme: "dark"            │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘

Yang perlu kamu pahami:
- State = DATA yang BERUBAH-UBAH
- Tanpa state management = data berantakan
- State harus di-UPDATE dengan cara yang BENAR
- Terlalu banyak state = susah dikelola
```

---

## 🎯 CARA BERKOMUNIKASI DENGAN AI AGENT

### **Template Bertanya ke AI Agent**

```
KETIKA MEMULAI PROYEK:
"AI, saya ingin membuat [AplIKASI APA] dengan fitur:
1. [Fitur 1]
2. [Fitur 2]
3. [Fitur 3]

Arsitektur yang saya inginkan:
- Frontend: [Teknologi, misal React, Vue, HTML/CSS]
- Backend: [Teknologi, misal Node.js, Python]
- Database: [Jenis, misal SQL/NoSQL]
- Authentication: [Ya/Tidak]

Tolong buatkan struktur folder dan penjelasan arsitekturnya."

KETIKA MEMBANGUN FITUR:
"AI, saya ingin membuat fitur [NAMA FITUR]:
- Input: [data apa yang masuk]
- Proses: [apa yang harus dilakukan]
- Output: [hasil apa yang diharapkan]
- Storage: [perlu disimpan atau tidak]

Tolong buatkan kodenya dengan penjelasan."

KETIKA DEBUG:
"AI, saya ada error:
- Error message: [pesan error]
- Kode yang error: [tempel kode]
- Yang saya harapkan: [apa yang seharusnya terjadi]
- Yang terjadi: [apa yang sebenarnya terjadi]

Tolong bantu cari solusinya."

KETIKA REVIEW:
"AI, tolong review arsitektur aplikasi saya:
[Tempel struktur folder atau penjelasan arsitektur]

Apakah ada yang perlu diperbaiki?
Apakah ada yang bisa dioptimasi?
Apakah ada potensi masalah di masa depan?"
```

---

## 🏗️ FRAMEWORK MEMBANGUN ARSITEKTUR

### **LANGKAH 1: IDENTIFIKASI KEBUTUHAN**

```
Tanya pada diri sendiri:

1.1. APA APLIKASI INI?
     - Tujuan: untuk apa aplikasi ini?
     - User: siapa yang akan pakai?
     - Fitur utama: apa yang harus bisa dilakukan?

1.2. BERAPA BESAR APLIKASI INI?
     - Jumlah user: puluhan? ribuan? jutaan?
     - Jumlah fitur: sederhana? banyak? kompleks?
     - Tim: sendiri? kecil? besar?

1.3. APA TEKNOLOGI YANG DIGUNAKAN?
     - Frontend: React? Vue? Svelte? HTML/CSS?
     - Backend: Node.js? Python? Go?
     - Database: SQL? NoSQL? Keduanya?

1.4. APA CONSTRAINTS?
     - Budget: ada biaya hosting?
     - Timeline: kapan harus selesai?
     - Skill: kemampuan tim?
```

---

### **LANGKAH 2: TENTUKAN LEVEL ARSITEKTUR**

```
Berdasarkan jawaban di atas, tentukan level:

Level 1 - MONOLITH SEDERHANA:
- ✅ 1-2 fitur saja
- ✅ User < 100
- ✅ Tim 1 orang
- ✅ Prototype/MVP

Level 2 - MONOLITH TERSTRUKTUR:
- ✅ 3-10 fitur
- ✅ User 100-1000
- ✅ Tim 1-3 orang
- ✅ Aplikasi production

Level 3 - LAYERED:
- ✅ 10-30 fitur
- ✅ User 1000-10000
- ✅ Tim 3-10 orang
- ✅ Aplikasi bisnis

Level 4 - COMPONENT-BASED:
- ✅ 30+ fitur
- ✅ User 10000+
- ✅ Tim 10+ orang
- ✅ Platform/SaaS

Level 5 - MICROSERVICES:
- ✅ 100+ fitur
- ✅ User 100000+
- ✅ Tim 50+ orang
- ✅ Enterprise
```

---

### **LANGKAH 3: DESAIN STRUKTUR FOLDER**

```
CONTOH: Level 2 - Monolith Terstruktur (Node.js + React)

my-app/
├── frontend/                  # Tampilan
│   ├── src/
│   │   ├── pages/             # Halaman
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── components/        # Komponen reusable
│   │   │   ├── Header.jsx
│   │   │   ├── Button.jsx
│   │   │   └── Card.jsx
│   │   ├── hooks/             # Fungsi custom
│   │   │   └── useAuth.js
│   │   ├── services/          # Panggil API
│   │   │   └── api.js
│   │   ├── contexts/          # State global
│   │   │   └── AuthContext.js
│   │   └── App.jsx
│   └── package.json
│
├── backend/                   # Logika
│   ├── src/
│   │   ├── routes/            # API endpoints
│   │   │   ├── userRoutes.js
│   │   │   └── orderRoutes.js
│   │   ├── controllers/       # Handle request
│   │   │   ├── userController.js
│   │   │   └── orderController.js
│   │   ├── services/          # Logika bisnis
│   │   │   ├── userService.js
│   │   │   └── orderService.js
│   │   ├── models/            # Struktur data
│   │   │   ├── userModel.js
│   │   │   └── orderModel.js
│   │   ├── middleware/        # Middleware
│   │   │   └── auth.js
│   │   ├── config/            # Konfigurasi
│   │   │   └── database.js
│   │   └── app.js
│   └── package.json
│
├── database/                  # Database
│   ├── migrations/
│   └── seeds/
│
└── docs/                      # Dokumentasi
    └── README.md
```

---

### **LANGKAH 4: DEFINISIKAN TIAP KOMPONEN**

```
Untuk setiap komponen, tulis:

1. NAMA KOMPONEN
2. TUGASNYA (apa yang dilakukan)
3. INPUT (data apa yang diterima)
4. OUTPUT (data apa yang dikembalikan)
5. DEPENDENCY (bergantung pada apa)

CONTOH: User Service

┌─────────────────────────────────────┐
│ NAMA: UserService                   │
│                                     │
│ TUGAS:                              │
│ - Register user baru                │
│ - Login user                        │
│ - Get user profile                  │
│ - Update user profile               │
│                                     │
│ INPUT:                              │
│ - userData: { nama, email, pass }   │
│ - userId: string                    │
│                                     │
│ OUTPUT:                             │
│ - user: { id, nama, email }        │
│ - token: string                     │
│ - success: boolean                  │
│                                     │
│ DEPENDENCY:                         │
│ - UserModel                         │
│ - bcrypt (untuk hash password)      │
│ - jsonwebtoken (untuk token)        │
└─────────────────────────────────────┘
```

---

### **LANGKAH 5: DESAIN ALUR DATA**

```
Untuk setiap fitur, gambar alur datanya:

CONTOH: Fitur Login

┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  User   │    │Frontend │    │Backend  │    │Database │
└────┬────┘    └────┬────┘    └────┬────┘    └────┬────┘
     │              │              │              │
     │ 1. Input    │              │              │
     │ Email+Pass  │              │              │
     │────────────►│              │              │
     │              │              │              │
     │              │ 2. POST     │              │
     │              │ /api/login  │              │
     │              │────────────►│              │
     │              │              │              │
     │              │              │ 3. Cek email │
     │              │              │ di database  │
     │              │              │─────────────►│
     │              │              │              │
     │              │              │ 4. Kirim     │
     │              │              │ user data    │
     │              │              │◄─────────────│
     │              │              │              │
     │              │              │ 5. Verifikasi│
     │              │              │ password     │
     │              │              │              │
     │              │ 6. Kirim    │              │
     │              │ token       │              │
     │              │◄────────────│              │
     │              │              │              │
     │ 7. Simpan   │              │              │
     │ token,      │              │              │
     │ redirect    │              │              │
     │◄────────────│              │              │
     │              │              │              │
```

---

### **LANGKAH 6: IDENTIFIKASI INTEGRASI**

```
Aplikasi sering butuh integrasi dengan layanan eksternal:

JENIS INTEGRASI:
┌─────────────────────────────────────┐
│ 1. AUTHENTICATION                    │
│    - Google OAuth                   │
│    - GitHub Login                   │
│    - Firebase Auth                  │
│                                     │
│ 2. PAYMENT                          │
│    - Stripe                         │
│    - Midtrans                       │
│    - PayPal                         │
│                                     │
│ 3. DATABASE                         │
│    - MongoDB Atlas                  │
│    - PostgreSQL (Supabase)          │
│    - Firebase Firestore             │
│                                     │
│ 4. FILE STORAGE                     │
│    - AWS S3                         │
│    - Cloudinary                     │
│    - Firebase Storage               │
│                                     │
│ 5. EMAIL                            │
│    - SendGrid                       │
│    - Mailgun                        │
│    - Nodemailer                     │
│                                     │
│ 6. ANALYTICS                        │
│    - Google Analytics               │
│    - Mixpanel                       │
│    - PostHog                        │
└─────────────────────────────────────┘

Untuk tiap integrasi, tulis:
- Nama layanan
- Tujuan (untuk apa)
- API Key/Config
- Cara setup
```

---

### **LANGKAH 7: BUAT DOKUMENTASI SEDERHANA**

```
Buat README.md yang berisi:

# Nama Aplikasi

## Deskripsi
Aplikasi ini untuk [tujuan]

## Tech Stack
- Frontend: [teknologi]
- Backend: [teknologi]
- Database: [teknologi]

## Fitur
1. [Fitur 1]
2. [Fitur 2]
3. [Fitur 3]

## Struktur Folder
[Tempel struktur folder]

## Cara Install
[Langkah-langkah install]

## Cara Jalankan
[Langkah-langkah menjalankan]

## Environment Variables
[Variabel yang diperlukan]

## API Endpoints
[List endpoint]

## Deployment
[Cara deploy]
```

---

## 🧠 MENTAL MODEL UNTUK ARSITEKTUR

### **MENTAL MODEL 1: SEPARATION OF CONCERNS**
```
Prinsip: SATU KOMPONEN = SATU TUGAS

Contoh:
- UserComponent → HANYA menampilkan data user
- UserService → HANYA memproses logika user
- UserModel → HANYA berinteraksi dengan database user

JANGAN:
- UserComponent → menampilkan data + proses + database
  (terlalu banyak tanggung jawab, susah dikelola)
```

---

### **MENTAL MODEL 2: SINGLE SOURCE OF TRUTH**
```
Prinsip: Data yang SAMA hanya disimpan di SATU tempat

Contoh:
- Data user hanya ada di DATABASE
- Frontend MENYIMPULAN data dari backend (bukan menyimpan sendiri)
- Jangan ada data user di localStorage DAN database

MENGAPA:
- Jika ada di 2 tempat, bisa TIDAK SYNC
- Update di satu tempat, tidak update di tempat lain
- Confusing untuk developer
```

---

### **MENTAL MODEL 3: ABSTRACTION**
```
Prinsip: Sembunyikan kompleksitas di balik interface yang sederhana

Contoh:
- User tidak perlu tahu bagaimana database bekerja
- User hanya perlu tahu: ada tombol LOGIN
- Di balik tombol itu, ada 10+ langkah kompleks

MENERAPKAN:
- Buat fungsi dengan nama yang jelas
- Sembunyikan detail implementasi
- Expose hanya yang perlu diketahui
```

---

### **MENTAL MODEL 4: LOOSE COUPLING**
```
Prinsip: Komponen harus BERINTERAKSI tapi tidak BERGANTUNG

Contoh:
- Frontend memanggil API /api/users
- Backend menghandle /api/users
- Jika backend berubah, frontend TIDAK BERUBAH (selama API tetap)

CARA:
- Gunakan API/contract yang jelas
- Jangan akses database langsung dari frontend
- Komunikasi melalui interface yang stabil
```

---

### **MENTAL MODEL 5: HIGH COHESION**
```
Prinsip: Bagian yang BERKAITAN harus dekat

Contoh:
- Semua kode yang berhubungan dengan USER ada di folder /user
  - userController.js
  - userService.js
  - userModel.js
  - userRoutes.js

BUKAN:
- userController.js
- orderService.js (punya logic user di dalamnya)
- productModel.js (punya query user)
```

---

## 🎯 CONTOH APLIKASI REAL-WORLD

### **Contoh 1: TO-DO LIST APP (Level 1)**

```
Arsitektur: Monolith Sederhana

Frontend:
- index.html (satu halaman)
- style.css
- app.js

Backend:
- server.js (semua logika di satu file)
- database.json (simpan data)

Fitur:
- Tambah todo
- Tandai selesai
- Hapus todo

API:
- GET /todos → ambil semua
- POST /todos → tambah baru
- PUT /todos/:id → update
- DELETE /todos/:id → hapus
```

---

### **Contoh 2: BLOG APP (Level 2)**

```
Arsitektur: Monolith Terstruktur

Frontend:
├── pages/
│   ├── Home.jsx
│   ├── PostDetail.jsx
│   └── CreatePost.jsx
├── components/
│   ├── Header.jsx
│   ├── PostCard.jsx
│   └── CommentForm.jsx
├── services/
│   └── api.js
└── App.jsx

Backend:
├── routes/
│   ├── postRoutes.js
│   └── commentRoutes.js
├── controllers/
│   ├── postController.js
│   └── commentController.js
├── models/
│   ├── postModel.js
│   └── commentModel.js
├── services/
│   ├── postService.js
│   └── commentService.js
└── app.js

Database:
- posts (id, title, content, authorId, createdAt)
- comments (id, content, postId, authorId, createdAt)
```

---

### **Contoh 3: E-COMMERCE APP (Level 3)**

```
Arsitektur: Layered

Presentation Layer (Frontend):
├── Pages
│   ├── HomePage
│   ├── ProductListPage
│   ├── ProductDetailPage
│   ├── CartPage
│   └── CheckoutPage
├── Components
│   ├── ProductCard
│   ├── CartItem
│   └── CheckoutForm

Application Layer (Services):
├── ProductService
├── CartService
├── OrderService
└── PaymentService

Domain Layer (Models):
├── Product
├── Cart
├── Order
└── User

Infrastructure Layer:
├── Database (MongoDB)
├── Payment Gateway (Stripe)
└── File Storage (Cloudinary)
```

---

## 🚀 CHECKLIST SEBELUM MEMULAI

```
SEBELUM MEMBANGUN APLIKASI:

□ Apakah saya sudah paham TUJUAN aplikasi ini?
□ Apakah saya sudah tahu SIAPA user-nya?
□ Apakah saya sudah tahu FITUR apa saja yang dibutuhkan?
□ Apakah saya sudah pilih LEVEL arsitektur yang tepat?
□ Apakah saya sudah tentukan TECH STACK?
□ Apakah saya sudah buat STRUKTUR FOLDER?
□ Apakah saya sudah identifikasi INTEGRASI yang diperlukan?
□ Apakah saya sudah buat DOKUMENTASI sederhana?
□ Apakah saya sudah siap berkomunikasi dengan AI agent?
```

---

## 💡 PRINSIP UNTUK VIBE CODER

### **1. MULAI KECIL, BESAR NANTI**
```
Jangan langsung bikin aplikasi kompleks.
Mulai dari Level 1, pahami, baru naik ke Level 2.
```

### **2. FOKUS DI USER, BUKAN TEKNOLOGI**
```
Teknologi hanya alat.
Yang penting: apakah user bisa menyelesaikan masalahnya?
```

### **3. JANGAN TAKUT REFACTOR**
```
Arsitektur yang buruk bisa diperbaiki.
Yang penting: mulai dulu, belajar, lalu perbaiki.
```

### **4. DOKUMENTASI ITU PENTING**
```
Tulis apa yang kamu pikirkan.
Nanti (atau AI) yang bantu wujudkan.
```

### **5. KOMUNIKASI DENGAN AI**
```
AI adalah partner, bukan budak.
Jelaskan dengan jelas apa yang kamu mau.
AI akan bantu mewujudkannya.
```

---

## 🎓 LEVEL KEMAMPUAN ARSITEKTUR

### **Level 1: PEMULA**
- [ ] Paham frontend, backend, database
- [ ] Bisa bikin aplikasi monolith sederhana
- [ ] Bisa pakai API sederhana
- [ ] Bisa komunikasi dengan AI agent

### **Level 2: MENENGAH**
- [ ] Bisa bikin monolith terstruktur
- [ ] Paham separation of concerns
- [ ] Bisa design database sederhana
- [ ] Bisa handle authentication

### **Level 3: MAHIR**
- [ ] Bisa bikin layered architecture
- [ ] Paham design patterns
- [ ] Bisa design API yang baik
- [ ] Bisa handle integrasi kompleks

### **Level 4: EXPERT**
- [ ] Bisa bikin component-based architecture
- [ ] Paham microservices
- [ ] Bisa design scalable system
- [ ] Bisa mentoring orang lain

---

## 📚 SUMBER BELAJAR TAMBAHAN

- **Martin Fowler - Patterns of Enterprise Application Architecture**
- **Robert C. Martin - Clean Architecture**
- **Sam Newman - Building Microservices**
- **Google Cloud Architecture Framework**
- **AWS Well-Architected Framework**

---

*Framework ini bukan untuk dihafal, tapi untuk DIAMALKAN.*
*Setiap kali membangun aplikasi, gunakan framework ini.*
*Lama-lama akan menjadi KEBAIASAAN berpikir arsitektur.*

*Terakhir diperbarui: 2026-07-22*
