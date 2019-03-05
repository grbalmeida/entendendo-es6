// 1

const word = 'ecmascript'
console.log(...word)

// 2
// O operador Rest transforma itens individuais em um array
// O operador Spread transform um objeto iterável em itens individuais

// 3

function countNumberOfNonAccentedVowels(word) {
    let letters = [...word]
    let count = 0

    for(let letter of letters) {
        if('aeiou'.includes(letter)) {
            count++
        }
    }
    return count
}

console.log(countNumberOfNonAccentedVowels('java')) // 2
console.log(countNumberOfNonAccentedVowels('php')) // 0
console.log(countNumberOfNonAccentedVowels('javascript')) // 3

// 4

const arguments = [1, 2, 3]
console.log.apply(this, arguments)

// 5

const marketingTeam = ['Joana', 'Marcela', 'Bruna']
const commercialTeam = ['Talita', 'Luisa', 'Vitória']
const completeTeam = [...marketingTeam, ...commercialTeam]

console.log(completeTeam.length) // 6