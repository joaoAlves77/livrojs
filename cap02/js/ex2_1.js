// cria referências aos elementos
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value;
    resp.innerText = `Olá ${nome}`;
    e.preventDefault();
});