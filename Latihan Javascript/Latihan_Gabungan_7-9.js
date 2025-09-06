console.log ("Game Lempar Koin")

const tombolHeads = document.querySelector('.js-heads-button');
const tombolTails = document.querySelector('.js-tails-button');
const hasil = document.querySelector('.js-hasil-lemparan');
const hasilKomputer = document.querySelector('.js-hasil-lemparan-komputer');
const skor  = document.querySelector('.js-skor');
const tombolReset = document.querySelector('.js-reset-button');

let skorMenang = 0;
let skorKalah = 0;


tombolHeads.addEventListener('click',function playGame(){
    //If-else komputer
    const randomNumber = Math.random();
    let computer;
    if (randomNumber < 0.5){
        computer = 'head';
    } else {
        computer = 'tails';
    };
    console.log('Angka random dari tombol head:', randomNumber);
    const pemainPilihHead = 'head';
    //If-else pemain
    if (pemainPilihHead == computer){
        console.log('menang (Head == Head)');
        skorMenang++;
        hasilKomputer.innerHTML = `Head`;
        skor.innerHTML = `Skor Win:${skorMenang}, Skor Losses: ${skorKalah} `
        console.log('Skor menang nambah')
    } else {
        console.log('walawe (Head =! Tails)');
        skorKalah++;
        hasilKomputer.innerHTML = `Tails`;
        skor.innerHTML = `Skor Win:${skorMenang}, Skor Losses: ${skorKalah} `
        console.log('Skor kalah nambah')
    };
});

tombolTails.addEventListener('click',function playGame(){
    //If-else komputer
    const randomNumber = Math.random();
    let computer;
    if (randomNumber < 0.5){
        computer = 'head';
    } else {
        computer = 'tails';
    };
    console.log('Angka random dari tombol tails:', randomNumber);
    const pemainPilihTails = 'tails';
    //If-else pemain
    if (pemainPilihTails == computer){
        console.log('menang (tails == tails)');
        skorMenang++;
        hasilKomputer.innerHTML = `Tails`;
        skor.innerHTML = `Skor Win:${skorMenang}, Skor Losses: ${skorKalah} `
        console.log('Skor menang [Tails] nambah')
    } else {
        console.log('walawe (tails =! head)');
        skorKalah++;
        hasilKomputer.innerHTML = `Head`;
        skor.innerHTML = `Skor Win:${skorMenang}, Skor Losses: ${skorKalah} `
        console.log('Skor kalah nambah')
    };
});

tombolReset.addEventListener('click',function reset(){
    if(skorMenang!=0 || skorKalah!=0){
        skorMenang = 0;
        skorKalah = 0;
        console.log("test skor direset");
        skor.innerHTML = `Skor Win:${skorMenang}, Skor Losses: ${skorKalah} `
    } else {
        console.log("udah 0 bejir");
    }
    console.log("test Reset");

});


