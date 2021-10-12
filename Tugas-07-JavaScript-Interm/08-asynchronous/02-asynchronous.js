const isR18Plus = (age) => {
    let check = false
    if(age>18){
        check = true
    } else{
        check = false
    }
    return new Promise((proper, under) => {
        if(check == true){
            proper("Anda sudah dewasa")
        } else{
            under("anda masih dibawah umur")
        }
      })
}

const printR18Plus = async () => {
    const underAge = await isR18Plus(10).then(check => check).catch(check => check);
    const properAge = await isR18Plus(19).then(check => check);
  
    console.log(underAge);
    console.log(properAge);
}

printR18Plus();