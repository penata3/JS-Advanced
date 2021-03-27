class Company {

    constructor() {
        this.departments = [];
        this.realDepartments = {};
    }

    addEmployee(username, salary, position, department) {

        if (username === '' || salary === '' || position === '' || department === '') {
            return 'Invalid input!';
        }
        if (Number(salary) < 0) {
            return 'Invalud input';
        }

        if (!this.realDepartments[department]) {
            this.realDepartments[department] = [{
                username,
                salary,
                position,
            }]
        } else {
            this.realDepartments[department].push({
                username,
                salary,
                position,
            })
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }


    getDepartmentWithHighestAvgSelary() {
        let highestAvgDepartment = Object.keys(this.realDepartments)
            .sort((a, b) => {
                let aAvgDepartment = this.realDepartments[a].reduce((acc, e) => acc + e.salary) / this.realDepartments[a].length;
                let bAvgDepartment = this.realDepartments[b].reduce((acc, e) => acc + e.salary) / this.realDepartments[b].length;

                return bAvgDepartment - aAvgDepartment;
            })[0];


        let highestAvgSelaryForDep =
            this.realDepartments[highestAvgDepartment].reduce((acc, e) => acc + e.salary, 0) / this.realDepartments[highestAvgDepartment].length;

        return {
            highestAvgDepartment,
            highestAvgSelaryForDep,
        };
    }

    bestDepartment() {
        let dep = this.getDepartmentWithHighestAvgSelary(this.realDepartments);

        let result = `Best Department is: ${dep.highestAvgDepartment}\n`;
        result += `Average salary: ${dep.highestAvgSelaryForDep}\n`;

        this.realDepartments[dep.highestAvgDepartment]
            .sort((a, b) => {
                return b.salary - a.salary || a.username.localeCompare(b.username);
            }).forEach(e => {
                result += `${e.username} ${e.salary} ${e.position}\n`;
            });

        return result;
    }

}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());