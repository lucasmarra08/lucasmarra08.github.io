function decimalParaRomano(num) {
    const array = []
    while (num > 0) {
        while (num >= 1000) {
            num = num - 1000
            array.push('M')
        }
        if (num >= 900) {
            num = num - 900
            array.push('CM')
        }
        while (num >= 500) {
            num = num - 500
            array.push('D')
        }
        if (num >= 400) {
            num = num - 400
            array.push('CD')
        }
        while (num >= 100) {
            num = num - 100
            array.push('C')
        }
        if (num >= 90) {
            num = num - 90
            array.push('XC')
        }
        while (num >= 50) {
            num = num - 50
            array.push('L')
        }
        if (num >= 40) {
            num = num - 40
            array.push('XL')
        }
        while (num >= 10) {
            num = num - 10
            array.push('X')
        }
        if (num == 9) {
            num = num - 9
            array.push('IX')
        }
        while (num >= 5) {
            num = num - 5
            array.push('V')
        }
        if (num == 4) {
            num = num - 4
            array.push('IV')
        }
        while (num > 0) {
            num = num - 1
            array.push('I')
        }
    }

    console.log(array)
}

decimalParaRomano(3)
decimalParaRomano(6)
decimalParaRomano(9)
decimalParaRomano(48)
decimalParaRomano(59)
decimalParaRomano(93)
decimalParaRomano(575)