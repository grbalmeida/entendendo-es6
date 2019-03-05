// 1
// Uma função geradora tem "pontos de parada", e ela é iterável

// 2

function* generatorsTest() {
    console.log('Passei aqui!')
    yield 'Fim do método'
}

// Porque a função ainda não foi iterada
// Chamar o método next

const nextCall = generatorsTest().next()
console.log(nextCall)

// 3

function* runBolt() {
    console.log('Usain passou no Checkpoint 1')
    yield 'Checkpoint 1'
    console.log('Usain passou no Checkpoint 2')
    yield 'Checkpoint 2'
    console.log('Usain passou no Checkpoint 3')
    yield 'Checkpoint 3'
    console.log('Usain passou no Checkpoint 4')
    yield 'Checkpoint 4'
}

const running = runBolt()
running.next()
running.next()
running.next()
running.next()

// 4

function* pokemons() {
    yield 'Pikachu'
    yield 'Charmander'
    yield 'Caterpie'
}

for(let pokemon of pokemons()) {
    console.log(`Capturou o ${pokemon}`)
}

// 5

const team = {
    manager: 'Gilberto',
    intern: 'Fernanda',
    senior: 'Paulo',
    full: 'Camila',
    junior: 'Adão',
    [Symbol.iterator]: function*() {
        yield this.manager
        yield this.intern
        yield this.senior
        yield this.full
        yield this.junior
    }
}

for(let member of team) {
    console.log(member)
}