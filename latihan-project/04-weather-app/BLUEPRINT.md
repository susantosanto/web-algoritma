# 🌤️ PROJECT 4: WEATHER APP

> **Level**: Menengah | **Estimasi**: 3-5 jam | **Konsep**: API Fetch, Async/Await, DOM Manipulation

---

## 🎯 TUJUAN PROJECT

Membuat aplikasi cuaca yang bisa:
- Cari cuaca berdasarkan kota
- Menampilkan suhu, kelembaban, angin
- Menampilkan ikon cuaca
- Menampilkan forecast 5 hari
- History pencarian

---

## 📐 ALUR KERJA

```
LANGKAH 1: Pahami API Cuaca
    ↓
LANGKAH 2: HTML Structure
    ↓
LANGKAH 3: Styling (Tailwind)
    ↓
LANGKAH 4: JavaScript - Fetch API
    ↓
LANGKAH 5: JavaScript - Tampilkan Data
    ↓
LANGKAH 6: JavaScript - Search History
    ↓
LANGKAH 7: Error Handling
    ↓
LANGKAH 8: Testing & Polish
```

---

## LANGKAH 1: PAHAMI API CUACA

### 1.1 Pilih API
```
Pilihan API cuaca GRATIS:

□ OpenWeatherMap (Recommended untuk pemula)
  - Website: https://openweathermap.org/api
  - Gratis: 1000 requests/hari
  - Butuh: API Key (daftar gratis)

□ WeatherAPI
  - Website: https://www.weatherapi.com/
  - Gratis: 100000 requests/bulan
  - Butuh: API Key (daftar gratis)

Untuk latihan, kita pakai OpenWeatherMap.
```

### 1.2 Cara Dapatkan API Key
```
1. Buka https://openweathermap.org/api
2. Klik "Sign Up" / "Create Account"
3. Isi form registrasi
4. Verifikasi email
5. Login
6. Buka "My API Keys"
7. Copy API key (butuh 2-10 jam untuk aktif)
```

### 1.3 Endpoint API
```
Current Weather:
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric

5-Day Forecast:
GET https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric

Parameter:
- q: nama kota (contoh: "Jakarta")
- appid: API key kamu
- units: metric (Celsius) atau imperial (Fahrenheit)

Response format: JSON
```

### 1.4 Contoh Response
```json
{
    "name": "Jakarta",
    "main": {
        "temp": 30,
        "humidity": 75,
        "feels_like": 33
    },
    "weather": [{
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
    }],
    "wind": {
        "speed": 5.2
    }
}
```

---

## LANGKAH 2: HTML STRUCTURE

### 2.1 Layout
```
┌────────────────────────────────────────┐
│       🌤️ Weather App                   │
├────────────────────────────────────────┤
│  🔍 [Enter city name...  ] [Search]    │
├────────────────────────────────────────┤
│                                        │
│  ┌──────────────────────────────────┐ │
│  │        Jakarta, Indonesia        │ │
│  │          ☁️ 30°C                  │ │
│  │     Scattered Clouds             │ │
│  │                                  │ │
│  │  💧 75%    🌡️ 33°C    💨 5 m/s  │ │
│  └──────────────────────────────────┘ │
│                                        │
│  📅 5-Day Forecast                    │
│  ┌─────┬─────┬─────┬─────┬─────┐    │
│  │ Sen │ Sel │ Rab │ Kam │ Jum │    │
│  │ ☀️  │ 🌧️  │ ⛅  │ ☀️  │ 🌧️  │    │
│  │ 32° │ 28° │ 30° │ 33° │ 27° │    │
│  └─────┴─────┴─────┴─────┴─────┘    │
│                                        │
│  📜 Recent Searches                    │
│  - Jakarta (2 min ago)                 │
│  - Bandung (1 hour ago)                │
│  - Surabaya (yesterday)                │
└────────────────────────────────────────┘
```

### 2.2 HTML Blueprint
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <!-- ISI: Link Tailwind CDN -->
</head>
<body class="bg-gradient-to-br from-blue-400 to-purple-500 min-h-screen">
    
    <div class="container mx-auto max-w-lg px-4 py-8">
        <!-- ISI: Header -->
        <!-- ISI: Search Form -->
        <!-- ISI: Current Weather Card -->
        <!-- ISI: Forecast Section -->
        <!-- ISI: Recent Searches -->
    </div>

    <!-- ISI: Link ke app.js -->
</body>
</html>
```

---

## LANGKAH 3: STYLING (TAILWIND)

### 3.1 Color Scheme
```
Background: gradient from-blue-400 to-purple-500
Card: bg-white/20 backdrop-blur-md (glass effect)
Text: text-white
Secondary text: text-white/70
Input: bg-white/30, placeholder-white/50
Button: bg-white text-blue-500

Glass effect:
bg-white/20 = background putih 20% opacity
backdrop-blur-md = efek blur di belakang
```

### 3.2 Weather Icons
```
Gunakan emoji untuk ikon cuaca:
☀️ = cerah (Clear)
☁️ = berawan (Clouds)
🌧️ = hujan (Rain)
⛈️ = badai (Thunderstorm)
🌫️ = berkabut (Mist)
❄️ = salju (Snow)
```

---

## LANGKAH 4: JAVASCRIPT - FETCH API

### 4.1 Konsep Fetch
```
Fetch = cara JavaScript ambil data dari API

Cara kerja:
1. Kirim request ke URL API
2. Tunggu response
3. Parse response (biasanya JSON)
4. Gunakan data

Karena butuh waktu → pakai async/await
```

### 4.2 API Key Management
```
PENTING: Jangan hardcode API key di kode!

Cara aman untuk latihan:
1. Buat config.js terpisah
2. Simpan API key di sana
3. Import di app.js

// config.js
const API_KEY = 'YOUR_API_KEY_HERE';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

Atau untuk production, pakai environment variables.
```

### 4.3 Fetch Current Weather
```javascript
// Fungsi untuk fetch cuaca saat ini
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

// Fungsi untuk fetch forecast 5 hari
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
```

### 4.4 Search Function
```javascript
// Fungsi utama saat user search
async function searchWeather() {
    // LANGKAH 1: Ambil value dari input
    // const city = document.getElementById('search-input').value.trim();
    
    // LANGKAH 2: Validasi
    // if (!city) {
    //     alert('Masukkan nama kota!');
    //     return;
    // }
    
    // LANGKAH 3: Tampilkan loading
    // showLoading();
    
    // LANGKAH 4: Fetch data
    // try {
    //     const currentWeather = await fetchCurrentWeather(city);
    //     const forecast = await fetchForecast(city);
    //     
    //     // LANGKAH 5: Tampilkan data
    //     displayCurrentWeather(currentWeather);
    //     displayForecast(forecast);
    //     
    //     // LANGKAH 6: Simpan ke history
    //     saveToHistory(city);
    //     
    // } catch (error) {
    //     showError('Kota tidak ditemukan');
    // }
    
    // LANGKAH 7: Sembunyikan loading
    // hideLoading();
}
```

---

## LANGKAH 5: JAVASCRIPT - TAMPILKAN DATA

### 5.1 Display Current Weather
```javascript
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
    
    // LANGKAH 4: Tampilkan card (remove hidden class)
    // document.getElementById('weather-card').classList.remove('hidden');
}
```

### 5.2 Display Forecast
```javascript
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
```

---

## LANGKAH 6: JAVASCRIPT - SEARCH HISTORY

### 6.1 Data Structure
```javascript
// History format
let searchHistory = [
    { city: 'Jakarta', timestamp: Date.now() },
    { city: 'Bandung', timestamp: Date.now() - 3600000 },
];
```

### 6.2 Functions
```javascript
function saveToHistory(city) {
    // LANGKAH 1: Cek apakah kota sudah ada
    // const existingIndex = searchHistory.findIndex(
    //     item => item.city.toLowerCase() === city.toLowerCase()
    // );
    
    // LANGKAH 2: Jika ada, update timestamp
    // if (existingIndex !== -1) {
    //     searchHistory[existingIndex].timestamp = Date.now();
    // } else {
    //     // Jika tidak ada, tambah baru
    //     searchHistory.unshift({ city, timestamp: Date.now() });
    // }
    
    // LANGKAH 3: Batasi history (maks 5)
    // searchHistory = searchHistory.slice(0, 5);
    
    // LANGKAH 4: Simpan ke localStorage
    // localStorage.setItem('weatherHistory', JSON.stringify(searchHistory));
    
    // LANGKAH 5: Render ulang
    // renderHistory();
}

function renderHistory() {
    // Render history list ke DOM
    // Tampilkan: kota + waktu relatif (2 min ago, 1 hour ago)
}

function formatTimeAgo(timestamp) {
    // Konversi timestamp ke format "X minutes ago", "X hours ago", dll
    // const diff = Date.now() - timestamp;
    // const minutes = Math.floor(diff / 60000);
    // const hours = Math.floor(diff / 3600000);
    // 
    // if (minutes < 1) return 'Just now';
    // if (minutes < 60) return `${minutes} min ago`;
    // if (hours < 24) return `${hours} hours ago`;
    // return `${Math.floor(hours/24)} days ago`;
}
```

---

## LANGKAH 7: ERROR HANDLING

### 7.1 Types of Errors
```
1. City not found (404)
2. API limit exceeded (429)
3. Network error (no internet)
4. Invalid API key (401)
5. Empty input
```

### 7.2 Error Handling Functions
```javascript
function showError(message) {
    // Tampilkan pesan error ke user
    // document.getElementById('error-message').textContent = message;
    // document.getElementById('error-message').classList.remove('hidden');
}

function hideError() {
    // Sembunyikan pesan error
}

function showLoading() {
    // Tampilkan loading indicator
}

function hideLoading() {
    // Sembunyikan loading indicator
}
```

### 7.3 Try-Catch Pattern
```javascript
async function searchWeather() {
    try {
        showLoading();
        hideError();
        
        const data = await fetchCurrentWeather(city);
        
        if (data.cod === '404') {
            showError('Kota tidak ditemukan');
            return;
        }
        
        displayCurrentWeather(data);
        
    } catch (error) {
        if (error.message.includes('Failed to fetch')) {
            showError('Tidak ada koneksi internet');
        } else {
            showError('Terjadi kesalahan, coba lagi');
        }
    } finally {
        hideLoading();
    }
}
```

---

## LANGKAH 8: TESTING & POLISH

### 8.1 Checklist Fungsional
```
□ Search dengan nama kota berfungsi
□ Current weather tergambar dengan benar
□ Ikon cuaca sesuai
□ Suhu dalam Celsius
□ Humidity dan wind speed tergambar
□ 5-day forecast tergambar
□ Search history tersimpan
□ Search history bisa diklik untuk search lagi
□ Error handling untuk kota tidak ditemukan
□ Loading indicator muncul saat fetch
□ Data persist di localStorage
□ Tidak ada console error
```

### 8.2 Testing Cases
```
Test 1: Search kota yang valid
- Input: "Jakarta"
- Expected: Tampilkan cuaca Jakarta

Test 2: Search kota yang tidak ada
- Input: "KotaTidakAda123"
- Expected: Error message "Kota tidak ditemukan"

Test 3: Search kosong
- Input: ""
- Expected: Error atau tidak melakukan apa-apa

Test 4: Search kota yang sama berulang
- Input: "Jakarta" 3 kali
- Expected: History hanya menampilkan 1 Jakarta dengan timestamp terbaru

Test 5: Offline
- Matikan internet
- Search "Jakarta"
- Expected: Error "Tidak ada koneksi internet"
```

---

## 🚀 BONUS: ENHANCEMENTS

```
□ Current location (pakai Geolocation API)
□ Toggle Celsius/Fahrenheit
□ Animated weather icons (pakai library)
□ Weather map
□ Air quality index
□ Sunrise/sunset time
□ Unit conversion
□ Multi-language
□ Dark mode
□ Widget untuk home screen
```

---

## ✅ FINAL CHECKLIST

```
□ API Key sudah dikonfigurasi
□ Fetch API berfungsi
□ Current weather ditampilkan
□ Forecast ditampilkan
□ Ikon cuaca sesuai
□ Search history berfungsi
□ Error handling lengkap
□ Loading indicator ada
□ Responsive design
□ Tidak ada console error

Total: ___/10 checklist terpenuhi
```

---

## 📚 REFERENSI

```
OpenWeatherMap API Docs:
https://openweathermap.org/current

MDN Fetch API:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

Async/Await:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
```
