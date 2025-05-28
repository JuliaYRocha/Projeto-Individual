var database = require("../database/config")

function exibir() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucaoSql = `
        SELECT titulo, link, autor, genero FROM musica;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
// function cadastrar(nome, email, senha, musicaFav) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, musicaFav);
    
//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucaoSql = `
//         INSERT INTO usuario (nome, email, senha, musica_fav) VALUES ('${nome}', '${email}', '${senha}', '${musicaFav}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    exibir
};