// 1

function mapsObject(object) {
    const map = new Map()

    for(let [key, value] of Object.entries(object)) {
        map.set(key, value)
    }

    return map
}

const map = mapsObject({name: 'João Bobão'})
console.log(map.get('name'))

// 2

function detailObject(object) {
    for(let [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`)
    }
}

detailObject({street: 'Oscar Freire'}) // street: Oscar Freire

// 3
// Symbol

// 4

function onlyValues(object) {
    for(let value of Object.values(object)) {
        console.log(value)
    }
}

onlyValues({name: 'José', age: 20})
// José 20

// 5

function allRight(strings, maxLength) {
    strings.forEach(string => {
        console.log(string.padStart(maxLength))
    })
}

allRight(['carro', 'avião', 'foguete', 'helicóptero'], 11)

// 6

function allToTheLeft(strings, maxLength) {
    strings.forEach(string => {
        console.log(string.padEnd(maxLength, '-'))
    })
}

allToTheLeft(['carro', 'avião', 'foguete', 'helicóptero'], 11)

// 7

function numberOfEnumerableProperties(object) {
    const descriptors = Object.getOwnPropertyDescriptors(object)
    const values = Object.values(descriptors)
    const count = values.filter(value => value.enumerable).length
    console.log(count)
}

numberOfEnumerableProperties({name: 'Jão', age: 24}) // 2