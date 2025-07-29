
console.log('--- Bab 3: Strings (Teks) ---');

// 1. Membuat String
// String adalah kumpulan karakter (teks) yang dibungkus dengan tanda kutip.
// Anda bisa menggunakan kutip satu (''), kutip dua (""), atau backtick (``).

console.log('Ini adalah string dengan kutip satu.');
console.log("Ini adalah string dengan kutip dua.");
console.log(`Ini adalah string dengan backtick.`);


// 2. Menggabungkan String (Concatenation)
// Anda bisa menggabungkan beberapa string menggunakan operator tambah (+).

let kataPertama = 'Selamat';
let kataKedua = 'Pagi';
let kalimatLengkap = kataPertama + ' ' + kataKedua + '!'; // Jangan lupa spasi ' '
console.log('Hasil penggabungan:', kalimatLengkap);

let firstWord = "Hello";
let secondWord = "World";
let combinedWord = firstWord + " " + secondWord + "!";
console.log(combinedWord);


// 3. Properti dan Method String
// String di JavaScript adalah sebuah objek, yang berarti ia punya properti dan method bawaan.

let contohTeks = 'Belajar JavaScript itu Menyenangkan';

// .length (Properti): Menghitung jumlah karakter (termasuk spasi).
console.log('Panjang teks:', combinedWord.length); // Hasil: 12

// .toUpperCase() (Method): Mengubah semua huruf menjadi KAPITAL.
console.log('Huruf besar:', contohTeks.toUpperCase());
console.log('huruf besar:', combinedWord.toUpperCase());

// .toLowerCase() (Method): Mengubah semua huruf menjadi kecil.
console.log('Huruf kecil:', contohTeks.toLowerCase());

// .slice(startIndex, endIndex) (Method): Mengambil sebagian dari string.
// Mengambil kata 'JavaScript' (dimulai dari indeks 8, berakhir sebelum 18).
console.log('Potongan teks:', contohTeks.slice(8, 18));


// 4. Template Literals (Cara Modern)
// Ini adalah cara TERBAIK untuk menggabungkan string dan variabel.
// Gunakan backtick (``) dan sisipkan variabel dengan sintaks ${...}.

let nama = 'Hikari';
let umur = 20;

// Cara lama dengan concatenation:
let perkenalanLama = 'Halo, nama saya ' + nama + ' dan saya berumur ' + umur + ' tahun.';
console.log('Cara lama:', perkenalanLama);

// Cara baru dengan Template Literals:
let perkenalanBaru = `Halo, nama saya ${nama} dan saya berumur ${umur} tahun.`;
console.log('Cara baru (lebih rapi):', perkenalanBaru);

let combinedWord2 = `Heyy, this is ${firstWord} and ${secondWord} !`;
console.log(combinedWord2);

// Kelebihan lain: Anda bisa membuat teks multi-baris dengan mudah.
let puisi = `
  Mawar itu merah,
  Violet itu biru. ${firstWord},
  JavaScript itu keren,
  Begitu juga kamu.
`;
console.log(puisi);
