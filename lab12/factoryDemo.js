

// let rectangle1 = {
//     width: 20,
//     height: 10.
// }
function rectangleFactory(width, height) {
    let obj = {};

    obj.width = width;
    obj.height = height;


    return obj;
}

let rectangle1 = rectangleFactory(20, 10);
let rectangle2 = rectangleFactory(40, 20);


console.log( rectangle1 );
console.log( rectangle2 );