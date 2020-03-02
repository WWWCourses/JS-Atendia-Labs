function toCamelCase(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

let dev1 = {
    "firstName": "PeSHo",
    "surName": "petrov",
    "skillSet": {
        "HTML": 5,
        "CSS": 3
    },
    "sayName": function () {
        console.log(`${toCamelCase(this.firstName)} ${toCamelCase(this.surName)}`);
    },
    "getMaxSkill": function () {
        let max = 0;
        let maxKey;

        for( const key in this.skillSet ){
            let val = this.skillSet[key];

            if( val > max ){
                max = val;
                maxKey = key;
            }
        }

        console.log( maxKey );
    }
};

let dev2 = {
    "firstName": "Maria",
    "surName": "Popova",
    "skillSet": {
        "HTML": 2,
        "CSS": 1,
        "Python": 4
    },
    "getMaxSkill": function () {
        let max = 0;
        let maxKey;

        for( const key in this.skillSet ){
            let val = this.skillSet[key];

            if( val > max ){
                max = val;
                maxKey = key;
            }
        }

        console.log( maxKey );
    }
}


dev1.sayName(); // Pesho Petrov
dev1.getMaxSkill(); // "HTML"
dev2.getMaxSkill(); // "Python"





// TASK:
// findBestDev("HTML"); // Pesho