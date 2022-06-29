let quantidadeatual, quantidademinima, quantidademaxima, quantidademedia

quantidadeatual = parseInt (prompt("Digite a quantidade de produto atual em estoque: "));
quantidademaxima = parseInt (prompt(" Digite a quantidade máxima de produtos em estoque: "));
quantidademinima = parseInt (prompt("Digite a quantidade mínima de produtos em estoque: "));

quantidademedia = quantidademaxima + quantidademinima/2;

if (quantidadeatual>=quantidademedia){
    alert("Não efetuar compra");
}else if (quantidadeatual<=quantidademedia){
    alert("Efetuar compra");
}