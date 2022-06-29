let horainicio, horafim, duracaojogo

horainicio = parseInt (prompt("Digite o horário que iniciou a partida do jogo de xadrez: "));
horafim = parseInt (prompt("Digite o horário que terminou a partida de xadrez: "));

duracaojogo = horafim-horainicio

if (duracaojogo>0){
    alert("A partida terminou no mesmo dia com duração de " +duracaojogo+ "hs");
}else if (duracaojogo<0){
    alert("A partirda terminou no dia seguinte com duração de " +duracaojogo+ "hs");
}