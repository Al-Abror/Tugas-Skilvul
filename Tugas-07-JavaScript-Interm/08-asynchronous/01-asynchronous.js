// 1. Apa itu synchronous?
/// sebuah operasi program yang dieksekusi secara antrian dari awal-akhir 
// 2. Apa itu asynchronous?
/// sebuah operasi program yang dapat dieksekusi secara bersamaan tanpa harus menunggu proses antrian
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
/// bisa, karena prosess asyncronus akan tetap berjalan pada background
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
///first log:  1
///first log:  2
///first log:  3
///first log:  4
///first log:  5
///second log:  6
///second log:  6
///second log:  6
///second log:  6
///second log:  6
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
/// karena pada console log console.log kedua diekseskusi 100 milisecond setelah code dijalankan dan nilai i berubah menjadi 6 setelah 100 milisecond
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}