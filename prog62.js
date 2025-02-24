var car = {
    name: "Baleno",
    model: "Hatch back",
    manufacturer: "Maruthi",
    price: "10 lakhs"
}
// display the car name and manufacturer name
console.log(`Name : ${car.name}    Manufacturer : ${car.manufacturer}`);
console.log(`--------------`);


// check "modal" key is present in the object if present print the value
for ( let key in car){
    if (key == 'model')
        console.log(car[key]);
}

//or
// 'model' in car && console.log(car.model);
console.log(`--------------`);



//add "varient" key to the car object with value as "Manuel"
car['varient'] = ["Manuel"]
console.log(car);
console.log(`--------------`);


//insert another value to "automatic" to varient key
car.varient.push("Automatic")
console.log(car);
console.log(`--------------`);


//add "color" key to the object with value as "red", "yellow", "white"
car['color'] = ["red", "yellow", "white"]
console.log(car);
console.log(`--------------`);