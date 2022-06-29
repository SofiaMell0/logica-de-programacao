let horasnomes, salarioporhora, salariototal, horasextras;

horasnomes=parseFloat(prompt("informe o total de horas no mês que foram trabalhadas: "));

salarioporhora=parseFloat(prompt("o funcionário recebe por hora R$: "));

if (horasnomes>160) {
    horasextras= salarioporhora + (0.5 * salarioporhora);
    salariofinal=horasextras + salarioporhora * horasnomes;
    alert("o salario final recebido pelo funcionário foi de: " +salariofinal);

} else if(horasnomes<=160) {
    salariofinal= horasnomes * salarioporhora
    alert("o salario final recebido pelo funcionário foi de: " +salariofinal)
}