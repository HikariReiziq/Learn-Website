// ======================================
// BAB 7: OBJECTS
// Mengelompokkan data yang saling berhubungan
// ======================================


// --- 1. Membuat Objek ---
// Objek dibuat dengan kurung kurawal {}
// Di dalamnya ada pasangan key: value (kunci: nilai)
const product = {
  // 'name' adalah key, 'Kaos Polos' adalah value
  name: 'Kaos Polos',
  price: 75000,
  'delivery-time': '2-3 hari' // Key dengan karakter khusus harus pakai kutip
};

console.log('Ini adalah sebuah objek produk:');
console.log(product);


// --- 2. Mengakses Properti (Data di dalam Objek) ---
// a. Dot Notation (Cara paling umum)
console.log('Nama produk (dot notation):', product.name);
console.log('Harga produk:', product.price);

// b. Bracket Notation (Wajib untuk key dengan spasi/strip)
console.log('Waktu pengiriman:', product['delivery-time']);

// Kita juga bisa memasukkan variabel ke dalam bracket notation
const propertyToAccess = 'price';
console.log('Mengakses harga via variabel:', product[propertyToAccess]); // sama dengan product['price']


// --- 3. Mengubah dan Menambah Properti ---
console.log('Harga sebelum diskon:', product.price);
product.price = 60000; // Mengubah nilai properti price
console.log('Harga setelah diskon:', product.price);

// Menambah properti baru
product.stock = 150;
console.log('Objek produk setelah ditambah stok:');
console.log(product);


// --- 4. Method (Fungsi di dalam Objek) ---
const calculator = {
  // Properti
  brand: 'Casio',
  // Method
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

// Memanggil method dari objek
const hasilPenjumlahan = calculator.add(5, 3);
console.log('Hasil 5 + 3 dari method:', hasilPenjumlahan);
console.log('Hasil 10 - 4 dari method:', calculator.subtract(10, 4));


// --- 5. Objek Bawaan (Built-in Objects) ---
// Kita sudah sering menggunakannya!
// 'console' adalah objek, dan 'log' adalah method-nya.
// 'Math' adalah objek, dan 'random' adalah method-nya.
console.log(Math.random());


console.log("Latihan");

const userProfile = {
    nama: 'Alex',
    umur: 28,
    isMember : true,
    displayInfo: function(){
        console.log("Menampilkan profil pengguna...");
    }
};
console.log("--- Data Awal ---");
console.log(userProfile);
console.log(userProfile.nama)

userProfile.displayInfo();

userProfile.umur = 29;
console.log(userProfile.umur)

userProfile.hobi = 'Membaca Buku';
console.log("--- Data Akhir ---");
console.log(userProfile);





