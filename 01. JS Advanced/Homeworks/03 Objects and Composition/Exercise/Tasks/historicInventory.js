function solve(input) {


    let result = input.reduce((acc, heroRow) => {
        let [name, level, items] = heroRow.split(' / ');
        acc.push({ name, level: Number(level), items: items ? items.split(', ') : [] });
        return acc;
    }, [])

    return JSON.stringify(result);

}



console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));