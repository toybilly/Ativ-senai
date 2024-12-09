function fsurgir(){
    let main = document.getElementById("principal");
    let footer = document.getElementsByTagName("footer");

    main.style.display = "flex";
    footer[0].style.display = "flex";
    fparagrafo(main, "Paragrafo 3");
    fparagrafo(footer[0], "Rodape 3")
}

const fparagrafo = (elemento, ptexto)=>{
    let texto = document.createTextNode(ptexto);
    let par = document.createElement("p");

    par.appendChild(texto);
    elemento.appendChild(par);

}