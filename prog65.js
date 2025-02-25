products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
console.log(`------print product name only----------`);
// for (let prod of products){
//      console.log(prod['pName']);
// }
// console.log(`----------------`);
// or
products.forEach( prod => console.log(prod['pName']))


//2. print all mobile details whose display is lcd
console.log(`------print all mobile details whose display is lcd----------`);

// for ( prod of products){
//     if (prod.display == 'lcd')
//     console.log(prod);
// }
// or
// console.log(`----------------`);
products.forEach( prod => prod.display == 'lcd'&& console.log(prod))
//products.filter(prod => prod.display == 'lcd').forEach(item => console.log(item))


//3. print 5g mobile phone name
console.log(`------print 5g mobile phone name----------`);
products.forEach( prod => prod.band == '5g' && console.log(prod.pName))
//products.filter(prod => prod.band == '5g').forEach(item => console.log(item.pName))

//4. sort mobile based on price
console.log(`-------sort mobile based on price---------`);
products.sort((obj1, obj2) => obj1.price - obj2.price).forEach( prod => console.log(prod.pName));


//5. print costly mobile
console.log(`-------print costly mobile---------`);
costly = products.reduce((obj1,obj2) => obj1.price > obj2.price ? obj1 : obj2)
console.log(costly.pName);

//6. print low cost mobile
console.log(`-------print low cost mobile---------`);
low = products.reduce((obj1,obj2) => obj1.price < obj2.price ? obj1 : obj2)
console.log(low.pName);