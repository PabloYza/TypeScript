// Creates a new type describing the property names and values types of an object
interface Car {
  name: string,
  year: Date,
  broken: boolean,
  summary(): string, // label what it returns
}
interface Reportable {
  summary(): string
}


const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `The name: ${this.name}`
  }
  // isBroken: 'caca'
}
const printCar = (car: Car): void => {
  console.log(`Name: ${car.name}`)
  console.log(`Year: ${car.year}`)
  console.log(`Broken: ${car.broken}`)
}
printCar(oldCivic)


const oldCamaro = {
  name: 'camaro',
  year: new Date(),
  broken: true,
  summary(): string {
    return `The name: ${this.name}`
  }
  // isBroken: 'caca'
}
const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}
printSummary(oldCamaro)


const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 30,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
}
printSummary(drink)