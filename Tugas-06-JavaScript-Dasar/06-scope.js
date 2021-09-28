/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// - ada 2, yaitu local scope dan global scope
/// - *) Variable local scope adalah variabel yang dideklarasikan di dalam fungsi pada JavaScript.
///      Variabel lokal hanya dapat diakses dari dalam fungsi tersebut.
///   *) Semua variabel yang dibuat di luar fungsi disebut variabel global pada JavaScript. 
///      Objek semacam itu dapat diakses di seluruh file.
/// - implementasi global scope: let a
/// - implementasi local scope: 
/// function scope(param) {
///     let a    
/// }

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - yang tampil adalah 'Mariah', karena pada fungsi printFirstName(name), dilakukan return name.split(" ")[0]  
///   ,split digunakan untuk membagi string menjadi array substring, dan mengembalikan nilai array baru.
/// - Karena pada return name.split(" ")[0], berarti mereturn nilai dari variabel name, yang kemudian dijadikan
///   bentuk array pada tiap kata yg dipisah spasi(dan mengambil value index ke-0), sehingga 'Mariah' menjadi 
///   index ke-0, dan 'Carey' menjadi index ke-1

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));