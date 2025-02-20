//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log(`display all product name------------`);
products.forEach(prod => {
    console.log(prod[1]);
    
})


//2. display product name whose price < Rs.50
console.log(`display product name whose price < Rs.50------------`);
products.filter((prod) => prod[2] < 50).forEach(pro => {
    console.log(pro[1]); 
})

//3. print price of oreo
console.log(`print price of oreo-----`);
oreo = products.find((prod) => prod[1] == 'oreo')
console.log(oreo[2]);


//4. print max costly product name
console.log(`max cost product name-----`);
p = products.reduce((high, x) => high[2] > x[2] ? high : x )
console.log(p[1]);


//5. display out of stock product
console.log(`out of stock product-----`);
products.filter((prod) => prod[3] == 0).forEach(nam => console.log(nam[1]))


//6. sort products based on stock in decsending order
console.log(`sort products based on stock in decsending order-----`);
products.sort((n1,n2) => n2[3] - n1[3]).forEach(nam => console.log(nam[1]))


//7. print product having maximum available stock
console.log(`product having maximum available stock-----`);
p = products.reduce((high, x) => high[3] > x[3] ? high : x )
console.log(p[1]);


//8. is there any product that can be purchased by Rs. 10
console.log(`is there any product that can be purchased by Rs. 10-----`);
p = products.some((prod) => prod[2] <= 10)
console.log(p ? 'Yes' : 'No');



//9. Is there any product in the range of Rs.10 to Rs.30
console.log(`Is there any product in the range of Rs.10 to Rs.30-----`);
p = products.some((prod) => prod[2] >= 10 && prod[2] <= 30 )
console.log(p ? 'Yes' : 'No');

//10. print all products in the range of Rs.10 to Rs.30
console.log(`products in the range of Rs.10 to Rs.30-----`);
products.filter((prod) => prod[2] >= 10 && prod[2] <= 30).forEach(nam => console.log(nam[1]))

