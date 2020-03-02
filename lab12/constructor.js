

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.greet = function () {
        console.log('hi');
    }
}

Rectangle.prototype.calcArea = function () {
    return this.width * this.height
}

let rectangle1 = new Rectangle(20, 10);
let rectangle2 = new Rectangle(40, 20);

// console.log( rectangle1.calcArea() );
// console.log( rectangle2.calcArea() );



console.dir(Rectangle);
console.dir(rectangle1);
console.dir(rectangle2);