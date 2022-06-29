let idade, mes, dia, resultado;
idade = parseInt (prompt("Quantos anos você tem? "));
mes = parseInt (prompt("Quantos meses você tem? "));
dia = parseInt (prompt("Quantos dias você tem? "));
resultado = (idade*365)+(mes*30)+dia
alert("Você tem " +resultado+ " dias de vida")