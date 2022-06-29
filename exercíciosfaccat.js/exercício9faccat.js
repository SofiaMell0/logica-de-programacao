let salariomensal, percentualreajuste, novosalario;

salariomensal = parseInt(prompt("Qual é o valor do salário mensal atual do funcionário? "));
percentualreajuste = parseInt(prompt("Informe o percentual de reajuste atual: "));

percentualreajuste = (salariomensal*percentualreajuste)/100
novosalario = salariomensal-percentualreajuste

alert("O valor atual do salário com o reajuste é R$" +novosalario);