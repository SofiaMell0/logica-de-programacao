let contadora = 1, soma=0

do {
    if(contadora % 2 == 0){
        soma=contadora+soma;
}
contadora++
} while (contadora<501);
alert(soma)