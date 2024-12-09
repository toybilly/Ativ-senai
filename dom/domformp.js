var pessoa = new Array;

const fcadastrar = ()=>{
    let nome = document.forms["frmPessoa"]["txtNome"].value;
    let dtNasc = document.forms["frmPessoa"]["dtDtNasc"].value;
    let pessoaf = [nome, dtNasc];
    pessoa.push(pessoaf);

    let indice = pessoa.length-1;
    var txtId = document.createTextNode(indice);
    let txtNome = document.createTextNode(nome);
    let txtDtN = document.createTextNode(dtNasc);
    let txtBtn = document.createTextNode("Editar")

    let cId = document.createElement("td");
    let cNome = document.createElement("td");
    let cDtN = document.createElement("td");
    let cAcao = document.createElement("td");
    let linha = document.createElement("tr");
    let btnAcao =  document.createElement("button");
    btnAcao.setAttribute("class" , "btn");
    btnAcao.setAttribute("onclick" , "feditar("+indice+")");

    btnAcao.appendChild(txtBtn);
    cId.appendChild(txtId);
    cNome.appendChild(txtNome);
    cDtN.appendChild(txtDtN);
    cAcao.appendChild(btnAcao);

    linha.appendChild(cId);
    linha.appendChild(cNome);
    linha.appendChild(cDtN);
    linha.appendChild(cAcao);

    let tabela = document.getElementById("tabbody");
    tabela.appendChild(linha);
}

const btnEnviar = document.querySelector("#ibtn");
btnEnviar.addEventListener("click" , fcadastrar);
