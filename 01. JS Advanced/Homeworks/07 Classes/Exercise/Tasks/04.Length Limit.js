class Stringer {
    
    constructor(str, length) {
        this.innerString = str;
        this.innerLength = length;
    }

    decrease(number) {
        if (this.innerLength - number < 0) {
            this.innerLength = 0
        } else {
            this.innerLength -= number;
        }
    }

    increase(number) {
        this.innerLength += number;
    }

    toString() {
        let result = '';
        if (this.innerLength === 0) {
            result = '...';
        }
        if (this.innerString.length > this.innerLength) {
            result = `${this.innerString.slice(0, this.innerLength)}...`;
        } else {
            result = this.innerString;
        }

        return result;

    }
}




let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString());