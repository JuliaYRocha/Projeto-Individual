var database = require("../database/config")
function inserirRespostas(fkUsuario, fkQuiz, totalIncorrect, totalCorrect, performance) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkUsuario, fkQuiz, totalIncorrect, totalCorrect, performance);
    
    var instrucaoSql = `
        INSERT INTO respostasQuiz (fkUsuario, fkQuiz, totalIncorrect, totalCorrect, performance)
        VALUES (${fkUsuario}, ${fkQuiz}, ${totalIncorrect}, ${totalCorrect}, ${performance});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirRespostas(idUsuario){
    console.log("ACESSEI O USUARIO MODEL - function exibirRespostas()");
    var instrucaoSql = `
        SELECT AVG(totalCorrect) as totalCorrect FROM respostasQuiz WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução sql: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirErrosAcertos(idUsuario){
    console.log("ACESSEI O USUARIO MODEL - function exibirErrosAcertos()");
    var instrucaoSql = `
        SELECT totalIncorrect, totalCorrect FROM respostasQuiz WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução sql: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirVezesJogadas(idUsuario){
    console.log("ACESSEI O USUARIO MODEL - function exibirVezesJogadas()");
    var instrucaoSql = `
        select COUNT(*) as vezesJogadas from respostasQuiz where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução sql: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirMelhorPontuacao(idUsuario){
    console.log("ACESSEI O USUARIO MODEL - function exibirMelhorPontuacao()");
    var instrucaoSql = `
       select max(performance) as melhorPontuacao from respostasQuiz where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução sql: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirRespostas,
    exibirRespostas,
    exibirErrosAcertos,
    exibirVezesJogadas,
    exibirMelhorPontuacao
};