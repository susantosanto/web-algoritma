# 🎨 TAILWIND CSS CHEATSHEET

> **Tailwind CSS** = Framework CSS utility-first
> **Artinya**: Kamu tulis class langsung di HTML, bukan bikin CSS terpisah

---

## 🚀 CARA PAKAI TAILWIND

### **Opsi 1: CDN (Mudah, untuk belajar)**
```html
<script src="https://cdn.tailwindcss.com"></script>
```
Taruh di `<head>` HTML kamu. Selesai!

### **Opsi 2: Install (Untuk production)**
```bash
npm install -D tailwindcss
npx tailwindcss init
```

---

## 📐 LAYOUT & FLEXBOX

### **Container**
```html
<div class="container mx-auto">...</div>
```

### **Flexbox**
```html
<!-- Flex basic -->
<div class="flex">...</div>

<!-- Direction -->
<div class="flex flex-row">...</div>      <!-- horizontal -->
<div class="flex flex-col">...</div>      <!-- vertical -->

<!-- Justify (horizontal) -->
<div class="justify-start">...</div>
<div class="justify-center">...</div>
<div class="justify-end">...</div>
<div class="justify-between">...</div>
<div class="justify-around">...</div>

<!-- Align (vertical) -->
<div class="items-start">...</div>
<div class="items-center">...</div>
<div class="items-end">...</div>
<div class="items-stretch">...</div>

<!-- Wrap -->
<div class="flex-wrap">...</div>

<!-- Gap -->
<div class="gap-2">...</div>    <!-- 0.5rem -->
<div class="gap-4">...</div>    <!-- 1rem -->
<div class="gap-8">...</div>    <!-- 2rem -->
```

### **Grid**
```html
<!-- Grid basic -->
<div class="grid grid-cols-3 gap-4">...</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">...</div>

<!-- Span -->
<div class="col-span-2">...</div>  <!-- lebar 2 kolom -->
```

---

## 📏 SPACING

### **Padding (jarak dalam)**
```html
<p class="p-2">...</p>      <!-- semua sisi -->
<p class="px-4">...</p>     <!-- kiri-kanan -->
<p class="py-2">...</p>     <!-- atas-bawah -->
<p class="pt-4">...</p>     <!-- atas saja -->
<p class="pr-4">...</p>     <!-- kanan saja -->
<p class="pb-4">...</p>     <!-- bawah saja -->
<p class="pl-4">...</p>     <!-- kiri saja -->
```

### **Margin (jarak luar)**
```html
<p class="m-2">...</p>      <!-- semua sisi -->
<p class="mx-auto">...</p>  <!-- tengah horizontal -->
<p class="my-4">...</p>     <!-- atas-bawah -->
```

### **Ukuran Spacing**
```
0   = 0px
1   = 0.25rem (4px)
2   = 0.5rem (8px)
3   = 0.75rem (12px)
4   = 1rem (16px)
5   = 1.25rem (20px)
6   = 1.5rem (24px)
8   = 2rem (32px)
10  = 2.5rem (40px)
12  = 3rem (48px)
16  = 4rem (64px)
20  = 5rem (80px)
24  = 6rem (96px)
```

---

## 🎨 WARNA

### **Background Color**
```html
<div class="bg-white">...</div>
<div class="bg-black">...</div>
<div class="bg-gray-500">...</div>
<div class="bg-red-500">...</div>
<div class="bg-blue-500">...</div>
<div class="bg-green-500">...</div>
<div class="bg-yellow-500">...</div>
<div class="bg-purple-500">...</div>
<div class="bg-pink-500">...</div>
```

### **Text Color**
```html
<p class="text-black">...</p>
<p class="text-white">...</p>
<p class="text-gray-600">...</p>
<p class="text-red-500">...</p>
<p class="text-blue-600">...</p>
```

### **Opacity**
```html
<div class="bg-black/50">...</div>   <!-- 50% opacity -->
<div class="bg-black/25">...</div>   <!-- 25% opacity -->
```

---

## 📝 TIPOGRAFI

### **Font Size**
```html
<p class="text-xs">...</p>     <!-- 12px -->
<p class="text-sm">...</p>     <!-- 14px -->
<p class="text-base">...</p>   <!-- 16px (default) -->
<p class="text-lg">...</p>     <!-- 18px -->
<p class="text-xl">...</p>     <!-- 20px -->
<p class="text-2xl">...</p>    <!-- 24px -->
<p class="text-3xl">...</p>    <!-- 30px -->
<p class="text-4xl">...</p>    <!-- 36px -->
<p class="text-5xl">...</p>    <!-- 48px -->
```

### **Font Weight**
```html
<p class="font-thin">...</p>      <!-- 100 -->
<p class="font-light">...</p>     <!-- 300 -->
<p class="font-normal">...</p>    <!-- 400 (default) -->
<p class="font-medium">...</p>    <!-- 500 -->
<p class="font-semibold">...</p>  <!-- 600 -->
<p class="font-bold">...</p>      <!-- 700 -->
<p class="font-extrabold">...</p> <!-- 800 -->
```

### **Text Alignment**
```html
<p class="text-left">...</p>
<p class="text-center">...</p>
<p class="text-right">...</p>
```

### **Text Decoration**
```html
<p class="underline">...</p>
<p class="line-through">...</p>
<p class="no-underline">...</p>
```

---

## 📦 SIZING

### **Width**
```html
<div class="w-1/2">...</div>    <!-- 50% lebar -->
<div class="w-full">...</div>   <!-- 100% lebar -->
<div class="w-auto">...</div>   <!-- otomatis -->
<div class="w-64">...</div>     <!-- 16rem (256px) -->
```

### **Height**
```html
<div class="h-screen">...</div>  <!-- 100vh -->
<div class="h-full">...</div>    <!-- 100% -->
<div class="h-64">...</div>      <!-- 16rem -->
```

### **Min/Max**
```html
<div class="min-h-screen">...</div>
<div class="max-w-4xl">...</div>
```

---

## 🖼️ IMAGES & BACKGROUNDS

### **Background Image**
```html
<div class="bg-[url('/path/to/image.jpg')]">...</div>
```

### **Background Size**
```html
<div class="bg-cover">...</div>
<div class="bg-contain">...</div>
```

### **Background Position**
```html
<div class="bg-center">...</div>
<div class="bg-top">...</div>
<div class="bg-bottom">...</div>
```

---

## 🎯 POSITIONING

### **Position**
```html
<div class="relative">...</div>   <!-- relative -->
<div class="absolute">...</div>   <!-- absolute -->
<div class="fixed">...</div>      <!-- fixed -->
<div class="sticky">...</div>     <!-- sticky -->
```

### **Z-Index**
```html
<div class="z-0">...</div>
<div class="z-10">...</div>
<div class="z-50">...</div>
<div class="z-[100]">...</div>
```

---

## 🔲 BORDERS & RADIUS

### **Border**
```html
<div class="border">...</div>
<div class="border-2">...</div>
<div class="border border-gray-300">...</div>
<div class="border-t border-b">...</div>
```

### **Border Radius**
```html
<div class="rounded">...</div>        <!-- 0.25rem -->
<div class="rounded-md">...</div>     <!-- 0.375rem -->
<div class="rounded-lg">...</div>     <!-- 0.5rem -->
<div class="rounded-xl">...</div>     <!-- 0.75rem -->
<div class="rounded-2xl">...</div>    <!-- 1rem -->
<div class="rounded-full">...</div>   <!-- pill shape -->
```

---

## 🌑 SHADOWS

```html
<div class="shadow-sm">...</div>   <!-- small -->
<div class="shadow">...</div>      <!-- default -->
<div class="shadow-md">...</div>   <!-- medium -->
<div class="shadow-lg">...</div>   <!-- large -->
<div class="shadow-xl">...</div>   <!-- extra large -->
```

---

## 📱 RESPONSIVE DESIGN

### **Breakpoints**
```
sm: 640px    (mobile landscape)
md: 768px    (tablet)
lg: 1024px   (desktop)
xl: 1280px   (large desktop)
2xl: 1536px  (extra large)
```

### **Cara Pakai**
```html
<!-- Default: mobile first -->
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Mobile: 100% lebar -->
  <!-- Tablet: 50% lebar -->
  <!-- Desktop: 33% lebar -->
</div>

<!-- Hide di mobile, tampil di desktop -->
<div class="hidden md:block">...</div>

<!-- Tampil di mobile, hide di desktop -->
<div class="block md:hidden">...</div>
```

---

## 🎭 HOVER & STATES

### **Hover**
```html
<button class="bg-blue-500 hover:bg-blue-700">
  Hover me
</button>

<button class="text-blue-500 hover:text-blue-700 hover:underline">
  Hover text
</button>
```

### **Focus**
```html
<input class="focus:ring-2 focus:ring-blue-500 focus:outline-none">
```

### **Active (klik)**
```html
<button class="bg-blue-500 active:bg-blue-800">
  Click me
</button>
```

### **Disabled**
```html
<button class="bg-gray-300 cursor-not-allowed" disabled>
  Disabled
</button>
```

---

## ✨ TRANSITIONS & ANIMATIONS

### **Transition**
```html
<button class="transition duration-300 ease-in-out hover:bg-blue-700">
  Smooth hover
</button>

<button class="transition-all hover:scale-105">
  Scale on hover
</button>
```

### **Animation**
```html
<div class="animate-bounce">...</div>   <!-- bounce -->
<div class="animate-pulse">...</div>    <!-- pulse -->
<div class="animate-spin">...</div>     <!-- spin (loading) -->
```

---

## 🎨 CONTOH KOMBINASI KLASIK

### **Card**
```html
<div class="bg-white rounded-lg shadow-md p-6">
  <h2 class="text-xl font-bold mb-2">Card Title</h2>
  <p class="text-gray-600">Card content here</p>
</div>
```

### **Button Primary**
```html
<button class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
  Click Me
</button>
```

### **Input Field**
```html
<input class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
```

### **Navbar**
```html
<nav class="bg-white shadow-md px-6 py-4">
  <div class="container mx-auto flex justify-between items-center">
    <div class="text-xl font-bold">Logo</div>
    <div class="flex gap-4">
      <a href="#" class="hover:text-blue-500">Home</a>
      <a href="#" class="hover:text-blue-500">About</a>
    </div>
  </div>
</nav>
```

### **Hero Section**
```html
<section class="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
  <div class="container mx-auto text-center">
    <h1 class="text-5xl font-bold mb-4">Hello World</h1>
    <p class="text-xl mb-8">Welcome to my website</p>
    <button class="bg-white text-blue-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100">
      Get Started
    </button>
  </div>
</section>
```

---

## 💡 TIPS TAILWIND

### **1. Mobile First**
```html
<!-- Selalu mulai dari mobile -->
<div class="text-sm md:text-base lg:text-lg">
  <!-- Mobile: small, Tablet: medium, Desktop: large -->
</div>
```

### **2. Konsisten Spacing**
```html
<!-- Pakai angka yang konsisten -->
<div class="p-4 mb-4">...</div>  <!-- ✅ Konsisten -->
<div class="p-5 mb-3">...</div>  <!-- ❌ Tidak konsisten -->
```

### **3. Group Hover**
```html
<div class="group">
  <h2 class="group-hover:text-blue-500">Title</h2>
  <p class="group-hover:text-gray-600">Description</p>
</div>
```

### **4. Custom Values**
```html
<!-- Angka custom dengan bracket -->
<div class="w-[200px] h-[100px]">...</div>
<div class="bg-[#1a1a1a]">...</div>
<div class="top-[50%]">...</div>
```

---

## 🔍 QUICK REFERENCE

| Kebutuhan | Class |
|-----------|-------|
| Tengah horizontal | `mx-auto` |
| Tengah vertikal | `flex items-center` |
| Tengah semua | `flex items-center justify-center` |
| Full height | `h-screen` |
| Sticky top | `sticky top-0` |
| Overlay gelap | `bg-black/50` |
| Gradient | `bg-gradient-to-r from-blue-500 to-purple-600` |
| Responsive hide | `hidden md:block` |

---

*Cheat sheet ini untuk referensi cepat. Praktik terbaik: langsung coding!*
