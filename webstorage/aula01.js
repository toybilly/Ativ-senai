localStorage.setItem("nome", "mariane");

let sobrenome = "vieira";

localStorage.setItem("sobrenome", sobrenome);
alert(localStorage.getItem("nome"));
alert(localStorage.getItem("sobrenome"));

localStorage.removeItem("nome");
alert(localStorage.getItem("nome"));