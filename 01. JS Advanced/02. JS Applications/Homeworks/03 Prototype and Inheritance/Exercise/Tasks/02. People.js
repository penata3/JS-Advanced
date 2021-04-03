function solve() {
    class Employee {
        constructor(name, age) {
            if (this.target === new Employee) {
                throw new Error('Cant instance directly');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let task = this.tasks.shift();
            console.log(this.name + task);
            this.tasks.push(task);
        }

        collectSalary() {
            return `${this.name} received ${this.getSalary()} this month.`
        }

        getSalary() {
            return this.salary;
        }


    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.');
        }

    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task');
            this.tasks.push('is taking time off work');
            this.tasks.push('is supervising junior workers');
        }
    }

    class Menager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push('is preparing a quarterly report');
        }

        getSalary() {
            return this.salary + this.dividend;
        }


    }

    return {
        Employee,
        Junior,
        Senior,
        Menager
    }
}

let result = solve();

let junior = new result.Junior();

junior.salary = 1200;

junior.collectSalary();