let obj1 = {
    "id": 1,
    "logID": function () {
        console.log(`id = ${this.id}`);
    },
    "increment": function () {
        this.id += 1
    }
};

console.log( obj1.id );
obj1.increment();
obj1.logID();

