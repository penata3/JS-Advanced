function aggregation(input) {
    let sumOfElements = 0;
    let sumOfInversedElements = 0;
    let concatenation = '';

    for (let index = 0; index < input.length; index++) {
        sumOfElements += input[index];
        sumOfInversedElements += 1 / input[index];
        concatenation += input[index].toString();
    }

    console.log(sumOfElements);
    console.log(sumOfInversedElements);
    console.log(concatenation);
}

aggregation([1, 2, 3]);
aggregation([2, 4, 8, 16]);