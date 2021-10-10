const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`Server is up ans listening by port ${PORT}, process ${process.pid}`);
})

// Disposición de carpeta assets para archivos estáticos
app.use("/", express.static(path.join(__dirname, '/public/assets')));


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

//Juego de sombreros, dependiendo del resultado mostrará un conejo o un hechicero
app.get("/abracadabra/conejo/:id", (req, res) => {
    const n = Math.floor(Math.random() * 4) + 1;
    res.sendFile(n == req.params.id ? __dirname + "/public/assets/conejito.jpg" : __dirname + "/public/assets/voldemort.jpg");
});


// lista de usuarios
app.get("/abracadabra/usuarios", (req, res) => {
    res.sendFile(__dirname + "/files/usuarios.json")
})


//Validación de usuarios pasados como parámetro en la url
app.use("/abracadabra/juego/:usuario", (req, res, next) => {
    const usuario = req.params.usuario;
    const arregloUsuarios = JSON.parse(JSON.stringify(require(__dirname + "/files/usuarios.json")));
    req.usuarioEncontrado = false;
    if (arregloUsuarios.usuarios.find(user => user == usuario)) {
        req.usuarioEncontrado = true;
    };
    next();
})

app.get("/abracadabra/juego/:usuario", (req, res) => {
    if (req.usuarioEncontrado) {
        res.send({
            usuario: req.params.usuario,
            message: "usuario encontrado"
        })
    } else {
        res.sendFile(__dirname + "/public/assets/who.jpeg")
    }
})

// Mensaje default apra páginas no existentes
app.get("*", (req, res) => {
    res.send("<h1>Esta página no existe, regresa sobre tus pasos viajero perdido</h1>")
})