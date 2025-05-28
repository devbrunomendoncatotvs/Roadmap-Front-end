//1-Selecionar elementos

//1.1-(getElementById) Seleciona pelo id de um elemento
let title = document.getElementById("title");
//1.2-(getElementsByClassName) Seleciona pelo nome de uma classe
let items = document.getElementsByClassName("items");
//1.3-(getElementsByTagName) Seleciona pelo nome de uma tag
let paragraphs = document.getElementsByTagName("p");
//1.4-(querySelector) Seleciona o primeiro elemento que possui a classe ou id especificado
let button = document.querySelector(".btn");
//1.5-(querySelectorAll) Seleciona todos elementos com determinada tag
let selectAllsTags = document.querySelectorAll("li");

//2-Modificar conteúdo

//2.1-(textContent) altera o texto
title.textContent = "DOM: Novo título";
//2.2-(innerHTML) altera não somente o texto mas também o HTML interno
title.innerHTML = "<strong>DOM: Novo título</strong>";

//3-Modificar estilos
const container = document.getElementById("container");
container.style.backgroundColor = "#F0EBCD";
container.style.maxWidth = "640px";
container.style.margin = "0 auto";
container.style.borderRadius = "10px";

//4-Criar e adicionar elementos
const newElement = document.createElement("h2");
newElement.textContent = "Novo elemento criado";
newElement.style.color = "#333";
newElement.style.fontFamily = "sans-serif";
newElement.style.fontSize = "1rem";
document.getElementById("container").appendChild(newElement);

//5-Remover elementos
const item = document.getElementById("itemTheRemove");
item.remove(); // ou item.parentNode.removeChild(item);

//6-Modificar atributos
let img = document.querySelector("img");
img.setAttribute(
  "src",
  "https://images.pexels.com/photos/13583948/pexels-photo-13583948.jpeg"
); //adiciona ou altera o valor
img.getAttribute("src"); // lê o valor
img.removeAttribute("alt"); // remove atributo
img.style.width = "100%";
img.style.borderRadius = "10px";
img.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

//7-Eventos
const clickButton = document.getElementById("clickButton");
clickButton.addEventListener("click", function () {
  alert("Botão clicado!");
});
