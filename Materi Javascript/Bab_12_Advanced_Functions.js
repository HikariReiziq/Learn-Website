// ===============================================
// 1. Arrow Functions (=>)
// ===============================================
console.log('--- Arrow Functions ---');

// Cara lama: regular function
function sapa(nama) {
  return `Halo, ${nama}`;
}
console.log('Regular function:', sapa('Budi'));

// Cara baru: arrow function
const sapaArrow = (nama) => {
  return `Halo, ${nama}`;
};
console.log('Arrow function:', sapaArrow('Ani'));

const sapaGwejh = (name) => {
    return `Halooo , ${name}`;
};
console.log(`Assalamualaikum,`, sapaGwejh('Hikari'));

// Jika fungsi hanya berisi satu baris `return`, bisa disingkat lagi!
const sapaSingkat = nama => `Halo, ${nama}`;
console.log('Arrow function singkat:', sapaSingkat('Candra'));


// ===============================================
// 2. Destructuring
// Cara membongkar nilai dari objek atau array.
// ===============================================
console.log('\n--- Destructuring ---');
const produk = {
  nama: 'Laptop',
  harga: 12000000,
  stok: 15
};

// Cara lama: mengambil nilai satu per satu
const namaProdukLama = produk.nama;
const hargaProdukLama = produk.harga;
console.log('Cara lama:', namaProdukLama, hargaProdukLama);

// Cara baru: destructuring objek
// "Ambil properti 'nama' dan 'harga' dari objek 'produk',
// lalu buatkan variabel dengan nama yang sama."
const { nama, harga } = produk;
console.log('Cara baru (destructuring):', nama, harga);


// ===============================================
// 3. Contoh Gabungan di To-Do List
// Ini adalah upgrade dari Latihan Bab 11 kita
// ===============================================
console.log('\n--- Contoh Gabungan: To-Do List v2 ---');

// Sekarang, array kita berisi OBJEK, bukan hanya string
// Ini memungkinkan kita menyimpan lebih banyak info (misal: tanggal)
const todoList = [
    {
        name: 'Cuci piring',
        dueDate: '2025-09-08'
    }, {
        name: 'Belajar JavaScript',
        dueDate: '2025-09-09'
    }
];

// Kita gunakan forEach dengan arrow function dan destructuring
todoList.forEach((todoObject) => {
    // Untuk setiap objek di dalam `todoList`, langsung bongkar!
    const { name, dueDate } = todoObject; //ingat, pakai parameter dalam fungsi forEach bukan variabel arraynya
    console.log(`Tugas: ${name}, Batas Waktu: ${dueDate}`);
});

const hp = [
    {
        brand: 'Samsung',
        price: 60000,
        stock: 10
    }, {
        brand: 'Iphone',
        price: 80000,
        stock: 9
    }
];

const { brand, price } = hp;
console.log('Hp ini yaitu', brand, price);

hp.forEach((listPhone) => {
    const { brand, price, stock} = listPhone;
    console.log(`brand: ${brand}, price: ${price}, stock:${stock}`)
})