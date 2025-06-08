var quizModel = require("../models/quizModel");
const { inserirRespostas } = require("./quizModel");
// var aquarioModel = require("../models/aquarioModel");


function inserirRespostas(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var respostasCertas = req.body.respostasCertasServer;
    var respostasErradas = req.body.respostasErradasServer;
    // var cpf = req.body.cpfServer;
    // var musicaFav = req.body.musicaServer;
    // var fkEmpresa = req.body.idEmpresaVincularServer;

    // Faça as validações dos valores
    if (respostasCertas == undefined) {
        res.status(400).send("Respostas certas está undefined!");
    } else if (respostasErradas == undefined) {
        res.status(400).send("Respostas erradas está undefined!");
    // } else if (cpf == undefined) {
    //     res.status(400).send("Seu cpf está undefined!");
}
    // } else if (fkEmpresa == undefined) {
    //     res.status(400).send("Sua empresa a vincular está undefined!");
    // }else if (musicaFav == undefined) {
    //     res.status(400).send("Sua musica está undefined!");}
         else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.inserirRespostas(respostasErradas, respostasCertas)
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