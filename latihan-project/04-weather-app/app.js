/**
 * ============================================
 * WEATHER APP
 * ============================================
 * 
 * MASALAH:
 * Membuat aplikasi cuaca yang bisa:
 * 1. Mencari cuaca berdasarkan nama kota
 * 2. Menampilkan cuaca saat ini
 * 3. Menampilkan forecast 5 hari
 * 4. Menyimpan riwayat pencarian
 * 5. Menangani error dengan baik
 * 
 * KONSEP YANG DIPAKAI:
 * - Fetch API (mengambil data dari internet)
 * - Async/Await (menangani operasi yang butuh waktu)
 * - Promise (janji bahwa data akan datang)
 * - JSON (format pertukaran data)
 * - Error Handling (try-catch)
 * - LocalStorage (menyimpan history)
 * 
 * CARA BERPIKIR:
 * Aplikasi ini bekerja seperti telepon:
 * 1. User memberikan nama kota
 * 2. Kita "menelepon" server cuaca
 * 3. Server memproses dan mengirim data
 * 4. Kita terima dan tampilkan data
 * 
 * Masalahnya: menelepon butuh WAKTU!
 * Solusi: gunakan async/await agar tidak memblokir UI
 * 
 * PENTING:
 * Sebelum bisa pakai API, kamu perlu API KEY.
 * Daftar gratis di: https://openweathermap.org/api
 */


// ============================================
// KONFIGURASI API
// ============================================

/**
 * MASALAH: Menyimpan konfigurasi untuk mengakses API.
 * 
 * PERTANYAAN:
 * - Apa itu API KEY?
 *   → Kode rahasia yang membuktikan kamu diizinkan mengakses API
 * - Di mana mendapatkannya?
 *   → Daftar di website API provider (OpenWeatherMap)
 * - Mengapa tidak langsung tulis di kode?
 *   → Untuk keamanan, lebih baik di file terpisah
 * 
 * TULIS KODEMU DI SINI:
 * 1. Buat variabel API_KEY (ganti dengan API key kamu)
 * 2. Buat variabel API_BASE_URL
 */
// PERTANYAAN: Bagaimana cara mendapatkan API key?
// PETUNJUK: 
// 1. Buka https://openweathermap.org/api
// 2. Klik "Sign Up" / buat akun
// 3. Login → My API Keys
// 4. Copy API key
// 5. Tunggu 2-10 jam agar aktif


// ============================================
// VARIABEL GLOBAL
// ============================================

/**
 * MASALAH: Menyimpan state aplikasi.
 * 
 * TULIS KODEMU DI SINI:
 * Buat variabel untuk search history
 */


// ============================================
// FUNGSI: FETCH CUACA
// ============================================

/**
 * MASALAH: Mengambil data cuaca dari API.
 * 
 * KONSEP PENTING:
 * - fetch() mengirim request ke server
 * - Response harus di-parse (diubah dari JSON ke JavaScript object)
 * - Proses ini butuh waktu, sehingga pakai async/await
 * 
 * ALUR BERPIKIR:
 * 1. Buat URL dengan nama kota dan API key
 * 2. Kirim request
 * 3. Tunggu response
 * 4. Parse response
 * 5. Kembalikan data
 * 
 * PERTANYAAN UNTUK DIRI SENDIRI:
 * - Mengapa pakai async/await?
 * - Apa yang terjadi jika kota tidak ditemukan?
 * - Apa yang terjadi jika tidak ada internet?
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "fetchCurrentWeather" dan "fetchForecast"
 */
async function fetchCurrentWeather(city) {
    // PERTANYAAN 1: Bagaimana membuat URL?
    // PETUNJUK: Gabungkan base URL, nama kota, dan API key
    // KONSEP: Template literal `${variabel}` untuk menyisipkan nilai
    
    // PERTNYAAN 2: Bagaimana mengirim request?
    // PETUNJUK: Gunakan fetch() dengan URL
    // KONSEP: const response = await fetch(url)
    
    // PERTANYAAN 3: Bagaimana mengubah response jadi data?
    // PETUNJUK: Response berformat JSON, harus di-parse
    // KONSEP: const data = await response.json()
    
    // PERTANYAAN 4: Bagaimana handle error?
    // PETUNJUK: Gunakan try-catch
    // KONSEP: try { ... } catch (error) { ... }
}

async function fetchForecast(city) {
    // PETUNJUK: Sama seperti fetchCurrentWeather
    //           Bedanya: endpoint URL-nya berbeda
}


// ============================================
// FUNGSI: SEARCH WEATHER
// ============================================

/**
 * MASALAH: Fungsi utama yang dipanggil saat user mencari.
 * 
 * ALUR BERPIKIR:
 * 1. Validasi input (tidak kosong)
 * 2. Tampilkan loading
 * 3. Fetch data cuaca
 * 4. Fetch data forecast
 * 5. Tampilkan data
 * 6. Simpan ke history
 * 7. Handle error
 * 8. Sembunyikan loading
 * 
 * PERTANYAAN UNTUK DIRI SENDIRI:
 * - Mengapa perlu loading indicator?
 * - Bagaimana menangani berbagai jenis error?
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "searchWeather"
 */
async function searchWeather() {
    // PERTANYAAN 1: Bagaimana mengambil value dari input?
    // PETUNJUK: Seperti di to-do list
    // KONSEP: input.value.trim()
    
    // PERTANYAAN 2: Bagaimana menampilkan loading?
    // PETUNJUK: Tampilkan element loading, sembunyikan saat selesai
    // KONSEP: classList.remove/add('hidden')
    
    // PERTANYAAN 3: Bagaimana menangani error "kota tidak ditemukan"?
    // PETUNJUK: Cek response dari API
    // KONSEP: if (data.cod === '404') { ... }
    
    // PERTANYAAN 4: Bagaimana menangani error jaringan?
    // PETUNJUK: Error jaringan masuk ke catch block
    // KONSEP: catch(error) { if (error.message.includes('Failed to fetch')) ... }
}


// ============================================
// FUNGSI: TAMPILKAN DATA
// ============================================

/**
 * MASALAH: Menampilkan data cuaca ke layar.
 * 
 * PERTANYAAN:
 * - Data apa saja yang ditampilkan?
 * - Bagaimana cara mendapatkan ikon cuaca?
 * - Bagaimana membuat card cuaca?
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "displayCurrentWeather" dan "displayForecast"
 */
function displayCurrentWeather(data) {
    // PERTANYAAN 1: Data apa yang diambil dari response?
    // PETUNJUK: Lihat struktur response API di dokumentasi
    // KONSEP: data.name (kota), data.main.temp (suhu), dll
    
    // PERTANYAAN 2: Bagaimana mendapatkan ikon?
    // PETUNJUK: API memberikan kode ikon, bisa di-download
    // KONSEP: https://openweathermap.org/img/wn/{icon}@2x.png
    
    // PERTANYAAN 3: Bagaimana update tampilan?
    // PETUNJUK: Cari element, ubah text atau src-nya
    // KONSEP: element.textContent = value
    //         image.src = url
}

function displayForecast(data) {
    // PERTANYAAN 1: Data forecast seperti apa?
    // PETUNJUK: API mengembalikan banyak data (per 3 jam)
    //           Kita perlu filter untuk 1 data per hari
    // KONSEP: data.list.filter(item => item.dt_txt.includes('12:00:00'))
    
    // PERTANYAAN 2: Bagaimana membuat card forecast?
    // PETUNJUK: Loop hasil filter, buat card untuk setiap hari
    // KONSEP: .forEach() atau .map() untuk membuat HTML
}


// ============================================
// FUNGSI: SEARCH HISTORY
// ============================================

/**
 * MASALAH: Menyimpan dan menampilkan riwayat pencarian.
 * 
 * ALUR BERPIKIR:
 * 1. Saat search berhasil, simpan kota ke history
 * 2. Batasi history (maks 5 item)
 * 3. Tampilkan history ke layar
 * 4. Klik history untuk search lagi
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "saveToHistory", "renderHistory", "searchFromHistory"
 */
function saveToHistory(city) {
    // PERTANYAAN 1: Bagaimana menyimpan history?
    // PETUNJUK: Simpan di array, lalu ke localStorage
    // KONSEP: searchHistory.unshift({ city, timestamp: Date.now() })
    
    // PERTANYAAN 2: Bagaimana membatasi history?
    // PETUNJUK: Ambil hanya 5 item terbaru
    // KONSEP: searchHistory = searchHistory.slice(0, 5)
}

function formatTimeAgo(timestamp) {
    // PERTANYAAN: Bagaimana mengubah timestamp jadi "2 menit lalu"?
    // PETUNJUK: Hitung selisih waktu dengan waktu sekarang
    // KONSEP: const diff = Date.now() - timestamp
    //         Konversi milidetik ke menit/jam
}


// ============================================
// FUNGSI: UI HELPERS
// ============================================

/**
 * MASALAH: Fungsi bantu untuk UI.
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "showError", "hideError", "showLoading", "hideLoading"
 */
function showError(message) {
    // PETUNJUK: Tampilkan pesan error ke element yang tersedia
    // KONSEP: element.textContent = message; element.classList.remove('hidden')
}

function showLoading() {
    // PETUNJUK: Tampilkan indicator loading
    // KONSEP: element.classList.remove('hidden')
}

function hideLoading() {
    // PETUNJUK: Sembunyikan indicator loading
    // KONSEP: element.classList.add('hidden')
}


// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // PERTANYAAN: Event apa yang perlu didengar?
    // PETUNJUK:
    // - Klik tombol search
    // - Tekan Enter di input
    // - Klik item di history
    // 
    // Tambahkan event listener untuk semua event di atas
});
