console.log('--- Bab 11: Arrays and Loops ---');

// ===============================================
// 1. Membuat dan Mengakses Array
// Array adalah daftar nilai, dibuat dengan kurung siku [].
// ===============================================
const daftarBuah = ['Apel', 'Jeruk', 'Mangga', 'Pisang'];
console.log('Isi array:', daftarBuah);

// Mengakses nilai berdasarkan "indeks" (posisi).
// Indeks SELALU dimulai dari 0.
console.log('Buah pertama (indeks 0):', daftarBuah[0]); // -> 'Apel'
console.log('Buah ketiga (indeks 2):', daftarBuah[2]); // -> 'Mangga'

// Properti .length untuk mengetahui jumlah item
console.log('Jumlah buah pada var [daftarBuah]:', daftarBuah.length); // -> 4


// ===============================================
// 2. Memodifikasi Array
// ===============================================
// Mengubah nilai pada indeks tertentu
daftarBuah[1] = 'Semangka';
console.log('Array setelah diubah:', daftarBuah); // 'Jeruk' menjadi 'Semangka'

// Menambah item baru di akhir array dengan .push()
daftarBuah.push('Durian');
console.log('Array setelah ditambah:', daftarBuah);


// ===============================================
// 3. Loops (Perulangan) dengan .forEach()
// Cara modern untuk melakukan sesuatu pada setiap item di array.
// ===============================================
console.log('\n--- Menampilkan setiap buah dengan .forEach() ---');

daftarBuah.forEach(function(itemBuah, index) {
  // Fungsi ini akan dijalankan untuk setiap item di dalam array.
  // 'itemBuah' akan berisi nilai ('Apel', 'Semangka', dst.)
  // 'indeks' akan berisi posisinya (0, 1, dst.)
  console.log(`Buah ke-${index + 2}: ${itemBuah}`); //Knp g pakai while? .forEach adlh fungsi yang simplifikasi dari while loop
});



// ===============================================
// Contoh Praktis: Menjumlahkan semua angka dalam array
// ===============================================
const daftarNilai = [80, 95, 75, 60, 100];
let totalNilai = 0; // Variabel untuk menyimpan hasil penjumlahan

daftarNilai.forEach(function(nilai) {
  totalNilai = totalNilai + nilai; // atau totalNilai += nilai;
});

console.log(`\nTotal dari semua nilai [${daftarNilai}] adalah:`, totalNilai);