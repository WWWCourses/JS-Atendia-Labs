// for (variable in object){
//     statements
// }
//


let skillSet = {
    "HTML": 5,
    "CSS": 7
};

function getMaxSkill(skillSet) {
    let max = 0;
    let maxKey;

    for( const key in skillSet ){
        let val = skillSet[key];

        if( val > max ){
            max = val;
            maxKey = key;
        }
    }

    return maxKey;
}

console.log( getMaxSkill(skillSet) );


