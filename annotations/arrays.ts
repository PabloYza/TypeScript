const carMakers: string[] = ['ford', 'tesla', 'toyota']
const dates = [new Date(), new Date()]

const carsByMake: (string | number)[][] = [
  ['f150'],
  ['corolla'],
  [12]
]

// help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values
carMakers.push(1000)

// help with map, reduce, etc...
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

// Flexible types
const importantDates: (Date | string)[] = [
  new Date(), '2030-10-10' 
]
importantDates.push(123)