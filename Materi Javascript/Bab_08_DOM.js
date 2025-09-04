console.log('JavaScript sudah terhubung!');

// ===============================================
// LANGKAH 1: MENANGKAP ELEMEN HTML (Mata JavaScript)
// ===============================================
// Kita gunakan 'remote control' (document) untuk mencari
// dan menyimpan elemen-elemen penting ke dalam variabel.

const paragraf = document.querySelector('.js-paragraf');
const tombolUbah = document.querySelector('.js-tombol-ubah');
const tombolKembalikan = document.querySelector('.js-tombol-kembalikan');

console.log('Elemen paragraf yang berhasil ditangkap:', paragraf);
console.log('Elemen tombol yang berhasil ditangkap:', tombolUbah);


// =========================================================
// LANGKAH 2: MENDENGARKAN AKSI PENGGUNA (Telinga JavaScript)
// =========================================================
// Kita pasang "pendengar" di tombol.
// 'addEventListener' artinya: "Hei tombol, jika ada yang 'click' kamu,
// maka jalankan fungsi yang aku berikan."

tombolUbah.addEventListener('click', function() {
    // KODE DI DALAM BLOK INI HANYA AKAN BERJALAN SAAT TOMBOL DI-KLIK

    console.log('Tombol "Ubah Teks" diklik!');

    // ============================================================
    // LANGKAH 3: MEMANIPULASI HTML (Tangan JavaScript)
    // ============================================================
    // Sekarang kita perintahkan elemen 'paragraf' untuk mengubah isinya.
    paragraf.innerHTML = 'BERUBAH!';
});


// Kita pasang pendengar juga untuk tombol kedua
tombolKembalikan.addEventListener('click', function() {
    console.log('Tombol "Kembalikan" diklik!');

    // Kembalikan teks paragraf ke kondisi semula
    paragraf.innerHTML = 'Halo! Ini adalah teks asli yang ditulis di file HTML.';
});
