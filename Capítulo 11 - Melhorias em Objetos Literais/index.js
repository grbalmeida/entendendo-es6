// 1

const model = 'Mercedes-Benz Monobloco 0-371 RSL'
const year = 1993
const capacity = 50

const accelerate = () => console.log('vrum vrum')

const bus = {
    model,
    year,
    capacity,
    accelerate
}

bus.accelerate()

// 2

const dimensions = (length, initialHeight) => {
    const height = initialHeight * 9 / 16
    return {length, height}
}

console.log(dimensions(10, 10)) // {length: 10, height: 5.625}

// 3

const person = {
    name: 'Goku',
    team: 'Guerreiro Z',
    introduceYourself() {
        console.log(`Oi, eu sou o ${this.name}!`)
    }
}

person.introduceYourself()

// 4

const secondPerson = new Map()
secondPerson.set('name', 'Mirella')
secondPerson.set('age', 23)
secondPerson.set('gender', 'Feminino')

function createsObjectWithCharacteristics(object) {
    const newObject = {}
    for(let item of object.keys()) {
        newObject[item] = object.get(item) 
    }
    return newObject
}

console.log(createsObjectWithCharacteristics(secondPerson))
// {name: 'Mirella', age: 23, gender: 'Feminino'}

// 4
// Javascript Object Notation, muito utilizado na integração de sistemas