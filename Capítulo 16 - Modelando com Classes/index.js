// 1

class VideoGame {
    constructor(brand, numberOfControls, mediaType) {
        this.brand = brand
        this.numberOfControls = numberOfControls
        this.mediaType = mediaType
    }
}

var playstation = new VideoGame('Sony', 2, 'DVD')
console.log(playstation)

// 2

class PlayStation extends VideoGame {
    constructor(brand, numberOfControls, mediaType, numberOfUsbInputs, voltage, additional) {
        super(brand, numberOfControls, mediaType)
        this.numberOfUsbInputs = numberOfUsbInputs
        this.voltage = voltage
        this.additional = additional
    }
}

var playstation2 = new PlayStation('Playstation 2', 4, 'DVD', 2, 110, ['Controle sem fio', 'Volante'])
console.log(playstation2)

// 3

class Door {
    static totToc() {
        console.log('Quem é?')
    }
}

Door.totToc()

// 4
// Hoisting não funciona com classes, para utilizar uma classe ela tem que existir

class Food {
    constructor(name) {
        this.name = name
    }
}

const food = new Food('Feijão')
console.log(food)

// 5

const Computer = class {
    static getOperationalSystem() {
        console.log('Linux')
    }
}

Computer.getOperationalSystem()