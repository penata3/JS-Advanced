function addAndRemove(input) {
    const result = [];
    let result = 1;

    for (let item of input) {
        item == "add" ? result.push(value++) : result.pop(value++);
    }
    return result.length === 0 ? "Empty" : result.join("\n");
}


console.log(addAndRemove(['add',
    'add',
    'add',
    'add'
]))