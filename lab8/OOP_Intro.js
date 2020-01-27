                  // Math, physics
// "Ivan", "Ivanov", 5, 6
// "Asen", "Asenov", 3, 4

// let student1FirstName = "Ivan";
// let student2FirstName = "Asen";

// console.log(student1FirstName);
// console.log(student2FirstName);

// let newName = "Pesho";
// let firstNames = ["Ivan", "Asen"];
// firstNames.push(newName);

// for (let i = 0; i < firstNames.length; i++) {
//     const name = firstNames[i];
//     console.log(name);
// }

// let students = [
//     ["Ivan", "Ivanov", 5, 6],
//     ["Asen", "Asenov", 5, 4],
// ];

// function greet(student) {
//     let higestScore = Math.max( student[2],student[3] );
//     console.log(`${student[0]} - ${higestScore}`);
//     // Ivan - 6
//     // Asen - 5
// }
// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     greet(student);
// }

let student1 = {
    "firstName" :   "Ivan",
    "surName"   :   "Ivanov",
    "math"      :      5,
    "physics"   :      6,
    "greet"     :   function(student) {
                        console.log(`Hi, I'm ${this.firstName}`);
                    },
    "address": {
        "country": "Bulgaria",
        "zipCode": 1504
    }
};
let student2 = {
    "firstName" :   "Ivan",
    "surName"   :   "Ivanov",
    "math"      :      5,
    "physics"   :      6,
    "greet"     :   function(student) {
                        console.log(`Hi, I'm ${this.firstName}`);
                    },
    "address": {
        "country": "Bulgaria",
        "zipCode": 1504
    }
};

student1.greet();

// console.log( student1["firstName"] );
// console.log( student1.firstName);

// let propName = "math";
// console.log( student1["propName"]);
// console.log( student1.propName);

// console.log( student1[math]); // error

// let arr = [1,2,3,];
// let arrObj = {
//     "0" : 1,
//     "1" : 2,
//     "2" : 3,
//     "length" : 3
// };

// console.log( arr );
// console.log( arrObj );

// console.log( arr[2] );
// console.log( arrObj[2] );
// console.log( arrObj["length"]);


// // console.log( student1["firstName"]);
// student1["greet"]();
// console.log( student1 );




// let obj1 = new Object();
// console.log( obj1);

// let obj2 = {};
// console.log( obj2 );


// let student2 = {
//     "firstName": "asen",
// };

// student2.firstName = "Asen";

// add new property:
// student2.surName = "Asenov";

// let newPropName = "age";
// let newPropValue = 34;

// student2[newPropName] = newPropValue;

// // log the object:
// console.log( student2 );

// console.log( this );