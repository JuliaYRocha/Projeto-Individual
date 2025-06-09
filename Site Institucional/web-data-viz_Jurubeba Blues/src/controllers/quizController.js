var quizModel = require("../models/quizModel");
// var aquarioModel = require("../models/aquarioModel");


function inserirRespostas(req, res) {
        var fkUsuario = req.body.fkUsuarioServer;
        var fkQuiz = req.body.fkQuizServer;
        var totalCorrect = req.body.totalCorrectServer;
        var totalIncorrect = req.body.totalIncorrectServer;
        var performance = req.body.performanceServer;

        if (totalCorrect == undefined) {
            res.status(400).send("Respostas certas está undefined!");
        } else if (totalIncorrect == undefined) {
            res.status(400).send("Respostas erradas está undefined!"); 
        } else if (performance == undefined){
            res.status(400).send("Pontuação está undefined!"); 
        } else if (fkUsuario == undefined) {
            res.status(400).send("fkUsuario está undefined");
        } else if(fkQuiz == undefined){
            res.status(400).send("fkQuiz está undefined");
        }
         else {

        quizModel.inserirRespostas(fkUsuario, fkQuiz, totalIncorrect, totalCorrect, performance)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao inserir as respostas! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    inserirRespostas
}