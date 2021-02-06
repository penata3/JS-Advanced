function solve(input) {

    // let biggestNumber = 0;

    // for (let i = 0; i < input.length; i++) {
    //     for (let j = 0; j < input[i].length; j++) {
    //         if (input[i][j] > biggestNumber) {
    //             biggestNumber = input[i][j];
    //         }
    //     }
    // }
    //return biggestNumber;

    return Math.max(...input.flat(1));

}


console.log(solve([
    [20, 50, 10],
    [8, 33, 145]
]));
console.log(solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]));