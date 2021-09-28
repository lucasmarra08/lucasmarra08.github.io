function soma() {
    const numero1 = document.querySelector(".numero1");
    const numero2 = document.querySelector(".numero2");

    const soma = parseInt(numero1.value, 10) + parseInt(numero2.value, 10);
    const p = document.querySelector(".soma");

    p.innerHTML = "A soma é " + soma;
}

function qualEMaior() {
    let numero1 = document.querySelector(".numero3");
    let numero2 = document.querySelector(".numero4");
    numero1 = parseInt(numero1.value, 10);
    numero2 = parseInt(numero2.value, 10);
    let maior, menor;

    const p = document.querySelector(".maior");

    if (numero1 != numero2) {
        if (numero1 > numero2) {
            maior = numero1;
            menor = numero2;
        }
        else if (numero1 < numero2) {
            maior = numero2;
            menor = numero1;
        }


        p.innerHTML = `${maior} é maior que ${menor}`;
    }
    else {
        p.innerHTML = `${numero1} é igual a ${numero2}`;
    }
}

function primo() {
    let numero = document.querySelector(".numero5");
    numero = parseInt(numero.value, 10);
    const p = document.querySelector(".primo");

    if (numero == 0) {
        p.innerHTML = "0 é nulo";
    }
    else {
        for (i = 2; i < numero; i++) {
            if (numero % i == 0) {
                return p.innerHTML = "Não é primo";
            }
        }

        p.innerHTML = "É primo";

    }
}

function hipotenusa() {
    const numero1 = document.querySelector(".numero6");
    const numero2 = document.querySelector(".numero7");

    const hipotenusa = Math.sqrt((parseInt(numero1.value, 10) ** 2) + (parseInt(numero2.value, 10) ** 2));

    const p = document.querySelector(".hipotenusa");

    p.innerHTML = "A hipotenusa é " + hipotenusa;

}

function salario() {
    const salario = document.querySelector(".numero8");
    const reajuste = document.querySelector(".numero9");

    const novoSalario = parseInt(salario.value, 10) + (parseInt(salario.value, 10) * (parseInt(reajuste.value, 10) * 0.01));

    const p = document.querySelector(".salario");

    p.innerHTML = `O novo salário é igual a ${novoSalario} reais`;
}

function temperatura() {
    const fahrenheit = document.querySelector(".numero10");

    const celsius = ((parseInt(fahrenheit.value, 10) - 32) / 9) * 5;

    const p = document.querySelector(".temperatura");

    p.innerHTML = `A temperatura em celsius é igual a ${celsius} graus`;
}

function mediaFinal() {
    const nota1 = document.querySelector(".numero11");
    const nota2 = document.querySelector(".numero12");
    const nota3 = document.querySelector(".numero13");

    const media = ((parseInt(nota1.value, 10) * 2) + (parseInt(nota2.value, 10) * 3) + (parseInt(nota3.value, 10) * 5)) / 10;

    const p = document.querySelector(".media");

    p.innerHTML = `A média final é igual a ${media}`;
}