/* File 2: Bab_06_Functions.js */

// ======================================
// BAB 6: FUNCTIONS (FUNGSI)
// ======================================

console.log('--- 1. Mendefinisikan & Memanggil Fungsi ---');
// Fungsi adalah blok kode yang bisa kita beri nama dan panggil kapan saja.
// Ini membantu kita menghindari pengulangan kode (Prinsip DRY: Don't Repeat Yourself).

// Mendefinisikan fungsi
function sapaPengguna() {
  console.log('Halo, Hikari!');
  console.log('Selamat datang di program JavaScript.');
}

// Memanggil fungsi (jika tidak dipanggil, kodenya tidak akan berjalan)
sapaPengguna();
sapaPengguna(); // Kita bisa memanggilnya berkali-kali


console.log('\n--- 2. Parameter: Memberi Input pada Fungsi ---');
// Parameter adalah variabel khusus yang kita definisikan saat membuat fungsi.
// Mereka bertindak sebagai 'placeholder' untuk nilai yang akan kita berikan saat memanggil fungsi.

function sapaDenganNama(nama) { // 'nama' adalah parameter
  console.log(`Halo, ${nama}!`);
}

// Memanggil fungsi dengan memberikan nilai (disebut argumen)
sapaDenganNama('Budi'); // 'Budi' adalah argumen
sapaDenganNama('Ani');


console.log('\n--- 3. Return: Mendapatkan Output dari Fungsi ---');
// Terkadang kita ingin fungsi tidak hanya melakukan sesuatu, tapi juga memberikan hasil kembali.
// Kita menggunakan kata kunci `return` untuk ini.

function hitungLuasPersegi(sisi) {
  const luas = sisi * sisi;
  return luas; // Mengembalikan nilai 'luas' keluar dari fungsi
}

// Memanggil fungsi dan menyimpan hasilnya dalam sebuah variabel
const luasKotakA = hitungLuasPersegi(5); // luasKotakA akan bernilai 25
const luasKotakB = hitungLuasPersegi(10); // luasKotakB akan bernilai 100

console.log('Luas Kotak A (sisi 5) adalah:', luasKotakA);
console.log('Luas Kotak B (sisi 10) adalah:', luasKotakB);
console.log('Total luas kedua kotak adalah:', luasKotakA + luasKotakB);

//coba 
function hitungCuy(panjang, lebar){
    const luas = panjang * lebar;
    return luas;
}

const luas1 = hitungCuy(5, 3);
const luas2 = hitungCuy(7, 4);

console.log("luas 1 adalah =", luas1);
console.log("luas 2 adalah =", luas2);
console.log("Total luas 1 dan 2 =", luas1 + luas2);

console.log('\n--- Contoh Gabungan ---');
// Mengubah Celcius ke Fahrenheit

function konversiSuhu(celcius) {
  const fahrenheit = (celcius * 9/5) + 32;
  return fahrenheit;
}

const suhuDiJakarta = 31;
const suhuDiLondon = 14;

const fahrenheitJakarta = konversiSuhu(suhuDiJakarta);
const fahrenheitLondon = konversiSuhu(suhuDiLondon);

console.log(`${suhuDiJakarta}°C sama dengan ${fahrenheitJakarta}°F.`);
console.log(`${suhuDiLondon}°C sama dengan ${fahrenheitLondon}°F.`);
