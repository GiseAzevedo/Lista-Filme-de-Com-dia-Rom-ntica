var listaFilmes = [
  "Como se Fosse a Primeira Vez",
  "O Diário de Bridget Jones",
  "De Repente 30"
];

listaFilmes.push("O Casamento do Meu Melhor Amigo");

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + listaFilmes[indice] + "</p>");
}