//1

function name(name) {
    return name;
}

const m = [];

function loop(times = 0, callback = null) {

    if (callback != null) {
        for (let i = 0; i < times; i++ ) {
            m.push(`${callback} - ${i}`);
        }
    }
    console.log(m);
}

loop(3, name('Dmitriy'));


//2 

function calculateArea(side) {
    let area = side*side;
    let figure = 'cube';
    let input = `Сторона - ${side}`;
    return { area, figure, input };
}

console.log(calculateArea(4));


//3

class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }
    displayInfo() {
        return `${this.name}, ${this.age}, ${this.dateOfBirth}`;
    }
}

class Employee extends Human {
        constructor(name, age, dateOfBirth, salary, department) {
            super(name,age, dateOfBirth);
            this.salary = salary;
            this.department = department;
}
    displayInfo() {
        return `${super.displayInfo()}, ${this.salary}, ${this.department}`;
    }

}

class Developer extends Employee {

}

class Manager extends Employee {

    constructor(name,age, dateOfBirth) {
        super(name,age, dateOfBirth);

    }




}

let me = new Employee('Egor', '21', '22.11.2001', '22100', 'Soft');
console.log(me.displayInfo());


// 4

function* generator() {
    let name = prompt('name?');
    yield;
    let age = prompt('age?');
    yield;
    return console.log({name, age});


}

let g = generator();

for(let num of g){

}





