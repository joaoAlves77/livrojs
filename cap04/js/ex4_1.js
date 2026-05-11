const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = frm.inNome.value;
  const nota1 = frm.inNota1.value;
  const nota2 = frm.inNota2.value;
  const media = (nota1 + nota2) / 2;
  
  resp1.innerText = `Media das Notas ${media.toFixed(2)}`;

  if (media >= 7) {
    resp2.innerText = `Parabéns ${nome}! Vocé foi aprovado`;
    resp2.style.color = "blue";
  } else {
    resp2.innerText = `Vocé foi reprovado`;
    resp2.style.color = "red";
  }
});
