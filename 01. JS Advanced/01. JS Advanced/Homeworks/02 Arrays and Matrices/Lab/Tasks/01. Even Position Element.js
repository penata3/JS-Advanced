function evenPosition(input) {

    const result = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            result.push(input[i]);
        }
    }
    return result.join(' ');
}



console.log(evenPosition(['20', '30', '40', '50', '60']));
console.log(evenPosition(['5', '10']));