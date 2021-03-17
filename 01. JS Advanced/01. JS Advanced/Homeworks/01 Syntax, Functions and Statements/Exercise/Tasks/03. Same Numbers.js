function solve(number) {
    const numberAsString = number.toString();
    let areTheSame = true;
    let result = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        if (numberAsString[0] != numberAsString[i]) {
            areTheSame = false;
        }
        result += Number(numberAsString[i])
    }

    console.log(areTheSame);
    console.log(result);
}

solve(2222222);
solve(1234);