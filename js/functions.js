'use strict'

const numbers = document.querySelector('#numbers')
const lisanro = document.querySelector('#lisä')
const plusnro = document.querySelector('#plus')
const array = []

while (array.length < 8) {
    let randomNumber = Math.floor(Math.random() * 40) + 1
    if (!array.includes(randomNumber)) {
        array.push(randomNumber)
    }
}
console.log(array)
plusnro.innerHTML = array[7]
lisanro.innerHTML = Math.floor(Math.random() * 30) + 1

array.pop()
console.log(array)
array.sort((a, b) => a - b)

const row = numbers.insertRow(-1)
array.forEach((number) => {
    const cell = row.insertCell()
    cell.innerHTML = number
})