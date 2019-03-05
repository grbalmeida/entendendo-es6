// 1

var array = []
for(let index = 0; index < 10; index++) {
    array.push(function() {
        console.log(index)
    })
}

array.forEach(function(myFunction) {
    myFunction()
})

// 10 10 10 10 10 10 10 10 10 10
// Utilizando o let ao declarar a variável index

// 2
// Criando uma variável com const

const api_key = '123'
console.log(api_key)

// 3
// Ele está tentando reatribuir o valor da variável nome completo

const player = {}
player.name = 'Rodrigo'
player.age = 33
console.log(`${player.name}_${player.age}`) // Rodrigo_33
// Porque a constante player aponta para uma referência na memória
// E essa referência não foi alterada
// Apenas foram adicionadas novas propriedades dentro do objeto

// 4
// É necessário que a variável tenha o valor atríbuido antes da sua utilização

// 5

const status = [
    {code: 'OK', answer: 'Sucesso'},
    {code: 'FAILED', answer: 'Erro'},
    {code: 'PENDING', answer: 'Pendente'}
]

let message = ''
const currentCode = 'OK'

for(let index = 0; index < status.length; index++) {
    if(status[index].code === currentCode) {
        message = status[index].answer
    }
}

console.log(message)