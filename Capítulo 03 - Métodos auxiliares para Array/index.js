// 1

var numbers = [0, 1, 2, 3, 4, 5]

numbers.forEach(number => {
    if(number % 2 === 0) {
        console.log(`${number} é par`)
    } else {
        console.log(`${number} é ímpar`)
    }
})

// 2

function double(numbers) {
    return numbers.map(number => number * 2)
}

console.log(double([1, 2, 3]))

// 3

function capitalize(strings) {
    return strings.map(string => string.toUpperCase())
}

console.log(capitalize(['oi', 'tudo', 'bem?']))

// 5

function removeDuplicates(numbers) {
    return numbers.reduce((acc, current) => {
        const exists = acc.find(number => number === current)
        if(!exists) acc.push(current)
        return acc
    }, [])
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 5]))

// 6

const students = [
    {name: 'Diogo', average: 5.5},
    {name: 'Julia', average: 9.5},
    {name: 'Roberto', average: 1.5},
    {name: 'Tiago', average: 6.0}
]

const approved = students.filter(student => student.average >= 6.5)
console.log(approved)

// 7

const list = [
    {name: 'Tânia', lastName: 'Cardoso', age: 65},
    {name: 'Emilly', lastName: 'Barbosa', age: 46},
    {name: 'Vitória', lastName: 'Costa', age: 83},
    {name: 'Erick', lastName: 'Ferreira', age: 16}
]

function search(property, value, list) {
    return list.find(function(item) {
        return item[property] === value
    })
}

console.log(search('name', 'Tânia', list))

// 8

const dimensions = [
    {height: 10, length: 20},
    {height: 2, length: 4},
    {height: 1, length: 1},
    {height: 50, length: 50}
]

function calculateTotalArea(dimensions) {
    return dimensions.reduce((acc, current) => {
        return acc + (current.height * current.length)
    }, 0)
}

console.log(calculateTotalArea(dimensions))

function calculatesSqrt(numbers) {
    return numbers.map(number => Math.sqrt(number))
}

console.log(calculatesSqrt([4, 9, 16, 25, 36])) // 2, 3, 4, 5, 6

// 10
// O forEach apenas percorre um array
// Enquanto que o map retorna um novo array com as modificações sem alterar o array iterado

// 12

const products = [
    {name: 'Cereal', price: '10', expirationDate: '2017-02-21'},
    {name: 'Suco de Abacaxi', price: '12', expirationDate: '2017-01-01'},
    {name: 'Torta de frango', price: '25', expirationDate: '2017-07-07'}
]

function existsDatedProducts(products, referenceDate) {
    let date = new Date()

    if(referenceDate) date = new Date(referenceDate)
    return products.some(product => product.expirationDate < referenceDate)
}

console.log(existsDatedProducts(products, '2017-03-01'))
console.log(existsDatedProducts(products, '2016-01-01'))