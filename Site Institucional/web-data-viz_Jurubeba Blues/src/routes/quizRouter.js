var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/inserirRespostas", function (req, res) {
    quizController.inserirRespostas(req, res);
})

module.exports = router;