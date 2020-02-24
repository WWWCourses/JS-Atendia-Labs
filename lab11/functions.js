
const demos = {
    'functionDeclaration': function () {
        // define with function expression function add, which returns the sum of 2 numbers
        const add = function (x,y) {
            return x+y;
        }
        console.log( add(2,3) ); //5

        // define add2 with function definition:
        function add2(x,y) {
            return x+y;
        }
        console.log( add2(2,3) ); //5
    },
    'arrSum': function () {
        // define function arrSum(), which takes an array and returns the sum of its elements:
        let arr = [1,2,3,4];
        let arr2 = [4,5,6];

        function arrSum(array) {

        }

        let sum = arrSum(arr);

        console.log(`sum of arr = ${sum}`);// 10

        let sum2 = arrSum(arr2);
        console.log(`sum of arr2 = ${sum}`);//

    },
    'palindrom': function () {
        // define function which returns true if a word is a palindrom (like: 'madam', 'racecar'.)

        function isPalindrome(word) {
            let maxLoopIndex = Math.floor((word.length-1) / 2);

            for(let i=0; i<=maxLoopIndex; i++){
                let j = i + 1;

                // console.log( word[i], word[word.length-j]);
                if( word[i] !== word[word.length-j]){
                    return false;
                }
            }

            return true;
        }

        console.log( isPalindrome('madam') );
        console.log( isPalindrome('test') ); //
        console.log( isPalindrome('racecar') );


    }
}

demos.palindrom();
























