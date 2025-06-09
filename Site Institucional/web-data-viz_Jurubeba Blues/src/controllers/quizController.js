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

function exibirRespostas(req, res){
    const idUsuario = req.params.idUsuario;
    quizModel.exibirRespostas(idUsuario)
    .then(resultado => {
        if (resultado.length > 0) {

            res.json({ totalCorrect: resultado[0].totalCorrect });
        } else {
            res.json({ totalCorrect: 0 });
        }
    })
    .catch(erro => {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function exibirErrosAcertos(req, res){
    const idUsuario = req.params.idUsuario;
    quizModel.exibirErrosAcertos(idUsuario)
    .then(resultado => {
        let erros = 0;
        let acertos = 0;
        for(let i = 0; i < resultado.length; i++) {
            erros += resultado[i].totalIncorrect;
            acertos += resultado[i].totalCorrect;
        }
        res.json([{Erros: erros, Acertos: acertos}]);
  })
  .catch(erro => {
    console.log(erro);
    res.status(500).json(erro.sqlMessage);
  });
}

function exibirVezesJogadas(req, res){
    const idUsuario = req.params.idUsuario;
    quizModel.exibirVezesJogadas(idUsuario)
    .then(resultado => {
        if (resultado.length > 0) {
            res.json({vezesJogadas: resultado[0].vezesJogadas});
        }
    })
}

function exibirMelhorPontuacao(req, res){
    const idUsuario = req.params.idUsuario;
    quizModel.exibirMelhorPontuacao(idUsuario)
    .then(resultado => {
        if (resultado.length > 0) {
            res.json({melhorPontuacao: resultado[0].melhorPontuacao});
        }
    })
}

module.exports = {
    inserirRespostas,
    exibirRespostas,
    exibirErrosAcertos,
    exibirVezesJogadas,
    exibirMelhorPontuacao
}