// 1

function hasString(text, term) {
    return text.split(' ').includes(term)
}

console.log(hasString('Era uma vez', 'vez')) // true
console.log(hasString('Dois mais dois é quatro', 'mais')) // true
console.log(hasString('Não há nada aqui', 'quadro')) // false

// 2
// NaN

// 3

function exponential(base, exponent) {
    return base ** exponent
}

console.log(exponential(2, 2)) // 4
console.log(exponential(2, 3)) // 8
console.log(exponential(3, 2)) // 9