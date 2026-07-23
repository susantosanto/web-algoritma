/**
 * ============================================
 * QUIZ APP
 * ============================================
 * 
 * MASALAH:
 * Aplikasi kuis dengan fitur:
 * 1. Tampilkan pertanyaan satu per satu
 * 2. Pilihan jawaban (multiple choice)
 * 3. Cek benar/salah
 * 4. Hitung skor
 * 5. Timer
 * 6. Progress bar
 * 7. Hasil akhir dengan review
 * 
 * KONSEP:
 * - State Management (banyak status)
 * - Timer (setInterval, clearInterval)
 * - Array of Objects (pertanyaan)
 * - Conditional Logic (benar/salah)
 * - Screen Management (ganti tampilan)
 */


// ============================================
// DATA PERTANYAAN
// ============================================

/**
 * KONSEP: Array of Objects untuk pertanyaan
 * 
 * CONTOH KONSEP (bukan jawaban):
 * 
 * const pertanyaan = [
 *     {
 *         id: 1,
 *         question: 'Pertanyaan di sini?',
 *         options: ['A. Jawaban 1', 'B. Jawaban 2', 'C. Jawaban 3', 'D. Jawaban 4'],
 *         correctAnswer: 1, // index jawaban benar (B)
 *         explanation: 'Penjelasan di sini'
 *     },
 * ];
 * 
 * --- Mengakses data ---
 * pertanyaan[0].question; // teks pertanyaan
 * pertanyaan[0].options[1]; // opsi B
 * pertanyaan[0].correctAnswer; // index jawaban benar
 * 
 * --- Panjang array ---
 * pertanyaan.length; // jumlah pertanyaan
 * 
 * TULIS KODEMU DI SINI:
 * Buat array "questions" dengan minimal 5 pertanyaan
 * Topik: HTML, CSS, JavaScript (atau topik lain)
 */


// ============================================
// STATE QUIZ
// ============================================

/**
 * KONSEP: State Management = mengelola status aplikasi
 * 
 * Status yang perlu diingat:
 * - Pertanyaan ke berapa sekarang?
 * - Berapa skor?
 * - Jawaban apa saja yang sudah dipilih?
 * - Waktu tersisa?
 * 
 * CONTOH KONSEP:
 * let currentQuestion = 0; // index pertanyaan
 * let score = 0;           // skor
 * let answers = [];        // array jawaban
 * let timeLeft = 30;       // waktu (detik)
 * let isAnswered = false;  // sudah dijawab?
 * 
 * TULIS KODEMU DI SINI:
 */


// ============================================
// SCREEN MANAGEMENT
// ============================================

/**
 * KONSEP: Mengganti tampilan screen
 * 
 * CONTOH KONSEP:
 * 
 * --- Menyembunyikan screen ---
 * document.getElementById('screen-start').classList.add('hidden');
 * 
 * --- Menampilkan screen ---
 * document.getElementById('screen-quiz').classList.remove('hidden');
 * 
 * --- Toggle screen ---
 * function showScreen(screenId) {
 *     // Sembunyikan semua screen
 *     document.querySelectorAll('.screen').forEach(s => {
 *         s.classList.add('hidden');
 *     });
 *     // Tampilkan screen yang dipilih
 *     document.getElementById(screenId).classList.remove('hidden');
 * }
 * 
 * TULIS KODEMU DI SINI:
 */
function startQuiz() {
    // PERTANYAAN: Apa yang harus direset saat mulai?
    // KONSEP: currentQuestion = 0, score = 0, answers = []
    //
    // PERTANYAAN: Screen mana yang ditampilkan?
    // KONSEP: Sembunyikan start, tampilkan quiz
}


// ============================================
// SHOW QUESTION
// ============================================

/**
 * KONSEP: Dynamic rendering pertanyaan
 * 
 * CONTOH KONSEP:
 * 
 * const q = questions[currentQuestion];
 * 
 * // Update pertanyaan
 * document.getElementById('question').textContent = q.question;
 * 
 * // Buat opsi
 * const optionsHtml = q.options.map((opt, index) => `
 *     <button onclick="selectAnswer(${index})">${opt}</button>
 * `).join('');
 * 
 * document.getElementById('options').innerHTML = optionsHtml;
 * 
 * // Update progress
 * const progress = ((currentQuestion + 1) / questions.length) * 100;
 * document.getElementById('progress').style.width = `${progress}%`;
 * 
 * TULIS KODEMU DI SINI:
 */
function showQuestion() {
    // PERTANYAAN: Bagaimana mengambil pertanyaan saat ini?
    // KONSEP: questions[currentQuestion]
    //
    // PERTANYAAN: Bagaimana membuat opsi jawaban?
    // KONSEP: q.options.map((opt, i) => `<button onclick="selectAnswer(${i})">${opt}</button>`).join('')
    //
    // PERTANYAAN: Bagaimana update progress bar?
    // KONSEP: ((currentQuestion + 1) / questions.length) * 100
}


// ============================================
// SELECT ANSWER
// ============================================

/**
 * KONSEP: Logic benar/salah
 * 
 * CONTOH KONSEP:
 * 
 * function selectAnswer(index) {
 *     if (isAnswered) return; // sudah dijawab
 *     
 *     const q = questions[currentQuestion];
 *     const isCorrect = index === q.correctAnswer;
 *     
 *     if (isCorrect) {
 *         score++;
 *     }
 *     
 *     answers.push({
 *         questionId: q.id,
 *         selected: index,
 *         correct: q.correctAnswer,
 *         isCorrect: isCorrect
 *     });
 *     
 *     isAnswered = true;
 *     showFeedback(isCorrect, q);
 *     highlightOptions(index, q.correctAnswer);
 * }
 * 
 * TULIS KODEMU DI SINI:
 */
function selectAnswer(index) {
    // PERTANYAAN: Bagaimana cek jawaban benar?
    // KONSEP: index === questions[currentQuestion].correctAnswer
    //
    // PERTANYAAN: Bagaimana update skor?
    // KONSEP: if (isCorrect) score++
    //
    // PERTANYAAN: Bagaimana highlight opsi?
    // KONSEP: Tambah class 'bg-green-500' untuk benar, 'bg-red-500' untuk salah
}


// ============================================
// TIMER
// ============================================

/**
 * KONSEP: Timer dengan setInterval
 * 
 * CONTOH KONSEP:
 * 
 * --- Mulai timer ---
 * let timer = setInterval(() => {
 *     timeLeft--;
 *     updateTimerDisplay();
 *     if (timeLeft <= 0) {
 *         clearInterval(timer);
 *         timeUp();
 *     }
 * }, 1000); // setiap 1000ms = 1 detik
 * 
 * --- Hentikan timer ---
 * clearInterval(timer);
 * 
 * --- Reset timer ---
 * function resetTimer() {
 *     clearInterval(timer);
 *     timeLeft = 30;
 *     startTimer();
 * }
 * 
 * --- Format menit:detik ---
 * const menit = Math.floor(timeLeft / 60);
 * const detik = timeLeft % 60;
 * const display = `${menit}:${detik.toString().padStart(2, '0')}`;
 * 
 * TULIS KODEMU DI SINI:
 */
function startTimer() {
    // PERTANYAAN: Bagaimana membuat timer mundur?
    // KONSEP: setInterval(() => { timeLeft--; ... }, 1000)
    //
    // PERTANYAAN: Bagaimana menghentikan timer?
    // KONSEP: clearInterval(timerInterval)
}

function resetTimer() {
    // KONSEP: clearInterval() lalu startTimer() lagi
}

function updateTimerDisplay() {
    // KONSEP: Math.floor(timeLeft / 60) untuk menit, timeLeft % 60 untuk detik
}

function timeUp() {
    // KONSEP: Anggap tidak menjawab (jawaban salah)
}


// ============================================
// RESULTS
// ============================================

/**
 * KONSEP: Menghitung dan menampilkan hasil
 * 
 * CONTOH KONSEP:
 * 
 * --- Hitung persentase ---
 * const percentage = Math.round((score / total) * 100);
 * 
 * --- Tentukan grade ---
 * let grade;
 * if (percentage >= 90) grade = 'A';
 * else if (percentage >= 80) grade = 'B';
 * else if (percentage >= 70) grade = 'C';
 * else if (percentage >= 60) grade = 'D';
 * else grade = 'F';
 * 
 * --- Tampilkan hasil ---
 * document.getElementById('score').textContent = `${score}/${total}`;
 * document.getElementById('percentage').textContent = `${percentage}%`;
 * 
 * TULIS KODEMU DI SINI:
 */
function showResults() {
    // PERTANYAAN: Bagaimana menghitung persentase?
    // KONSEP: Math.round((score / questions.length) * 100)
    //
    // PERTANYAAN: Bagaimana menentukan grade?
    // KONSEP: if-else if berdasarkan persentase
}


// ============================================
// REVIEW
// ============================================

/**
 * KONSEP: Menampilkan review semua jawaban
 * 
 * CONTOH KONSEP:
 * 
 * function showReview() {
 *     let html = '';
 *     questions.forEach((q, i) => {
 *         const answer = answers[i];
 *         const icon = answer.isCorrect ? '✓' : '✗';
 *         const color = answer.isCorrect ? 'green' : 'red';
 *         
 *         html += `
 *             <div class="p-4 mb-4 bg-gray-800 rounded">
 *                 <span class="text-${color}-500">${icon}</span>
 *                 <p><strong>Pertanyaan ${i + 1}:</strong> ${q.question}</p>
 *                 <p>Jawaban kamu: ${q.options[answer.selected]}</p>
 *                 <p>Jawaban benar: ${q.options[q.correctAnswer]}</p>
 *                 <p class="text-gray-400">${q.explanation}</p>
 *             </div>
 *         `;
 *     });
 *     document.getElementById('review').innerHTML = html;
 * }
 * 
 * TULIS KODEMU DI SINI:
 */
function showReview() {
    // PERTANYAAN: Bagaimana menampilkan semua pertanyaan?
    // KONSEP: questions.forEach() lalu buat HTML untuk setiap pertanyaan
    //
    // PERTANYAAN: Bagaimana mendapatkan jawaban user?
    // KONSEP: answers[index]
}


// ============================================
// RETRY
// ============================================

function retryQuiz() {
    // KONSEP: Sembunyikan result, tampilkan start
    // showScreen('screen-start');
}


// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Event yang perlu didengar:
    // - Klik tombol "Mulai Quiz"
    // - Klik tombol "Next"
    // - Klik tombol "Coba Lagi"
    // - Klik tombol "Review"
});
