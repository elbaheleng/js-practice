class landing{
    //properties
    database = {
        "milan" : {username: "Milan", password: "milan123"},
        "manu" : {username: "Manu", password: "manu123"},
        "mini" : {username: "Mini", password: "mini123"},
        "mikki" : {username: "Mikki", password: "mikki123"}
    }
    //methods
    saveData(){
        if(this.database)
            localStorage.setItem("database", JSON.stringify(this.database))
    }
    getData(){
        this.database = JSON.parse(localStorage.getItem("database")) 
        console.log(this.database);
    }
    register(){
        
        console.log(user.value);
        console.log(pswd.value);
        this.getData() // to get all updated entries in local storage
        if (user.value == "" || pswd.value == ""){
            alert("Pls fill the form completely")
        }
        else {
            if (user.value in this.database){
                alert("User already exists. Pls Login")
            }
            else {
                this.database [user.value] = {username : user.value, password : pswd.value}
                console.log(this.database);
                this.saveData() // to update local storage
                alert('Registeration Successfull')
                window.location = "login.html"
            }
        }  
    }

    login(){
        this.getData()
        console.log(logUser.value);
        console.log(logPswd.value);
        if (logUser.value == "" || logPswd.value == "" ){
            alert("Pls fill the form completely")
        }
        else{
            if (logUser.value in this.database){
                   if (this.database[logUser.value].password == logPswd.value){
                    localStorage.setItem("user",logUser.value)
                    alert("Login Successfull")
                    window.location = "home.html"
                   }
                   else{
                    alert("Invalid Username or Password")
                   }
            }
            else {
                alert("User doesnot exist. Pls Register")
                window.location = "register.html"
            }
        }  
    }
    nameChange(){
        userName.innerHTML = localStorage.getItem("user")
    }
    logout(){
        localStorage.removeItem("user")
        window.location = "login.html"
    }
}

const obj = new landing()
obj.saveData()
obj.getData()
obj.nameChange()