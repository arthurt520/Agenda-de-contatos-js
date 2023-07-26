let nome = document.querySelector(".nomecompleto");
let tel = document.querySelector(".telefone");
let form = document.querySelector(".formulario-principal")
let linhas = "";
let conteudo = document.querySelector(".conteudo")
let adicionar = document.querySelector("tbody")


form.addEventListener('submit', function(a){
    a.preventDefault();
    adicionarlinha();
    atualizar();

    nome.value="";
    tel.value="";
})

function adicionarlinha(){
    let linha = `<tr>`;
    linha+= `<td>${nome.value}</td>`
    linha+= `<td> ${tel.value}</td>`
    linha+= `</tr>`
    linhas += linha;
}

function atualizar(){
    adicionar.innerHTML = linhas
}

