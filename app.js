// const maxNum = prompt('Masukan Nilai angka random Maksimal : ');
// while (!maxNum) {
//     maxNum = prompt(maxNum);
// }

// const targetNum = Math.floor(Math.random() * maxNum);
// console.log(`Target : ${targetNum}`);

// let tebakNum = parseInt(prompt('Saya menebak angaka ini adalah'));
// while (targetNum !== tebakNum) {
//     (tebakNum > targetNum) ?
//         tebakNum = parseInt(prompt(`Terlalu Tinggi, Coba lagi !`))
//     :
//         tebakNum = parseInt(prompt('Terlalu Rendah, Coba Lagi !'));
// }
// alert('Selamat !')



// Function

// function jumlahkan(firstNum, secoundNum) {
//     if (typeof firstNum !== 'number' || typeof secoundNum !== 'number') return false;

//     return firstNum + secoundNum;
// }
// pemanggilan Console 
// const hasil = jumlahkan(secoundNum = 3, firstNum = 5)

// const perpangkatan = function (number) {
//     return number ** 2;
// }

// perpangkatan(4);

// function duaKali(func){
//     func();
//     func();
// }

// function lemparDadu() {
//     console.log(Math.round(Math.random() * 6));
// }

// duaKali(lemparDadu);

// const saya = {
//     nama : "Khazim",
//     hobi : "belajar",
//     kenalan : function() {
//         return `hi, nama saya ${nama} , hobi saya ${hobi}`;
//     },
// }

// const animes = [
//     {
//         title : "Naruto",
//         rating : 91,
//     },
//     {
//         title : "One Piece",
//         rating : 92,
//     },
// ];

// animes.forEach(
//     function(anime){
//         console.log(`${anime.title} - ${anime.rating}/100`);
//     },
// );

// const angkas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let angkaDouble = angkas.map(
//     function (angka) {
//         return angka * 2;
//     },
// );
// let angkaGanjil = angkas.filter( angka => angka % 2 === 0);

// angkaDouble

// const numbers = [1,2,3];
// const sum = numbers.reduce((totalNumber, currentNumber) => totalNumber + currentNumber );

// const fruits = ['apple', 'banana', 'apple'];

// const merge = fruits.reduce((acumulation, fruit) => {
//     acumulation[fruit] = (acumulation[fruit] || 0) + 1;
//     return acumulation;
// }, {})
