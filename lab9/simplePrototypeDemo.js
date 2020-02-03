let Foo = function (id){
    // console.log(`foo`);
    this.id = id;
};
Foo.id = 1;

Foo.prototype.count = function () {
    console.log(this.id);
};

let fooObj =  new Foo(5);
fooObj.count();