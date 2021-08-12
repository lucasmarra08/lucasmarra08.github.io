let n

for (let i = 3; i < 1000; i++) {
    n = 1
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            n = 0
            break
        }
        else continue
    }
    if (n == 1) {
        console.log(i)
    }

}