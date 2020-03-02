String.prototype.toCamelCase = function () {
    // TODO: make it work

    // console.log(this);
    return this.toString()[0].toUpperCase() + this.toString().slice(1).toLowerCase();
}

console.log(`aBc`.toCamelCase() );