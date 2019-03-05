// 1

function calculateTotalPrice(...prices) {
    return prices.reduce((total, price) => total + price, 0)
}

console.log(calculateTotalPrice(1, 2, 3, 4, 5)) // 15

// 2

function everyoneIsBiggerThan(firstNumber, ...numbers) {
    return numbers.every(number => number > firstNumber)
}

console.log(everyoneIsBiggerThan(2, 3, 4, 5, 6, 7)) // true
console.log(everyoneIsBiggerThan(5, 4, 3, 2, 1)) // false
console.log(everyoneIsBiggerThan(1, 2)) // true

// 3

function announcesDrawnBalls(...balls) {
    for(let ball of balls) {
        console.log(`A bola escolhida foi: ${ball}`)
    }
}

announcesDrawnBalls(1, 2, 3)
// A bola escolhida foi: 1
// A bola escolhida foi: 2
// A bola escolhida foi: 3

// 4
// Porque o operador rest pega os últimos parâmetros passados na função

// 5
// Simula um array com os argumentos informados na função