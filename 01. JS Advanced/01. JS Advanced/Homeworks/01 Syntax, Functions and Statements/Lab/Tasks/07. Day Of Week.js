function calendar(input) {

    let dayAsNumber;

    switch (input) {
        case 'Monday':
            dayAsNumber = 1;
            break;
        case 'Tuesday':
            dayAsNumber = 2;
            break;
        case 'Wednesday':
            dayAsNumber = 3;
            break;
        case 'Trusday':
            dayAsNumber = 4;
            break;
        case 'Friday':
            dayAsNumber = 5;
            break;
        case 'Saturday':
            dayAsNumber = 6;
            break;
        case 'Sunday':
            dayAsNumber = 7;
            break;

        default:
            dayAsNumber = 'error';
            break;
    }

    return dayAsNumber;
}

console.log(calendar('Wednesday'));