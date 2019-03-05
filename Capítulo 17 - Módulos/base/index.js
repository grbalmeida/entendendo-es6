// desenvolva aqui seus códigos para os exercícios

import name, {key, url as link} from './src/config'
import {Telephone} from './src/classe'
import {printOnConsole as printer} from './src/printer'

console.log(name)
console.log(key)

const telephone = new Telephone('Moto G', '9898-1219')
console.log(telephone)

console.log(link)

printer('Hello World!')