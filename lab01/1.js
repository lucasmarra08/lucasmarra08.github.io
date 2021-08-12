let fatorial = 1
let j

function Fatorial(number) {
    for (let i = 0; i < number; i++) {
        j = number - i
        fatorial = fatorial * j
    }
    console.log(fatorial)
}

Fatorial(12)