// 1

function tag(string, ...values) {
    let items = values.reduce((acc, current) => acc + current, '').split(',')
    let html = '<ul>'
    items.forEach(item => html += `<li>${item}</li>`)
    html += '</ul>'
    return html
}

const shopping = 'leite,feijão,arroz,mandioca'
const element = tag`${shopping}`
console.log(element)

// 2

function groupStrings(strings) {
    let text = ''
    strings.forEach(string => text = `${text}${string}`)
    return text
}

console.log(groupStrings(['a', 'b', 'c', 'd'])) // abcd

// 3

function mountFullAddress({street, city, number, zipcode}) {
    return `${street}, ${city} - ${number}, ${zipcode}`
}

const address = {
    street: 'Rua 1',
    city: 'Cidade 1',
    number: 28,
    zipcode: '13312-132'
}

console.log(mountFullAddress(address))

// 4

let name = 'Usuario'
console.log(`Bem-vindo ${name}!`)

// 5

function sum(firstNumber, secondNumber) {
    return `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`
}

console.log(sum(1, 2)) // 1 + 2 = 3