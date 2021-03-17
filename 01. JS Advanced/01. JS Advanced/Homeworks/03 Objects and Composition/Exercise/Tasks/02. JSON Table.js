function solve(input) {
    let parsedData = input.map(x => JSON.parse(x));

    createTable = content => `<table>\n${content}</table>`;
    createRow = content => `    <tr>${content}\n</tr>`;
    createData = content => `       <td>${content}</td>`;


    let result = parsedData.reduce((acc, row) => {
        let dataForPerson = Object.values(row).reduce((accForPerson, td) => {
            return accForPerson + createData(td);
        }, '')

        return acc + createRow(dataForPerson);
    }, '')


    return createTable(result);


}


console.log(solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]));