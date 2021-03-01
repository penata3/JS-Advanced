function print(array, step) {
    const result = [];
    for (i = 0; i < array.length; i++) {
        if (i % step == 0) {
            result.push(array[i]);
        }
    }
    return result;
}


console.log(print(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2
));