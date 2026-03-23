# TAHAP 1: FONDASI PROGRAMMING PYTHON

## Pendahuluan

Python adalah bahasa pemrograman yang diciptakan oleh **Guido van Rossum** pada tahun 1991. Nama Python sendiri bukan berasal dari ular Python, melainkan dari grup komedi Inggris **Monty Python** yang sangat disukai Guido. Python dirancang dengan filosofi **"Readability Counts"** - kode Python harus mudah dibaca dan dipahami oleh manusia.

Mengapa Python begitu populer di tahun 2026? Berikut alasan utamanya:

| Aspek | Penjelasan |
|-------|------------|
| **Sintaks yang Simpel** | Python menggunakan indentasi (spasi) untuk mendefinisikan blok kode, sehingga kode Python sangat bersih dan mudah dibaca |
| **Ekosistem Library yang Luas** | PyPI (Python Package Index) memiliki lebih dari 500.000 package siap pakai untuk berbagai keperluan |
| **Versatilitas** | Python bisa digunakan untuk web development, data science, AI/ML, automation, game development, dan masih banyak lagi |
| **Komunitas yang Besar** | Jutaan developer Python di seluruh dunia aktif berkontribusi dan saling membantu |
| **AI/ML Dominasi** | Hampir semua framework AI dan ML terkemuka (TensorFlow, PyTorch, LangChain) menggunakan Python sebagai bahasa utama |

### Mengapa Fondasi Python Sangat Penting untuk AI Engineering?

Fondasi Python yang kuat adalah **prasyarat mutlak** untuk menjadi AI Engineer yang kompeten. Tanpa pemahaman yang baik tentang Python, Anda akan:

1. **Kesulitan memahami dokumentasi** - Sebagian besar dokumentasi library AI ditulis dalam kode Python
2. **Tidak bisa debug error** - Error handling dan troubleshooting adalah skill harian AI Engineer
3. **Sulit mengintegrasikan tools** - AI Engineering melibatkan banyak library dan API integration
4. **Produktivitas rendah** - Penulisan kode yang tidak efisien akan memperlambat development

### Referensi Dokumentasi Official Python

Untuk mempelajari lebih detail, dokumentasi resmi Python adalah sumber terbaik:

| Topik | URL | Keterangan |
|-------|-----|------------|
| **Dokumentasi Python 3** | [docs.python.org/3/](https://docs.python.org/3/) | Dokumentasi resmi lengkap |
| **Tutorial Python** | [docs.python.org/3/tutorial/](https://docs.python.org/3/tutorial/) | Tutorial resmi untuk pemula |
| **Tutorial Bagian Data Structures** | [docs.python.org/3/tutorial/datastructures.html](https://docs.python.org/3/tutorial/datastructures.html) | Penjelasan detail list, dict, set, tuple |
| **Tutorial Bagian Functions** | [docs.python.org/3/tutorial/controlflow.html](https://docs.python.org/3/tutorial/controlflow.html) | Fungsi, arguments, scope |
| **PEP 8 - Style Guide** | [pep8.org/](https://pep8.org/) | Standar penulisan kode Python |
| **The Zen of Python** | [peps.python.org/pep-0020/](https://peps.python.org/pep-0020/) | Filosofi desain Python |

---

## 1. Variabel dan Tipe Data

### 1.1 Apa Itu Variabel?

**Variabel** adalah container (wadah) untuk menyimpan data di memory komputer. Dalam Python, variabel dibuat ketika Anda memberikan nilai kepadanya:

```python
# Membuat variabel sederhana
nama = "Budi Santoso"    # String (teks)
umur = 25                # Integer (bilangan bulat)
tinggi = 170.5           # Float (bilangan desimal)
is_mahasiswa = True      # Boolean (True/False)

# Menampilkan isi variabel
print(f"Nama: {nama}")
print(f"Umur: {umur}")
print(f"Tinggi: {tinggi}")
print(f"Mahasiswa: {is_mahasiswa}")
```

**Penjelasan Detail:**

- `nama = "Budi Santoso"` - Python secara otomatis mendeteksi bahwa ini adalah string karena nilainya diapit tanda kutip
- `umur = 25` - Integer karena nilainya adalah bilangan bulat tanpa desimal
- `tinggi = 170.5` - Float karena mengandung titik desimal
- `is_mahasiswa = True` - Boolean karena nilainya hanya bisa True atau False

**Penting: Variabel adalah Reference**

Dalam Python, variabel tidak menyimpan nilai secara langsung, melainkan menyimpan **reference (alamat)** ke objek di memory:

```python
# id() - melihat alamat memory objek
x = 5
y = x

print(f"x = {x}, id(x) = {id(x)}")
print(f"y = {y}, id(y) = {id(y)}")
print(f"id(x) == id(y): {id(x) == id(y)}")  # True - pointing ke objek yang sama

# Ketika kita ubah x, y TIDAK berubah (karena int adalah immutable)
x = 10
print(f"x = {x}, y = {y}")  # x=10, y=5
```

**type() - Mengecek Tipe Data**

```python
# type() mengembalikan kelas dari objek
print(type(5))              # <class 'int'>
print(type(5.5))           # <class 'float'>
print(type("hello"))      # <class 'str'>
print(type(True))          # <class 'bool'>

# Sangat berguna untuk debugging
data = "42"
print(type(data))          # <class 'str'>
```

### 1.2 Aturan Penamaan Variabel

Python memiliki aturan ketat untuk penamaan variabel:

```python
# ✅ VALID - Penamaan yang benar
nama_lengkap = "Budi"              # snake_case (recommended untuk variabel)
UmurMax = 100                      # PascalCase
_konstanta = 3.14                  # Dimulai dengan underscore
nilai1, nilai2 = 85, 90            # Multiple assignment

# ❌ INVALID - Penamaan yang salah
# 2nama = "Budi"                    # Tidak boleh dimulai dengan angka
# nama-lengkapan = "Budi"           # Tidak boleh menggunakan hyphen (-)
# nama lengkap = "Budi"             # Tidak boleh menggunakan spasi
# class = "Matematika"             # Tidak boleh menggunakan keyword Python
```

**Aturan Lengkap:**
1. Variabel harus dimulai dengan huruf (a-z, A-Z) atau underscore (_)
2. Karakter berikutnya bisa huruf, angka (0-9), atau underscore
3. Python bersifat case-sensitive (nama, Nama, NAMA adalah berbeda)
4. Tidak boleh menggunakan keyword Python (class, def, if, for, dll)

**Penjelasan Detail:**

- `nama = "Budi Santoso"` - Python secara otomatis mendeteksi bahwa ini adalah string karena nilainya diapit tanda kutip
- `umur = 25` - Integer karena nilainya adalah bilangan bulat tanpa desimal
- `tinggi = 170.5` - Float karena mengandung titik desimal
- `is_mahasiswa = True` - Boolean karena nilainya hanya bisa True atau False

### 1.2 Aturan Penamaan Variabel

Python memiliki aturan ketat untuk penamaan variabel:

```python
# ✅ VALID - Penamaan yang benar
nama_lengkap = "Budi"              # snake_case (recommended untuk variabel)
UmurMax = 100                      # PascalCase
_konstanta = 3.14                  # Dimulai dengan underscore
nilai1, nilai2 = 85, 90            # Multiple assignment

# ❌ INVALID - Penamaan yang salah
# 2nama = "Budi"                    # Tidak boleh dimulai dengan angka
# nama-lengkap = "Budi"             # Tidak boleh menggunakan hyphen (-)
# nama lengkap = "Budi"            # Tidak boleh menggunakan spasi
# class = "Matematika"             # Tidak boleh menggunakan keyword Python
```

### 1.3 Tipe Data Primitif

Python memiliki 4 tipe data primitif utama:

```python
# 1. INTEGER (int) - Bilangan bulat
count = 42
negatif = -17
hexa = 0xFF          # Hexadecimal (255 dalam desimal)
biner = 0b1010       # Binary (10 dalam desimal)
oktal = 0o17          # Octal (15 dalam desimal)

# 2. FLOAT (float) - Bilangan desimal
pi = 3.14159
negatif_desimal = -2.5
scientific = 1.5e10   # 1.5 x 10^10 = 15000000000.0

# 3. STRING (str) - Teks
nama = "Budi"
pekerjaan = 'Programmer'          # Bisa pakai single atau double quote
multiline = """Ini adalah string
yang spans multiple
lines"""                          # Triple quote untuk multiline
escape = "Baris pertama\nBaris kedua"  # Escape sequence \n untuk newline

# 4. BOOLEAN (bool) - True atau False
is_active = True
is_empty = False
```

**String Formatting - 3 Cara dalam Python:**

```python
# CARA 1: % formatting (OLD - Python 2 style)
nama = "Budi"
umur = 25
print("Nama: %s, Umur: %d" % (nama, umur))  # Nama: Budi, Umur: 25

# CARA 2: .format() (Python 3.0-3.5)
print("Nama: {}, Umur: {}".format(nama, umur))  # Nama: Budi, Umur: 25
print("Nama: {0}, Umur: {1}, Nama lagi: {0}".format(nama, umur))

# CARA 3: f-string (RECOMMENDED - Python 3.6+)
print(f"Nama: {nama}, Umur: {umur}")  # Nama: Budi, Umur: 25
print(f"Nama: {nama.upper()}, Umur: {umur * 12} bulan")

# f-string bisa berisi expression!
x = 10
y = 5
print(f"{x} + {y} = {x + y}")  # 10 + 5 = 15
print(f"Max: {max(x, y)}")      # Max: 10

# f-string dengan format numbers
harga = 1234567.89
print(f"Rp{harga:,.2f}")         # Rp1,234,567.89
print(f"Persen: {0.125:.1%}")    # Persen: 12.5%
```

**Penjelasan Detail Tipe Data:**

| Tipe | Contoh | Penjelasan |
|------|--------|------------|
| `int` | `42`, `-17`, `0xFF` | Bilangan bulat (positif/negatif), supports hexadecimal (0x), binary (0b), octal (0o) |
| `float` | `3.14`, `1.5e10` | Bilangan desimal, scientific notation (e10 = ×10^10) |
| `str` | `"hello"`, `'test'` | Teks, bisa single/double/triple quote |
| `bool` | `True`, `False` | Nilai logika (huruf pertama kapital!) |

**Penting: Boolean adalah Subclass dari int**

```python
# Boolean SEBENARNYA adalah subclass dari int!
print(isinstance(True, int))    # True
print(True + 1)                 # 2 (True = 1)
print(False + 1)                # 1 (False = 0)

### 1.4 Type Conversion (Konversi Tipe Data)

Python memungkinkan konversi antar tipe data. Ini sangat penting untuk AI Engineering karena Anda sering menerima input dalam format string dan perlu mengonversinya ke angka:

```python
# String ke Integer
angka = int("42")           # "42" -> 42
# int("42.5") ERROR! Tidak bisa langsung dari string float

# String ke Float
desimal = float("3.14")     # "3.14" -> 3.14
desimal = float("42")        # "42" -> 42.0

# Integer ke Float
pi_float = float(3)          # 3 -> 3.0

# Float ke Integer (akan dibulatkan ke bawah)
bulat = int(3.9)             # 3.9 -> 3 (bukan 4!)
bulat = int(3.1)             # 3.1 -> 3

# Number ke String
teks = str(42)               # 42 -> "42"
teks = str(3.14)             # 3.14 -> "3.14"

# String ke Boolean
bool_true = bool("False")    # SELALU True! (string non-empty)
bool_false = bool("")         # False (string kosong)
bool_zero = bool(0)          # False
bool_num = bool(42)           # True (angka non-zero)
```

**Penjelasan Detail:**

- `int("42")` - Gagal jika string tidak berupa angka valid
- `int(3.9)` - SELALU dibulatkan ke BAWAH (floor), bukan round
- `bool("False")` - Jadi True karena string non-empty! Perlu `.lower()` dulu
- `bool(0)` - Hanya 0 yang False, semua angka lain True

### 1.5 None - Nilai Kosong

`None` adalah tipe data khusus yang merepresentasikan "tidak ada nilai" atau "null" dalam Python:

```python
# None digunakan untuk:
# 1. Variabel yang belum memiliki nilai
data = None
print(data)              # Output: None

# 2. Default parameter dalam fungsi
def greet(name=None):
    if name is None:
        name = "Guest"
    return f"Hello, {name}!"

# 3. Return value untuk fungsi yang tidak mengembalikan sesuatu
def proses_data():
    # Melakukan sesuatu
    return None
```

**Penjelasan Detail tentang None:**

```python
# NOTE: None adalah Objek Tunggal (Singleton)
# Semua variabel yang bernilai None pointing ke Objek yang SAMA
a = None
b = None
print(a is b)           # True - karena singleton
print(id(a) == id(b))   # True - alamat sama

# ⚠️ PERBEDAAN PENTING: None vs string kosong vs 0
print(None is None)           # True
print("" == None)            # False (string kosong berbeda dari None)
print(0 == None)             # False (0 berbeda dari None)
print([] == None)            # False (list kosong berbeda dari None)

# ✅ CARA BENAR cek None - SELALU gunakan 'is'
if data is None:
    print("Data belum ada")

# ❌ CARA SALAH - bekerja tapi tidak pythonic
if data == None:
    print("Data belum ada")

# Kenapa harus 'is'? Karena == membandingkan nilai, is membandingkan identity
# Untuk None, gunakan 'is None' adalah best practice dari PEP 8
```

**Kapan Menggunakan None:**

| Penggunaan | Contoh |
|------------|--------|
| Variabelbelum ada nilai | `data = None` |
| Default parameter | `def func(x=None):` |
| Optional return | `return None` |
| Missing data di dict | `dict.get('key')` -> None jika tidak ada |

### 1.5b Type Checking - isinstance() dan type()

Python menyediakan fungsi untuk mengecek tipe data:

```python
# type() - cek tipe data langsung
print(type(42))           # <class 'int'>
print(type("hello"))      # <class 'str'>
print(type([1, 2, 3]))    # <class 'list'>

# isinstance() - cek apakah objek instance dari tipe/kelas tertentu
# REKOMENDASI: Gunakan isinstance() karena lebih fleksibel
print(isinstance(42, int))           # True
print(isinstance(42.0, float))      # True
print(isinstance("hello", str))      # True
print(isinstance([1, 2], list))      # True
print(isinstance((1, 2), tuple))     # True

# isinstance() dengan multiple types
print(isinstance(42, (int, float)))  # True - int atau float
print(isinstance("hello", (int, str)))  # True - string

# Praktis untuk validasi input
def process_input(data):
    if isinstance(data, int):
        return data * 2
    elif isinstance(data, float):
        return data ** 2
    elif isinstance(data, str):
        return data.upper()
    else:
        raise TypeError(f"Tipe data {type(data)} tidak didukung")

print(process_input(5))       # 10
print(process_input(3.14))    # 9.8596
print(process_input("hello")) # HELLO
```

**Perbedaan type() vs isinstance():**

| Fungsi | Penggunaan | Keterangan |
|--------|-----------|------------|
| `type(x)` | `type(42) == int` | Cek tipe exact (tidak check subclass) |
| `isinstance(x, int)` | `isinstance(42, int)` | Cek tipe + subclass (direkomendasikan) |

### 1.6 Mutability - Konsep Kunci

**Mutability** menentukan apakah sebuah objek bisa diubah setelah dibuat. Ini adalah konsep yang SANGAT PENTING karena menentukan bagaimana data behave saat di-assign atau di-pass ke fungsi:

```python
# ============================================
# IMMUTABLE - Tidak bisa diubah setelah dibuat
# ============================================
# int, float, str, tuple, frozenset

a = 5
b = a
print(f"SEBELUM: a={a}, b={b}, id(a)={id(a)}, id(b)={id(b)}")
a = 10
print(f"SESUDAH: a={a}, b={b}")  # Output: 5 (tidak berubah!)
# Penjelasan: saat a = 10, Python membuat objek baru, b masih pointing ke objek lama

nama = "Budi"
nama_upper = nama.upper()  # Membuat string baru
print(f"nama: {nama}")           # "Budi" (aslinya tidak berubah)
print(f"nama_upper: {nama_upper}")  # "BUDI"

# NOTE: Tuple dengan list di dalamnya - konsep ADVANCED (dijelaskan DI SINI untuk pemahaman)
# tuple_dengan_list = ([1, 2], [3, 4])
# tuple_dengan_list[0] = [5, 6]  # ERROR! Tidak bisa replace elemen tuple
# tuple_dengan_list[0][0] = 99     # ✅ Ini BISA (list di dalam bisa diubah)
# print(tuple_dengan_list)         # ([99, 2], [3, 4])
# ^ Penjelasan: Tuple TIDAK bisa di-assign ulang, tapi ISI (list) bisa dimodifikasi
```

**Penjelasan Detail Immutability:**

```python
# Kenapa int immutable?
# Karena integers adalah objects dengan fixed memory size
# Bayangkan: jika int bisa diubah, semua variabel yang pointing ke 5 bisa berubah tiba-tiba

x = 5
y = x
# Di memory: ada objek Foley Jr. di alamat 0x1001, x dan y pointing ke sana
# x = 10: Python membuat objek baru (10) di 0x1002, x sekarang pointing ke sana
# y tetap pointing ke objek lama (5)

# Dictionary (mutable) - BEWARE!
# ============================================
# MUTABLE - Bisa diubah setelah dibuat
# ============================================
# list, dict, set

# List - contoh masalah umum (ERROR YANG SANGAT SERING TERJADI)
list1 = [1, 2, 3]
list2 = list1          # ❌ TIDAK membuat copy! Hanya reference!
list2.append(4)
print(list1)           # Output: [1, 2, 3, 4] (list1 juga berubah!)

# ✅ CARA BENAR untuk copy list
list1 = [1, 2, 3]
list2 = list1.copy()   # Shallow copy - membuat objek baru
# Atau
list2 = list1[:]       # Slice copy - cara lain
# Atau
list2 = list(list1)    # Konstruktor copy
list2.append(4)
print(list1)           # Output: [1, 2, 3] (list1 tetap aman)
print(list2)           # Output: [1, 2, 3, 4]

# ⚠️ DEEP COPY - Jika list berisi list/objek lain
# copy adalah module standar Python untuk membuat copy objek
# Dokumentasi resmi: https://docs.python.org/3/library/copy.html

import copy
list_nested = [[1, 2], [3, 4]]
list_shallow = list_nested.copy()
list_deep = copy.deepcopy(list_nested)

list_nested[0][0] = 99
print(f"Original: {list_nested}")      # [[99, 2], [3, 4]]
print(f"Shallow:  {list_shallow}")     # [[99, 2], [3, 4]] - BERUBAH!
print(f"Deep:     {list_deep}")        # [[1, 2], [3, 4]] - TIDAK berubah
```

**Tabel Referensi Mutability:**

| Tipe Data | Mutable? | Gunakan Untuk |
|-----------|----------|--------------|
| `int` | ❌ Tidak | Nilai tunggal, counter |
| `float` | ❌ Tidak | Pengukuran desimal |
| `str` | ❌ Tidak | Text, immutable strings |
| `tuple` | ❌ Tidak | Koordinat, fixed data |
| `list` | ✅ Ya | Koleksi yang berubah |
| `dict` | ✅ Ya | Key-value pairs |
| `set` | ✅ Ya | Unik values, membership |
| `frozenset` | ❌ Tidak | Set yang tidak berubah |

---

## 2. Persiapan: Built-in Functions yang Sering Digunakan

Sebelum masuk ke Collections, kita perlu memahami built-in functions yang sering digunakan untuk membuat dan memanipulasi data:

### 2.0 range() - Menghasilkan Sequenced Numbers

`range()` menghasilkan sequence of numbers, sangat sering digunakan untuk looping dan membuat list:

```python
# range(stop) - dari 0 sampai stop-1
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# range(start, stop) - dari start sampai stop-1
for i in range(2, 6):
    print(i)  # 2, 3, 4, 5

# range(start, stop, step) - dengan increment
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8

# range dengan step negatif (mundur)
for i in range(5, 0, -1):
    print(i)  # 5, 4, 3, 2, 1

# Konversi range ke list
numbers = list(range(10))
print(numbers)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Menggunakan range untuk indexing
nilai = [85, 90, 78, 92, 88]
for i in range(len(nilai)):
    print(f"Index {i}: {nilai[i]}")
```

**Penting: range() itu LAZY (efisien memory)**

```python
# ❌ SALAH: Membuat list dengan range
numbers = list(range(1000000))  # Boros memory!

# ✅ BENAR: Gunakan range langsung
for i in range(1000000):  # Efisien, tidak buat list di memory
    if i == 10:
        break
```

### 2.0b len() - Mengetahui Jumlah Elemen

`len()` mengembalikan jumlah elemen dalam iterable:

```python
# len dengan berbagai tipe data
print(len([1, 2, 3]))        # 3 (list)
print(len("hello"))          # 5 (string)
print(len({"a": 1, "b": 2})) # 2 (dict)
print(len((1, 2, 3)))        # 3 (tuple)
print(len({1, 2, 3}))        # 3 (set)

# Kombinasi dengan range
for i in range(len(nilai)):
    print(f"Elemen ke-{i+1} dari {len(nilai)}")
```

### 2.0c sorted() dan reversed() - Mengurutkan

```python
# sorted() - return list baru yang terurut
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
print(sorted(numbers))         # [1, 1, 2, 3, 4, 5, 6, 9]
print(sorted(numbers, reverse=True))  # [9, 6, 5, 4, 3, 2, 1, 1]

# sorted() dengan key function
nama = ["Charlie", "Alice", "Bob"]
print(sorted(nama))  # ["Alice", "Bob", "Charlie"]
print(sorted(nama, key=len))  # ["Bob", "Alice", "Charlie"] (by length)

# reversed() - return iterator, bukan list
numbers = [1, 2, 3]
reversed_nums = reversed(numbers)
print(list(reversed_nums))  # [3, 2, 1]
```

---

## 2. Collections - Struktur Data Koleksi

Python menyediakan 4 struktur data koleksi utama. Memahami kapan menggunakan yang mana adalah skill fundamental.

### 2.0 Module collections - Struktur Data Khusus

> **NOTE:** `collections` adalah module standar Python yang menyediakan struktur data khusus. Dokumentasi resmi: https://docs.python.org/3/library/collections.html

```python
# collections menyediakan:
# - namedtuple: Tuple dengan nama field
# - deque: Double-ended queue (list yang efisien untuk append/pop)
# - Counter: Dictionary untuk menghitung elemen
# - OrderedDict: Dictionary yang mengingat urutan
# - defaultdict: Dictionary dengan default value
# - ChainMap: Multiple dictionaries sebagai satu view

# Contoh: Counter - menghitung kemunculan
from collections import Counter

votes = ['A', 'B', 'A', 'C', 'B', 'A']
counter = Counter(votes)
print(counter)  # Counter({'A': 3, 'B': 2, 'C': 1})
print(counter.most_common(2))  # [('A', 3), ('B', 2)]

# Contoh: deque - queue yang efisien
from collections import deque
dq = deque()
dq.append(1)      # Tambah di kanan: [1]
dq.appendleft(0)  # Tambah di kiri: [0, 1]
dq.append(2)      # [0, 1, 2]
print(dq.pop())   # 2, return dan hapus kanan
print(dq.popleft())  # 0, return dan hapus kiri
```

### 2.1 List - Daftar Terurut dan Mutable

**List** adalah koleksi yang terurut, bisa diubah (mutable), dan mengizinkan duplikat:

```python
# ============================================
# MEMBUAT LIST
# ============================================
nilai = [85, 90, 78, 92, 88]
nama = ["Alice", "Bob", "Charlie"]
campuran = [1, "dua", 3.0, True]     # Boleh campur tipe data
kosong = []                           # List kosong
dari_range = list(range(5))           # [0, 1, 2, 3, 4]

# ============================================
# MENGAKSES ELEMEN
# ============================================
nilai = [85, 90, 78, 92, 88]
print(nilai[0])           # 85 - elemen pertama (indeks 0)
print(nilai[-1])          # 88 - elemen terakhir
print(nilai[1:3])         # [90, 78] - slicing dari indeks 1 ke 2
print(nilai[:3])         # [85, 90, 78] - dari awal ke indeks 2
print(nilai[2:])         # [78, 92, 88] - dari indeks 2 ke akhir
print(nilai[::2])        # [85, 78, 88] - setiap 2 elemen
print(nilai[::-1])       # [88, 92, 78, 90, 85] - reverse

# ============================================
# MEMODIFIKASI LIST
# ============================================
nilai = [85, 90, 78, 92, 88]

# Menambah elemen
nilai.append(95)              # Tambah di akhir: [85, 90, 78, 92, 88, 95]
nilai.insert(0, 100)          # Sisipkan di indeks 0: [100, 85, 90, 78, 92, 88]
nilai.extend([70, 75])        # Tambah banyak: [..., 70, 75]

# Mengubah elemen
nilai[0] = 99                 # Ubah elemen pertama

# Menghapus elemen
nilai.remove(90)              # Hapus berdasarkan nilai (pertama yang ketemu)
nilai.pop()                  # Hapus elemen terakhir, return nilainya
nilai.pop(0)                  # Hapus elemen di indeks 0
del nilai[0]                 # Hapus elemen di indeks 0 (tanpa return)
nilai.clear()                # Hapus semua elemen

# ============================================
# OPERATION LIST
# ============================================
nilai1 = [85, 90, 78]
nilai2 = [92, 88, 95]

# Concatenate
gabungan = nilai1 + nilai2    # [85, 90, 78, 92, 88, 95]

# Repeat
ulangan = [0] * 5            # [0, 0, 0, 0, 0]

# Check membership
print(90 in nilai1)          # True
print(99 not in nilai1)      # True

# ============================================
# LIST METHODS - Complete Reference
# ============================================
nilai = [85, 90, 78, 92, 88]

len(nilai)                   # 5 - jumlah elemen
max(nilai)                   # 92 - nilai maksimum
min(nilai)                   # 78 - nilai minimum
sum(nilai)                   # 433 - jumlah semua

nilai.sort()                 # Urutkan ascending (modifies in place)
nilai.sort(reverse=True)     # Urutkan descending
nilai_sorted = sorted(nilai) # Tanpa modify (return list baru)

nilai.reverse()              # Balik urutan (modifies in place)

nilai.index(90)              # 1 - cari indeks berdasarkan nilai
nilai.count(88)              # 1 - hitung kemunculan nilai

# ============================================
# ITERATING LIST
# ============================================
nilai = [85, 90, 78, 92]

# For loop basic - iterasi sederhana
for n in nilai:
    print(n)

# ============================================
# ENUMERATE - UNTUK MENDAPATKAN INDEKS DAN NILAI
# ============================================
# enumerate() mengembalikan tuple (index, value) untuk setiap elemen
# Ini SANGAT BERGUNA saat kita butuh indeks dalam loop

nilai = ["apel", "mangga", "jeruk"]

# Dasar enumerate
for index, buah in enumerate(nilai):
    print(f"Index {index}: {buah}")
# Output:
# Index 0: apel
# Index 1: mangga
# Index 2: jeruk

# Mulai dari angka tertentu
for i, buah in enumerate(nilai, start=1):
    print(f"{i}. {buah}")
# Output:
# 1. apel
# 2. mangga
# 3. jeruk

# Convert ke list
indices = list(enumerate(nilai))
# [(0, 'apel'), (1, 'mangga'), (2, 'jeruk')]

# ============================================
# ZIP - UNTUK ITERASI BEBERAPA LIST SEKALIGUS
# ============================================
# zip() menggabungkan beberapa iterables menjadi tuple
# Berguna saat kita punya data parallel (misal: nama dan nilai)

nama = ["Alice", "Bob", "Charlie"]
scores = [85, 90, 78]

# Iterasi bersamaan
for n, s in zip(nama, scores):
    print(f"{n}: {s}")
# Output:
# Alice: 85
# Bob: 90
# Charlie: 78

# List dari hasil zip
gabungan = list(zip(nama, scores))
# [('Alice', 85), ('Bob', 90), ('Charlie', 78)]

# Multiple lists
warna = ["merah", "hijau", "biru"]
for n, s, w in zip(nama, scores, warna):
    print(f"{n}: {s} ({w})")
# Alice: 85 (merah)
# Bob: 90 (hijau)
# Charlie: 78 (biru)

# ⚠️ Perhatikan: zip() berhenti di list terpendek
list1 = [1, 2, 3, 4, 5]
list2 = ['a', 'b']
for x, y in zip(list1, list2):
    print(x, y)
# Output: 1 a, 2 b (hanya 2 iterasi)

# ============================================
# PRACTICAL: GABUNGAN ENUMERATE DAN ZIP
# ============================================
# Kadang kita butuh keduanya - indeks DAN multiple data

mahasiswa = ["Budi", "Alice", "Charlie"]
nilai = [85, 90, 78]
kota = ["Jakarta", "Bandung", "Surabaya"]

for i, (mhs, nil, kt) in enumerate(zip(mahasiswa, nilai, kota)):
    print(f"{i+1}. {mhs} dari {kt} mendapat nilai {nil}")

# List comprehension (akan dijelaskan lebih detail)
kuadrat = [x**2 for x in nilai]
```

### 2.2 Tuple - Daftar Terurut dan Immutable

**Tuple** hampir sama dengan List, bedanya tuple **tidak bisa diubah** (immutable) setelah dibuat. Tuple menggunakan parentheses `( )` atau tanpa tanda:

```python
# ============================================
# MEMBUAT TUPLE
# ============================================
koordinat = (10, 20)              # Tuple dengan 2 elemen
single = (42,)                    # Tuple dengan 1 elemen (perlu koma!)
tidak_beraturan = 1, 2, 3        # Tanpa parentheses juga valid
kosong = ()                       # Tuple kosong

# Named tuple - lebih readable (ADVANCED: dari collections module)
# NOTE: namedtuple dijelaskan lebih detail di Section 2.4 (Dictionary Advanced)
# collections module adalah topik lanjutan
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(p.x, p.y)                   # 10, 20
# Kelebihan: bisa akses dengan .x dan .y, juga bisa sebagai tuple biasa
print(f"Is tuple: {isinstance(p, tuple)}")  # True

# ============================================
# MENGAPA GUNAKAN TUPLE?
# ============================================

# 1. Performance - Tuple sedikit lebih cepat dari list
# 2. Safety - Tidak bisa di-modify (read-only data)
# 3. Bisa sebagai dictionary key (hashable)
# 4. Return multiple values dari fungsi

# ❌ TIDAK BISA
koordinat = (10, 20)
koordinat[0] = 15        # ERROR! TypeError
koordinat.append(30)    # ERROR!

# ✅ BISA - Tuple bisa di-unpack
x, y = koordinat        # Unpacking
print(f"X: {x}, Y: {y}")

# ✅ Tuple return dari fungsi
def get_min_max(numbers):
    return min(numbers), max(numbers)

min_val, max_val = get_min_max([1, 5, 3, 9, 2])
print(min_val, max_val)  # 1 9

# ============================================
# TUPLE METHODS (HANYA 2)
# ============================================
koordinat = (10, 20, 10, 30)

koordinat.count(10)     # 2 - hitung kemunculan
koordinat.index(20)      # 1 - cari indeks

# ============================================
# CONVERT ANTARA LIST DAN TUPLE
# ============================================
list_from_tuple = list((1, 2, 3))      # Tuple -> List
tuple_from_list = tuple([1, 2, 3])     # List -> Tuple
```

### 2.3 Set - Koleksi Unik Tanpa Duplikat

**Set** adalah koleksi yang tidak terurut, tidak memiliki indeks, dan **hanya menyimpan nilai unik**:

```python
# ============================================
# MEMBUAT SET
# ============================================
buah = {"apel", "mangga", "jeruk"}
angka = {1, 2, 3, 4, 5}
kosong = set()              # SET KOSONG (bukan {} yang berarti dict!)

# Dari list dengan duplikat
angka = [1, 2, 2, 3, 3, 3]
unique = set(angka)         # {1, 2, 3} - otomatis hapus duplikat

# ============================================
# SET OPERATIONS - UNION, INTERSECTION, DIFFERENCE
# ============================================
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}

# Union - semua elemen (tanpa duplikat)
union = set_a | set_b               # {1, 2, 3, 4, 5, 6}
union = set_a.union(set_b)          # Cara lain

# Intersection - elemen yang sama
intersect = set_a & set_b            # {3, 4}
intersect = set_a.intersection(set_b)

# Difference - elemen di A yang tidak ada di B
diff = set_a - set_b                # {1, 2}
diff = set_a.difference(set_b)

# Symmetric Difference - elemen yang hanya ada di satu set
sym_diff = set_a ^ set_b            # {1, 2, 5, 6}
sym_diff = set_a.symmetric_difference(set_b)

# ============================================
# SET METHODS
# ============================================
buah = {"apel", "mangga", "jeruk"}

buah.add("pisang")          # Tambah satu elemen
buah.update(["anggur", "nanas"])  # Tambah banyak

buah.remove("mangga")       # Hapus (ERROR jika tidak ada)
buah.discard("anggur")     # Hapus (TIDAK ERROR jika tidak ada)

buah.pop()                  # Hapus elemen random, return nilainya
buah.clear()                # Hapus semua

# ============================================
# SUBSET DAN SUPERSET
# ============================================
a = {1, 2, 3}
b = {1, 2, 3, 4, 5}

print(a.issubset(b))       # True - a adalah subset dari b
print(b.issuperset(a))     # True - b adalah superset dari a
print(a.isdisjoint(b))     # False - ada irisan

# ============================================
# KAPAN GUNAKAN SET?
# ============================================

# 1. Menghapus duplikat secara otomatis
data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unique = list(set(data))

# 2. Membership testing (lebih cepat dari list)
# List: O(n) - cek satu per satu
# Set: O(1) - hash lookup
cek_angka = 42 in angka     # Sangat cepat!

# 3. Set operations dalam data processing
```

### 2.4 Dictionary - Pasangan Key-Value

**Dictionary** adalah koleksi pasangan **key-value** yang terorganisir. Key harus unik dan immutable (biasanya string atau number):

```python
# ============================================
# MEMBUAT DICTIONARY
# ============================================
mahasiswa = {
    "nama": "Budi Santoso",
    "umur": 25,
    "jurusan": "Informatika",
    "semester": 5
}

# Cara lain
mahasiswa2 = dict(nama="Alice", umur=23, jurusan="SI")
mahasiswa3 = dict([("nama", "Charlie"), ("umur", 24)])

# Dictionary comprehension
kuadrat = {x: x**2 for x in range(5)}   # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# ============================================
# MENGAKSES DATA
# ============================================
mahasiswa = {"nama": "Budi", "umur": 25, "jurusan": "Informatika"}

# Akses dengan key
print(mahasiswa["nama"])              # "Budi"
# mahasiswa["alamat"] ERROR! KeyError

# Akses aman dengan get()
print(mahasiswa.get("alamat"))         # None (tidak error)
print(mahasiswa.get("alamat", "N/A"))  # "N/A" - default value

# ============================================
# MENAMBAH, MENGUBAH, MENGHAPUS
# ============================================
mahasiswa = {"nama": "Budi", "umur": 25}

# Tambah/ubah
mahasiswa["jurusan"] = "Informatika"   # Tambah key baru
mahasiswa["umur"] = 26                  # Ubah value

# Update dengan dictionary lain
mahasiswa.update({"kota": "Jakarta", "umur": 27})

# Hapus
del mahasiswa["kota"]                   # Hapus dengan key
umur = mahasiswa.pop("umur")           # Hapus dan return nilainya
mahasiswa.clear()                      # Hapus semua

# ============================================
# DICTIONARY METHODS
# ============================================
mahasiswa = {"nama": "Budi", "umur": 25, "jurusan": "Informatika"}

# Get all keys, values, items
mahasiswa.keys()       # dict_keys(['nama', 'umur', 'jurusan'])
mahasiswa.values()     # dict_values(['Budi', 25, 'Informatika'])
mahasiswa.items()      # dict_items([('nama', 'Budi'), ...])

# Iterate
for key in mahasiswa:
    print(f"{key}: {mahasiswa[key]}")

for key, value in mahasiswa.items():
    print(f"{key}: {value}")

# Copy
mahasiswa_copy = mahasiswa.copy()

# ============================================
# NESTED DICTIONARY
# ============================================
universitas = {
    "FTI": {
        "nama": "Fakultas Teknologi Informasi",
        "mahasiswa": 500,
        "jurusan": ["Informatika", "Sistem Informasi"]
    },
    "FT": {
        "nama": "Fakultas Teknik",
        "mahasiswa": 800,
        "jurusan": ["Elektro", "Mesin"]
    }
}

# Akses nested
print(universitas["FTI"]["mahasiswa"])      # 500
print(universitas["FTI"]["jurusan"][0])     # "Informatika"

# ============================================
# DEFAULTDICT - Jika key tidak ada, buat otomatis (ADVANCED)
# ============================================
# NOTE: defaultdict adalah advanced topic dari collections module
# collections module dijelaskan lebih lanjut di dokumentasi resmi:
# https://docs.python.org/3/library/collections.html
# Untuk pemahaman dasar dictionary, fokus ke section sebelumnya terlebih dahulu

from collections import defaultdict

pencntung = defaultdict(int)
pencntung["apel"] += 1
pencntung["jeruk"] += 1
pencntung["apel"] += 1
print(pencntung)            # defaultdict(<class 'int'>, {'apel': 2, 'jeruk': 1})

# List dalam defaultdict
grup = defaultdict(list)
grup["buah"].append("apel")
grup["buah"].append("jeruk")
print(grup)                 # defaultdict(<class 'list'>, {'buah': ['apel', 'jeruk']})
```

---

## 3. Control Flow - Alur Kendali Program

Control flow menentukan urutan eksekusi kode. Python menggunakan indentasi (spasi/tab) untuk mendefinisikan blok kode, berbeda dengan bahasa lain yang menggunakan kurung kurawal `{}`.

### 3.1 If/Elif/Else - Percabangan

```python
# ============================================
# STRUKTUR DASAR IF/ELIF/ELSE
# ============================================
umur = 20

if umur >= 18:
    print("Dewasa")
elif umur >= 12:
    print("Remaja")
elif umur >= 5:
    print("Anak-anak")
else:
    print("Balita")

# ============================================
# CONDITION EXPRESSIONS - TERNARY OPERATOR
# ============================================
# Bentuk singkat untuk if/else sederhana
umur = 20
kategori = "Dewasa" if umur >= 18 else "Anak-anak"

# Nested ternary (hindari terlalu kompleks)
nilai = 85
grade = "A" if nilai >= 90 else "B" if nilai >= 80 else "C" if nilai >= 70 else "D"

# ============================================
# COMPARISON OPERATORS
# ============================================
x, y = 5, 10

x == y       # Equal: False
x != y       # Not equal: True
x < y        # Less than: True
x > y        # Greater than: False
x <= y       # Less than or equal: True
x >= y       # Greater than or equal: False

# ============================================
# LOGICAL OPERATORS
# ============================================
x, y = 5, 10

# AND - Semua kondisi harus True
if x > 0 and y > 0:
    print("Keduanya positif")

# OR - Salah satu harus True
if x > 0 or y < 0:
    print("Setidaknya satu positif")

# NOT - Membalikkan kondisi
if not x > 0:
    print("x tidak positif")

# ============================================
# IDENTITY VS EQUALITY
# ============================================
a = [1, 2, 3]
b = [1, 2, 3]
c = a

a == b       # True - nilai sama
a is b       # False - objek berbeda
a is c       # True - objek yang sama

# ⚠️ Gunakan 'is' untuk None, True, False
data = None
if data is None:
    print("Data kosong")

# ============================================
# MEMBERSHIP OPERATORS
# ============================================
nama = "Python"
buah = ["apel", "mangga", "jeruk"]

"Py" in nama          # True
"mangga" in buah      # True
"py" in nama          # False (case-sensitive!)
```

### 3.2 For Loop - Perulangan with Known Iteration

```python
# ============================================
# FOR LOOP DASAR
# ============================================

# Iterasi list
angka = [1, 2, 3, 4, 5]
for n in angka:
    print(n)

# Iterasi string
for char in "Python":
    print(char)

# Iterasi range
for i in range(5):          # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):      # 1, 2, 3, 4, 5 (start, stop-1)
    print(i)

for i in range(0, 10, 2):  # 0, 2, 4, 6, 8 (dengan step)
    print(i)

# ============================================
# ENUMERATE - DAPAT INDEKS DAN NILAI
# ============================================
buah = ["apel", "mangga", "jeruk"]

for i, buah in enumerate(buah):
    print(f"{i}: {buah}")

# Output:
# 0: apel
# 1: mangga
# 2: jeruk

# Start dari angka tertentu
for i, buah in enumerate(buah, start=1):
    print(f"{i}: {buah}")

# ============================================
# ZIP - ITERASI BEBERAPA LIST SEKALIGUS
# ============================================
nama = ["Alice", "Bob", "Charlie"]
nilai = [85, 90, 78]

for n, s in zip(nama, nilai):
    print(f"{n}: {s}")

# Output:
# Alice: 85
# Bob: 90
# Charlie: 78

# List dari hasil zip
gabungan = list(zip(nama, nilai))  # [('Alice', 85), ('Bob', 90), ...]

# ============================================
# BREAK DAN CONTINUE
# ============================================

# BREAK - keluar dari loop
for i in range(10):
    if i == 5:
        break          # Keluar loop saat i = 5
    print(i)           # Output: 0, 1, 2, 3, 4

# CONTINUE - skip iterasi ini, lanjut ke berikutnya
for i in range(5):
    if i == 2:
        continue       # Skip saat i = 2
    print(i)           # Output: 0, 1, 3, 4

# ============================================
# FOR-ELSE (UNIK DI PYTHON)
# ============================================
# ELSE akan dieksekusi JIKA loop selesai normal (tanpa break)
angka = [1, 2, 3, 4, 5]

for n in angka:
    if n == 10:
        print("Ditemukan!")
        break
else:
    print("10 tidak ditemukan dalam list")

# Output: "10 tidak ditemukan dalam list"
```

### 3.3 While Loop - Perulangan with Unknown Iteration

```python
# ============================================
# WHILE LOOP DASAR
# ============================================
counter = 0
while counter < 5:
    print(counter)
    counter += 1

# Output: 0, 1, 2, 3, 4

# ============================================
# WHILE-ELSE
# ============================================
counter = 0
while counter < 5:
    counter += 1
    if counter == 10:
        print("Ditemukan 10!")
        break
else:
    print("10 tidak ditemukan")

# Output: "10 tidak ditemukan"

# ============================================
# INFINITE LOOP (BERHATI-HATI!)
# ============================================
# Loop yang tidak pernah berhenti
# while True:
#     print("Ini akan berjalan selamanya!")

# Infinite loop dengan break
while True:
    user_input = input("Ketik 'quit' untuk keluar: ")
    if user_input == "quit":
        break
    print(f"Anda mengetik: {user_input}")

# ============================================
# WHILE UNTUK INPUT VALIDATION
# ============================================
while True:
    try:
        angka = int(input("Masukkan angka 1-10: "))
        if 1 <= angka <= 10:
            print(f"Angka valid: {angka}")
            break
        else:
            print("Angka harus antara 1-10!")
    except ValueError:
        print("Input tidak valid! Masukkan angka.")
```

### 3.4 Pass - Placeholder Statement

`pass` adalah null operation - tidak melakukan apa-apa. Digunakan sebagai placeholder ketika syntactically diperlukan tapi belum ada kode:

```python
# ============================================
# PASS SEBAGAI PLACEHOLDER
# ============================================

# Fungsi yang belum diimplementasi
def belum_selesai():
    pass                    # Tidak error, placeholder

# Class yang belum diimplementasi
class Kosong:
    pass

# If statement placeholder
if condition:
    pass                    # TODO: implementasi nanti
else:
    print("Logic here")

# Loop placeholder
for i in range(10):
    pass                    # Belum ada aksi
```

---

## 4. Functions - Fungsi

Fungsi adalah blok kode yang bisa digunakan kembali. Dalam AI Engineering, fungsi digunakan secara ekstensif untuk membuat code modular dan maintainable.

### 4.1 Mendefinisikan Fungsi

```python
# ============================================
# FUNGSI DASAR
# ============================================
def sapa():
    """Fungsi untuk menyapa"""
    print("Halo, selamat pagi!")

sapa()                # Memanggil fungsi

# Fungsi dengan parameter
def sapa_nama(nama):
    """Sapa dengan nama"""
    print(f"Halo, {nama}!")

sapa_nama("Budi")     # Output: "Halo, Budi!"

# Fungsi dengan return value
def tambah(a, b):
    """Menjumlahkan dua angka"""
    return a + b

hasil = tambah(5, 3)  # hasil = 8
```

### 4.2 Parameter Types - Jenis-Jenis Parameter

```python
# ============================================
# POSITIONAL ARGUMENTS
# ============================================
# Argumen passed berdasarkan posisi
def greet(nama, umur):
    print(f"{nama}, {umur} tahun")

greet("Budi", 25)     # Posisi penting!

# ============================================
# KEYWORD ARGUMENTS
# ============================================
# Argumen passed berdasarkan nama parameter
greet(umur=25, nama="Budi")  # Urutan tidak masalah

# Campuran
greet("Budi", umur=25)       # Positional dulu, baru keyword

# ============================================
# DEFAULT PARAMETERS
# ============================================
def greet(nama, greeting="Halo"):
    print(f"{greeting}, {nama}!")

greet("Budi")                # "Halo, Budi!"
greet("Budi", "Selamat pagi") # "Selamat pagi, Budi!"

# ⚠️ PERATURAN PENTING: Default arguments harus di akhir
# def salah(a=1, b):    # ERROR!
def benar(a, b=2):          # ✅ Default di akhir
    pass

# ⚠️ JANGAN GUNAKAN MUTABLE DEFAULT!
# def add_item(item, items=[]):  # ❌ ERROR POTENSIAL!
def add_item(item, items=None):  # ✅ BENAR
    if items is None:
        items = []
    items.append(item)
    return items

# ============================================
# *ARGS - VARIABLE POSITIONAL ARGUMENTS
# ============================================
def jumlahkan(*args):
    """Menjumlahkan semua argumen"""
    print(type(args))        # <class 'tuple'>
    total = 0
    for num in args:
        total += num
    return total

jumlahkan(1, 2, 3)           # 6
jumlahkan(1, 2, 3, 4, 5)     # 15
jumlahkan()                  # 0

# ============================================
# **KWARGS - VARIABLE KEYWORD ARGUMENTS
# ============================================
def print_info(**kwargs):
    """Menerima keyword arguments sebagai dictionary"""
    print(type(kwargs))      # <class 'dict'>
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(nama="Budi", umur=25, kota="Jakarta")
# Output:
# nama: Budi
# umur: 25
# kota: Jakarta

# ============================================
# COMBINATION: *ARGS DAN **KWARGS
# ============================================
def lengkap(*args, **kwargs):
    """Kombinasi positional dan keyword"""
    print("Args:", args)
    print("Kwargs:", kwargs)

lengkap(1, 2, 3, nama="Budi", umur=25)
# Output:
# Args: (1, 2, 3)
# Kwargs: {'nama': 'Budi', 'um

### 4.3 Return Values

```python
# ============================================
# RETURN VALUE DASAR
# ============================================
def kuadrat(x):
    return x ** 2

hasil = kuadrat(5)      # 25

# ============================================
# RETURN MULTIPLE VALUES (Tuple)
# ============================================
def min_max(numbers):
    """Return nilai minimum dan maksimum"""
    return min(numbers), max(numbers)

min_val, max_val = min_max([1, 5, 3, 9, 2])
print(min_val, max_val)     # 1 9

# ============================================
# EARLY RETURN
# ============================================
def divide(a, b):
    """Bagi dengan validasi"""
    if b == 0:
        return "Error: Division by zero"
    return a / b

# ============================================
# RETURN NONE EXPLICIT
# ============================================
def proses(data):
    # Proses sesuatu
    return  # Sama dengan return None

# ============================================
# TERNARY RETURN
# ============================================
def is_positive(x):
    return True if x > 0 else False
```

### 4.4 Scope - Lingkup Variabel

**Scope** menentukan di mana variabel bisa diakses dalam kode. Python menggunakan aturan **LEGB** (Local, Enclosing, Global, Built-in) untuk mencari variabel:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PYTHON SCOPE - LEGB RULE                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                    BUILT-IN SCOPE                          │    │
│  │  (Fungsi bawaan Python: print, len, range, dll)          │    │
│  │                                                             │    │
│  │  ┌───────────────────────────────────────────────────┐    │    │
│  │  │                  GLOBAL SCOPE                     │    │    │
│  │  │  (Variabel di level module/file)                 │    │    │
│  │  │                                                    │    │    │
│  │  │  ┌──────────────────────────────────────────┐    │    │    │
│  │  │  │           ENCLOSING SCOPE              │    │    │    │
│  │  │  │   (Scope dari fungsi luar, jika nested)  │    │    │    │
│  │  │  │                                          │    │    │    │
│  │  │  │  ┌────────────────────────────┐        │    │    │    │
│  │  │  │  │     LOCAL SCOPE           │        │    │    │    │
│  │  │  │  │  (Variabel di dalam fungsi) │        │    │    │    │
│  │  │  │  └────────────────────────────┘        │    │    │    │
│  │  │  └──────────────────────────────────────────┘    │    │    │
│  │  └───────────────────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Python mencari variabel dalam urutan: LOCAL → ENCLOSING → GLOBAL → BUILT-IN
```

**Contoh Detail Setiap Scope:**

```python
# ============================================
# 1. BUILT-IN SCOPE - Fungsi bawaan Python
# ============================================
# print(), len(), range(), int(), str(), dll

print(len([1, 2, 3]))    # 3 - len() dari built-in
print(range(5))          # range(0,5) - range() dari built-in

# Kita bisa lihat semua built-ins
import builtins
# print([x for x in dir(builtins) if not x.startswith('_')])

# ============================================
# 2. GLOBAL SCOPE - Variabel di level module
# ============================================
counter = 10  # Global variable

def increment():
    global counter       # WAJAH gunakan 'global' untuk modify
    counter += 1
    print(f"Inside function: counter = {counter}")

print(f"Before: counter = {counter}")  # 10
increment()
print(f"After: counter = {counter}")  # 11

# ⚠️ Tanpa 'global', kita bisa BACA tapi TIDAK BISA MODIFY
total = 100

def read_only():
    print(f"Can read: {total}")  # ✅ Bisa dibaca

def try_modify():
    total = 200          # ❌ Ini membuat LOCAL variable, BUKAN modify global
    print(f"Local: {total}")  # 200

try_modify()
print(f"Global still: {total}")  # 100 - TIDAK berubah!

# ============================================
# 3. LOCAL SCOPE - Variabel di dalam fungsi
# ============================================
def fungsi_lokal():
    local_var = "Saya lokal"
    print(local_var)  # ✅ Bisa diakses di sini

# print(local_var)  # ❌ ERROR! Tidak bisa diakses di luar

# ============================================
# 4. ENCLOSING SCOPE - Nested functions
# ============================================
# Terjadi ketika kita punya fungsi di dalam fungsi

def outer():
    x = "dari outer"  # Enclosing variable untuk inner()
    
    def inner():
        x = "dari inner"  # Local variable untuk inner()
        print(f"Inner melihat: {x}")  # Local优先
    
    inner()
    print(f"Outer melihat: {x}")  # x masih "dari outer"

# Penjelasan: Saat inner() dijalankan:
# 1. Cek LOCAL scope inner() → x = "dari inner" ditemukan
# 2. Jika tidak ada, cek ENCLOSING (outer) scope → x = "dari outer"
# 3. Jika tidak ada, cek GLOBAL scope

def outer_correct():
    x = "dari outer"
    
    def inner():
        nonlocal x  # Modify variabel dari enclosing scope
        x = "diubah oleh inner"
        print(f"Inner: {x}")
    
    inner()
    print(f"Outer: {x}")  # Sekarang x = "diubah oleh inner"

# ============================================
# CLOSURE - Enclosing scope yang "tercapture"
# ============================================
# Closure terjadi ketika inner function "mengingat" variabel dari outer

def outer_closure():
    multiplier = 2
    
    def inner(number):
        return number * multiplier  # multiplier "diingat" oleh inner
    
    return inner  # Kembalikan fungsinya, BUKAN hasilnya

doubler = outer_closure()
print(doubler(5))   # 10 (5 * 2)
print(doubler(10))  # 20 (10 * 2)

# multiplier tetap "hidup" meskipun outer() sudah selesai
print(f"Closure remembers: multiplier = {doubler.__closure__[0].cell_contents}")

# ============================================
# BEST PRACTICE - Parameter vs Global
# ============================================
# ✅ GOOD: Gunakan parameter (recommended)
def hitung_total(items):
    total = 0
    for item in items:
        total += item
    return total

result = hitung_total([1, 2, 3, 4, 5])
print(f"Total: {result}")  # 15

# ❌ AVOID: Jangan gunakan global dalam fungsi
# Ini membuat kode sulit di-trace dan di-test
#
# total = 0  # ❌ Jangan lakukan ini
# def add_to_total(x):
#     global total
#     total += x

# ✅ ALTERNATIVE: Return nilai baru
def add_to_total(current_total, x):
    return current_total + x
```

### 4.5 Lambda Functions - Fungsi Anonim

Lambda adalah fungsi anonim (tanpa nama) dalam satu baris:

```python
# ============================================
# LAMBDA DASAR
# ============================================
# Lambda: lambda parameters: expression
kuadrat = lambda x: x ** 2
print(kuadrat(5))            # 25

# Multiple parameters
tambah = lambda a, b: a + b
print(tambah(3, 4))          # 7

# ============================================
# KAPAN GUNAKAN LAMBDA?
# ============================================

# 1. Dengan fungsi higher-order
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_nums = sorted(numbers)
print(sorted_nums)           # [1, 1, 2, 3, 4, 5, 6, 9]

# Sort dengan custom key
mahasiswa = [
    {"nama": "Budi", "umur": 25},
    {"nama": "Alice", "umur": 23},
    {"nama": "Charlie", "umur": 25}
]
sorted_mhs = sorted(mahasiswa, key=lambda x: x["umur"])
# Urutkan berdasarkan umur

# 2. Dengan map()
numbers = [1, 2, 3, 4, 5]
kuadrat = list(map(lambda x: x**2, numbers))
print(kuadrat)               # [1, 4, 9, 16, 25]

# 3. Dengan filter()
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
genap = list(filter(lambda x: x % 2 == 0, numbers))
print(genap)                 # [2, 4, 6, 8, 10]

# 4. Dengan reduce() - perlu import
from functools import reduce
numbers = [1, 2, 3, 4, 5]
total = reduce(lambda a, b: a + b, numbers)
print(total)                # 15

# ============================================
# LAMBDA vs DEF - KAPAN PAKAI YANG MANA?
# ============================================

# ✅ GUNAKAN LAMBDA untuk:
# - Fungsi sederhana satu baris
# - Sebagai callback function
# - Tidak perlu di-reuse

# ❌ GUNAKAN DEF untuk:
# - Fungsi kompleks
# - Butuh multiple statements
# - Fungsi yang perlu di-reuse
# - Butuh docstring
```

### 4.6 Function Annotations (Type Hints)

Type hints membantu readability dan IDE support tanpa affecting runtime:

```python
# ============================================
# BASIC TYPE ANNOTATIONS
# ============================================
def greet(name: str) -> str:
    """Return greeting message"""
    return f"Hello, {name}!"

# Variables dengan type hints
age: int = 25
name: str = "Budi"
prices: list[float] = [1.5, 2.0, 3.5]
person: dict[str, str] = {"name": "Budi"}

# ============================================
# ADVANCED TYPE HINTS
# ============================================
from typing import Optional, List, Dict, Union, Callable, Any

# Optional - bisa None
def greet(name: Optional[str] = None) -> str:
    if name is None:
        name = "Guest"
    return f"Hello, {name}!"

# Union - multiple possible types
def process(value: Union[int, str]) -> str:
    return str(value)

# List dengan type
def total(numbers: List[int]) -> int:
    return sum(numbers)

# Dictionary dengan type
def get_value(data: Dict[str, int], key: str) -> int:
    return data.get(key, 0)

# Callable - fungsi sebagai parameter
def apply_function(func: Callable[[int], int], value: int) -> int:
    return func(value)

result = apply_function(lambda x: x * 2, 5)  # 10

# Any - untuk type yang tidak spesifik
def process_any(data: Any) -> Any:
    return data

# ============================================
# TYPE ALIAS - MEMPERMUDAH TYPE HINTS KOMPLEKS
# ============================================
from typing import TypeAlias

Matrix: TypeAlias = List[List[float]]
Coordinates: TypeAlias = tuple[float, float]

def transform(matrix: Matrix) -> Matrix:
    # Transformasi matrix
    return matrix

# ============================================
# PYDANTIC BASEMODEL (LEBIH POWERFUL) - EXTERNAL LIBRARY
# ============================================
# NOTE: Pydantic adalah external library
# Install dengan: pip install pydantic
# Dokumentasi: https://docs.pydantic.dev/
# Pydantic adalah library untuk data validation dan settings management
# Sangat populer di API development (FastAPI, dll)

from pydantic import BaseModel

class User(BaseModel):
    name: str
    age: int
    email: str
    
    def greet(self) -> str:
        return f"Hello, {self.name}!"

# Otomatis validasi dan type conversion
user = User(name="Budi", age=25, email="budi@example.com")
# User(name='Budi', age=25, email='budi@example.com')
```

### 4.7 Generators dan Iterators - PENTING untuk ML Data Pipeline

> **Catatan:** Bagian ini membahas generators dengan contoh ML. NumPy dijelaskan di Section 11. Jika Anda belum familiar dengan NumPy, Anda bisa melewati contoh yang menggunakan `np.array()` dan kembali setelah mempelajari NumPy.

Generators sangat penting untuk memory-efficient processing data besar (seperti dataset gambar/video):

```python
# ============================================
# GENERATOR FUNCTIONS - MEMORY EFFICIENT
# ============================================
# Generator menggunakan yield - tidak simpan semua di memory
# SANGAT PENTING untuk processing dataset besar!

# ❌ LIST - simpan semua di memory (bisa bermasalah untuk dataset besar)
def get_numbers_list(n):
    result = []
    for i in range(n):
        result.append(i)
    return result

# ✅ GENERATOR - proses satu per satu (memory efficient)
def get_numbers_generator(n):
    for i in range(n):
        yield i

# Penggunaan
gen = get_numbers_generator(1000000)
print(next(gen))  # 0
print(next(gen))  # 1
# Hanya simpan satu item di memory, tidak 1 juta!

# ============================================
# GENERATOR EXPRESSIONS - MIRIP LIST COMPREHENSION
# ============================================
# List comprehension - simpan semua
squares_list = [x**2 for x in range(1000000)]  # Memory heavy!

# Generator expression - proses satu per satu
squares_gen = (x**2 for x in range(1000000))  # Memory efficient
print(next(squares_gen))  # 0
print(next(squares_gen))  # 1

# Practical ML use case: batch generator
def batch_generator(data, batch_size):
    """Generate batches untuk training ML
    NOTE: Contoh ini menggunakan list, untuk NumPy lihat Section 11
    """
    for i in range(0, len(data), batch_size):
        yield data[i:i + batch_size]

# Contoh dengan list sederhana
data_list = list(range(100))  # [0, 1, 2, ..., 99]
for i, batch in enumerate(batch_generator(data_list, 10)):
    print(f"Batch {i}: {batch[:3]}... (total {len(batch)} items)")

# NOTE: Untuk contoh dengan numpy.array dan ML, lihat Section 11.2.7
# Di section tersebut dijelaskan lebih detail tentang batch processing

# ============================================
# ITERTOOLS - TOOLS UNTUK DATA PROCESSING
# ============================================
# itertools adalah module standar Python untuk iterator utilities
# Dokumentasi resmi: https://docs.python.org/3/library/itertools.html
# Semua fungsi di itertools menghasilkan iterator (memory efficient)

import itertools

# itertools terbagi dalam 3 kategori:
# 1. Infinite iterators: count(), cycle(), repeat()
# 2. Finite iterators: chain(), islice(), takewhile(), dropwhile()
# 3. Combinatoric iterators: product(), permutations(), combinations()

# ============================================
# 1. INFINITE ITERATORS (butuh break!)
# ============================================

# count(start, step) - hitung tanpa batas
for i, num in enumerate(itertools.count(10, 5)):
    if i >= 5:
        break
    print(num)  # 10, 15, 20, 25, 30

# cycle() -循环 tanpa batas
counter = 0
for item in itertools.cycle(['A', 'B', 'C']):
    print(item)
    counter += 1
    if counter >= 6:
        break  # A, B, C, A, B, C

# repeat() - ulangi nilai tanpa batas
for i, item in enumerate(itertools.repeat(10, 3)):
    print(item)  # 10, 10, 10

# ============================================
# 2. FINITE ITERATORS
# ============================================

# chain() - gabungkan iterables
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list(itertools.chain(list1, list2))
print(combined)  # [1, 2, 3, 4, 5, 6]

# chain.from_iterable() - untuk nested iterables
nested = [[1, 2], [3, 4], [5, 6]]
flattened = list(itertools.chain.from_iterable(nested))
print(flattened)  # [1, 2, 3, 4, 5, 6]

# islice() - slice iterator tanpa buat list (start, stop, step)
data = range(100)
sliced = list(itertools.islice(data, 0, 10, 2))
print(sliced)  # [0, 2, 4, 6, 8]

# takewhile() - ambil elemen selama kondisi True
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
taken = list(itertools.takewhile(lambda x: x < 5, data))
print(taken)  # [1, 2, 3, 4]

# dropwhile() - drop elemen selama kondisi True, lalu ambil sisanya
dropped = list(itertools.dropwhile(lambda x: x < 5, data))
print(dropped)  # [5, 6, 7, 8, 9, 10]

# ============================================
# 3. COMBINATORIC ITERATORS (PENTING!)
# ============================================

# product() - Cartesian product (penting untuk ML hyperparameter tuning!)
params = {
    'learning_rate': [0.001, 0.01, 0.1],
    'batch_size': [16, 32, 64],
    'epochs': [10, 20]
}
keys = list(params.keys())
values = list(params.values())

for combo in itertools.product(*values):
    config = dict(zip(keys, combo))
    print(config)
    # {'learning_rate': 0.001, 'batch_size': 16, 'epochs': 10}
    # dst...

# permutations() - semua kemungkinan urutan
print(list(itertools.permutations([1, 2, 3])))
# [(1,2,3), (1,3,2), (2,1,3), (2,3,1), (3,1,2), (3,2,1)]

# combinations() - kombinasi tanpa urutan
print(list(itertools.combinations([1, 2, 3], 2)))
# [(1,2), (1,3), (2,3)]

# combinations_with_replacement() - kombinasi dengan pengulangan
print(list(itertools.combinations_with_replacement([1, 2, 3], 2)))
# [(1,1), (1,2), (1,3), (2,2), (2,3), (3,3)]
counter = 0
for item in itertools.cycle(['A', 'B', 'C']):
    print(item)
    counter += 1
    if counter >= 6:
        break  # A, B, C, A, B, C

# chain - gabungkan iterables
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list(itertools.chain(list1, list2))
print(combined)  # [1, 2, 3, 4, 5, 6]

# islice - slice iterator tanpa buat list
data = range(100)
sliced = list(itertools.islice(data, 0, 10, 2))
print(sliced)  # [0, 2, 4, 6, 8]

# product - Cartesian product (penting untuk hyperparameter tuning)
params = {
    'learning_rate': [0.001, 0.01, 0.1],
    'batch_size': [16, 32, 64],
    'epochs': [10, 20]
}
keys = list(params.keys())
values = list(params.values())
for combo in itertools.product(*values):
    config = dict(zip(keys, combo))
    print(config)
    # {'learning_rate': 0.001, 'batch_size': 16, 'epochs': 10}
    # {'learning_rate': 0.001, 'batch_size': 16, 'epochs': 20}
    # dst...

# ============================================
# FUNCTOOLS - FUNGSI UNTUK MEMANIPULASI FUNGSI
# ============================================
# functools menyediakan fungsi higher-order dan utilities untuk fungsi
# Dokumentasi resmi: https://docs.python.org/3/library/functools.html

from functools import lru_cache, partial, reduce

# ============================================
# lru_cache - MEMOIZATION (PENTING UNTUK ML/DP!)
# ============================================
# lru_cache menyimpan hasil fungsi berdasarkan argumentnya
# Jika fungsi dipanggil dengan argumen yang sama, hasil di-return dari cache
# Sangat penting untuk Dynamic Programming dan menghindari komputasi berulang

# Contoh: Fibonacci TANPA cache - sangat lambat!
import time

def fib_slow(n):
    if n < 2:
        return n
    return fib_slow(n-1) + fib_slow(n-2)

# print(f"Without cache: {time.time()}")
# fib_slow(35)  # Butuh waktu lama!
# print(f"After: {time.time()}")

# Contoh: Fibonacci DENGAN lru_cache - sangat cepat!
@lru_cache(maxsize=128)  # maxsize menentukan berapa banyak hasil yang di-cache
def fib_fast(n):
    """Fibonacci dengan memoization - sangat cepat!"""
    if n < 2:
        return n
    return fib_fast(n-1) + fib_fast(n-2)

# print(f"With cache: {time.time()}")
# fib_fast(100)  # Instant! (hasil di-cache)
# print(f"After: {time.time()}")
# print(fib_fast.cache_info())  # CacheInfo(hits=98, misses=101, ...)

# ============================================
# partial - BIKIN FUNGSI BARU DENGAN PARAMETER TETAP
# ============================================
# partial membuat fungsi baru dengan sebagian parameter sudah ditentukan
# Berguna untuk callback functions dan function factories

def power(base, exponent):
    return base ** exponent

# Buat fungsi baru dengan exponent=2 (kuadrat)
square = partial(power, exponent=2)

# Buat fungsi baru dengan exponent=3 (kubik)
cube = partial(power, exponent=3)

print(square(5))  # 25 (5^2)
print(cube(5))    # 125 (5^3)

# Contoh praktis: callback dengan parameter tetap
from functools import partial

def send_email(to, subject, body):
    return f"To: {to}, Subject: {subject}, Body: {body}"

# Buat template email
send_reminder = partial(send_email, subject="Reminder", body="Don't forget!")
print(send_reminder("budi@example.com"))
# To: budi@example.com, Subject: Reminder, Body: Don't forget!

# ============================================
# reduce - MENERAPKAN FUNGSI SECARA AKUMULATIF
# ============================================
# reduce(funksi, iterable) menerapkan fungsi ke setiap elemen secara berurutan
# Hasil akumulasi dari semua pemanggilan fungsi

# Contoh: Hitung hasil kali semua angka
numbers = [1, 2, 3, 4, 5]
result = reduce(lambda x, y: x * y, numbers)
print(result)  # 1*2*3*4*5 = 120

# Contoh: Hitung factorial
factorial_5 = reduce(lambda x, y: x * y, range(1, 6))
print(factorial_5)  # 120
@lru_cache(maxsize=128)
def fibonacci(n):
    """Fibonacci dengan memoization - sangat cepat!"""
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(100))  # Instant (cached!)

# partial - buat fungsi baru dengan parameter tetap
def power(base, exponent):
    return base ** exponent

# Buat fungsi baru
square = partial(power, exponent=2)
cube = partial(power, exponent=3)

print(square(5))  # 25
print(cube(5))    # 125
```

### 4.7 Docstrings - Dokumentasi Fungsi

```python
# ============================================
# DOCSTRING - DOKUMENTASI FUNGSI
# ============================================

# Single line docstring
def kuadrat(x):
    """Return kuadrat dari x."""
    return x ** 2

# Multi-line docstring
def calculate_stats(numbers):
    """
    Calculate statistical measures dari list angka.
    
    Parameters:
        numbers (list): List of integers atau floats
        
    Returns:
        dict: Dictionary dengan keys 'mean', 'median', 'mode'
    
    Example:
        >>> calculate_stats([1, 2, 3, 4, 5])
        {'mean': 3, 'median': 3, 'mode': None}
    """
    # Implementation here
    return {"mean": sum(numbers)/len(numbers)}

# Akses docstring
print(kuadrat.__doc__)       # "Return kuadrat dari x."
print(calculate_stats.__doc__)

# help() juga menampilkan docstring
help(kuadrat)
```

---

## 5. List Comprehension - Sintaks Ekspresif

List comprehension adalah cara Pythonic untuk membuat list dalam satu baris. Ini lebih efisien dan readable dibanding for loop biasa.

### 5.1 Basic List Comprehension

```python
# ============================================
# SINTAKS LIST COMPREHENSION
# ============================================
# [expression for item in iterable]

# Tradisional for loop
kuadrat = []
for i in range(10):
    kuadrat.append(i ** 2)

# List comprehension equivalent
kuadrat = [i ** 2 for i in range(10)]

print(kuadrat)   # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# ============================================
# CONTOH KONVERSI
# ============================================

# Konversi list string ke integer
nilai_str = ["85", "90", "78"]
nilai_int = [int(n) for n in nilai_str]

# Konversi list ke uppercase
nama = ["budi", "alice", "charlie"]
nama_upper = [n.upper() for n in nama]

# ============================================
# KINERJA - COMPREHENSION LEBIH CEPAT
# ============================================
import timeit

# For loop
loop_time = timeit.timeit(
    'result = []\nfor i in range(1000): result.append(i**2)',
    number=1000
)

# List comprehension
comp_time = timeit.timeit(
    'result = [i**2 for i in range(1000)]',
    number=1000
)

print(f"For loop: {loop_time:.4f}s")
print(f"Comprehension: {comp_time:.4f}s")
# List comprehension typically 20-30% faster
```

### 5.2 List Comprehension with Condition

```python
# ============================================
# FILTERING DENGAN IF
# ============================================
# [expression for item in iterable if condition]

# Hanya bilangan genap
genap = [x for x in range(10) if x % 2 == 0]
print(genap)   # [0, 2, 4, 6, 8]

# Kuadrat hanya angka > 5
kuadrat_lebih5 = [x**2 for x in range(10) if x > 5]
print(kuadrat_lebih5)  # [36, 49, 64, 81]

# ============================================
# IF-ELSE DALAM COMPREHENSION
# ============================================
# [expression_if_true if condition else expression_if_false for item in iterable]

# Convert grade ke status
nilai = [85, 45, 70, 92, 38]
status = ["Lulus" if n >= 60 else "Tidak Lulus" for n in nilai]
print(status)  # ['Lulus', 'Tidak Lulus', 'Lulus', 'Lulus', 'Tidak Lulus']

# ============================================
# MULTIPLE CONDITIONS
# ============================================
# Hanya angka genap yang > 5
result = [x for x in range(20) if x % 2 == 0 if x > 5]
print(result)  # [6, 8, 10, 12, 14, 16, 18]

# AND condition
result = [x for x in range(20) if x > 5 and x % 2 == 0]
print(result)  # [6, 8, 10, 12, 14, 16, 18]
```

### 5.3 Nested List Comprehension

```python
# ============================================
# NESTED LISTS
# ============================================

# Flatten 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Equivalent for loop:
# flat = []
# for row in matrix:
#     for num in row:
#         flat.append(num)

# ============================================
# CREATE 2D LIST
# ============================================

# Matrix 3x3 dengan zeros
matrix = [[0 for _ in range(3)] for _ in range(3)]
print(matrix)
# [[0, 0, 0],
#  [0, 0, 0],
#  [0, 0, 0]]

# Matrix dengan index-based values
matrix = [[i * j for j in range(5)] for i in range(5)]
print(matrix)
# [[0, 0, 0, 0, 0],
#  [0, 1, 2, 3, 4],
#  [0, 2, 4, 6, 8],
#  [0, 3, 6, 9, 12],
#  [0, 4, 8, 12, 16]]
```

### 5.4 Dictionary dan Set Comprehension

```python
# ============================================
# DICTIONARY COMPREHENSION
# ============================================
# {key: value for item in iterable}

# Kuadrat sebagai key
kuadrat_dict = {x: x**2 for x in range(5)}
print(kuadrat_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Mapping list ke dict
nama = ["alice", "bob", "charlie"]
dari_angka = {nama[i]: i for i in range(len(nama))}
print(dari_angka)   # {'alice': 0, 'bob': 1, 'charlie': 2}

# Filter dalam dict comprehension
original = {"a": 1, "b": 2, "c": 3, "d": 4}
filtered = {k: v for k, v in original.items() if v > 2}
print(filtered)     # {'c': 3, 'd': 4}

# ============================================
# SET COMPREHENSION
# ============================================
# {expression for item in iterable}

# Unique kuadrat
kuadrat_unik = {x**2 for x in [-2, -1, 0, 1, 2, 3]}
print(kuadrat_unik)  # {0, 1, 4, 9}

# Extract unique characters
text = "hello world"
unique_chars = {char for char in text if char != " "}
print(unique_chars)  # {'h', 'e', 'l', 'o', 'w', 'r', 'd'}
```

---

## 6. Error Handling - Penanganan Kesalahan

Error handling adalah kemampuan program untuk menangani error dengan graceful, tidak crash saat terjadi masalah.

### 6.1 Exception Types - Jenis-Jenis Exception

```python
# ============================================
# COMMON EXCEPTION TYPES
# ============================================

# SyntaxError - Error dalam penulisan kode (parse error)
# print("Hello   # SyntaxError: EOL while scanning string literal

# IndentationError - Error indentasi
# if True:
# print("Test")    # IndentationError: expected an indented block

# TypeError - Operation applied ke tipe yang salah
# "2" + 3           # TypeError: can only concatenate str to str

# ValueError - Tipe benar tapi nilai salah
# int("abc")        # ValueError: invalid literal for int()

# IndexError - Index di luar range
# [1, 2, 3][10]     # IndexError: list index out of range

# KeyError - Key tidak ada dalam dict
# {"a": 1}["b"]     # KeyError: 'b'

# AttributeError - Attribute tidak ada
# [1, 2, 3].append(4)
# 123.append(4)      # AttributeError: 'int' object has no attribute 'append'

# NameError - Variabel tidak defined
# print(undefined_var)  # NameError: name 'undefined_var' is not defined

# ZeroDivisionError - Pembagian dengan nol
# 1 / 0             # ZeroDivisionError: division by zero

# FileNotFoundError - File tidak ada
# open("tidak_ada.txt")  # FileNotFoundError

# ImportError - Module tidak bisa di-import
# import tidak_ada_module  # ModuleNotFoundError
```

### 6.2 Try/Except/Else/Finally

```python
# ============================================
# BASIC TRY/EXCEPT
# ============================================
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Tidak bisa bagi dengan nol!")

# ============================================
# CATCH MULTIPLE EXCEPTIONS
# ============================================
try:
    # Beberapa operasi yang bisa error
    num = int(input("Masukkan angka: "))
    result = 10 / num
except ValueError:
    print("Input harus angka!")
except ZeroDivisionError:
    print("Tidak bisa bagi dengan nol!")
except Exception as e:
    print(f"Error lain: {e}")

# Satu blok untuk multiple exceptions
try:
    result = 10 / 0
except (ValueError, ZeroDivisionError):
    print("ValueError atau ZeroDivisionError")

# ============================================
# ELSE - DIEKSEKUSI JIKA TIDAK ADA ERROR
# ============================================
try:
    num = int("42")
except ValueError:
    print("Konversi gagal")
else:
    print(f"Konversi berhasil: {num}")  # Dieksekusi karena tidak ada error

# ============================================
# FINALLY - SELALU DIEKSEKUSI
# ============================================
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File tidak ditemukan")
finally:
    print("Cleanup code di sini")  # Selalu dieksekusi
    # file.close()  # Biasanya gunakan context manager (with)

# ============================================
# TRY/EXCEPT SEBAGAI EXPRESSION
# ============================================
# Menggunakan try/except untuk default value
def safe_int(value, default=0):
    try:
        return int(value)
    except (ValueError, TypeError):
        return default

print(safe_int("42"))    # 42
print(safe_int("abc"))   # 0
print(safe_int(None))    # 0
```

### 6.3 Raising Exceptions

```python
# ============================================
# RAISE - MEMBUAT EXCEPTION
# ============================================
def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Pembagi tidak boleh nol!")
    return a / b

try:
    result = divide(10, 0)
except ZeroDivisionError as e:
    print(e)  # "Pembagi tidak boleh nol!"

# ============================================
# RAISE WITH VALIDATION
# ============================================
def create_user(name, age):
    if not name:
        raise ValueError("Nama tidak boleh kosong")
    if age < 0 or age > 150:
        raise ValueError("Umur tidak valid")
    return {"name": name, "age": age}

try:
    user = create_user("", 25)
except ValueError as e:
    print(f"Validation error: {e}")

# ============================================
# CUSTOM EXCEPTION CLASS
# ============================================
class ValidationError(Exception):
    """Exception untuk validasi data"""
    def __init__(self, field, message):
        self.field = field
        self.message = message
        super().__init__(f"{field}: {message}")

def register(email):
    if "@" not in email:
        raise ValidationError("email", "Format email tidak valid")
    return "Registrasi berhasil"

try:
    register("budi.com")
except ValidationError as e:
    print(e)  # "email: Format email tidak valid"
```

---

## 7. Object-Oriented Programming (OOP)

OOP adalah paradigma programming yang organize code menggunakan **objects** dan **classes**.

### 7.1 Classes dan Instances

```python
# ============================================
# MEMBUAT CLASS
# ============================================
class Dog:
    """Class untuk merepresentasikan Dog"""
    
    # Class attribute - sama untuk semua instance
    species = "Canis familiaris"
    
    # Constructor
    def __init__(self, name, age):
        # Instance attributes - unik per instance
        self.name = name
        self.age = age
    
    # Instance method
    def bark(self):
        return f"{self.name} says Woof!"
    
    # String representation
    def __str__(self):
        return f"{self.name} is {self.age} years old"

# Membuat instance
buddy = Dog("Buddy", 3)
maxx = Dog("Maxx", 5)

print(buddy.name)       # Buddy
print(buddy.species)    # Canis familiaris
print(buddy.bark())     # Buddy says Woof!
print(buddy)            # Buddy is 3 years old
```

### 7.2 Inheritance dan Polymorphism

```python
# ============================================
# INHERITANCE - PEWARISAN
# ============================================
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        raise NotImplementedError("Subclass harus implement speak()")

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

class Bird(Animal):
    def speak(self):
        return f"{self.name} says Tweet!"

# Polymorphism - cara berbeda untuk objek berbeda
animals = [Dog("Buddy"), Cat("Whiskers"), Bird("Tweety")]
for animal in animals:
    print(animal.speak())

# Output:
# Buddy says Woof!
# Whiskers says Meow!
# Tweety says Tweet!

# ============================================
# MULTIPLE INHERITANCE
# ============================================
class Flyable:
    def fly(self):
        return f"{self.name} is flying!"

class Swimmable:
    def swim(self):
        return f"{self.name} is swimming!"

class Duck(Animal, Flyable, Swimmable):
    pass

duck = Duck("Donald")
print(duck.speak())  # Donald says Quack! (dari Animal)
print(duck.fly())    # Donald is flying!
print(duck.swim())   # Donald is swimming!

# ============================================
# METHOD RESOLUTION ORDER (MRO)
# ============================================
print(Duck.__mro__)
# (<class '__main__.Duck'>, <class '__main__.Animal'>,
#  <class 'Flyable'>, <class 'Swimmable'>, <class 'object'>)
```

### 7.3 Instance vs Class vs Static Methods

```python
# ============================================
# INSTANCE METHOD
# ============================================
class MyClass:
    def instance_method(self):
        """Dapat mengakses instance dan class"""
        return f"Instance: {self}"
    
    # ============================================
    # CLASS METHOD
    # ============================================
    @classmethod
    def class_method(cls):
        """Dapat mengakses class, tidak bisa instance"""
        return f"Class: {cls}"
    
    # ============================================
    # STATIC METHOD
    # ============================================
    @staticmethod
    def static_method():
        """Tidak dapat mengakses instance atau class"""
        return "Static method called"

obj = MyClass()
print(obj.instance_method())  # Instance method
print(MyClass.class_method())  # Class method
print(MyClass.static_method()) # Static method

# ============================================
# KAPAN GUNAKAN YANG MANA?
# ============================================
class BankAccount:
    interest_rate = 0.05  # Class attribute
    
    def __init__(self, balance):
        self.balance = balance  # Instance attribute
    
    @classmethod
    def from_string(cls, account_string):
        """Alternative constructor"""
        balance = float(account_string.split(":")[1])
        return cls(balance)
    
    def calculate_interest(self):
        """Instance method - butuh instance data"""
        return self.balance * self.interest_rate
    
    @staticmethod
    def validate_amount(amount):
        """Static - tidak butuh instance atau class data"""
        return amount > 0
```

### 7.4 Data Classes

`@dataclass` sangat berguna untuk data objects (seperti DTOs, models):

```python
# ============================================
# DATACLASS - DATA OBJECT
# ============================================
from dataclasses import dataclass, field
from typing import List

@dataclass
class Product:
    name: str
    price: float
    quantity: int = 0  # Default value
     
    # @property penjelasan ada di Section 7.5
    @property
    def total_value(self):
        return self.price * self.quantity

# Membuat instance dengan cara yang lebih clean
product = Product("Laptop", 15000000, 5)
print(product)
# Product(name='Laptop', price=15000000, quantity=5)
print(product.total_value)  # 75000000

# ============================================
# DATACLASS DENGAN FIELD
# ============================================
from dataclasses import dataclass, field
from datetime import datetime

@dataclass
class User:
    name: str
    email: str
    created_at: datetime = field(default_factory=datetime.now)
    tags: List[str] = field(default_factory=list)
    active: bool = True

# Menggunakan factory untuk mutable defaults
user = User("Budi", "budi@example.com", tags=["premium", "beta"])
print(user)

# ============================================
# DATACLASS DENGAN POST_INIT
# ============================================
@dataclass
class Circle:
    radius: float
    
    def __post_init__(self):
        if self.radius < 0:
            raise ValueError("Radius tidak boleh negatif")
    
    @property
    def diameter(self):
        return self.radius * 2
    
    @property
    def area(self):
        return 3.14159 * self.radius ** 2

circle = Circle(5)
print(f"Diameter: {circle.diameter}, Area: {circle.area}")
```

### 7.5 Properties - Encapsulation

```python
# ============================================
# @PROPERTY - ENCAPSULATION
# ============================================
class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius  # underscore = "private"
    
    # Getter
    @property
    def celsius(self):
        return self._celsius
    
    # Setter
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        self._celsius = value
    
    # Computed property (read-only)
    @property
    def fahrenheit(self):
        return (self._celsius * 9/5) + 32
    
    @property
    def kelvin(self):
        return self._celsius + 273.15

temp = Temperature(25)
print(temp.celsius)   # 25
print(temp.fahrenheit)  # 77.0

temp.celsius = 30      # Using setter
print(temp.fahrenheit)  # 86.0

# temp.celsius = -300  # ValueError!
```

### 7.6 Abstract Classes dan Interfaces - Pattern untuk ML Models

Abstract classes sangat penting untuk membuat struktur model ML yang konsisten:

```python
# ============================================
# ABSTRACT BASE CLASS - MEMASTIKAN INTERFACE KONSISTEN
# ============================================
from abc import ABC, abstractmethod

# ABC = Abstract Base Class
class BaseModel(ABC):
    """Base class untuk semua ML models"""
    
    def __init__(self, name: str):
        self.name = name
        self.is_trained = False
    
    @abstractmethod
    def fit(self, X, y):
        """Training method - HARUS diimplementasikan subclass"""
        pass
    
    @abstractmethod
    def predict(self, X):
        """Prediction method - HARUS diimplementasikan subclass"""
        pass
    
    def get_info(self):
        return f"Model: {self.name}, Trained: {self.is_trained}"

# Linear Regression implementation
# NOTE: NumPy dijelaskan di Section 11.2 - diperlukan untuk linear algebra
# Untuk menjalankan kode ini, perlu: import numpy as np
class LinearRegression(BaseModel):
    def __init__(self):
        super().__init__("Linear Regression")
        self.weights = None
    
    def fit(self, X, y):
        # Simplified linear regression: y = X @ w
        # np.linalg.lstsq = least squares solution
        # Assuming: import numpy as np (see Section 11.2)
        self.weights = np.linalg.lstsq(X, y, rcond=None)[0]
        self.is_trained = True
    
    def predict(self, X):
        return X @ self.weights

# Neural Network implementation
class NeuralNetwork(BaseModel):
    def __init__(self, layers):
        super().__init__("Neural Network")
        self.layers = layers
    
    def fit(self, X, y):
        # Training logic
        self.is_trained = True
    
    def predict(self, X):
        # Prediction logic
        return X

# Usage - semua model punya interface sama
models = [LinearRegression(), NeuralNetwork([128, 64, 32])]
for model in models:
    print(model.get_info())  # Interface sama
    # model.fit(X, y)
    # model.predict(X)

# ============================================
# ABC UNTUK DATA PREPROCESSING
# ============================================
class BasePreprocessor(ABC):
    @abstractmethod
    def fit(self, X):
        """Learn parameters from data"""
        pass
    
    @abstractmethod
    def transform(self, X):
        """Apply transformation"""
        pass
    
    def fit_transform(self, X):
        """Fit then transform in one step"""
        self.fit(X)
        return self.transform(X)

class StandardScaler(BasePreprocessor):
    def __init__(self):
        self.mean_ = None
        self.std_ = None
    
    def fit(self, X):
        self.mean_ = X.mean(axis=0)
        self.std_ = X.std(axis=0)
    
    def transform(self, X):
        return (X - self.mean_) / (self.std_ + 1e-8)
```

### 7.7 Mixins - Multiple Inheritance untuk Reusable Logic

Mixins berguna untuk menambahkan fungsionalitas ke classes tanpa inheritance kompleks:

```python
# ============================================
# MIXINS - REUSABLE FUNCTIONALITY
# ============================================

# Mixin untuk logging (penting untuk ML pipelines!)
class LogMixin:
    def log(self, message):
        import datetime
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print(f"[{timestamp}] {self.__class__.__name__}: {message}")

# Mixin untuk serialization
class SerializableMixin:
    def to_dict(self):
        return {k: v for k, v in self.__dict__.items()}
    
    def to_json(self):
        import json
        return json.dumps(self.to_dict())

# Mixin untuk validation
class ValidatableMixin:
    def validate(self):
        for field, value in self.__dict__.items():
            if value is None:
                raise ValueError(f"{field} cannot be None")

# Combine mixins dengan classes
class User(LogMixin, SerializableMixin):
    def __init__(self, name, email):
        self.name = name
        self.email = email

class MLModel(LogMixin, SerializableMixin, ValidatableMixin):
    def __init__(self, name, accuracy=None):
        self.name = name
        self.accuracy = accuracy
    
    def validate(self):
        super().validate()
        if self.accuracy is not None and not (0 <= self.accuracy <= 1):
            raise ValueError("Accuracy must be between 0 and 1")

# Usage
user = User("Budi", "budi@example.com")
user.log("User created")
print(user.to_json())

model = MLModel("MyModel", 0.95)
model.log("Model trained")
print(model.to_json())
model.validate()  # Success
```

### 7.8 dataclasses Lanjutan - Field Options

```python
# ============================================
# DATACLASSES LEBIH LANJUT
# ============================================
from dataclasses import dataclass, field
from typing import List, Optional
import uuid

@dataclass
class TrainingConfig:
    """Config untuk training ML model"""
    learning_rate: float = 0.001
    batch_size: int = 32
    epochs: int = 10
    # field dengan factory untuk mutable default
    callbacks: List[callable] = field(default_factory=list)
    optimizer: str = "adam"
    # Field dengan default factory
    metrics: List[str] = field(default_factory=lambda: ["accuracy", "loss"])

@dataclass
class Dataset:
    """Dataset container untuk ML"""
    name: str
    path: str
    features: int
    labels: int
    id: str = field(default_factory=lambda: str(uuid.uuid4()))
    metadata: dict = field(default_factory=dict)
    
    def __post_init__(self):
        # Auto validate
        if self.features <= 0 or self.labels <= 0:
            raise ValueError("Features and labels must be positive")

# Usage
config = TrainingConfig(learning_rate=0.01, batch_size=64)
print(config)

dataset = Dataset("MNIST", "/data/mnist", 784, 10)
print(dataset)

# Comparison - dataclass会自动生成 __eq__
d1 = Dataset("A", "/a", 10, 2)
d2 = Dataset("A", "/a", 10, 2)
print(d1 == d2)  # True!
```

---

## 8. Modules dan Packages

### 8.1 Import Statements

```python
# ============================================
# IMPORT CARA BERBEDA
# ============================================

# Import entire module
import math
print(math.sqrt(16))    # 4.0

# Import specific function/class
from math import sqrt, pi
print(sqrt(16))         # 4.0
print(pi)               # 3.141592653589793

# Import with alias
import numpy as np
import pandas as pd

# Import everything (avoid this - namespace pollution)
from math import *  # ❌ BAD PRACTICE

# ============================================
# RELATIVE IMPORTS (DALAM PACKAGE)
# ============================================
# mypackage/
#   __init__.py
#   module1.py
#   subpackage/
#     __init__.py
#     module2.py

# Dari module2.py ke module1.py
from .. import module1
# atau
from ..module1 import some_function
```

### 8.2 Virtual Environments

```python
# ============================================
# VIRTUAL ENVIRONMENT - ISOLASI DEPENDENCIES
# ============================================

# Membuat virtual environment
python -m venv myenv

# Activate (Windows)
myenv\Scripts\activate

# Activate (Linux/Mac)
source myenv/bin/activate

# Install packages
pip install numpy pandas requests

# Export dependencies
pip freeze > requirements.txt

# Install dari requirements.txt
pip install -r requirements.txt

# Deactivate
deactivate
```

### 8.3 Package Management

```python
# ============================================
# REQUIREMENTS.TXT
# ============================================
# requirements.txt
# numpy>=1.24.0
# pandas>=2.0.0
# requests>=2.28.0
# langchain>=0.0.200

# ============================================
# PYPROJECT.TOML (MODERN)
# ============================================
# [project]
# name = "my-ai-project"
# version = "0.1.0"
# dependencies = [
#     "numpy>=1.24.0",
#     "pandas>=2.0.0",
#     "langchain>=0.0.200",
# ]

# ============================================
# PIP COMMANDS
# ============================================
# pip install package_name
# pip install package_name==1.0.0
# pip install "package>=1.0.0,<2.0.0"
# pip uninstall package_name
# pip list
# pip show package_name
# pip freeze
```

---

## 9. File Operations

### 9.1 Reading Files

```python
# ============================================
# MEMBACA FILE
# ============================================

# 1. Read entire file
with open("data.txt", "r", encoding="utf-8") as file:
    content = file.read()
print(content)

# 2. Read line by line
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())

# 3. Read all lines as list
with open("data.txt", "r") as file:
    lines = file.readlines()

# 4. Read single line
with open("data.txt", "r") as file:
    first_line = file.readline()

# ============================================
# PATH MANIPULATION (REKOMENDASI)
# ============================================
from pathlib import Path

# Buat path object
data_path = Path("data") / "file.txt"
data_path = Path("data/file.txt")

# Check existence
if data_path.exists():
    print("File exists!")

# Read with Path
content = data_path.read_text()
lines = data_path.read_text().splitlines()

# Get file info
print(data_path.name)      # file.txt
print(data_path.stem)      # file
print(data_path.suffix)    # .txt
print(data_path.parent)    # data
```

### 9.2 Writing Files

```python
# ============================================
# MENULIS FILE
# ============================================

# 1. Write (overwrite)
with open("output.txt", "w", encoding="utf-8") as file:
    file.write("Hello, World!\n")
    file.write("Line 2")

# 2. Append
with open("output.txt", "a") as file:
    file.write("\nAppended line")

# 3. Write multiple lines
lines = ["Line 1", "Line 2", "Line 3"]
with open("output.txt", "w") as file:
    file.writelines(line + "\n" for line in lines)

# With Path
output_path = Path("output.txt")
output_path.write_text("Content here")
```

### 9.3 JSON Operations

```python
# ============================================
# JSON - JAVA

# 1. Initialize from dict
data = {"nama": "Budi", "umur": 25, "hobi": ["membaca", "coding"]}
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)

# 2. Load from file
with open("data.json", "r") as f:
    loaded_data = json.load(f)

# 3. Pretty print
print(json.dumps(data, indent=2))

# 4. With Path
data = {"nama": "Budi", "umur": 25}
Path("data.json").write_text(json.dumps(data, indent=2))
```

### 9.4 CSV Operations

```python
# ============================================
# CSV OPERATIONS
# ============================================
import csv

# 1. Write CSV
data = [
    ["Nama", "Umur", "Kota"],
    ["Budi", "25", "Jakarta"],
    ["Alice", "23", "Bandung"]
]

with open("output.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(data)

# 2. Write with DictWriter
data = [
    {"nama": "Budi", "umur": 25, "kota": "Jakarta"},
    {"nama": "Alice", "umur": 23, "kota": "Bandung"}
]

with open("output.csv", "w", newline="") as f:
    fieldnames = ["nama", "umur", "kota"]
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(data)

# 3. Read CSV
with open("output.csv", "r", newline="") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)

# 4. Read as Dict
with open("output.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["nama"], row["umur"])
```

---

## 10. Common Python Idioms

### 10.1 Swapping dan Multiple Assignment

```python
# ============================================
# SWAPPING VARIABLES
# ============================================
a, b = 5, 10

# Traditional way
# temp = a
# a = b
# b = temp

# Python way - simultaneous assignment
a, b = b, a
print(a, b)  # 10, 5

# ============================================
# MULTIPLE ASSIGNMENT
# ============================================
x, y, z = 1, 2, 3
a = b = c = 0  # Ketiga variabel pointing ke object yang sama

# Return multiple values
def get_coordinates():
    return 10, 20

x, y = get_coordinates()
```

### 10.2 Underscore Convention

```python
# ============================================
# UNDERSCORE USAGE
# ============================================

# 1. Unused variable
for _ in range(5):  # Tidak peduli index
    print("Hello")

x, _, z = (1, 2, 3)  # Abaikan nilai kedua
print(x, z)  # 1, 3

# 2. Name mangling (private)
class MyClass:
    def __init__(self):
        self.__private = "I'm private"  # _MyClass__private
        self._protected = "I'm protected"  # Convention only

# 3. Numeric literals readability
big_number = 1_000_000_000  # 1000000000
percentage = 0.001_234_567

# 4. Internationalization (i18n)
# gettext.gettext function aliased to _
# print(_("Hello World"))
```

### 10.3 Context Managers

```python
# ============================================
# WITH STATEMENT - CONTEXT MANAGER
# ============================================

# File handling
with open("file.txt", "r") as f:
    content = f.read()
# File otomatis tertutup setelah block

# Multiple context managers
with open("input.txt", "r") as inp, open("output.txt", "w") as out:
    out.write(inp.read())

# ============================================
# CUSTOM CONTEXT MANAGER
# ============================================
# Method 1: Class dengan __enter__ dan __exit__
class Timer:
    def __init__(self):
        self.start = None
    
    def __enter__(self):
        import time
        self.start = time.time()
        return self
    
    def __exit__(self, *args):
        import time
        elapsed = time.time() - self.start
        print(f"Elapsed: {elapsed:.2f}s")

with Timer() as t:
    # do something
    result = sum(range(1000000))

# Method 2: @contextmanager decorator
from contextlib import contextmanager

@contextmanager
def timer():
    import time
    start = time.time()
    try:
        yield
    finally:
        print(f"Elapsed: {time.time() - start:.2f}s")

with timer():
    result = sum(range(1000000))
```

### 10.4 Walrus Operator (:=)

```python
# ============================================
# WALRUS OPERATOR - PYTHON 3.8+
# ============================================
# := adalah assignment expression, bukan statement

# Before walrus
n = 10
if n > 5:
    print(f"n = {n}")

# With walrus - assign dan use dalam satu expression
if (n := 10) > 5:
    print(f"n = {n}")

# Common use case: caching/memoization
import math

def calculate():
    results = []
    while (value := input("Masukkan angka (q untuk quit): ")) != "q":
        if value.replace(".", "").isdigit():
            results.append(float(value))
    return results

# List comprehension dengan walrus
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = [y for x in data if (y := x ** 2) > 10]
print(result)  # [16, 25, 36, 49, 64, 81, 100]
```

---

## 11. Python Standard Library Modules (Modules yang Sudah Kita Pakai)

Sebelum masuk ke tools external, mari kita recap module-module standar Python yang sudah kita pakai:

### 11.0 Ringkasan Module Standar yang Sudah Dipakai

> **Catatan:** Python memiliki banyak module standar yang sudah tersedia tanpa perlu install. Dokumentasi lengkap: https://docs.python.org/3/library/

| Module | Fungsi | Sudah Dipakai di Section |
|--------|--------|--------------------------|
| `collections` | Struktur data khusus (Counter, deque, defaultdict) | Section 2.0, 2.2, 2.4 |
| `itertools` | Iterator utilities (cycle, chain, product) | Section 4.7 |
| `functools` | Higher-order functions (lru_cache, partial, reduce) | Section 4.7 |
| `typing` | Type hints (Optional, List, Dict, Union) | Section 4.6 |
| `datetime` | Manipulasi tanggal dan waktu | Section 7.4 |
| `json` | Encode/decode JSON | Section 9.3 |
| `pathlib` | Object-oriented file paths | Section 9 |
| `abc` | Abstract Base Classes | Section 7.6 |
| `copy` | Deep/shallow copy objects | Section 1.6 |
| `math` | Fungsi matematika | Section 11.0 |
| `time` | Waktu dan timing | Section 11.0 |
| `random` | Random number generation | Section 11.0 |

```python
# ============================================
# MODULE STANDAR YANG SERING DIPAKAI
# ============================================

# collections - Struktur data khusus
from collections import Counter, deque, defaultdict, namedtuple, OrderedDict

# itertools - Iterator utilities
import itertools

# functools - Function utilities
import functools

# datetime - Tanggal dan waktu
from datetime import datetime, timedelta, date

# json - JSON manipulation
import json

# pathlib - File path (modern way)
from pathlib import Path

# os - Operating system interface
import os

# re - Regular expressions
import re

# math - Mathematical functions (CRITICAL untuk ML!)
import math

# time - Waktu dan timing
import time

# random - Random number generation
import random

# statistics - Statistical functions
import statistics

# copy - Deep/shallow copy
import copy
```

### 11.0b Module math - Fungsi Matematika (PENTING untuk ML!)

```python
import math

# Konstanta
print(math.pi)   # 3.141592653589793
print(math.e)    # 2.718281828459045

# Fungsi dasar
print(math.sqrt(16))     # 4.0 - akar kuadrat
print(math.pow(2, 3))    # 8.0 - pangkat
print(math.log(100))     # 4.605170185988092 - log natural
print(math.log(100, 10)) # 2.0 - log base 10
print(math.exp(2))       # 7.38905609893065 - e^2

# Trigonometri
print(math.sin(math.pi/2))  # 1.0
print(math.cos(0))          # 1.0
print(math.tan(math.pi/4))  # 1.0

# Pembulatan
print(math.floor(3.7))  # 3 - bulat ke bawah
print(math.ceil(3.2))   # 4 - bulat ke atas
print(math.round(3.5))  # 4 - bulat ke terdekat

# Faktorial
print(math.factorial(5))  # 120

# Kombinasi dan permutasi
print(math.comb(5, 2))     # 10 - C(5,2)
print(math.perm(5, 2))     # 20 - P(5,2)
```

### 11.0c Module time - Waktu dan Timing

```python
import time

# time() - waktu saat ini dalam seconds
start = time.time()
time.sleep(1)  # Tunda 1 detik
end = time.time()
print(f"Elapsed: {end - start:.2f} seconds")

# strftime - format waktu ke string
now = time.localtime()
print(time.strftime("%Y-%m-%d %H:%M:%S", now))
# Output: 2024-01-15 10:30:45

# time.strptime - parse string ke time
parsed = time.strptime("2024-01-15", "%Y-%m-%d")
print(parsed)  # time.struct_time

# perf_counter - high precision timer (untuk benchmarking)
start = time.perf_counter()
# ... kode yang diukur ...
end = time.perf_counter()
print(f"Duration: {(end-start)*1000:.3f} ms")

# monotonic - timer yang tidak bisa mundur
start = time.monotonic()
# ... some processing ...
print(f"Processing took: {time.monotonic() - start:.2f}s")
```

---

## 11. Tools dan Libraries untuk AI Engineering

### 11.1 pip - Package Manager

```python
# ============================================
# PIP COMMANDS
# ============================================

# Install package
pip install numpy

# Install specific version
pip install numpy==1.24.0

# Install from requirements.txt
pip install -r requirements.txt

# Upgrade package
pip install --upgrade numpy

# Uninstall
pip uninstall numpy

# List installed packages
pip list

# Show package info
pip show numpy

# Generate requirements.txt
pip freeze > requirements.txt
```

### 11.2 NumPy - Numerical Computing untuk AI/ML

**NumPy (Numerical Python)** adalah fondasi dari SELURUH ekosistem AI/ML. Hampir semua library ML (TensorFlow, PyTorch, scikit-learn, LangChain) menggunakan NumPy arrays sebagai struktur data dasar. Memahami NumPy secara mendalam adalah **prasyarat mutlak** untuk AI Engineering.

#### 11.2.1 Mengapa NumPy Sangat Penting untuk AI/ML?

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    NUMPY: FOUNDATION OF AI/ML                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   Python List:       [1, 2, 3, 4, 5]  →  Multiple Python objects        │
│                      Slow, high memory, no vectorization                │
│                                                                         │
│   NumPy Array:       [1 2 3 4 5]       →  Single contiguous block     │
│                      Fast, low memory, SIMD vectorization               │
│                                                                         │
│   ML Framework:      Tensor/LLVMemView    →  GPU-compatible            │
│                      TensorFlow, PyTorch build on NumPy                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### 11.2.2 Array Creation - Membuat Array

```python
# ============================================
# CARA MEMBUAT NUMPY ARRAYS
# ============================================
import numpy as np

# 1. Dari Python List
arr = np.array([1, 2, 3, 4, 5])
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])

# 2. Dengan zeros, ones, empty
zeros = np.zeros(5)           # [0. 0. 0. 0. 0.]
zeros_2d = np.zeros((3, 4))   # Matrix 3x4 dengan 0 semua
ones = np.ones(5)             # [1. 1. 1. 1. 1.]
empty = np.empty(5)            # Uninitialized, lebih cepat

# 3. With specific value (full)
full = np.full(5, 99)          # [99 99 99 99 99]
full_2d = np.full((3, 3), 255)  # Matrix 3x3 dengan 255

# 4. Identity matrix (penting untuk ML!)
identity = np.eye(3)           # 3x3 identity matrix
# [[1. 0. 0.]
#  [0. 1. 0.]
#  [0. 0. 1.]]

# 5. Diagonal matrix
diagonal = np.diag([1, 2, 3])  # Matrix dengan diagonal [1,2,3]

# 6. arange - seperti range()
arr = np.arange(0, 10, 2)      # [0, 2, 4, 6, 8]
arr = np.arange(10)            # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# 7. linspace - untuk scale/normalize
arr = np.linspace(0, 1, 5)     # [0.   0.25 0.5  0.75 1.  ]
arr = np.linspace(-1, 1, 100)   # 100 titik dari -1 ke 1

# 8. logspace - untuk skala logaritmik
arr = np.logspace(0, 3, 4)     # [1, 10, 100, 1000]

# 9. Random arrays (SANGAT PENTING untuk ML!)
np.random.seed(42)  # Untuk reproducibility

# Uniform distribution (0-1)
rand = np.random.rand(5)        # 5 angka random uniform
rand_2d = np.random.rand(3, 4)  # Matrix 3x4

# Normal/Gaussian distribution (untuk inisialisasi weight)
normal = np.random.randn(1000)  # Mean=0, Std=1
normal_2d = np.random.randn(100, 50)  # Untuk weight matrix

# Random integers
rand_int = np.random.randint(0, 10, 5)  # 5 angka random 0-9

# Random dengan range
rand_range = np.random.uniform(-1, 1, 100)  # 100 angka dari -1 ke 1

# 10. Random untuk ML initialization
# Xavier/Glorot initialization (untuk neural networks)
xavier = np.random.randn(n_in, n_out) * np.sqrt(2.0 / (n_in + n_out))

# Kaiming/He initialization
he = np.random.randn(n_in, n_out) * np.sqrt(2.0 / n_in)
```

#### 11.2.3 Array Attributes - Properti Array

```python
# ============================================
# ARRAY ATTRIBUTES - MEMAHAMI STRUKTUR ARRAY
# ============================================
arr = np.array([[1, 2, 3], [4, 5, 6]])

# ndim - jumlah dimensi
print(arr.ndim)                # 2

# shape - bentuk array (rows, cols, ...)
print(arr.shape)               # (2, 3)

# size - total elemen
print(arr.size)                # 6

# dtype - tipe data
print(arr.dtype)               # int64

# itemsize - ukuran per elemen (bytes)
print(arr.itemsize)           # 8

# nbytes - total ukuran memory
print(arr.nbytes)             # 48

# ============================================
# DTYPES - TIPE DATA
# ============================================
# Default integer di sistem 64-bit
arr = np.array([1, 2, 3])
print(arr.dtype)              # int64

# Explicit dtype
arr_int32 = np.array([1, 2, 3], dtype=np.int32)
arr_float32 = np.array([1, 2, 3], dtype=np.float32)
arr_float64 = np.array([1, 2, 3], dtype=np.float64)

# Boolean
arr_bool = np.array([1, 0, 1], dtype=bool)

# Complex numbers (untuk signal processing)
arr_complex = np.array([1+2j, 3+4j])

# Cast dtype
arr = np.array([1.5, 2.7, 3.9], dtype=np.float32)
arr_int = arr.astype(np.int32)  # [1, 2, 3]

# ⚠️ CRITICAL untuk ML: GPU membutuhkan float32!
# Torch/ TensorFlow gunakan float32 sebagai default
images = np.random.rand(100, 224, 224, 3)
images = images.astype(np.float32)  # Konversi untuk GPU
```

#### 11.2.4 Array Indexing & Slicing - Mengakses Elemen

```python
# ============================================
# BASIC INDEXING - SAMA SEPERTI LIST
# ============================================
arr = np.array([10, 20, 30, 40, 50])

print(arr[0])                 # 10 - elemen pertama
print(arr[-1])                # 50 - elemen terakhir
print(arr[1:4])              # [20, 30, 40] - slicing

# ============================================
# 2D INDEXING - UNTUK GAMBAR/DATA TABULAR
# ============================================
matrix = np.array([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
])

# Akses single element
print(matrix[0, 0])          # 1 - baris 0, kolom 0
print(matrix[2, 3])          # 12 - baris 2, kolom 3

# Slice baris
print(matrix[0])              # [1, 2, 3, 4] - seluruh baris pertama
print(matrix[0, :])          # [1, 2, 3, 4] - sama

# Slice kolom
print(matrix[:, 0])          # [1, 5, 9] - seluruh kolom pertama
print(matrix[:, 1:3])        # [[2, 3], [6, 7], [10, 11]]

# Submatrix
print(matrix[1:3, 1:3])      # [[6, 7], [10, 11]]

# ============================================
# ADVANCED INDEXING - BOOLEAN MASKING
# ============================================
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# Boolean mask - SANGAT PENTING untuk filtering data ML
mask = arr > 5               # [False, False, False, False, False, True, True, True, True, True]
print(arr[mask])             # [6, 7, 8, 9, 10]

# Lebih singkat
print(arr[arr > 5])          # [6, 7, 8, 9, 10]
print(arr[arr % 2 == 0])     # [2, 4, 6, 8, 10] - bilangan genap
print(arr[(arr > 3) & (arr < 8)])  # [4, 5, 6, 7] - dengan AND

# Multiple conditions - gunakan () dan &, bukan and
print(arr[(arr > 2) & (arr < 8) & (arr != 5)])  # [3, 4, 6, 7]

# ============================================
# FANCY INDEXING - INDEX DENGAN ARRAY
# ============================================
arr = np.array([10, 20, 30, 40, 50])

# Index dengan array
indices = [0, 2, 4]
print(arr[indices])          # [10, 30, 50]

# Index dengan numpy array
indices = np.array([0, 2, 4])
print(arr[indices])          # [10, 30, 50]

# Boolean indexing
mask = np.array([True, False, True, False, True])
print(arr[mask])            # [10, 30, 50]

# ============================================
# NEGATIVE INDEXING & STEPPING
# ============================================
arr = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

print(arr[-3:])             # [7, 8, 9] - 3 elemen terakhir
print(arr[:-3])             # [0, 1, 2, 3, 4, 5, 6] - kecuali 3 terakhir
print(arr[::2])             # [0, 2, 4, 6, 8] - every 2nd
print(arr[::-1])            # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] - reverse

# ============================================
# PRACTICAL ML EXAMPLES
# ============================================
# 1. Crop image (penting untuk data augmentation)
image = np.random.rand(224, 224, 3)  # RGB image
cropped = image[50:174, 50:174, :]   # Crop center 124x124

# 2. Select specific channels
rgb = np.random.rand(224, 224, 3)    # [H, W, C]
red_channel = rgb[:, :, 0]          # Red channel only
grayscale = rgb.mean(axis=2)         # Average semua channel

# 3. Split data train/validation
indices = np.arange(1000)
np.random.shuffle(indices)
train_idx = indices[:800]
val_idx = indices[800:]
X_train = X[train_idx]
X_val = X[val_idx]
```

#### 11.2.5 Array Reshaping - Mengubah Bentuk Array (CRITICAL!)

```python
# ============================================
# RESHAPE - MENGUBAH BENTUK ARRAY
# ============================================
# reshape() tidak mengubah array asli, return array baru
arr = np.arange(12)              # [0, 1, 2, ..., 11]
print(arr.shape)                 # (12,)

# Reshape ke 2D
matrix = arr.reshape(3, 4)
print(matrix)
# [[0, 1, 2, 3],
#  [4, 5, 6, 7],
#  [8, 9, 10, 11]]

# Reshape ke 3D - penting untuk batch images!
batch = arr.reshape(2, 3, 2)     # 2 batch, 3 rows, 2 cols
print(batch.shape)               # (2, 3, 2)

# Reshape dengan -1 (inferred dimension)
arr = np.arange(24)
matrix = arr.reshape(-1, 4)      # Berapa baris? -1 = 24/4 = 6
print(matrix.shape)              # (6, 4)

cube = arr.reshape(2, -1, 4)    # Berapa dimensi tengah? 24/(2*4) = 3
print(cube.shape)              # (2, 3, 4)

# ============================================
# FLATTEN - MENGUBAH KE 1D
# ============================================
matrix = np.array([[1, 2], [3, 4]])

flat = matrix.flatten()          # [1, 2, 3, 4] - always return copy
flat = matrix.ravel()           # [1, 2, 3, 4] - return view if possible

# ⚠️ PERBEDAAN PENTING:
# flatten() -> selalu COPY, lebih aman
# ravel() -> COPY atau VIEW, lebih memory-efficient

# ============================================
# TRANSPOSE - MEMBALIK SUMBU
# ============================================
matrix = np.array([[1, 2, 3], [4, 5, 6]])
print(matrix.shape)             # (2, 3)

# Transpose
T = matrix.T
print(T.shape)                 # (3, 2)
print(T)
# [[1, 4],
#  [2, 5],
#  [3, 6]]

# transpose() dengan specific axes
# Sangat penting untuk menukar dimensi tensor!
batch_images = np.random.rand(32, 224, 224, 3)  # [B, H, W, C]
batch_images_t = np.transpose(batch_images, (0, 3, 1, 2))  # [B, C, H, W]

# swapaxes - khusus untuk 2 axes
# [B, C, H, W] -> [B, H, C, W] -> [B, H, W, C]
x = np.random.rand(32, 3, 224, 224)
x = np.swapaxes(x, 1, 3)       # [B, W, H, C]
x = np.swapaxes(x, 1, 2)       # [B, H, W, C]

# ============================================
# SQUEEZE & EXPAND_DIMS - MANIPULASI DIMENSI
# ============================================
# Squeeze - hapus dimensi dengan size 1
arr = np.random.rand(1, 224, 224, 1)
print(arr.shape)                # (1, 224, 224, 1)
squeezed = np.squeeze(arr)
print(squeezed.shape)           # (224, 224)

# Atau specify axes
squeezed = np.squeeze(arr, axis=(0, 3))
print(squeezed.shape)           # (224, 224, 1)

# Expand_dims - tambah dimensi dengan size 1
arr = np.random.rand(224, 224)
print(arr.shape)                # (224, 224)

# Tambah batch dimension - SANGAT PENTING untuk inference!
batch = np.expand_dims(arr, axis=0)  # [1, 224, 224]
print(batch.shape)

# Tambah channel dimension
img_with_channel = np.expand_dims(arr, axis=-1)  # [224, 224, 1]
print(img_with_channel.shape)

# ============================================
# PRACTICAL ML: BATCH PROCESSING
# ============================================
# Dataset: 1000 images 28x28 (MNIST-like)
images = np.random.rand(1000, 28, 28)  # [N, H, W]

# 1. Reshape untuk flatten pixel
flattened = images.reshape(1000, -1)  # [1000, 784]
print(flattened.shape)

# 2. Buat batches
batch_size = 32
n_batches = 1000 // 32  # 31 batches
batches = images.reshape(n_batches, batch_size, 28, 28)
print(batches.shape)    # [31, 32, 28, 28]

# 3. Reshape ke format yang dibutuhkan model (PyTorch style)
# [N, H, W, C] -> [N, C, H, W] untuk Conv layers
images_nhwc = np.random.rand(100, 28, 28, 1)
images_nchw = np.transpose(images_nhwc, (0, 3, 1, 2))  # [N, C, H, W]
print(images_nchw.shape)  # (100, 1, 28, 28)
```

#### 11.2.6 Broadcasting - Operasi Antar Array Berbeda Ukuran (CRITICAL!)

```python
# ============================================
# BROADCASTING - FONDASI OPERASI ML
# ============================================
# Broadcasting = otomatis expand array kecil untuk operasi dengan array besar
# Ini adalah fondasi dari hampir SEMUA operasi di NumPy/PyTorch!

# Contoh sederhana
arr = np.array([1, 2, 3])
scalar = 5

# Broadcasting scalar ke array
print(arr + scalar)            # [6, 7, 8] - scalar di-broadcast ke seluruh elemen

# Tanpa broadcasting, harus loop (lambat!)
# result = [x + scalar for x in arr]  # [6, 7, 8]

# ============================================
# BROADCASTING RULES
# ============================================
# Dua array broadcastable jika:
# 1. Same shape, atau
# 2. Salah satu memiliki dimensi 1, atau
# 3. Array kosong (size 1) di-expand

# Case 1: Same shape
a = np.array([1, 2, 3])
b = np.array([10, 20, 30])
print(a + b)                   # [11, 22, 33]

# Case 2: Scalar broadcast
a = np.array([1, 2, 3])
print(a * 2)                   # [2, 4, 6]

# Case 3: 1D + 2D broadcasting
# [3,] + [4,4] -> [3,3] + [4,4] = [7,7]
a = np.array([1, 2, 3]).reshape(3, 1)  # (3,1)
b = np.array([10, 20])               # (4,) -> broadcast ke (1,4) lalu (3,4)
# Result: (3, 4)

# ============================================
# VISUAL representation BROADCASTING
# ============================================
# A shape (3, 1):
# A = [[1],
#      [2],
#      [3]]
#
# B shape (1, 4):
# B = [[10, 20, 30, 40]]
#
# Result (3, 4):
#     [[11, 21, 31, 41],
#  A   [12, 22, 32, 42],  + B
#      [13, 23, 33, 43]]

A = np.array([[1], [2], [3]])      # shape (3, 1)
B = np.array([[10, 20, 30, 40]])   # shape (1, 4)
C = A + B
print(C)
# [[11, 21, 31, 41],
#  [12, 22, 32, 42],
#  [13, 23, 33, 43]]

# ============================================
# PRACTICAL ML EXAMPLES
# ============================================

# 1. Normalize/Standardize data (fondasi ML!)
data = np.random.rand(100, 10)  # 100 samples, 10 features

# Normalize per feature (zero mean, unit variance)
mean = data.mean(axis=0)        # [1, 10] - mean per feature
std = data.std(axis=0)          # [1, 10] - std per feature
normalized = (data - mean) / std  # Broadcasting! [100,10] - [1,10]

# Min-Max scaling
min_val = data.min(axis=0)
max_val = data.max(axis=0)
scaled = (data - min_val) / (max_val - min_val)

# 2. Add bias to all samples
weights = np.random.rand(10, 1)  # [10, 1]
bias = np.array([0.5])           # [1,] - scalar
logits = data @ weights + bias   # Broadcasting bias ke semua samples

# 3. Image normalization (penting untuk deep learning!)
# Image shape: [B, H, W, C] values 0-255
image = np.random.randint(0, 256, (1, 224, 224, 3))

# Normalize ke [0, 1]
image_norm = image / 255.0

# Normalize dengan ImageNet mean/std
mean = np.array([0.485, 0.456, 0.406]).reshape(1, 1, 1, 3)
std = np.array([0.229, 0.224, 0.225]).reshape(1, 1, 1, 3)
image_standardized = (image_norm - mean) / std

# 4. Distance from center
# Hitung jarak setiap pixel dari center image
image = np.random.rand(224, 224)
center_y, center_x = 112, 112

# Buat koordinat grids
y = np.arange(224).reshape(-1, 1)  # (224, 1)
x = np.arange(224).reshape(1, -1)  # (1, 224)

# Hitung jarak Euclidean dari center
distance = np.sqrt((y - center_y)**2 + (x - center_x)**2)
print(distance.shape)  # (224, 224)

# 5. Masking dengan broadcasting
mask = distance < 50  # Boolean mask
patch = image * mask  # Apply mask
```

#### 11.2.7 Array Concatenation & Stacking (CRITICAL!)

```python
# ============================================
# CONCATENATION - GABUNGKAN ARRAY
# ============================================
# np.concatenate - gabungkan arrays sepanjang axis tertentu

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Concatenate along axis 0 (default)
c = np.concatenate([a, b])
print(c)                     # [1, 2, 3, 4, 5, 6]

# ============================================
# STACKING - TUMPUK ARRAY (UNTUK BATCHING!)
# ============================================
# np.stack - buat array baru dengan axis baru
# SANGAT PENTING untuk membuat batches!

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Stack along new axis (default axis=0)
stacked = np.stack([a, b])
print(stacked.shape)          # (2, 3)
print(stacked)
# [[1, 2, 3],
#  [4, 5, 6]]

# Stack along different axis
stacked_1 = np.stack([a, b], axis=1)  # (3, 2)
print(stacked_1)
# [[1, 4],
#  [2, 5],
#  [3, 6]]

# ============================================
# PRACTICAL: BUILDING BATCHES FOR ML
# ============================================
# Problem: kita punya 10 images, mau buat batches size 2

images = np.arange(10 * 28 * 28).reshape(10, 28, 28)  # 10 images
batch_size = 2
n_batches = 10 // 2  # 5 batches

# Cara 1: Manual indexing
batches = []
for i in range(n_batches):
    start = i * batch_size
    end = start + batch_size
    batch = images[start:end]
    batches.append(batch)

batches = np.stack(batches)  # (5, 2, 28, 28)
print(batches.shape)

# Cara 2: np.array_split (lebih clean)
batches = np.array_split(images, n_batches, axis=0)
batches = np.stack(batches, axis=0)  # (5, 2, 28, 28)

# ============================================
# CONCATENATE VS STACK
# ============================================
# CONCATENATE: gabungkan sepanjang existing axis
# STACK: buat NEW axis

a = np.zeros((2, 3))  # shape (2, 3)
b = np.ones((2, 3))    # shape (2, 3)

concat = np.concatenate([a, b], axis=0)  # (4, 3)
print(concat.shape)

stack = np.stack([a, b], axis=0)  # (2, 2, 3)
print(stack.shape)

# ============================================
# VSTACK & HSTACK - SHORTCUTS
# ============================================
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# vstack = vertical stack (along axis 0)
vstacked = np.vstack([a, b])  # (2, 3)
print(vstacked)
# [[1, 2, 3],
#  [4, 5, 6]]

# hstack = horizontal stack (along axis 1)
a2 = a.reshape(3, 1)
b2 = b.reshape(3, 1)
hstacked = np.hstack([a2, b2])  # (3, 2)
print(hstacked)
# [[1, 4],
#  [2, 5],
#  [3, 6]]

# ============================================
# SPLIT - PISAHKAN ARRAY
# ============================================
arr = np.arange(12)

# Split into equal parts
split = np.split(arr, 4)     # 4 array sama besar
print([s.shape for s in split])  # [(3,), (3,), (3,), (3,)]

# Split at specific indices
split = np.split(arr, [3, 7])  # [:3], [3:7], [7:]
print([len(s) for s in split])  # [3, 4, 5]

# vsplit, hsplit
matrix = np.arange(12).reshape(3, 4)
print(np.vsplit(matrix, 3))    # 3 rows
print(np.hsplit(matrix, 2))    # 2 columns
```

#### 11.2.8 Vectorized Operations - Operasi Vektor

```python
# ============================================
# VECTORIZATION - JANGAN LOOP, GUNAKAN NUMPY
# ============================================
# Vectorized operations = operasi element-wise tanpa loop
# Ini yang membuat NumPy 10-100x lebih cepat!

# ❌ SLOW - loop dengan Python
data = list(range(1000000))
result = []
for x in data:
    result.append(x ** 2 + 2 * x + 1)

# ✅ FAST - vectorized NumPy
data = np.arange(1000000)
result = data ** 2 + 2 * data + 1

# ============================================
# ELEMENT-WISE OPERATIONS
# ============================================
a = np.array([1, 2, 3, 4, 5])

# Arithmetic
print(a + 10)                 # [11, 12, 13, 14, 15]
print(a - 5)                  # [-4, -3, -2, -1, 0]
print(a * 2)                  # [2, 4, 6, 8, 10]
print(a / 2)                  # [0.5, 1.0, 1.5, 2.0, 2.5]
print(a ** 2)                 # [1, 4, 9, 16, 25]
print(a % 2)                  # [1, 0, 1, 0, 1]

# Comparison (return boolean array)
print(a > 3)                  # [False, False, False, True, True]
print(a == 3)                 # [False, False, True, False, False]

# Logical
a = np.array([True, False, True])
b = np.array([False, False, True])
print(np.logical_and(a, b))   # [False, False, True]
print(np.logical_or(a, b))    # [True, False, True]
print(np.logical_not(a))      # [False, True, False]

# ============================================
# MATHEMATICAL FUNCTIONS
# ============================================
a = np.array([1, 2, 3, 4, 5])

# Trigonometric
print(np.sin(a))              # sine
print(np.cos(a))              # cosine
print(np.tan(a))              # tangent
print(np.arcsin(a/5))        # inverse sine

# Exponential & Logarithmic (penting untuk ML!)
print(np.exp(a))              # e^a
print(np.log(a))              # natural log
print(np.log2(a))             # log base 2
print(np.log10(a))            # log base 10

# Power & Root
print(np.power(a, 3))        # a^3
print(np.sqrt(a))             # square root
print(np.cbrt(a))             # cube root

# Absolute value
a = np.array([-1, -2, 3])
print(np.abs(a))              # [1, 2, 3]

# Rounding
a = np.array([1.5, 2.7, 3.3, 4.9])
print(np.round(a))            # [2., 3., 3., 5.]
print(np.floor(a))            # [1., 2., 3., 4.]
print(np.ceil(a))             # [2., 3., 4., 5.]
print(np.trunc(a))            # [1., 2., 3., 4.]

# ============================================
# AGGREGATION FUNCTIONS
# ============================================
a = np.array([1, 2, 3, 4, 5])

# Basic statistics
print(np.sum(a))              # 15
print(np.prod(a))              # 120 (product)
print(np.min(a))              # 1
print(np.max(a))              # 5
print(np.mean(a))             # 3.0
print(np.median(a))           # 3.0
print(np.std(a))              # 1.414... (standard deviation)
print(np.var(a))              # 2.0 (variance)

# Percentiles (penting untuk outlier detection)
print(np.percentile(a, 25))   # Q1
print(np.percentile(a, 50))   # Median
print(np.percentile(a, 75))   # Q3
print(np.percentile(a, [25, 50, 75]))  # semua sekaligus

# ============================================
# AXIS-BASED AGGREGATION (SANGAT PENTING!)
# ============================================
matrix = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

# Sum per column (axis=0)
print(np.sum(matrix, axis=0))     # [12, 15, 18]

# Sum per row (axis=1)
print(np.sum(matrix, axis=1))     # [6, 15, 24]

# Mean per row
print(np.mean(matrix, axis=1))   # [2., 5., 8.]

# Std per column
print(np.std(matrix, axis=0))    # [2., 2., 2.]

# Keepdims - maintain dimensions
row_mean = np.mean(matrix, axis=1, keepdims=True)
print(row_mean.shape)             # (3, 1) - bukan (3,)

# ============================================
# PRACTICAL ML: LAYER OPERATIONS
# ============================================
# 1. Softmax activation
logits = np.array([2.0, 1.0, 0.1])
exp_logits = np.exp(logits - np.max(logits))  # numerical stability
probs = exp_logits / np.sum(exp_logits)
print(probs)                     # [0.7, 0.26, 0.04]

# 2. Cross-entropy loss
y_true = np.array([0, 1, 0])
loss = -np.sum(y_true * np.log(probs + 1e-9))
print(loss)

# 3. Batch normalization
batch = np.random.randn(32, 100)  # 32 samples, 100 features
mean = np.mean(batch, axis=0)      # [1, 100]
var = np.var(batch, axis=0)        # [1, 100]
normalized = (batch - mean) / np.sqrt(var + 1e-8)
```

#### 11.2.9 Linear Algebra untuk ML (CRITICAL!)

```python
# ============================================
# MATRIX OPERATIONS - FONDASI NEURAL NETWORKS
# ============================================
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Element-wise multiplication
print(A * B)                     # [[5, 12], [21, 32]]

# Matrix multiplication (@ atau np.matmul)
C = A @ B                        # [[19, 22], [43, 50]]
C = np.matmul(A, B)              # Sama

# Dot product
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(np.dot(a, b))               # 32 = 1*4 + 2*5 + 3*6

# ============================================
# SPECIAL MATRICES
# ============================================
# Identity
I = np.eye(3)
print(I)
# [[1, 0, 0],
#  [0, 1, 0],
#  [0, 0, 1]]

# Diagonal
D = np.diag([1, 2, 3])
print(D)
# [[1, 0, 0],
#  [0, 2, 0],
#  [0, 0, 3]]

# Get diagonal
print(np.diag(A))                # [1, 4]

# Trace (sum diagonal)
print(np.trace(A))               # 5

# ============================================
# MATRIX DECOMPOSITION
# ============================================
A = np.array([[1, 2], [3, 4]])

# Determinant
print(np.linalg.det(A))          # -2.0

# Inverse (penting untuk banyak algoritma ML)
A_inv = np.linalg.inv(A)
print(A_inv)
print(A @ A_inv)                 # Should be close to identity

# Eigenvalues & Eigenvectors (penting untuk PCA)
eigenvalues, eigenvectors = np.linalg.eig(A)
print(eigenvalues)
print(eigenvectors)

# SVD (Singular Value Decomposition) - sangat penting untuk ML
U, S, Vt = np.linalg.svd(A)
print(f"U: {U.shape}, S: {S.shape}, Vt: {Vt.shape}")

# ============================================
# NORM - MENGUKUR "UKURAN" VEKTOR/MATRIX
# ============================================
a = np.array([3, 4])

# L2 norm (Euclidean distance) - SANGAT PENTING!
l2_norm = np.linalg.norm(a)      # 5.0 = sqrt(3^2 + 4^2)
print(f"L2 norm: {l2_norm}")

# L1 norm
l1_norm = np.linalg.norm(a, ord=1)  # 7 = |3| + |4|

# Frobenius norm (untuk matriks)
F_norm = np.linalg.norm(A, 'fro')   # sqrt(sum of squares)

# Normalize vector
normalized = a / np.linalg.norm(a)  # Unit vector
print(normalized)                    # [0.6, 0.8]

# ============================================
# PRACTICAL ML: NEURAL NETWORK LAYERS
# ============================================
# Input: batch of 32 samples, 784 features
X = np.random.randn(32, 784)     # [B, F]

# Weight matrix: 784 -> 256 neurons
W = np.random.randn(784, 256) * 0.01  # He initialization
b = np.zeros(256)                # Bias

# Forward pass (linear layer)
z = X @ W + b                    # [32, 256]
print(f"Hidden layer shape: {z.shape}")

# ReLU activation
a = np.maximum(0, z)             # [32, 256]

# Softmax output
exp_z = np.exp(z - np.max(z, axis=1, keepdims=True))
probs = exp_z / np.sum(exp_z, axis=1, keepdims=True)
print(f"Output probs shape: {probs.shape}")
```

#### 11.2.10 Performance Tips & Best Practices

```python
# ============================================
# PERFORMANCE TIPS - JANGAN BUAT KESALAHAN INI!
# ============================================

# ❌ SLOW - buat array baru di setiap operasi
arr = np.arange(1000)
result = arr * 2 + 1  # OK untuk kecil
result = np.sin(np.log(np.sqrt(arr)))  # Banyak intermediate arrays

# ✅ FAST - gunakan expression tunggal
arr = np.arange(1000)
result = np.sin(np.log(np.sqrt(arr)))  # NumPy optimize ini

# ❌ SLOW - loop dengan Python
result = np.zeros(1000)
for i in range(1000):
    result[i] = arr[i] ** 2

# ✅ FAST - vectorized
result = arr ** 2

# ============================================
# MEMORY EFFICIENCY
# ============================================
# View vs Copy
arr = np.arange(10)
view = arr[::2]        # View - share memory!
view[0] = 99
print(arr[0])          # 99 - berubah!

arr = np.arange(10)
copy = arr[::2].copy()  # Copy - memori baru
copy[0] = 99
print(arr[0])          # 0 - tidak berubah

# Hemat memori dengan dtype
arr = np.random.rand(1000000)
arr_float32 = arr.astype(np.float32)  # Setengah memory dari float64
arr_int8 = arr.astype(np.int8)       # Sangat hemat untuk binary data

# ============================================
# ============================================
# NUMPY + PYTORCH INTEROPERABILITY (PREVIEW)
# ============================================
# NOTE: PyTorch dijelaskan secara detail di Section Fondasi Deep Learning
# Section ini hanya preview singkat untuk menunjukkan hubungan NumPy-Torch
# Jika belum familiar dengan torch, Anda bisalewati bagian ini dan kembali
# setelah mempelajari PyTorch

import torch

# NumPy -> PyTorch
np_array = np.random.randn(32, 784)
torch_tensor = torch.from_numpy(np_array)  # Share memory!

# PyTorch -> NumPy
torch_tensor = torch.randn(32, 784)
np_array = torch_tensor.numpy()  # Share memory!

# ⚠️ PERHATIAN: Mereka share memory, ubah satu affects other!
np_array[0, 0] = 999
print(torch_tensor[0, 0])  # 999.0 - berubah!

# Copy explicit jika perlu
torch_copy = torch_tensor.clone().numpy()
```

#### 11.2.11 Ringkasan Cheat Sheet NumPy untuk ML

```python
# ============================================
# NUMPY CHEAT SHEET - QUICK REFERENCE
# ============================================

import numpy as np

# CREATION
np.array([1, 2, 3])              # Dari list
np.zeros((2, 3))                  # Matrix 2x3 dengan 0
np.ones((2, 3))                  # Matrix 2x3 dengan 1
np.full((2, 3), 255)             # Matrix 2x3 dengan 255
np.eye(3)                        # Identity 3x3
np.arange(0, 10, 2)             # [0, 2, 4, 6, 8]
np.linspace(0, 1, 5)            # [0, 0.25, 0.5, 0.75, 1]
np.random.rand(2, 3)            # Random uniform [0, 1)
np.random.randn(1000)           # Random normal (mean=0, std=1)
np.random.randint(0, 10, (2, 3))  # Random integers

# SHAPE MANIPULATION
arr.reshape(2, 3)                # Reshape ke 2x3
arr.flatten()                     # Flatten ke 1D
arr.T                            # Transpose
arr.swapaxes(0, 1)               # Swap axes
np.squeeze(arr)                  # Hapus dimensi 1
np.expand_dims(arr, 0)           # Tambah dimensi 1

# INDEXING & SLICING
arr[0]                           # Elemen pertama
arr[-1]                          # Elemen terakhir
arr[2:5]                        # Slice [2, 3, 4]
arr[arr > 5]                    # Boolean indexing
arr[[0, 2, 4]]                 # Fancy indexing

# OPERATIONS
arr + 5                          # Broadcast scalar
arr1 + arr2                      # Element-wise
arr @ other                      # Matrix multiplication
np.dot(a, b)                    # Dot product
np.exp(arr)                     # Exponential
np.log(arr)                     # Logarithm
np.sqrt(arr)                    # Square root

# AGGREGATION
np.sum(arr)                     # Sum semua
np.mean(arr)                    # Mean
np.std(arr)                     # Standard deviation
np.min(arr)                     # Minimum
np.max(arr)                     # Maximum
np.sum(arr, axis=0)             # Sum per column
np.sum(arr, axis=1)             # Sum per row

# LINEAR ALGEBRA
np.linalg.inv(arr)              # Inverse
np.linalg.det(arr)              # Determinant
np.linalg.eig(arr)              # Eigenvalues/vectors
np.linalg.norm(arr)             # Norm (default L2)
np.linalg.svd(arr)              # SVD

# CONCATENATION
np.concatenate([a, b])         # Concatenate [DEPRECATED Warning:，一起。]
np.stack([a, b])               # Stack dengan axis baru
np.vstack([a, b])              # Vertical stack
np.hstack([a, b])              # Horizontal stack
np.split(arr, 3)                # Split into 3 parts
```

**Catatan Tambahan:**
- **np.concatenate vs np.stack**: Gunakan `np.concatenate` untuk menggabungkan sepanjang axis yang ada, dan `np.stack` untuk membuat axis baru
- Untuk kode kompatibel: gunakan `np.concatenate([a, b], axis=0)` dengan axis yang spesifik

### 11.3 pandas - Data Manipulation

Pandas adalah library **WAJIB** untuk setiap AI Engineer. Hampir semua data preprocessing menggunakan Pandas:

```python
# ============================================
# PANDAS - DATA MANIPULATION (WAJIB untuk ML!)
# ============================================
import pandas as pd
import numpy as np

# ============================================
# SERIES - 1D DATA STRUCTURE
# ============================================
# Series seperti numpy array tapi dengan index
s = pd.Series([1, 2, 3, 4, 5], index=['a', 'b', 'c', 'd', 'e'])
print(s.index)  # Index object
print(s.values) # NumPy array

# Series dengan dictionary
data = {'a': 1, 'b': 2, 'c': 3}
s = pd.Series(data)
print(s['a'])  # 1

# ============================================
# DATAFRAME - 2D DATA STRUCTURE (Paling Penting!)
# ============================================
# Dari dictionary
data = {
    'Nama': ['Budi', 'Alice', 'Charlie', 'Diana'],
    'Umur': [25, 23, 30, 28],
    'Kota': ['Jakarta', 'Bandung', 'Surabaya', 'Medan'],
    'Gaji': [5000000, 6000000, 8000000, 7500000]
}
df = pd.DataFrame(data)
print(df)

# Dari numpy array
arr = np.random.randn(5, 3)
df = pd.DataFrame(arr, columns=['A', 'B', 'C'])
print(df)

# ============================================
# BASIC OPERATIONS
# ============================================
print(df.head())        # First 5 rows
print(df.tail())        # Last 5 rows
print(df.info())        # DataFrame info
print(df.describe())   # Statistical summary (count, mean, std, min, max, quartiles)

# Shape dan columns
print(df.shape)        # (rows, columns)
print(df.columns)      # Column names
print(df.dtypes)       # Data types

# ============================================
# SELECTION - PENTING!
# ============================================
# Select single column (returns Series)
print(df['Nama'])
print(df.Nama)  # Alternative

# Select multiple columns (returns DataFrame)
print(df[['Nama', 'Gaji']])

# Select by position - iloc [row, col]
print(df.iloc[0])           # Row pertama
print(df.iloc[0, 1])        # Row 0, Col 1
print(df.iloc[0:3, 0:2])   # Rows 0-2, Cols 0-1

# Select by label - loc [row_label, col_label]
df = pd.DataFrame(data, index=['a', 'b', 'c', 'd'])
print(df.loc['a'])         # Row 'a'
print(df.loc['a', 'Nama']) # Row 'a', Col 'Nama'
print(df.loc['a':'c', ['Nama', 'Umur']])

# ============================================
# FILTERING - SANGAT PENTING untuk ML!
# ============================================
# Boolean indexing
print(df[df['Umur'] > 25])  # Umur lebih dari 25

# Multiple conditions
print(df[(df['Umur'] > 25) & (df['Gaji'] > 6000000)])

# isin - untuk multiple values
print(df[df['Kota'].isin(['Jakarta', 'Bandung'])])

# query method - lebih readable
print(df.query('Umur > 25 and Gaji > 6000000'))

# ============================================
# ADDING & MODIFYING COLUMNS
# ============================================
# Add new column
df['Bonus'] = df['Gaji'] * 0.1
df['Total'] = df['Gaji'] + df['Bonus']

# Modify dengan condition
df['Kategori'] = np.where(df['Gaji'] > 7000000, 'Tinggi', 'Rendah')

# Apply function ke column
df['Nama_Upper'] = df['Nama'].str.upper()

# ============================================
# HANDLING MISSING DATA (SANGAT PENTING!)
# ============================================
df = pd.DataFrame({
    'A': [1, 2, np.nan, 4],
    'B': [5, np.nan, np.nan, 8],
    'C': [9, 10, 11, 12]
})

# Check missing
print(df.isnull())
print(df.isnull().sum())  # Count missing per column

# Drop rows/columns dengan missing
df.dropna()           # Drop row yang ada missing
df.dropna(axis=1)    # Drop column yang ada missing

# Fill missing values
df.fillna(0)                   # Fill dengan 0
df.fillna(df.mean())          # Fill dengan mean
df.fillna(method='ffill')    # Forward fill
df.fillna(method='bfill')    # Backward fill

# Interpolate
df['A'].interpolate()

# ============================================
# GROUPBY - AGGREGATION (PENTING untuk EDA!)
# ============================================
df = pd.DataFrame({
    'Kategori': ['A', 'B', 'A', 'B', 'A', 'B'],
    'Nilai': [10, 20, 30, 40, 50, 60]
})

# Group by
grouped = df.groupby('Kategori')
print(grouped.mean())
print(grouped.sum())
print(grouped.count())

# Multiple aggregations
print(grouped.agg(['mean', 'sum', 'count']))

# Different agg per column
print(grouped.agg({'Nilai': ['mean', 'sum']}))

# ============================================
# MERGING DATAFRAMES (JOIN di SQL)
# ============================================
df1 = pd.DataFrame({'key': ['a', 'b', 'c'], 'val1': [1, 2, 3]})
df2 = pd.DataFrame({'key': ['a', 'b', 'd'], 'val2': [4, 5, 6]})

# Inner join
print(pd.merge(df1, df2, on='key', how='inner'))

# Left join
print(pd.merge(df1, df2, on='key', how='left'))

# Right join
print(pd.merge(df1, df2, on='key', how='right'))

# Outer join
print(pd.merge(df1, df2, on='key', how='outer'))

# ============================================
# CONCATENATION
# ============================================
df1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
df2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})

# Concatenate rows
print(pd.concat([df1, df2]))

# Concatenate columns
print(pd.concat([df1, df2], axis=1))

# ============================================
# PIVOT TABLE - SANGAT PENTING untuk ANALISIS
# ============================================
df = pd.DataFrame({
    'Date': ['2024-01-01', '2024-01-01', '2024-01-02', '2024-01-02'],
    'Product': ['A', 'B', 'A', 'B'],
    'Sales': [100, 200, 150, 250]
})

pivot = df.pivot_table(values='Sales', index='Product', columns='Date', aggfunc='sum')
print(pivot)

# Multiple agg
pivot = df.pivot_table(values='Sales', index='Product', columns='Date', 
                       aggfunc=['sum', 'mean'])

# ============================================
# STRING OPERATIONS
# ============================================
df = pd.DataFrame({'Nama': ['budi  ', 'ALICE', 'charlie']})

df['Nama'] = df['Nama'].str.strip()      # Remove whitespace
df['Nama'] = df['Nama'].str.upper()      # Uppercase
df['Nama'] = df['Nama'].str.lower()      # Lowercase
df['Nama'] = df['Nama'].str.title()     # Title case

# Split string
df = pd.DataFrame({'Nama': ['Budi Santoso', 'Alice Wijaya']})
df[['First', 'Last']] = df['Nama'].str.split(' ', expand=True)

# Contains
df = pd.DataFrame({'Text': ['hello world', 'goodbye world', 'hello python']})
print(df[df['Text'].str.contains('hello')])

# ============================================
# DATETIME OPERATIONS (PENTING untuk Time Series ML)
# ============================================
df = pd.DataFrame({'Date': ['2024-01-01', '2024-01-02', '2024-01-03']})
df['Date'] = pd.to_datetime(df['Date'])

# Extract components
df['Year'] = df['Date'].dt.year
df['Month'] = df['Date'].dt.month
df['Day'] = df['Date'].dt.day
df['DayOfWeek'] = df['Date'].dt.dayofweek

# Resample (for time series)
df.set_index('Date').resample('M').sum()

# ============================================
# APPLY - CUSTOM FUNCTION (SANGAT FLEXIBLE)
# ============================================
df = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})

# Apply ke setiap element
print(df.apply(lambda x: x * 2))

# Apply ke setiap row
print(df.apply(lambda row: row.sum(), axis=1))

# Apply ke setiap column
print(df.apply(lambda col: col.max()))

# ============================================
# READ/WRITE FILES
# ============================================
# CSV
df.to_csv('data.csv', index=False)
df = pd.read_csv('data.csv')

# Excel
df.to_excel('data.xlsx', index=False)
df = pd.read_excel('data.xlsx')

# JSON
df.to_json('data.json', orient='records')
df = pd.read_json('data.json')

# Parquet (paling efficient untuk ML!)
df.to_parquet('data.parquet')
df = pd.read_parquet('data.parquet')

# ============================================
# PANDAS CHEAT SHEET
# ============================================
# Selection
df['col']              # Single column
df[['c1', 'c2']]      # Multiple columns
df.iloc[0]             # Row by position
df.loc['idx']          # Row by label

# Filtering
df[df['col'] > 5]     # Boolean mask
df.query('col > 5')  # Query string

# Aggregation
df.groupby('col').agg({'val': ['mean', 'sum']})

# Missing data
df.dropna()           # Drop missing
df.fillna(0)          # Fill missing

# Merge
pd.merge(df1, df2, on='key', how='left')
```

### 11.4 Matplotlib - Visualization untuk ML

Visualisasi penting untuk EDA (Exploratory Data Analysis):

```python
# ============================================
# MATPLOTLIB - VISUALIZATION
# ============================================
import matplotlib.pyplot as plt
import numpy as np

# Basic plot
plt.figure(figsize=(10, 6))
x = np.linspace(0, 10, 100)
y = np.sin(x)
plt.plot(x, y)
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Sin Wave')
plt.show()

# Subplots
fig, axes = plt.subplots(2, 2, figsize=(12, 8))
axes[0, 0].plot(x, np.sin(x))
axes[0, 1].plot(x, np.cos(x))
axes[1, 0].plot(x, np.tan(x))
axes[1, 1].plot(x, x**2)
plt.tight_layout()
plt.show()

# Scatter plot
plt.scatter(x, y, c=y, cmap='viridis')
plt.colorbar()
plt.show()

# Histogram
data = np.random.randn(1000)
plt.hist(data, bins=50, edgecolor='black')
plt.show()

# Bar chart
categories = ['A', 'B', 'C', 'D']
values = [10, 20, 15, 25]
plt.bar(categories, values)
plt.show()

# Heatmap (penting untuk korelasi ML!)
import seaborn as sns
data = np.random.rand(10, 10)
sns.heatmap(data, annot=True, cmap='coolwarm')
plt.show()
```

### 11.4 Jupyter/IPython - Interactive Computing

```python
# ============================================
# JUPYTER NOTEBOOK BASICS
# ============================================

# Installation
# pip install jupyter notebook

# Run
# jupyter notebook

# Basic magic commands
%matplotlib inline    # Inline plots
%timeit sum(range(1000))  # Benchmark

# Common cells
# pip install pandas numpy

# Markdown cell untuk dokumentasi
"""
# Heading 1
## Heading 2
**Bold** dan *italic*
- List item
"""
```

### 11.5 requests - HTTP Calls

```python
# ============================================
# REQUESTS - HTTP CLIENT
# ============================================
import requests

# GET request
response = requests.get("https://api.example.com/users")
print(response.status_code)
print(response.json())

# POST request
data = {"name": "Budi", "email": "budi@example.com"}
response = requests.post("https://api.example.com/users", json=data)

# Headers dan Authentication
headers = {"Authorization": "Bearer YOUR_TOKEN"}
response = requests.get("https://api.example.com/protected", headers=headers)

# Query parameters
params = {"page": 1, "limit": 10}
response = requests.get("https://api.example.com/users", params=params)

# Error handling
try:
    response = requests.get("https://api.example.com/users", timeout=5)
    response.raise_for_status()
except requests.RequestException as e:
    print(f"Request failed: {e}")
```

### 11.6 python-dotenv - Environment Variables

```python
# ============================================
# DOTENV - ENVIRONMENT VARIABLES
# ============================================
# pip install python-dotenv

# .env file
# OPENAI_API_KEY=sk-xxxx
# DATABASE_URL=postgres://...
# DEBUG=true

from dotenv import load_dotenv
import os

load_dotenv()  # Load dari .env file

api_key = os.getenv("OPENAI_API_KEY")
debug = os.getenv("DEBUG", "false")  # Default value

# Atau
from dotenv import dotenv_values
config = dotenv_values(".env")
print(config["OPENAI_API_KEY"])
```

### 11.7 logging - Application Logging

```python
# ============================================
# LOGGING - APPLICATION LOGGING
# ============================================
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('app.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

# Usage
logger.debug("Debug message")
logger.info("Info message")
logger.warning("Warning message")
logger.error("Error message")
logger.critical("Critical message")

# Exception logging
try:
    result = 10 / 0
except Exception as e:
    logger.exception(f"Error occurred: {e}")
```

---

## 12. Best Practices

### 12.1 PEP 8 Style Guide

```python
# ============================================
# PEP 8 - PYTHON STYLE GUIDE
# ============================================

# 1. Indentation - 4 spaces (bukan tab)
def func():
    pass

# 2. Line length - maks 79 karakter
# Good:
result = some_function_that_takes_arguments(
    'a', 'b', 'c',
    'd', 'e', 'f'
)

# 3. Blank lines
class MyClass:
    def method_one(self):
        pass
    
    def method_two(self):
        pass

# 4. Imports - each on separate line
# Good:
import os
import sys

# Bad:
import os, sys

# 5. Spaces around operators
# Good: x = 1; y = 2
# Bad: x=1; y=2

# 6. Naming conventions
variable_name = "snake_case"      # variabel
FUNCTION_NAME = "SCREAMING_SNAKE"  # konstanta
ClassName = "PascalCase"          # class
def function_name(): pass         # function
```

### 12.2 Entry Point - if __name__ == "__main__"

```python
# ============================================
# IF __NAME__ == "__MAIN__"
# ============================================
# File bisa di-import sebagai module
# atau di-run langsung sebagai script

def main():
    """Main function untuk dipanggil langsung"""
    print("Running main function...")
    # Main logic here

if __name__ == "__main__":
    main()

# Ketika di-import:
# python script.py          -> __name__ == "__main__" -> main() dipanggil
# import script             -> __name__ == "script" -> main() TIDAK dipanggil
```

### 12.3 Type Hints Best Practices

```python
# ============================================
# TYPE HINTS BEST PRACTICES
# ============================================
from typing import Optional, List, Dict, Union

# ✅ GOOD - Clear type hints
def process_data(
    data: List[int],
    config: Optional[Dict[str, str]] = None
) -> Dict[str, Union[int, str]]:
    ...

# ❌ BAD - Over-typed, harder to read
def func(x: int, y: int) -> int:
    return x + y

# ✅ Use type aliases untuk complex types
Vector: TypeAlias = List[float]
Matrix: TypeAlias = List[List[float]]

def normalize(vector: Vector) -> Vector:
    ...
```

### 12.4 Docstrings Best Practices

```python
# ============================================
# DOCSTRINGS BEST PRACTICES
# ============================================

def calculate_stats(numbers: List[float]) -> Dict[str, float]:
    """
    Calculate statistical measures dari list angka.
    
    Args:
        numbers: List of integers atau floats
        
    Returns:
        Dictionary dengan keys:
            - mean: Average value
            - median: Middle value
            - std: Standard deviation
    
    Raises:
        ValueError: Jika list kosong
        
    Example:
        >>> calculate_stats([1, 2, 3, 4, 5])
        {'mean': 3.0, 'median': 3.0, 'std': 1.41}
    """
    if not numbers:
        raise ValueError("Numbers list cannot be empty")
    
    mean = sum(numbers) / len(numbers)
    sorted_nums = sorted(numbers)
    n = len(sorted_nums)
    median = (sorted_nums[n//2 - 1] + sorted_nums[n//2]) / 2
    
    # Standard deviation calculation
    variance = sum((x - mean) ** 2 for x in numbers) / n
    std = variance ** 0.5
    
    return {"mean": mean, "median": median, "std": std}
```

---

## 13. Common Pitfalls dan Cara Menghindarinya

### 13.1 Mutable Default Arguments

```python
# ============================================
# ❌ SALAH - MUTABLE DEFAULT
# ============================================
def add_item(item, items=[]):  # ❌ DANGER!
    items.append(item)
    return items

print(add_item(1))  # [1]
print(add_item(2))  # [1, 2] - kenapa 1 masih ada?!

# ============================================
# ✅ BENAR - NONE DEFAULT
# ============================================
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item(1))  # [1]
print(add_item(2))  # [2] - Fresh list setiap call!
```

### 13.2 == vs is

```python
# ============================================
# == vs IS - KAPAN GUNAKAN YANG MANA?
# ============================================

# is - cek apakah objek yang SAMA (identity)
# == - cek apakah nilai SAMA (equality)

a = [1, 2, 3]
b = [1, 2, 3]

print(a == b)  # True - nilai sama
print(a is b)  # False - objek berbeda!

c = a
print(c is a)  # True - objek yang sama

# ✅ ALWAYS gunakan is untuk None, True, False
data = None
if data is None:  # ✅ Benar
    pass

if data == None:  # ❌ Working tapi tidak pythonic
    pass
```

### 13.3 String Concatenation

```python
# ============================================
# STRING CONCATENATION - PILIH YANG EFISIEN
# ============================================

# ❌ SLOW - untuk banyak concatenation
result = ""
for i in range(1000):
    result += str(i)

# ✅ FAST - join
parts = [str(i) for i in range(1000)]
result = "".join(parts)

# ✅ BEST - f-string (Python 3.6+)
name = "Budi"
age = 25
message = f"Nama: {name}, Umur: {age}"

# ❌ OLD - jangan gunakan
message = "Nama: %s, Umur: %d" % (name, age)
message = "Nama: {}, Umur: {}".format(name, age)
```

### 13.4 List append() vs concatenation

```python
# ============================================
# APPEND vs EXTEND vs + OPERATOR
# ============================================

# ✅ APPEND - tambah single element
nilai = [1, 2, 3]
nilai.append(4)      # [1, 2, 3, 4]

# ✅ EXTEND - tambah multiple elements
nilai = [1, 2, 3]
nilai.extend([4, 5])  # [1, 2, 3, 4, 5]

# ❌ SLOW - + membuat list baru
nilai = [1, 2, 3]
for i in range(10000):
    nilai = nilai + [i]  # ❌ Sangat lambat!

# ✅ FAST
nilai = [1, 2, 3]
for i in range(10000):
    nilai.append(i)  # ✅ Cepat
```

---

## 14. Indikator Proficiency - Checklist Penilaian Diri

Setelah mempelajari materi ini, Anda harus bisa:

### 14.1 Variabel dan Tipe Data
- [ ] Membuat dan menggunakan variabel dengan tipe yang tepat
- [ ] Melakukan konversi antar tipe data (int, float, str, bool)
- [ ] Memahami konsep mutability dan tahu kapan menggunakan list vs tuple
- [ ] Menggunakan None dengan benar untuk nilai kosong

#### Latihan 14.1: Variabel dan Tipe Data

**Level 1 - Pemula (Variabel Dasar)**
```python
# Latihan 1.1: Tukar nilai dua variabel
# Buat kode untuk menukar nilai variabel a dan b
a = 10
b = 20
# Output yang diharapkan: a = 20, b = 10

# Latihan 1.2: Konversi Tipe
# Konversi variabel-variabel berikut ke tipe yang tepat
nilai_string = "85"
harga_desimal = "15000.50"
boolean_string = "False"
# Output: nilai_int = 85, harga_float = 15000.50, bool_value = False

# Latihan 1.3: Type Checking
# Buat fungsi untuk mengecek tipe data
def cek_tipe(data):
    # Return string yang menjelaskan tipe data
    pass
# cek_tipe(42) -> "Integer"
# cek_tipe("Hello") -> "String"
# cek_tipe(True) -> "Boolean"
```

**Level 2 - Menengah (Mutability & None)**
```python
# Latihan 1.4: Immutable vs Mutable
# Jelaskan kenapa output berbeda

# Caso 1
list_a = [1, 2, 3]
list_b = list_a
list_b.append(4)
print(list_a)  # Apa outputnya? Kenapa?

# Caso 2
tuple_a = (1, 2, 3)
tuple_b = tuple_a
# tuple_b.append(4)  # Apakah bisa?
print(tuple_a)  # Apa yang terjadi?

# Latihan 1.5: Safe None Handling
# Buat fungsi yang handle None dengan aman
def proses_nilai(data):
    # Jika data None, return 0
    # Jika data string, konversi ke int
    # Jika data sudah int/float, return nilainya
    pass

# Output yang diharapkan:
# proses_nilai(None) -> 0
# proses_nilai("42") -> 42
# proses_nilai(85) -> 85
# proses_nilai(3.14) -> 3.14
```

**Level 3 - Mahir (Algoritma Sederhana)**
```python
# Latihan 1.6: FizzBuzz Variable Version
# Buat program FizzBuzz dengan aturan:
# - Jika habis dibagi 3: "Fizz"
# - Jika habis dibagi 5: "Buzz"
# - Jika habis dibagi 3 dan 5: "FizzBuzz"
# - Sebaliknya: angka itu sendiri
# Hint: Gunakan modulo operator (%)

def fizzbuzz(n):
    """Return string sesuai aturan FizzBuzz"""
    pass

# Test: fizzbuzz(15) -> "FizzBuzz"
# Test: fizzbuzz(9) -> "Fizz"
# Test: fizzbuzz(10) -> "Buzz"
# Test: fizzbuzz(7) -> "7"

# Latihan 1.7: Palindrome Checker
# Buat fungsi untuk cek apakah string adalah palindrome
# Palindrome: sama dibaca dari depan dan belakang
# Contoh: "radar", "level", "121"

def is_palindrome(text):
    """Return True jika palindrome, False jika bukan"""
    pass

# is_palindrome("radar") -> True
# is_palindrome("hello") -> False
# is_palindrome("A man a plan a canal Panama") -> True (ignore spaces & case)
```

**Solusi Latihan 14.1:**
```python
# Solusi 1.1: Tukar variabel
a = 10
b = 20
a, b = b, a  # Python way
# Atau cara tradisional:
# temp = a
# a = b
# b = temp

# Solusi 1.2: Konversi
nilai_int = int(nilai_string)
harga_float = float(harga_desimal)
bool_value = boolean_string.lower() == "true"

# Solusi 1.3: Type Checking
def cek_tipe(data):
    return type(data).__name__

# Solusi 1.4: Immutable vs Mutable
# Caso 1: Output [1, 2, 3, 4] karena list BUKAN COPY, tapi REFERENCE
# Caso 2: tuple_a tetap [1, 2, 3] karena tuple IMMUTABLE

# Solusi 1.5: Safe None
def proses_nilai(data):
    if data is None:
        return 0
    if isinstance(data, str):
        return float(data) if '.' in data else int(data)
    return data

# Solusi 1.6: FizzBuzz
def fizzbuzz(n):
    if n % 3 == 0 and n % 5 == 0:
        return "FizzBuzz"
    elif n % 3 == 0:
        return "Fizz"
    elif n % 5 == 0:
        return "Buzz"
    return str(n)

# Solusi 1.7: Palindrome
def is_palindrome(text):
    cleaned = ''.join(c.lower() for c in text if c.isalnum())
    return cleaned == cleaned[::-1]
```

### 14.2 Collections
- [ ] Memilih struktur data yang tepat: list, tuple, set, dict
- [ ] Melakukan operasi CRUD pada list dan dict
- [ ] Menggunakan list comprehension untuk transformasi data
- [ ] Memahami kapan menggunakan set untuk membership testing

#### Latihan 14.2: Collections - List, Tuple, Set, Dict

**Level 1 - Pemula (List Operations)**
```python
# Latihan 2.1: List CRUD
# Buat fungsi untuk operasi CRUD pada list

def add_item(items: list, item) -> list:
    """Tambah item ke list, return list baru"""
    pass

def remove_item(items: list, item) -> list:
    """Hapus item pertama dari list, return list baru"""
    pass

def update_item(items: list, index: int, new_value) -> list:
    """Update item di index tertentu"""
    pass

# Test:
# add_item([1, 2, 3], 4) -> [1, 2, 3, 4]
# remove_item([1, 2, 3, 2], 2) -> [1, 3, 2] (hapus yang pertama)
# update_item([1, 2, 3], 1, 10) -> [1, 10, 3]

# Latihan 2.2: List Manipulation
# Buat fungsi untuk memanipulasi list

def reverse_list(items: list) -> list:
    """Balik urutan list"""
    pass

def find_max_min(items: list) -> tuple:
    """Return (max, min) dari list"""
    pass

def remove_duplicates(items: list) -> list:
    """Hapus duplikat, pertahankan urutan"""
    pass

# reverse_list([1, 2, 3, 4]) -> [4, 3, 2, 1]
# find_max_min([5, 2, 8, 1, 9]) -> (9, 1)
# remove_duplicates([1, 2, 2, 3, 1, 4]) -> [1, 2, 3, 4]
```

**Level 2 - Menengah (Dict & Set)**
```python
# Latihan 2.3: Dictionary Operations
# Buat fungsi untuk operasi dictionary

def count_words(text: str) -> dict:
    """Hitung frekuensi setiap kata dalam text"""
    # Hint: Gunakan get() dengan default value
    pass

def merge_dicts(dict1: dict, dict2: dict) -> dict:
    """Gabungkan dua dictionary, dict2 overwrite dict1"""
    pass

def invert_dict(d: dict) -> dict:
    """Balik key-value dalam dictionary"""
    pass

# count_words("apple banana apple orange banana apple")
# -> {"apple": 3, "banana": 2, "orange": 1}

# merge_dicts({"a": 1, "b": 2}, {"b": 3, "c": 4})
# -> {"a": 1, "b": 3, "c": 4}

# invert_dict({"a": 1, "b": 2, "c": 3})
# -> {1: "a", 2: "b", 3: "c"}

# Latihan 2.4: Set Operations
# Buat fungsi untuk operasi set

def get_common_elements(set1: set, set2: set) -> set:
    """Return elemen yang ada di kedua set"""
    pass

def get_unique_in_first(set1: set, set2: set) -> set:
    """Return elemen yang hanya ada di set1, tidak di set2"""
    pass

def is_subset(set1: set, set2: set) -> bool:
    """Return True jika set1 adalah subset dari set2"""
    pass

# get_common_elements({1, 2, 3}, {2, 3, 4}) -> {2, 3}
# get_unique_in_first({1, 2, 3}, {2, 3, 4}) -> {1}
# is_subset({1, 2}, {1, 2, 3, 4}) -> True
```

**Level 3 - Mahir (List Comprehension & Nested Structures)**
```python
# Latihan 2.5: List Comprehension Mastery
# Ubah for loop berikut ke list comprehension

# Caso 1: Kuadrat semua angka
# for i in range(10):
#     if i % 2 == 0:
#         kuadrat.append(i ** 2)

# Caso 2: Filter dan transform
# for name in names:
#     if name.startswith("A"):
#         result.append(name.upper())

# Caso 3: Flatten matrix
# flat = []
# for row in matrix:
#     for num in row:
#         flat.append(num)

# Latihan 2.6: Nested Dictionary
# Buat struktur data untuk menyimpan informasi mahasiswa

def create_student(name: str, grades: list) -> dict:
    """Buat dict dengan struktur:
    {
        "nama": "...",
        "rata_rata": ...,
        "status": "Lulus"/"Tidak Lulus",
        "nilai_tertinggi": ...,
        "nilai_terendah": ...
    }
    """
    pass

# Hint: Gunakan dictionary comprehension juga!

# Test:
student = create_student("Budi", [85, 90, 78, 92, 88])
# {
#     "nama": "Budi",
#     "rata_rata": 86.6,
#     "status": "Lulus",  # >= 75
#     "nilai_tertinggi": 92,
#     "nilai_terendah": 78
# }

# Latihan 2.7: Two Sum Problem (Classic!)
# Buat fungsi untuk mencari dua angka yang jumlahnya target

def two_sum(numbers: list, target: int) -> tuple:
    """Return indeks dua angka yang jumlahnya = target"""
    # Hint: Gunakan dictionary untuk cache!
    pass

# two_sum([2, 7, 11, 15], 9) -> (0, 1) karena nums[0] + nums[1] = 9
# two_sum([3, 2, 4], 6) -> (1, 2) karena nums[1] + nums[2] = 6
```

**Level 4 - Expert (Algoritma Collections)**
```python
# Latihan 2.8: Group Anagrams
# Kelompokkan kata-kata yang adalah anagram (huruf sama, urutan berbeda)

def group_anagrams(words: list) -> list:
    """Return list of lists, setiap sublist adalah group anagram"""
    pass

# group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
# -> [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

# Hint: Gunakan tuple(sorted(word)) sebagai key!

# Latihan 2.9: Most Frequent Element
# Buat fungsi untuk mencari elemen paling sering

def most_frequent(items: list) -> tuple:
    """Return (elemen, jumlah) yang paling sering muncul"""
    # Jika ada tie, return yang pertama muncul
    pass

# most_frequent([1, 2, 3, 2, 1, 2, 3, 1]) -> (1, 3)
# most_frequent(["a", "b", "a", "c", "b"]) -> ("a", 2)

# Latihan 2.10: List Sorting Manual
# Buat fungsi sort TANPA menggunakan .sort() atau sorted()
# Gunakan Bubble Sort atau Selection Sort

def bubble_sort(items: list) -> list:
    """Sort list menggunakan Bubble Sort algorithm"""
    # Return list baru (tidak modify original)
    pass

# bubble_sort([64, 34, 25, 12, 22, 11, 90])
# -> [11, 12, 22, 25, 34, 64, 90]
```

**Solusi Latihan 14.2:**
```python
# Solusi 2.1: List CRUD
def add_item(items, item):
    return items + [item]

def remove_item(items, item):
    new_list = items.copy()
    new_list.remove(item)  # remove() hapus yang pertama
    return new_list

def update_item(items, index, new_value):
    new_list = items.copy()
    new_list[index] = new_value
    return new_list

# Solusi 2.2: List Manipulation
def reverse_list(items):
    return items[::-1]

def find_max_min(items):
    return (max(items), min(items))

def remove_duplicates(items):
    seen = set()
    return [x for x in items if not (x in seen or seen.add(x))]

# Solusi 2.3: Dictionary Operations
def count_words(text):
    words = text.split()
    freq = {}
    for word in words:
        freq[word] = freq.get(word, 0) + 1
    return freq

def merge_dicts(dict1, dict2):
    return {**dict1, **dict2}

def invert_dict(d):
    return {v: k for k, v in d.items()}

# Solusi 2.4: Set Operations
def get_common_elements(set1, set2):
    return set1 & set2

def get_unique_in_first(set1, set2):
    return set1 - set2

def is_subset(set1, set2):
    return set1.issubset(set2)

# Solusi 2.7: Two Sum
def two_sum(numbers, target):
    seen = {}  # value -> index
    for i, num in enumerate(numbers):
        complement = target - num
        if complement in seen:
            return (seen[complement], i)
        seen[num] = i
    return None

# Solusi 2.8: Group Anagrams
def group_anagrams(words):
    groups = {}
    for word in words:
        key = tuple(sorted(word))
        if key not in groups:
            groups[key] = []
        groups[key].append(word)
    return list(groups.values())

# Solusi 2.9: Most Frequent
def most_frequent(items):
    freq = {}
    for item in items:
        freq[item] = freq.get(item, 0) + 1
    return max(freq.items(), key=lambda x: x[1])

# Solusi 2.10: Bubble Sort
def bubble_sort(items):
    result = items.copy()
    n = len(result)
    for i in range(n):
        for j in range(0, n-i-1):
            if result[j] > result[j+1]:
                result[j], result[j+1] = result[j+1], result[j]
    return result
```

### 14.3 Control Flow
- [ ] Menulis conditional logic dengan if/elif/else
- [ ] Melakukan iteration dengan for dan while loop
- [ ] Menggunakan enumerate dan zip untuk iterasi kompleks
- [ ] Menggunakan break, continue, dan pass dengan tepat

#### Latihan 14.3: Control Flow - Logic & Loops

**Level 1 - Pemula (Conditional Logic)**
```python
# Latihan 3.1: Grade Calculator
# Buat fungsi untuk menghitung grade dari nilai

def calculate_grade(nilai: int) -> str:
    """Return grade berdasarkan nilai:
    90-100: A
    80-89: B
    70-79: C
    60-69: D
    0-59: F
    """
    pass

# calculate_grade(95) -> "A"
# calculate_grade(82) -> "B"
# calculate_grade(65) -> "D"
# calculate_grade(45) -> "F"

# Latihan 3.2: Leap Year Checker
# Buat fungsi untuk cek tahun kabisat

def is_leap_year(year: int) -> bool:
    """Return True jika tahun kabisat
    Kabisat jika:
    - Habis dibagi 4 DAN
    - TIDAK habis dibagi 100 ATAU habis dibagi 400
    """
    pass

# is_leap_year(2024) -> True
# is_leap_year(1900) -> False
# is_leap_year(2000) -> True
# is_leap_year(2023) -> False

# Latihan 3.3: Simple Calculator
# Buat fungsi kalkulator sederhana

def calculate(a: float, b: float, operation: str) -> float:
    """Operasi: 'add', 'subtract', 'multiply', 'divide'
    Handle division by zero!
    """
    pass

# calculate(10, 5, 'add') -> 15
# calculate(10, 5, 'subtract') -> 5
# calculate(10, 5, 'multiply') -> 50
# calculate(10, 0, 'divide') -> "Error: Division by zero"
```

**Level 2 - Menengah (Loops & Iteration)**
```python
# Latihan 3.4: Number Patterns
# Buat fungsi untuk print patterns

def print_triangle(n: int) -> str:
    """Print triangle pattern:
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
    """
    pass

def print_number_pyramid(n: int) -> str:
    """Print pyramid pattern:
       1
      1 2 1
    1 2 3 2 1
    """
    pass

# Latihan 3.5: Find Prime Numbers
# Buat fungsi untuk cari semua prime dalam range

def find_primes(start: int, end: int) -> list:
    """Return list semua bilangan prima dalam range [start, end]"""
    pass

# find_primes(10, 30) -> [11, 13, 17, 19, 23, 29]

# Latihan 3.6: Fibonacci Sequence
# Buat fungsi untuk generate Fibonacci

def fibonacci(n: int) -> list:
    """Return list n bilangan Fibonacci pertama
    Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21...
    """
    pass

# fibonacci(10) -> [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

**Level 3 - Mahir (Loop Control & Complex Logic)**
```python
# Latihan 3.7: Prime Factorization
# Buat fungsi untuk faktorisasi prima

def prime_factors(n: int) -> list:
    """Return list faktor prima dari n
    Hint: Gunakan while loop dan bagi dengan faktor terkecil
    """
    pass

# prime_factors(12) -> [2, 2, 3]
# prime_factors(100) -> [2, 2, 5, 5]
# prime_factors(17) -> [17]

# Latihan 3.8: Pascal's Triangle
# Buat fungsi untuk generate Pascal's Triangle

def pascal_triangle(rows: int) -> list:
    """Return list of lists Pascal's Triangle
    Row 1:     1
    Row 2:    1 1
    Row 3:   1 2 1
    Row 4:  1 3 3 1
    """
    pass

# pascal_triangle(5)
# [
#     [1],
#     [1, 1],
#     [1, 2, 1],
#     [1, 3, 3, 1],
#     [1, 4, 6, 4, 1]
# ]

# Latihan 3.9: Word Counter with enumerate
# Buat fungsi untuk hitung kata, tapi sertakan nomor baris

def count_words_with_line(text: str) -> list:
    """Return list of tuples (line_number, word_count)"""
    pass

# text = "Hello world\nPython is great\nI love coding"
# -> [(1, 2), (2, 3), (3, 3)]
```

**Level 4 - Expert (Algorithmic Challenges)**
```python
# Latihan 3.10: Binary Search
# Buat fungsi binary search

def binary_search(arr: list, target: int) -> int:
    """Return indeks target dalam arr yang sudah ter-sort
    Return -1 jika tidak ditemukan
    Hint: Bagi dua terus!
    """
    pass

# binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 5) -> 4
# binary_search([1, 2, 3, 4, 5], 10) -> -1

# Latihan 3.11: GCD (Greatest Common Divisor)
# Buat fungsi untuk cari FPB (Faktor Persekutuan Terbesar)

def gcd(a: int, b: int) -> int:
    """Return FPB dari a dan b
    Hint: Gunakan Euclidean Algorithm
    """
    pass

# gcd(48, 18) -> 6
# gcd(100, 25) -> 25
# gcd(17, 13) -> 1

# Latihan 3.12: Power Function
# Buat fungsi power TANPA pakai ** atau pow()

def power(base: float, exponent: int) -> float:
    """Return base ^ exponent
    Handle exponent negatif!
    """
    pass

# power(2, 10) -> 1024
# power(2, -3) -> 0.125
# power(5, 0) -> 1
```

**Solusi Latihan 14.3:**
```python
# Solusi 3.1: Grade Calculator
def calculate_grade(nilai):
    if nilai >= 90:
        return "A"
    elif nilai >= 80:
        return "B"
    elif nilai >= 70:
        return "C"
    elif nilai >= 60:
        return "D"
    else:
        return "F"

# Solusi 3.2: Leap Year
def is_leap_year(year):
    return (year % 4 == 0) and (year % 100 != 0 or year % 400 == 0)

# Solusi 3.3: Calculator
def calculate(a, b, operation):
    if operation == 'add':
        return a + b
    elif operation == 'subtract':
        return a - b
    elif operation == 'multiply':
        return a * b
    elif operation == 'divide':
        if b == 0:
            return "Error: Division by zero"
        return a / b
    else:
        return "Invalid operation"

# Solusi 3.5: Find Primes
def find_primes(start, end):
    primes = []
    for num in range(start, end + 1):
        if num > 1:
            for i in range(2, int(num**0.5) + 1):
                if num % i == 0:
                    break
            else:
                primes.append(num)
    return primes

# Solusi 3.6: Fibonacci
def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    
    fib = [0, 1]
    while len(fib) < n:
        fib.append(fib[-1] + fib[-2])
    return fib

# Solusi 3.7: Prime Factors
def prime_factors(n):
    factors = []
    divisor = 2
    while n > 1:
        while n % divisor == 0:
            factors.append(divisor)
            n = n // divisor
        divisor += 1
    return factors

# Solusi 3.10: Binary Search
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Solusi 3.11: GCD (Euclidean Algorithm)
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

# Solusi 3.12: Power Function
def power(base, exponent):
    if exponent == 0:
        return 1
    if exponent < 0:
        base = 1 / base
        exponent = -exponent
    
    result = 1
    for _ in range(exponent):
        result *= base
    return result
```

### 14.4 Functions
- [ ] Mendefinisikan fungsi dengan parameter dan return value
- [ ] Memahami *args dan **kwargs
- [ ] Menulis lambda functions untuk operasi sederhana
- [ ] Menggunakan type hints untuk readability

#### Latihan 14.4: Functions - Parameters, Return, Lambdas

**Level 1 - Pemula (Basic Functions)**
```python
# Latihan 4.1: Function dengan Multiple Parameters
# Buat fungsi kalkulasi statistik sederhana

def calculate_stats(numbers: list) -> dict:
    """Return dict dengan:
    - 'total': jumlah semua angka
    - 'count': jumlah angka
    - 'average': rata-rata
    """
    pass

# calculate_stats([10, 20, 30, 40, 50])
# -> {'total': 150, 'count': 5, 'average': 30.0}

# Latihan 4.2: Function dengan Default Parameter
# Buat fungsi greeting dengan default

def greet(name: str, greeting: str = "Halo", punctuation: str = "!") -> str:
    """Return string greeting dengan format:
    '{greeting}, {name}{punctuation}'
    """
    pass

# greet("Budi") -> "Halo, Budi!"
# greet("Alice", "Selamat pagi") -> "Selamat pagi, Alice!"
# greet("Bob", "Hi", ".") -> "Hi, Bob."
```

**Level 2 - Menengah (*args & **kwargs)**
```python
# Latihan 4.3: *args - Variable Arguments
# Buat fungsi untuk menghitung total dan rata-rata

def calculate_total_average(*args: float) -> tuple:
    """Terima jumlah argumen tak terbatas
    Return (total, average)
    """
    pass

# calculate_total_average(10, 20, 30) -> (60, 20.0)
# calculate_total_average(5, 10, 15, 20, 25) -> (75, 15.0)
# calculate_total_average() -> (0, 0)

# Latihan 4.4: **kwargs - Keyword Arguments
# Buat fungsi untuk membuat student profile

def create_profile(**kwargs) -> dict:
    """Terima keyword arguments
    Return dictionary dengan semua info
    """
    pass

# create_profile(name="Budi", age=25, major="Informatika")
# -> {'name': 'Budi', 'age': 25, 'major': 'Informatika'}

# Latihan 4.5: Kombinasi *args dan **kwargs
# Buat fungsi untuk print receipt

def print_receipt(title: str, *items, **details):
    """Print receipt dengan format:
    === {title} ===
    Items: {items}
    Details: {details}
    """
    pass

# print_receipt("Pembayaran", "Buku", "Pulpen", method="Transfer", status="Lunas")
```

**Level 3 - Mahir (Lambda & Higher-Order Functions)**
```python
# Latihan 4.6: Lambda Basics
# Ubah fungsi berikut ke lambda

# Fungsi 1:
# def kuadrat(x):
#     return x ** 2

# Fungsi 2:
# def tambah(a, b):
#     return a + b

# Fungsi 3:
# def is_genap(x):
#     return x % 2 == 0

# Latihan 4.7: Lambda dengan built-in functions
# Selesaikan dengan map(), filter(), sorted()

numbers = [5, 2, 8, 1, 9, 3, 7, 4, 6]

# 4.7a: Kuadratkan semua angka
# -> [25, 4, 64, 1, 81, 9, 49, 16, 36]

# 4.7b: Filter angka genap saja
# -> [2, 8, 4, 6]

# 4.7c: Sort berdasarkan kuadrat
# -> [1, 4, 4, 9, 16, 25, 36, 49, 64]

# Latihan 4.8: Lambda dengan custom sorting
# Sort list berikut dengan multiple criteria

students = [
    {"name": "Alice", "score": 85, "age": 22},
    {"name": "Bob", "score": 90, "age": 20},
    {"name": "Charlie", "score": 85, "age": 23},
    {"name": "Diana", "score": 90, "age": 21},
]

# 4.8a: Sort by score descending
# -> Bob(90), Diana(90), Alice(85), Charlie(85)

# 4.8b: Sort by score desc, lalu age asc
# -> Diana(90,21), Bob(90,20), Alice(85,22), Charlie(85,23)
```

**Level 4 - Expert (Decorators & Advanced Functions)**
```python
# Latihan 4.9: Simple Decorator
# Buat decorator untuk logging function calls

def log_call(func):
    """Decorator yang print nama fungsi dan args sebelum dipanggil"""
    pass

@log_call
def add(a, b):
    return a + b

# add(5, 3)
# Output:
# Calling: add with args=(5, 3), kwargs={}
# Result: 8

# Latihan 4.10: Function Composition
# Buat fungsi untuk compose multiple functions

def compose(*funcs):
    """Return fungsi baru yang compose semua fungsi
    compose(f, g)(x) = f(g(x))
    """
    pass

# double = lambda x: x * 2
# square = lambda x: x ** 2
# triple = lambda x: x * 3

# composed = compose(double, square)
# composed(5) -> double(square(5)) -> double(25) -> 50

# compose(double, square, triple)(2)
# -> double(square(triple(2)))
# -> double(square(6)) -> double(36) -> 72

# Latihan 4.11: Memoization (Cache)
# Buat decorator untuk cache hasil fungsi

def memoize(func):
    """Decorator yang cache hasil fungsi
    Hint: Gunakan dictionary
    """
    pass

@memoize
def fibonacci(n):
    """Fibonacci dengan memoization"""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# fibonacci(10) akan sangat cepat karena di-cache!
```

**Solusi Latihan 14.4:**
```python
# Solusi 4.1: Calculate Stats
def calculate_stats(numbers):
    return {
        'total': sum(numbers),
        'count': len(numbers),
        'average': sum(numbers) / len(numbers) if numbers else 0
    }

# Solusi 4.2: Greeting
def greet(name, greeting="Halo", punctuation="!"):
    return f"{greeting}, {name}{punctuation}"

# Solusi 4.3: *args
def calculate_total_average(*args):
    if not args:
        return (0, 0)
    total = sum(args)
    avg = total / len(args)
    return (total, avg)

# Solusi 4.4: **kwargs
def create_profile(**kwargs):
    return kwargs

# Solusi 4.7: Lambda dengan built-ins
numbers = [5, 2, 8, 1, 9, 3, 7, 4, 6]

# 4.7a
kuadrat = list(map(lambda x: x**2, numbers))

# 4.7b
genap = list(filter(lambda x: x % 2 == 0, numbers))

# 4.7c
sorted_by_kuadrat = sorted(numbers, key=lambda x: x**2)

# Solusi 4.8: Custom Sorting
# 4.8a
by_score = sorted(students, key=lambda x: x['score'], reverse=True)

# 4.8b
by_score_age = sorted(students, key=lambda x: (-x['score'], x['age']))

# Solusi 4.9: Logger Decorator
def log_call(func):
    def wrapper(*args, **kwargs):
        print(f"Calling: {func.__name__} with args={args}, kwargs={kwargs}")
        result = func(*args, **kwargs)
        print(f"Result: {result}")
        return result
    return wrapper

# Solusi 4.10: Function Composition
def compose(*funcs):
    def composed(x):
        result = x
        for func in reversed(funcs):
            result = func(result)
        return result
    return composed

# Solusi 4.11: Memoization
def memoize(func):
    cache = {}
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return wrapper
```

### 14.5 Error Handling
- [ ] Menangkap dan menangani exception dengan try/except
- [ ] Membuat custom exception classes
- [ ] Menggunakan else dan finally blocks
- [ ] Memahami common exception types

#### Latihan 14.5: Error Handling - Try/Except & Custom Exceptions

**Level 1 - Pemula (Basic Exception Handling)**
```python
# Latihan 5.1: Safe Division
# Buat fungsi division yang handle error

def safe_divide(a: float, b: float) -> float:
    """Bagi a dengan b, return string error jika gagal"""
    pass

# safe_divide(10, 2) -> 5.0
# safe_divide(10, 0) -> "Error: Tidak bisa bagi dengan nol"
# safe_divide("10", 2) -> "Error: Input harus angka"

# Latihan 5.2: Safe Type Conversion
# Buat fungsi yang aman mengkonversi string ke number

def safe_convert(value: str) -> dict:
    """Konversi string ke int atau float
    Return {'success': True, 'value': ...} jika berhasil
    Return {'success': False, 'error': '...'} jika gagal
    """
    pass

# safe_convert("42") -> {'success': True, 'value': 42}
# safe_convert("3.14") -> {'success': True, 'value': 3.14}
# safe_convert("abc") -> {'success': False, 'error': 'Invalid number format'}
```

**Level 2 - Menengah (Multiple Exceptions & Custom Classes)**
```python
# Latihan 5.3: Multiple Exception Types
# Buat fungsi yang handle berbagai exception

def parse_user_data(data: dict) -> str:
    """Parse user data dengan validation
    Handle:
    - KeyError jika field tidak ada
    - TypeError jika tipe salah
    - ValueError jika nilai tidak valid
    """
    pass

# Test cases
parse_user_data({"name": "Budi", "age": 25})  # Berhasil
parse_user_data({"name": "Budi"})  # KeyError: 'age'
parse_user_data({"name": "Budi", "age": "25"})  # TypeError: age must be int
parse_user_data({"name": "Budi", "age": -5})  # ValueError: age must be positive

# Latihan 5.4: Custom Exception Class
# Buat custom exception untuk validasi form

class ValidationError(Exception):
    """Exception untuk validasi form"""
    pass

class FormValidator:
    def validate_email(self, email: str) -> bool:
        """Email harus mengandung @"""
        pass
    
    def validate_age(self, age: int) -> bool:
        """Age harus 0-150"""
        pass
    
    def validate_name(self, name: str) -> bool:
        """Name tidak boleh kosong"""
        pass
    
    def register(self, name: str, email: str, age: int):
        """Register dengan validasi lengkap
        Raise ValidationError jika ada yang salah
        """
        pass
```

**Level 3 - Mahir (Else, Finally, Complex Scenarios)**
```python
# Latihan 5.5: File Processing with Error Handling
# Buat fungsi untuk membaca dan memproses file

def read_and_process_file(filename: str) -> dict:
    """Baca file dan return statistics
    Handle:
    - FileNotFoundError
    - PermissionError
    - EmptyFileError (custom) jika file kosong
    """
    pass

# Hint: Gunakan else untuk proses jika berhasil
# Hint: Gunakan finally untuk cleanup

# Latihan 5.6: Retry Mechanism
# Buat fungsi yang retry jika gagal

def retry_operation(func, max_attempts=3, delay=1):
    """Jalankan func, retry jika gagal
    Return result jika berhasil dalam max_attempts
    Raise exception terakhir jika gagal semua
    """
    pass

# Contoh penggunaan:
# retry_operation(lambda: int("abc")) -> Gagal 3x, raise ValueError

# Latihan 5.7: Context Manager untuk Error Logging
# Buat context manager untuk logging errors

from contextlib import contextmanager

@contextmanager
def error_logger():
    """Context manager yang:
    - Catch semua exception
    - Log error message
    - Reraise exception
    - Selalu print 'Cleanup'
    """
    pass

# Usage:
# with error_logger():
#     result = 10 / 0  # Log error, raise exception
```

**Level 4 - Expert (Real-world Error Handling)**
```python
# Latihan 5.8: API Response Handler
# Buat kelas untuk handle API responses

class APIError(Exception):
    """Custom exception untuk API errors"""
    def __init__(self, status_code: int, message: str):
        self.status_code = status_code
        super().__init__(message)

class APIResponseHandler:
    def handle_response(self, response):
        """Process HTTP response
        Handle:
        - 200: Success, return data
        - 400: Bad Request
        - 401: Unauthorized
        - 404: Not Found
        - 500: Server Error
        - Network error (ConnectionError, Timeout)
        """
        pass

# Latihan 5.9: Validation Pipeline
# Buat sistem validasi dengan chain of responsibility pattern

class Validator:
    """Base validator class"""
    def __init__(self):
        self.next_validator = None
    
    def set_next(self, validator):
        self.next_validator = validator
        return validator
    
    def validate(self, data):
        """Override di subclass"""
        if self.next_validator:
            return self.next_validator.validate(data)
        return True

class EmailValidator(Validator):
    def validate(self, data):
        if '@' not in data.get('email', ''):
            raise ValueError("Invalid email")
        return super().validate(data)

class AgeValidator(Validator):
    def validate(self, data):
        age = data.get('age', 0)
        if not isinstance(age, int) or age < 0 or age > 150:
            raise ValueError("Invalid age")
        return super().validate(data)

# Usage:
# validator = EmailValidator()
# validator.set_next(AgeValidator())
# validator.validate({"email": "test@example.com", "age": 25})  # True
```

**Solusi Latihan 14.5:**
```python
# Solusi 5.1: Safe Division
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: Tidak bisa bagi dengan nol"
    except (TypeError, ValueError):
        return "Error: Input harus angka"

# Solusi 5.2: Safe Convert
def safe_convert(value):
    try:
        # Coba int dulu
        if '.' in value:
            return {'success': True, 'value': float(value)}
        return {'success': True, 'value': int(value)}
    except ValueError:
        return {'success': False, 'error': 'Invalid number format'}

# Solusi 5.3: Parse User Data
def parse_user_data(data):
    try:
        name = data['name']
        age = data['age']
        
        if not isinstance(age, int):
            raise TypeError("Age must be an integer")
        if age < 0:
            raise ValueError("Age must be positive")
        
        return f"User: {name}, Age: {age}"
    except KeyError as e:
        raise KeyError(f"Missing field: {e}")

# Solusi 5.5: File Processing
class EmptyFileError(Exception):
    """Custom exception for empty files"""
    pass

def read_and_process_file(filename):
    try:
        with open(filename, 'r') as f:
            content = f.read()
        
        if not content.strip():
            raise EmptyFileError(f"File {filename} is empty")
        
        lines = content.splitlines()
        words = content.split()
        
        return {
            'filename': filename,
            'lines': len(lines),
            'words': len(words),
            'characters': len(content)
        }
    except FileNotFoundError:
        return {'error': f"File {filename} not found"}
    except PermissionError:
        return {'error': f"No permission to read {filename}"}
    finally:
        print("Cleanup completed")

# Solusi 5.6: Retry Mechanism
import time

def retry_operation(func, max_attempts=3, delay=1):
    last_error = None
    for attempt in range(max_attempts):
        try:
            return func()
        except Exception as e:
            last_error = e
            if attempt < max_attempts - 1:
                time.sleep(delay)
    
    raise last_error

# Solusi 5.7: Error Logger
@contextmanager
def error_logger():
    try:
        yield
    except Exception as e:
        print(f"Error logged: {type(e).__name__}: {e}")
        raise
    finally:
        print("Cleanup")
```

### 14.6 OOP
- [ ] Membuat class dengan attributes dan methods
- [ ] Mengimplementasikan inheritance dan polymorphism
- [ ] Menggunakan dataclass untuk data objects
- [ ] Menggunakan @property untuk encapsulation

#### Latihan 14.6: Object-Oriented Programming - Classes, Inheritance, Properties

**Level 1 - Pemula (Basic Class)**
```python
# Latihan 6.1: Student Class
# Buat class Student dengan attributes dan methods

class Student:
    """Class untuk merepresentasikan Student"""
    
    def __init__(self, name: str, student_id: str):
        """Initialize student dengan name dan id"""
        pass
    
    def get_info(self) -> str:
        """Return string info student"""
        pass
    
    def update_score(self, subject: str, score: float):
        """Update score untuk subject"""
        pass
    
    def get_average(self) -> float:
        """Return rata-rata semua scores"""
        pass

# Usage:
student = Student("Budi", "S12345")
student.update_score("Math", 85)
student.update_score("English", 90)
print(student.get_info())
print(f"Average: {student.get_average()}")
```

**Level 2 - Menengah (Class Methods & Properties)**
```python
# Latihan 6.2: Bank Account dengan Properties
# Buat class BankAccount dengan encapsulation

class BankAccount:
    """Bank account dengan encapsulation"""
    
    def __init__(self, account_number: str, initial_balance: float = 0):
        self._account_number = account_number
        self._balance = initial_balance
    
    # Property untuk balance (read-only dari luar)
    @property
    def balance(self):
        """Return current balance"""
        pass
    
    # Property untuk account_number
    @property
    def account_number(self):
        """Return masked account number (hanya 4 digit terakhir)"""
        pass
    
    def deposit(self, amount: float):
        """Deposit uang, raise error jika negatif"""
        pass
    
    def withdraw(self, amount: float):
        """Withdraw uang, raise error jika insufficient atau negatif"""
        pass

# Usage:
account = BankAccount("1234567890", 1000)
print(account.balance)           # 1000
print(account.account_number)    # "****67890"
account.deposit(500)            # Balance: 1500
account.withdraw(300)           # Balance: 1200
# account.balance = 9999         # Error! Can't set

# Latihan 6.3: Class Methods
# Extend Student class dengan class methods

class Student:
    def __init__(self, name: str, student_id: str):
        self.name = name
        self.student_id = student_id
        self._enrolled_courses = []
    
    @classmethod
    def from_string(cls, student_string: str):
        """Create Student dari string format: 'Nama#ID'"""
        pass
    
    @classmethod
    def create_demo_student(cls):
        """Create student demo untuk testing"""
        pass
    
    def enroll_course(self, course: str):
        """Enroll ke course"""
        pass

# Usage:
s1 = Student.from_string("Budi#S12345")
s2 = Student.create_demo_student()
```

**Level 3 - Mahir (Inheritance & Polymorphism)**
```python
# Latihan 6.4: Shape Hierarchy
# Buat class hierarchy untuk berbagai bentuk

class Shape:
    """Base class untuk semua shapes"""
    def __init__(self, name: str):
        self.name = name
    
    def area(self) -> float:
        """Calculate area - override di subclass"""
        raise NotImplementedError
    
    def perimeter(self) -> float:
        """Calculate perimeter - override di subclass"""
        raise NotImplementedError

class Rectangle(Shape):
    """Rectangle dengan width dan height"""
    def __init__(self, width: float, height: float):
        super().__init__("Rectangle")
        self.width = width
        self.height = height
    
    def area(self) -> float:
        """Area = width * height"""
        pass
    
    def perimeter(self) -> float:
        """Perimeter = 2 * (width + height)"""
        pass

class Circle(Shape):
    """Circle dengan radius"""
    def __init__(self, radius: float):
        super().__init__("Circle")
        self.radius = radius
    
    def area(self) -> float:
        """Area = π * r²"""
        pass
    
    def perimeter(self) -> float:
        """Circumference = 2 * π * r"""
        pass

class Triangle(Shape):
    """Triangle dengan 3 sides"""
    def __init__(self, a: float, b: float, c: float):
        super().__init__("Triangle")
        self.a = a
        self.b = b
        self.c = c
    
    def area(self) -> float:
        """Gunakan Heron's formula"""
        pass
    
    def perimeter(self) -> float:
        pass

# Usage - Polymorphism:
shapes = [Rectangle(5, 3), Circle(4), Triangle(3, 4, 5)]
for shape in shapes:
    print(f"{shape.name}: Area = {shape.area():.2f}, Perimeter = {shape.perimeter():.2f}")
```

**Level 4 - Expert (Dataclasses & Complex Patterns)**
```python
# Latihan 6.5: Product Inventory dengan Dataclass
# Buat sistem inventory menggunakan dataclass

from dataclasses import dataclass, field
from typing import List
from datetime import datetime

@dataclass
class Product:
    """Dataclass untuk Product"""
    name: str
    price: float
    quantity: int
    product_id: str
    created_at: datetime = field(default_factory=datetime.now)
    
    @property
    def total_value(self) -> float:
        """Total value = price * quantity"""
        pass
    
    def is_affordable(self, budget: float) -> bool:
        """Check apakah product affordable dengan budget"""
        pass
    
    def __post_init__(self):
        """Validation setelah init"""
        if self.price < 0:
            raise ValueError("Price cannot be negative")
        if self.quantity < 0:
            raise ValueError("Quantity cannot be negative")

@dataclass
class Inventory:
    """Inventory manager untuk products"""
    products: List[Product] = field(default_factory=list)
    
    def add_product(self, product: Product):
        """Tambah product ke inventory"""
        pass
    
    def remove_product(self, product_id: str):
        """Remove product by ID"""
        pass
    
    def get_total_value(self) -> float:
        """Total value semua products"""
        pass
    
    def find_by_name(self, name: str) -> List[Product]:
        """Find products by name (case-insensitive)"""
        pass

# Usage:
inv = Inventory()
inv.add_product(Product("Laptop", 15000000, 5, "P001"))
inv.add_product(Product("Mouse", 250000, 50, "P002"))
print(f"Total Value: Rp{inv.get_total_value():,.0f}")

# Latihan 6.6: Payment System dengan Multiple Inheritance
# Buat payment system dengan berbagai payment methods

class PaymentMethod:
    """Base class untuk payment methods"""
    def process_payment(self, amount: float) -> bool:
        raise NotImplementedError

class CreditCard(PaymentMethod):
    def __init__(self, card_number: str, cvv: str):
        self.card_number = card_number
        self.cvv = cvv
    
    def process_payment(self, amount):
        """Process credit card payment"""
        pass

class BankTransfer(PaymentMethod):
    def __init__(self, account_number: str, bank_name: str):
        self.account_number = account_number
        self.bank_name = bank_name
    
    def process_payment(self, amount):
        """Process bank transfer"""
        pass

class PaymentProcessor:
    """Process payments dengan berbagai methods"""
    def process(self, payment_method: PaymentMethod, amount: float):
        """Process payment using given method"""
        pass

# Usage:
processor = PaymentProcessor()
processor.process(CreditCard("1234567890", "123"), 500000)
processor.process(BankTransfer("9876543210", "BCA"), 1000000)
```

**Solusi Latihan 14.6:**
```python
# Solusi 6.1: Student Class
class Student:
    def __init__(self, name: str, student_id: str):
        self.name = name
        self.student_id = student_id
        self._scores = {}
    
    def get_info(self) -> str:
        return f"Student: {self.name} (ID: {self.student_id})"
    
    def update_score(self, subject: str, score: float):
        self._scores[subject] = score
    
    def get_average(self) -> float:
        if not self._scores:
            return 0.0
        return sum(self._scores.values()) / len(self._scores)

# Solusi 6.2: Bank Account
class BankAccount:
    def __init__(self, account_number: str, initial_balance: float = 0):
        self._account_number = account_number
        self._balance = initial_balance
    
    @property
    def balance(self):
        return self._balance
    
    @property
    def account_number(self):
        return "*" * 4 + self._account_number[-6:]
    
    def deposit(self, amount: float):
        if amount < 0:
            raise ValueError("Amount cannot be negative")
        self._balance += amount
    
    def withdraw(self, amount: float):
        if amount < 0:
            raise ValueError("Amount cannot be negative")
        if amount > self._balance:
            raise ValueError("Insufficient balance")
        self._balance -= amount

# Solusi 6.3: Class Methods
class Student:
    def __init__(self, name: str, student_id: str):
        self.name = name
        self.student_id = student_id
        self._enrolled_courses = []
    
    @classmethod
    def from_string(cls, student_string: str):
        name, student_id = student_string.split('#')
        return cls(name, student_id)
    
    @classmethod
    def create_demo_student(cls):
        return cls("Demo Student", "DEMO001")
    
    def enroll_course(self, course: str):
        self._enrolled_courses.append(course)

# Solusi 6.4: Shape Hierarchy
class Shape:
    def area(self):
        raise NotImplementedError
    def perimeter(self):
        raise NotImplementedError

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2
    
    def perimeter(self):
        return 2 * 3.14159 * self.radius

class Triangle(Shape):
    def __init__(self, a, b, c):
        self.a, self.b, self.c = a, b, c
    
    def area(self):
        s = (self.a + self.b + self.c) / 2
        return (s * (s-self.a) * (s-self.b) * (s-self.c)) ** 0.5
    
    def perimeter(self):
        return self.a + self.b + self.c

# Solusi 6.5: Product Dataclass
@dataclass
class Product:
    name: str
    price: float
    quantity: int
    product_id: str
    created_at: datetime = field(default_factory=datetime.now)
    
    @property
    def total_value(self):
        return self.price * self.quantity
    
    def is_affordable(self, budget: float):
        return self.price <= budget
    
    def __post_init__(self):
        if self.price < 0:
            raise ValueError("Price cannot be negative")

# Solusi 6.6: Payment System
class PaymentMethod:
    def process_payment(self, amount: float) -> bool:
        raise NotImplementedError

class CreditCard(PaymentMethod):
    def __init__(self, card_number: str, cvv: str):
        self.card_number = card_number
        self.cvv = cvv
    
    def process_payment(self, amount: float):
        print(f"Processing credit card payment: Rp{amount:,.0f}")
        return True

class BankTransfer(PaymentMethod):
    def __init__(self, account_number: str, bank_name: str):
        self.account_number = account_number
        self.bank_name = bank_name
    
    def process_payment(self, amount: float):
        print(f"Processing bank transfer to {self.bank_name}: Rp{amount:,.0f}")
        return True

class PaymentProcessor:
    def process(self, payment_method: PaymentMethod, amount: float):
        return payment_method.process_payment(amount)
```

### 14.7 File Operations
- [ ] Membaca dan menulis file teks dan CSV
- [ ] Menggunakan context manager (with statement)
- [ ] Melakukan operasi JSON

#### Latihan 14.7: File Operations - Reading, Writing, JSON, CSV

**Level 1 - Pemula (Basic File Operations)**
```python
# Latihan 7.1: Read and Write Text Files
# Buat fungsi untuk copy file teks

def copy_file(source: str, destination: str):
    """Copy isi file source ke destination"""
    pass

# copy_file("input.txt", "output.txt")

def count_lines_words_chars(filepath: str) -> dict:
    """Hitung jumlah lines, words, dan characters"""
    pass

# count_lines_words_chars("sample.txt")
# -> {'lines': 10, 'words': 50, 'chars': 300}

# Latihan 7.2: File Search
# Buat fungsi untuk cari kata dalam file

def search_word_in_file(filepath: str, word: str) -> list:
    """Return list baris yang mengandung kata
    Case-insensitive
    """
    pass

# search_word_in_file("log.txt", "ERROR")
# -> [(3, "2024-01-01 ERROR: Connection failed"), (7, "ERROR: Timeout")]
```

**Level 2 - Menengah (CSV Operations)**
```python
# Latihan 7.3: CSV Reader/Writer
# Buat fungsi untuk process CSV files

import csv

def read_csv(filepath: str) -> list:
    """Read CSV dan return list of dicts"""
    pass

def write_csv(filepath: str, data: list, fieldnames: list):
    """Write list of dicts ke CSV"""
    pass

def filter_csv_by_column(input_file: str, output_file: str, 
                         column: str, value: str):
    """Filter CSV berdasarkan kolom dan nilai"""
    pass

# Contoh penggunaan:
# data = [
#     {"name": "Budi", "age": 25, "city": "Jakarta"},
#     {"name": "Alice", "age": 23, "city": "Bandung"}
# ]
# write_csv("people.csv", data, ["name", "age", "city"])

# Latihan 7.4: CSV to Dict Transformation
# Buat fungsi untuk transformasi data CSV

def transform_student_grades(input_file: str, output_file: str):
    """Read CSV student grades, hitung rata-rata dan grade letter
    Tulis hasil ke CSV baru
    """
    pass

# Input CSV:
# name,math,science,english
# Budi,85,90,78
# Alice,92,88,95

# Output CSV:
# name,average,grade
# Budi,84.33,B
# Alice,91.67,A
```

**Level 3 - Mahir (JSON Operations)**
```python
# Latihan 7.5: JSON CRUD Operations
import json
from pathlib import Path

def load_json(filepath: str) -> dict:
    """Load JSON file"""
    pass

def save_json(filepath: str, data: dict, indent: int = 2):
    """Save dict ke JSON file"""
    pass

def update_json_field(filepath: str, key: str, new_value):
    """Update specific field dalam JSON"""
    pass

# Contoh data.json:
# {"name": "Budi", "age": 25, "skills": ["Python", "Java"]}

# update_json_field("data.json", "age", 26)
# -> {"name": "Budi", "age": 26, "skills": ["Python", "Java"]}

# Latihan 7.6: JSON Data Processing
# Buat fungsi untuk process JSON data structure

def process_api_response(json_data: dict) -> dict:
    """Process API response dengan nested data
    Input:
    {
        "status": "success",
        "data": {
            "users": [
                {"name": "Budi", "orders": 5, "total_spent": 1500000},
                {"name": "Alice", "orders": 3, "total_spent": 800000}
            ]
        }
    }
    
    Output:
    {
        "total_users": 2,
        "total_orders": 8,
        "total_spent": 2300000,
        "avg_spent_per_user": 1150000
    }
    """
    pass
```

**Level 4 - Expert (Combined File Operations)**
```python
# Latihan 7.7: Log File Analyzer
# Buat analyzer untuk log files

def analyze_log_file(filepath: str) -> dict:
    """Analyze log file dan return statistics:
    - Total lines
    - Lines by log level (INFO, WARNING, ERROR, DEBUG)
    - Most common error messages
    - Timestamps of first and last error
    """
    pass

# Contoh log file (sample.log):
# 2024-01-01 10:00:00 INFO Server started
# 2024-01-01 10:01:00 WARNING High memory usage
# 2024-01-01 10:02:00 ERROR Connection timeout
# 2024-01-01 10:03:00 INFO Request processed

# Output:
# {
#     'total_lines': 4,
#     'info': 2,
#     'warning': 1,
#     'error': 1,
#     'debug': 0
# }

# Latihan 7.8: Data Migration (JSON to CSV)
# Buat converter dari JSON format ke CSV

def json_to_csv(json_filepath: str, csv_filepath: str):
    """Convert JSON file ke CSV
    Handle nested JSON dengan flattening
    """
    pass

# Input JSON:
# [
#     {"user": {"name": "Budi", "address": {"city": "Jakarta"}}},
#     {"user": {"name": "Alice", "address": {"city": "Bandung"}}}
# ]

# Output CSV:
# user.name,user.address.city
# Budi,Jakarta
# Alice,Bandung
```

**Solusi Latihan 14.7:**
```python
# Solusi 7.1: Copy File & Count
def copy_file(source, destination):
    with open(source, 'r') as src:
        with open(destination, 'w') as dst:
            dst.write(src.read())

def count_lines_words_chars(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    return {
        'lines': len(content.splitlines()),
        'words': len(content.split()),
        'chars': len(content)
    }

# Solusi 7.2: Search Word
def search_word_in_file(filepath, word):
    results = []
    with open(filepath, 'r') as f:
        for i, line in enumerate(f, 1):
            if word.lower() in line.lower():
                results.append((i, line.strip()))
    return results

# Solusi 7.3: CSV Operations
def read_csv(filepath):
    with open(filepath, 'r', newline='') as f:
        return list(csv.DictReader(f))

def write_csv(filepath, data, fieldnames):
    with open(filepath, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)

def filter_csv_by_column(input_file, output_file, column, value):
    data = read_csv(input_file)
    filtered = [row for row in data if row[column] == value]
    if filtered:
        write_csv(output_file, filtered, filtered[0].keys())

# Solusi 7.4: Transform Grades
def transform_student_grades(input_file, output_file):
    data = read_csv(input_file)
    results = []
    for row in data:
        grades = [int(row['math']), int(row['science']), int(row['english'])]
        avg = sum(grades) / len(grades)
        if avg >= 90: grade = 'A'
        elif avg >= 80: grade = 'B'
        elif avg >= 70: grade = 'C'
        elif avg >= 60: grade = 'D'
        else: grade = 'F'
        results.append({'name': row['name'], 'average': round(avg, 2), 'grade': grade})
    write_csv(output_file, results, ['name', 'average', 'grade'])

# Solusi 7.5: JSON Operations
def load_json(filepath):
    return json.loads(Path(filepath).read_text())

def save_json(filepath, data, indent=2):
    Path(filepath).write_text(json.dumps(data, indent=indent))

def update_json_field(filepath, key, new_value):
    data = load_json(filepath)
    data[key] = new_value
    save_json(filepath, data)

# Solusi 7.7: Log Analyzer
import re
from collections import Counter

def analyze_log_file(filepath):
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    stats = {'total_lines': len(lines), 'info': 0, 'warning': 0, 'error': 0, 'debug': 0}
    
    for line in lines:
        if 'INFO' in line: stats['info'] += 1
        elif 'WARNING' in line: stats['warning'] += 1
        elif 'ERROR' in line: stats['error'] += 1
        elif 'DEBUG' in line: stats['debug'] += 1
    
    return stats
```

### 14.8 Tools
- [ ] Menggunakan virtual environment dengan venv
- [ ] Install dan manage packages dengan pip
- [ ] Menggunakan numpy untuk komputasi numerik
- [ ] Menggunakan pandas untuk data manipulation

#### Latihan 14.8: Tools - Virtual Environments, pip, NumPy, Pandas

**Level 1 - Pemula (Virtual Environment & pip)**
```python
# Latihan 8.1: Virtual Environment Setup
# Tulis langkah-langkah untuk setup project dengan venv

"""
TODO: Write down langkah-langkah berikut:

1. Buat virtual environment baru bernama "myproject_env"
2. Activate virtual environment (Windows)
3. Install package numpy
4. Install package pandas dengan versi specific (1.5.0)
5. Install multiple packages dari requirements.txt
6. Export dependencies ke requirements.txt
7. Deactivate virtual environment

Jawab dengan langkah-langkah dalam bentuk komentar!
"""

# Latihan 8.2: pip Commands Practice
# Identifikasi command yang benar

"""
Dari command berikut, pilih yang BENAR:

a) pip install numpy pandas matplotlib
b) pip install -r requirements.txt
c) pip freeze > requirements.txt
d) pip uninstall numpy
e) pip list

Jawab dengan menunjukkan command yang valid!
"""
```

**Level 2 - Menengah (NumPy Basics)**
```python
# Latihan 8.3: NumPy Array Operations
import numpy as np

# 8.3a: Buat array 1D dari 0-9
arr1d = # ?

# 8.3b: Buat array 2D 3x3 dengan nilai semua 1
arr2d_ones = # ?

# 8.3c: Buat array dengan nilai random 5x5
arr_random = # ?

# 8.3d: Array indexing - ambil elemen di baris 2, kolom 3
matrix = np.array([[1,2,3], [4,5,6], [7,8,9]])
element = # ?

# 8.3e: Array slicing - ambil submatrix 2x2 dari kiri atas
submatrix = # ?

# Latihan 8.4: NumPy Statistics
def numpy_statistics(arr):
    """Hitung statistics menggunakan NumPy:
    - Mean
    - Median
    - Standard deviation
    - Variance
    - Min dan Max
    - Sum
    """
    pass

# numpy_statistics(np.array([1, 2, 3, 4, 5]))
# -> {'mean': 3.0, 'median': 3.0, 'std': 1.41, ...}
```

**Level 3 - Mahir (NumPy Advanced & Pandas)**
```python
# Latihan 8.5: NumPy Matrix Operations
import numpy as np

# 8.5a: Dot product dua vectors
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
dot_product = # ?

# 8.5b: Matrix multiplication
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = # ? (A x B)

# 8.5c: Transpose matrix
A_T = # ?

# 8.5d: Find element > 5 dalam array
arr = np.array([1, 6, 3, 8, 2, 9, 4])
greater_than_5 = # ?

# 8.5e: Normalize array (0-1 scaling)
def normalize(arr):
    """Normalize array ke range 0-1"""
    pass

# Latihan 8.6: Pandas DataFrame
import pandas as pd

# 8.6a: Buat DataFrame dari dictionary
data = {
    'Name': ['Budi', 'Alice', 'Charlie'],
    'Age': [25, 23, 30],
    'City': ['Jakarta', 'Bandung', 'Surabaya']
}
df = # ?

# 8.6b: Filter DataFrame - ambil rows dimana Age > 24
older = # ?

# 8.6c: Add new column
df['Country'] = 'Indonesia'  # Add column

# 8.6d: Group by dan aggregate
sales_data = {
    'Region': ['North', 'South', 'North', 'South', 'East'],
    'Product': ['A', 'A', 'B', 'B', 'A'],
    'Sales': [100, 200, 150, 180, 250]
}
sales_df = pd.DataFrame(sales_data)
grouped = # ? (Group by Region, sum Sales)
```

**Level 4 - Expert (NumPy & Pandas Real-world)**
```python
# Latihan 8.7: Image-like Data Processing (NumPy)
import numpy as np

# 8.7a: Buat grayscale image matrix 10x10
# Pattern: chessboard
def create_chessboard(size=8):
    """Buat chessboard pattern (0 = white, 1 = black)"""
    pass

# 8.7b: Image convolution (simple blur)
def apply_blur(image):
    """Apply simple 3x3 average blur ke image"""
    pass

# Latihan 8.8: Data Analysis Project
import pandas as pd

def analyze_sales_data(csv_file: str) -> dict:
    """Analyze sales data dari CSV:
    1. Load data dari CSV
    2. Handle missing values
    3. Calculate total sales per region
    4. Find top 3 products by revenue
    5. Calculate month-over-month growth
    6. Return summary statistics
    """
    pass

# Contoh penggunaan:
# summary = analyze_sales_data("sales_data.csv")
# print(summary)
```

#### Latihan 14.8+: NumPy NdArray Manipulation untuk ML (CRITICAL!)

**Level 1 - Pemula (Array Creation & Basic Ops)**
```python
# Latihan N1: Array Creation
import numpy as np

# N1a: Buat array 1D dari 0-9
arr1d = # ?

# N1b: Buat array 2D 3x4 dengan nilai semua 1
arr2d_ones = # ?

# N1c: Buat identity matrix 4x4
identity = # ?

# N1d: Buat array dengan np.linspace dari 0 ke 100, 11 elemen
arr_linspace = # ?

# N1e: Buat random array 5x5 dengan distribusi normal (mean=0, std=1)
arr_normal = # ?

# Test:
# arr1d -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# arr2d_ones -> [[1,1,1,1], [1,1,1,1], [1,1,1,1]]
# identity -> [[1,0,0,0], [0,1,0,0], [0,0,1,0], [0,0,0,1]]
```

**Level 2 - Menengah (Reshaping & Slicing)**
```python
# Latihan N2: Array Reshaping
import numpy as np

# N2a: Flatten matrix 2D ke 1D
matrix = np.array([[1, 2, 3], [4, 5, 6]])
flattened = # ?
# flattened -> [1, 2, 3, 4, 5, 6]

# N2b: Reshape arr dari 1D ke 2D (3x4)
arr = np.arange(12)
reshaped = # ?
# [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]]

# N2c: Transpose matrix
transposed = # ?

# N2d: Squeeze - hapus dimensi size 1
arr = np.random.rand(1, 224, 224, 1)
squeezed = # ?

# N2e: Expand dims - tambah batch dimension
arr = np.random.rand(224, 224)  # Single image
batched = # ?  # [1, 224, 224]
```

**Level 3 - Mahir (Broadcasting)**
```python
# Latihan N3: Broadcasting Operations

# N3a: Normalize array (Min-Max scaling)
# Input: array apapun
# Output: array dengan nilai 0-1
def min_max_normalize(arr):
    """Normalisasi ke range [0, 1]"""
    pass

# min_max_normalize([10, 20, 30]) -> [0, 0.5, 1]
# min_max_normalize([100, 200, 300]) -> [0, 0.5, 1]

# N3b: Standardize array (Z-score)
# Input: array
# Output: array dengan mean=0, std=1
def standardize(arr):
    """Standardisasi: (x - mean) / std"""
    pass

# N3c: Add bias ke semua samples
# data shape: (100, 10) - 100 samples, 10 features
# bias shape: (10,) - harus di-broadcast
def add_bias(data, bias):
    """Tambah bias ke semua samples"""
    pass

# N3d: Hitung distance dari center point
def euclidean_distance_from_center(matrix):
    """Hitung jarak Euclidean dari center untuk setiap point"""
    pass
```

**Level 4 - Expert (ML Operations)**
```python
# Latihan N4: Neural Network Operations

# N4a: Softmax activation
def softmax(logits):
    """Softmax activation function
    softmax(x_i) = exp(x_i) / sum(exp(x_j))
    Hint: gunakan numerical stability dengan subtract max
    """
    pass

# softmax([2.0, 1.0, 0.1]) -> [0.7, 0.26, 0.04] (approximately)

# N4b: ReLU activation
def relu(x):
    """ReLU: max(0, x)"""
    pass

# N4c: Matrix multiplication (forward pass)
def forward_pass(X, W, b):
    """Linear layer: y = X @ W + b
    X shape: (batch_size, n_features)
    W shape: (n_features, n_neurons)
    b shape: (n_neurons,)
    """
    pass

# N4d: Cross-entropy loss
def cross_entropy_loss(y_true, y_pred):
    """Hitung cross-entropy loss
    y_true: one-hot encoded (batch, classes)
    y_pred: probabilities (batch, classes)
    """
    pass

# N4e: Batch normalization
def batch_norm(x):
    """Normalisasi per batch: (x - mean) / sqrt(var + epsilon)
    Gunakan axis=0 untuk hitung statistics
    """
    pass
```

**Level 5 - ML Master (Image/Data Processing)**
```python
# Latihan N5: Image Processing untuk ML

# N5a: Crop center region dari image
def crop_center(image, crop_size):
    """Crop center region dari image
    image shape: (H, W, C) atau (H, W)
    crop_size: tuple (height, width)
    """
    pass

# N5b: Normalize image untuk model pretrained
def normalize_for_model(image):
    """Normalize image dengan mean dan std ImageNet
    mean = [0.485, 0.456, 0.406]
    std = [0.229, 0.224, 0.225]
    Image dalam range [0, 1]
    """
    pass

# N5c: Create one-hot encoding
def one_hot_encode(labels, num_classes):
    """Convert labels ke one-hot encoding
    labels: array of integer labels
    num_classes: jumlah kelas
    """
    pass

# one_hot_encode([0, 2, 1, 0], 3) -> [[1,0,0], [0,0,1], [0,1,0], [1,0,0]]

# N5d: Flatten images untuk feedforward network
def flatten_images(images):
    """Flatten batch of images
    images shape: (batch, H, W) atau (batch, H, W, C)
    Output shape: (batch, H*W) atau (batch, H*W*C)
    """
    pass

# N5e: Create batches dari dataset
def create_batches(data, batch_size):
    """Pecah data jadi batches
    data shape: (N, ...) dimana N adalah jumlah samples
    Return list of batches
    """
    pass
```

**Solusi Latihan NumPy:**
```python
# Solusi N1: Array Creation
arr1d = np.arange(10)
arr2d_ones = np.ones((3, 4))
identity = np.eye(4)
arr_linspace = np.linspace(0, 100, 11)
arr_normal = np.random.randn(5, 5)

# Solusi N2: Reshaping
flattened = matrix.flatten()
reshaped = arr.reshape(3, 4)
transposed = matrix.T
squeezed = np.squeeze(arr)
batched = np.expand_dims(arr, axis=0)

# Solusi N3: Broadcasting
def min_max_normalize(arr):
    return (arr - arr.min()) / (arr.max() - arr.min())

def standardize(arr):
    return (arr - np.mean(arr)) / np.std(arr)

def add_bias(data, bias):
    return data + bias  # Broadcasting!

def euclidean_distance_from_center(matrix):
    # Buat grid coordinates
    h, w = matrix.shape[:2]
    y_coords, x_coords = np.ogrid[:h, :w]
    center_y, center_x = h // 2, w // 2
    return np.sqrt((y_coords - center_y)**2 + (x_coords - center_x)**2)

# Solusi N4: Neural Network Operations
def softmax(logits):
    exp_logits = np.exp(logits - np.max(logits))  # stability
    return exp_logits / np.sum(exp_logits, axis=-1, keepdims=True)

def relu(x):
    return np.maximum(0, x)

def forward_pass(X, W, b):
    return X @ W + b  # Broadcasting b!

def cross_entropy_loss(y_true, y_pred):
    eps = 1e-9  # prevent log(0)
    return -np.sum(y_true * np.log(y_pred + eps)) / len(y_true)

# Solusi N5: Image Processing
def crop_center(image, crop_size):
    h, w = image.shape[:2]
    crop_h, crop_w = crop_size
    start_h = (h - crop_h) // 2
    start_w = (w - crop_w) // 2
    return image[start_h:start_h+crop_h, start_w:start_w+crop_w]

def normalize_for_model(image):
    mean = np.array([0.485, 0.456, 0.406]).reshape(1, 1, 3)
    std = np.array([0.229, 0.224, 0.225]).reshape(1, 1, 3)
    return (image - mean) / std

def one_hot_encode(labels, num_classes):
    one_hot = np.zeros((len(labels), num_classes))
    one_hot[np.arange(len(labels)), labels] = 1
    return one_hot

def flatten_images(images):
    return images.reshape(images.shape[0], -1)

def create_batches(data, batch_size):
    n = len(data)
    return [data[i:i+batch_size] for i in range(0, n, batch_size)]
```

**Solusi Latihan 14.8:**
```python
# Solusi 8.3: NumPy Arrays
arr1d = np.arange(10)
arr2d_ones = np.ones((3, 3))
arr_random = np.random.rand(5, 5)
element = matrix[1, 2]  # Baris index 1, kolom index 2
submatrix = matrix[:2, :2]  # Baris 0-1, kolom 0-1

# Solusi 8.4: NumPy Statistics
def numpy_statistics(arr):
    return {
        'mean': np.mean(arr),
        'median': np.median(arr),
        'std': np.std(arr),
        'variance': np.var(arr),
        'min': np.min(arr),
        'max': np.max(arr),
        'sum': np.sum(arr)
    }

# Solusi 8.5: NumPy Matrix
dot_product = np.dot(a, b)  # atau a @ b
C = np.matmul(A, B)  # atau A @ B
A_T = A.T
greater_than_5 = arr[arr > 5]

def normalize(arr):
    return (arr - arr.min()) / (arr.max() - arr.min())

# Solusi 8.6: Pandas
df = pd.DataFrame(data)
older = df[df['Age'] > 24]
grouped = sales_df.groupby('Region')['Sales'].sum()

# Solusi 8.7: Chessboard
def create_chessboard(size=8):
    board = np.zeros((size, size))
    board[::2, 1::2] = 1
    board[1::2, ::2] = 1
    return board

# Solusi 8.8: Sales Analysis
def analyze_sales_data(csv_file):
    df = pd.read_csv(csv_file)
    df.fillna(0, inplace=True)
    sales_by_region = df.groupby('Region')['Sales'].sum()
    top_products = df.groupby('Product')['Revenue'].sum().nlargest(3)
    return {
        'total_sales': df['Sales'].sum(),
        'total_revenue': df['Revenue'].sum(),
        'avg_sales': df['Sales'].mean(),
        'sales_by_region': sales_by_region.to_dict(),
        'top_3_products': top_products.to_dict()
    }
```

---

## 15. Resource Belajar Tambahan

### 15.1 Dokumentasi Resmi Python

| Topik | Link | Keterangan |
|-------|------|------------|
| **Dokumentasi Resmi** | [docs.python.org/3/](https://docs.python.org/3/) | Dokumentasi lengkap Python 3 |
| **Tutorial Python** | [docs.python.org/3/tutorial/](https://docs.python.org/3/tutorial/) | Tutorial resmi dari Python |
| **Library Reference** | [docs.python.org/3/library/](https://docs.python.org/3/library/) | Referensi library standar |
| **Glossary** | [docs.python.org/3/glossary.html](https://docs.python.org/3/glossary.html) | Istilah Python dijelaskan |

### 15.2 PEP (Python Enhancement Proposal) - Standar Code

| PEP | Link | Keterangan |
|-----|------|------------|
| **PEP 8** | [pep8.org/](https://pep8.org/) | Style guide Python (WAJIB BACA) |
| **PEP 20** | [peps.python.org/pep-0020/](https://peps.python.org/pep-0020/) | The Zen of Python |
| **PEP 257** | [peps.python.org/pep-0257/](https://peps.python.org/pep-0257/) | Docstring conventions |
| **PEP 484** | [peps.python.org/pep-0484/](https://peps.python.org/pep-0484/) | Type hints |
| **PEP 498** | [peps.python.org/pep-0498/](https://peps.python.org/pep-0498/) | f-strings |
| **PEP 3107** | [peps.python.org/pep-3107/](https://peps.python.org/pep-3107/) | Function annotations |

### 15.3 Tutorial dan Referensi Populer

| Resource | Link | Keterangan |
|----------|------|------------|
| **Real Python** | [realpython.com/](https://realpython.com/) | Tutorial Python berkualitas tinggi |
| **Python Cheat Sheet** | [pythoncheatsheet.org/](https://www.pythoncheatsheet.org/) | Cheat sheet komprehensif |
| **W3Schools Python** | [w3schools.com/python/](https://www.w3schools.com/python/) | Tutorial interaktif |
| **Programiz** | [programiz.com/python-programming](https://www.programiz.com/python-programming) | Tutorial dengan contoh |

### 15.4 NumPy Resources (KRITICAL untuk AI/ML)

| Resource | Link | Keterangan |
|----------|------|------------|
| **NumPy Official Docs** | [numpy.org/doc/stable/](https://numpy.org/doc/stable/) | Dokumentasi resmi NumPy |
| **NumPy Quickstart** | [numpy.org/doc/stable/user/quickstart.html](https://numpy.org/doc/stable/user/quickstart.html) | Quick start guide |
| **Absolute Beginners** | [numpy.org/devdocs/user/absolute_beginners.html](https://numpy.org/devdocs/user/absolute_beginners.html) | Guide untuk pemula |
| **Stanford CS231n** | [cs231n.github.io/python-numpy-tutorial/](http://cs231n.github.io/python-numpy-tutorial/) | Tutorial dari Stanford |
| **NumPy Illustrated** | [betterprogramming.pub/numpy-illustrated](https://betterprogramming.pub/numpy-illustrated-the-visual-guide-to-numpy-3b1d4976b1ed) | Visual guide NumPy |
| **NumPy for ML** | [machinelearningmastery.com/a-gentle-introduction-to-numpy/](https://machinelearningmastery.com/a-gentle-introduction-to-numpy/) | NumPy untuk ML |

### 15.5 Pandas Resources

| Resource | Link | Keterangan |
|----------|------|------------|
| **Pandas Official** | [pandas.pydata.org/docs/](https://pandas.pydata.org/docs/) | Dokumentasi resmi Pandas |
| **10 Minutes to Pandas** | [pandas.pydata.org/docs/user_guide/10min.html](https://pandas.pydata.org/docs/user_guide/10min.html) | Quick tutorial |

### 15.6 Courses

| Course | Link | Keterangan |
|--------|------|------------|
| **Python for Everybody** | [coursera.org/specializations/python](https://www.coursera.org/specializations/python) | Free to audit, dari University of Michigan |
| **Google's Python Class** | [developers.google.com/edu/python](https://developers.google.com/edu/python) | Course gratis dari Google |
| **CS50P Harvard** | [cs50.harvard.edu/python/](https://cs50.harvard.edu/python/) | Course Python dari Harvard |

### 15.7 YouTube Channels

| Channel | Link | Keterangan |
|---------|------|------------|
| **Corey Schafer** | [youtube.com/@coreyms](https://youtube.com/@coreyms) | Tutorial Python sangat lengkap |
| **Sentdex** | [youtube.com/@sentdex](https://youtube.com/@sentdex) | Python for beginners dan ML |
| **WPU (Web Programming UNPAS)** | [youtube.com/@sandhikagalihWPU](https://youtube.com/@sandhikagalihWPU) | Tutorial Python Bahasa Indonesia |
| **Kelas Terbuka** | [youtube.com/@KelasTerbuka](https://youtube.com/@KelasTerbuka) | Tutorial Python dan algoritma Bahasa Indonesia |
| **Engnet Defcon** | [youtube.com/@engnetdefcon](https://youtube.com/@engnetdefcon) | Tutorial NumPy/ML Bahasa Indonesia |

---

## 16. Ringkasan Latihan Bertahap

### Panduan Pengerjaan Latihan

Latihan-latihan di atas dirancang dengan prinsip **progressif** untuk membangun algorithmic thinking secara bertahap:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PIRAMIDA PEMBELAJARAN LATIHAN                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                         ┌───────────┐                                   │
│                        │   LEVEL 4  │  Expert                           │
│                       ┌┴───────────┴┐  Project nyata                    │
│                      │    LEVEL 3   │  Mahir                            │
│                     ┌┴─────────────┴┐ Pattern recognition              │
│                    │    LEVEL 2      │  Menengah                         │
│                   ┌┴────────────────┴┐ Algorithmic thinking              │
│                  │    LEVEL 1       │  Pemula                           │
│                 └─────────────────────┘ Basic implementation             │
│                                                                         │
│              Mulai dari Level 1, naik bertahap ke atas!                  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Ringkasan Latihan per Section

| Section | Latihan | Level | Topik |
|---------|---------|-------|-------|
| **14.1** | 7 latihan | 1-3 | Variabel, Tipe Data, Mutability, FizzBuzz, Palindrome |
| **14.2** | 10 latihan | 1-4 | List CRUD, Dict, Set, Two Sum, Anagrams, Sorting |
| **14.3** | 12 latihan | 1-4 | Grade, Leap Year, Prime, Fibonacci, Binary Search, GCD |
| **14.4** | 11 latihan | 1-4 | Functions, args/kwargs, Lambda, Decorators, Memoization |
| **14.5** | 9 latihan | 1-4 | Exception handling, Custom exceptions, Retry, Validators |
| **14.6** | 6 latihan | 1-4 | Classes, Properties, Inheritance, Dataclasses, Payment |
| **14.7** | 8 latihan | 1-4 | File I/O, CSV, JSON, Log Analyzer, Data Migration |
| **14.8** | 8 latihan | 1-4 | venv, pip, NumPy, Pandas, Data Analysis |
| **14.8+** | 15 latihan | 1-5 | **NumPy NdArray: Broadcasting, Reshaping, ML Operations** |

### Tips Pengerjaan

1. **Jangan langsung lihat solusi!** - Coba kerjakan sendiri minimal 10-15 menit
2. **Start dari Level 1** - Foundation yang kuat = progress lebih cepat
3. **Pahami konsep, bukan hafal** - Tujuannya memahami pola pikir
4. **Refactor setelah berhasil** - Coba cari cara yang lebih clean/efisien
5. **Debug dengan print()** - Gunakan print statements untuk trace logic
6. **Test edge cases** - Coba input yang ekstrem (kosong, negatif, dll)

### WARNING: NumPy Adalah KUNCI untuk AI/ML

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    ⚠️ PERINGATAN PENTING! ⚠️                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   NumPy adalah FONDASI dari seluruh ekosistem AI/ML!                    │
│                                                                         │
│   Tanpanya:                                                             │
│   ❌ Tidak bisa memahami PyTorch/TensorFlow code                        │
│   ❌ Tidak bisa preprocessing data untuk ML                              │
│   ❌ Tidak bisa implement neural network dari scratch                   │
│   ❌ Tidak bisa optimize model performance                              │
│                                                                         │
│   Dengannya:                                                            │
│   ✅ PyTorch = NumPy + GPU + Autograd                                  │
│   ✅ TensorFlow = NumPy + GPU + Tensor operations                       │
│   ✅ Semua library ML build on top of NumPy                            │
│                                                                         │
│   PRIORITAS: Kuasai NumPy SEBELUM lanjut ke ML!                        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Challenge Tambahan

Setelah menyelesaikan semua latihan, coba challenge ini:

```python
# Challenge 1: Calculator dengan Parser
# Buat kalkulator yang bisa parse string
# "5 + 3 * 2" -> 11
# "(5 + 3) * 2" -> 16

# Challenge 2: To-Do App CLI
# Aplikasi CLI untuk manage todos
# - Add todo
# - List todos
# - Complete todo
# - Delete todo
# - Save/load dari JSON

# Challenge 3: Simple Web Scraper
# Scrap data dari website sederhana
# Parse HTML, extract info
# Save ke CSV/JSON

# Challenge 4: mini-game (Tic-Tac-Toe)
# Game lengkap dengan AI opponent
# Gunakan OOP dan game logic
```

---

## 17. Kesimpulan dan Langkah Selanjutnya

### Checklist Penyelesaian Fondasi Python

```python
# Setelah menyelesaikan semua latihan, ceklis ini:

progress_checklist = {
    "Variabel & Tipe Data": {
        "✅ Bisa menggunakan semua tipe data primitif": False,
        "✅ Paham konversi tipe data": False,
        "✅ Paham konsep mutability": False,
        "✅ Bisa handle None dengan aman": False,
    },
    "Collections": {
        "✅ Pilih struktur data yang tepat": False,
        "✅ CRUD operations on list & dict": False,
        "✅ List/dict comprehension": False,
        "✅ Set operations": False,
    },
    "Control Flow": {
        "✅ Conditional logic dengan if/elif/else": False,
        "✅ For dan while loops": False,
        "✅ Break, continue, pass": False,
        "✅ Enumerate dan zip": False,
    },
    "Functions": {
        "✅ Parameter types (*args, **kwargs)": False,
        "✅ Return values": False,
        "✅ Lambda functions": False,
        "✅ Type hints": False,
    },
    "Error Handling": {
        "✅ Try/except/else/finally": False,
        "✅ Custom exceptions": False,
        "✅ Handle multiple exception types": False,
    },
    "OOP": {
        "✅ Class dan instance": False,
        "✅ Inheritance dan polymorphism": False,
        "✅ Properties dan encapsulation": False,
        "✅ Dataclasses": False,
    },
    "File Operations": {
        "✅ Read/write files": False,
        "✅ CSV operations": False,
        "✅ JSON operations": False,
        "✅ Context managers": False,
    },
    "Tools": {
        "✅ Virtual environments": False,
        "✅ pip package management": False,
        "✅ NumPy ndarray manipulation": False,
        "✅ NumPy broadcasting mastery": False,
        "✅ Pandas basics": False,
    },
    "NumPy Mastery (KRITICAL untuk AI/ML)": {
        "✅ Array creation (zeros, ones, arange, linspace, random)": False,
        "✅ Array indexing & slicing (basic, boolean, fancy)": False,
        "✅ Array reshaping (reshape, flatten, transpose, squeeze, expand_dims)": False,
        "✅ Broadcasting (performa, standardize, normalize)": False,
        "✅ Array concatenation (stack, vstack, hstack, split)": False,
        "✅ Vectorized operations (element-wise, aggregation)": False,
        "✅ Linear algebra (dot, matmul, inv, eig, norm)": False,
        "✅ Boolean masking & filtering": False,
        "✅ Batch processing untuk ML": False,
        "✅ Image tensor manipulation (NHWC vs NCHW)": False,
    }
}
```

### Fondasi Python yang kuat adalah **investasi paling penting** dalam perjalanan menjadi AI Engineer. Dengan memahami konsep-konsep di atas secara mendalam dan menyelesaikan latihan-latihan yang ada, Anda akan:

1. **lebih cepat memahami** dokumentasi dan tutorial AI/ML
2. **lebih efisien** dalam menulis dan debugging kode
3. **lebih confident** dalam menghadapi interview technical
4. **lebih professional** dalam menulis production-ready code
5. **lebih terampil** dalam problem solving dan algorithmic thinking

### Rekomendasi Langkah Selanjutnya

```
MINGGU 1-2: Selesaikan semua Level 1 dan Level 2
            → Fokus memahami konsep dasar
            → Jangan terburu-buru

MINGGU 3-4: Selesaikan Level 3 dan Level 4
            → Tantangan lebih kompleks
            → Kombinasi semua konsep

MINGGU 5-6: Project-based learning
            → Buat mini projects nyata
            → Kombinasi semua skill

MINGGU 7-8: Lanjut ke Fondasi AI & LLM
            → Siap untuk tahap berikutnya
            → Mulai explore AI libraries
```

### Ciri-Ciri Anda Sudah Siap Lanjut ke Tahap Berikutnya

- ✅ Semua latihan 14.1-14.8 selesai (TERMASUK NumPy section!)
- ✅ Bisa debug error tanpa bantuan
- ✅ Paham kapan pakai struktur data yang mana
- ✅ Bisa implement algoritma dasar (sort, search)
- ✅ Familiar dengan Python idioms dan best practices
- ✅ Bisa baca dokumentasi Python dengan lancar
- ✅ **MAHIR NumPy ndarray manipulation** (broadcasting, reshaping, masking)
- ✅ Bisa implement forward pass neural network dengan NumPy saja

---

> **"Python bukan tentang menghafal sintaks, tapi tentang memahami cara berpikir seperti programmer."**
> 
> **Fondasi yang kuat = Bangunan yang tinggi**. Jangan terburu-buru untuk advanced topics sebelum benar-benar memahami basics ini!

---

*Material ini disusun berdasarkan roadmap AI Engineering Opencode dan referensi dari dokumentasi resmi Python, Real Python, serta berbagai resource pembelajaran terpopuler.*
