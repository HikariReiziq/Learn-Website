
console.log('--- Bab 2: Angka & Matematika ---');

// 1. Operator Aritmatika Dasar
// JavaScript bisa melakukan perhitungan matematika dasar.

console.log('Penjumlahan: 5 + 3 =', 5 + 3);       // Hasil: 8
console.log('Pengurangan: 10 - 4 =', 10 - 4);     // Hasil: 6
console.log('Perkalian: 6 * 7 =', 6 * 7);       // Hasil: 42
console.log('Pembagian: 20 / 5 =', 20 / 5);       // Hasil: 4
console.log(2/3);

// 2. Urutan Operasi (Order of Operations)
// JavaScript mengikuti aturan matematika standar (PEMDAS/BODMAS).
// Perkalian (*) dan pembagian (/) akan dieksekusi terlebih dahulu
// sebelum penjumlahan (+) dan pengurangan (-).
// Gunakan tanda kurung () untuk memprioritaskan operasi.

let hasil = 5 + 3 * 2;
console.log('5 + 3 * 2 =', hasil); // Hasil: 11 (bukan 16), karena 3 * 2 dihitung dulu.

let hasilDenganKurung = (5 + 3) * 2;
console.log('(5 + 3) * 2 =', hasilDenganKurung); // Hasil: 16, karena 5 + 3 dihitung dulu.


// 3. Angka Desimal (Floating-Point Numbers)
// JavaScript bisa menangani angka desimal.

console.log('Harga Kopi:', 15000.50);

// PENTING: Ketidakakuratan Angka Desimal
// Karena cara komputer menyimpan angka desimal, terkadang ada hasil yang aneh.
// Ini adalah masalah umum di banyak bahasa pemrograman.
console.log('Masalah Desimal: 0.1 + 0.2 =', 0.1 + 0.2); // Hasilnya bukan 0.3!

// Solusi: Saat bekerja dengan uang, biasanya kita bekerja dalam satuan sen
// untuk menghindari masalah desimal ini, atau menggunakan pembulatan.


// 4. Objek 'Math'
// JavaScript menyediakan objek 'Math' yang berisi banyak fungsi matematika berguna.

// Math.round(): Membulatkan ke angka terdekat.
console.log('Math.round(2.8) =', Math.round(2.8)); // Hasil: 3
console.log('Math.round(2.2) =', Math.round(2.2)); // Hasil: 2

// Math.floor(): Membulatkan ke BAWAH.
console.log('Math.floor(2.8) =', Math.floor(2.8)); // Hasil: 2

// Math.ceil(): Membulatkan ke ATAS.
console.log('Math.ceil(2.2) =', Math.ceil(2.2)); // Hasil: 3

// Math.random(): Menghasilkan angka acak antara 0 dan 1.
console.log('Angka acak:', Math.random());