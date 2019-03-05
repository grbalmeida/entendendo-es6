// 1

var products = new Map()
products.set('Arroz', 7.10)
products.set('Feijão', 2.30)
products.set('Macarrão', 4.70)
products.set('Refrigerente', 3.00)

function haveProduct(products, desiredProduct) {
    return products.has(desiredProduct)
}

console.log(haveProduct(products, 'Feijão')) // true
console.log(haveProduct(products, 'Amendoim')) // false

// 2

const box = new Map()
box.set('Arroz', 7.10)
box.set('Feijão', 2.30)
box.set('Macarrão', 4.70)
box.set('Refrigerante', 3.0)

const freights = new Map()
freights.set('São Paulo', 10.10)
freights.set('Rio de Janeiro', 12.30)
freights.set('Brasília', 14.70)
freights.set('Outros', 13.00)

function calculateTotalPurchaseValue(products, city, box, freights) {
    let freight = 0
    let totalPurchaseValue = 0

    if(freights.has('Outros')) freight = freights.get('Outros')
    if(freights.has(city)) freight = freights.get(city)

    for(let product of products) {
        if(box.has(product)) {
            totalPurchaseValue += box.get(product)
        }
    }

    return totalPurchaseValue + freight
}

console.log(calculateTotalPurchaseValue(['Arroz'], 'São Paulo', box, freights)) // 17,20

// 3
/*
    Quando há a necessidade de iterar sobre os valores,
    Quando é necessário adicionar um chave de um tipo diferente de string
*/

// 4
// Quando se deseja encapsular os atributos de uma classe

// 5

const friends = new Map()
friends.set('João da Silva', {age: 23, gender: 'Masculino'})
friends.set('Luisa Pimenta', {age: 18, gender: 'Feminino'})
friends.set('Julio Marinho', {age: 52, gender: 'Masculino'})
friends.set('Marcela Mel', {age: 27, gender: 'Feminino'})

function deleteFriends(friends, exFriends) {
    for(let exFriend of exFriends) {
        if(friends.has(exFriend)) {
            friends.delete(exFriend)
            console.log(`${exFriend} foi deletado!`)
        } else {
            console.log(`${exFriend} não é seu amigo!`)
        }
    }
}

deleteFriends(friends, ['João da Silva', 'Marcelo Teixeira'])
// João da Silva foi deletado!
// Marcelo Teixeira não é seu amigo!