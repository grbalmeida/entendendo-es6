// 1
// Uma forma de extrair dados de objetos e arrays

// 2

const user = {
    email: 'alex@gmail.com',
    name: 'Alex',
    age: 23
}

const {email, name, age} = user

console.log(email) // alex@gmail.com
console.log(name) // Alex
console.log(age) // 23

// 3

const secondUser = {
    name: 'Toreto',
    email: 'velozesefuriososparasempre@gmail.com'
}

const {name:nick, email:login} = secondUser

console.log(nick) // Toreto
console.log(login) // velozesefuriosos@gmail.com

// 4

const contacts = [
    {name: 'Mario Antonio', phone: '1234-5678'},
    {name: 'Reinaldo Silva', phone: '1234-6789'},
    {name: 'Bárbara Lopes', phone: '1234-5567'}
]

const [,{name:secondName, phone:secondPhone}] = contacts

console.log(secondName) // Reinaldo Silva
console.log(secondPhone) // 1234-6789

// 5

const professional = {
    title: 'Engenheiro de Software',
    department: 'Engenharia'
}

function isEngineer({title, department}) {
    return title.indexOf('Engenheiro') > -1 && department === 'Engenharia'
}

console.log(isEngineer(professional)) // true
professional.title = 'Marketing'
console.log(isEngineer(professional)) // false

// 6

const faculty = [
    ['Gramática', '9:00', 'Sueli'],
    ['Matemática', '10:15', 'Amilton'],
    ['Educação Física', '11:30', 'Bruno']
]

function showsTeacherGrade(faculty) {
    for(let schedule of faculty) {
        const [lesson, classTime, professorName] = schedule
        console.log(`Aula de ${lesson} às ${classTime} com professor(a) ${professorName}`)
    }
}

showsTeacherGrade(faculty)

// Extra

const points = [
    [1, 2],
    [3, 4],
    [5, 6]
]

const secondListOfPoints = (points) => {
    const array = []
    for(let point of points) {
        const [x, y] = point
        array.push({x, y})
    }
    return array
}

console.log(secondListOfPoints(points))