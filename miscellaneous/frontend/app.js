// constructor - doesn't return anything & start with capital letter

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function (){
//     console.log(`Hi, i am ${this.name}`);
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(`Hi, i am ${this.name}`);
  }
}

class Student extends Person {
    constructor(name, age,marks) {
        super(name, age); // parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age,subject) {
        super(name, age); // parent class constructor is being called
        this.subject = subject;
    }
}

let p1 = new Student("John", 21,90);
let p2 = new Teacher("sam", 30,"js programming");

// console.log(p1);
