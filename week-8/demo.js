//https://www.youtube.com/watch?v=khuDeNwXkfI
//https://www.youtube.com/watch?v=ZYa_NiOUTQo
//https://www.youtube.com/watch?v=jM0WcyQWMSM

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    static sleep(number) {
        console.log(`Slept ${number} of hours`)
    }

    welcome() {
        console.log(`I'm ${this.name} and my age is ${this.age}`)
    }

    hello() {
        console.log(`Hello my name is ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, age, gpa){
        super(name, age)
        this.gpa = gpa
    }

    hello() {
        super.hello()
        console.log(`My gpa is ${this.gpa}`)
    }
}

class Teacher extends Person {
    constructor(name, age, classSize) {
        super(name, age)
        this.classSize = classSize
    }

    hello() {
        console.log(`My class size is ${this.classSize}`)
    }
}


const person1 = new Person('Bruce', 33)   
const person2 = new Person('Stephanie', 44)   
// person1.welcome()
// person1.hello()
// person2.welcome()
// person2.hello()

const student1 = new Student('Toby', 3, '3.0')
console.log(student1)
student1.hello()
student1.welcome()

const teach1 = new Teacher('Peter', 50, 11)
console.log(teach1)
teach1.hello()

Person.sleep(8)