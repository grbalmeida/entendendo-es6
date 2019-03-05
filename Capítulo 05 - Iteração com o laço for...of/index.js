// 1

function sumBilling(numbers) {
    let sum = 0
    for(let number of numbers) {
        sum += number
    }
    return sum
}

console.log(sumBilling([1, 2, 3, 4]))

// 2
// Porquê Casa não é iterável

// 3

const Home = {
    squareMeters: 4000,
    height: 3000,
    numberOfBedrooms: 4,
    numberOfBathrooms: 2
}

for(var attribute in Home) {
    console.log(Home[attribute])
}

// 4

function walkTheStreets(streets, streeThatMustStop) {
    for(let street of streets) {
        console.log(street)
        if(street === streeThatMustStop) {
            break
        }
    }
}

walkTheStreets(['Rua 1', 'Rua 2', 'Rua 3'], 'Rua 2') // Rua 1, Rua 2

function doNotGoOnTheDangerousStreet(streets, dangerousStreet) {
    for(let street of streets) {
        if(street === dangerousStreet) {
            continue
        }
        console.log(street)
    }
}

doNotGoOnTheDangerousStreet(['Rua 1', 'Rua 2', 'Rua 3', 'Rua 4'], 'Rua 3') // Rua 1, Rua 2, Rua 4