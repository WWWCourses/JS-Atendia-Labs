var x = 0;

function foo() {

    function bar() {
        x = 2; //
        console.log(`x in bar:${x}`);
    }
    bar();

    console.log(`x in foo: ${x}`);
}

var x = 999;

foo();
console.log(`x in main: ${x}`);

// x in bar : 2
// x in foo:
// x in main: 0
