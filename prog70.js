class A{
    methoda(){
        console.log(`Inside method a`);
        
    }
}
class B extends A{
    methodb(){
        console.log(`Inside method b`);
        
    }
}

const obj = new B()
obj.methodb()
obj.methoda()