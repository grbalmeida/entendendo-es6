// 1

function removeDuplicates(numbers) {
    let internalNumbers = new Set(numbers)
    let array = []

    for(let number of internalNumbers) {
        array.push(number)
    }

    return array
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3])) // [1, 2, 3]

// 2
// O WeakSet recebe apenas objetos como parâmetro

// 3

var firstMusic = {
    title: 'O amor não tem rollback',
    author: 'SQL'
}

var secondMusic = {
    title: 'Nada se componentiza a você',
    author: 'React'
}

var playlist = new WeakSet([firstMusic, secondMusic])

for(var music of playlist) {
    console.log(music)
}

// Isso acontece pois o WeakSet não é iterável

// 4
// É interessante quando não se quer ter problemas com vazamento de memória