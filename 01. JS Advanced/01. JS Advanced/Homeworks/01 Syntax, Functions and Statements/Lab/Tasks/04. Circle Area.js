function calculateArea(input) {
    let type = typeof(input);

    if (type != "number") {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    } else {
        let area = Math.PI * input ** 2;
        console.log(area.toFixed(2));
    }
}

calculateArea(5);
calculateArea('name')