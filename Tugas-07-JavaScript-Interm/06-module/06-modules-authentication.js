export default function validateLoginData(email,pass){
    let regexPass = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    let regexEmail = new RegExp (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

    let hasil = regexEmail.test(email)
    if (hasil) {
        hasil = regexPass.test(pass)
        if (hasil) {
          alert ("Welcome to The Jungle")
        } else{
          alert ("tolong masukkan password yang valid")
        }
      
      } else{
          alert ("tolong masukkan email yang valid")
      }
}