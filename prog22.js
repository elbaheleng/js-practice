/// wap to display numbers whoose exponential is in the given range 8 - 36
// user can input the power to find the exponential for a particular number
 

//user input 2
//1^2 = 2, 2^2=4, 3^2=9, 4^2=16 5^2=25,  6^2=36, 7^2=49, 8^2=64, then display 3 4 5 6 (ans is between 8-36) 

power = 2
i = 1
count = 0
while ((i ** power) <= 36){
    if ((i ** power) >= 8 && (i ** power) <= 36){
        console.log(i);
        count++
    }
    i++
}
if (count == 0){
    console.log(`no numbers to display`);
    
}

