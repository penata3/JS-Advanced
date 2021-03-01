function rotate(array, rotationsNumber) {
    for (i = 0; i < rotationsNumber; i++) {
        array.unshift(array.pop());
    }

    return array.join(' ');
}

console.log(rotate(['1',
        '2',
        '3',
        '4'
    ],
    2
));

console.log(rotate(['Banana',
        'Orange',
        'Coconut',
        'Apple'
    ],
    15
));