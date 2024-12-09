const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const btn = document.getElementById("btn");
var url = "https://jsonplaceholder.typicode.com/todos/1"

function consumirApi(){
fetch(url)
.then(resposta => resposta.json())
.then(json => {
    p1.textContent = json.userId;
    p2.textContent = json.id;
    p3.textContent = json.title;
    p4.textContent = json.completed;
}).catch(e =>{
    alert("houve algum erro")
})
}

btn.addEventListener("click", e => {
    consumirApi();
});