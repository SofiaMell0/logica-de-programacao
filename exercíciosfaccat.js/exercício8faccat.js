let brancos, nulos, validos, quantidadeeleitores, percentvalidos, percentnulos, percentbrancos;

quantidadeeleitoes= parseFloat (prompt("quantidade de pessoas que votaram: "));

brancos= parseFloat (prompt("informe a quantidade de votos brancos:"));
percentbrancos= (brancos / quantidadeeleitores)*100;

nulos= parseFloat (prompt("informe a quantidade de votos nulos: "));
percentnulos= (nulos / quantidadeeleitores)*100;

validos= parseFloat (prompt("informe quantidade de votos validos"));
percentvalidos= (validos / quantidadeeleitores)*100;

alert("a quantidade de eleitores foi de:" +quantidadeeleitores);
alert("a quantidade de votos brancos é de: " +percentbrancos);
alert("a quantidade de votos nulos foi de:" +percentnulos);
alert("a quantidade de votos validos foi de: " +percentvalidos)