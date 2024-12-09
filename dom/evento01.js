function alerta (){
    alert('Fui clicado via chamada');
}

const div3 = document.getElementById("div3")

div3.addEventListener('click' , ()=>{
    alert('clicou no 3')
});
 