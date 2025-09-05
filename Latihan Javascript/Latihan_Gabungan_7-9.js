console.log ("Game Lempar Koin")

const tombolHeads = document.querySelector('.js-heads-button');
const tombolTails = document.querySelector('.js-tails-button');
const hasil = document.querySelector('.js-hasil-lemparan');
const skor  = document.querySelector('.js-skor');
const reset = document.querySelector('.js-reset-button');

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
    console.log('Angka random:', Math.random());
    const pemainPilihHead = 'head';
    //If-else pemain
    if (pemainPilihHead == computer){
        console.log('menang (Head == Head)');
        skorMenang++;
        skor.innerHTML = `Skor Win:${skorMenang}, Skor Losses: ${skorKalah} `
    } else {
        console.log('walawe (Head =! Tails)');
        skorKalah++;
        skor.innerHTML = `Skor Win:${skorKalah}, Skor Losses: ${skorKalah} `

    };
});

tombolTails.addEventListener('click',function playGame(){
    //If-else komputer
    const randomNumber = Math.random();
    let computer;
    if (randomNumber < 0.6){
        computer = 'head';
    } else {
        computer = 'tails';
    };
    const pemainPilihTails = 'tails';
    //If-else pemain
    if (pemainPilihTails == computer){
        console.log('menang');
    } else {
        console.log('walawe');
    };
});



// function playGame(pemain){
//     //If-else komputer
//     const randomNumber = Math.random();
//     let computer;
//     if (randomNumber < 0.5){
//         computer = 'head';
//     } else {
//         computer = 'tails';
//     };
//     //If-else pemain
//     if (pemain == computer){
//         console.log('menang');
//     } else {
//         console.log('walawe');
//     };
// };


