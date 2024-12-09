const flogin =()=>{
    let login ="Mari";
    let senha ="12345";
    if((login == document.forms["frmLogin"]["txtLogin"].value)
    &&(senha == document.forms["frmLogin"]["pwdSenha"].value)){
        return true;
    }
    else
    {
        alert("Usuário ou senha incorreto");
        return false;
    }
}

const btnlogin = document.querySelector("#ilogar");
btnlogin.addEventListener("click", flogin);