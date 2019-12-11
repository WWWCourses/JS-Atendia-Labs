// Modulus operation
console.log(`3%5: ${3%5}`);
console.log(`5%5: ${5%5}`);
console.log(`6%5: ${6%5}`);
console.log(`7%5: ${7%5}`);
console.log(`12%5: ${12%5}`);

// Power
console.log(`2**3 = ${2**3}`);
// for older browsers
console.log(`2**3 = ${Math.pow(2,3)}`);

// Increment - long version
console.clear();
var counter = 1;
counter = counter + 1;
console.log(`counter: ${counter}`);

// Increment with ++
console.clear();
counter = 1;
console.log(`counter: ${counter++}`);
console.log(`counter: ${counter}`);

console.clear();
var j, i = 1;
// j = i++; // i++ = i
// console.log(`j = ${j}`);
// console.log(`i = ${i}`);
console.log( i++ + i++ ); // 3 | 4 |
console.log(`i = ${i}`); // 4?


console.clear();
// prefix ++
var j, i=1;
j = ++i; // value: ++i = i+1, effect: i = i+1
j = i++; // value: i++ = i, effect: i = i+1
console.log(`j = ${j}`); // 2

console.clear();
var i = j = 1;
console.log( ++j + ++j); // 5
console.log(`j = ${j}`); // 3


console.clear();
// console.log( 3++ ); // error !


console.clear();
var i = j = 1;
console.log( j++ + i++ ); // 2
console.log(`i = ${i}, j = ${j} `); // 2, 2


// Math object examples
console.clear();
console.log(`Math.PI = ${Math.PI}`);


var x = 3.14123445;
console.log( Math.round(x) );

var x = 3.64123445;
console.log( Math.round(x) );

var x = 3.64123445;

// floor and ceil: 3 < x < 4
console.log( Math.floor(x) ); // 3
console.log( Math.ceil(x) );  // 4


// Assignment operator
console.clear()
var a,b;

console.log( a + 2 );
console.log( a = 1 ); // 1, a have the value 1
var c =  b = a++ * a--;
console.log( c ); // 2

var a = 1;
console.log(`a = ${a}`); // 1
a = 3;
console.log(`a = ${a}`); // 3

// c = 3 = 5; // error!
// console.log(`c = ${c}`);

var a = 1, b = 1;
// b used as LHS:
b = 3; // write in b
// b used as RHS
a = b; // read from b

// съкратен запис:
console.clear();
var counter = 1;
console.log( counter = counter+1 );
console.log( counter += 1 );


// best practice
console.clear();
var i = 1, j = 1;
console.log( i++ + 1 ); // 2

var i = 1, j = 1;
console.log( ++i + 1 ); // 3

var i = 1, j = 1;
console.log( i+=1 + 1 ); // 3



// console.clear()
// for (let a = 0; a < 4; a+=1) {
//     console.log(a);
// }

console.clear();
var userBirthYear = 2000;
console.log( userBirthYear =  userBirthYear % 4 );

console.log( userBirthYear %= 4);

//  type coercion demo:
console.clear();
console.log( "3" + 2 ); //
console.log( "a" + 2 );

console.log("3" - 1);




























// // Assignment operator examples
// var i = 1;
// console.log( i++ + 2 );   // 3, i = 2
// console.log( i=i+1+2 );   // 5
// console.log(`i = ${i}`);  // i = 5

// var i = 1;
// console.log( i++ + 2 );   // 3, i = 2
// console.log( (i=i+1)+2 ); // 5
// console.log(`i = ${i}`);  // i = 3












