### **Final Project HTML: Halaman Ekspedisi Pulau Fiksi "Aethelgard"**

**Konsep:** Anda adalah seorang web developer untuk sebuah tim penjelajah terkenal. Tim Anda baru saja menemukan sebuah pulau tersembunyi yang belum pernah terjamah, yang diberi nama "Pulau Aethelgard". Tugas Anda adalah membuat halaman web tunggal untuk mengumumkan penemuan ini kepada dunia.

**Tujuan:** Membuat halaman web yang informatif dan kaya konten mengenai Pulau Aethelgard, menggunakan semua elemen HTML yang telah dipelajari.

**Nama File:** `final_project.html`

-----

### **Instruksi Pengerjaan**

#### **Bagian 1: Struktur Utama & Header (Bab 1, 8)**

1.  Buat struktur dasar HTML (`<!DOCTYPE>`, `<html>`, dll.).
2.  Gunakan **tag-tag semantic** untuk layout utama: `<header>`, `<main>`, dan `<footer>`.
3.  Di dalam `<header>`, buat judul utama dengan `<h1>`: "Ekspedisi Penemuan Pulau Aethelgard".
4.  Di bawah judul, buat menu navigasi utama dengan `<nav>`, berisi link (`<a>`) ke bagian halaman (gunakan `href="#"` untuk saat ini): `Penemuan`, `Data Ilmiah`, `Galeri`, dan `Bergabung`.

-----

#### **Bagian 2: Konten Utama (di dalam `<main>`)**

Gunakan tag `<article>` untuk membungkus semua konten review utama tentang pulau ini.

**A. Seksi Penemuan (Bab 2, 4, 8, 9, 11)**

1.  Buat `<section>` pertama dengan judul `<h2>`: "Aethelgard: Permata yang Hilang".
2.  Gunakan `<figure>` untuk menampilkan gambar pulau yang dramatis (cari gambar pulau tropis yang indah di internet).
3.  Di bawah gambar, gunakan `<figcaption>` untuk memberi keterangan: "Pemandangan udara Pulau Aethelgard saat pertama kali ditemukan."
4.  Tulis paragraf `<p>` yang menceritakan penemuan pulau tersebut. Di dalam paragraf, pilih kata "menakjubkan" dan bungkus dengan `<span>`. Beri *inline style* `style="color: green; font-weight: bold;"` pada `<span>` tersebut untuk menguji pemahaman Anda tentang elemen inline.

**B. Seksi Data Ilmiah (Bab 6, 8)**

1.  Buat `<section>` kedua dengan judul `<h2>`: "Data & Fakta Pulau".
2.  Buat sebuah tabel (`<table>` dengan `border="1"`) yang rapi untuk menampilkan data berikut. **Tantangan:** Gunakan `rowspan` atau `colspan` jika memungkinkan.
      * **\<thead\>**: `Kategori Data`, `Informasi`
      * **\<tbody\>**:
          * Baris 1: `Koordinat` | `8° 15' LS, 115° 25' BT`
          * Baris 2: `Suhu Rata-rata` | `28°C`
          * Baris 3: `Status` | `Tidak Berpenghuni`

**C. Seksi Flora & Fauna (Bab 5, 8)**

1.  Buat `<section>` ketiga dengan judul `<h2>`: "Keanekaragaman Hayati".
2.  Buat **unordered list** (`<ul>`) untuk "Fauna Unik yang Ditemukan":
      * Kupu-kupu Kristal
      * Kera Ekor Perak
      * Burung Nada Senja
3.  Buat **ordered list** (`<ol>`) untuk "Tumbuhan Langka yang Tercatat":
      * Anggrek Bulan Zamrud
      * Pohon Kayu Bercahaya
      * Jamur Langit

**D. Seksi Dokumentasi (Bab 10, 11)**

1.  Buat `<section>` keempat dengan judul `<h2>`: "Dokumentasi Ekspedisi".
2.  Sematkan **video dari YouTube** menggunakan `<iframe>`. Anda bisa menggunakan video dokumenter alam apa saja sebagai placeholder.
3.  Di bawah video, sematkan file **audio** menggunakan `<audio>` dengan `controls`. Anggap ini adalah rekaman "Suara Alam Aethelgard" (gunakan file audio apa saja yang Anda miliki).

-----

#### **Bagian 3: Formulir & Footer**

**A. Formulir Pendaftaran Ekspedisi (Bab 7, 8)**

1.  Setelah `<article>`, tapi masih di dalam `<main>`, buat sebuah `<aside>` dengan judul `<h3>`: "Ingin Bergabung dengan Ekspedisi Selanjutnya?".
2.  Di dalam `<aside>`, buat sebuah `<form>` lengkap yang menanyakan:
      * Nama Lengkap (`type="text"`)
      * Email (`type="email"`)
      * Keahlian Utama (pilihan **radio button**: "Peneliti", "Fotografer", "Medis")
      * Kontribusi yang Bisa Diberikan (**textarea**)
      * Checkbox persetujuan syarat dan ketentuan.
      * Tombol `<button type="submit">`.

**B. Footer Halaman (Bab 8, 11)**

1.  Terakhir, buat `<footer>`.
2.  Di dalamnya, tulis informasi hak cipta menggunakan entitas karakter `&copy;`. Contoh: `&copy; 2025 Tim Ekspedisi Nusantara.`
3.  Tambahkan motto ekspedisi di baris baru: "Menjelajah & Menjaga."

-----

Proyek ini akan menjadi portofolio pertama saya yang menunjukkan bahwa saya telah menguasai semua elemen fundamental HTML.

