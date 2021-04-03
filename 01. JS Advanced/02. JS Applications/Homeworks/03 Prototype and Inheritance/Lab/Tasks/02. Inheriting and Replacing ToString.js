function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name,
                this.email = email;
        }

    }
    Person.prototype.toString() = function() {
        return `Person (name: ${this.name}, email: ${this.email})`
    };

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

    }
    Teacher.prototype.toString() = function() {
        return prototype.toString() + `, subject:${this.subject}`;
    }


    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }
    Student.prototype.toString() = function() {
        return prototype.toString() + `, course: ${this.course}`;
    }
    return {
        Person,
        Teacher,
        Student
    }
}