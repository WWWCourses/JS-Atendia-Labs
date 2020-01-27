// let student1 = {
//     "firstName": "Ivan",
//     "greet": function () {
//         console.log( this.firstName);
//     }
// }

// let student2 = {
//     "firstName": "Asen",
//     "greet": function () {
//         console.log( this.firstName);
//     }
// }

// function studentFactory(name) {
//     let obj = {};

//     obj.firstName = name;
//     obj.greet = function () {
//         console.log( this.firstName);
//     };

//     return obj;
// }


// let student1 = studentFactory("Ivan");
// let student2 = studentFactory("Asen");


function Student(name) {
    // let this = {};
    this.firstName = name;
    this.greet = function () {
        console.log( this.firstName);
    };

    // return this;
}
let student1 =  new Student("Ivan");

student1.firstName = "Maria";


// class Student{
//     constructor(name){
//         this.firstName = name;
//     }
// }

student1.greet();
// student2.greet();
