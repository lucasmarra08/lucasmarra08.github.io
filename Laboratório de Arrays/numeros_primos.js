function sequenciaPrimos(num1, num2) {
    const array = []

    if (num2 == undefined) {
        let n
        let q = 0
        array.push(2)

        for (let i = 3; q < num1 - 1; i++) {
            n = 1
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    n = 0
                    break
                }
                else continue
            }
            if (n == 1) {
                array.push(i)
                q++
            }

        }
    }
    else {
        let n

        for (let i = num1; i < num2; i++) {
            n = 1
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    n = 0
                    break
                }
                else continue
            }
            if (n == 1) {
                array.push(i)
            }
        }
    }

    console.log(array)
}

sequenciaPrimos(4)
sequenciaPrimos(6)
sequenciaPrimos(2, 10)
sequenciaPrimos(2, 20)
sequenciaPrimos(10, 2)

