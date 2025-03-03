function  display(num){
    if (input.innerHTML == "0"){
        input.innerHTML = num
    }
    else
    input.innerHTML += num
}

function clearAll(){
    input.innerHTML = "0"
}

function del(){
    input.innerHTML = input.innerHTML.slice(0,-1)
}

function equal(){
    try {
        console.log(input.innerHTML);
        
        input.innerHTML = eval(input.innerText)
    } catch (error) {
        input.innerHTML = "Error"
        setTimeout(()=>{
            input.innerHTML = "0"
        }, 2000)
    }
    
}