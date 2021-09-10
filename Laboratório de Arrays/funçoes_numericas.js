function sum(array) {
    tamanho = array.length
    soma = 0

    for (i = 0; i < tamanho; i++) {
        soma = soma + array[i]
    }
    console.log(soma)
}

function sumOdds(array) {
    tamanho = array.length
    soma = 0

    for (i = 0; i < tamanho; i++) {
        if (array[i] % 2 != 0) {
            soma = soma + array[i]
        }
    }
    console.log(soma)
}

function product(array) {
    tamanho = array.length
    produto = 1

    for (i = 0; i < tamanho; i++) {
        produto = produto * array[i]
    }
    console.log(produto)
}

sum([1, 2, 3])
sum([2, 2, 2])
sum([1, 2, 3, 4, 5, 6])

sumOdds([1, 2, 3])
sumOdds([2, 2, 2])
sumOdds([1, 2, 3, 4, 5, 6])

product([1, 2, 3])
product([2, 2, 2])
product([1, 2, 3, 4, 5, 6])