function calculateBmi(name, age, weigth, heigth) {
    let heigthInMeters = heigth / 100;
    let bmi = Math.round(weigth / Math.pow(heigthInMeters, 2));

    let status = '';

    if (bmi < 18.5) {
        status = 'underweigth';
    } else if (bmi >= 18.5 && bmi < 25) {
        status = 'normal';
    } else if (bmi >= 25 && bmi < 30) {
        status = 'overweigth';
    } else {
        status = 'obese';
    }


    const person = {
        name,
        personalInfo: {
            age: age,
            weigth: weigth,
            heigth: heigth,
        },
        BMI: bmi,
        status,
    }

    if (status === 'obese') {
        person.recomendation = 'admission required';
    }

    return person;

}


console.log(calculateBmi('Pencho', 21, 85, 185));