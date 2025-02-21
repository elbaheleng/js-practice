//[id, name, designation, location, salary, experience]
a = [1000,'Neel','Developer','Kochi',25000,3]
employee ={
    empId : 1000,
    empName : 'Neel',
    empDesg : 'Developer',
    empLoc : 'Kochi',
    empSal : 25000,
    empExp : 3
}
console.log(a);
console.log(employee);

console.log(a[2]);
console.log(employee['empDesg']);
console.log(employee.empDesg);

console.log(`------------`);

for (key in employee)
    console.log(key);


for (key in employee){
    console.log(key);
    console.log(employee[key]);
}
    
employee['empAttendance'] = '90%'
console.log(employee);

Object.assign(employee,{'status' : true })
console.log(employee);

    



