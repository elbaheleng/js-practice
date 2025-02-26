//[1000,'Neel','Developer','Kochi',25000,3]
class Employee {
    //properties
    empId
    empName
    empDesg

    //constructors
    constructor(id, name, desg) {
        this.empId = id
        this.empName = name
        this.empDesg = desg
    }
    //method
    display() {
        console.log(`Name of the employee is ${this.empName}`);

    }
}

const emp1 = new Employee(1000, 'Neel', 'Developer')
emp1.display()

const emp2 = new Employee(1001, 'Max', 'tester')
emp2.display()
