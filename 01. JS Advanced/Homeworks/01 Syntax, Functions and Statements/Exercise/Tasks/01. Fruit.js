function solve(fruit, weight, pricePerKilo) {
    let weigthInKilos = weight / 1000;
    let price = pricePerKilo * weigthInKilos;

    console.log(`I need $${price.toFixed(2)} to buy ${weigthInKilos.toFixed(2)} kilograms ${fruit}.`)
}


solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);