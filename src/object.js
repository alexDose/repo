const user = {}
const dog = {
    age: 10
}

function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

console.log(isEmpty(dog))
let salaries = {}
let sum = 0
for (let key in salaries) {
    sum += salaries[key]
}
console.log(sum)

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(multiplyNumeric(menu))

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (obj[key] === +obj[key]) {
            obj[key] *= 2
        }
    }
    return obj
}

function checkAge(age) {
    return age > 18
}

console.log(checkAge(19))

function min(a, b) {
    return a < b ? a : b
}

console.log(min(3, 3))

function pow(x, n) {
    let res = x
    for (let i = 1; i < n; i++) {
        res *= x
    }
    return res
}

console.log(pow(3, 3))

const newDog = Object.assign({}, dog)
console.log(newDog)

function camelize(str) {
    const arr = str.split('-')
    let res = arr.map((el, index) => index === 0 ? el : el[0].toUpperCase() + el.slice(1))

    return res.join('')

}

console.log(camelize("background-color"))

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4)

function filterRange(arr, a, b) {
    return arr.filter(el => el >= a && el < b)
}

console.log(filtered)

function filterRangeInPlace(arr, a, b) {
    return arr.filter(el => el >= a && el<=b)
}

console.log(filterRangeInPlace(arr, 1, 4))

let arr1 = [5, 2, 1, -10, 8];

console.log(arr1.sort((a,b) => b - a))

function copySorted(arr) {
    return arr.map(el => el).sort()
}

console.log(copySorted(["HTML", "JavaScript", "CSS"]))

function calculate(str) {
    const arr = str.split(' ')
    console.log(arr)
    return arr[1] === '+' ? +arr[0] + +arr[2] : +arr[0] - +arr[2]
}

console.log(calculate('1 + 2'))

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let ar = [ vasya, petya, masha ];
console.log(ar.sort((a, b) => a.name.localeCompare(b.name)))
console.log(ar.reduce((acc, el) => acc + el.age, 0)/ar.length)
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
console.log(new Set(strings))
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

console.log(users.reduce((acc, el) => {
    acc[el.id] = el
    return acc
}, {}))
