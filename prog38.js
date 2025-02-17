fruits = ['apple', 'orange', 'kiwi', 'pineapple']

for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for ( x in fruits){
    console.log(x);
    console.log(fruits[x]);
    
}


for ( x of fruits){
    console.log(x);
    
}

