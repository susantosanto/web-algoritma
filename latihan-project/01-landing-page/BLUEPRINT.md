# 🎨 PROJECT 1: LANDING PAGE

> **Level**: Pemula | **Estimasi**: 2-4 jam | **Konsep**: HTML, Tailwind CSS, Responsive

---

## 🎯 TUJUAN PROJECT

Membuat landing page profesional untuk produk/layanan dengan:
- Responsive (mobile + desktop)
- Navigasi yang jelas
- Hero section yang menarik
- Fitur/layanan yang dijelaskan
- Call-to-action (CTA)
- Footer

---

## 📐 ALUR KERJA

```
LANGKAH 1: Perencanaan
    ↓
LANGKAH 2: Struktur HTML
    ↓
LANGKAH 3: Styling (Tailwind)
    ↓
LANGKAH 4: Responsive
    ↓
LANGKAH 5: Testing & Polish
```

---

## LANGKAH 1: PERENCANAAN

### 1.1 Tentukan Topik
```
Pilih salah satu atau buat sendiri:
□ Product landing (jualan produk)
□ Service landing (jasa/layanan)
□ Portfolio personal
□ Event/promosi
□ App showcase

Topik pilihanmu: _______________
```

### 1.2 Tentukan Section
```
Section yang WAJIB ada:
□ Navbar (navigasi)
□ Hero (judul utama + CTA)
□ Features/Benefits (fitur/keunggulan)
□ About (tentang produk/layanan)
□ Testimonial (ulasan)
□ CTA (ajakan bertindak)
□ Footer (kontak, copyright)
```

### 1.3 Sketsa Layout
```
Gambarkan di kertas atau bayangkan:

┌─────────────────────────────────────┐
│ NAVBAR: Logo | Menu | CTA Button    │
├─────────────────────────────────────┤
│                                     │
│ HERO:                               │
│ - Judul besar                       │
│ - Subjudul                          │
│ - Tombol CTA                        │
│                                     │
├─────────────────────────────────────┤
│ FEATURES:                           │
│ [Icon] [Icon] [Icon]               │
│ [Text] [Text] [Text]               │
├─────────────────────────────────────┤
│ ABOUT:                              │
│ [Gambar] [Deskripsi]               │
├─────────────────────────────────────┤
│ TESTIMONIAL:                        │
│ [Card] [Card] [Card]               │
├─────────────────────────────────────┤
│ CTA SECTION:                        │
│ [Pesan + Tombol]                    │
├─────────────────────────────────────┤
│ FOOTER:                             │
│ [Links] [Social] [Copyright]        │
└─────────────────────────────────────┘
```

---

## LANGKAH 2: STRUKTUR HTML

### 2.1 Setup File
```
Buat file:
□ index.html
□ (opsional) style.css untuk custom styles
```

### 2.2 HTML Basic Structure
```html
<!-- IKUTI STRUKTUR INI, isi bagian yang kosong -->

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><!-- ISI: Judul Halaman --></title>
    <!-- ISI: Link Tailwind CDN -->
</head>
<body>
    <!-- ISI: Navbar -->
    
    <!-- ISI: Hero Section -->
    
    <!-- ISI: Features Section -->
    
    <!-- ISI: About Section -->
    
    <!-- ISI: Testimonial Section -->
    
    <!-- ISI: CTA Section -->
    
    <!-- ISI: Footer -->
    
    <!-- ISI: Script JS (jika ada) -->
</body>
</html>
```

### 2.3 Petunjuk Tiap Section

#### **NAVBAR**
```
Struktur:
├── Container (flex, justify-between, items-center)
│   ├── Logo/Brand Name
│   ├── Menu Links (hidden di mobile)
│   └── CTA Button

Petunjuk:
- Logo di kiri
- Menu di tengah/kanan
- Tombol CTA di kanan
- Mobile: hamburger menu (opsional, bisa skip dulu)
```

#### **HERO SECTION**
```
Struktur:
├── Background (gradient atau warna solid)
├── Container (text-center, py-20 atau lebih)
│   ├── Headline (text-5xl, font-bold)
│   ├── Subheadline (text-xl, text-gray-600)
│   └── CTA Button (bg-blue-500, text-white, rounded)

Petunjuk:
- Headline harus SINGKAT dan MENARIK
- Subheadline menjelaskan lebih detail
- CTA harus JELAS (Mulai Sekarang, Beli Sekarang, dll)
- Beri jarak yang cukup (py-20 atau lebih)
```

#### **FEATURES SECTION**
```
Struktur:
├── Container
├── Section Title (text-center, text-3xl, font-bold)
├── Grid (grid-cols-1 md:grid-cols-3, gap-8)
│   ├── Feature 1
│   │   ├── Icon (text-4xl atau SVG)
│   │   ├── Title (text-xl, font-semibold)
│   │   └── Description (text-gray-600)
│   ├── Feature 2
│   └── Feature 3

Petunjuk:
- Gunakan icon (emoji atau library icon)
- Title harus pendek (2-4 kata)
- Description menjelaskan manfaat
- Grid: 1 kolom di mobile, 3 kolom di desktop
```

#### **ABOUT SECTION**
```
Struktur:
├── Container (flex di desktop)
├── Image/Ilustrasi (w-full md:w-1/2)
└── Text Content (w-full md:w-1/2)
    ├── Section Title
    ├── Description
    └── (opsional) Tombol Learn More

Petunjuk:
- Gunakan gambar relevan (bisa placeholder dulu)
- Teks harus menjelaskan KEUNGGULAN
- Layout: stacked di mobile, side-by-side di desktop
```

#### **TESTIMONIAL SECTION**
```
Struktur:
├── Container
├── Section Title
├── Grid (grid-cols-1 md:grid-cols-3)
│   ├── Testimonial Card 1
│   │   ├── Quote (italic)
│   │   ├── Name (font-bold)
│   │   └── Role/Title (text-gray-500)
│   ├── Testimonial Card 2
│   └── Testimonial Card 3

Petunjuk:
- Gunakan data dummy yang realistis
- Card harus konsisten desainnya
- Bisa tambah avatar/foto (opsional)
```

#### **CTA SECTION**
```
Struktur:
├── Background (gelap atau gradient)
├── Container (text-center, py-16)
│   ├── Headline (text-white, text-3xl)
│   ├── Subtext (text-gray-300)
│   └── CTA Button (bg-white, text-dark)

Petunjuk:
- Kontras dengan section sebelumnya
- Pesan harus URGEN ("Jangan Tunggu Lagi!")
- Button harus menonjol
```

#### **FOOTER**
```
Struktur:
├── Background (bg-gray-900)
├── Container (py-12)
├── Grid (grid-cols-1 md:grid-cols-4)
│   ├── Brand/Logo
│   ├── Links Column 1
│   ├── Links Column 2
│   └── Social Media
└── Copyright (text-center, text-gray-500)

Petunjuk:
- Background gelap untuk kontras
- Links harus relevan
- Copyright di bagian paling bawah
```

---

## LANGKAH 3: STYLING (TAILWIND)

### 3.1 Setup Tailwind
```
□ Tambahkan Tailwind CDN di <head>
□ Pastikan semua class berfungsi
□ Test beberapa class dasar dulu
```

### 3.2 Terapkan Styling
```
Urutan styling:
1. Layout dasar (container, flex, grid)
2. Spacing (padding, margin)
3. Typography (font, size, color)
4. Colors & Background
5. Borders & Radius
6. Shadows
7. Hover & Effects
```

### 3.3 Petunjuk Styling

#### **Konsisten Spacing**
```
Gunakan skala yang konsisten:
- Section padding: py-16 atau py-20
- Container padding: px-4 atau px-6
- Antara elemen: gap-4 atau gap-8
- Card padding: p-6

Contoh:
<section class="py-16 px-4">  <!-- Section -->
  <div class="container mx-auto">  <!-- Container -->
    <div class="grid gap-8">  <!-- Grid dengan gap -->
      <div class="p-6">  <!-- Card padding -->
```

#### **Konsisten Warna**
```
Tentukan palette warna:
- Primary: blue-500, blue-600, blue-700
- Secondary: gray-500, gray-600, gray-700
- Accent: yellow-400, yellow-500
- Background: white, gray-50, gray-100
- Text: gray-800 (body), gray-600 (secondary)

Contoh penggunaan:
- Headlines: text-gray-800
- Body text: text-gray-600
- Links: text-blue-500 hover:text-blue-700
- Buttons: bg-blue-500 hover:bg-blue-600
```

#### **Shadows & Elevation**
```
Untuk kedalaman:
- Flat (default): tanpa shadow
- Raised: shadow-md
- Elevated: shadow-lg
- Floating: shadow-xl

Contoh:
- Card: shadow-md hover:shadow-lg (naik saat hover)
- Navbar: shadow-sm (subtle)
- Modal: shadow-xl (tinggi)
```

---

## LANGKAH 4: RESPONSIVE

### 4.1 Prinsip Mobile First
```
Selalu mulai dari MOBILE, lalu tambah breakpoint:

Mobile (default):
<div class="w-full px-4">

Tablet (md:):
<div class="md:w-1/2 md:px-8">

Desktop (lg:):
<div class="lg:w-1/3 lg:px-12">
```

### 4.2 Testing Responsive
```
□ Buka di Chrome
□ Tekan F12 (DevTools)
□ Klik toggle device (mobile view)
□ Test di ukuran: 320px, 375px, 768px, 1024px, 1440px
□ Pastikan tidak ada yang overflow/tumpang tindih
```

### 4.3 Common Responsive Patterns
```
Pattern 1: Stacked → Side by Side
<!-- Mobile: stacked, Desktop: flex -->
<div class="flex flex-col md:flex-row">

Pattern 2: Full → Partial Width
<!-- Mobile: full, Desktop: half -->
<div class="w-full md:w-1/2">

Pattern 3: Hidden → Visible
<!-- Mobile: hidden, Desktop: block -->
<div class="hidden md:block">

Pattern 4: Visible → Hidden
<!-- Mobile: block, Desktop: hidden -->
<div class="block md:hidden">
```

---

## LANGKAH 5: TESTING & POLISH

### 5.1 Checklist Fungsional
```
□ Semua link berfungsi
□ Tombol CTA terlihat jelas
□ Tidak ada console error
□ Gambar semua ter-load
□ Responsive di semua ukuran
```

### 5.2 Checklist Visual
```
□ Spacing konsisten
□ Warna konsisten
□ Font konsisten
□ Tidak ada text yang terpotong
□ Tidak ada gambar yang pecah
□ Cukup contrast antara text dan background
```

### 5.3 Checklist Performance
```
□ Gambar di-compress (tidak terlalu besar)
□ Tidak ada animasi yang laggy
□ Loading time < 3 detik
```

---

## 🎨 CONTOH WARNA & TYPOGRAPHY

### **Tema: Tech/Startup**
```
Primary: blue-500, blue-600
Secondary: gray-600, gray-700
Accent: cyan-400, cyan-500
Background: white, gray-50
Font: Inter atau system-ui
```

### **Tema: Creative/Artistic**
```
Primary: purple-500, purple-600
Secondary: pink-500, pink-600
Accent: yellow-400, yellow-500
Background: white, purple-50
Font: Poppins atau sans-serif
```

### **Tema: Corporate/Business**
```
Primary: blue-800, blue-900
Secondary: gray-600, gray-700
Accent: green-500, green-600
Background: white, gray-50
Font: system-ui
```

---

## 🚀 BONUS: ENHANCEMENTS (Opsional)

Jika sudah selesai dasar, tambahkan:
```
□ Animasi scroll (fade-in saat scroll)
□ Parallax effect di hero
□ Smooth scroll untuk anchor links
□ Dark mode toggle
□ Form kontak (前端only)
□ Gallery/lightbox untuk gambar
```

---

## ✅ FINAL CHECKLIST

```
SEBELUM MENGANGGAP SELESAI:

□ HTML valid dan rapi
□ Semua section ter-wrapping dengan benar
□ Tailwind CDN terpasang
□ Semua class berfungsi
□ Responsive di mobile (320px-428px)
□ Responsive di tablet (768px)
□ Responsive di desktop (1024px+)
□ Tidak ada console error
□ Gambar semua ter-load
□ Warna konsisten
□ Spacing konsisten
□ Typography jelas dan mudah dibaca
□ CTA buttons menonjol
□ Footer lengkap
□ Copyright tahun benar

Total: ___/15 checklist terpenuhi
```

---

*Selamat mengerjakan! Jika stuck, tanya AI dengan format yang benar.*
