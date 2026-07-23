/**
 * ============================================
 * QUIZ APP
 * ============================================
 * 
 * MASALAH:
 * Membuat aplikasi kuis yang bisa:
 * 1. Menampilkan pertanyaan satu per satu
 * 2. Pilihan jawaban (multiple choice)
 * 3. Cek jawaban benar/salah
 * 4. Hitung skor
 * 5. Timer untuk setiap pertanyaan
 * 6. Progress bar
 * 7. Hasil akhir dengan review
 * 
 * KONSEP YANG DIPAKAI:
 * - State Management (mengelola banyak status)
 * - Timer (setInterval, clearInterval)
 * - Array of Objects (menyimpan pertanyaan)
 * - Conditional Logic (benar/salah)
 * - DOM Manipulation (update tampilan)
 * - Template Literal (membuat HTML dinamis)
 * 
 * CARA BERPIKIR:
 * Quiz adalah "mesin keadaan" (state machine):
 * - Ada keadaan AWAL (belum mulai)
 * - Ada keadaan BERLANGSUNG (sedang quiz)
 * - Ada keadaan SELESAI (lihat hasil)
 * 
 * Setiap keadaan punya aturan sendiri.
 * Kita perlu mengelola transisi antar keadaan.
 */


// ============================================
// DATA PERTANYAAN
// ============================================

/**
 * MASALAH: Menyimpan pertanyaan dan jawaban.
 * 
 * STRUKTUR DATA:
 * Setiap pertanyaan punya:
 * - id: nomor urut
 * - question: teks pertanyaan
 * - options: array 4 pilihan jawaban
 * - correctAnswer: index jawaban yang benar
 * - explanation: penjelasan mengapa jawaban itu benar
 * 
 * PERTANYAAN:
 * - Mengapa jawaban disimpan sebagai index?
 *   → Karena array lebih mudah diakses daripada string
 * - Mengapa perlu explanation?
 *   → Untuk review setelah quiz selesai
 * 
 * TULIS KODEMU DI SINI:
 * Buat array "questions" dengan minimal 5 pertanyaan
 * 
 * CONTOH STRUKTUR (bukan kode):
 * {
 *     id: 1,
 *     question: "Apa kepanjangan dari HTML?",
 *     options: ["A. ...", "B. ...", "C. ...", "D. ..."],
 *     correctAnswer: 1,  // index dari jawaban benar (B)
 *     explanation: "HTML adalah HyperText Markup Language"
 * }
 */


// ============================================
// STATE QUIZ
// ============================================

/**
 * MASALAH: Menyimpan status quiz.
 * 
 * STATE YANG PERLU DISIMPAN:
 * - currentQuestion: index pertanyaan saat ini
 * - score: skor yang didapat
 * - answers: array jawaban user
 * - selectedAnswer: jawaban yang dipilih
 * - isAnswered: sudah dijawab atau belum
 * - timeLeft: waktu tersisa (detik)
 * - timerInterval: referensi timer
 * 
 * TULIS KODEMU DI SINI:
 * Buat variabel-variabel state di atas
 */


// ============================================
// FUNGSI: START QUIZ
// ============================================

/**
 * MASALAH: Memulai quiz dari awal.
 * 
 * ALUR BERPIKIR:
 * 1. Reset semua state
 * 2. Sembunyikan start screen
 * 3. Tampilkan quiz screen
 * 4. Tampilkan pertanyaan pertama
 * 5. Mulai timer
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "startQuiz"
 */
function startQuiz() {
    // PERTANYAAN 1: Apa yang harus direset?
    // PETUNJUK: Semua state kembali ke nilai awal
    // KONSEP: currentQuestion = 0, score = 0, answers = []
    
    // PERTANYAAN 2: Bagaimana mengganti screen?
    // PETUNJUK: Sembunyikan start, tampilkan quiz
    // KONSEP: classList.add/remove('hidden')
    
    // PERTANYAAN 3: Bagaimana memulai timer?
    // PETUNJUK: Panggil fungsi timer
    // KONSEP: startTimer()
}


// ============================================
// FUNGSI: SHOW QUESTION
// ============================================

/**
 * MASALAH: Menampilkan pertanyaan saat ini.
 * 
 * ALUR BERPIKIR:
 * 1. Ambil data pertanyaan berdasarkan index
 * 2. Update teks pertanyaan
 * 3. Buat tombol opsi
 * 4. Update progress bar
 * 5. Reset state jawaban
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "showQuestion"
 */
function showQuestion() {
    // PERTANYAAN 1: Bagaimana mengambil pertanyaan?
    // PETUNJUK: Akses array berdasarkan index
    // KONSEP: questions[currentQuestion]
    
    // PERTANYAAN 2: Bagaimana membuat opsi jawaban?
    // PETUNJUK: Loop array options, buat tombol untuk setiap opsi
    // KONSEP: .map() atau .forEach() untuk membuat HTML
    
    // PERTANYAAN 3: Bagaimana menghubungkan opsi dengan fungsi?
    // PETUNJUK: Setiap tombol perlu event handler
    // KONSEP: onclick="selectAnswer(index)" atau addEventListener
    
    // PERTNYAAN 4: Bagaimana update progress?
    // PETUNJUK: Hitung persentase pertanyaan yang sudah dilewati
    // KONSEP: progress = ((currentQuestion + 1) / questions.length) * 100
}


// ============================================
// FUNGSI: SELECT ANSWER
// ============================================

/**
 * MASALAH: User memilih jawaban.
 * 
 * ALUR BERPIKIR:
 * 1. Cek apakah sudah dijawab (jika ya, return)
 * 2. Simpan jawaban yang dipilih
 * 3. Cek apakah benar
 * 4. Update skor jika benar
 * 5. Simpan ke array answers
 * 6. Tampilkan feedback
 * 7. Highlight opsi (hijau untuk benar, merah untuk salah)
 * 8. Enable tombol Next
 * 9. Stop timer
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "selectAnswer" yang menerima parameter "index"
 */
function selectAnswer(index) {
    // PERTANYAAN 1: Mengapa cek isAnswered?
    // PETUNJUK: Agar user tidak bisa mengubah jawaban
    // KONSEP: if (isAnswered) return;
    
    // PERTANYAAN 2: Bagaimana cek jawaban benar?
    // PETUNJUK: Bandingkan index dengan correctAnswer
    // KONSEP: const isCorrect = index === questions[currentQuestion].correctAnswer
    
    // PERTANYAAN 3: Bagaimana update skor?
    // PETUNJUK: Jika benar, tambah 1
    // KONSEP: if (isCorrect) score++;
    
    // PERTANYAAN 4: Bagaimana highlight opsi?
    // PETUNJUK: Tambah class warna ke tombol
    // KONSEP: tombol.classList.add('bg-green-500') untuk benar
    //         tombol.classList.add('bg-red-500') untuk salah
    
    // PERTANYAAN 5: Bagaimana menampilkan feedback?
    // PETUNJUK: Tampilkan explanation dari pertanyaan
    // KONSEP: feedbackContainer.innerHTML = '...'+ question.explanation + '...'
}


// ============================================
// FUNGSI: NEXT QUESTION
// ============================================

/**
 * MASALAH: Pindah ke pertanyaan berikutnya atau selesai.
 * 
 * ALUR BERPIKIR:
 * 1. Cek apakah ini pertanyaan terakhir
 * 2. Jika ya: tampilkan hasil
 * 3. Jika tidak: increment index, tampilkan pertanyaan baru
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "nextQuestion"
 */
function nextQuestion() {
    // PERTANYAAN: Bagaimana cek pertanyaan terakhir?
    // PETUNJUK: Bandingkan currentQuestion dengan panjang array - 1
    // KONSEP: if (currentQuestion === questions.length - 1)
}


// ============================================
// FUNGSI: TIMER
// ============================================

/**
 * MASALAH: Timer mundur untuk setiap pertanyaan.
 * 
 * KONSEP:
 * - setInterval: menjalankan fungsi berulang setiap X milidetik
 * - clearInterval: menghentikan setInterval
 * - Timer berjalan mundur dari 30 ke 0
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "startTimer", "resetTimer", "updateTimerDisplay", "timeUp"
 */
function startTimer() {
    // PERTANYAAN 1: Bagaimana membuat timer mundur?
    // PETUNJUK: Kurangi timeLeft setiap detik
    // KONSEP: setInterval(() => { timeLeft--; ... }, 1000)
    
    // PERTANYAAN 2: Bagaimana menghentikan timer?
    // PETUNJUK: Simpan referensi interval, lalu clear
    // KONSEP: timerInterval = setInterval(...); clearInterval(timerInterval)
    
    // PERTANYAAN 3: Apa yang terjadi saat waktu habis?
    // PETUNJUK: Anggap tidak menjawab (jawaban salah)
    // KONSEP: timeUp() memanggil selectAnswer(-1) atau handle khusus
}

function updateTimerDisplay() {
    // PERTANYAAN: Bagaimana menampilkan waktu?
    // PETUNJUK: Konversi detik ke format menit:detik
    // KONSEP: minutes = Math.floor(timeLeft / 60)
    //         seconds = timeLeft % 60
}


// ============================================
// FUNGSI: SHOW RESULTS
// ============================================

/**
 * MASALAH: Menampilkan hasil akhir quiz.
 * 
 * ALUR BERPIKIR:
 * 1. Hitung persentase skor
 * 2. Tentukan grade (A, B, C, D, F)
 * 3. Tampilkan score, percentage, grade
 * 4. Sembunyikan quiz screen
 * 5. Tampilkan result screen
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "showResults"
 */
function showResults() {
    // PERTANYAAN 1: Bagaimana menghitung persentase?
    // PETUNJUK: (skor / total) * 100
    // KONSEP: Math.round((score / questions.length) * 100)
    
    // PERTANYAAN 2: Bagaimana menentukan grade?
    // PETUNJUK: Gunakan if-else if berdasarkan persentase
    // KONSEP: if (percentage >= 90) grade = 'A'
    //         else if (percentage >= 80) grade = 'B'
    //         dst.
    
    // PERTANYAAN 3: Bagaimana menampilkan skor?
    // PETUNJUK: Update textContent dari element
    // KONSEP: element.textContent = `${score}/${questions.length}`
}


// ============================================
// FUNGSI: REVIEW ANSWERS
// ============================================

/**
 * MASALAH: Menampilkan review semua jawaban.
 * 
 * ALUR BERPIKIR:
 * 1. Loop setiap pertanyaan
 * 2. Tampilkan: pertanyaan, jawaban user, jawaban benar, penjelasan
 * 3. Tandai benar/salah dengan warna
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "showReview"
 */
function showReview() {
    // PERTANYAAN 1: Bagaimana menampilkan semua pertanyaan?
    // PETUNJUK: Loop array questions
    // KONSEP: questions.forEach((q, index) => { ... })
    
    // PERTANYAAN 2: Bagaimana mendapatkan jawaban user?
    // PETUNJUK: Akses array answers berdasarkan index
    // KONSEP: answers[index]
    
    // PERTANYAAN 3: Bagaimana menandai benar/salah?
    // PETUNJUK: Cek isCorrect dari answers
    // KONSEP: const isCorrect = answers[index].isCorrect
    //         Tambah class warna berdasarkan nilai boolean
}


// ============================================
// FUNGSI: RETRY QUIZ
// ============================================

/**
 * MASALAH: Mengulang quiz dari awal.
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "retryQuiz"
 */
function retryQuiz() {
    // PETUNJUK: Sembunyikan result, tampilkan start
    // KONSEP: classList.add/remove('hidden')
}


// ============================================
// FUNGSI: UI UPDATES
// ============================================

/**
 * MASALAH: Update berbagai bagian UI.
 * 
 * TULIS KODEMU DI SINI:
 * Buat fungsi "updateProgress", "highlightOptions", 
 * "showFeedback", "updateNextButton"
 */
function updateProgress() {
    // PERTANYAAN: Bagaimana update progress bar?
    // PETUNJUK: Atur lebar berdasarkan persentase
    // KONSEP: element.style.width = `${persentase}%`
}

function highlightOptions(selected, correct) {
    // PERTANYAAN: Bagaimana menandai opsi?
    // PETUNJUK: Tambah class ke tombol yang benar dan yang dipilih
    // KONSEP: Loop semua tombol, tambahkan class berdasarkan kondisi
}

function showFeedback(isCorrect, question) {
    // PERTANYAAN: Bagaimana menampilkan feedback?
    // PETUNJUK: Tampilkan pesan + explanation
    // KONSEP: isCorrect ? '✓ Benar!' : '✗ Salah!'
}


// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // PERTANYAAN: Event apa saja yang perlu didengar?
    // PETUNJUK:
    // - Klik tombol "Mulai Quiz"
    // - Klik tombol "Next"
    // - Klik tombol "Coba Lagi"
    // - Klik tombol "Review"
    // 
    // Tambahkan event listener untuk semua tombol
});
