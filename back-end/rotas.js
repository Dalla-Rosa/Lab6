const fs = require("fs");
const path = require("path");

const { rotas } = require("express");
const rotas = rotas();

const database = require("./database.json");


// MINHAS ROTAS

rotas.get("/curso", (req, res) => {
    res.json(database.curso);
});




//ROTAS BRENO ------------

rotas.get("/curso", (req, res) => {
    res.json(database.curso);
});

rotas.get("/horarios/:id", (req, res) => {
    const { id } = req.params;
    database.schedules.forEach(curso => {
        if (parseInt(curso.cursoId) === parseInt(id))
            res.json(curso);
    })
});

rotas.get("/follow", (req, res) => {
    res.json(database.follow);
})

rotas.put("/follow", (req, res) => {
    if (database.follow === "Follow") {
        database.follow = "Following";
        console.log("Recebi um follow");
    } else if (database.follow === "Following") {
        database.follow = "Follow";
        console.log("Recebi unfollow");
    }

    fs.writeFile(path.join(__dirname, "database.json"), JSON.stringify(database, null, 2), err => {
        if(err)
            res.status(400).json({ error: err});
        res.status(200).json({ status: "Updated", data: database.follow });
    });

});

module.exports = rotas;