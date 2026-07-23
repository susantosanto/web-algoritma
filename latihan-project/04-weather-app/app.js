/**
 * ============================================
 * WEATHER APP
 * ============================================
 * 
 * MASALAH:
 * Aplikasi cuaca dengan fitur:
 * 1. Cari cuaca berdasarkan kota
 * 2. Tampilkan cuaca saat ini
 * 3. Tampilkan forecast 5 hari
 * 4. History pencarian
 * 5. Error handling
 * 
 * KONSEP:
 * - Fetch API (ambil data dari internet)
 * - Async/Await (tunggu operasi selesai)
 * - Promise (janji data akan datang)
 * - Error Handling (try-catch)
 * 
 * PENTING:
 * Dapatkan API KEY gratis di: https://openweathermap.org/api
 */


// ============================================
// KONFIGURASI
// ============================================

/**
 * KONSEP: API Key = kode rahasia untuk akses API
 * 
 * CONTOH KONSEP:
 * 
 * --- Struktur URL API ---
 * const baseUrl = 'https://api.example.com/data';
 * const apiKey = 'abc123';
 * const city = 'Jakarta';
 * 
 * const url = `${baseUrl}?q=${city}&key=${apiKey}`;
 * // Hasil: https://api.example.com/data?q=Jakarta&key=abc123
 * 
 * --- Query parameter ---
 * ?parameter1=value1&parameter2=value2
 * 
 * TULIS KODEMU DI SINI:
 * Buat variabel API_KEY dan API_BASE_URL
 * Ganti API_KEY dengan API key kamu sendiri
 */


// ============================================
// VARIABEL GLOBAL
// ============================================

/**
 * TULIS KODEMU DI SINI:
 * Buat variabel searchHistory (array kosong)
 */


// ============================================
// FUNGSI: FETCH DATA
// ============================================

/**
 * KONSEP: Fetch API = mengambil data dari internet
 * 
 * CONTOH KONSEP (bukan jawaban):
 * 
 * --- Fetch dasar ---
 * const response = await fetch(url);
 * const data = await response.json();
 * 
 * --- Async function ---
 * async function fetchData() {
 *     const response = await fetch(url);
 *     const data = await response.json();
 *     return data;
 * }
 * 
 * --- Try-catch untuk error ---
 * try {
 *     const data = await fetchData();
 *     // proses data
 * } catch (error) {
 *     console.error('Error:', error);
 * }
 * 
 * --- Cek response.ok ---
 * if (!response.ok) {
 *     throw new Error('HTTP error!');
 * }
 * 
 * --- Cek status code ---
 * if (data.cod === '404') {
 *     // kota tidak ditemukan
 * }
 * 
 * TULIS KODEMU DI SINI:
 */
async function fetchCurrentWeather(city) {
    // PERTANYAAN: Bagaimana membuat URL dengan parameter?
    // KONSEP: `${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    //
    // PERTANYAAN: Bagaimana fetch data?
    // KONSEP: const response = await fetch(url); const data = await response.json();
    //
    // PERTANYAAN: Bagaimana handle error?
    // KONSEP: try { ... } catch (error) { ... }
}

async function fetchForecast(city) {
    // PERTANYAAN: Apa bedanya dengan fetchCurrentWeather?
    // KONSEP: Endpoint URL berbeda: /forecast bukan /weather
}


// ============================================
// FUNGSI: SEARCH
// ============================================

/**
 * KONSEP: Loading indicator = tanda sedang memuat
 * 
 * CONTOH KONSEP:
 * 
 * --- Tampilkan loading ---
 * document.getElementById('loading').classList.remove('hidden');
 * 
 * --- Sembunyikan loading ---
 * document.getElementById('loading').classList.add('hidden');
 * 
 * --- Fungsi async ---
 * async function search() {
 *     showLoading();
 *     try {
 *         const data = await fetchData();
 *         displayData(data);
 *     } catch (error) {
 *         showError(error.message);
 *     } finally {
 *         hideLoading();
 *     }
 * }
 * 
 * TULIS KODEMU DI SINI:
 */
async function searchWeather() {
    // PERTANYAAN: Bagaimana mengambil value dari input?
    // KONSEP: input.value.trim()
    //
    // PERTANYAAN: Bagaimana menampilkan loading?
    // KONSEP: element.classList.remove('hidden')
    //
    // PERTANYAAN: Bagaimana menangani error?
    // KONSEP: try { ... } catch (error) { showError(error.message); }
}


// ============================================
// FUNGSI: TAMPILKAN DATA
// ============================================

/**
 * KONSEP: Update DOM dengan data dari API
 * 
 * CONTOH KONSEP:
 * 
 * --- Update text ---
 * document.getElementById('id').textContent = value;
 * 
 * --- Update image ---
 * document.getElementById('id').src = imageUrl;
 * 
 * --- Update class ---
 * document.getElementById('id').classList.remove('hidden');
 * 
 * --- Nested property ---
 * const suhu = data.main.temp; // akses property bersarang
 * const deskripsi = data.weather[0].description; // akses array dalam object
 * 
 * --- Math operations ---
 * const bulat = Math.round(30.7); // 31
 * 
 * TULIS KODEMU DI SINI:
 */
function displayCurrentWeather(data) {
    // PERTANYAAN: Bagaimana mengakses data dari response?
    // KONSEP: data.name (kota), data.main.temp (suhu), dll
    //
    // PERTANYAAN: Bagaimana mendapatkan URL ikon?
    // KONSEP: `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    //
    // PERTANYAAN: Bagaimana update tampilan?
    // KONSEP: element.textContent = value
}

function displayForecast(data) {
    // PERTANYAAN: Data forecast seperti apa?
    // KONSEP: data.list berisi banyak item (per 3 jam)
    //
    // PERTANYAAN: Bagaimana filter 1 data per hari?
    // KONSEP: data.list.filter(item => item.dt_txt.includes('12:00:00'))
}


// ============================================
// FUNGSI: HISTORY
// ============================================

/**
 * KONSEP: Search history dengan timestamp
 * 
 * CONTOH KONSEP:
 * 
 * --- Simpan dengan timestamp ---
 * history.unshift({ city: 'Jakarta', timestamp: Date.now() });
 * 
 * --- Batasi jumlah ---
 * if (history.length > 5) history.pop();
 * 
 * --- Format waktu relatif ---
 * const diff = Date.now() - timestamp;
 * const menit = Math.floor(diff / 60000);
 * const jam = Math.floor(diff / 3600000);
 * 
 * if (menit < 60) return `${menit} menit lalu`;
 * if (jam < 24) return `${jam} jam lalu`;
 * 
 * TULIS KODEMU DI SINI:
 */
function saveToHistory(city) {
    // PERTANYAAN: Bagaimana cek apakah kota sudah ada?
    // KONSEP: history.findIndex(h => h.city.toLowerCase() === city.toLowerCase())
    //
    // PERTANYAAN: Bagaimana update atau tambah baru?
    // KONSEP: Jika index !== -1 → update, else → unshift baru
}

function formatTimeAgo(timestamp) {
    // PERTANYAAN: Bagaimana menghitung waktu relatif?
    // KONSEP: (Date.now() - timestamp) / 60000 = menit
}


// ============================================
// UI HELPERS
// ============================================

/**
 * CONTOH KONSEP:
 * 
 * function showError(message) {
 *     const el = document.getElementById('error');
 *     el.textContent = message;
 *     el.classList.remove('hidden');
 * }
 * 
 * function hideError() {
 *     document.getElementById('error').classList.add('hidden');
 * }
 * 
 * TULIS KODEMU DI SINI:
 */
function showError(message) {
    // KONSEP: element.textContent = message; element.classList.remove('hidden')
}

function showLoading() {
    // KONSEP: element.classList.remove('hidden')
}

function hideLoading() {
    // KONSEP: element.classList.add('hidden')
}


// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Event yang perlu didengar:
    // - Klik tombol search
    // - Tekan Enter di input
    // - Klik item di history
});
