// console.dir( global );
console.dir( window );

class Student{
    constructor(firstName, age, address){
        this.firstName = firstName;
        this.age = age;
        this.age = age;
        this.address = address;
    }
    greet(){
        console.log(`I'm ${this.firstName}. I'm from ${this.address.country}`);
    }
}

let student1 = new Student(
    "pesho",
    43,
    {
    "zip": 1504,
    "country": "Bulgaria"
    }
);

// student1.greet();
console.dir(student1);