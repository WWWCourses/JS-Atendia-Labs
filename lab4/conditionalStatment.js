// expression demo:
// console.log( x = 2 );

// statement demo;
// console.log( let x ); // error => statement can not be evaluated

// if demo:
// let userAge = 11;

// if ( userAge>18 ){
//     console.log(`adult`);
// }
// console.log(`END 1`);

// bad practice = > always use {}:
// if (userAge>18)
//     console.log(`adult`);
//     console.log(`END 2`);



// if - else demo
// let userAge = 11;
// if ( userAge>18 ){
//     console.log(`adult`);
// }else{
//     console.log(`child`);
// }

// TASK:
// TODO: send as HW
// userAge>=18     : adult
// 16>=userAge<18   : not adult
// >= 12 userAge<16 : teen
// <12              : child

// userAge = 17;
// if (userAge >= 18) {
//     console.log(`adult`);
// }else if(userAge >= 16 && userAge < 18){
//     console.log(`not adult`);
// }else{
//     console.log(`child`);
// }


// ternary operator:
let x = 6;
if( x%2 ){
    console.log(`Odd`);
}else{
    console.log(`Even`);
}

// Условие ? Израз1 : Израз2
x%2 ? console.log(`Odd`) : console.log(`Even`);

// userAge default value 100
var userAge;

// if( typeof(userAge) === "undefined"){
//     userAge = 100;
// }

// if( !userAge ){
//     userAge = 100;
// }

// var ua;
// if(userAge){
//     ua = userAge;
// }else{
//     ua = 100;
// }
// Условие ? Израз1 : Израз2
// ua = userAge ? userAge : 100;

// console.log(`ua: ${ua}`);


// var t = 3;
// if( t === true ){
//     console.log(`True`);
// }else{
//     console.log(`False`);
// }

