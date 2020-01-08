// why use arrays:
let red = "#F00";
let green = "#0F0";
let blue = "#00F";

let colors = ["#F00", "#0F0", "#00F"];
// console.log(typeof(colors));

// console.log( colors[5] );
// colors[5] = 6;
// console.log( colors );

// let arr = [1, 2, 3, , , 6];
// console.log( arr );
// console.log( arr[4] );

// array as object:
// let arr = [2,4,6];
// arr[5] = 5;
// console.log( arr );


// console.log( arr[-1] );
// arr[-1] = -1;
// arr["a"] = "a";
// console.log( arr );

// let i = 2;
// console.log( arr[i]);

// let arr = [2,4,6];
// console.log( arr.length );

// arr[arr.length] = 8;
// console.log( arr ); // [2,4,6,8]
// // change last element:
// arr[arr.length - 1] = 10;
// console.log( arr ); // [2,4,6,10]

// add element in the beginning of array:
// arr.unshift( `${1-1}` );
// console.log( arr ); // [0,2,4,6,10]

// add element to array:
// arr[arr.length] = "a";
// arr[arr.length] = "b";
// arr.push( "a", "b" );
// console.log( arr );

// find element by index:
// TODO: add to slides
// let i = arr.indexOf(4);
// console.log(`i = ${i}`);
// // remove element by index
// arr.splice(i, 1);
// console.log( arr );

// length property:
// let arr = [2, 4, 6];
// remove all elements:
// arr.length = 6;
// console.log( arr );

// console.log( arr.lenght ); // wrong spelling
// console.log( arr.length );
// console.log( arr );

// let arr = [2, 4, 6];
// if array is not empty:
// if( arr.lenght > 0){
//     console.log(`Non Empty array`);
// }else{
//     console.log('Empty array');
// }

// check if empty:
// if( arr.length = 0 ){
//     console.log(`Empty`);
// }
// console.log( arr );
// // []

// console.log( arr );

// // remove all elements:
// arr.lenght = 0;
// console.log( arr );

// arr.iva = "iva";
// console.log( arr );







// converting string to number:
// let x = "0";
// let y = `${4-2}`;
// console.log( x + y);        // 42
// console.log( x*1 + y*1);
// console.log( +x + +y);




// console.log(blue);
// console.log(colors[2]);

// console.log(colors);

// colors[1] = 33;
// console.log(colors);

// model student data:
// Petyr | Petrov | 5
// Ivan | Ivanov | 4

// store all data in 1 arrays (not so good):
// let studentsData = [ "Petyr", "Petrov", 5, "Ivan", "Ivanov", 4];

// store each student data in array:
// let student1 = ["Petyr", "Petrov",6];
// let student2 = ["Ivan", "Ivanov", 4];
// let student3 = ["Asen", "Asenov", 3];
// // find the student with min score:

// console.log( student1[student1.length-1]);
// console.log( student2[student2.length-1]);

let students = [
    ["Petyr", "Petrov",6],
    ["Ivan", "Ivanov", 4],
    ["Asen", "Asenov", 3]
];

// let min = 100;
// for (let i = 0; i < students.length; i++) {
//     let score = students[i][students.length-1];
//     if(score<min){
//         min = score;
//         // TODO: finish next time
//     }
// }
// console.log(min);

//
let scores = [];
for (let i = 0; i < students.length; i++) {
    let score = students[i][students.length-1];
    scores.push(score);
}
console.log( scores );
console.log( Math.min(...scores) );





// console.log(`${student2[0]} - ${student2[2]}`);


// let arr = [2,4,6];
// console.log(arr[0]** 2);
// console.log(arr[1]** 2);
// console.log(arr[2]** 2);


// for(let i = 0; i<arr.length;i+=1){
//     console.log(arr[i]** 2);
// }

// 1,2,3
// 4,5,6
// 7,8,9
// let matrix  = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log( matrix.length );
// console.log( matrix[2][1] ); // [7,8,9]

// log squares of all array elements:
// loop over rows:
// for (let i = 0; i < matrix.length; i++) {
//     const row = matrix[i];
//     // console.log( row );

//     for(let i = 0; i<row.length;i+=1){
//         console.log(row[i]** 2);
//     }
// }
// HW: why 1 is not printed
// TODO: discuss










