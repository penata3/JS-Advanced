function juiceFactory(input) {

    let result = input.reduce((acc, row) => {
        let [name, quantity] = row.split('=>').map(x => x.trim());
        if (acc.currentJuciceNumbers[name]) {
            acc.currentJuciceNumbers[name] += Number(quantity);
        } else {
            acc.currentJuciceNumbers[name] = Number(quantity);
        }


        let numberOfBottles = Math.floor(acc.currentJuciceNumbers[name] / 1000);

        if (numberOfBottles > 0) {
            acc.producedJuice[name] = numberOfBottles;
        }

        return acc;

    }, { currentJuciceNumbers: {}, producedJuice: {} }).producedJuice;

    for (let [key, value] of Object.entries(result)) {
        console.log(`${key} => ${value}`);
    }
}

juiceFactory(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);


console.log('asd');

juiceFactory(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);