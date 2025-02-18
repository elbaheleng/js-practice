//reduce
// wap to find the highest expense
// wap to find the lowest expense
// wap to find the total expense
expense = [12000, 5000, 60000, 1200, 50]
lowest = expense.reduce((n1, n2) => n1 > n2 ? n2 : n1)
highest = expense.reduce((n1, n2) => n1 > n2 ? n1 : n2)
sum = expense.reduce((n1, n2) => n1 + n2)
console.log(`Lowest = ${lowest}  Highest = ${highest}  Sum = ${sum}`);
