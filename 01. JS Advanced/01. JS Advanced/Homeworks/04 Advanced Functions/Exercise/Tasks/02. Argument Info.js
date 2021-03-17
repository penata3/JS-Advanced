function info(...args) {

    const result = {};

    args.forEach(el => {

        var type = typeof el;

        console.log(`${type}: ${el}`);
        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }

        result[type]++;
    })


    Object.entries(result)
        .sort((a, b) => {
            let [aKey, aValue] = a;
            let [bKey, bValue] = b;

            return bValue - aValue;
        })
        .forEach(el => {
            let [key, value] = el;
            console.log(`${key} = ${value}`)
        })


}




info('cat', 'dog', 42, function() { console.log('Hello world!'); })