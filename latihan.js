// NOTE: Math Random & Math Floor
// Akan mendapatkan angka dari 1 - 10;
const numRandom = Math.floor(Math.random() * 10) + 1;
// Akan mendapatkan angka dari 0 - 9;
const numRandom2 = Math.floor(Math.random() * 10);
// Mencari angka dari range 5 - 10
const numRandom3 = Math.floor(Math.random() * 6) + 5;
// Pilih Item dari Array
const buah = ['Apel', 'Jeruk', 'Mangga', 'Semangka', 'Pisang'];
const indexArrayBuah = Math.floor(Math.random() * buah.length);
const itemArrayBuah = buah[indexArrayBuah];

// generate token random
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
let token = '';
for (let i = 0; i < chars.length; i++) {
    const indexChar = Math.floor(Math.random() * chars.length);
    token = token + chars[indexChar];
}

// TODO: Latihan Hari ke - 2
// Latihan 1 : Generator OTP (One Time Password)
const generatorOTP = (lengthOtp) => {
    const number = '1234567890';
    let otp = '';
    for (let i = 0; i < lengthOtp; i++) {
        const indexNumber = Math.floor(Math.random() * number.length);
        otp += number[indexNumber];
    }
    return otp;
};

// Latihan 2: Tebak Angka
const tebakAngka = (angkaTebakan) => {
    const angkaRandom = Math.floor(Math.random() * 9) + 1;
    if (angkaTebakan === angkaRandom) return `Angka Rahasia ${angkaRandom}, Selamat! tebakan anda benar`;
    return `Angka rahasia ${angkaRandom}, Maaf! Tebakan anda salah`;
};

// TODO: Latihan debuging
// Random Number Generator
function getRandomNumber(min, max) {
    let random = Math.random() * (max - min + 1) + min;
    return Math.floor(random);
}
console.log(getRandomNumber(5, 10));