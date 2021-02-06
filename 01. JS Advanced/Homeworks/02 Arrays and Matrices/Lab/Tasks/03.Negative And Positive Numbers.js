function solve(input) {
    let result = [];

    for (let number of input) {
        if (number < 0) {
            result.unshift(Number(number));
        } else {
            result.push(Number(number));
        }
    }

    return result.join('\n')
}

console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));