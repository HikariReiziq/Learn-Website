/* File 2: Bab_05_Booleans_and_If.js */

// ======================================
// BAB 5: BOOLEANS & IF-STATEMENTS
// ======================================

console.log('--- 1. Tipe Data Boolean ---');
// Boolean adalah tipe data yang hanya memiliki dua nilai: true atau false.
// Sangat berguna untuk merepresentasikan kondisi.

const isRaining = true;
const isMember = false;

console.log('Apakah sedang hujan?', isRaining);
console.log('Apakah dia member?', isMember);


console.log('\n--- 2. Operator Perbandingan ---');
// Kita menghasilkan nilai boolean dengan membandingkan dua nilai.

console.log('Apakah 5 lebih besar dari 3?', 5 > 3); // true
console.log('Apakah 5 lebih kecil dari 3?', 5 < 3); // false

// PENTING: Gunakan === (tiga sama dengan) untuk membandingkan kesamaan nilai DAN tipe data.
// Hindari menggunakan == (dua sama dengan) karena bisa membingungkan.
console.log('Apakah angka 5 sama dengan angka 5?', 5 === 5); // true
console.log('Apakah angka 5 sama dengan teks "5"?', 5 === '5'); // false (karena tipenya beda)
console.log('Apakah angka 5 TIDAK SAMA DENGAN angka 6?', 5 !== 6); // true


console.log('\n--- 3. Pernyataan "if" (Jika) ---');
// Menjalankan kode HANYA JIKA sebuah kondisi bernilai true.

const umur = 18;

if (umur >= 17) {
  console.log('Anda sudah cukup umur untuk memiliki KTP.');
}


console.log('\n--- 4. Pernyataan "else" (Jika Tidak) ---');
// Menambahkan blok kode yang akan dijalankan jika kondisi if bernilai false.

const suhu = 29; // dalam Celcius

if (suhu > 30) {
  console.log('Cuaca hari ini panas!');
} else {
  console.log('Cuaca hari ini sejuk.');
}


console.log('\n--- 5. Pernyataan "else if" ---');
// Untuk membuat beberapa cabang logika.

const nilaiUjian = 85;

if (nilaiUjian >= 90) {
  console.log('Nilai Anda: A (Sangat Baik)');
} else if (nilaiUjian >= 80) {
  console.log('Nilai Anda: B (Baik)'); // Kode ini yang akan dijalankan
} else if (nilaiUjian >= 70) {
  console.log('Nilai Anda: C (Cukup)');
} else {
  console.log('Nilai Anda: D (Perlu belajar lagi)');
}
