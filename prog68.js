
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