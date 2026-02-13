# 🚀 Rencana Redesain Sidebar: "The Floating Glass Nexus" (2026 Vision)

> **Visi:** Mengubah sidebar konvensional menjadi elemen navigasi yang melayang (floating), transparan, dan futuristik. Fokus pada estetika _Glassmorphism 2.0_, minimalis, dan elegan.

---

## 🎨 Konsep Desain: "Levitating Island"

Kita akan meninggalkan konsep sidebar yang menempel penuh dari atas ke bawah. Sidebar baru akan menjadi "pulau" kaca yang melayang di sisi kiri layar.

### Karakteristik Utama:

1.  **Floating Geometry:** Tidak lagi `height: 100vh`. Sidebar akan memiliki jarak (margin) dari tepi atas, bawah, dan kiri layar.
2.  **Hyper-Glass Transparency:** Transparansi tingkat tinggi dengan blur yang kuat (`backdrop-filter`) untuk memberikan kesan kedalaman tanpa mengorbankan legibilitas.
3.  **Organic Borders:** Sudut yang sangat membulat (`border-radius` besar) untuk kesan modern dan organik.
4.  **Subtle Glow:** Border tipis yang bersinar halus untuk memisahkan sidebar dari background 3D.

---

## 🛠️ Langkah Implementasi Teknis (CSS)

Berikut adalah rencana perubahan spesifik pada file `index.css`.

### 1. Transformasi Container Sidebar (`.sidebar`)

Kita akan mengubah properti layout utama untuk menciptakan efek melayang.

- **Posisi & Dimensi:**
  - Ubah `height: 100vh` menjadi `height: auto` dengan `top`, `bottom`, dan `left` yang diatur.
  - Tambahkan jarak dari tepi viewport (misal: `1.5rem`).
- **Visual:**
  - **Background:** Gunakan gradien linear ultra-halus dengan opacity rendah (misal: `rgba(15, 23, 42, 0.6)`).
  - **Border Radius:** Set ke `24px` atau `30px` untuk tampilan kapsul modern.
  - **Border:** Gunakan border transparan dengan warna aksen tipis (`1px solid rgba(255, 255, 255, 0.05)`).
  - **Shadow:** Tambahkan `box-shadow` yang lembut tapi luas untuk efek levitasi (`0 20px 50px rgba(0,0,0,0.3)`).

### 2. Penyesuaian Konten Internal

Karena sidebar sekarang membulat, konten di dalamnya tidak boleh terpotong jelek.

- **Sidebar Logo:**
  - Hapus border bawah yang keras atau ganti dengan gradien pudar.
  - Sesuaikan padding agar logo terlihat seimbang di dalam kapsul atas.
  - Pastikan background logo transparan agar menyatu dengan glass effect sidebar.
- **Scrollbar:**
  - Pastikan scrollbar tidak merusak estetika rounded corners (sembunyikan atau buat sangat tipis dan transparan).

### 3. Penyesuaian Layout Utama (`.main-content`)

Karena sidebar sekarang "mengambang" dan memiliki margin, area konten utama mungkin perlu sedikit penyesuaian agar visualnya seimbang.

- Pastikan `margin-left` pada `.main-content` memperhitungkan lebar sidebar + margin barunya.

---

## 📝 Draft Kode CSS (Preview)

Ini adalah gambaran kode yang akan kita terapkan nanti:

```css
.sidebar {
  /* Floating Positioning */
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  bottom: 1.5rem; /* Otomatis mengatur tinggi */
  height: auto; /* Override 100vh */
  width: var(--sidebar-width);

  /* Glassmorphism 2.0 */
  background: linear-gradient(
    165deg,
    rgba(15, 23, 42, 0.6) 0%,
    rgba(15, 23, 42, 0.3) 100%
  );
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);

  /* Shape & Depth */
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05); /* Inner light ring */

  /* Layout Internal */
  padding: 0; /* Reset padding, atur di child elements */
  overflow: hidden; /* Penting untuk border-radius */
  display: flex;
  flex-direction: column;
  z-index: 100;
}
```

## ✅ Checklist Eksekusi

- [ ] Terapkan style `.sidebar` baru (Floating & Glass).
- [ ] Sesuaikan `.sidebar-logo` agar menyatu dengan desain baru.
- [ ] Perbaiki `.main-content` margin/padding jika diperlukan.
