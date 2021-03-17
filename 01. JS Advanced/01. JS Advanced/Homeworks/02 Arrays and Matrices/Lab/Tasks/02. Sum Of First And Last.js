function solve(input) {
    const firsNumer = Number(input.shift());
    const lastNumber = Number(input.pop());

    return firsNumer + lastNumber;
}


console.log(solve(['5', '10']));