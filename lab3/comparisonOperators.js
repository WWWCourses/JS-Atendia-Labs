// equality
console.log( 3 == 4 ); // false
console.log( 3 == 3 ); // true

var x = 1;
console.log( x++ == 1 ); // true

console.log( "1" == 1); // true
console.log( "1" === 1); // false, better to
console.log( "a" == "a"); // true

// not equality
console.clear();
console.log( 3 != 4); // true
console.log( 3 != 3); // false
console.log( "1" != 1); // false
console.log( "1" !== 1); // true


// other types comparison:
console.clear();
console.log( undefined == undefined);
console.log( undefined === undefined);
console.log( false === false);
console.log( null === null);
console.log( NaN  == NaN);
console.log( NaN  === NaN);

// var a;
// console.log( a*2 );

// Greater, Less than
console.clear();
console.log( 3 < 4 ); // true
console.log( 3 < 3 ); // false
console.log( 3 <= 3 ); // true
console.log( 3 >= 3 ); // true

// lexicographical comparison
console.clear();
console.log( "a" < "a"); // false
console.log( "a" <= "a"); // false

// TODO: explain and put reference in slides for lex. sorting rule:
console.clear();
console.log( "1" == "12");  // false
console.log( "21" == "12"); //  false


console.clear();
console.log( "20" > "100");  // true
console.log( "10" > "100");  // false
console.log( "1010" > "1020");  // false
console.log( "21" == "12"); //  false

console.clear();
console.log( "9999999" > 'a'); // false
console.log( "9999999" > 'a'); // false
console.log( "!" > "@"); // false

var userName = 'maria';
console.log( userName > "Maria"); // true















