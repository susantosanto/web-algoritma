# Fundamental Agentic Engineering
## Roadmap Bulan 1: Fondasi & LLM (Large Language Model)

> **Tujuan:** Membangun pemahaman mendalam tentang Agentic Engineering mulai dari fondasi hingga pemahaman LLM yang kuat. Dokumen ini dirancang untuk pemula yang ingin memasuki dunia AI Agent dengan pendekatan terstruktur dan mudah dipahami.

---

## Daftar Isi

0. [PENTING: Cara Menggunakan Kode Python di Dokumen Ini](#penting-cara-menggunakan-kode-python-di-dokumen-ini)
   - [1. Struktur Folder Proyek](#1-struktur-folder-proyek)
   - [2. Instalasi Python](#2-instalasi-python)
   - [3. Instalasi Text Editor (VS Code)](#3-instalasi-text-editor-vs-code)
   - [4. Menginstall Library Python](#4-menginstall-library-python)
   - [5. Mendapatkan API Key](#5-mendapatkan-api-key)
   - [6. Cara Menulis dan Menjalankan Kode](#6-cara-menulis-dan-menjalankan-kode)
   - [7. Cara Mengisi API Key dengan Aman (.env)](#7-cara-mengisi-api-key-dengan-aman-env)
   - [8. Troubleshooting Umum](#8-troubleshooting-umum)
   - [9. Alternative: Coba Tanpa Install (Google Colab)](#9-alternative-coba-tanpa-install-google-colab)
   - [10. Ringkasan Persiapan](#10-ringkasan-persiapan)
1. [Pendahuluan: Apa Itu Agentic Engineering?](#1-pendahuluan-apa-itu-agentic-engineering)
2. [Mengapa Agentic Engineering Penting?](#2-mengapa-agentic-engineering-penting)
3. [Perbedaan AI Tradisional vs Agentic AI](#3-perbedaan-ai-tradisional-vs-agentic-ai)
4. [Komponen Utama Agentic AI](#4-komponen-utama-agentic-ai)
5. [Fondasi LLM (Large Language Model)](#5-fondasi-llm-large-language-model)
   - [5.1 Apa Itu LLM?](#51-apa-itu-llm)
   - [5.2 Bagaimana LLM Bekerja? (Deep Dive)](#52-bagaimana-llm-bekerja-deep-dive)
   - [5.3 Konsep Fundamental LLM](#53-konsep-fundamental-llm)
   - [5.4 Jenis-Jenis LLM](#54-jenis-jenis-llm)
   - [5.5 Memilih LLM untuk Agent](#55-memilih-llm-untuk-agent)
   - [5.6 API Integration Basics](#56-api-integration-basics)
   - [5.7 Fenomena Penting: Hallucination](#57-fenomena-penting-hallucination)
   - [5.8 Hands-On: Latihan Pertama dengan LLM](#58-hands-on-latihan-pertama-dengan-llm)
6. [Konsep Prompting untuk Agentic](#6-konsep-prompting-untuk-agentic)
7. [Arsitektur Dasar Agent](#7-arsitektur-dasar-agent)
8. [Tools dan Framework](#8-tools-dan-framework)
   - [8.1 Framework Populer untuk Agentic AI](#81-framework-populer-untuk-agentic-ai)
   - [8.2 Tool Comparison](#82-tool-comparison)
   - [8.3 Memilih Framework yang Tepat](#83-memilih-framework-yang-tepat)
   - [8.4 Data Structures untuk AI Engineering](#84-data-structures-untuk-ai-engineering)
      - [8.4.1 Python Collections Deep Dive](#841-python-collections-deep-dive)
      - [8.4.2 Stack dan Queue untuk Agent](#842-stack-dan-queue-untuk-agent)
      - [8.4.3 When to Use Which Data Structure](#843-when-to-use-which-data-structure)
      - [8.4.4 Common Patterns dalam Agentic AI](#844-common-patterns-dalam-agentic-ai)
   - [8.5 Security Best Practices (Expanded)](#85-security-best-practices-expanded)
      - [8.5.1 API Key Security](#851-api-key-security)
      - [8.5.2 Input Validation & Sanitization](#852-input-validation--sanitization)
      - [8.5.3 Rate Limiting Implementation](#853-rate-limiting-implementation)
      - [8.5.4 Logging & Audit Trail](#854-logging--audit-trail)
      - [8.5.5 Human-in-the-Loop (HITL)](#855-human-in-the-loop-hitl)
   - [8.6 Project Management untuk AI](#86-project-management-untuk-ai)
      - [8.6.1 Project Structure yang Direkomendasikan](#861-project-structure-yang-direkomendasikan)
      - [8.6.2 Dependencies Management](#862-dependencies-management)
      - [8.6.3 Virtual Environment Best Practices](#863-virtual-environment-best-practices)
      - [8.6.4 Code Organization Patterns](#864-code-organization-patterns)
      - [8.6.5 Testing Basics untuk AI Projects](#865-testing-basics-untuk-ai-projects)
   - [8.7 Learning Resources Terstruktur](#87-learning-resources-terstruktur)
      - [8.7.1 YouTube Channels (Bahasa Indonesia)](#871-youtube-channels-bahasa-indonesia)
      - [8.7.2 YouTube Channels (English)](#872-youtube-channels-english)
      - [8.7.3 Learning Path per Topik](#873-learning-path-per-topik)
      - [8.7.4 Documentation & References](#874-documentation--references)
9. [Ringkasan dan Persiapan Bulan 2](#9-ringkasan-dan-persiapan-bulan-2)

---

## PENTING: Cara Menggunakan Kode Python di Dokumen Ini

Sebelum memulai pembelajaran, Anda perlu memahami terlebih dahulu bagaimana cara menulis, menyimpan, dan menjalankan kode Python yang ada di dokumen ini. Bagian ini akan menjelaskan langkah demi langkah secara detail.

### 1. Struktur Folder Proyek

Buatlah folder khusus untuk belajar Agentic Engineering. Struktur yang disarankan:

```
agentic-learning/
│
├── 01-llm-basics/           # Latihan LLM dasar
│   ├── temperature_experiment.py
│   ├── system_prompt_experiment.py
│   ├── cot_experiment.py
│   └── function_calling_experiment.py
│
├── 02-prompting/             # Latihan prompting
│   └── ...
│
├── 03-agents/                # Latihan membuat agent
│   └── ...
│
└── .env                      # File untuk menyimpan API key
```

**Catatan:** Setiap latihan akan disimpan di folder sesuai topic-nya.

### 2. Instalasi Python

Jika Anda belum memiliki Python, ikuti langkah berikut:

#### Windows:
1. Download Python dari https://www.python.org/downloads/
2. Klik installer yang sudah di-download
3. **PENTING:** Centang opsi "Add Python to PATH"
4. Klik "Install Now"
5. Tunggu hingga selesai, lalu klik "Close"

#### macOS:
```bash
# Via Homebrew (jika sudah install Homebrew)
brew install python3

# Atau download dari python.org
```

#### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install python3 python3-pip
```

**Verifikasi instalasi:**
Buka terminal/command prompt, ketik:
```bash
python --version
```
Jika muncul versi Python (contoh: `Python 3.11.5`), berarti berhasil.

### 3. Instalasi Text Editor (VS Code)

Kami sangat merekomendasikan menggunakan **Visual Studio Code** karena:
- Gratis dan open source
- Mendukung Python dengan sangat baik
- Ada terminal terintegrasi
- Ekstensi untuk debugging

**Cara install:**
1. Download dari https://code.visualstudio.com/
2. Install seperti biasa
3. Buka VS Code, install ekstensi "Python" dari Microsoft

### 4. Menginstall Library Python

Setelah Python terinstall, Anda perlu menginstall library yang diperlukan untuk koneksi ke LLM. Buka terminal dan jalankan:

```bash
# Install library utama untuk OpenAI
pip install openai

# Install library untuk Anthropic (Claude)
pip install anthropic

# Install library untuk Google (Gemini)
pip install google-generativeai

# Install semua sekaligus (jika ingin)
pip install openai anthropic google-generativeai
```

**Catatan:** Jika menggunakan Windows, gunakan `pip` (tanpa `3`).

### 5. Mendapatkan API Key

Untuk menggunakan LLM (GPT, Claude, Gemini), Anda perlu API key. Berikut cara mendapatkannya:

#### OpenAI (GPT-4, GPT-4o):
1. Kunjungi https://platform.openai.com/
2. Daftar akun (bisa gunakan email atau Google)
3. Setelah login, klik "API Keys" di menu kiri
4. Klik "Create new secret key"
5. Copy key tersebut (hanya muncul SEKALI - simpan dengan aman!)

**Gratis:** OpenAI memberikan $5 kredit gratis untuk pengguna baru. Cukup untuk latihan di dokumen ini.

#### Anthropic (Claude):
1. Kunjungi https://console.anthropic.com/
2. Daftar akun
3. Setelah login, klik "API Keys" di menu
4. Create new key
5. Copy dan simpan dengan aman

**Gratis:** Anthropic memberikan kredit gratis untuk development.

#### Google (Gemini):
1. Kunjungi https://aistudio.google.com/app/apikey
2. Klik "Create API Key"
3. Copy key yang dihasilkan

### 6. Cara Menulis dan Menjalankan Kode

#### Langkah 1: Buat file Python
1. Buka VS Code
2. Buat folder baru (misalnya: `agentic-learning`)
3. Di dalam folder, buat file baru dengan nama `temperature_experiment.py`
4. Copy kode dari dokumen ini dan paste ke dalam file tersebut

#### Langkah 2: Ganti API Key
Di dalam kode, cari baris yang berisi:
```python
openai.api_key = "YOUR_API_KEY"
```

Ganti `"YOUR_API_KEY"` dengan API key yang sudah Anda dapatkan:
```python
openai.api_key = "sk-xxxxxxxxxxxxxxxxxxxx"
```

**PENTING:** Jangan pernah berbagi API key Anda kepada orang lain!

#### Langkah 3: Jalankan Kode
**Cara 1 - Via Terminal di VS Code:**
1. Buka terminal di VS Code: `Ctrl + `` (backtick)
2. Ketik: `python temperature_experiment.py`
3. Tekan Enter

**Cara 2 - Via Command Prompt:**
```bash
cd D:\Programming\Project\agentic-learning\01-llm-basics
python temperature_experiment.py
```

**Cara 3 - Langsung di VS Code:**
1. Klik tombol "Run" (segitiga hijau) di pojok kanan atas VS Code
2. Atau tekan `F5` untuk debug, `Ctrl + F5` untuk run tanpa debug

### 7. Cara Mengisi API Key dengan Aman (.env)

Alih-alih menulis API key langsung di kode, lebih aman menggunakan file `.env`. Berikut caranya:

```bash
# Install python-dotenv
pip install python-dotenv
```

Buat file `.env` di root folder:
```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxx
```

Di dalam kode Python, gunakan:
```python
from dotenv import load_dotenv
import os

load_dotenv()  # Load dari file .env
openai.api_key = os.getenv("OPENAI_API_KEY")
```

**Keuntungan:**
- API key tidak tersimpan di kode
- Aman untuk di-commit ke Git (tambahkan `.env` ke `.gitignore`)

### 8. Troubleshooting Umum

#### Error: "command not found: python"
- Pastikan Python sudah ditambahkan ke PATH
- Coba restart terminal/command prompt
- Atau gunakan `python3` statt `python`

#### Error: "ModuleNotFoundError: No module named 'openai'"
- Anda perlu menginstall library terlebih dahulu
- Jalankan: `pip install openai`

#### Error: "Invalid API key"
- Periksa kembali API key Anda
- Pastikan tidak ada spasi atau karakter salah
- Coba generate API key baru

#### Error: "Rate limit exceeded"
- Anda terlalu banyak meminta dalam waktu singkat
- Tunggu beberapa saat
- Atau upgrade ke akun berbayar

#### Error: "Insufficient credits"
- Kredit gratis Anda sudah habis
- Tambahkan metode pembayaran atau buat akun baru

### 9. Alternative: Coba Tanpa Install (Google Colab)

Jika Anda tidak ingin ribet install Python, bisa langsung mencoba di Google Colab:

1. Kunjungi https://colab.research.google.com/
2. Klik "New Notebook"
3. Copy kode Python dari dokumen ini
4. Paste ke cell notebook
5. Install library dengan menjalankan: `!pip install openai`
6. Set API key dan jalankan

**Kelebihan Colab:** Tidak perlu install apa pun, bisa langsung dijalankan.

### 10. Ringkasan Persiapan

| Langkah | Aksi | Status |
|---------|------|--------|
| 1 | Install Python | ☐ |
| 2 | Install VS Code | ☐ |
| 3 | Install library (openai, dll) | ☐ |
| 4 | Daftar dan dapat API key | ☐ |
| 5 | Buat folder proyek | ☐ |
| 6 | Coba jalankan kode pertama | ☐ |

### Quick Reference: Semua File Latihan

| No | Nama File | Lokasi | Perintah Jalankan |
|----|-----------|--------|-------------------|
| 1 | temperature_experiment.py | 01-llm-basics/ | python 01-llm-basics/temperature_experiment.py |
| 2 | system_prompt_experiment.py | 01-llm-basics/ | python 01-llm-basics/system_prompt_experiment.py |
| 3 | cot_experiment.py | 01-llm-basics/ | python 01-llm-basics/cot_experiment.py |
| 4 | function_calling_experiment.py | 01-llm-basics/ | python 01-llm-basics/function_calling_experiment.py |

**Catatan:** Pastikan Anda sudah berada di folder utama proyek saat menjalankan perintah di atas. Contoh:
```bash
cd agentic-learning
python 01-llm-basics/temperature_experiment.py
```

---

## 1. Pendahuluan: Apa Itu Agentic Engineering?

### Definisi Sederhana

Bayangkan Anda memiliki asisten kerja yang sangat pintar. Asisten ini tidak hanya menunggu perintah Anda, tetapi juga bisa:

- **Merencanakan** langkah-langkah untuk mencapai tujuan
- **Mengambil keputusan** sendiri berdasarkan situasi
- **Menggunakan tools** yang tersedia untuk menyelesaikan tugas
- **Belajar dari pengalaman** untuk meningkatkan kinerja

Inilah konsep dasar dari **Agentic AI** — sistem AI yang memiliki "agency" atau kemampuan untuk bertindak secara mandiri menuju tujuan tertentu.

**Agentic Engineering** adalah disiplin ilmu dalam membangun, mengembangkan, dan memelihara sistem AI berbasis agent tersebut. Ini berbeda dari programming tradisional karena kita tidak hanya menulis instruksi langkah-demi-langkah, melainkan merancang sistem yang bisa "berpikir" dan "bertindak" secara otonom.

### Analogi Sederhana

Mari kita analogikan dengan kehidupan sehari-hari:

| AI Tradisional | Agentic AI |
|----------------|------------|
| Seperti kalkulator: Anda tekan tombol, hasilnya langsung muncul | Seperti asisten pribadi: Anda minta "bantu saya menyelesaikan laporan", lalu asisten itu membuat draft, meminta feedback, merevisi, sampai selesai |
| Hanya merespons input yang diberikan | Dapat mengantisipasi kebutuhan dan mengambil inisiatif |
| Hasilnya selalu deterministic (sama untuk input yang sama) | Dapat beradaptasi dan menghasilkan solusi yang bervariasi |

### Komponen Inti Agentic AI

Sebuah agent pada umumnya terdiri dari empat komponen utama:

```
┌─────────────────────────────────────────────────────────────┐
│                      AGENTIC AI SYSTEM                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│    ┌──────────────┐     ┌──────────────┐                  │
│    │   PLANNING   │────▶│   REASONING  │                  │
│    │              │     │              │                  │
│    │ • Goal       │     │ • Chain of   │                  │
│    │   Decomposi- │     │   Thought    │                  │
│    │   tion       │     │ • Reflection │                  │
│    │ • Task       │     │ • Analysis   │                  │
│    │   Sequence   │     │              │                  │
│    └──────────────┘     └──────────────┘                  │
│            │                     │                         │
│            ▼                     ▼                         │
│    ┌──────────────────────────────────────────────┐       │
│    │              AGENT CORE ENGINE               │       │
│    │                                              │       │
│    │  ┌──────────┐    ┌──────────┐               │       │
│    │  │ MEMORY   │◀──▶│   LLM    │               │       │
│    │  │          │    │          │               │       │
│    │  │ • Short  │    │ • GPT-4  │               │       │
│    │  │   Term   │    │ • Claude  │               │       │
│    │  │ • Long   │    │ • Gemini  │               │       │
│    │  │   Term   │    │           │               │       │
│    │  └──────────┘    └──────────┘               │       │
│    └──────────────────────────────────────────────┘       │
│            │                     │                         │
│            ▼                     ▼                         │
│    ┌──────────────┐     ┌──────────────┐                  │
│    │   ACTION     │     │   TOOLS      │                  │
│    │              │     │              │                  │
│    │ • Execute   │     │ • Web Search │                  │
│    │ • Generate  │     │ • Calculator  │                  │
│    │ • Respond   │     │ • API Call   │                  │
│    │ • Interact  │     │ • Database    │                  │
│    └──────────────┘     └──────────────┘                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Mengapa Agentic Engineering Penting?

### Transformasi Paradigma AI

Dunia AI mengalami perubahan fundamental:

```
TAHUN 2024:
═══════════════════════════════════════════════════════════════
Focus: "Bagaimana cara bertanya ke AI?"
→ Prompt Engineering menjadi skill utama
→ Orang belajar menulis prompt yang baik
→ AI digunakan sebagai tool bantu個別

TAHUN 2026:
═══════════════════════════════════════════════════════════════
Focus: "Bagaimana mengorkestrasi sistem AI yang autonomous?"
→ Agentic Engineering menjadi skill utama
→ Orang belajar membangun sistem AI yang bekerja mandiri
→ AI menjadi "worker" yang bisa dipercaya menyelesaikan tugas kompleks
```

### Mengapa Perubahan Ini Terjadi?

Ada beberapa keterbatasan AI tradisional yang mendorong perkembangan Agentic AI:

1. **Keterbatasan Konteks**: LLM tradisional memiliki batasan context window. Agent bisa mengatasi ini dengan memecah tugas besar menjadi bagian-bagian kecil.

2. **Tidak Ada Memori**: Setiap percakapan dimulai dari nol. Agent memiliki sistem memori untuk mengingat konteks sebelumnya.

3. **Tidak Bisa Bertindak**: AI tradisional hanya bisa menghasilkan teks. Agent bisa mengambil tindakan nyata seperti mengirim email, memesan, atau mengeksekusi kode.

4. **Kesalahan Kumulatif**: Untuk tugas kompleks, kesalahan kecil bisa terakumulasi. Agent memiliki mekanisme untuk memeriksa dan mengoreksi diri sendiri.

### Peluang Karir

| Aspek | Data |
|-------|------|
| Pertumbuhan permintaan AI Agent Engineer | 156% YoY |
| Prediksi penggunaan agentic AI di enterprise (2028) | 33% aplikasi enterprise |
| Gaji rata-rata AI Agent Developer | $150,000 - $250,000/tahun |

---

## 3. Perbedaan AI Tradisional vs Agentic AI

### 3.1 Perbandingan Mendalam

#### AI Tradisional (Non-Agentic)

```
INPUT → PROSES → OUTPUT
   │          │
   │          └─ Fixed rules / pre-programmed logic
   │
   └─ Tidak ada pemahaman konteks panjang
      Tidak bisa belajar dari interaksi sebelumnya
      Hanya responsif, tidak proaktif
```

Contoh: Chatbot FAQ klasik yang hanya merespons pertanyaan dengan jawaban yang sudah di-program.

#### Agentic AI

```
INPUT → PLANNING → REASONING → ACTION → FEEDBACK → OUTPUT
   │          │            │         │         │
   │          │            │         │         └─ Evaluasi hasil
   │          │            │         └─ Eksekusi tugas
   │          │            └─ Proses berpikir (CoT)
   │          └─ Susun langkah-langkah strategis
   │
   └─ Memahami konteks, goals, dan constraints
```

Contoh: AI Assistant yang bisa merencanakan perjalanan lengkap, termasuk mencari flights, memesan hotel, membuat itinerary, dan menyesuaikan berdasarkan budget.

### 3.2 Tabel Perbandingan Komprehensif

| Aspek | AI Tradisional | Agentic AI |
|-------|----------------|------------|
| **Mode Operasi** | Reactive - hanya merespons input | Proactive - mengambil inisiatif |
| **Pengambilan Keputusan** | Based on fixed rules | Dynamic - berdasarkan konteks dan goals |
| **Konteks** | Context window terbatas | Bisa menggunakan memori eksternal |
| **Tindakan** | Hanya menghasilkan output teks | Bisa mengeksekusi actions nyata |
| **Belajar dari Pengalaman** | Tidak - setiap session dimulai ulang | Ya - bisa menyimpan dan menggunakan memori |
| **Penanganan Error** | Biasa berhenti saat error | Bisa recovery dan retry secara cerdas |
| **Kompleksitas Tugas** | Tugas tunggal yang sederhana | Tugas kompleks multi-langkah |
| **Determinisme** | Output deterministik untuk input sama | Output bisa bervariasi berdasarkan reasoning |
| **Kebutuhan Interaksi Manusia** | Sering butuh input di setiap langkah | Bisa bekerja autonomous dengan supervision minimal |

### 3.3 Contoh Konkret

#### Contoh 1: Membuat Resume

**Dengan AI Tradisional:**
```
User: "Buatkan resume untuk posisi Software Engineer"
AI: (Menghasilkan satu版本的 resume berdasarkan informasi yang diberikan)
User harus memberikan semua info sekaligus, jika ada yang kurang, harus prompt lagi
```

**Dengan Agentic AI:**
```
User: "Bantu saya membuat resume untuk posisi Software Engineer"
Agent: 
1. "Saya perlu beberapa informasi, boleh tanya beberapa pertanyaan?"
2. Mengumpulkan informasi secara bertahap
3. Mencari template yang sesuai di internet
4. Menulis resume dengan format yang baik
5. Meminta user untuk review
6. Merevisi berdasarkan feedback
7. Menyimpan dalam berbagai format (PDF, Word)
```

#### Contoh 2: Research Topics

**Dengan AI Tradisional:**
```
User: "Apa itu Machine Learning?"
AI: (Memberikan penjelasan umum tentang Machine Learning)
```

**Dengan Agentic AI:**
```
User: "Saya mau tulis artikel tentang Machine Learning untuk blog 
       perusahaan, bisa bantu riset lengkap?"
Agent:
1. Mencari perkembangan terbaru Machine Learning di 2024-2025
2. Mengidentifikasi tren dan inovasi penting
3. Mencari contoh implementasi di berbagai industri
4. Mengumpulkan statistik dan data pendukung
5. Menyusun outline artikel
6. Menulis draft artikel
7. Meminta review user
8. Merevisi dan menyiapkan untuk publikasi
```

---

## 4. Komponen Utama Agentic AI

### 4.1 Large Language Model (LLM) sebagai Brain

LLM adalah "otak" dari agent. Ini adalah model AI yang telah dilatih dengan massive amount of text data dan mampu:

- **Memahami bahasa manusia** dalam berbagai bentuk
- **Menghasilkan teks** yang natural dan relevan
- **Bernalar** tentang informasi yang diberikan
- **Mengikuti instruksi** kompleks

#### Bagaimana LLM Bekerja?

```
INPUT TEXT
    │
    ▼
┌─────────────────────────────────────────┐
│           TOKENIZATION                  │
│  Mengubah teks menjadi tokens          │
│  (unit-unit kecil yang dipahami AI)    │
└─────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────┐
│           NEURAL NETWORK                 │
│  Memproses tokens melalui              │
│  multi-layer transformer architecture   │
│                                         │
│  • Self-Attention mechanism             │
│  • Context understanding                │
│  • Pattern recognition                  │
└─────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────┐
│        PROBABILITY CALCULATION          │
│  Menghitung kemungkinan token          │
│  berikutnya berdasarkan konteks         │
└─────────────────────────────────────────┘
    │
    ▼
OUTPUT TOKENS
(ditransformasi kembali menjadi teks)
```

### 4.2 Planning (Perencanaan)

Agent memiliki kemampuan untuk merencanakan langkah-langkah mencapai tujuan:

#### Goal Decomposition (Dekomposisi Tujuan)

Agent memecah tujuan besar menjadi sub-tugas yang lebih kecil dan manageable:

```
GOAL: "Buatkan presentasi tentang AI untuk meeting besok"

分解 (Dekomposisi):
├── Sub-tugas 1: Riset perkembangan AI terbaru
├── Sub-tugas 2: Kumpulkan statistik dan data
├── Sub-tugas 3: Buat outline presentasi
├── Sub-tugas 4: Desain slide untuk setiap bagian
├── Sub-tugas 5: Tulis konten presentasi
├── Sub-tugas 6: Tambahkan visual dan grafik
├── Sub-tugas 7: Review dan revisi
└── Sub-tugas 8: Ekspor ke format presentasi
```

#### Task Sequencing (Urutan Tugas)

Agent menentukan urutan eksekusi yang logis:

```
URUTAN LOGIS:
1. First: Riset dulu (butuh informasi sebagai fondasi)
2. Second: Outline (berdasarkan hasil riset)
3. Third: Desain slide (berdasarkan outline)
4. Fourth: Konten (isi dari outline dan riset)
5. Fifth: Review (final check)
```

### 4.3 Reasoning (Penalaran)

#### Chain of Thought (CoT)

CoT adalah teknik yang memungkinkan AI untuk "berpikir langkah demi langkah":

```
TANPA CoT:
User: "Jika ada 5 burung di atas pohon, dan seorang pemburu menembak 
       1 burung, berapa burung yang tersisa?"
AI: "4 burung" ( Langsung jawab tanpa berpikir)

DENGAN CoT:
User: "Jika ada 5 burung di atas pohon, dan seorang pemburu menembak 
       1 burung, berapa burung yang tersisa? Pikirkan langkah demi langkah."
       
AI: "Mari kita pikirkan:
     1. Awalnya ada 5 burung di pohon
     2. Pembunter menembak 1 burung
     3. Ketika mendengar suara tembak, burung-burung lain akan terbang 
        takut
     4. Jadi tidak ada burung yang tersisa di pohon
     
     Jawaban: 0 burung"
```

#### ReAct (Reasoning + Acting)

ReAct menggabungkan penalaran dengan tindakan:

```
Pola ReAct:
Thought → Action → Observation → Thought → Action → ... → Final Answer

Contoh:
Thought: Saya perlu mencari informasi tentang harga Bitcoin terbaru
Action: Gunakan tool web_search dengan query "harga Bitcoin hari ini"
Observation: Bitcoin saat ini Rp 500.000.000
Thought: Saya sudah dapat informasi harga, sekarang perlu informasi 
         tentang trend
Action: Gunakan tool web_search dengan query "prediksi harga Bitcoin 2025"
Observation: Berbagai analis memprediksi...
Final Answer: (Menyimpulkan semua informasi)
```

### 4.4 Memory (Memori)

Agent memiliki sistem memori untuk menyimpan dan mengakses informasi:

#### Short-Term Memory (Working Memory)

Berfungsi seperti RAM komputer - menyimpan informasi yang sedang diproses:

```
Contoh:
Dalam satu sesi conversation, agent mengingat:
- Apa yang baru saja ditanyakan user
- Konteks percakapan saat ini
- Informasi yang baru saja diambil dari tools
```

#### Long-Term Memory

Menyimpan informasi untuk penggunaan di masa depan:

```
Contoh:
Agent mengingat:
- Preferensi user (format dokumen yang disuka, gaya penulisan)
- Riwayat project sebelumnya
- Pengetahuan domain yang relevan
- Templates dan prompts yang sering digunakan
```

#### Types of Memory Implementation

| Tipe Memory | Implementasi | Penggunaan |
|-------------|--------------|------------|
| **Buffer** | Menyimpan recent conversation | Conversation context |
| **Summary** | Ringkasan key points | Efisiensi konteks |
| **Entity** | Database entitas (user, project, dll) | Pengetahuan persist |
| **Semantic** | Vector embeddings | Pencarian konteks relevan |

### 4.5 Tools (Alat)

Agent dapat menggunakan berbagai tools untuk memperluas kemampuannya:

#### Kategori Tools

```
┌─────────────────────────────────────────────────────────────┐
│                    KATEGORI TOOLS                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📊 DATA & COMPUTATION                                    │
│  ├── Web Search (Google, Wikipedia)                        │
│  ├── Calculator / Python Executor                          │
│  ├── Database Query                                         │
│  └── File Operations                                        │
│                                                             │
│  📱 EXTERNAL SERVICES                                      │
│  ├── Email (send, read)                                    │
│  ├── Calendar (create event, check schedule)               │
│  ├── Slack/Discord API                                      │
│  └── CRM Operations                                        │
│                                                             │
│  🛠️ DEVELOPMENT                                           │
│  ├── Code Interpreter / Executor                           │
│  ├── Git Operations                                         │
│  ├── CI/CD Pipeline                                         │
│  └── API Testing                                           │
│                                                             │
│  🎨 CONTENT                                                │
│  ├── Document Generation (PDF, Slides)                     │
│  ├── Image Generation (DALL-E, Midjourney)                │
│  ├── Video Creation                                         │
│  └── Audio/Transcription                                   │
│                                                             │
│  🔍 RETRIEVAL                                              │
│  ├── Vector Database Search                                 │
│  ├── Document Search                                        │
│  └── Knowledge Graph Query                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Tool Use Patterns

```
Tool Definition Structure:
{
    "name": "calculate",
    "description": "Melakukan operasi matematika",
    "parameters": {
        "type": "object",
        "properties": {
            "expression": {
                "type": "string", 
                "description": "Ekspresi matematika yang akan dihitung"
            }
        },
        "required": ["expression"]
    }
}

Usage in Agent:
1. Agent determines need for calculation
2. Agent calls tool with appropriate parameters
3. Tool executes and returns result
4. Agent incorporates result into reasoning
```

---

## 5. Fondasi LLM (Large Language Model)

### 5.1 Apa Itu LLM?

**Large Language Model (LLM)** adalah model AI yang telah dilatih dengan jumlah data teks yang sangat besar dan memiliki kemampuan untuk memahami, menghasilkan, dan memanipulasi bahasa manusia.

#### Karakteristik Utama LLM

| Karakteristik | Penjelasan |
|---------------|------------|
| **Large** | Ditraining dengan miliaran parameter |
| **Language** | Berfokus pada pemahaman dan generasi bahasa |
| **Model** | Representasi matematis dari patterns dalam data |

#### Sejarah Singkat

```
2017: Transformer Architecture diperkenalkan (Google Brain, Google Research, 
      dan University of Toronto)
      ↓
2018: BERT (Google) - revolucioner NLP
      ↓
2019: GPT-2 (OpenAI) - Generative yang impressive
      ↓
2020: GPT-3 - Kemampuan few-shot learning yang luar biasa
      ↓
2022: ChatGPT - AI menjadi mainstream
      ↓
2023: GPT-4, Claude, Gemini - Multi-modal capabilities
      ↓
2024-2025: Specialized agents, longer context, better reasoning
```

### 5.3 Konsep Fundamental LLM

#### 5.2.1 Tokenization

Token adalah unit dasar yang diproses oleh LLM. Penting untuk dipahami karena:

- **Context window** diukur dalam tokens, bukan kata
- **Biaya API** dihitung per token
- **Kualitas output** tergantung bagaimana teks di-tokenize

```
Contoh Tokenization:

Kalimat: "Saya suka belajar AI"

可能的 Pemotongan:
1. ["Saya", " suka", " belajar", " AI"] - 4 tokens
2. ["Saya", "suka", "belajar", "AI"] - 4 tokens  
3. ["Saya ", "suk", "a be", "lajar", " AI"] - 5 tokens

Perbedaan bahasa:
- Bahasa Inggris: ~1 token per kata
- Bahasa Indonesia: ~1.3 token per kata (karena morphology)
- Bahasa Mandarin: ~1 token per karakter
```

#### 5.2.2 Context Window

Context window adalah "memori kerja" LLM - seberapa banyak informasi yang bisa diproses dalam satu permintaan.

```
PERBANDINGAN CONTEXT WINDOW (2025-2026):

Model                │ Context Window │ Setara Dengan
─────────────────────┼────────────────┼─────────────────
GPT-4 Turbo         │ 128K tokens    │ ~300 halaman buku
Claude 3.5 Sonnet   │ 200K tokens    │ ~450 halaman buku
Gemini 1.5 Pro      │ 1M tokens       │ ~2,000 halaman buku
Llama 3 (8B)        │ 8K tokens       │ ~20 halaman buku
─────────────────────┴────────────────┴─────────────────

PRAKTIS:
• 1 token ≈ 0.75 kata (bahasa Inggris)
• 1 token ≈ 0.5 kata (bahasa Indonesia)
• 1 halaman buku ≈ 400-500 kata ≈ 500-700 tokens
```

**Implikasi untuk Agentic Engineering:**
- Agent harus cerdas memilih informasi mana yang relevan untuk konteks
- Untuk dokumen panjang, diperlukan teknik seperti RAG (Retrieval-Augmented Generation)
- Memori eksternal menjadi penting untuk tugas kompleks

#### 5.2.3 Temperature dan Sampling

Temperature mengontrol tingkat "kreativitas" atau "kekacakan" output LLM.

```
┌─────────────────────────────────────────────────────────────────┐
│                    TEMPERATURE SCALE                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  0.0 ────────────────────────────────────────────────▶ 2.0   │
│                                                                 │
│  │                                                         │   │
│  │                                                         │   │
│Deterministic                                    Highly Creative
│(Pasti, konservatif)                             (Variatif, out-of-the-box)
│                                                         │   │
│                                                    │         │
│  USE CASES:                                        │         │
│  • Fakta & informasi                               │         │
│  • Coding & matematika                             │         │
│  • Instruksi yang presisi                          │         │
│                                                    │         │
│                                                    │   USE CASES:
│                                                    │   • Creative writing
│                                                    │   • Brainstorming
│                                                    │   • Ideation
│                                                    │   • Entertainment
│                                                    │                                                     │
└─────────────────────────────────────────────────────────────────┘

CONTOH PRAKTIS:

Prompt: "Tulis nama untuk startup AI"

Temperature 0.0:
→ "PT Teknologi Indonesia" (Selalu memilih yang paling umum/popular)

Temperature 0.7:
→ "Nalar.ai", "Cerdaskan", "Mindforge" (Variatif tapi masih masuk akal)

Temperature 1.5:
→ "GiggleBytes", "QuantumPickle", "UnicornSauce" 
  (Sangat variatif, mungkin tidak masuk akal)
```

#### 5.2.4 Top-P Sampling

Top-p (nucleus sampling) adalah teknik pengambilan sampling yang berbeda dari temperature:

```
Top-P = 0.9:
Ambil kandidat token teratas yang total probabilitasnya 90%

Top-P = 0.5:
Ambil kandidat token teratas yang total probabilitasnya 50%

Best Practice:
• Temperature + Top-P sering digunakan bersamaan
• Untuk coding: temperature 0.0-0.2
• Untuk creative: temperature 0.7-1.0
• Untuk balanced: temperature 0.3-0.5
```

### 5.3 Jenis-Jenis LLM

#### 5.3.1 Berdasarkan Akses

```
OPEN SOURCE vs PROPRIETARY:

┌─────────────────────────────────────────────────────────────┐
│                    OPEN SOURCE                              │
├─────────────────────────────────────────────────────────────┤
│ • Llama (Meta/Facebook)                                    │
│ • Mistral (Mistral AI)                                    │
│ • Qwen (Alibaba)                                          │
│ • Falcon (TII UAE)                                        │
│                                                             │
│ KELEBIHAN:                                                 │
│ ✓ Bisa dijalankan lokal                                    │
│ ✓ Tidak ada biaya per-request                             │
│ ✓ Data tidak keluar dari sistem                           │
│ ✓ Bisa fine-tune sesuai kebutuhan                         │
│                                                             │
│ KEKURANGAN:                                                │
│ ✗ Perlu hardware khusus (GPU)                              │
│ ✗ Maintenance dan updates sendiri                           │
│ ✗ Kualitas bervariasi antar model                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   PROPRIETARY (API)                         │
├─────────────────────────────────────────────────────────────┤
│ • OpenAI (GPT-4, GPT-4o)                                 │
│ • Anthropic (Claude)                                      │
│ • Google (Gemini)                                         │
│ • Microsoft (Copilot)                                     │
│                                                             │
│ KELEBIHAN:                                                 │
│ ✓ Kualitas terbaik di kelasnya                             │
│ ✓ Tidak perlu maintenance                                  │
│ ✓ Selalu update dengan teknologi terbaru                   │
│                                                             │
│ KEKURANGAN:                                                │
│ ✗ Biaya per-request                                        │
│ ✗ Data dikirim ke server luar                             │
│ ✗ Ketergantungan pada provider                            │
│ ✗ Rate limits                                              │
└─────────────────────────────────────────────────────────────┘
```

#### 5.3.2 Berdasarkan Fungsi

```
SPECIALIZED MODELS:

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  GENERAL-PURPOSE│    │  CODE-FOCUSED │    │  RAG-OPTIMIZED │
├─────────────────┤    ├─────────────────┤    ├─────────────────┤
│ • GPT-4        │    │ • Codex        │    │ • GPT-4 + RAG  │
│ • Claude       │    │ • CodeLlama    │    │ • Claude + RAG │
│ • Gemini       │    │ • StarCoder    │    │ • Custom       │
└─────────────────┘    └─────────────────┘    └─────────────────┘

UNTUK AGENTIC:
→ General-purpose dengan system prompt yang tepat
→ Code-focused untuk agent yang menulis kode
→ RAG-optimized untuk agent yang perlu knowledge base
```

### 5.4 Memilih LLM untuk Agent

#### Kriteria Pemilihan

| Kriteria | Pertanyaan |
|----------|------------|
| **Biaya** | Berapa budget per bulan? |
| **Keamanan** | Apakah data sensitif? Butuh lokal atau cloud? |
| **Kualitas** | Seberapa penting akurasi respons? |
| **Kecepatan** | Perlu real-time atau batch processing? |
| **Fitur** |Perlu vision, function calling, panjang konteks? |

#### Rekomendasi Berdasarkan Use Case

| Use Case | Rekomendasi LLM | Alasan |
|----------|-----------------|--------|
| **General Agent** | GPT-4o / Claude 3.5 | Balance quality & features |
| **Coding Agent** | GPT-4o / Cursor | Excellent code understanding |
| **Low Budget** | GPT-4o-mini / Llama 3 | Cost-effective |
| **Data Sensitif** | Local Llama 3 / Claude | Data stays local |
| **Long Context** | Gemini 1.5 Pro / Claude 3.5 | 1M+ tokens |
| **Fast Response** | GPT-4o-mini / Gemini Flash | Low latency |

### 5.5 API Integration Basics

#### Dasar Penggunaan API LLM

```
CONTOH INTEGRASI DENGAN OPENAI (Python):

import openai

# Setup API key
openai.api_key = "your-api-key"

# Simple completion
response = openai.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ]
)

# Get response
print(response.choices[0].message.content)
```

```
CONTOH INTEGRASI DENGAN ANTHROPIC (Python):

import anthropic

client = anthropic.Anthropic(
    api_key="your-api-key"
)

response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.content[0].text)
```

### 5.7 Fenomena Penting: Hallucination

Hallucination adalah fenomena di mana LLM menghasilkan informasi yang tampak meyakinkan tetapi sebenarnya salah atau tidak akurat. Ini adalah tantangan terbesar dalam penggunaan LLM untuk aplikasi nyata.

#### Apa Itu Hallucination?

```
ANALOGI SEDERHANA:

Bayangkan Anda bertanya kepada seseorang tentang sejarah Indonesia pada tahun 1500.

Orang yang "hallucinating" mungkin akan menjawab dengan sangat percaya diri:
"Baba pada tahun 1500, Indonesia sudah memiliki kereta api kecepatan tinggi 
yang menghubungkan Jawa dan Sumatra!"

Tentu saja ini salah - kereta api di Indonesia baru ada abad ke-19.

LLM bisa melakukan hal serupa - mereka sangat pandai "melanjutkan" teks
sehingga terlihat masuk akal, tapi bisa saja fakta yang mereka hasilkan 
tidak benar.
```

#### Mengapa Hallucination Terjadi?

```
PENYEBAB HALLUCINATION:

1. TRAINING DATA
   • LLM dilatih dengan internet yang penuh dengan informasi 
     yang tidak selalu akurat
   • Model belajar patterns dari data yang mungkin salah

2. PROBABILITY-BASED
   • LLM memilih token berdasarkan probabilitas, bukan fakta
   • Jawaban yang "paling mungkin" belum tentu benar

3. LACK OF GROUNDING
   • LLM tidak memiliki akses ke "kebenaran"
   • Tidak bisa memverifikasi informasi secara real-time

4. AMBIGUOUS PROMPTS
   • Prompt yang tidak jelas bisa menyebabkan speculative outputs
   • Model berusaha "menjawab" daripada mengakui ketidakpastian
```

#### Jenis-Jenis Hallucination

| Jenis | Deskripsi | Contoh |
|-------|-----------|--------|
| **Factual** | Informasi faktual yang salah | "Obama lahir di Texas" (sebenarnya Hawaii) |
| **Logical** | Kesalahan dalam penalaran | Salah hitung matematika |
| **Contextual** | Informasi tidak relevan dengan konteks | Mengacu pada peraturan yang tidak ada |
| **Self-Contradictory** | Bertentangan dengan dirinya sendiri | Dalam satu jawaban menyatakan dua hal yang bertentangan |

#### Cara Mengurangi Hallucination

```
TEKNIK PENGURANGAN HALLUCINATION:

1. ✅ GUNAKAN RAG (Retrieval-Augmented Generation)
   Dengan menghubungkan LLM ke sumber data yang benar,
   kita bisa memastikan respons berdasarkan fakta.
   
   Contoh: Agent yang punya akses ke database perusahaan
   akan menjawab berdasarkan data perusahaan, bukan mengarang.

2. ✅ BERIKAN CONTEXT YANG JELAS
   Semakin jelas konteks yang diberikan, semakin akurat jawaban.
   
   Prompt: "Berdasarkan dokumen berikut, jelaskan..."
   vs
   Prompt: "Jelaskan tentang..."

3. ✅ GUNAKAN CHAIN OF THOUGHT
   Dengan meminta LLM berpikir langkah demi langkah,
   kita bisa melihat proses reasoning dan menemukan kesalahan.
   
   "Pikirkan langkah demi langkah dan sertakan sumber untuk 
   setiap fakta yang Anda sebutkan."

4. ✅ VALIDASI DENGAN TOOLS
   Minta LLM memverifikasi fakta dengan tool yang tersedia.
   
   "Sebelum menjawab, verifikasi informasi dengan web search."

5. ✅ ATUR TEMPERATURE YANG RENDAH
   Temperature 0.0-0.2 menghasilkan output yang lebih deterministik
   dan konsisten.
   
6. ✅ GUNAKAN FUNCTION CALLING
   Dengan function calling, kita bisa memastikan output terstruktur
   dan terverifikasi oleh sistem eksternal.
```

#### Contoh Praktis Mengurangi Hallucination

```
❌ prompt BURUK (Menyebabkan Hallucination):
" Siapa penemu bahasa pemrograman Python dan kapanya dibuat?"

Output (Hallucination):
"Python ditemukan oleh Guido van Rossum pada tahun 1989, dan 
dirilis pertama kali pada tahun 1991."

→ Mungkin benar, tapi tidak ada verifikasi

✅ prompt YANG BAIK:
"Untuk menjawab pertanyaan ini, pertama gunakan tool web_search 
untuk mencari informasi tentang penemu Python dan tahun pembuatannya. 
Sertakan sumber (link) untuk setiap informasi yang Anda berikan."

Output (Verified):
"Menurut sumber dari python.org dan Wikipedia, Python dibuat oleh 
Guido van Rossum. Pertama kali dirilis pada tahun 1991. 
Sumber: https://www.python.org/, https://en.wikipedia.org/wiki/Python_(programming_language)"
```

---

### 5.8 Hands-On: Latihan Pertama dengan LLM

Sekarang kita akan praktik langsung. Ikuti langkah-langkah berikut:

#### Persiapan

1. **Buat Akun OpenAI (Gratis $5 Credits):**
   - Kunjungi platform.openai.com
   - Daftar dengan email
   - Anda akan mendapat $5 kredit gratis untuk percobaan

2. **Atau Gunakan Akun Anthropic (Gratis):**
   - Kunjungi console.anthropic.com
   - Daftar untuk API key gratis

#### Latihan 1: Percobaan Sederhana dengan Temperature

**Langkah-langkah:**
1. Buat folder baru: `01-llm-basics` di dalam folder proyek Anda
2. Buat file baru dengan nama: `temperature_experiment.py`
3. Copy kode di bawah ini ke file tersebut
4. Ganti `"YOUR_API_KEY"` dengan API key OpenAI Anda
5. Jalankan dengan perintah: `python temperature_experiment.py`

```python
# File: 01-llm-basics/temperature_experiment.py

import openai

# Setup API key Anda
openai.api_key = "sk-xxxxxxxxxxxxxxxxxxxx"  # Ganti dengan API key Anda

def test_temperature(prompt, temperature):
    """Test bagaimana temperature mempengaruhi output"""
    response = openai.chat.completions.create(
        model="gpt-4o-mini",  # Model murah untuk testing
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=temperature,
        max_tokens=100
    )
    return response.choices[0].message.content

# Test dengan temperature berbeda
prompt = "Tulis satu nama untuk startup AI yang membantu estudantes"

print("=" * 50)
print("TEMPERATURE 0.0 (Deterministic):")
print("=" * 50)
print(test_temperature(prompt, 0.0))
print()

print("=" * 50)
print("TEMPERATURE 0.7 (Balanced):")
print("=" * 50)
print(test_temperature(prompt, 0.7))
print()

print("=" * 50)
print("TEMPERATURE 1.5 (Creative):")
print("=" * 50)
print(test_temperature(prompt, 1.5))
```

**Apa yang harus Anda perhatikan:**
- Temperature 0.0: Hasil yang sama setiap kali (atau sangat mirip)
- Temperature 0.7: Variatif tapi masih masuk akal
- Temperature 1.5: Sangat variatif, mungkin tidak masuk akal

#### Latihan 2: Percobaan dengan System Prompt

**Langkah-langkah:**
1. Buat file baru dengan nama: `system_prompt_experiment.py` di folder `01-llm-basics`
2. Copy kode di bawah ini ke file tersebut
3. Ganti `"YOUR_API_KEY"` dengan API key Anda
4. Jalankan dengan perintah: `python system_prompt_experiment.py`

```python
# File: 01-llm-basics/system_prompt_experiment.py

import openai

# Ganti dengan API key Anda
openai.api_key = "sk-xxxxxxxxxxxxxxxxxxxx"

# Tanpa System Prompt
response1 = openai.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": "Apa itu AI?"}
    ]
)

# Dengan System Prompt yang spesifik
response2 = openai.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "Anda adalah seorang expert 
         di bidang pendidikan. Jelaskan dengan bahasa yang mudah 
         dipahami oleh siswa SD."},
        {"role": "user", "content": "Apa itu AI?"}
    ]
)

print("TANPA SYSTEM PROMPT:")
print(response1.choices[0].message.content)
print()
print("DENGAN SYSTEM PROMPT (Expert Pendidikan SD):")
print(response2.choices[0].message.content)
```

**Apa yang harus Anda perhatikan:**
- Bagaimana system prompt mempengaruhi gaya dan kedalaman penjelasan
- Respons dengan system prompt cenderung lebih terfokus

#### Latihan 3: Percobaan Chain of Thought

**Langkah-langkah:**
1. Buat file baru dengan nama: `cot_experiment.py` di folder `01-llm-basics`
2. Copy kode di bawah ini ke file tersebut
3. Ganti `"YOUR_API_KEY"` dengan API key Anda
4. Jalankan dengan perintah: `python cot_experiment.py`

```python
# File: 01-llm-basics/cot_experiment.py

import openai

# Ganti dengan API key Anda
openai.api_key = "sk-xxxxxxxxxxxxxxxxxxxx"

# Tanpa CoT
question = "Jika sebuah buku harga Rp 100.000 mendapat diskon 20%, 
lalu ditambah pajak 10%, berapa harga akhirnya?"

# Respons langsung (tanpa reasoning)
response1 = openai.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": question}],
    temperature=0
)

# Dengan CoT (minta reasoning)
response2 = openai.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": f"""
        {question}
        
        Pikirkan langkah demi langkah sebelum menjawab.
        Tunjukkan perhitungan Anda.
        """}
    ],
    temperature=0
)

print("TANPA CHAIN OF THOUGHT:")
print(response1.choices[0].message.content)
print()
print("DENGAN CHAIN OF THOUGHT:")
print(response2.choices[0].message.content)
```

#### Latihan 4: Percobaan Function Calling

**Langkah-langkah:**
1. Buat file baru dengan nama: `function_calling_experiment.py` di folder `01-llm-basics`
2. Copy kode di bawah ini ke file tersebut
3. Ganti `"YOUR_API_KEY"` dengan API key Anda
4. Jalankan dengan perintah: `python function_calling_experiment.py`

Function calling memungkinkan LLM menghasilkan output terstruktur yang bisa kita proses secara programmatic:

```python
# File: 01-llm-basics/function_calling_experiment.py

import openai
import json

# Ganti dengan API key Anda
openai.api_key = "sk-xxxxxxxxxxxxxxxxxxxx"

# Definisi functions
tools = [
    {
        "type": "function",
        "function": {
            "name": "calculate_discount",
            "description": "Menghitung harga setelah diskon dan pajak",
            "parameters": {
                "type": "object",
                "properties": {
                    "price": {
                        "type": "number", 
                        "description": "Harga asli produk"
                    },
                    "discount_percent": {
                        "type": "number",
                        "description": "Persentase diskon (0-100)"
                    },
                    "tax_percent": {
                        "type": "number",
                        "description": "Persentase pajak (0-100)"
                    }
                },
                "required": ["price", "discount_percent", "tax_percent"]
            }
        }
    }
]

# Prompt yang akan memicu function call
response = openai.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": "Saya mau beli laptop Rp 10.000.000, dapat diskon 15%, pajak 10%. Berapa yang harus saya bayar?"}
    ],
    tools=tools,
    tool_choice="auto"
)

# Periksa apakah ada function call
if response.choices[0].message.tool_calls:
    print("Function Called!")
    for tool_call in response.choices[0].message.tool_calls:
        print(f"Function: {tool_call.function.name}")
        print(f"Arguments: {tool_call.function.arguments}")
        
        # Parse arguments
        args = json.loads(tool_call.function.arguments)
        price = args['price']
        discount = args['discount_percent']
        tax = args['tax_percent']
        
        # Hitung manually
        discount_amount = price * (discount / 100)
        after_discount = price - discount_amount
        tax_amount = after_discount * (tax / 100)
        final_price = after_discount + tax_amount
        
        print(f"\nPerhitungan:")
        print(f"Harga asli: Rp {price:,}")
        print(f"Diskon ({discount}%): Rp {discount_amount:,}")
        print(f"Setelah diskon: Rp {after_discount:,}")
        print(f"Pajak ({tax}%): Rp {tax_amount:,}")
        print(f"HARGA AKHIR: Rp {final_price:,}")
else:
    print("No function called")
    print(response.choices[0].message.content)
```

---

## 6. Konsep Prompting untuk Agentic

*Bagian ini mengambil referensi dari Panduan-AI-Programming.md dengan fokus применение untuk Agentic Engineering*

### 6.1 Mengapa Prompting Penting untuk Agentic?

Dalam konteks Agentic Engineering, prompting memiliki peran yang berbeda dari penggunaan AI tradisional:

| Aspek | AI Tradisional | Agentic AI |
|-------|----------------|------------|
| **Fokus Prompt** | Mendapatkan jawaban langsung | Menginstruksikan bagaimana agent berpikir dan bertindak |
| **Kompleksitas** | Relative sederhana | complex dengan multiple components |
| **Output** | Satu respons final | Mungkin ada multiple steps dan actions |
| **Evaluasi** | Langsung bisa dinilai | Perlu evaluation framework yang lebih kompleks |

### 6.2 System Prompt untuk Agent

System prompt adalah fondasi yang menentukan bagaimana agent beroperasi:

```
COMPONENTS SYSTEM PROMPT UNTUK AGENT:

1. ROLE & IDENTITY
   "Anda adalah AI Assistant yang khusus dirancang untuk..."

2. CAPABILITIES
   "Anda memiliki akses ke tools berikut:
   - web_search: Untuk mencari informasi di internet
   - calculator: Untuk perhitungan matematika
   - python: Untuk menjalankan kode Python"

3. CONSTRAINTS
   "Anda HARUS:
   - Selalu verify informasi sebelum menyajikan
   - Tidak membuat asumsi tanpa dasar
   - Mengaku jika tidak tahu sesuatu"

4. BEHAVIOR PATTERNS
   "Ketika menghadapi masalah:
   1. Identifikasi apa yang diketahui
   2. Identifikasi apa yang dibutuhkan
   3. Rencanakan langkah-langkah解决方案
   4. Eksekusi dengan step-by-step"

5. OUTPUT FORMAT
   "Respons Anda harus dalam format:
   - Thought: [penjelasan berpikir Anda]
   - Action: [apa yang akan Anda lakukan]
   - Observation: [apa yang Anda peroleh]
   - Final Answer: [jawaban akhir]"
```

### 6.3 Few-Shot Learning untuk Agent

Few-shot learning membantu agent memahami pola yang diharapkan:

```
CONTOH FEW-SOT AGENT PATTERN:

System: "Anda adalah agent yang mengekstrak informasi dari email."

Examples:

Input: "Meeting besok jam 2 siang dengan Budi tentang project AI"
Output:
{
  "action": "calendar_create",
  "params": {
    "title": "Meeting dengan Budi",
    "datetime": "2024-01-15T14:00:00",
    "attendees": ["Budi"],
    "topic": "Project AI"
  }
}

Input: "Kirim pesan ke Siti bahwa deadline mundur 3 hari"
Output:
{
  "action": "email_send",
  "params": {
    "to": "Siti",
    "subject": "Perubahan Deadline",
    "body": "Deadline project mundur 3 hari..."
  }
}

---

Sekarang, ekstrak action dari input ini:
Input: "Remind saya untuk call Mom hari Minggu jam 8 pagi"
```

### 6.4 Chain of Thought (CoT) untuk Agentic

CoT sangat penting untuk agent yang perlu reasoning kompleks:

```
SYSTEM PROMPT DENGAN CoT:

"Untuk setiap tugas, Anda harus berpikir langkah demi langkah:

Thought 1: Apa yang ingin dicapai user?
→ [Analisis goal]

Thought 2: Informasi apa yang sudah tersedia?
→ [Assess current state]

Thought 3: Informasi apa yang masih kurang?
→ [Identify gaps]

Thought 4: Bagaimana cara mendapat informasi yang kurang?
→ [Plan actions]

Thought 5: Urutan langkah apa yang paling efisien?
→ [Sequence planning]

Thought 6: Apakah ada potential issues?
→ [Risk assessment]

Baru kemudian eksekusi."
```

### 6.5 Tool Definition untuk Agent

Penting untuk mendefinisikan tools dengan jelas agar agent tahu kapan dan bagaimana menggunakannya:

```
TOOL DEFINITION TEMPLATE:

{
  "name": "web_search",
  "description": "Mencari informasi di internet. Gunakan untuk fakta,
                   statistik, atau informasi terkini yang tidak ada di 
                   knowledge base Anda.",
  "parameters": {
    "type": "object",
    "properties": {
      "query": {
        "type": "string",
        "description": "Query pencarian yang akan digunakan"
      },
      "num_results": {
        "type": "integer",
        "description": "Jumlah hasil yang diinginkan",
        "default": 5
      }
    },
    "required": ["query"]
  },
  "examples": [
    {
      "input": "Apa harga Bitcoin hari ini?",
      "expected_action": "web_search",
      "expected_params": {"query": "harga Bitcoin terkini", "num_results": 3}
    }
  ]
}
```

### 6.6 Prompt Engineering Best Practices untuk Agent

#### DO's (Lakukan):

```
1. ✅ Jadilah SPECIFIC
   ❌ "Cari tentang AI"
   ✅ "Cari perkembangan AI dalam healthcare tahun 2024"

2. ✅ Berikan CONTEXT yang cukup
   ❌ "Write code"
   ✅ "Write Python code untuk membaca file CSV dengan 1 juta baris 
        secara efisien"

3. ✅ Definisikan OUTPUT FORMAT
   "Respon dalam format JSON berikut:
   {action: string, params: object}"

4. ✅ Berikan CONSTRAINTS
   "Jawaban maksimal 100 kata"
   "Gunakan hanya sumber yang reputable"

5. ✅ Test dan ITERATE
   Prompt Anda tidak akan langsung sempurna.
   Test, evaluasi, dan perbaiki secara iteratif.
```

#### DON'Ts (Hindari):

```
1. ❌ Jangan AMBIGUOUS
   "Buat yang bagus" - apa definition "bagus"?

2. ❌ Jangan OVERLOAD
   Terlalu banyak instruction sekaligus akan membingungkan agent

3. ❌ Jangan INCONSISTENT
   Jika Anda quiere format tertentu di awal, pertahankan sampai akhir

4. ❌ Jangan MISSING EXAMPLES
   Untuk tasks kompleks, selalu berikan contoh

5. ❌ Jangan IGNORE FAILURES
   Jika agent gagal, perbaiki prompt, bukan memaksa agent
```

---

## 7. Arsitektur Dasar Agent

### 7.1 Simple Reflex Agent

Arsitektur paling sederhana yang hanya merespons berdasarkan kondisi saat ini:

```
┌─────────────────────────────────────────────┐
│           SIMPLE REFLEX AGENT              │
├─────────────────────────────────────────────┤
│                                             │
│    INPUT ──▶ RULES ──▶ ACTION              │
│                 │                          │
│    [Sensor]    │   [Condition-Action]    │
│                 │                          │
│    "Apa         │   IF cuaca = hujan      │
│     cuaca        │   THEN ambil payung     │
│     hari ini?"  │                          │
│                 │                          │
└─────────────────────────────────────────────┘

KARAKTERISTIK:
• Bekerja berdasarkan kondisi langsung (immediate)
• Tidak memiliki memori
• Tidak bisa belajar dari pengalaman
• Cocok untuk tugas sederhana dengan rules yang jelas

CONTOH IMPLEMENTASI:
if user_input.contains("weather"):
    get_weather()
elif user_input.contains("time"):
    get_time()
elif user_input.contains("email"):
    send_email()
```

### 7.2 Model-Based Reflex Agent

Agent dengan model internal untuk menyimpan state:

```
┌─────────────────────────────────────────────────────┐
│            MODEL-BASED REFLEX AGENT                │
├─────────────────────────────────────────────────────┤
│                                                     │
│    INPUT ──▶ MODEL ──▶ RULES ──▶ ACTION          │
│                 │                    │            │
│    [Sensor]     │   [Internal        │  [Actuator]│
│                 │    State]          │            │
│                 │                    │            │
│    Pesan baru   │   • Unread: 5     │  Tandai    │
│    masuk        │   • Priority: 2    │  sebagai    │
│                 │   • From: Budi    │  dibaca     │
│                 │                    │            │
└─────────────────────────────────────────────────────┘

KARAKTERISTIK:
• Memiliki model internal tentang dunia
• Bisa track state dari waktu ke waktu
• Keputusan berdasarkan state saat ini + rules
• Lebih adaptif dari simple reflex

CONTOH IMPLEMENTASI:
class AgentState:
    def __init__(self):
        self.conversation_history = []
        self.user_preferences = {}
        self.current_context = None

def process_input(user_input, state):
    # Update state
    state.conversation_history.append(user_input)
    
    # Decision based on state
    if is_greeting(user_input):
        return generate_greeting(state)
    elif is_question(user_input):
        return answer_question(user_input, state)
```

### 7.3 Goal-Based Agent

Agent yang bekerja menuju tujuan tertentu dengan planning:

```
┌──────────────────────────────────────────────────────────┐
│                  GOAL-BASED AGENT                        │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐         │
│  │ PERCEPT  │───▶│  MODEL   │───▶│  GOAL    │         │
│  └──────────┘    └──────────┘    └──────────┘         │
│                       │                 │              │
│                       ▼                 ▼              │
│                 ┌──────────┐    ┌──────────┐         │
│                 │ PLANNING │    │  STATE   │         │
│                 │          │    │          │         │
│                 │ Goals:   │    │ Current: │         │
│                 │ - Book   │    │ - Step 2 │         │
│                 │   hotel  │    │          │         │
│                 └──────────┘    └──────────┘         │
│                       │                 │              │
│                       ▼                 ▼              │
│                 ┌──────────────────────────┐         │
│                 │       ACTIONS             │         │
│                 │  1. Search hotels        │         │
│                 │  2. Compare prices       │         │
│                 │  3. Book (selected)      │         │
│                 │  4. Confirm              │         │
│                 └──────────────────────────┘         │
└──────────────────────────────────────────────────────────┘

KARAKTERISTIK:
• Mempunyai tujuan eksplisit
• Bisa planning urutan actions
• Bisa goal decomposition
• Fleksibel dalam mencapai tujuan

CONTOH:
Goal: "Buatkan presentasi untuk meeting besok"

Planning:
1. Tentukan topik dan scope presentasi
2. Riset materi yang relevan
3. Kumpulkan data pendukung
4. Buat outline
5. Develop konten per slide
6. Design visual
7. Review dan finalize
```

### 7.4 Utility-Based Agent

Agent yang memilih action berdasarkan utility (manfaat) максимизация:

```
┌────────────────────────────────────────────────────────┐
│              UTILITY-BASED AGENT                       │
├────────────────────────────────────────────────────────┤
│                                                        │
│  ┌─────────┐    ┌─────────────┐    ┌───────────┐    │
│  │ PERCEPT │───▶│   STATE     │───▶│ UTILITY   │    │
│  └─────────┘    │             │    │ FUNCTION   │    │
│                 │ Current:    │    │            │    │
│                 │ - User      │    │ Calculate: │    │
│                 │   preferences│    │ - Time     │    │
│                 │ - Options   │    │ - Cost     │    │
│                 │ - History   │    │ - Quality  │    │
│                 └─────────────┘    │ - Success  │    │
│                       │           │   prob     │    │
│                       ▼           └──────┬──────┘    │
│                 ┌─────────────┐            │          │
│                 │   ACTION    │◀───────────┘          │
│                 │  SELECTION  │                       │
│                 │             │                       │
│                 │ Choose best │                       │
│                 │ option based│                       │
│                 │ on utility  │                       │
│                 └─────────────┘                       │
└────────────────────────────────────────────────────────┘

CONTOH UTILITY CALCULATION:

Options: [Route A, Route B, Route C]

Utility Calculation:
┌──────────┬──────────┬──────────┬──────────┐
│ Route    │ Time     │ Cost     │ Utility  │
├──────────┼──────────┼──────────┼──────────┤
│ Route A  │ 30 min  │ Rp 20K   │ 0.8      │
│ Route B  │ 45 min  │ Rp 15K   │ 0.6      │
│ Route C  │ 25 min  │ Rp 35K   │ 0.7      │
└──────────┴──────────┴──────────┴──────────┘

Agent picks Route A (highest utility)
```

### 7.5 Learning Agent

Agent yang bisa belajar dari pengalaman:

```
┌─────────────────────────────────────────────────────────────┐
│                     LEARNING AGENT                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐                                            │
│  │   CRITIC   │ ←── Feedback dari hasil actions            │
│  └──────┬──────┘                                            │
│         │                                                    │
│         ▼                                                    │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│  │   LEARNING │───▶│   PERFORMANCE│───▶│   ACTING    │     │
│  │   ELEMENT  │    │   ELEMENT   │    │   ELEMENT   │     │
│  └─────────────┘    └─────────────┘    └──────┬──────┘     │
│         ▲                    │                  │            │
│         │                    ▼                  │            │
│         │             ┌─────────────┐          │            │
│         │             │  PROBLEM    │          │            │
│         │             │  GENERATOR  │          │            │
│         │             └─────────────┘          │            │
│         │                                       │            │
│         │    ┌─────────────────────────────┐  │            │
│         └──▶│         FEEDBACK             │◀─┘            │
│              └─────────────────────────────┘                │
│                                                              │
└─────────────────────────────────────────────────────────────┘

TIPE LEARNING:

1. LEARNING FROM DEMONSTRATION
   Agent belajar dari contoh yang diberikan user
   
2. LEARNING FROM FEEDBACK
   Agent belajar dari reward/punishment
   
3. LEARNING FROM MISTAKES
   Agent mengidentifikasi apa yang salah dan memperbaiki

CONTOH IMPLEMENTASI:
class LearningAgent:
    def __init__(self):
        self.learned_patterns = {}
        self.success_rate = {}
        
    def act(self, state):
        # Pilih action berdasarkan learning
        best_action = self.choose_best_action(state)
        result = self.execute(best_action)
        
        # Update learning
        self.update_success_rate(best_action, result)
        self.learn_from_result(result)
        
        return result
```

---

## 8. Tools dan Framework

### 8.1 Framework Populer untuk Agentic AI

#### 8.1.1 LangChain / LangGraph

```
LANGCHAIN & LANGGRAPH:
═══════════════════════════════════════════════════════════════

LangChain adalah framework paling populer untuk membangun 
aplikasi dengan LLM, termasuk agent systems.

KOMPONEN UTAMA:

┌────────────────────────────────────────────────────────────┐
│ LANGCHAIN ECOSYSTEM                                       │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Chains    │  │   Agents    │  │   Memory    │        │
│  │             │  │             │  │             │        │
│  │ • LLMChain  │  │ • ReAct     │  │ • Buffer    │        │
│  │ • Sequential│  │ • Plan-and-│  │ • Summary   │        │
│  │ • Router    │  │   Execute   │  │ • Entity    │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Tools     │  │  Callbacks  │  │  Evaluation │        │
│  │             │  │             │  │             │        │
│  │ • Functions │  │ • Logging   │  │ • LangSmith │        │
│  │ • APIs     │  │ • Tracing   │  │ • Metrics   │        │
│  │ • Search    │  │ • Monitoring│  │ • Testing   │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                            │
│  LANGGRAPH:                                                │
│  • Graph-based workflow orchestration                      │
│  • Multi-agent systems                                    │
│  • Complex agentic workflows                              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

#### 8.1.2 CrewAI

```
CREWAI:
═══════════════════════════════════════════════════════════════

CrewAI adalah framework yang dirancang khusus untuk 
multi-agent systems dengan konsep "crew" atau tim.

KONSEP UTAMA:

┌────────────────────────────────────────────────────────────┐
│ CREWAI ARCHITECTURE                                      │
├────────────────────────────────────────────────────────────┤
│                                                            │
│   ┌─────────────┐                                         │
│   │    Crew    │ ←──── Kumpulan Agents yang bekerja    │
│   │             │      bersama menuju goal bersama       │
│   └──────┬──────┘                                         │
│          │                                                │
│    ┌─────┴─────┬─────────┬─────────┐                     │
│    │           │         │         │                     │
│    ▼           ▼         ▼         ▼                     │
│ ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                  │
│ │Agent1│  │Agent2│  │Agent3│  │Agent4│  ←─ Individual   │
│ │      │  │      │  │      │  │      │     Agents with   │
│ │ Role │  │ Role │  │ Role │  │ Role │     specific     │
│ │ Goal │  │ Goal │  │ Goal │  │ Goal │     roles        │
│ └──────┘  └──────┘  └──────┘  └──────┘                  │
│    │          │         │         │                      │
│    └──────────┴────┬────┴─────────┘                      │
│                    │                                     │
│                    ▼                                     │
│             ┌─────────────┐                             │
│             │   Tasks     │                             │
│             │             │                             │
│             │ • Subtask 1 │                             │
│             │ • Subtask 2 │                             │
│             │ • Subtask 3 │                             │
│             └─────────────┘                             │
│                    │                                     │
│                    ▼                                     │
│             ┌─────────────┐                             │
│             │   Process   │                             │
│             │             │                             │
│             │ • Sequential│                             │
│             │ • Hierarch. │                             │
│             │ • Parallel  │                             │
│             └─────────────┘                             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

#### 8.1.3 AutoGen (Microsoft)

```
AUTOGEN:
═══════════════════════════════════════════════════════════════

AutoGen adalah framework dari Microsoft untuk membangun 
aplikasi multi-agent dengan focus pada flexibility.

FITUR UTAMA:

┌────────────────────────────────────────────────────────────┐
│ AUTOGEN FEATURES                                          │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  1. CONVERSABLE AGENTS                                    │
│     • Agent bisa saling berkomunikasi                      │
│     • Flexible conversation patterns                       │
│     • Human-in-the-loop support                           │
│                                                            │
│  2. CUSTOMIZABLE AGENTS                                   │
│     •-built-in agents: Assistant, UserProxy, etc.        │
│     • Bisa buat custom agent types                        │
│     • Flexible tools integration                           │
│                                                            │
│  3. MULTI-AGENT COLLABORATION                            │
│     • Group chat                                          │
│     • Speaker selection                                   │
│     • Conversation flow control                            │
│                                                            │
│  4. CODE EXECUTION                                        │
│     • Code generation dan execution                        │
│     • Jupyter kernel integration                          │
│     • Error handling dan debugging                         │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### 8.2 Tool Comparison

```
PERBANDINGAN FRAMEWORK:

┌────────────┬────────────┬────────────┬────────────┐
│ Feature    │  LangChain │   CrewAI   │  AutoGen   │
│            │ /LangGraph │            │            │
├────────────┼────────────┼────────────┼────────────┤
│ Learning   │ ★★★★★      │ ★★★★☆     │ ★★★★☆     │
│ Curve      │            │            │            │
├────────────┼────────────┼────────────┼────────────┤
│ Multi-    │ ★★★☆☆      │ ★★★★★     │ ★★★★★     │
│ Agent     │            │            │            │
├────────────┼────────────┼────────────┼────────────┤
│ Code      │ ★★★★☆     │ ★★★☆☆     │ ★★★★★     │
│ Execution │            │            │            │
├────────────┼────────────┼────────────┼────────────┤
│ Custom-   │ ★★★★★      │ ★★★★☆     │ ★★★★☆     │
│ izability │            │            │            │
├────────────┼────────────┼────────────┼────────────┤
│ Document- │ ★★★★★      │ ★★★★☆     │ ★★★☆☆     │
│ ation     │            │            │            │
├────────────┼────────────┼────────────┼────────────┤
│ Enterprise│ ★★★★★      │ ★★★☆☆     │ ★★★★☆     │
│ Ready    │            │            │            │
├────────────┼────────────┼────────────┼────────────┤
│ Community │ ★★★★★      │ ★★★★☆     │ ★★★★☆     │
│ Support   │            │            │            │
└────────────┴────────────┴────────────┴────────────┘
```

### 8.3 Memilih Framework yang Tepat

| Kebutuhan | Rekomendasi |
|-----------|-------------|
| **Mulai belajar** | LangChain (dokumentasi lengkap) |
| **Multi-agent team** | CrewAI (abstraksi tinggi) |
| **Complex conversation** | AutoGen (flexible) |
| **RAG + Agent** | LangChain/LangGraph |
| **Production enterprise** | LangGraph + LangSmith |

---

## 8.4 Data Structures untuk AI Engineering

Memahami struktur data yang tepat sangat penting untuk membangun agent yang efisien. Section ini akan membahas struktur data yang paling sering digunakan dalam Agentic Engineering.

### 8.4.1 Python Collections Deep Dive

#### List (Daftar)

```python
# Karakteristik List:
# - Ordered (berurutan)
# - Mutable (bisa diubah)
# - Allows duplicates (boleh ada duplikat)
# - Indexed (punya index)

# Penggunaan dalam Agentic AI:
# - Menyimpan conversation history
# - Queue tasks yang akan dieksekusi
# - Collection of results

# Contoh: Conversation History
conversation_history = [
    {"role": "user", "content": "Halo, bantu saya membuat rencana bisnis"},
    {"role": "assistant", "content": "Tentu! Apa jenis bisnis yang ingin Anda mulai?"},
    {"role": "user", "content": "Saya ingin membuka coffee shop"},
]

# Operasi List yang Sering Digunakan:
tasks = []
tasks.append("Riset pasar")           # Add ke akhir
tasks.insert(0, "Definisikan goal")   # Add ke posisi tertentu
tasks.extend(["Budgeting", "Planning"])  # Add multiple items
last_task = tasks.pop()               # Remove dan return item terakhir
first_task = tasks.pop(0)             # Remove item pertama
del tasks[1]                          # Delete item di index tertentu

# List Comprehension untuk Transformasi
results = [task.upper() for task in tasks if len(task) > 5]
```

**Kapan Menggunakan List:**
- ✅ Urutan penting
- ✅ Perlu akses berdasarkan index
- ✅ Boleh ada duplikat
- ✅ Perlu sering menambah/menghapus di akhir

**Performance:**
- Access by index: O(1) - Sangat cepat
- Append/Pop (end): O(1) - Sangat cepat
- Insert/Delete (middle): O(n) - Lambat untuk list besar
- Search: O(n) - Lambat untuk list besar

---

#### Tuple

```python
# Karakteristik Tuple:
# - Ordered (berurutan)
# - Immutable (TIDAK bisa diubah)
# - Allows duplicates
# - Indexed

# Penggunaan dalam Agentic AI:
# - Configuration yang tidak berubah
# - Return multiple values dari function
# - Dictionary keys (karena immutable)

# Contoh: Configuration Tuple
LLM_CONFIG = ("gpt-4o", 0.7, 1000)  # (model, temperature, max_tokens)

# Unpacking
model, temp, max_tokens = LLM_CONFIG

# Function return multiple values
def calculate_metrics(agent_output):
    accuracy = 0.95
    latency = 0.23
    cost = 0.002
    return accuracy, latency, cost  # Returns tuple

# Usage
acc, lat, cost = calculate_metrics(output)
```

**Kapan Menggunakan Tuple:**
- ✅ Data tidak boleh berubah (immutable)
- ✅ Return multiple values dari function
- ✅ Sebagai dictionary key
- ✅ Performance critical (tuple lebih cepat dari list)

**Performance:**
- Access by index: O(1)
- Iteration: O(n)
- Lebih cepat dari list untuk iteration

---

#### Set

```python
# Karakteristik Set:
# - Unordered (tidak berurutan)
# - Mutable (bisa diubah)
# - NO duplicates (unik)
# - Not indexed

# Penggunaan dalam Agentic AI:
# - Tracking visited states
# - Deduplication
# - Fast membership testing
# - Intersection/Union operations

# Contoh: Tracking visited URLs
visited_urls = set()

def process_url(url):
    if url in visited_urls:  # O(1) - Sangat cepat!
        print(f"URL {url} sudah diproses")
        return
    
    visited_urls.add(url)
    # Process the URL...

# Set Operations untuk Agent
allowed_tools = {"search", "calculator", "code_interpreter"}
available_tools = {"search", "email", "calendar"}

# Intersection (tools yang bisa digunakan)
usable_tools = allowed_tools & available_tools  # {"search"}

# Union (semua tools)
all_tools = allowed_tools | available_tools

# Difference (tools yang hanya di allowed)
only_allowed = allowed_tools - available_tools  # {"calculator", "code_interpreter"}

# Symmetric Difference (tools yang hanya ada di salah satu)
unique_tools = allowed_tools ^ available_tools
```

**Kapan Menggunakan Set:**
- ✅ Perlu uniqueness (tidak ada duplikat)
- ✅ Fast membership testing (`x in set`)
- ✅ Mathematical set operations
- ✅ Tracking visited items

**Performance:**
- Membership test (`in`): O(1) - Sangat cepat!
- Add/Remove: O(1)
- Intersection/Union: O(len(s1) + len(s2))

---

#### Dictionary

```python
# Karakteristik Dictionary:
# - Ordered (Python 3.7+, insertion order preserved)
# - Mutable (bisa diubah)
# - Keys must be unique and immutable
# - Key-value pairs

# Penggunaan dalam Agentic AI:
# - Storing agent state
# - Tool definitions
# - Configuration
# - Caching results

# Contoh: Agent State
agent_state = {
    "current_goal": "Buat presentasi tentang AI",
    "completed_tasks": ["Riset", "Outline"],
    "pending_tasks": ["Design slides", "Write content"],
    "context": {
        "user_preferences": {"style": "professional", "length": "short"},
        "resources_used": ["Wikipedia", "ArXiv"],
    },
    "memory": {
        "short_term": ["Last query was about AI"],
        "long_term": {"user_name": "Budi", "expertise": "beginner"}
    }
}

# Access dan Modification
current_goal = agent_state["current_goal"]
agent_state["status"] = "in_progress"  # Add new key
agent_state["completed_tasks"].append("Research")  # Modify nested

# Dictionary Methods
keys = agent_state.keys()      # Get all keys
values = agent_state.values()  # Get all values
items = agent_state.items()    # Get key-value pairs

# Safe access dengan .get()
tool_name = agent_state.get("tool", "default_tool")

# Dictionary Comprehension
tool_mapping = {tool["name"]: tool for tool in available_tools}

# Merging dictionaries (Python 3.9+)
config1 = {"temperature": 0.7, "model": "gpt-4o"}
config2 = {"max_tokens": 1000, "top_p": 0.9}
merged_config = config1 | config2
```

**Kapan Menggunakan Dictionary:**
- ✅ Key-value mapping
- ✅ Fast lookup by key
- ✅ Grouping related data
- ✅ Configuration objects

**Performance:**
- Access by key: O(1) - Sangat cepat!
- Insert/Delete: O(1)
- Membership test (`in`): O(1)

---

### 8.4.2 Stack dan Queue untuk Agent

#### Stack (LIFO - Last In First Out)

```python
# Stack menggunakan List
stack = []

# Push (add to top)
stack.append("Task 1")
stack.append("Task 2")
stack.append("Task 3")

# Pop (remove from top)
current_task = stack.pop()  # "Task 3"

# Penggunaan dalam Agentic AI:
# - Undo/Redo functionality
# - DFS (Depth-First Search) traversal
# - Backtracking algorithms
# - Function call stack

# Contoh: Backtracking untuk Planning
def plan_with_backtracking(goals, current_plan=[]):
    if not goals:
        return current_plan
    
    goal = goals[0]
    remaining_goals = goals[1:]
    
    # Try this goal
    current_plan.append(goal)
    result = plan_with_backtracking(remaining_goals, current_plan)
    
    if result is not None:
        return result
    
    # Backtrack (pop from stack)
    current_plan.pop()
    return None
```

#### Queue (FIFO - First In First Out)

```python
from collections import deque

# Queue menggunakan deque (lebih efisien dari list)
task_queue = deque()

# Enqueue (add to back)
task_queue.append("Task 1")
task_queue.append("Task 2")
task_queue.append("Task 3")

# Dequeue (remove from front)
next_task = task_queue.popleft()  # "Task 1"

# Penggunaan dalam Agentic AI:
# - Task scheduling
# - BFS (Breadth-First Search)
# - Request queuing
# - Message passing between agents

# Contoh: Task Queue untuk Multi-Agent System
class AgentTaskQueue:
    def __init__(self):
        self.queue = deque()
    
    def add_task(self, agent_id, task, priority=0):
        self.queue.append({
            "agent_id": agent_id,
            "task": task,
            "priority": priority,
            "timestamp": time.time()
        })
    
    def get_next_task(self):
        if self.queue:
            return self.queue.popleft()
        return None
    
    def get_queue_size(self):
        return len(self.queue)
```

---

### 8.4.3 When to Use Which Data Structure

```
DECISION TREE UNTUK MEMILIH STRUKTUR DATA:

Apakah perlu key-value mapping?
├── YA → Gunakan DICTIONARY
│
└── TIDAK → Lanjut pertanyaan berikut:
    
    Apakah perlu uniqueness (tidak ada duplikat)?
    ├── YA → Gunakan SET
    │
    └── TIDAK → Lanjut pertanyaan berikut:
        
        Apakah urutan penting?
        ├── YA → Lanjut pertanyaan berikut:
        │   
        │   Perlu akses cepat by index?
        │   ├── YA → Gunakan LIST
        │   └── TIDAK → Pertimbangkan deque untuk queue/stack
        │
        └── TIDAK → SET atau LIST (tergantung uniqueness)
```

**Quick Reference Table:**

| Use Case | Best Structure | Time Complexity |
|----------|---------------|-----------------|
| Fast lookup by key | Dictionary | O(1) |
| Fast membership test | Set | O(1) |
| Maintain insertion order | List | O(1) append |
| LIFO operations | List (as stack) | O(1) push/pop |
| FIFO operations | deque | O(1) append/popleft |
| Unique items | Set | O(1) add |
| Key-value pairs | Dictionary | O(1) insert |
| Nested hierarchical data | Dict + List | Varies |

---

### 8.4.4 Common Patterns dalam Agentic AI

#### Pattern 1: Conversation Buffer

```python
from collections import deque

class ConversationBuffer:
    """Buffer untuk menyimpan conversation history dengan max length"""
    
    def __init__(self, max_length=10):
        self.buffer = deque(maxlen=max_length)
    
    def add_message(self, role, content):
        self.buffer.append({"role": role, "content": content})
    
    def get_history(self):
        return list(self.buffer)
    
    def clear(self):
        self.buffer.clear()
    
    def get_summary_context(self):
        # Return last N messages untuk context LLM
        return list(self.buffer)[-5:]

# Usage
buffer = ConversationBuffer(max_length=20)
buffer.add_message("user", "Halo")
buffer.add_message("assistant", "Hai! Ada yang bisa saya bantu?")
```

#### Pattern 2: Task Queue dengan Priority

```python
import heapq
from dataclasses import dataclass, field
from typing import Any

@dataclass(order=True)
class PrioritizedTask:
    priority: int
    task_id: str = field(compare=False)
    description: str = field(compare=False)

class PriorityTaskQueue:
    """Task queue dengan priority scheduling"""
    
    def __init__(self):
        self.queue = []
        self.counter = 0
    
    def add_task(self, task_id, description, priority=0):
        # Lower number = higher priority
        heapq.heappush(self.queue, PrioritizedTask(priority, task_id, description))
        self.counter += 1
    
    def get_next_task(self):
        if self.queue:
            task = heapq.heappop(self.queue)
            return {"id": task.task_id, "description": task.description}
        return None
    
    def peek_next_task(self):
        if self.queue:
            task = self.queue[0]
            return {"id": task.task_id, "description": task.description}
        return None

# Usage
queue = PriorityTaskQueue()
queue.add_task("task-1", "Urgent bug fix", priority=1)
queue.add_task("task-2", "Feature development", priority=5)
queue.add_task("task-3", "Documentation", priority=10)

next_task = queue.get_next_task()  # Returns task-1 (highest priority)
```

#### Pattern 3: Result Cache

```python
from typing import Dict, Any, Optional
import hashlib
import json

class ResultCache:
    """Cache untuk menyimpan hasil dari LLM calls"""
    
    def __init__(self, max_size=1000):
        self.cache: Dict[str, Any] = {}
        self.access_order = []
        self.max_size = max_size
    
    def _generate_key(self, prompt: str, model: str, **kwargs) -> str:
        """Generate unique key dari input parameters"""
        key_data = json.dumps({
            "prompt": prompt,
            "model": model,
            **kwargs
        }, sort_keys=True)
        return hashlib.md5(key_data.encode()).hexdigest()
    
    def get(self, key: str) -> Optional[Any]:
        """Get dari cache"""
        if key in self.cache:
            # Update access order untuk LRU
            self.access_order.remove(key)
            self.access_order.append(key)
            return self.cache[key]
        return None
    
    def set(self, key: str, value: Any):
        """Set ke cache dengan LRU eviction"""
        if key in self.cache:
            self.access_order.remove(key)
        elif len(self.cache) >= self.max_size:
            # Evict least recently used
            oldest_key = self.access_order.pop(0)
            del self.cache[oldest_key]
        
        self.cache[key] = value
        self.access_order.append(key)
    
    def get_or_compute(self, key: str, compute_fn):
        """Get dari cache atau compute jika tidak ada"""
        result = self.get(key)
        if result is None:
            result = compute_fn()
            self.set(key, result)
        return result

# Usage dalam Agent
cache = ResultCache(max_size=500)

def get_llm_response(prompt, model="gpt-4o"):
    cache_key = cache._generate_key(prompt, model)
    return cache.get_or_compute(
        cache_key,
        lambda: call_llm_api(prompt, model)  # Expensive operation
    )
```

---

## 8.5 Security Best Practices (Expanded)

Security adalah aspek kritis dalam membangun Agentic AI systems. Section ini akan membahas security practices secara mendalam.

### 8.5.1 API Key Security

#### ❌ DON'T: Hardcode API Keys

```python
# SANGAT BERBAHAYA - JANGAN LAKUKAN INI!
openai.api_key = "sk-proj-abc123xyz789..."

# Atau lebih buruk lagi, commit ke Git
ANTHROPIC_API_KEY = "sk-ant-..."
```

#### ✅ DO: Use Environment Variables

```python
# File: .env (JANGAN commit ke Git!)
OPENAI_API_KEY=sk-proj-abc123xyz789...
ANTHROPIC_API_KEY=sk-ant-...
DATABASE_URL=postgresql://user:pass@localhost/db

# File: config.py
import os
from dotenv import load_dotenv

# Load dari file .env
load_dotenv()

# Access dengan os.getenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")

if not OPENAI_API_KEY:
    raise ValueError("OPENAI_API_KEY tidak ditemukan. Cek file .env")
```

#### ✅ DO: Use .gitignore

```bash
# File: .gitignore
# Jangan pernah commit file-file ini:

.env
.env.local
.env.production
*.key
*.pem
credentials.json
service_account.json
__pycache__/
*.pyc
.pytest_cache/
.coverage
```

#### ✅ DO: Validate API Keys

```python
import re

def validate_openai_key(key: str) -> bool:
    """Validasi format OpenAI API key"""
    # OpenAI keys biasanya mulai dengan 'sk-'
    pattern = r'^sk-[a-zA-Z0-9]{20,}$'
    return bool(re.match(pattern, key))

def validate_anthropic_key(key: str) -> bool:
    """Validasi format Anthropic API key"""
    # Anthropic keys biasanya mulai dengan 'sk-ant-'
    pattern = r'^sk-ant-[a-zA-Z0-9-]{20,}$'
    return bool(re.match(pattern, key))

# Usage
api_key = os.getenv("OPENAI_API_KEY")
if not validate_openai_key(api_key):
    raise ValueError("Invalid OpenAI API key format")
```

---

### 8.5.2 Input Validation & Sanitization

#### Input Validation untuk User Input

```python
import re
from typing import Optional

class InputValidator:
    """Validator untuk input user ke agent"""
    
    MAX_INPUT_LENGTH = 10000  # Maximum characters
    ALLOWED_FILE_EXTENSIONS = {'.txt', '.md', '.json', '.csv'}
    
    @staticmethod
    def validate_text_input(text: str, max_length: int = None) -> tuple[bool, Optional[str]]:
        """
        Validasi text input dari user
        
        Returns:
            (is_valid, error_message)
        """
        max_length = max_length or InputValidator.MAX_INPUT_LENGTH
        
        if not text or not text.strip():
            return False, "Input tidak boleh kosong"
        
        if len(text) > max_length:
            return False, f"Input terlalu panjang (max {max_length} characters)"
        
        # Check untuk potential injection attacks
        dangerous_patterns = [
            r'<script[^>]*>',  # XSS
            r'javascript:',    # JavaScript protocol
            r'data:text/html', # Data URI
        ]
        
        for pattern in dangerous_patterns:
            if re.search(pattern, text, re.IGNORECASE):
                return False, "Input mengandung konten yang tidak aman"
        
        return True, None
    
    @staticmethod
    def validate_file_path(file_path: str, allowed_base_dir: str) -> tuple[bool, Optional[str]]:
        """
        Validasi file path untuk mencegah directory traversal attacks
        
        Args:
            file_path: Path yang akan divalidasi
            allowed_base_dir: Base directory yang diizinkan
        
        Returns:
            (is_valid, error_message)
        """
        from pathlib import Path
        
        # Resolve ke absolute path
        try:
            resolved_path = Path(file_path).resolve()
            base_path = Path(allowed_base_dir).resolve()
            
            # Check apakah path ada di dalam allowed directory
            if not str(resolved_path).startswith(str(base_path)):
                return False, "Akses ke file di luar direktori yang diizinkan"
            
            # Check untuk directory traversal
            if '..' in file_path:
                return False, "Directory traversal tidak diizinkan"
            
            # Check extension
            if resolved_path.suffix.lower() not in InputValidator.ALLOWED_FILE_EXTENSIONS:
                return False, f"File extension {resolved_path.suffix} tidak diizinkan"
            
            return True, None
            
        except Exception as e:
            return False, f"Invalid file path: {str(e)}"
    
    @staticmethod
    def validate_url(url: str) -> tuple[bool, Optional[str]]:
        """Validasi URL untuk web scraping atau search"""
        from urllib.parse import urlparse
        
        try:
            parsed = urlparse(url)
            
            # Check scheme
            if parsed.scheme not in ['http', 'https']:
                return False, "Hanya HTTP dan HTTPS URLs yang diizinkan"
            
            # Check untuk internal URLs (prevent SSRF)
            blocked_domains = [
                'localhost',
                '127.0.0.1',
                '192.168.',
                '10.',
                '172.16.',
                '172.17.',
                '172.18.',
                '172.19.',
                '172.2',
                '172.30.',
                '172.31.',
            ]
            
            for blocked in blocked_domains:
                if blocked in parsed.netloc:
                    return False, "Akses ke internal URLs tidak diizinkan"
            
            return True, None
            
        except Exception as e:
            return False, f"Invalid URL: {str(e)}"

# Usage dalam Agent
def process_user_request(user_input: str, file_path: str = None):
    # Validate text input
    is_valid, error = InputValidator.validate_text_input(user_input)
    if not is_valid:
        return {"error": error}
    
    # Validate file path jika ada
    if file_path:
        is_valid, error = InputValidator.validate_file_path(
            file_path, 
            allowed_base_dir="./uploads"
        )
        if not is_valid:
            return {"error": error}
    
    # Process the request...
```

---

### 8.5.3 Rate Limiting Implementation

```python
import time
from collections import defaultdict
from threading import Lock
from typing import Dict, Tuple

class RateLimiter:
    """
    Rate limiter untuk mengontrol jumlah requests ke LLM API
    
    Implementasi: Token Bucket Algorithm
    """
    
    def __init__(self, max_requests: int, time_window: int):
        """
        Args:
            max_requests: Maximum requests per time window
            time_window: Time window dalam seconds
        """
        self.max_requests = max_requests
        self.time_window = time_window
        self.requests: Dict[str, list] = defaultdict(list)
        self.lock = Lock()
    
    def is_allowed(self, client_id: str) -> Tuple[bool, int]:
        """
        Check apakah request diizinkan
        
        Args:
            client_id: Unique identifier untuk client/user
        
        Returns:
            (is_allowed, retry_after_seconds)
        """
        with self.lock:
            current_time = time.time()
            
            # Remove expired timestamps
            self.requests[client_id] = [
                ts for ts in self.requests[client_id]
                if current_time - ts < self.time_window
            ]
            
            # Check if under limit
            if len(self.requests[client_id]) < self.max_requests:
                self.requests[client_id].append(current_time)
                return True, 0
            
            # Calculate retry after
            oldest_request = min(self.requests[client_id])
            retry_after = int(self.time_window - (current_time - oldest_request)) + 1
            
            return False, retry_after
    
    def get_usage(self, client_id: str) -> Dict:
        """Get current usage statistics"""
        with self.lock:
            current_time = time.time()
            valid_requests = [
                ts for ts in self.requests[client_id]
                if current_time - ts < self.time_window
            ]
            
            return {
                "requests_made": len(valid_requests),
                "requests_limit": self.max_requests,
                "time_window_seconds": self.time_window,
                "remaining": self.max_requests - len(valid_requests)
            }

# Usage dalam Agent
class LLMClient:
    def __init__(self, api_key: str):
        self.api_key = api_key
        # 100 requests per minute
        self.rate_limiter = RateLimiter(max_requests=100, time_window=60)
    
    def make_request(self, prompt: str, client_id: str = "default") -> dict:
        # Check rate limit
        is_allowed, retry_after = self.rate_limiter.is_allowed(client_id)
        
        if not is_allowed:
            return {
                "error": "Rate limit exceeded",
                "retry_after": retry_after,
                "usage": self.rate_limiter.get_usage(client_id)
            }
        
        # Make API call...
        response = call_llm_api(prompt, self.api_key)
        return response

# Advanced: Decorator untuk rate limiting
from functools import wraps

def rate_limit(max_requests: int, time_window: int):
    """Decorator untuk rate limiting function"""
    limiter = RateLimiter(max_requests, time_window)
    
    def decorator(func):
        @wraps(func)
        def wrapper(*args, client_id="default", **kwargs):
            is_allowed, retry_after = limiter.is_allowed(client_id)
            
            if not is_allowed:
                raise RateLimitExceeded(
                    f"Rate limit exceeded. Retry after {retry_after} seconds"
                )
            
            return func(*args, **kwargs)
        return wrapper
    return decorator

# Usage
@rate_limit(max_requests=10, time_window=60)
def call_llm(prompt: str):
    # This function can only be called 10 times per minute
    return openai.ChatCompletion.create(...)
```

---

### 8.5.4 Logging & Audit Trail

```python
import logging
import json
from datetime import datetime
from typing import Dict, Any
import os

class AgentLogger:
    """
    Comprehensive logging untuk Agentic AI systems
    
    Features:
    - Structured logging (JSON format)
    - Multiple log levels
    - Audit trail untuk agent actions
    - Sensitive data masking
    """
    
    def __init__(self, log_dir: str = "logs", log_level: str = "INFO"):
        self.log_dir = log_dir
        os.makedirs(log_dir, exist_ok=True)
        
        # Setup logger
        self.logger = logging.getLogger("AgentLogger")
        self.logger.setLevel(getattr(logging, log_level))
        
        # File handler untuk audit trail
        audit_handler = logging.FileHandler(
            f"{log_dir}/audit_{datetime.now().strftime('%Y%m%d')}.log"
        )
        audit_handler.setFormatter(logging.Formatter('%(asctime)s - %(message)s'))
        self.logger.addHandler(audit_handler)
        
        # Console handler untuk debugging
        console_handler = logging.StreamHandler()
        console_handler.setFormatter(logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        ))
        self.logger.addHandler(console_handler)
    
    def _mask_sensitive_data(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Mask sensitive data sebelum logging"""
        sensitive_keys = ['api_key', 'password', 'token', 'secret', 'authorization']
        
        masked = data.copy()
        for key in masked:
            if any(sensitive in key.lower() for sensitive in sensitive_keys):
                masked[key] = "***REDACTED***"
            elif isinstance(masked[key], dict):
                masked[key] = self._mask_sensitive_data(masked[key])
        
        return masked
    
    def log_agent_action(self, action: str, details: Dict[str, Any], 
                         agent_id: str, status: str = "success"):
        """Log agent action untuk audit trail"""
        log_entry = {
            "timestamp": datetime.now().isoformat(),
            "type": "AGENT_ACTION",
            "agent_id": agent_id,
            "action": action,
            "details": self._mask_sensitive_data(details),
            "status": status
        }
        
        self.logger.info(json.dumps(log_entry))
    
    def log_llm_call(self, model: str, prompt: str, response: str, 
                     tokens_used: int, cost: float, agent_id: str):
        """Log LLM API call"""
        log_entry = {
            "timestamp": datetime.now().isoformat(),
            "type": "LLM_CALL",
            "agent_id": agent_id,
            "model": model,
            "prompt_length": len(prompt),
            "response_length": len(response),
            "tokens_used": tokens_used,
            "cost_usd": cost,
            # Note: Don't log full prompt/response untuk production (privacy)
        }
        
        self.logger.info(json.dumps(log_entry))
    
    def log_error(self, error: Exception, context: Dict[str, Any], agent_id: str):
        """Log error dengan context"""
        log_entry = {
            "timestamp": datetime.now().isoformat(),
            "type": "ERROR",
            "agent_id": agent_id,
            "error_type": type(error).__name__,
            "error_message": str(error),
            "context": self._mask_sensitive_data(context)
        }
        
        self.logger.error(json.dumps(log_entry), exc_info=True)
    
    def log_tool_usage(self, tool_name: str, input_params: Dict, 
                       output: Any, agent_id: str, duration_ms: float):
        """Log tool usage"""
        log_entry = {
            "timestamp": datetime.now().isoformat(),
            "type": "TOOL_USAGE",
            "agent_id": agent_id,
            "tool_name": tool_name,
            "input_params": self._mask_sensitive_data(input_params),
            "output_length": len(str(output)) if output else 0,
            "duration_ms": duration_ms
        }
        
        self.logger.info(json.dumps(log_entry))

# Usage dalam Agent
agent_logger = AgentLogger(log_dir="./agent_logs")

def execute_agent_action(agent_id: str, action: str, params: dict):
    try:
        agent_logger.log_agent_action(
            action=action,
            details=params,
            agent_id=agent_id,
            status="started"
        )
        
        # Execute action...
        result = perform_action(action, params)
        
        agent_logger.log_agent_action(
            action=action,
            details={"result": result},
            agent_id=agent_id,
            status="success"
        )
        
        return result
        
    except Exception as e:
        agent_logger.log_error(
            error=e,
            context={"action": action, "params": params},
            agent_id=agent_id
        )
        raise
```

---

### 8.5.5 Human-in-the-Loop (HITL)

```python
from enum import Enum
from typing import Optional, Callable, Any
import json

class ActionRiskLevel(Enum):
    LOW = "low"           # No confirmation needed
    MEDIUM = "medium"     # Confirmation recommended
    HIGH = "high"         # Confirmation required
    CRITICAL = "critical" # Human approval mandatory

class HumanInTheLoop:
    """
    Human-in-the-loop system untuk critical agent actions
    
    Use cases:
    - Financial transactions
    - Data deletion
    - External communications (email, messages)
    - Code deployment
    - Sensitive data access
    """
    
    def __init__(self, confirmation_callback: Callable[[dict], bool]):
        """
        Args:
            confirmation_callback: Function yang meminta konfirmasi dari human
                                   Returns True jika approved, False jika rejected
        """
        self.confirmation_callback = confirmation_callback
        self.risk_actions = {
            ActionRiskLevel.LOW: [],
            ActionRiskLevel.MEDIUM: [
                "send_email",
                "create_calendar_event",
            ],
            ActionRiskLevel.HIGH: [
                "delete_data",
                "modify_database",
                "transfer_money",
            ],
            ActionRiskLevel.CRITICAL: [
                "deploy_code",
                "delete_user_account",
                "access_sensitive_data",
            ]
        }
    
    def requires_confirmation(self, action: str) -> tuple[bool, ActionRiskLevel]:
        """Check apakah action memerlukan konfirmasi"""
        for risk_level, actions in self.risk_actions.items():
            if action in actions:
                return True, risk_level
        return False, ActionRiskLevel.LOW
    
    def execute_with_confirmation(self, action: str, params: dict, 
                                   agent_id: str) -> dict:
        """
        Execute action dengan konfirmasi jika diperlukan
        
        Returns:
            dict dengan status dan result
        """
        requires_conf, risk_level = self.requires_confirmation(action)
        
        if not requires_conf:
            # No confirmation needed
            return {
                "status": "executed",
                "action": action,
                "risk_level": risk_level.value,
                "confirmation_required": False
            }
        
        # Request confirmation
        confirmation_request = {
            "action": action,
            "params": params,
            "risk_level": risk_level.value,
            "agent_id": agent_id,
            "message": f"Action '{action}' memerlukan konfirmasi Anda. Lanjutkan?"
        }
        
        # Call confirmation callback (implementasi tergantung UI/UX)
        is_approved = self.confirmation_callback(confirmation_request)
        
        if not is_approved:
            return {
                "status": "rejected",
                "action": action,
                "risk_level": risk_level.value,
                "confirmation_required": True,
                "message": "Action ditolak oleh user"
            }
        
        # Approved, execute action
        return {
            "status": "executed",
            "action": action,
            "risk_level": risk_level.value,
            "confirmation_required": True,
            "confirmed_by": "user"
        }

# Contoh: Simple console-based confirmation
def simple_confirmation_callback(request: dict) -> bool:
    """Simple confirmation untuk CLI applications"""
    print("\n" + "="*50)
    print("⚠️  ACTION REQUIRES CONFIRMATION")
    print("="*50)
    print(f"Action: {request['action']}")
    print(f"Risk Level: {request['risk_level']}")
    print(f"Parameters: {json.dumps(request['params'], indent=2)}")
    print("="*50)
    
    response = input("Approve this action? (yes/no): ").strip().lower()
    return response in ['yes', 'y']

# Usage dalam Agent
class SafeAgent:
    def __init__(self, agent_id: str):
        self.agent_id = agent_id
        self.human_in_loop = HumanInTheLoop(
            confirmation_callback=simple_confirmation_callback
        )
    
    def execute_action(self, action: str, params: dict):
        result = self.human_in_loop.execute_with_confirmation(
            action=action,
            params=params,
            agent_id=self.agent_id
        )
        
        if result["status"] == "rejected":
            print(f"❌ Action rejected: {result['message']}")
            return None
        
        # Execute the actual action...
        print(f"✅ Executing action: {action}")
        return perform_action(action, params)

# Example usage
agent = SafeAgent(agent_id="agent-001")
agent.execute_action("send_email", {
    "to": "user@example.com",
    "subject": "Test",
    "body": "Hello"
})
```

---

## 8.6 Project Management untuk AI

Mengelola proyek AI memiliki tantangan unik dibanding software development tradisional. Section ini membahas best practices untuk project management dalam Agentic AI development.

### 8.6.1 Project Structure yang Direkomendasikan

```
agentic-project/
│
├── .env                          # Environment variables (JANGAN commit!)
├── .env.example                  # Template .env (aman untuk commit)
├── .gitignore                    # Git ignore rules
├── requirements.txt              # Dependencies (pip)
├── pyproject.toml               # Project metadata (modern Python)
├── README.md                     # Project documentation
│
├── src/                          # Source code
│   ├── __init__.py
│   ├── main.py                   # Entry point
│   ├── agent/                    # Agent logic
│   │   ├── __init__.py
│   │   ├── base_agent.py        # Base agent class
│   │   ├── agent_state.py       # State management
│   │   └── agent_memory.py      # Memory implementation
│   │
│   ├── tools/                    # Custom tools
│   │   ├── __init__.py
│   │   ├── web_search.py
│   │   ├── calculator.py
│   │   └── file_operations.py
│   │
│   ├── prompts/                  # Prompt templates
│   │   ├── __init__.py
│   │   ├── system_prompts.py
│   │   └── templates/
│   │       ├── agent_system.txt
│   │       └── task_specific.txt
│   │
│   ├── utils/                    # Utility functions
│   │   ├── __init__.py
│   │   ├── config.py            # Configuration loading
│   │   ├── logging.py           # Logging setup
│   │   └── validators.py        # Input validators
│   │
│   └── tests/                    # Tests
│       ├── __init__.py
│       ├── test_agent.py
│       ├── test_tools.py
│       └── test_prompts.py
│
├── notebooks/                    # Jupyter notebooks untuk experimentation
│   ├── 01-llm-exploration.ipynb
│   ├── 02-prompt-testing.ipynb
│   └── 03-agent-prototyping.ipynb
│
├── data/                         # Data files (jika ada)
│   ├── raw/                      # Raw data (jangan edit)
│   ├── processed/                # Processed data
│   └── knowledge_base/           # Knowledge base untuk RAG
│
├── logs/                         # Log files
│   ├── audit_20260325.log
│   └── errors_20260325.log
│
├── scripts/                      # Utility scripts
│   ├── setup.sh                  # Setup script
│   ├── run_tests.sh             # Test runner
│   └── deploy.sh                # Deployment script
│
└── docs/                         # Documentation
    ├── architecture.md
    ├── api_reference.md
    └── user_guide.md
```

---

### 8.6.2 Dependencies Management

#### requirements.txt (Traditional)

```txt
# requirements.txt

# Core dependencies
openai>=1.12.0,<2.0.0
anthropic>=0.18.0,<1.0.0
langchain>=0.1.0,<1.0.0
langgraph>=0.0.1,<1.0.0

# Utilities
python-dotenv>=1.0.0
pydantic>=2.0.0
requests>=2.31.0

# Development dependencies
pytest>=7.4.0
black>=23.0.0
flake8>=6.0.0
mypy>=1.0.0

# Optional dependencies
chromadb>=0.4.0  # Vector database
tiktoken>=0.5.0  # Token counting
```

**Commands:**
```bash
# Install semua dependencies
pip install -r requirements.txt

# Install dengan extras
pip install -r requirements.txt --upgrade

# Freeze current versions
pip freeze > requirements.txt
```

#### pyproject.toml (Modern - Recommended)

```toml
# pyproject.toml

[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "agentic-project"
version = "0.1.0"
description = "AI Agent project untuk automation"
readme = "README.md"
requires-python = ">=3.10"
license = {text = "MIT"}
authors = [
    {name = "Your Name", email = "your.email@example.com"}
]

dependencies = [
    "openai>=1.12.0,<2.0.0",
    "anthropic>=0.18.0,<1.0.0",
    "langchain>=0.1.0,<1.0.0",
    "langgraph>=0.0.1,<1.0.0",
    "python-dotenv>=1.0.0",
    "pydantic>=2.0.0",
    "requests>=2.31.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.4.0",
    "pytest-cov>=4.0.0",
    "black>=23.0.0",
    "flake8>=6.0.0",
    "mypy>=1.0.0",
    "pre-commit>=3.0.0",
]

rag = [
    "chromadb>=0.4.0",
    "tiktoken>=0.5.0",
    "sentence-transformers>=2.2.0",
]

[project.scripts]
run-agent = "src.main:main"

[tool.black]
line-length = 100
target-version = ['py310']
include = '\.pyi?$'

[tool.mypy]
python_version = "3.10"
warn_return_any = true
warn_unused_configs = true
disallow_untyped_defs = false

[tool.pytest.ini_options]
testpaths = ["src/tests"]
python_files = "test_*.py"
python_functions = "test_*"
```

**Commands:**
```bash
# Install dengan uv (modern, faster)
uv pip install -e ".[dev]"

# Install dengan pip
pip install -e ".[dev]"

# Install production only
pip install -e .
```

---

### 8.6.3 Virtual Environment Best Practices

#### Menggunakan venv (Built-in)

```bash
# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (macOS/Linux)
source venv/bin/activate

# Deactivate
deactivate
```

#### Menggunakan uv (Recommended - Modern & Fast)

```bash
# Install uv
curl -LsSf https://astral.sh/uv/install.sh | sh

# Create project with uv
uv init agentic-project
cd agentic-project

# Create virtual environment
uv venv

# Activate
source .venv/bin/activate  # macOS/Linux
.venv\Scripts\activate     # Windows

# Install dependencies
uv pip install openai anthropic langchain

# Sync with pyproject.toml
uv pip sync requirements.txt
```

#### .gitignore untuk Virtual Environments

```bash
# Virtual environments
venv/
.venv/
env/
.env/
ENV/

# IDE
.vscode/
.idea/
*.swp
*.swo

# Python cache
__pycache__/
*.py[cod]
*$py.class
.Python

# Testing
.pytest_cache/
.coverage
htmlcov/

# Logs
logs/
*.log

# Environment variables
.env
.env.local
.env.production
```

---

### 8.6.4 Code Organization Patterns

#### Pattern 1: Modular Agent Architecture

```python
# src/agent/base_agent.py

from abc import ABC, abstractmethod
from typing import List, Dict, Any, Optional
from .agent_state import AgentState
from .agent_memory import AgentMemory

class BaseAgent(ABC):
    """Base class untuk semua agents"""
    
    def __init__(self, agent_id: str, llm_model: str = "gpt-4o"):
        self.agent_id = agent_id
        self.llm_model = llm_model
        self.state = AgentState()
        self.memory = AgentMemory()
        self.tools: Dict[str, callable] = {}
    
    @abstractmethod
    def think(self, input: str) -> str:
        """Process input dan generate reasoning"""
        pass
    
    @abstractmethod
    def act(self, reasoning: str) -> Any:
        """Execute action berdasarkan reasoning"""
        pass
    
    def register_tool(self, name: str, tool_func: callable):
        """Register tool untuk digunakan agent"""
        self.tools[name] = tool_func
    
    def execute(self, input: str) -> Any:
        """Main execution loop"""
        reasoning = self.think(input)
        action = self.act(reasoning)
        return action
```

#### Pattern 2: Tool Registry

```python
# src/tools/registry.py

from typing import Dict, Callable, Any
from dataclasses import dataclass

@dataclass
class ToolDefinition:
    name: str
    description: str
    function: Callable
    parameters: Dict[str, Any]

class ToolRegistry:
    """Registry untuk manage semua tools"""
    
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.tools: Dict[str, ToolDefinition] = {}
        return cls._instance
    
    def register(self, tool_def: ToolDefinition):
        """Register tool"""
        if tool_def.name in self.tools:
            raise ValueError(f"Tool '{tool_def.name}' sudah terdaftar")
        self.tools[tool_def.name] = tool_def
    
    def get(self, name: str) -> ToolDefinition:
        """Get tool by name"""
        if name not in self.tools:
            raise KeyError(f"Tool '{name}' tidak ditemukan")
        return self.tools[name]
    
    def list_tools(self) -> List[str]:
        """List semua registered tools"""
        return list(self.tools.keys())
    
    def execute(self, name: str, **kwargs) -> Any:
        """Execute tool dengan parameters"""
        tool = self.get(name)
        return tool.function(**kwargs)

# Usage
registry = ToolRegistry()

def search_web(query: str, num_results: int = 5):
    """Search the web"""
    # Implementation...
    return results

registry.register(ToolDefinition(
    name="web_search",
    description="Search the web for information",
    function=search_web,
    parameters={
        "query": {"type": "string", "description": "Search query"},
        "num_results": {"type": "integer", "description": "Number of results"}
    }
))
```

#### Pattern 3: Prompt Template Management

```python
# src/prompts/system_prompts.py

from pathlib import Path
from typing import Optional

class PromptTemplate:
    """Manage prompt templates"""
    
    def __init__(self, template_dir: str = "prompts/templates"):
        self.template_dir = Path(template_dir)
        self._cache: dict = {}
    
    def load(self, template_name: str) -> str:
        """Load template from file"""
        if template_name in self._cache:
            return self._cache[template_name]
        
        template_path = self.template_dir / f"{template_name}.txt"
        
        if not template_path.exists():
            raise FileNotFoundError(f"Template '{template_name}' tidak ditemukan")
        
        with open(template_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        self._cache[template_name] = content
        return content
    
    def render(self, template_name: str, **kwargs) -> str:
        """Render template dengan variables"""
        template = self.load(template_name)
        return template.format(**kwargs)

# Usage
prompts = PromptTemplate()

# Render dengan variables
system_prompt = prompts.render(
    "agent_system",
    agent_name="Assistant",
    capabilities=["web_search", "calculator", "code_execution"],
    constraints=["Jangan membuat informasi", "Selalu verify fakta"]
)
```

---

### 8.6.5 Testing Basics untuk AI Projects

```python
# src/tests/test_agent.py

import pytest
from unittest.mock import Mock, patch
from src.agent.base_agent import BaseAgent

class TestAgent:
    """Test cases untuk agent"""
    
    @pytest.fixture
    def agent(self):
        """Setup agent untuk testing"""
        return BaseAgent(agent_id="test-agent")
    
    def test_agent_initialization(self, agent):
        """Test agent initialized dengan benar"""
        assert agent.agent_id == "test-agent"
        assert agent.state is not None
        assert agent.memory is not None
    
    def test_tool_registration(self, agent):
        """Test register tool"""
        def dummy_tool():
            pass
        
        agent.register_tool("dummy", dummy_tool)
        assert "dummy" in agent.tools
    
    @patch('src.agent.base_agent.call_llm_api')
    def test_think_calls_llm(self, mock_llm, agent):
        """Test think method memanggil LLM"""
        mock_llm.return_value = "Test reasoning"
        
        result = agent.think("Test input")
        
        mock_llm.assert_called_once()
        assert result == "Test reasoning"

# src/tests/test_tools.py

import pytest
from src.tools.web_search import search_web
from src.tools.calculator import calculate

class TestTools:
    """Test cases untuk tools"""
    
    def test_calculator_addition(self):
        """Test calculator addition"""
        result = calculate("2 + 2")
        assert result == 4
    
    def test_calculator_division_by_zero(self):
        """Test calculator handles division by zero"""
        with pytest.raises(ValueError):
            calculate("10 / 0")
    
    @patch('src.tools.web_search.requests.get')
    def test_web_search(self, mock_get):
        """Test web search"""
        mock_response = Mock()
        mock_response.json.return_value = {"results": ["result1", "result2"]}
        mock_get.return_value = mock_response
        
        results = search_web("test query", num_results=2)
        
        assert len(results) == 2
        mock_get.assert_called_once()

# src/tests/test_prompts.py

import pytest
from src.prompts.system_prompts import PromptTemplate

class TestPrompts:
    """Test cases untuk prompts"""
    
    @pytest.fixture
    def prompts(self):
        return PromptTemplate()
    
    def test_load_template(self, prompts):
        """Test load template"""
        template = prompts.load("agent_system")
        assert template is not None
        assert isinstance(template, str)
    
    def test_render_template(self, prompts):
        """Test render template dengan variables"""
        rendered = prompts.render(
            "agent_system",
            agent_name="TestBot"
        )
        assert "TestBot" in rendered
```

**Running Tests:**
```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=src

# Run specific test file
pytest src/tests/test_agent.py

# Run specific test
pytest src/tests/test_agent.py::TestAgent::test_agent_initialization

# Run with verbose output
pytest -v
```

---

## 8.7 Learning Resources Terstruktur

### 8.7.1 YouTube Channels (Bahasa Indonesia)

| Channel | Fokus | Subscriber | Link |
|---------|-------|------------|------|
| **WPU (Web Programming UNPAS)** | Python, JavaScript, Web Dev | ~979K | [Subscribe](https://youtube.com/@sandhikagalihWPU) |
| **Kelas Terbuka** | Python, Algoritma, Data Structures | ~467K | [Subscribe](https://youtube.com/@KelasTerbuka) |
| **Dicoding Indonesia** | AI Engineering, ML, Python | ~100K+ | [Subscribe](https://youtube.com/@dicoding) |
| **Programmer Zaman Now** | Python, Backend Development | ~200K | [Subscribe](https://youtube.com/@ProgrammerZamanNow) |
| **CODEPOLITAN** | AI, ML, Tips & Tricks | ~39K | [Subscribe](https://youtube.com/@codepolitan) |
| **Halovina** | LangChain, Gemini, FastAPI, GenAI | - | [halovina.com](https://halovina.com) |
| **Inixindo Indonesia** | RAG, AI Agents, Enterprise AI | - | [YouTube](https://youtube.com/@InixindoIndonesia) |
| **BISA AI Academy** | AI, Data Science, Python | - | [Subscribe](https://youtube.com/@bisaai) |

### 8.7.2 YouTube Channels (English)

| Channel | Fokus | Link |
|---------|-------|------|
| **LangChain** | Agents, RAG, Chains | [Subscribe](https://youtube.com/@langchain) |
| **Greg Lima** | Practical AI, Agent Building | [Subscribe](https://youtube.com/@greglima) |
| **Andrej Karpathy** | LLM Internals, AI Education | [Subscribe](https://youtube.com/@AndrejKarpathy) |
| **HuggingFace** | Transformers, Fine-tuning | [Subscribe](https://youtube.com/@HuggingFace) |
| **Anthropic** | Claude, Prompt Engineering | [Subscribe](https://youtube.com/@Anthropic) |
| **OpenAI** | GPT Models, API Updates | [Subscribe](https://youtube.com/@OpenAI) |
| **IBM Technology** | Enterprise AI, Agentic RAG | [Subscribe](https://youtube.com/@IBMTechnology) |

### 8.7.3 Learning Path per Topik

```
PYTHON FUNDAMENTALS (Minggu 1-2):
├── ✅ WPU - Python untuk Pemula (Playlist)
├── ✅ Kelas Terbuka - Python Dasar
├── ✅ Programmer Zaman Now - Python OOP
└── 📚 Praktek: Buat 3 project kecil

GIT & GITHUB (Minggu 2):
├── ✅ WPU - Git & GitHub Tutorial
├── ✅ Kelas Terbuka - Version Control
└── 📚 Praktek: Upload project ke GitHub

DATA STRUCTURES (Minggu 3):
├── ✅ Kelas Terbuka - Struktur Data Python
├── ✅ CodePolitan - Algorithm Basics
└── 📚 Praktek: Implementasi data structures

REST APIs (Minggu 3-4):
├── ✅ WPU - REST API Tutorial
├── ✅ Programmer Zaman Now - HTTP & APIs
└── 📚 Praktek: Build simple REST API

LLM FUNDAMENTALS (Minggu 4-6):
├── ✅ Andrej Karpathy - LLM Internals
├── ✅ HuggingFace - Transformers Course
├── ✅ OpenAI - API Documentation
└── 📚 Praktek: API integration exercises

PROMPT ENGINEERING (Minggu 6-7):
├── ✅ Anthropic - Prompt Engineering Guide
├── ✅ Learn Prompting - YouTube Channel
└── 📚 Praktek: 50+ prompt experiments

AGENT ARCHITECTURE (Minggu 7-9):
├── ✅ LangChain - Agent Tutorials
├── ✅ Greg Lima - Agent Building
├── ✅ Halovina - LangChain Indonesia
└── 📚 Praktek: Build 3不同类型的 agents

FRAMEWORKS (Minggu 9-12):
├── ✅ LangChain Documentation
├── ✅ CrewAI Documentation
├── ✅ AutoGen GitHub
└── 📚 Praktek: Multi-agent project

SECURITY & BEST PRACTICES (Minggu 12-13):
├── ✅ OWASP - AI Security Guidelines
├── ✅ IBM Technology - Enterprise AI
└── 📚 Praktek: Implement security measures

CAPSTONE PROJECT (Minggu 13-16):
└── 📚 Build end-to-end agent system
```

### 8.7.4 Documentation & References

**Official Documentation:**
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Anthropic Claude Docs](https://docs.anthropic.com/claude/docs)
- [LangChain Docs](https://python.langchain.com/docs)
- [CrewAI Docs](https://docs.crewai.com)
- [AutoGen Docs](https://microsoft.github.io/autogen/)

**Books & Courses:**
- "Generative AI in Production" - O'Reilly
- "LangChain for LLM Application Development" - Udemy
- "AI Engineering Roadmap" - This document

**Communities:**
- [LangChain Discord](https://discord.gg/langchain)
- [r/LangChain](https://reddit.com/r/langchain)
- [Indonesia AI Society](https://indonesia.ai)

---

## 9. Ringkasan dan Persiapan Bulan 2

### 9.1 Ringkasan Bulan 1

```
APA YANG SUDAH DIPELAJARI:

✅ KONSEP FUNDAMENTAL
   • Apa itu Agentic Engineering
   • Perbedaan AI tradisional vs Agentic AI
   • Komponen utama agent

✅ LLM FUNDAMENTALS  
   • Tokenization dan context window
   • Temperature dan sampling
   • Jenis-jenis LLM
   • Hallucination dan cara menguranginya
   • API integration

✅ PROMPTING UNTUK AGENT
   • System prompt yang efektif
   • Few-shot learning
   • Chain of Thought
   • Tool definition

✅ ARSITEKTUR AGENT
   • Simple Reflex Agent
   • Model-Based Reflex Agent
   • Goal-Based Agent
   • Utility-Based Agent
   • Learning Agent

✅ TOOLS DAN FRAMEWORK
   • LangChain/LangGraph
   • CrewAI
   • AutoGen

✅ DATA STRUCTURES
   • List, Tuple, Set, Dictionary
   • Stack dan Queue untuk Agent
   • Common patterns (Buffer, Task Queue, Cache)

✅ SECURITY BEST PRACTICES
   • API Key Security dengan .env
   • Input Validation & Sanitization
   • Rate Limiting Implementation
   • Logging & Audit Trail
   • Human-in-the-Loop (HITL)

✅ PROJECT MANAGEMENT
   • Project structure yang direkomendasikan
   • Dependencies Management (requirements.txt, pyproject.toml)
   • Virtual Environment Best Practices
   • Code Organization Patterns
   • Testing Basics untuk AI Projects

✅ PRAKTIK
   • Latihan API integration
   • Percobaan temperature
   • Percobaan function calling
   • Latihan data structures
   • Implementasi security measures
```

### 9.2 Indikator Keberhasilan Bulan 1

```
CHECKLIST PROFICIENCY:

□ Bisa menjelaskan apa itu Agentic AI dengan kata sendiri
□ Memahami perbedaan antara AI tradisional dan Agentic
□ Tahu komponen utama sebuah agent
□ Bisa menjelaskan konsep LLM (token, context, temperature)
□ Bisa menulis system prompt yang efektif
□ Memahami arsitektur dasar agent
□ Tahu framework apa yang perlu dipelajari lebih lanjut
□ Sudah mencoba basic implementation dengan minimal 1 framework
□ Bisa mengidentifikasi dan mengurangi hallucination
□ Sudah pernah melakukan API call ke LLM
□ Memahami penggunaan List, Tuple, Set, Dictionary untuk AI
□ Bisa implementasi rate limiting sederhana
□ Tahu cara secure API keys dengan environment variables
□ Bisa menulis basic unit tests untuk agent code
□ Memahami project structure yang baik untuk AI projects
□ Tahu resources belajar yang tersedia (YouTube, docs, communities)
```

### 9.3 Persiapan Bulan 2

Pada bulan 2, fokus akan移到 ke:

1. **Memory Implementation**
   - Buffer memory
   - Summary memory  
   - Entity memory
   - Vector store integration

2. **Tool Integration**
   - Custom tools creation
   - API integration
   - Function calling

3. **Advanced Patterns**
   - ReAct implementation
   - Plan-and-Execute
   - Self-reflection

4. **Multi-Agent Systems**
   - Agent collaboration
   - Task decomposition
   - Agent communication

5. **RAG Integration**
   - Vector databases
   - Document retrieval
   - Knowledge augmentation

### 9.4 Resource Lanjutan

| Resource | Tipe | Link |
|----------|------|------|
| LangChain Documentation | Official Docs | python.langchain.com |
| CrewAI Documentation | Official Docs | docs.crewai.com |
| AutoGen GitHub | Repository | github.com/microsoft/autogen |
| LangGraph Examples | Repository | github.com/langchain-ai/langgraph |
| Agentic AI Patterns | Research Paper | arxiv.org (search "agentic AI") |

---

## 10. Lampiran: Quick Reference

### 10.1 Kode warna API Status

```
HTTP STATUS CODES YANG SERING DIGUNAKAN:

2xx SUCCESS:
├── 200 OK - Request berhasil
├── 201 Created - Resource berhasil dibuat
└── 204 No Content - Berhasil, tidak ada response

4xx CLIENT ERROR:
├── 400 Bad Request - Request tidak valid
├── 401 Unauthorized - Perlu authentication
├── 403 Forbidden - Tidak punya akses
├── 404 Not Found - Resource tidak ditemukan
├── 429 Too Many Requests - Rate limit exceeded
└── 422 Unprocessable Entity - Validasi gagal

5xx SERVER ERROR:
├── 500 Internal Server Error
├── 502 Bad Gateway
├── 503 Service Unavailable
└── 504 Gateway Timeout
```

### 10.2 Parameter Penting LLM

```
PARAMETER OPENAI LENGKAP:

{
  "model": "gpt-4o",              // Model yang digunakan
  "messages": [...],                // Array pesan
  "temperature": 0.7,               // Kreativitas (0-2)
  "max_tokens": 1000,              // Maksimum token output
  "top_p": 1.0,                   // Nucleus sampling (0-1)
  "frequency_penalty": 0.0,       // Mengurangi pengulangan (-2 to 2)
  "presence_penalty": 0.0,         // Mendorong topik baru (-2 to 2)
  "stop": null,                   // Sequence untuk menghentikan output
  "stream": false,                 // Streaming response
  "temperature": 0.7,              // Kreativitas output
  "tools": [...],                  // Function calling tools
  "tool_choice": "auto"            // Bagaimana memilih tools
}
```

### 10.3 Best Practices Debugging Agent

```
DEBUGGING AGENT:

1. ✅ CEK LOG DENGAN TELITI
   - Print setiap step reasoning
   - Catat input/output dari setiap tool
   
2. ✅ GUNAKAN VISUALIZATION
   - LangSmith untuk tracing
   - Console.log di setiap decision point
   
3. ✅ TEST DENGAN INPUT SEDERHANA
   - Mulai dari kasus terkecil
   - Tingkatkan kompleksitas bertahap

4. ✅ VERIFIKASI TOOL OUTPUT
   - Tool return harus sesuai format yang diharapkan
   - Error handling untuk tool yang gagal

5. ✅ CEK MEMORY STATE
   - Apakah memory berisi data yang benar?
   - Apakah ada data yang korup?

6. ✅ TEST EDGE CASES
   - Input kosong
   - Input sangat panjang
   - Input dengan format tidak valid
```

### 10.4 Checklist Keamanan

```
KEAMANAN AGENT:

□ API KEYS
  - Jangan hardcode API keys di code
  - Gunakan environment variables
  - Rotate keys secara berkala

□ INPUT VALIDATION
  - Validasi semua input user
  - Sanitasi sebelum masuk ke tools
  - Batasi panjang input

□ RATE LIMITING
  - Implementasikan rate limiting
  - Queue requests jika perlu
  - Monitoring usage

□ LOGGING & AUDIT
  - Log semua agent actions
  - Simpan conversation history
  - Audit trail untuk debugging

□ HUMAN IN THE LOOP
  - Confirmation untuk actions kritis
  - Ability to override agent decisions
  - Clear escalation paths
```

---

## 11. Pertanyaan Umum (FAQ)

### Q: Apakah saya perlu GPU untuk belajar Agentic AI?

A: Tidak wajib! Untuk pembelajaran dan development, Anda bisa menggunakan API dari OpenAI, Anthropic, atau Google. Biaya per request sangat murah (fraction of a cent). GPU baru diperlukan jika Anda ingin menjalankan model open-source secara lokal.

### Q: Berapa biaya rata-rata per bulan untuk development?

A: Untuk development/testing dengan API:
- Basic: $10-50/bulan
- Intermediate: $50-200/bulan  
- Advanced: $200+/bulan

### Q: Apakah Python wajib untuk Agentic AI?

A: Ya, Python adalah bahasa utama untuk Agentic AI. Hampir semua framework (LangChain, CrewAI, AutoGen) berbasis Python. Namun, konsepnya bisa dipelajari tanpa coding dulu.

### Q: Berapa lama untuk menguasai Bulan 1?

A: Dengan waktu 4-6 jam per hari:
- Pemula programming: 3-4 minggu
- Sudah bisa programming: 1-2 minggu

### Q: Apakah Agentic AI akan menggantikan programmer?

A: Tidak. Agentic AI adalah tool untuk meningkatkan produktivitas programmer, bukan menggantinya. Kemampuan programming tetap penting untuk membangun dan memahami sistem agent.

---

> **Catatan:** Dokumen ini adalah bagian dari roadmap Agentic Engineering. Untuk materi prompting yang lebih mendalam, silakan merujuk ke file `Panduan-AI-Programming.md` yang berisi teknik-teknik prompting spesifik untuk programming.

---

*Last Updated: Maret 2026*
*Version: 1.3 - Medium Priority Update*
*Author: OpenCode AI Roadmap Team*

**Changelog v1.3:**
- ✅ Added: Data Structures untuk AI Engineering (Section 8.4)
- ✅ Added: Security Best Practices Expanded (Section 8.5)
- ✅ Added: Project Management untuk AI (Section 8.6)
- ✅ Added: Learning Resources Terstruktur (Section 8.7)
- ✅ Updated: Table of Contents dengan section baru
- ✅ Updated: Indikator Keberhasilan Bulan 1
- ✅ Updated: Ringkasan Bulan 1
