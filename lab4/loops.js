// for (init; condition; increment) {
//     block
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
// for( let c = 1; c<9; c+=1){
//     console.log(`c = ${c}`);
// }

// 1. c = 1;
// 2. 1<9
// 3. log 1
// 4. c = 2
// 5. 2 < 9
// 6. log 2
// ....
//    c = 8
//    8<9
//    log 8
//    c = 9
//    9<9
// END of loop


// sum of numbers:
// [1..10]

// 1,2,3,4,5
// var sum = 0
// sum = sum + number;

// var sum = 0;
// for(let number = 1; number<=5; number+=1){
//     console.log(number);
//     sum = sum + number;
// }
// console.log(`sum = ${sum}`);

// let c = 1;
// // warning - endless loop
// for( ; true ; ){
//     console.log(`jelllo`);
// }


// for(let i = 1; i<=100; i++){
//     if(!(i%2) ){
//         console.log(i);
//     }
// }

let userNum = 5;
while ( userNum%2 ) {
    console.log(`Please enter EVEN`);
    userNum = 6;
}