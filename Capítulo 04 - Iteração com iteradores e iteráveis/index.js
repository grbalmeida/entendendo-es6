// 1

const streets = [
    {name: 'Rua 1', size: 2500},
    {name: 'Rua 2', size: 3400},
    {name: 'Rua 3', size: 1400}
]

function calculateDistance(streets) {
    let distance = 0
    let iterator = streets[Symbol.iterator]()
    let street = iterator.next()
    while(!street.done) {
        distance += street.value.size
        street = iterator.next()
    }
    return distance
}

console.log(calculateDistance(streets))

// 2

function isEmptyList(numbers) {
    let iterator = numbers[Symbol.iterator]()
    return iterator.next().done
}

console.log(isEmptyList([]))
console.log(isEmptyList([1]))

// 3

function spellWord(word) {
    for(let letter of word) {
        console.log(letter)
    }
}

spellWord('Abacaxi')

// 4

function createIterator(list) {
    let nextIndex = 0
    return {
        next: function() {
            if(nextIndex < list.length) {
                return {value: list[nextIndex++], done: false}
            } else {
                return {value: undefined, done: true}
            }
        }
    }
}

console.log(createIterator([1, 2]).next())