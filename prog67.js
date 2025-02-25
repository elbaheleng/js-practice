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

class Student {
    rollNo
    sName
    sClass
    constructor(sroll, sname, sclass) {
        this.rollNo = sroll
        this.sName = sname
        this.sClass = sclass
    }
    display(){
        console.log(`Name of Student: ${this.sName}`);
        
    }
}

const stu1 = new Student(1, 'Elba', 'MEARN')
stu1.display()