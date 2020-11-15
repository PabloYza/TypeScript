let apples: number = 5

// object literal
let point: { x: number, y: number } = {
  x: 10,
  y: 20
}

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// Function that returns 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates: {x: number, y: number} = JSON.parse(json)
console.log(coordinates)

// When we declare a vaiable on on line, and initalizate it later
let words = ['red', 'blue', 'yellow']
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'red') {
    foundWord = true
  }
}

// Varibale which its type cant be inferred

let numbers = [-10, -2, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i]
  if (element > 0) {
    numberAboveZero = element
  }  
}

