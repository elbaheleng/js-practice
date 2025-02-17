function greet(name, callback){
    console.log(`Hai I am ${name}`);
    callback()
    console.log(`Thankyou`)
    
}

function home(){
    console.log(`I am from Mulanthuruthy`);
}

greet('Elba', home)