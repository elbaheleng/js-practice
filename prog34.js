//nested function
function A (){
    console.log(`Inside A`);

    function B() {
        console.log(`Inside B`);
    }   
    B()
}
A()