// ======================================
// BAB 7: OBJECTS
// Mengelompokkan data yang saling berhubungan
// ======================================

// --- 1. Membuat Objek ---
const product = {
  name: 'Kaos Polos',          // key: value
  price: 75000,
  'delivery-time': '2-3 hari'  // key dengan karakter khusus harus pakai kutip
};

console.log('Ini adalah sebuah objek produk:');
console.log(product);

// --- 2. Mengakses Properti ---
// a. Dot Notation
console.log('Nama produk:', product.name);
console.log('Harga produk:', product.price);

// b. Bracket Notation (untuk key dengan spasi/strip)
console.log('Waktu pengiriman:', product['delivery-time']);

// Mengakses properti dengan variabel
const propertyToAccess = 'price';
console.log('Harga via variabel:', product[propertyToAccess]);

// --- 3. Mengubah & Menambah Properti ---
console.log('Harga sebelum diskon:', product.price);
product.price = 60000; // ubah nilai
console.log('Harga setelah diskon:', product.price);

product.stock = 150; // tambah properti baru
console.log('Produk setelah ditambah stok:', product);

// --- 4. Method (Fungsi di dalam Objek) ---
const calculator = {
  brand: 'Casio',
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

console.log('Hasil 5 + 3:', calculator.add(5, 3));
console.log('Hasil 10 - 4:', calculator.subtract(10, 4));

// --- 5. Objek Bawaan ---
console.log('Angka random:', Math.random());

// --- Latihan ---
const userProfile = {
  nama: 'Alex',
  umur: 28,
  isMember: true,
  displayInfo: function() {
    console.log(`Nama: ${this.nama}, Umur: ${this.umur}, Member: ${this.isMember}`);
  }
};

console.log('--- Data Awal ---');
console.log(userProfile);
console.log(userProfile.nama);

userProfile.displayInfo();

userProfile.umur = 29; // ubah umur
userProfile.hobi = 'Membaca Buku'; // tambah properti baru

console.log('--- Data Akhir ---');
console.log(userProfile);

const mahasiswa = {
  nama: 'Hikari',
  jurusan: 'Teknologi Informasi',
  angkatan: 2023,
  perkenalan: function() {
    console.log(`Halo, saya ${this.nama} dari jurusan ${this.jurusan}.`);
  }
};

mahasiswa.perkenalan();
console.log('Angkatan:', mahasiswa.angkatan);



