let timeA, timeB, timegolsA, timegolsB;

timeA = prompt("Digite o nome do time A: ");
timegolsA = parseInt(prompt("Infome o número de gols feito pelo time " +timeA+ ":" ));

timeB = prompt("Digite o nome do time B: ");
timegolsB = parseInt(prompt("Informe o número de gols feito pelo time " +timeB+ ":"));

if (timegolsA>timegolsB) {
    alert("O vencedor da partida é" +timeA+ "com" +timesgolsA+ "gols.");
} else if(timegolsB>timegolsA) {
    alert("O vencedor da partida é " +timeB+ "com" +timesgolsB+ "gols.");
} else if (timesgolsA == timesgolsB){
    alert("A partida teve empate, com" +timegolsA+ "para o time" +timeA+ "e" +timegolsB+ "para o time" +timeB);
}