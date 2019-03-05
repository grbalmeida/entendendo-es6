// 1

let cart = [
    {name: 'Abacaxi', price: '2.00'},
    {name: 'Detergente', price: '2.50'},
    {name: 'Bolacha', price: '3.80'}
]

const printProduct = (name, price) => console.log(`Produto: ${name} | Preço: ${price}`)
cart.forEach(product => printProduct(product.name, product.price))

// 2

let items = ['Abacaxi', 'Banana', 'Maçã', 'Laranja', 'Limão']
items.forEach(item => console.log(item))

// 4

const badWords = [
    'Inconstitucionalíssimo',
    'Otorrinolaringologista',
    'Pneumoultramicroscopicossilicovulcanoconiose',
    'Oftalmotorrinolaringologista'
]

let sizes = badWords.map(badWord => badWord.length)
console.log(sizes) // [22, 22, 44, 28]

// 5

const team = {
    name: 'Valentes da Glória',
    members: ['Luciano', 'Maria', 'Virgínia', 'Daniela'],
    printNames: function() {
        this.members.forEach(member => console.log(`${member} é da equipe ${this.name}`))
    }
}

team.printNames()