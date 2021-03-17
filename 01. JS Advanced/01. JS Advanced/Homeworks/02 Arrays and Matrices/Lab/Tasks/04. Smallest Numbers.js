function smallestNumbers(input) {
    return input.sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');

}

console.log(smallestNumbers([30, 15, 50, 5]));
console.log(smallestNumbers([3, 0, 10, 4, 7, 3]));