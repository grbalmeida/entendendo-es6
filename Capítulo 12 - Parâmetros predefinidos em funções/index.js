// 1
// Meu nome é: undefined

// 2

function sum(a = 0, b = 0) {
    return a + b
}

console.log(sum()) // 0

// 3

function printFullName(name = '', lastName = '', middleName = '') {
    console.log(`${name} ${middleName} ${lastName}`)
}

printFullName('João')

// 4
// Valor 1, pois quando a variável x é atribuída ela busca a variável v em um escopo acima

// 5

function subtraction(a = 0, b = a) {
    return a + b
}

console.log(subtraction())