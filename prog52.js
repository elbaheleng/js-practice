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
employee.forEach(emp => {
    console.log(emp[1]);
    
})

//print total numbers of employee
console.log(`total numbers of employee`);
console.log(employee.length);


//print developer employee details
console.log(`developer employee details`);
dev = employee.filter((emp) => emp[2] == 'developer')
console.log(dev);
//print employee whose salary > 30000
// sal = employee.filter((emp) => emp[4] > 30000)
// console.log(sal);

// sal.forEach((nam) => {
//     console.log(nam[1]);
// });
// OR

employee.filter((emp) => emp[4] > 30000).forEach((nam) => console.log(nam[1]))


// print details of employee Laisha
console.log(`details of employee Laisha`);
laisha = employee.filter((emp) => emp[1] == 'Laisha')
console.log(laisha[0]);

//arrange the employee based on salary in descending order
console.log(`salary in descending order`);
decsal = employee.sort((a, b) => b[4] - a[4])
console.log(decsal);


// arrange the employee based on their experience in ascending order
console.log(` experience in ascending order`);
asceexp = employee.sort((a, b) => a[5] - b[5])
console.log(asceexp);

//find the total expense of the company
console.log(`total expense of the company`);
console.log(employee.map((emp) => emp[4]).reduce((sum, x) => (sum + x)));
console.log(employee.reduce((sum, x) => (sum + x[4]),0));

// find the highest salary
console.log(`highest salary`);
console.log(employee.reduce((high, x) => high > x[4] ? high : x[4], 0 ));

// find the lowest salary
console.log(`lowest salary`);
console.log(employee.reduce((low, x) => low < x[4] ? low : x[4])); // check
console.log(employee.map((emp) => emp[4]).reduce((lowest, x) => lowest < x ? lowest : x));
lowsal = employee.reduce((emp1, emp2) => emp1[4] < emp2[4] ? emp1 : emp2)
console.log(lowsal[4]);
