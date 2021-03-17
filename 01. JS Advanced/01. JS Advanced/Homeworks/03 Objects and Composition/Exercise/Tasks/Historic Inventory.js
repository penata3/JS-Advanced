function solve(input) {

    let parsedData = input.reduce((acc, heroSring) => {
        let [name, level, items] = heroSring.split(' / ');
        acc.push({ name, level: Number(level), items: items ? items.split(',').map(x => x.trim()) : [] });
        return acc;
    }, [])

    return JSON.stringify(parsedData);

}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]))