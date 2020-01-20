let x = 7;
// block1
{
    let x = 9;
    var y = 4;
    console.log(`x = ${x}`);
}

// block2
{
    let x = 1;
    var y = 6;
    console.log(`x = ${x}`);
}

function foo(){
    let x = 100;
    var y = 90;
    console.log(`x = ${x}`);
}
