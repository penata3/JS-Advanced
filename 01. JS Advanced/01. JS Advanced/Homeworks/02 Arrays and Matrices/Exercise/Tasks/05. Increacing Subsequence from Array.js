function solve(array) {
    const result = [];
    let curretnBiggest = 0;

    for (e of array) {
        if (curretnBiggest <= e) {
            result.push(e);
            curretnBiggest = e;
        }
    }

    return result;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]))