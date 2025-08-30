/* File 2: Bab_04_Variables.js */

// ======================================
// BAB 4: VARIABLES (VARIABEL)
// ======================================

// 1. Apa itu Variabel?
// Variabel adalah sebuah 'wadah' atau 'kontainer' untuk menyimpan nilai/data.
// Kita bisa memberi nama pada wadah ini dan menggunakannya berulang kali.

// 2. Mendeklarasikan Variabel dengan `let`
// Gunakan `let` untuk membuat variabel yang nilainya bisa diubah-ubah.

let namaVariabel; // Ini disebut deklarasi (membuat wadah)
namaVariabel = 'Halo JavaScript!'; // Ini disebut inisialisasi/assignment (mengisi wadah)

// Kita bisa langsung mendeklarasikan dan menginisialisasi dalam satu baris:
let skorPemain = 100;
console.log('Skor awal pemain:', skorPemain);

// Nilai dari variabel `let` bisa diubah:
skorPemain = 150;
console.log('Skor pemain setelah naik level:', skorPemain);

// 3. Mendeklarasikan Variabel dengan `const`
// Gunakan `const` (singkatan dari constant) untuk membuat variabel yang nilainya TIDAK AKAN PERNAH berubah.
// Ini adalah praktik yang sangat baik untuk nilai-nilai yang seharusnya tetap, seperti kecepatan gravitasi atau tarif pajak.

const PI = 3.14159;
const NAMA_SITUS = 'Website Keren';

console.log('Nilai PI adalah:', PI);
console.log('Selamat datang di', NAMA_SITUS);

// Jika kita mencoba mengubah nilai `const`, kita akan mendapatkan error.
// Coba hapus tanda komentar di bawah ini untuk melihat error di konsol.
// PI = 3.14; // Uncaught TypeError: Assignment to constant variable.


// 4. Aturan Penamaan Variabel
// - Nama variabel hanya boleh mengandung huruf, angka, underscore (_), dan tanda dolar ($).
// - Nama tidak boleh diawali dengan angka.
// - Nama bersifat case-sensitive ('nama' dan 'Nama' adalah dua variabel yang berbeda).
// - Gunakan gaya 'camelCase' untuk nama yang lebih dari satu kata (sangat direkomendasikan).
let namaLengkapPengguna = 'Hikari Reiziq'; // Contoh camelCase
console.log('Nama pengguna:', namaLengkapPengguna);

// 5. Kesimpulan: `let` vs `const`
// - Gunakan `const` secara default untuk semua variabel Anda.
// - Jika Anda tahu bahwa nilai variabel tersebut PERLU diubah nanti, baru gunakan `let`.
// - Hindari menggunakan `var` (cara lama) karena memiliki perilaku yang bisa membingungkan.