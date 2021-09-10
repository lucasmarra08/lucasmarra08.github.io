function saqueMinimo(n) {
    let cem = 0
    let cinq = 0
    let vin = 0
    let dez = 0
    let cinco = 0
    let dois = 0

    const array = []

    while (n >= 100) {
        n = n - 100
        cem = cem + 1
    }
    array.push(cem)
    while (n >= 50) {
        n = n - 50
        cinq = cinq + 1
    }
    array.push(cinq)
    while (n >= 20) {
        n = n - 20
        vin = vin + 1
    }
    array.push(vin)
    while (n >= 10) {
        n = n - 10
        dez = dez + 1
    }
    array.push(dez)
    while (n >= 5) {
        n = n - 5
        cinco = cinco + 1
    }
    array.push(cinco)
    while (n >= 2) {
        n = n - 2
        dois = dois + 1
    }
    array.push(dois)

    console.log(array)
}

saqueMinimo(1280)
saqueMinimo(5705)
saqueMinimo(892)