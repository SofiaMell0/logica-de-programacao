let salariofixo, valordevendas, comissao, salariofinal

salariofixo = parseFloat (prompt("Informe o valor do salário fixo do funcionário: "));
valordevendas = parseFloat (prompt("Informe qual o valor total em vendas no mês efetuadas pelo vendedor: "));

if (valordevendas<=1500){
    comissao = valordevendas * (3/100);
    salariofinal  = salariofixo + comissao;
    alert ("O salário no final do mês do vendedor será de R$ " +salariofinal);
}else if (valordevendas>1500){
    comissao = valordevendas * (5/100);
    salariofinal = salariofixo + comissao;
    alert("O salário no final do mês do vendedor será de R$ " +salariofinal)
}