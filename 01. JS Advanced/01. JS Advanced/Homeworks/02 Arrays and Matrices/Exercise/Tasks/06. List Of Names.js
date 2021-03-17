function sortingNames(input) {
    input.sort();
    const result = [];

    for (i = 0; i < input.length; i++) {
        result.push(`${i+1}. ${input[i]}`);
    }

    return result.join('\n');
}

console.log(sortingNames(["John", "Bob", "Christina", "Ema"]));