
// Latihan Gabungan untuk Bab 1-3
// Proyek: Kalkulator mesin kasir digital

const bukuTulis = 5000;
const kuantitas1 = 3;
const pensil2B = 2500;
const kuantitas2 = 2;

let total1 = bukuTulis * kuantitas1;

let total2 = pensil2B * kuantitas2;

let subtotal = total1 + total2;

let pajak = subtotal * 0.11

let total = subtotal + pajak;

let strukBelanja = `
======================================
         ** STRUK BELANJA **
======================================
- Buku Tulis (${kuantitas1} x ${bukuTulis})
  Total: Rp ${total1}
- Pensil 2B (${kuantitas2} x ${pensil2B})
  Total: Rp ${total2}

  --------------------------------------
Subtotal      : Rp ${subtotal}
PPN (11%)     : Rp ${pajak}
--------------------------------------
Total Bayar   : Rp ${total}
======================================
   Terima kasih telah berbelanja!
======================================
`
console.log(strukBelanja);