let numero1, numero2, numero3

numero1 = parseInt (prompt("Digite um número: "));
numero2 = parseInt (prompt("Digite outro número: "));
numero3 = parseInt (prompt("Digite mais um número: "));

if ((numero1>numero2) && (numero1>numero3)){
    alert("O número " +numero1+ " é maior que os outros");
}else if ((numero2>numero1) && (numero2>numero3)){
    alert("O número " +numero2+ " é maior que os outros");
}else if ((numero3>numero1) && (numero3>numero2)){
    alert("O número " +numero3+ " é maior que os outros");
}