let numero1, numero2

numero1 = parseInt (prompt("Digite um número: "));
numero2 = parseInt (prompt("Digite outro número: "));

if (numero1>numero2){
    alert("O 1° número digitado, " +numero1+ " é maior que o 2° número digitado");
}else if (numero1<numero2){
    alert("O 2° número digitado, " +numero2+ " é maior que o 1° número digitado");
}