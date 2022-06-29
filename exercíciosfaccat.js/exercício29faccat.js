let numero1, numero2, numero3, soma

numero1 = parseInt (prompt("Digite um número: "));
numero2 = parseInt (prompt("Digite outro número: "));
numero3 = parseInt (prompt("Digite mais um número: "));

if ((numero1>numero3) && (numero2>numero3)){
    soma = numero1 + numero2
    alert("O resultado da soma é " +soma);
}else if ((numero1>numero2) && (numero3>numero2)){
    soma = numero1 + numero3
    alert("O resultado da soma é " +soma);
}else if ((numero2>numero1) && (numero3>numero1)){
    soma = numero2 + numero3
    alert("O resultado da soma é " +soma);
}