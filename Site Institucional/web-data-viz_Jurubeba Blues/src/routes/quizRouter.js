var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/inserirRespostas", function (req, res) {
    quizController.inserirRespostas(req, res);
});

router.get("/exibirAcertos/:idUsuario", function (req, res){
    quizController.exibirRespostas(req, res);
});

router.get("/exibirErrosAcertos/:idUsuario", function (req, res) {
    quizController.exibirErrosAcertos (req, res);
});

router.get("/exibirVezesJogadas/:idUsuario", function (req, res) {
    quizController.exibirVezesJogadas (req, res);
});

router.get("/exibirMelhorPontuacao/:idUsuario", function (req, res){ 
    quizController.exibirMelhorPontuacao (req, res);
});

module.exports = router;