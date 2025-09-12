// --- Bagian Interaktif dengan localStorage ---

// 1. Tangkap semua elemen HTML yang kita butuhkan
const nameInput = document.querySelector('.js-name-input');
const saveButton = document.querySelector('.js-save-button');
const loadButton = document.querySelector('.js-load-button');
const clearButton = document.querySelector('.js-clear-button');
const outputSpan = document.querySelector('.js-output-name');

// 2. Pasang event listener untuk tombol "Simpan"
saveButton.addEventListener('click', () => {
    const userName = nameInput.value;
    
    // Simpan nilai dari input ke localStorage dengan kunci 'namaPengguna'
    localStorage.setItem('namaPengguna', userName);
    
    console.log(`Nama "${userName}" berhasil disimpan!`);
    nameInput.value = ''; // Kosongkan input setelah disimpan
    //loadAndDisplayData(); // Langsung tampilkan data yang baru disimpan
});

// 3. Pasang event listener untuk tombol "Muat"
loadButton.addEventListener('click', () => {
    loadAndDisplayData();
});

// 4. Pasang event listener untuk tombol "Hapus"
clearButton.addEventListener('click', () => {
    // Hapus item dengan kunci 'namaPengguna' dari localStorage
    localStorage.removeItem('namaPengguna');
    console.log('Data namaPengguna berhasil dihapus.');
    loadAndDisplayData(); // Muat ulang untuk menampilkan bahwa data sudah kosong
});


// 5. Buat fungsi untuk memuat dan menampilkan data
//    Ini dibuat agar tidak menulis kode berulang
const loadAndDisplayData = () => {
    // Ambil data dari localStorage
    const namaTersimpan = localStorage.getItem('namaPengguna');

    // Periksa apakah data ada (tidak null)
    if (namaTersimpan) {
        outputSpan.innerText = namaTersimpan;
    } else {
        outputSpan.innerText = '(Data kosong)';
    }
    console.log('Mencoba memuat data...');
};

// 6. Panggil fungsi ini saat halaman pertama kali dibuka
//    Ini akan langsung menampilkan data jika ada.
loadAndDisplayData();

