/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
 
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i + " ");
    }
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
let index = 2;

while (primeCounter < 50) {
    let isPrime = true;

    for (let i = 2; i < index; i++) {
        if (index % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
      fiftiethPrime = index;
      primeCounter++;
    }
    index++;
}
console.log(fiftiethPrime);


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
let i = 1
do {
  if(i%2 !=0){
    fiftiethOdd=i
    oddCounter++
  }
  i++
} while (oddCounter<50)
fiftiethOdd