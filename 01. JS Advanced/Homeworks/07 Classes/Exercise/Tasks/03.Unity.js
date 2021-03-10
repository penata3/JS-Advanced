class Rat {

    rats = [];
    constructor(name) {
        this.name = name;
    }

    getRats() {
        return this.rats;
    }

    toString() {
        let result = `${this.name}\n`;

        for (const rat of this.rats) {
            result += `##${rat.name}\n`
        }
        return result;
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.rats.push(otherRat);
        }
    }


}


let firstRat = new Rat("Peter");
firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));

//console.log(firstRat.getRats()); // []
console.log(firstRat.toString())