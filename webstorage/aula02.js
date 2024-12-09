const pessoa = {
    nome : "peter",
    sobrenome: "park",
    email: "homemaranha@gmail.com"
}

localStorage.setItem("personagens", JSON.stringify(pessoa));

const objpessoa = localStorage.getItem("personagens");
alert(objpessoa);