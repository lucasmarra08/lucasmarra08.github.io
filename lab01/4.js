let n = 0
let j = 1
let k, p

for (let i = 0; i < 100; i++) {
    k = n
    n = n + j
    p = k
    j = p
    console.log(n)
}



