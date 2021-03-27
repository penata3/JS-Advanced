function Foo(name) {
    this.name = name;
}

Foo.prototype.sayName = function() { return `I'm ${this.name}` };


let firstPerson = new Foo('Gosho');

console.log(firstPerson.sayName());


let secondPerson = new Foo('Berbatov');

console.log(secondPerson.sayName())