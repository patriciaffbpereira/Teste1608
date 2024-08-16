function soma(A, B) {
    return A + B;
}

total = soma(-2, 10);
document.write("Resultado da soma com valores fixos:" + total);

N1 = Number.parseFloat(prompt('Digite o primeiro número:'));
N2 = Number.parseFloat(prompt('Digite o segundo número:'));
valorSoma = soma(N1, N2);
alert("Resultado da soma dos valores informados pelo usuário: " + valorSoma);
