const express = require("express")
const app = express()
const port = 3000

const hewan = [
  {id: 1, nama: 'Snowy', spesies: 'kucing'},
  {id: 2, nama: 'Blacki', spesies: 'anjing'},
  {id: 3, nama: 'Molly', spesies: 'kucing'},
  {id: 4, nama: 'Milo', spesies: 'kelinci'},
  {id: 5, nama: 'Rere', spesies: 'kucing'},
]

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(logger)

// Endpoint awal
app.get("/", (req, res) => {
    res.json ({
        msg : "hello world"
    })
})

// Endpoint Get All Hewan
app.get("/hewan", (req,res)=> {
    res.json ({
        msg: "succes get data semua hewan",
        hewan
    })
})

// Create Hewan
app.post("/hewan", postChecker ,(req,res) => {
    let lengthHewan = hewan.length

    const payload = {
        id : lengthHewan+1,
        nama : req.body.nama,
        spesies : req.body.spesies
    }

    hewan.push(payload)

    res.json({
        msg : "succes add data hewan",
        hewan
    })
})

// Endpoint Get Hewan by ID
app.get ("/hewan/:id", async (req, res) => {
    const hewanbyid = hewan.find(item => item.id === Number(req.params.id))
    // console.log(hewanbyid);
    if (hewanbyid !== null && hewanbyid !== undefined) {
        res.json ({
            msg : "succes get data hewan by id",
            data: hewanbyid
        })
    }else {
        res.send({
            message : "error, hewan tidak ditemukan"
        })
    }
})

// Update Hewan
app.put("/hewan/:id", (req, res) => {
    const hewanbyid = hewan.find(item => item.id === Number(req.params.id))
    // console.log(hewanbyid);
    if (hewanbyid !== null && hewanbyid !== undefined) {
        const payload = {
            nama: req.body.nama,
            spesies: req.body.spesies
        }
        hewan[req.params.id - 1].nama = payload.nama;
        hewan[req.params.id - 1].spesies = payload.spesies;
    
        res.json({
            msg: "succes update Data hewan",
            hewan,
        });
    } else {
        res.send({
            message : "error, hewan tidak ditemukan"
        })
    }  
    
  });

// Menghapus Hewan
app.delete("/hewan/:id", (req,res) => {
    const hewanbyid = hewan.find(item => item.id === Number(req.params.id))
    // console.log(hewanbyid);
    if (hewanbyid !== null && hewanbyid !== undefined) {
        hewan.splice(req.params.id - 1,1)

        res.json({
            msg : "succes delete data hewan",
            data : hewan
        })
    } else {
        res.send({
            message : "error, tidak ada data hewan untuk dihapus"
        })
    }  
});

// middleware
function logger(req, res, next) {
    console.log("this is logger");
    next();
}  

function postChecker(req, res, next) {
    const payload = {
      nama: req.body.nama,
      spesies: req.body.spesies,
    };
  
    if (
      payload.spesies === "kucing" ||
      payload.spesies === "anjing" ||
      payload.spesies === "kelinci"
    ) {
      next();
    } else {
      res.status(400).json({
          message : "Spesies not valid"
      })
    }
  }

app.listen(port, () => {
    console.log("server is listening in port", port)
})