# 🧠 PROJECT 6: QUIZ APP

> **Level**: Menengah | **Estimasi**: 4-6 jam | **Konsep**: State Management, Timer, Score, Progress

---

## 🎯 TUJUAN PROJECT

Membuat aplikasi quiz yang bisa:
- Menampilkan pertanyaan satu per satu
- Pilihan jawaban (multiple choice)
- Cek jawaban benar/salah
- Hitung skor
- Timer untuk setiap pertanyaan
- Progress bar
- Hasil akhir dengan review

---

## 📐 ALUR KERJA

```
LANGKAH 1: Perencanaan & Data Structure
    ↓
LANGKAH 2: HTML Structure
    ↓
LANGKAH 3: Styling (Tailwind)
    ↓
LANGKAH 4: JavaScript - Quiz Logic
    ↓
LANGKAH 5: JavaScript - Timer
    ↓
LANGKAH 6: JavaScript - Score & Results
    ↓
LANGKAH 7: JavaScript - UI Updates
    ↓
LANGKAH 8: Testing & Polish
```

---

## LANGKAH 1: PERENCANAAN & DATA STRUCTURE

### 1.1 Struktur Data Pertanyaan
```javascript
const questions = [
    {
        id: 1,
        question: "Apa kepanjangan dari HTML?",
        options: [
            "A. Home Tool Markup Language",
            "B. HyperText Markup Language",
            "C. Hyperlinks and Text Markup Language",
            "D. Home Text Markup Language"
        ],
        correctAnswer: 1, // index jawaban benar (B)
        explanation: "HTML adalah HyperText Markup Language, bahasa markup untuk membuat halaman web."
    },
    // ... pertanyaan lainnya
];
```

### 1.2 State Aplikasi
```javascript
let state = {
    currentQuestion: 0,      // Index pertanyaan saat ini
    score: 0,                // Skor yang didapat
    answers: [],             // Array jawaban user
    timeLeft: 30,            // Waktu tersisa (detik)
    isAnswered: false,       // Sudah dijawab atau belum
    isFinished: false,       // Quiz sudah selesai atau belum
    selectedAnswer: null,    // Jawaban yang dipilih
};
```

### 1.3 Fitur yang Dibutuhkan
```
□ Start screen (halaman awal)
□ Pertanyaan + 4 opsi jawaban
□ Progress bar (pertanyaan X dari Y)
□ Timer countdown
□ Feedback jawaban (benar/salah)
□ Skor saat ini
□ Hasil akhir
□ Review jawaban
□ Retry quiz
```

### 1.4 Alur User
```
1. Buka aplikasi → Start Screen
2. Klik "Mulai Quiz"
3. Pertanyaan 1 muncul dengan timer
4. Pilih jawaban
5. Dapat feedback (benar/salah)
6. Klik "Next" ke pertanyaan berikutnya
7. Ulangi sampai selesai
8. Lihat hasil akhir
9. Review semua jawaban
10. Retry atau selesai
```

---

## LANGKAH 2: HTML STRUCTURE

### 2.1 Layout Screens
```
Aplikasi punya 3 "screen":

SCREEN 1: START
┌────────────────────────────────┐
│        🧠 QUIZ TIME           │
│                                │
│    Berapa pertanyaan: 10       │
│    Waktu per soal: 30 detik    │
│                                │
│    [ Mulai Quiz 🚀 ]          │
└────────────────────────────────┘

SCREEN 2: QUIZ (in progress)
┌────────────────────────────────┐
│  Pertanyaan 3/10    ⏱️ 25:00  │
│  ████████░░░░░░ 30%           │
├────────────────────────────────┤
│  Apa kepanjangan dari CSS?     │
│                                │
│  ┌──────────────────────────┐ │
│  │ A. Cascading Style Sheets │ │
│  └──────────────────────────┘ │
│  ┌──────────────────────────┐ │
│  │ B. Creative Style Sheets │ │
│  └──────────────────────────┘ │
│  ┌──────────────────────────┐ │
│  │ C. Computer Style Sheets │ │
│  └──────────────────────────┘ │
│  ┌──────────────────────────┐ │
│  │ D. Colorful Style Sheets │ │
│  └──────────────────────────┘ │
│                                │
│        [ Next → ]             │
└────────────────────────────────┘

SCREEN 3: RESULTS
┌────────────────────────────────┐
│        🎉 QUIZ SELESAI!       │
│                                │
│         Skor: 8/10             │
│         Persentase: 80%        │
│         Grade: A               │
│                                │
│    [ Review Jawaban ]         │
│    [ Coba Lagi 🔄 ]          │
└────────────────────────────────┘
```

### 2.2 HTML Blueprint
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>
    <!-- ISI: Link Tailwind CDN -->
</head>
<body class="bg-gray-900 min-h-screen">
    
    <div class="container mx-auto max-w-2xl px-4 py-8">
        <!-- ISI: Start Screen (id="start-screen") -->
        <!-- ISI: Quiz Screen (id="quiz-screen", hidden) -->
        <!-- ISI: Result Screen (id="result-screen", hidden) -->
    </div>

    <!-- ISI: Link ke app.js -->
</body>
</html>
```

### 2.3 Petunjuk Tiap Screen

#### **START SCREEN**
```
Struktur:
├── Title "🧠 Quiz Time"
├── Subtitle "Uji pengetahuanmu!"
├── Info box
│   ├── Jumlah pertanyaan
│   └── Waktu per soal
└── Button "Mulai Quiz 🚀"

Petunjuk:
- Default hidden: class="hidden"
- Tampil saat aplikasi pertama dibuka
- Button memulai quiz
```

#### **QUIZ SCREEN**
```
Struktur:
├── Header
│   ├── Question counter (3/10)
│   ├── Timer (⏱️ 25:00)
│   └── Progress bar
├── Question text
├── Options container (4 buttons)
│   ├── Option A
│   ├── Option B
│   ├── Option C
│   └── Option D
├── Feedback area (benar/salah + explanation)
└── Navigation
    ├── Previous button (opsional)
    └── Next button

Petunjuk:
- Default hidden
- Update setiap pindah pertanyaan
- Options harus clickable
- Feedback muncul setelah pilih jawaban
- Next button disabled sampai jawab
```

#### **RESULT SCREEN**
```
Struktur:
├── Title "🎉 Quiz Selesai!"
├── Score circle
│   ├── Score (8/10)
│   ├── Percentage (80%)
│   └── Grade (A, B, C, D, F)
├── Statistics
│   ├── Correct answers
│   ├── Wrong answers
│   └── Time taken
├── Buttons
│   ├── "Review Jawaban"
│   └── "Coba Lagi 🔄"

Petunjuk:
- Default hidden
- Tampil setelah quiz selesai
- Grade: A (90-100%), B (80-89%), C (70-79%), D (60-69%), F (<60%)
```

---

## LANGKAH 3: STYLING (TAILWIND)

### 3.1 Color Scheme
```
Background: bg-gray-900
Card: bg-gray-800
Text: text-white
Secondary text: text-gray-400
Option default: bg-gray-700, hover:bg-gray-600
Option selected: bg-blue-500
Option correct: bg-green-500
Option wrong: bg-red-500
Timer warning: text-yellow-500 (waktu < 10 detik)
Timer danger: text-red-500 (waktu < 5 detik)
```

### 3.2 Component Styles
```
Progress bar: h-2, bg-gray-700, rounded-full, overflow-hidden
Progress fill: bg-blue-500, transition, duration-500
Option button: w-full, text-left, p-4, rounded-lg, transition
Score circle: w-32, h-32, rounded-full, border-8, flex items-center, justify-center
```

---

## LANGKAH 4: JAVASCRIPT - QUIZ LOGIC

### 4.1 Initialize Quiz
```javascript
// ISI KODEMU DI SINI

// Data pertanyaan
// const questions = [ ... ];

// State
// let currentQuestion = 0;
// let score = 0;
// let answers = [];
// let selectedAnswer = null;
// let isAnswered = false;

// Fungsi start quiz
// function startQuiz() {
    // Reset state
    // currentQuestion = 0;
    // score = 0;
    // answers = [];
    
    // Sembunyikan start screen, tampilkan quiz screen
    // document.getElementById('start-screen').classList.add('hidden');
    // document.getElementById('quiz-screen').classList.remove('hidden');
    
    // Tampilkan pertanyaan pertama
    // showQuestion();
    // startTimer();
// }
```

### 4.2 Show Question
```javascript
// Fungsi menampilkan pertanyaan
// function showQuestion() {
    // LANGKAH 1: Ambil data pertanyaan
    // const question = questions[currentQuestion];
    
    // LANGKAH 2: Update pertanyaan text
    // document.getElementById('question-text').textContent = question.question;
    
    // LANGKAH 3: Update opsi
    // const optionsContainer = document.getElementById('options-container');
    // optionsContainer.innerHTML = question.options.map((option, index) => `
    //     <button class="option-btn w-full text-left p-4 rounded-lg bg-gray-700 
    //             hover:bg-gray-600 transition" 
    //             onclick="selectAnswer(${index})">
    //         ${option}
    //     </button>
    // `).join('');
    
    // LANGKAH 4: Update progress
    // updateProgress();
    
    // LANGKAH 5: Reset state
    // selectedAnswer = null;
    // isAnswered = false;
    // updateNextButton();
// }
```

### 4.3 Select Answer
```javascript
// Fungsi saat opsi diklik
// function selectAnswer(index) {
    // LANGKAH 1: Jika sudah dijawab, return
    // if (isAnswered) return;
    
    // LANGKAH 2: Simpan jawaban
    // selectedAnswer = index;
    // isAnswered = true;
    
    // LANGKAH 3: Cek jawaban
    // const question = questions[currentQuestion];
    // const isCorrect = index === question.correctAnswer;
    
    // LANGKAH 4: Update skor
    // if (isCorrect) {
    //     score++;
    // }
    
    // LANGKAH 5: Simpan ke array answers
    // answers.push({
    //     questionId: question.id,
    //     selected: index,
    //     correct: question.correctAnswer,
    //     isCorrect: isCorrect
    // });
    
    // LANGKAH 6: Tampilkan feedback
    // showFeedback(isCorrect, question);
    
    // LANGKAH 7: Highlight opsi
    // highlightOptions(index, question.correctAnswer);
    
    // LANGKAH 8: Update next button
    // updateNextButton();
// }
```

### 4.4 Next Question
```javascript
// Fungsi next pertanyaan
// function nextQuestion() {
    // LANGKAH 1: Cek apakah ini pertanyaan terakhir
    // if (currentQuestion === questions.length - 1) {
    //     // Selesai, tampilkan hasil
    //     showResults();
    // } else {
    //     // Pindah ke pertanyaan berikutnya
    //     currentQuestion++;
    //     showQuestion();
    //     resetTimer();
    // }
// }
```

---

## LANGKAH 5: JAVASCRIPT - TIMER

### 5.1 Timer Variables
```javascript
// let timeLeft = 30;
// let timerInterval = null;
// const TIME_PER_QUESTION = 30; // detik
```

### 5.2 Timer Functions
```javascript
// Mulai timer
// function startTimer() {
    // timeLeft = TIME_PER_QUESTION;
    // updateTimerDisplay();
    
    // timerInterval = setInterval(() => {
    //     timeLeft--;
    //     updateTimerDisplay();
        
    //     // Warning saat < 10 detik
    //     if (timeLeft <= 10) {
    //         document.getElementById('timer').classList.add('text-yellow-500');
    //     }
        
    //     // Danger saat < 5 detik
    //     if (timeLeft <= 5) {
    //         document.getElementById('timer').classList.add('text-red-500');
    //     }
        
    //     // Habis waktu
    //     if (timeLeft <= 0) {
    //         clearInterval(timerInterval);
    //         timeUp();
    //     }
    // }, 1000);
// }

// Reset timer
// function resetTimer() {
    // clearInterval(timerInterval);
    // startTimer();
// }

// Update tampilan timer
// function updateTimerDisplay() {
    // const minutes = Math.floor(timeLeft / 60);
    // const seconds = timeLeft % 60;
    // const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    // document.getElementById('timer').textContent = `⏱️ ${display}`;
// }

// Waktu habis
// function timeUp() {
    // if (!isAnswered) {
    //     // Otomatis jawab salah
    //     selectAnswer(-1); // -1 = tidak menjawab
    // }
// }
```

---

## LANGKAH 6: JAVASCRIPT - SCORE & RESULTS

### 6.1 Show Results
```javascript
// Fungsi tampilkan hasil
// function showResults() {
    // LANGKAH 1: Sembunyikan quiz screen
    // document.getElementById('quiz-screen').classList.add('hidden');
    
    // LANGKAH 2: Tampilkan result screen
    // document.getElementById('result-screen').classList.remove('hidden');
    
    // LANGKAH 3: Hitung persentase
    // const percentage = Math.round((score / questions.length) * 100);
    
    // LANGKAH 4: Tentukan grade
    // let grade, gradeColor;
    // if (percentage >= 90) {
    //     grade = 'A';
    //     gradeColor = 'text-green-500';
    // } else if (percentage >= 80) {
    //     grade = 'B';
    //     gradeColor = 'text-blue-500';
    // } else if (percentage >= 70) {
    //     grade = 'C';
    //     gradeColor = 'text-yellow-500';
    // } else if (percentage >= 60) {
    //     grade = 'D';
    //     gradeColor = 'text-orange-500';
    // } else {
    //     grade = 'F';
    //     gradeColor = 'text-red-500';
    // }
    
    // LANGKAH 5: Update DOM
    // document.getElementById('score-value').textContent = `${score}/${questions.length}`;
    // document.getElementById('percentage').textContent = `${percentage}%`;
    // document.getElementById('grade').textContent = grade;
    // document.getElementById('grade').className = gradeColor;
// }
```

### 6.2 Review Answers
```javascript
// Fungsi review jawaban
// function showReview() {
    // LANGKAH 1: Buat HTML untuk review
    // let reviewHTML = '<h2 class="text-2xl font-bold mb-6">Review Jawaban</h2>';
    
    // LANGKAH 2: Loop setiap pertanyaan
    // questions.forEach((q, index) => {
    //     const answer = answers[index];
    //     const isCorrect = answer.isCorrect;
        
    //     reviewHTML += `
    //         <div class="bg-gray-800 rounded-lg p-4 mb-4">
    //             <div class="flex items-center gap-2 mb-2">
    //                 <span class="${isCorrect ? 'text-green-500' : 'text-red-500'}">
    //                     ${isCorrect ? '✓' : '✗'}
    //                 </span>
    //                 <span class="font-semibold">Pertanyaan ${index + 1}</span>
    //             </div>
    //             <p class="mb-2">${q.question}</p>
    //             <p class="text-sm text-gray-400">
    //                 Jawaban kamu: ${q.options[answer.selected] || 'Tidak menjawab'}
    //             </p>
    //             <p class="text-sm text-green-500">
    //                 Jawaban benar: ${q.options[q.correctAnswer]}
    //             </p>
    //             <p class="text-sm text-gray-500 mt-2">${q.explanation}</p>
    //         </div>
    //     `;
    // });
    
    // LANGKAH 3: Tampilkan
    // document.getElementById('review-container').innerHTML = reviewHTML;
// }
```

---

## LANGKAH 7: JAVASCRIPT - UI UPDATES

### 7.1 Update Progress Bar
```javascript
// function updateProgress() {
    // const progress = ((currentQuestion + 1) / questions.length) * 100;
    // document.getElementById('progress-fill').style.width = `${progress}%`;
    // document.getElementById('question-counter').textContent = 
    //     `Pertanyaan ${currentQuestion + 1}/${questions.length}`;
// }
```

### 7.2 Highlight Options
```javascript
// function highlightOptions(selected, correct) {
    // const buttons = document.querySelectorAll('.option-btn');
    // buttons.forEach((btn, index) => {
    //     if (index === correct) {
    //         btn.classList.add('bg-green-500');
    //     } else if (index === selected && selected !== correct) {
    //         btn.classList.add('bg-red-500');
    //     }
    //     btn.classList.add('cursor-not-allowed');
    // });
// }
```

### 7.3 Show Feedback
```javascript
// function showFeedback(isCorrect, question) {
    // const feedbackContainer = document.getElementById('feedback');
    // const feedbackClass = isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400';
    // const feedbackText = isCorrect ? '✓ Benar!' : '✗ Salah!';
    
    // feedbackContainer.innerHTML = `
    //     <div class="${feedbackClass} p-4 rounded-lg">
    //         <p class="font-semibold">${feedbackText}</p>
    //         <p class="text-sm mt-2">${question.explanation}</p>
    //     </div>
    // `;
    // feedbackContainer.classList.remove('hidden');
// }
```

### 7.4 Update Next Button
```javascript
// function updateNextButton() {
    // const nextBtn = document.getElementById('next-btn');
    // if (isAnswered) {
    //     nextBtn.disabled = false;
    //     nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    // } else {
    //     nextBtn.disabled = true;
    //     nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
    // }
// }
```

---

## LANGKAH 8: TESTING & POLISH

### 8.1 Checklist Fungsional
```
□ Start screen tampil
□ Quiz dimulai saat klik Mulai
□ Pertanyaan tampil dengan benar
□ 4 opsi tampil
□ Pilihan jawaban berfungsi
□ Feedback muncul setelah jawab
□ Skor bertambah jika benar
□ Progress bar update
□ Timer berfungsi
□ Timer warning muncul
□ Auto-submit saat waktu habis
□ Hasil akhir tampil dengan benar
□ Review jawaban berfungsi
□ Retry quiz berfungsi
□ Tidak ada console error
```

### 8.2 Test Cases
```
Test 1: Jawab benar
- Pilih jawaban yang benar
- Expected: Skor +1, feedback hijau

Test 2: Jawab salah
- Pilih jawaban yang salah
- Expected: Skor tidak bertambah, feedback merah

Test 3: Waktu habis
- Tunggu timer habis
- Expected: Auto-submit, dianggap salah

Test 4: Selesai quiz
- Jawab semua pertanyaan
- Expected: Result screen tampil

Test 5: Review
- Klik Review Jawaban
- Expected: Semua jawaban tampil dengan benar/salah

Test 6: Retry
- Klik Coba Lagi
- Expected: Kembali ke start, reset semua
```

---

## 🎨 CONTOH WARNA

### **Tema Dark Modern**
```
Background: bg-gray-900
Card: bg-gray-800
Text: text-white
Secondary: text-gray-400
Option: bg-gray-700, hover:bg-gray-600
Selected: bg-blue-500
Correct: bg-green-500
Wrong: bg-red-500
Progress: bg-blue-500
Timer: text-yellow-400
Grade A: text-green-500
Grade B: text-blue-500
Grade C: text-yellow-500
Grade D: text-orange-500
Grade F: text-red-500
```

---

## 📝 CONTOH PERTANYAAN

```javascript
const sampleQuestions = [
    {
        id: 1,
        question: "Apa kepanjangan dari HTML?",
        options: [
            "A. Home Tool Markup Language",
            "B. HyperText Markup Language",
            "C. Hyperlinks and Text Markup Language",
            "D. Home Text Markup Language"
        ],
        correctAnswer: 1,
        explanation: "HTML adalah HyperText Markup Language."
    },
    {
        id: 2,
        question: "Fungsi dari CSS adalah?",
        options: [
            "A. Membuat struktur halaman",
            "B. Mengatur logika program",
            "C. Mengatur tampilan/styling",
            "D. Mengelola database"
        ],
        correctAnswer: 2,
        explanation: "CSS (Cascading Style Sheets) digunakan untuk styling/tampilan."
    },
    {
        id: 3,
        question: "Manakah yang BUKAN bahasa pemrograman?",
        options: [
            "A. JavaScript",
            "B. Python",
            "C. HTML",
            "D. Java"
        ],
        correctAnswer: 2,
        explanation: "HTML adalah bahasa markup, bukan bahasa pemrograman."
    },
    // Tambah pertanyaan lainnya!
];
```

---

## 🚀 BONUS: ENHANCEMENTS

```
□ Kategori quiz (Programming, Science, Math, dll)
□ Difficulty level (Easy, Medium, Hard)
□ Randomize pertanyaan
□ Randomize opsi jawaban
□ High score (simpan skor terbaik)
□ Sound effects (benar/salah)
□ Animasi transisi pertanyaan
□ Share hasil ke social media
□ Timed per question vs timed overall
□ Multiple quiz categories
□ Leaderboard
□ Achievement/badges
```

---

## ✅ FINAL CHECKLIST

```
□ Start screen berfungsi
□ Quiz logic berfungsi
□ Semua pertanyaan tampil
□ Pilihan jawaban berfungsi
□ Cek jawaban benar/salah
□ Score dihitung dengan benar
□ Progress bar berfungsi
□ Timer berfungsi
□ Feedback tampil
□ Result screen berfungsi
□ Review jawaban berfungsi
□ Retry berfungsi
□ Responsive design
□ Tidak ada console error

Total: ___/14 checklist terpenuhi
```

---

*Quiz App adalah project yang bagus untuk memahami STATE MANAGEMENT!*
