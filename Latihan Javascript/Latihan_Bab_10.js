const umur = document.querySelector('.js-input-umur');
const tombolPeriksa = document.querySelector('.js-tombol-periksa');
const hasil = document.querySelector('.js-hasil');

tombolPeriksa.addEventListener('click', function periksaTiket(){
    const age = Number(umur.value);
    console.log('tombol berfungsi');
    if (age >= 17){
    hasil.innerHTML = `Umur anda adalah ${age}, Anda boleh membeli tiket Dewasa (D17+).`
    } else if (age >= 13) {
        hasil.innerHTML = `Umur anda adalah ${age}, Anda boleh membeli tiket Remaja (R13+).`
    } else {
        hasil.innerHTML = `Umur anda adalah ${age}, Anda hanya boleh membeli tiket Semua Umur (SU).`
    }
});



