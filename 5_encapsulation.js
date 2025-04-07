class Person1 {
  #age; // private field

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  setAge(age) {
    if (age > 0) {
      this.#age = age;
    }
  }
}

const p = new Person1("Alice", 25);
console.log(p);

console.log(p.getAge()); // 25
p.setAge(30);
console.log(p.getAge()); // 30
