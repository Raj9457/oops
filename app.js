const student = {
  fullName: "Rajat Bisht",
  marks: 94.4,
  printMarks: function () {
    console.log("marks = ", this.marks); //student.marks
  },
};

const employee = {
  calcTax1() {
    console.log("tax rate is 10%", this.salary);
  },
  calcTax2: function () {
    console.log("tax rate is 20%");
  },
};

const karanArjun = {
  salary: 50000,
};

karanArjun.__proto__ = employee;

class ToyotaCar {
  constructor(brand, mileage) {
    this.brand = brand;
    this.mileage = mileage;
    console.log("creating new object");
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }

  setBrand(brand) {
    this.brandName = brand;
  }
}
let fortuner = new ToyotaCar("fortunerd", 10);
// fortuner.setBrand("Fortuner");

//Inheritance
class Parent {
  constructor() {
    this.species = "homo sepiens";
  }
  hello() {
    console.log("hello");
  }
  eat() {
    console.log("eat vegetable");
  }
}
class Child extends Parent {
  play() {
    console.log("play");
  }
  eat() {
    console.log("do not eat vegetable");
  }
}

let kid = new Child();

//super keyword

class Person {
  constructor(name) {
    console.log("enter parent");
    this.species = "homo sepiens";
    this.name = name;
  }
  eat() {
    console.log("eat");
  }
}

class Engineer extends Person {
  constructor(name, branch) {
    console.log("enter child ");
    super(name);
    this.branch = branch;
    console.log("exit child");
  }
  work() {
    super.eat();
    console.log("solve the problems");
  }
}

let engObj = new Engineer("Rajat", "chemical engg");
