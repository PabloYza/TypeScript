// Array-like structure where each element represents some preoperty of record

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

type Drink = [string, boolean, number]
// the order matters
const pepsi: Drink = ['green', true, 50]
pepsi[0] = true
pepsi[1] = true

const sprite: Drink = ['clear', false, 10]

const carSpecs: [number, number] = [400, 3354]