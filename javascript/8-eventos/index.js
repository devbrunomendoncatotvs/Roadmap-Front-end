//1-Adicionando eventos com addEventListener()
const clickMe = document.getElementById("click-me");
clickMe.addEventListener("click", () => {
  alert("O evento de click foi acionado!");
});

//2-Tipos comuns de eventos
//2.1-Evento (click)
clickMe.addEventListener("click", () => {
  //console.log("O evento de click foi acionado!");
});
//2.2-Evento (mouseover)
clickMe.addEventListener("mouseover", () => {
  //console.log("O mouse está sobre o botão!");
});
//2.3-Evento (mouseout)
clickMe.addEventListener("mouseout", () => {
  //console.log("O mouse saiu do botão!");
});
//2.4-Evento (keydown)
document.addEventListener("keydown", (event) => {
  //console.log(`A tecla (${event.key}) foi pressionada!`);
});
//2.5-Evento (keyup)
document.addEventListener("keyup", (event) => {
  //console.log(`A tecla (${event.key}) foi solta!`);
});
//2.6-Evento (chage)
const inputText = document.getElementById("input-text");
inputText.addEventListener("change", (event) => {
  console.log(`O valor do input foi alterado para: ${event.target.value}`);
});
//2.7-Evento (submit)
const form = document.getElementById("form");
form.addEventListener("submit", () => {
  console.log("O formulário foi enviado!");
});
//2.7-Evento (load)
window.addEventListener("load", () => {
  console.log("A página foi carregada!");
});
//2.8-Evento (resize)
window.addEventListener("resize", () => {
  console.log("A janela foi redimensionada!");
});
//2.9-Evento (scroll)
window.addEventListener("scroll", () => {
  console.log("A página foi rolada!");
});
//2.10-Evento (focus)
const inputFocus = document.getElementById("input-text");
inputFocus.addEventListener("focus", () => {
  console.log("O input está em foco!");
});
//2.10-Evento (input)
const input = document.getElementById("input-text");
input.addEventListener("input", (event) => {
  console.log(`O valor do input é: ${event.target.value}`);
});
//2.11-Evento (dblclick)
const doubleClickMe = document.getElementById("double-click-me");
doubleClickMe.addEventListener("dblclick", () => {
  alert("O evento de duplo clique foi acionado!");
});

//3-Remover um evento com removeEventListener()
doubleClickMe.removeEventListener("dblclick", () => {
  alert("O evento de duplo clique foi acionado!");
});
