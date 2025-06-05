var express = require("express");
var router = express.Router();

var blibliotecaController = require("../controllers/bibliotecaController");

//Recebendo os dados do html e direcionando para a função cadastrar de blibliotecaController.js
router.get("/exibir", function (req, res) {
    blibliotecaController.exibir(req, res);
})

// router.post("/autenticar", function (req, res) {
//     blibliotecaController.autenticar(req, res);
// });

module.exports = router; // eu consigo exportar ele pra outra aba, quando a gente vai fazer alguma coisa, ou a gente exporta ou a gente importa.