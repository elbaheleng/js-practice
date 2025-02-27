class B{
    methoda(...a){
        console.log(a);
        let sum = a.reduce((n1, n2) => n1 + n2)
        console.log(sum);
        
    }
}
const obj = new B()
obj.methoda(1,2,3)