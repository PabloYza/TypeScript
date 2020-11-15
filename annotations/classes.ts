// Blueprint to create an object with some fields (values) and methods to represent a 'thing'

class Vehicle {
  constructor(public color: string) {}

  drive(): void {
    console.log('broom broom')
  }

  honk(): void {
    console.log('meek meek')
  }
}
const vehicle = new Vehicle('orange')
vehicle.drive()
console.log(vehicle.color)

// Car now has access to all the properties defined in class Vehicle - to change the method, just over write
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)

  }

  startDriving(): void {
    this.drive()
  }
}
const car = new Car(6, 'green')
console.log(car)