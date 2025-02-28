function check(){
    if(!age.value){
       
        info.innerHTML = "Please enter a value"
        info.style.color = "blue"
    }
    else if (age.value >= 18){
        
        info.innerHTML = "Eligible to Vote"
        info.style.color = "green"
    }
    else if (age.value < 18){
       
        info.innerHTML = "Not eligible to Vote"
        info.style.color = "red"
    }
   
    else {
       
        info.innerHTML = "Not a number"
        info.style.color = "orange"
    }

}