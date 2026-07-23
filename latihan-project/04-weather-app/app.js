/**
 * ============================================
 * WEATHER APP
 * ============================================
 * 
 * PETUNJUK:
 * - Isi setiap fungsi yang kosong dengan kode JavaScript
 * - Ikuti instruksi di dalam setiap fungsi
 * - Gunakan framework 7 Langkah Universal
 * 
 * FITUR YANG HARUS DIBUAT:
 * 1. Cari cuaca berdasarkan nama kota
 * 2. Tampilkan cuaca saat ini
 * 3. Tampilkan forecast 5 hari
 * 4. Search history
 * 5. Error handling
 * 
 * API YANG DIGUNAKAN:
 * OpenWeatherMap API
 * Website: https://openweathermap.org/api
 * Gratis: 1000 requests/hari
 * 
 * LANGKAH DAPATKAN API KEY:
 * 1. Buka https://openweathermap.org/api
 * 2. Klik "Sign Up"
 * 3. Isi form registrasi
 * 4. Verifikasi email
 * 5. Login → My API Keys
 * 6. Copy API key (butuh 2-10 jam untuk aktif)
 */

// ============================================
// KONFIGURASI API
// ============================================

// GANTI dengan API key kamu!
// const API_KEY = 'YOUR_API_KEY_HERE';
// const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';


// ============================================
// VARIABEL GLOBAL
// ============================================

// Search history
// let searchHistory = [];


// ============================================
// FUNGSI: FETCH CUACA SAAT INI
// ============================================

/**
 * Fungsi untuk fetch cuaca dari API
 * @param {string} city - Nama kota
 * @returns {Promise} - Data cuaca
 */
async function fetchCurrentWeather(city) {
    // LANGKAH 1: Buat URL
    // const url = `${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    // LANGKAH 2: Fetch data
    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     return data;
    // } catch (error) {
    //     console.error('Error fetching weather:', error);
    //     throw error;
    // }
}


// ============================================
// FUNGSI: FETCH FORECAST
// ============================================

/**
 * Fungsi untuk fetch forecast 5 hari
 * @param {string} city - Nama kota
 * @returns {Promise} - Data forecast
 */
async function fetchForecast(city) {
    // LANGKAH 1: Buat URL
    // const url = `${API_BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    
    // LANGKAH 2: Fetch data
    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     return data;
    // } catch (error) {
    //     console.error('Error fetching forecast:', error);
    //     throw error;
    // }
}


// ============================================
// FUNGSI: SEARCH WEATHER
// ============================================

/**
 * Fungsi utama saat user search
 */
async function searchWeather() {
    // LANGKAH 1: Ambil value dari input
    // const city = document.getElementById('search-input').value.trim();
    
    // LANGKAH 2: Validasi
    // if (!city) {
    //     showError('Masukkan nama kota!');
    //     return;
    // }
    
    // LANGKAH 3: Tampilkan loading
    // showLoading();
    
    // LANGKAH 4: Fetch data
    // try {
    //     const currentWeather = await fetchCurrentWeather(city);
    //     const forecast = await fetchForecast(city);
    //     
    //     // Cek jika kota tidak ditemukan
    //     if (currentWeather.cod === '404') {
    //         showError('Kota tidak ditemukan');
    //         return;
    //     }
    //     
    //     // Tampilkan data
    //     displayCurrentWeather(currentWeather);
    //     displayForecast(forecast);
    //     saveToHistory(city);
    //     
    // } catch (error) {
    //     if (error.message.includes('Failed to fetch')) {
    //         showError('Tidak ada koneksi internet');
    //     } else {
    //         showError('Terjadi kesalahan, coba lagi');
    //     }
    // }
    
    // LANGKAH 5: Sembunyikan loading
    // hideLoading();
}


// ============================================
// FUNGSI: TAMPILKAN CUACA
// ============================================

/**
 * Fungsi untuk menampilkan cuaca saat ini
 * @param {Object} data - Data cuaca dari API
 */
function displayCurrentWeather(data) {
    // LANGKAH 1: Ambil data dari response
    // const city = data.name;
    // const temp = Math.round(data.main.temp);
    // const feelsLike = Math.round(data.main.feels_like);
    // const humidity = data.main.humidity;
    // const windSpeed = data.wind.speed;
    // const description = data.weather[0].description;
    // const iconCode = data.weather[0].icon;
    
    // LANGKAH 2: Dapatkan ikon
    // const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    
    // LANGKAH 3: Update DOM elements
    // document.getElementById('city-name').textContent = city;
    // document.getElementById('temperature').textContent = `${temp}°C`;
    // document.getElementById('description').textContent = description;
    // document.getElementById('feels-like').textContent = `${feelsLike}°C`;
    // document.getElementById('humidity').textContent = `${humidity}%`;
    // document.getElementById('wind-speed').textContent = `${windSpeed} m/s`;
    // document.getElementById('weather-icon').src = iconUrl;
    
    // LANGKAH 4: Tampilkan card
    // document.getElementById('weather-card').classList.remove('hidden');
}


// ============================================
// FUNGSI: TAMPILKAN FORECAST
// ============================================

/**
 * Fungsi untuk menampilkan forecast 5 hari
 * @param {Object} data - Data forecast dari API
 */
function displayForecast(data) {
    // LANGKAH 1: Ambil data forecast
    // const forecasts = data.list;
    
    // LANGKAH 2: Filter (ambil 1 per hari, misal jam 12:00)
    // const dailyForecasts = forecasts.filter(item => 
    //     item.dt_txt.includes('12:00:00')
    // ).slice(0, 5);
    
    // LANGKAH 3: Buat HTML untuk setiap forecast
    // const container = document.getElementById('forecast-container');
    // container.innerHTML = '';
    // 
    // dailyForecasts.forEach(day => {
    //     const date = new Date(day.dt * 1000);
    //     const dayName = date.toLocaleDateString('id-ID', { weekday: 'short' });
    //     const temp = Math.round(day.main.temp);
    //     const iconCode = day.weather[0].icon;
    //     const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    //     
    //     // Buat card element
    //     // Append ke container
    // });
    
    // LANGKAH 4: Tampilkan section forecast
    // document.getElementById('forecast-section').classList.remove('hidden');
}


// ============================================
// FUNGSI: SEARCH HISTORY
// ============================================

/**
 * Fungsi untuk simpan ke history
 */
function saveToHistory(city) {
    // LANGKAH 1: Cek apakah kota sudah ada
    // const existingIndex = searchHistory.findIndex(
    //     item => item.city.toLowerCase() === city.toLowerCase()
    // );
    
    // LANGKAH 2: Update atau tambah baru
    // if (existingIndex !== -1) {
    //     searchHistory[existingIndex].timestamp = Date.now();
    // } else {
    //     searchHistory.unshift({ city, timestamp: Date.now() });
    // }
    
    // LANGKAH 3: Batasi history (maks 5)
    // searchHistory = searchHistory.slice(0, 5);
    
    // LANGKAH 4: Simpan ke localStorage
    // localStorage.setItem('weatherHistory', JSON.stringify(searchHistory));
    
    // LANGKAH 5: Render ulang
    // renderHistory();
}

/**
 * Fungsi untuk render history
 */
function renderHistory() {
    // const container = document.getElementById('history-container');
    // container.innerHTML = searchHistory.map(item => `
    //     <div class="cursor-pointer hover:text-white" onclick="searchFromHistory('${item.city}')">
    //         ${item.city} (${formatTimeAgo(item.timestamp)})
    //     </div>
    // `).join('');
}

/**
 * Fungsi untuk search dari history
 */
function searchFromHistory(city) {
    // document.getElementById('search-input').value = city;
    // searchWeather();
}

/**
 * Format timestamp ke "X min ago"
 */
function formatTimeAgo(timestamp) {
    // const diff = Date.now() - timestamp;
    // const minutes = Math.floor(diff / 60000);
    // const hours = Math.floor(diff / 3600000);
    // 
    // if (minutes < 1) return 'Baru saja';
    // if (minutes < 60) return `${minutes} menit lalu`;
    // if (hours < 24) return `${hours} jam lalu`;
    // return `${Math.floor(hours/24)} hari lalu`;
}


// ============================================
// FUNGSI: UI HELPERS
// ============================================

function showError(message) {
    // document.getElementById('error-message').textContent = message;
    // document.getElementById('error-message').classList.remove('hidden');
}

function hideError() {
    // document.getElementById('error-message').classList.add('hidden');
}

function showLoading() {
    // document.getElementById('loading').classList.remove('hidden');
}

function hideLoading() {
    // document.getElementById('loading').classList.add('hidden');
}


// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Load history dari localStorage
    // const savedHistory = localStorage.getItem('weatherHistory');
    // if (savedHistory) {
    //     searchHistory = JSON.parse(savedHistory);
    //     renderHistory();
    // }
    
    // Setup search button
    // document.getElementById('search-btn').addEventListener('click', searchWeather);
    
    // Setup Enter key
    // document.getElementById('search-input').addEventListener('keypress', (e) => {
    //     if (e.key === 'Enter') searchWeather();
    // });
});
