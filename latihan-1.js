// Basic loopoing
// TODO: buatkan fungsi untuk menampilkan angka genap

const fungsiAngkaGenap = (batasAngka) => {
    let arrGenap = [];
    for (let i = 1; i <= batasAngka; i++) {
        if (i % 2 === 0) {
            arrGenap.push(i);
        }
    }
    return arrGenap;
};

// TODO: buatkan fungsi untuk menampilkan hasil dari array 2D

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

function tampilHasil(input) {

    // NOTE: menggunakan forEach
    input.forEach((row, rowIndex) => {
        row.forEach((element, colIndex) => {
            console.log(`Baris ${rowIndex + 1} kolom ke ${colIndex + 1} => ${element}`);
        });
    });
}

// Manipulasi Array 2 Dimensi
const scores = [
    [85, 92, 78, 96],
    [76, 88, 91, 85],
    [98, 87, 94, 89],
    [82, 95, 88, 92]
];

// TODO: jumlahkan semua elemen dalam array scores
function sumMatrix(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result += arr[i][j];
        }
    }

    return result;
}

// TODO: hitung nilai tertinggi dalam array 2D scores
const highScore = (arr) => {
    let highValue = arr[0][0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > highValue) {
                highValue = arr[i][j];
            }
        }
    }

    return highValue;
};

// TODO: hitung berapa banyak yang score nya di atas 90
const countAbove90 = (matrix) => {
    let result = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 90) {
                result++;
            }
        }
    }
    return result;
};

// NOTE: basic looping
const dataDariSheet = [
    ["ID", "Nama", "Departemen", "Status"],
    ["EMP01", "Budi", "IT", "Aktif"],
    ["EMP02", "Siti", "HR", "Aktif"],
    ["EMP03", "Baron", "Admin", "Aktif"],
    ["EMP04", "Eko", "Finance", "Non-Aktif"]
];

function tampilData(data) {
    for (let i = 0; i < data.length; i++) {
        const barisSaatIni = data[i];
        console.log(`Data di baris ke ${i} : ${barisSaatIni}`);
    }
}

// NOTE: looping dengan kondisi if
function tampilDataKaryawanAktif(dataKaryawan) {
    let jmlKaryawan = 0;
    for (let i = 1; i < dataKaryawan.length; i++) {
        if (dataKaryawan[i][3] === 'Aktif') {
            console.log(dataKaryawan[i]);
            jmlKaryawan++;
        }
    }

    console.log(`Jumlah karyawan aktif : ${jmlKaryawan}`);
}

// TODO: Transformasi baris array menjadi object
function transformData(dataKaryawan) {
    // siapkan wadah hasil akhir nya
    const hasilTransformasi = [];

    for (let i = 1; i < dataKaryawan.length; i++) {
        const barisArray = dataKaryawan[i];

        // proses transformasi di dalam loop
        // membuat object kosong untuk setiap baris
        const objKaryawan = {
            id: barisArray[0],      // ambil data dari setiap index 
            nama: barisArray[1],
            dept: barisArray[2],
            status: barisArray[3]
        };

        // masukan objek yang sudah jadi ke dalam wadah hasil di atas
        hasilTransformasi.push(objKaryawan);
    }

    // kembalikan wadah yang sudah berisi data yang di transformasikan
    return hasilTransformasi;
}

// TODO: mencari karyawan berdasarkan id
function cariKaryawan(dataKaryawan, idKaryawan) {
    for (let i = 1; i < dataKaryawan.length; i++) {
        const dataIdKaryawan = dataKaryawan[i][0];

        if (dataIdKaryawan === idKaryawan) {
            return {
                id: dataKaryawan[i][0],
                name: dataKaryawan[i][1],
                dept: dataKaryawan[i][2]
            };
        }
    }

    return `Tidak ada data karyawan dengan id ${idKaryawan}`;
}

// NOTE: manipulasi array
// TODO: ubah isi array menjadi dua kali lipat
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const duaKaliLipat = (arrayAngka) => {
    let angkaDikaliDua = [];
    for (let i = 0; i < arrayAngka.length; i++) {
        angkaDikaliDua.push(arrayAngka[i] * 2);
    }
    return angkaDikaliDua;
};

// NOTE: menggunakan map 
const duaKaliLipat_map = (arrayAngka) => {
    return arrayAngka.map((item) => item * 2);
};

// TODO: DIberikan data harga dalam rupiah, ubah menjadi format string dengan prefix Rp.
const harga = [5000, 12000, 3000];
const hargaFormat = (input) => {
    return input.map((item) => `Rp. ${item}`);
};

// TODO: cari angka genap menggunakan filter
const angkaGenap = (angka) => {
    return angka.filter((item) => item % 2 === 0);
};

// TODO: filter yang lulus dengan nilai di atas 75
const nilaiSiswa = [80, 50, 90, 65, 75, 40];
const lulus = (nilai) => {
    return nilai.filter((item) => item >= 75);
};

// TODO: jumlahkah total gaji guru
const gajiGuru = [
    { nama: "Budi", gaji: 3000000 },
    { nama: "Siti", gaji: 4000000 },
    { nama: "Joko", gaji: 3500000 }
];

const totalGaji = (arrayGaji) => {
    return arrayGaji.reduce((total, guru) => total + guru.gaji, 0);
};

// TODO: dari data gaji guru diatas buat :
// ambil yang gajinya di bawah 4jt
// naikan gaji mereka sebesar 10%
// hitung total pengeluaran sekolah untuk kenaikan gaji ini
const totalAnggaran = (dataGaji) => {
    return dataGaji.filter((guru) => guru.gaji < 4000000)
        .map((guru) => guru.gaji * 0.1)
        .reduce((total, kenaikan) => total + kenaikan);
};

// TODO: menemukan angka 7 dari x percobaan
const sampaiTujuh = () => {
    let num;
    let percobaan = 0;

    while (num !== 7) {
        num = Math.floor(Math.random() * 10) + 1;
        percobaan++;
        console.log(`Percobaan ${percobaan} = ${num}`);
    }
    console.log(`Ditemukan angka 7 dari ${percobaan} percobaan`);
};

// TODO: menghitung rata-rata skor siswa
const skorSiswa = [85, 92, 78, 96, 88];
const hitungRatarata = (skors) => {
    let total = 0;
    for (const skor of skors) {
        total += skor;
    }

    return total / skors.length;
};

// TODO: ekstrak hanya nama mahasiswa saja
const mahasiswa = [
    { nama: 'Susanto', nilai: 50 },
    { nama: 'Erlangga', nilai: 40 },
    { nama: 'Kalingga', nilai: 90 },
    { nama: 'Ira', nilai: 80 }
];

const ekstrakNama = (objMhs) => {
    return objMhs.map((mhs) => mhs.nama);
};

// TODO: tambahkan nilai mahasiswa berdasarkan grade
const mahasiswaDenganGrade = (mahasiswas) => {
    return mahasiswas.map((mhs) => {
        let grade;
        if (mhs.nilai >= 90) grade = "A";
        else if (mhs.nilai >= 80) grade = "B";
        else if (mhs.nilai >= 70) grade = "C";
        else grade = "D";

        return {
            ...mhs,
            grade: grade
        };
    });
};

// TODO: filter function di atas harga 500
const produk = [
    { nama: "Laptop", harga: 1200, kategori: "Elektronik" },
    { nama: "Buku", harga: 20, kategori: "Pendidikan" },
    { nama: "Telepon", harga: 800, kategori: "Elektronik" },
    { nama: "Meja", harga: 300, kategori: "Perabotan" }
];

const filterFunction = (produks) => {
    return produks.filter(produk => produk.harga > 500);
};

// TODO: jumlahkan harga semua produk
const jumlahHarga = (produks) => {
    return produks.reduce((acc, curr) => acc + curr.harga, 0);
};