/**
 * ============================================
 * QUIZ APP
 * ============================================
 * 
 * PETUNJUK:
 * - Isi setiap fungsi yang kosong dengan kode JavaScript
 * - Ikuti instruksi di dalam setiap fungsi
 * - Gunakan framework 7 Langkah Universal
 * 
 * FITUR YANG HARUS DIBUAT:
 * 1. Tampilkan pertanyaan satu per satu
 * 2. Pilihan jawaban (multiple choice)
 * 3. Cek jawaban benar/salah
 * 4. Hitung skor
 * 5. Timer untuk setiap pertanyaan
 * 6. Progress bar
 * 7. Hasil akhir dengan review
 */

// ============================================
// DATA PERTANYAAN
// ============================================

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
        correctAnswer: 1,
        explanation: "HTML adalah HyperText Markup Language, bahasa markup untuk membuat halaman web."
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
        explanation: "CSS (Cascading Style Sheets) digunakan untuk styling atau mengatur tampilan halaman web."
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
        explanation: "HTML adalah bahasa markup, bukan bahasa pemrograman. Tidak memiliki logika pemrograman."
    },
    {
        id: 4,
        question: "Apa fungsi dari JavaScript?",
        options: [
            "A. Mengatur warna halaman",
            "B. Membuat struktur data",
            "C. Membuat halaman web interaktif",
            "D. Mengelola server"
        ],
        correctAnswer: 2,
        explanation: "JavaScript digunakan untuk membuat halaman web menjadi interaktif dan dinamis."
    },
    {
        id: 5,
        question: "Tag HTML untuk membuat link adalah?",
        options: [
            "A. <link>",
            "B. <a>",
            "C. <href>",
            "D. <url>"
        ],
        correctAnswer: 1,
        explanation: "Tag <a> (anchor) digunakan untuk membuat hyperlink di HTML."
    }
];


// ============================================
// VARIABEL GLOBAL
// ============================================

// Index pertanyaan saat ini
// let currentQuestion = 0;

// Skor yang didapat
// let score = 0;

// Array jawaban user
// let answers = [];

// Jawaban yang dipilih
// let selectedAnswer = null;

// Sudah dijawab atau belum
// let isAnswered = false;

// Waktu tersisa (detik)
// let timeLeft = 30;

// Timer interval
// let timerInterval = null;

// Waktu per pertanyaan
// const TIME_PER_QUESTION = 30;


// ============================================
// FUNGSI: START QUIZ
// ============================================

/**
 * Fungsi untuk memulai quiz
 */
function startQuiz() {
    // LANGKAH 1: Reset state
    // currentQuestion = 0;
    // score = 0;
    // answers = [];
    
    // LANGKAH 2: Sembunyikan start screen, tampilkan quiz screen
    // document.getElementById('start-screen').classList.add('hidden');
    // document.getElementById('quiz-screen').classList.remove('hidden');
    
    // LANGKAH 3: Tampilkan pertanyaan pertama
    // showQuestion();
    // startTimer();
}


// ============================================
// FUNGSI: SHOW QUESTION
// ============================================

/**
 * Fungsi untuk menampilkan pertanyaan
 */
function showQuestion() {
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
}


// ============================================
// FUNGSI: SELECT ANSWER
// ============================================

/**
 * Fungsi saat opsi diklik
 * @param {number} index - Index opsi yang dipilih
 */
function selectAnswer(index) {
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
    
    // LANGKAH 9: Stop timer
    // clearInterval(timerInterval);
}


// ============================================
// FUNGSI: NEXT QUESTION
// ============================================

/**
 * Fungsi untuk pindah ke pertanyaan berikutnya
 */
function nextQuestion() {
    // LANGKAH 1: Cek apakah ini pertanyaan terakhir
    // if (currentQuestion === questions.length - 1) {
    //     showResults();
    // } else {
    //     currentQuestion++;
    //     showQuestion();
    //     resetTimer();
    // }
}


// ============================================
// FUNGSI: TIMER
// ============================================

/**
 * Fungsi untuk memulai timer
 */
function startTimer() {
    // timeLeft = TIME_PER_QUESTION;
    // updateTimerDisplay();
    // 
    // timerInterval = setInterval(() => {
    //     timeLeft--;
    //     updateTimerDisplay();
    //     
    //     if (timeLeft <= 0) {
    //         clearInterval(timerInterval);
    //         timeUp();
    //     }
    // }, 1000);
}

/**
 * Fungsi untuk reset timer
 */
function resetTimer() {
    // clearInterval(timerInterval);
    // startTimer();
}

/**
 * Fungsi untuk update tampilan timer
 */
function updateTimerDisplay() {
    // const minutes = Math.floor(timeLeft / 60);
    // const seconds = timeLeft % 60;
    // const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    // document.getElementById('timer').textContent = `⏱️ ${display}`;
}

/**
 * Fungsi saat waktu habis
 */
function timeUp() {
    // if (!isAnswered) {
    //     selectAnswer(-1); // Tidak menjawab
    // }
}


// ============================================
// FUNGSI: SHOW RESULTS
// ============================================

/**
 * Fungsi untuk menampilkan hasil akhir
 */
function showResults() {
    // LANGKAH 1: Stop timer
    // clearInterval(timerInterval);
    
    // LANGKAH 2: Sembunyikan quiz screen
    // document.getElementById('quiz-screen').classList.add('hidden');
    
    // LANGKAH 3: Tampilkan result screen
    // document.getElementById('result-screen').classList.remove('hidden');
    
    // LANGKAH 4: Hitung persentase
    // const percentage = Math.round((score / questions.length) * 100);
    
    // LANGKAH 5: Tentukan grade
    // let grade, gradeColor;
    // if (percentage >= 90) { grade = 'A'; gradeColor = 'text-green-500'; }
    // else if (percentage >= 80) { grade = 'B'; gradeColor = 'text-blue-500'; }
    // else if (percentage >= 70) { grade = 'C'; gradeColor = 'text-yellow-500'; }
    // else if (percentage >= 60) { grade = 'D'; gradeColor = 'text-orange-500'; }
    // else { grade = 'F'; gradeColor = 'text-red-500'; }
    
    // LANGKAH 6: Update DOM
    // document.getElementById('score-value').textContent = `${score}/${questions.length}`;
    // document.getElementById('percentage').textContent = `${percentage}%`;
    // document.getElementById('grade').textContent = grade;
    // document.getElementById('grade').className = gradeColor;
}


// ============================================
// FUNGSI: REVIEW ANSWERS
// ============================================

/**
 * Fungsi untuk menampilkan review jawaban
 */
function showReview() {
    // LANGKAH 1: Buat HTML untuk review
    // let reviewHTML = '<h2 class="text-2xl font-bold mb-6">Review Jawaban</h2>';
    
    // LANGKAH 2: Loop setiap pertanyaan
    // questions.forEach((q, index) => {
    //     const answer = answers[index];
    //     const isCorrect = answer ? answer.isCorrect : false;
    //     
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
    //                 Jawaban kamu: ${q.options[answer ? answer.selected : -1] || 'Tidak menjawab'}
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
}


// ============================================
// FUNGSI: RETRY QUIZ
// ============================================

/**
 * Fungsi untuk mengulang quiz
 */
function retryQuiz() {
    // document.getElementById('result-screen').classList.add('hidden');
    // document.getElementById('start-screen').classList.remove('hidden');
}


// ============================================
// FUNGSI: UI UPDATES
// ============================================

function updateProgress() {
    // const progress = ((currentQuestion + 1) / questions.length) * 100;
    // document.getElementById('progress-fill').style.width = `${progress}%`;
    // document.getElementById('question-counter').textContent = 
    //     `Pertanyaan ${currentQuestion + 1}/${questions.length}`;
}

function highlightOptions(selected, correct) {
    // const buttons = document.querySelectorAll('.option-btn');
    // buttons.forEach((btn, index) => {
    //     if (index === correct) {
    //         btn.classList.add('bg-green-500');
    //     } else if (index === selected && selected !== correct) {
    //         btn.classList.add('bg-red-500');
    //     }
    //     btn.classList.add('cursor-not-allowed');
    // });
}

function showFeedback(isCorrect, question) {
    // const feedbackContainer = document.getElementById('feedback');
    // const feedbackClass = isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400';
    // const feedbackText = isCorrect ? '✓ Benar!' : '✗ Salah!';
    // 
    // feedbackContainer.innerHTML = `
    //     <div class="${feedbackClass} p-4 rounded-lg">
    //         <p class="font-semibold">${feedbackText}</p>
    //         <p class="text-sm mt-2">${question.explanation}</p>
    //     </div>
    // `;
    // feedbackContainer.classList.remove('hidden');
}

function updateNextButton() {
    // const nextBtn = document.getElementById('next-btn');
    // if (isAnswered) {
    //     nextBtn.disabled = false;
    //     nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    // } else {
    //     nextBtn.disabled = true;
    //     nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
    // }
}


// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Setup start button
    // document.getElementById('start-btn').addEventListener('click', startQuiz);
    
    // Setup next button
    // document.getElementById('next-btn').addEventListener('click', nextQuestion);
    
    // Setup retry button
    // document.getElementById('retry-btn').addEventListener('click', retryQuiz);
    
    // Setup review button
    // document.getElementById('review-btn').addEventListener('click', showReview);
});
