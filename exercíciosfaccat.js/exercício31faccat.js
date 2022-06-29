let ladoA, ladoB, ladoC;

ladoA = prompt("Digite o valor A: ");
ladoB = prompt("Digite o valor B: ");
ladoC = prompt("Digite o valor C: ");

            if (ladoA<ladoB+ladoC) {
                alert("O triângulo existe.");
            }else{
                alert("O triângulo não existe.");
            }
            if (ladoB<ladoA+ladoC) {
                alert("O triângulo existe.");
            }else{
                alert("O triângulo não existe.");
            }
            if (ladoC<ladoA+ladoB) {
                alert("O triângulo existe.");
            }else{
                alert("O triângulo não existe.");
            }
