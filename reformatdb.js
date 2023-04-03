const fs = require('fs'); 
const receitas = require('./receitas.json');
const teste = [receitas[0], receitas[1], receitas[2]];
const reformatacao = teste.map(receita => {     
    return {
        "Nome": receita.nome,
        "Ingredientes": receita.secao[0].conteudo,
        "Modo de preparo": receita.secao[1].conteudo, 
    }
})

console.log(reformatacao);



















/*const receitasString = JSON.stringify(receitas, null, 1);

fs.writeFile("./receitas.json", receitasString, error => console.log(error))*/

