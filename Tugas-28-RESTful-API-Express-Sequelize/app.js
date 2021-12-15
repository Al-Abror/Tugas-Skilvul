// Import Module
const express = require("express");
const Sequelize = require("sequelize");

// Create Port
const app = express();
const PORT = 3000;

//parse from json
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// connect to database online
// const sequlize = new Sequelize("sql6457557", "sql6457557", "DiTL4U4rk6", {
//     host: "sql6.freemysqlhosting.net",
//     dialect: "mysql",
// });

// connect to database localhost
const sequlize = new Sequelize("animals", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

sequlize
    .authenticate()
    .then(() => {
        console.log("connection has been established successfully");
    })
    .then(() => {
        Hewan.sync().then(() => console.log("table Hewan created"));
    })
    .catch((err) => {
        console.log("unable to connect", err);
    });

// table Hewan models
const Hewan = sequlize.define(
    "hewans", {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: Sequelize.DataTypes.STRING,
        umur: Sequelize.DataTypes.INTEGER,
        nameSpesies: Sequelize.DataTypes.STRING,
    }, {
        createdAt: false,
        updatedAt: false,
    }
);

// Check connection
app.get("/", (req, res) => {
    res.send("server");
});

// Get all hewan from database
app.get("/hewan", (req, res) => {
    Hewan.findAll()
        .then((result) => {
            res.json({
                message: "OK",
                data: result ? result : `No Data = ${result}`,
            });
        })
        .catch((error) => res.send(error));
});

// Get animal by id
app.get("/hewan/:id", (req, res) => {
    Hewan.findOne({
        where: {
            id: req.params.id,
        },
    }).then((result) => {
        res.json({
            message: "OK",
            data: result ? result : `No Data = ${result}`,
        });
    });
});

// Add new animal
app.post("/hewan", (req, res) => {
    const newHewan = {
        name: req.body["name"],
        umur: req.body["umur"],
        nameSpesies: req.body["nameSpesies"],
    };
    Hewan.create(newHewan)
        .then((result) => {
            res.json({
                message: "OK",
                data: result ? result : `No Data = ${result}`,
            });
        })
        .catch(error => console.log(error))

})

// Update animal by id
app.patch("/hewan/:id", (req, res) => {
    const updateHewan = {
        name: req.body["name"],
        umur: req.body["umur"],
        nameSpesies: req.body["nameSpesies"],
    };

    Hewan.update(updateHewan, {
            where: {
                id: req.params.id,
            },
        }).then((result) => {
            res.json({
                message: "OK",
                data: result ? updateHewan : `No Data = ${result}`,
            });
        })
        .catch(error => console.log(error))

})

// Delete animal by id
app.delete("/hewan/:id", (req, res) => {
    Hewan.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.json({
                message: "OK",
                data: result ? `${result} Deleted` : `No Data = ${result}`,
            });
        })
        .catch(error => console.log(error))
})


// Run Server
app.listen(PORT, () => {
    console.log("server berjalan");
});