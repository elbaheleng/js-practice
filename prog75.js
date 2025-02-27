class A{
    methoda(){
        console.log(`first method`); 
    }
    methoda(){
        console.log(`second method`); 
    }
    
}

class B extends A{
    methoda(){
        console.log(`last method`); 
    }
}
const obj = new A()
obj.methoda()
const obj2 = new B()
obj2.methoda()