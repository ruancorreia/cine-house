const catalogo = require("./catalogo");

//console.log(catalogo);

function adicionarFilme (titulo, duracao, atores, anoDeLancamento, emCartaz){
    const novoFilme = {
        codigo: catalogo.length + 1,
        titulo,
        duracao,
        atores,
        anoDeLancamento,
        emCartaz,
    };

    catalogo.push(novoFilme);
    console.log("filme adicionado com sucesso!");
}

function adicionarFilme (titulo, duracao, atores, anoDeLancamento, emCartaz){
    const novoFilme = {
        codigo: catalogo.length + 1,
        titulo,
        duracao,
        atores,
        anoDeLancamento,
        emCartaz,
    };

    catalogo.push(novoFilme);
    console.log("filme adicionado com sucesso!");
}

function buscarFilme(codigo){
    const filmeProcurado = catalogo[codigo -1];
    if(!filmeProcurado){
        return console.log("Código não encontrado");
    }
    console.log(filmeProcurado);
}
buscarFilme(2);

function alterarStatusEmCartaz(codigo, novoStatus) {
  const filmeProcurado = catalogo[codigo - 1];

  if (!filmeProcurado) {
    return console.log("Código não encontrado");
  }

  catalogo[codigo - 1].emCartaz = novoStatus;

  console.log("Filme alterado!");
}

let listarTodosOsFilmes = (filmeProcurado) => ("nome do filme "+ catalogo[0].titulo);
console.log("-------------------");
console.table("nome do filme: "+ catalogo[0].titulo);