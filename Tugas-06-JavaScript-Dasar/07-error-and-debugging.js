/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error kesalahan saat operasi tidak dapat dilakukan, biasanya ketika nilai yang dieksekusi bukan tipe yang diharapkan.   
/// - Reference Error kesalahan ketika variabel yang ada, tidak direferensikan.
/// - Range Error menunjukkan kesalahan saat nilai  dalam set atau rentang nilai yang tidak diizinkan.
/// - Syntax Error kesalahan saat mencoba menafsirkan kode yang tidak valid secara sintaksis. 


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// - yang akan terjadi adalah Error
/// - termasuk kedalam kategori Type Error
/// - karena pada saat eksekusi code, belum mendeklarasikan variabel yang ada didalam perintah console.log
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
