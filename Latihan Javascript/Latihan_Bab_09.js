console.log('Latihan');

const inputAngka1 = document.querySelector('.js-input-angka1')
const inputAngka2 = document.querySelector('.js-input-angka2')
const tombolHitung = document.querySelector('.js-tombol-hitung')
const hasil = document.querySelector('.js-hasil')

function hitungKalkulator(){

    const angka1 = Number(inputAngka1.value);
    const angka2 = Number(inputAngka2.value);

    const total = angka1 + angka2;

    hasil.innerHTML = total;
    console.log(`Hitung: ${angka1} + ${angka2} = ${total}`)
};

tombolHitung.addEventListener('click', hitungKalkulator);




