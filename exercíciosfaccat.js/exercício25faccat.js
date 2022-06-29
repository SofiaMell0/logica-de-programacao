let saldoatual, saldo, debito, credito

saldo = parseFloat (prompt("Digite o valor do seu saldo R$ "));
debito = parseFloat (prompt("Digite o valor do seu débito R$ "));
credito = parseFloat (prompt("Digite o valor do seu crédito R$ "));

saldoatual = saldo - debito + credito

if (saldoatual>0){
    alert("Saldo positivo de R$ " +saldoatual);
}else if (saldoatual<0){
    alert("Saldo negativo de R$ " +saldoatual);
}