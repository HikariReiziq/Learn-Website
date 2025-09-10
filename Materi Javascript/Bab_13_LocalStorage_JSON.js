console.log('--- Bab 13: localStorage & JSON ---');

// localStorage hanya bisa menyimpan string.
// localStorage.setItem('namaVariabel', 'nilaiString');
localStorage.setItem('namaPengguna', 'Alex');

// Untuk mengambilnya kembali:
const namaTersimpan = localStorage.getItem('namaPengguna');
console.log('Nama yang diambil dari localStorage:', namaTersimpan);

//-----------------------------------------------------
// LALU BAGAIMANA CARA MENYIMPAN ARRAY/OBJEK?
// Jawabannya: JSON!

const dataProduk = {
    nama: 'Kaos Polos',
    harga: 75000,
    ukuran: ['S', 'M', 'L']
};

console.log('Objek JavaScript asli:', dataProduk);

// Langkah 1: Ubah objek menjadi string menggunakan JSON.stringify()
// Bayangkan ini seperti "melaminating" data Anda menjadi selembar plastik (string).
const dataString = JSON.stringify(dataProduk);
console.log('Data setelah di-stringify (menjadi string):', dataString);

// Langkah 2: Simpan string tersebut ke localStorage
localStorage.setItem('dataProdukLengkap', dataString);
console.log('Data berhasil disimpan ke localStorage.');

// Langkah 3: Ambil kembali string-nya dari localStorage
const stringDariStorage = localStorage.getItem('dataProdukLengkap');
console.log('String yang diambil dari localStorage:', stringDariStorage);

// Langkah 4: Ubah kembali string menjadi objek menggunakan JSON.parse()
// Ini seperti membuka "laminating" untuk mendapatkan data aslinya kembali.
const objekAsli = JSON.parse(stringDariStorage);
console.log('Objek setelah di-parse (kembali menjadi objek):', objekAsli);

// Sekarang kita bisa mengakses propertinya lagi!
console.log('Harga produk dari data yang dipulihkan:', objekAsli.harga);

// Untuk menghapus item dari localStorage
// localStorage.removeItem('namaVariabel');