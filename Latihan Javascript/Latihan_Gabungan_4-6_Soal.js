function konversiNilai(nilai){
    if(nilai >= 90){
        nilai = "A (Sangat Baik)";
        return nilai;
    } else if (nilai >= 80){
        nilai = "B (Baik)";
        return nilai;
    } else if (nilai >= 70){
        nilai = "C (Cukup)";
        return nilai;
    } else if (nilai >= 60){
        nilai = "D (Perlu Perbaikan)";
        return nilai;
    } else {
        nilai = "E (Gagal)"
        return nilai;
    }
}

console.log("--- Laporan Hasil Konversi Nilai ---")
console.log("");

const Nilai1 = 85;
const Siswa1 = "budi";
const Nilai2 = 92;
const Siswa2 = "Ani";
const Nilai3 = 58;
const Siswa3 = "Candra";
const Nilai4 = 75;
const Siswa4 = "Dewi";


let Hasil1 = konversiNilai(Nilai1);
let Hasil2 = konversiNilai(Nilai2);
let Hasil3 = konversiNilai(Nilai3);
let Hasil4 = konversiNilai(Nilai4);

let laporan = `
Siswa "${Siswa1}" (Nilai: ${Nilai1}) mendapatkan predikat: ${Hasil1}
Siswa "${Siswa2}" (Nilai: ${Nilai2}) mendapatkan predikat: ${Hasil2}
Siswa "${Siswa3}" (Nilai: ${Nilai3}) mendapatkan predikat: ${Hasil3}
Siswa "${Siswa4}" (Nilai: ${Nilai4}) mendapatkan predikat: ${Hasil4}
`
console.log(laporan);

// console.log("Siswa" ${Siswa1} "(Nilai: "${nilai}") mendapatkan predikat:," ${Nilai1});
console.log("");
console.log("--- Proses Selesai ---")