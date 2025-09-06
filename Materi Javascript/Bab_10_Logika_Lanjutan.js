console.log('--- Bab 10: Logika Lanjutan ---');

// ===============================================
// 1. Operator AND (&&)
// Kedua kondisi HARUS bernilai true.
// ===============================================
console.log('--- Operator AND (&&) ---');
const umur = 25;
const punyaSIM = true;

if (umur >= 17 && punyaSIM) {
  console.log('Anda boleh mengemudi.'); // Ini akan dijalankan
} else {
  console.log('Anda belum boleh mengemudi.');
}

const umurAnak = 15;
if (umurAnak >= 17 && punyaSIM) {
  console.log('Anak ini boleh mengemudi.');
} else {
  console.log('Anak ini belum boleh mengemudi.'); // Ini akan dijalankan
}


// ===============================================
// 2. Operator OR (||)
// CUKUP SALAH SATU kondisi bernilai true.
// ===============================================
console.log('\n--- Operator OR (||) ---');
const hariLibur = false;
const punyaKartuMember = true;

if (hariLibur || punyaKartuMember) {
  console.log('Anda dapat diskon!'); // Ini akan dijalankan
} else {
  console.log('Maaf, tidak ada diskon untuk Anda.');
}


// ===============================================
// 3. Falsy & Truthy Values
// Nilai-nilai yang dianggap 'false' oleh JavaScript:
// false, 0, '' (string kosong), NaN, undefined, null
// SEMUA nilai lain dianggap 'true' (truthy).
// ===============================================
console.log('\n--- Falsy & Truthy ---');
let namaProduk = '';
if (namaProduk) { // Ini sama dengan `if (namaProduk !== '')` --> harusnya seh if (namaProduk == true) 
  console.log(`Produk ditemukan: ${namaProduk}`);
} else {
  console.log('Produk tidak ditemukan.'); // Ini akan dijalankan karena string kosong adalah falsy
}

let jumlahStok = 50;
if (jumlahStok) { // Ini sama dengan `if (jumlahStok > 0)`
  console.log(`Stok tersedia: ${jumlahStok}`); // Ini akan dijalankan karena 50 adalah truthy
} else {
  console.log('Stok habis.');
}

const beras = document.querySelector('.beras');

let stokBeras = 10;
if (stokBeras){
    beras.innerHTML = `ada beras sebanyak ${stokBeras}`
} else {
    beras.innerHTML = `kosong berasnya bang`
}

// ===============================================
// 4. Operator Ternary ( ? : )
// Cara singkat menulis if-else.
// Format: kondisi ? nilaiJikaTrue : nilaiJikaFalse;
// ===============================================
console.log('\n--- Operator Ternary ---');
const nilaiUjian = 85;

// Cara lama dengan if-else
let hasilLulus;
if (nilaiUjian >= 75) {
  hasilLulus = 'Lulus';
} else {
  hasilLulus = 'Gagal';
}
console.log(`Hasil (if-else): ${hasilLulus}`);

// Cara baru dengan Ternary
const hasilLulusTernary = nilaiUjian >= 75 ? 'Lulus' : 'Gagal';
console.log(`Hasil (Ternary): ${hasilLulusTernary}`); // Hasilnya sama, tapi lebih singkat!


const keuntungan = -10;
const bisnis = keuntungan >= 0 ? 'Untung' :  'rugi';
console.log(`keadaan bisnis: ${bisnis}`);


