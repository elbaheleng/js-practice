//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
console.log(`all employee name`);
for ( nam of employee)
    console.log(nam[1]);
    

//print total numbers of employee
console.log(`total numbers of employee`);
console.log(employee.length);



//print developer employee details
console.log(`developer employee details`);
for ( emp of employee){
    if (emp[2] == 'developer')
        console.log(emp);
        
}
    
//print employee whose salary > 30000
console.log(`employee whose salary > 30000`);
for ( emp of employee){
    if (emp[4] > 30000)
        console.log(emp[1]);
        
}

// print details of employee Laisha
console.log(`details of employee Laisha`);
for ( emp of employee){
    if (emp[1] == 'Laisha')
        console.log(emp);
}