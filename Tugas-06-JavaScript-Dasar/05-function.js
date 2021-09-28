/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) { 
    if(salary<5000000){
      tax = 0.00 * salary
      return ("total pajak yang harus kamu bayarkan Rp "+tax)
    } else if(salary<10000000){
      tax = 0.05 * salary
      return ("total pajak yang harus kamu bayarkan Rp "+tax)
    }else if(salary<20000000){
      tax = 0.1 * salary
      return ("total pajak yang harus kamu bayarkan Rp "+tax)
    }else if(salary>=20000000){
      tax = 0.2 * salary
      return ("total pajak yang harus kamu bayarkan Rp "+tax)
    }
   }
  console.log(taxCalc(4500000)) //taxCalc should be 0
  console.log(taxCalc(5000000)) //taxCacl should be 250.000
  console.log(taxCalc(20000000)) //taxCacl should be 4.000.000
  
  
  /// Soal - 02
  /// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.
  
  /// Spesifikasi BMI
  /// - "under weight" apabila $BMI < 18.5
  /// - "normal" apabila 18.5 < $BMI < 24.9
  /// - "over weight" apabila 25 < $BMI < 29.9
  /// - "obese" apabila 30 < $BMI < 34.9
  /// - "extremely obese" apabila 35 < BMI
  
  /// Parameter
  /// - (Number) `height` ⇒ tinggi seseorang (cm)
  /// - (Number) `weight` ⇒ berat badan seseorang (kg) 
  
  /// Return Value
  /// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
  ///   (weight/(height^2)) * 10000
  
  /// EDIT HERE
  function checkBMI(weight, height) { 
    BMI = (weight/(height**2))* 10000
    if (BMI < 18.5) {
      console.log("under weight")
    }else if (BMI < 24.9) {
      console.log("normal")
    }else if (BMI < 29.9) {
      console.log("over weight")
    }else if (BMI < 34.9) {
      console.log("obese")
    }else if (BMI > 35) {
      console.log("extremely obese")
    }
   }
  checkBMI(80, 170) // checkBMI should be "over weight"
  checkBMI(80, 160) // checkBMI should be "obese"
  
  
  /// Soal - 03
  /// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar
  
  /// Parameter
  /// - (String) sentence => kalimat yang nanti akan diubah
  
  /// Return Value
  /// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar
  
  /// EDIT HERE
  function convToUpperCase(sentence) { 
    toUpper = sentence.toLowerCase().split(' ');
      for (var i = 0; i < toUpper.length; i++) {
          toUpper[i] = toUpper[i].charAt(0).toUpperCase() +
              toUpper[i].substring(1);
      }
      return toUpper.join(' ');
  }
  console.log(convToUpperCase("hello bandung")) // convToUpperCase should be "Hello Bandung"
  console.log(convToUpperCase("helloworldwide")) //convToUpperCase should be "Helloworldwide"
  
  
  /// Soal - 04
  /// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR
  
  /// Spesifikasi
  /// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
  /// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
  /// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama
  
  /// Parameter
  /// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)
  
  /// Result Value
  /// (String) huruf yang pertama kali tidak ada kembarannya
  
  /// EDIT HERE
  function firstNonRepeatedChar(word) { 
    let character;
  
    for(let i=0; i<word.length; i++){
        character = word[i];
      if(character == " "){
        return "kata tidak boleh dipisah";
      }
    }
    for (let i = 0; i < word.length; i++) {
        character = word[i];
      let cek = false;
      for (let j = 0; j < word.length; j++) {
        if(character == word[j] && j != i){
          cek = true;
          break;
        }
      }
      if(cek == false){
        return character;
        break;
      }
    }
        return "";
  }
  console.log(firstNonRepeatedChar("hello world")) //firstNonRepeatedChar should be "kata tidak boleh dipisah"
  console.log(firstNonRepeatedChar("alloha")) //firstNonRepeatedChar should be "o"
  console.log(firstNonRepeatedChar("wooohoowh")) //firstNonRepeatedChar should be ""