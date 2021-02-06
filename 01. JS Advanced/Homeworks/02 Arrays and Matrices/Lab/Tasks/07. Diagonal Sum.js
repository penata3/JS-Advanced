function diagonalSum(input) {

    let primeDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < input.length; i++) {
        primeDiagonal += input[i][i];
        secondaryDiagonal += input[i][input.length - i - 1];
    }

    console.log(primeDiagonal, secondaryDiagonal);

}

diagonalSum([
    [20, 40],
    [10, 60]
]);
diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);