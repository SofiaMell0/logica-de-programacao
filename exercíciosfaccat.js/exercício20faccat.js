let numero1, numero2

numero1 = parseInt (prompt("Digite um número: "));
numero2 = parseInt (prompt("Digite outro número: "));

if (numero1>numero2){
    alert("A ordem dos números é:" +numero1+ "," +numero2);
}else if (numero1<numero2){
    alert("A ordem dos números é:" +numero2+ "," +numero1);
}