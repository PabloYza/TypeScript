const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    long: 15
  },
  setAge(age: number): void {
    this.age = age
  }
}

const { age }: { age: number } = profile

const { lat, long }: { lat: number, long: number} = profile.coords