//functional hoisting
// w a f which display javascript on every call
disp()
function disp(){
    console.log(`Javascript`);
}
console.log(`Cube of 3 is ${cube(3)}`);
const cube = (a) => a ** 3
