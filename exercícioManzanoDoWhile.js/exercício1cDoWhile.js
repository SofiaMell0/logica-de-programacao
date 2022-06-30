let contadora = 1, soma = 0

do {
    if (contadora % 4 == 0){
        soma= contadora+soma
}
contadora++
alert(soma);
} while (contadora<201);
