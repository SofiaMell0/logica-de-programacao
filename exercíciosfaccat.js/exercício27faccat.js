let numero

numero = parseFloat (prompt("Digite um número: "));

if (numero<0){
    alert("O número é negativo " +numero);
}else if (numero>0){
    alert("O número é positivo " +numero);
}else {
    alert("Ele é zero ");
}