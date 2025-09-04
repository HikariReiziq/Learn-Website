console.log('Bab 9: DOM & Events Siap!');

// --- LANGKAH 1: Tangkap semua elemen yang kita butuhkan ---
const inputNama = document.querySelector('.js-input-nama');
const tombolSapa = document.querySelector('.js-tombol-sapa');
const hasilSapaan = document.querySelector('.js-hasil-sapaan');


// --- LANGKAH 2: Buat fungsi yang akan dijalankan saat tombol diklik ---
// Memisahkan logika ke dalam fungsi adalah praktik yang sangat baik.
function sapaPengguna() {
    // Ambil teks yang diketik di dalam kotak input.
    // Untuk elemen <input>, kita menggunakan properti '.value'.
    const nama = inputNama.value;

    // Tampilkan sapaan di dalam paragraf hasil.
    // Kita pakai .innerText karena kita hanya ingin mengubah teks, bukan HTML.
    // .innerText lebih aman dan sedikit lebih cepat daripada .innerHTML untuk teks biasa.
    hasilSapaan.innerText = `Halo, ${nama}! Selamat datang di dunia JavaScript.`;
}


// --- LANGKAH 3: Pasang "pendengar event" di tombol ---
// "Hei tombolSapa, jika ada event 'click' yang terjadi padamu,
// tolong jalankan fungsi yang bernama sapaPengguna."
tombolSapa.addEventListener('click', sapaPengguna);
