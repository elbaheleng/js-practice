class A{
    methoda(){
        console.log(`Inside method a`);
        
    }
    methoda(num){
        console.log(`Inside second method`, num);
        
    }
}

const obj = new A()
obj.methoda()
obj.methoda(5)