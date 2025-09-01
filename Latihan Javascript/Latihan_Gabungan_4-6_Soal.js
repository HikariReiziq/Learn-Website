function konversiNilai(nilaiAngka){
    if(nilaiAngka >= 90){
        nilai = "A (Sangat Baik)";
        return nilai;
    } else if (nilaiAngka >= 80){
        nilai = "B (Baik)";
        return nilai;
    } else if (nilaiAngka >= 70){
        nilai = "C (Cukup)";
        return nilai;
    } else if (nilaiAngka >= 60){
        nilai = "D (Perlu Perbaikan)";
        return nilai;
    } else if (nilaiAngka < 60 ){
        nilai = "E (Gagal)"
    }
}

console.log("--- Laporan Hasil Konversi Nilai ---")
const budi = konversiNilai(85);
console.log("Siswa Budi (Nilai: 85) mendapatkan predikat:", (nilai));

const Ani = konversiNilai(92);
console.log("Siswa Ani (Nilai: 92) mendapatkan predikat:", (nilai));

const Candra = konversiNilai(58);
console.log("Siswa Candra (Nilai: 58) mendapatkan predikat:", (nilai));

const Dewi = konversiNilai(75);
console.log("Siswa Dewi (Nilai: 75) mendapatkan predikat:", (nilai));

console.log("--- Proses Selesai ---")