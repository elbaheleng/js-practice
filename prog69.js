class Bank {
    //property
    accountDetails = {
        1000: { acno: 1000, username: 'userone', password: 'userone', balance: 5000 },
        1001: { acno: 1001, username: 'usertwo', password: 'usertwo', balance: 10000 },
        1002: { acno: 1002, username: 'userthree', password: 'userthree', balance: 1000 },
        1003: { acno: 1003, username: 'userfour', password: 'userfour', balance: 2000 },
    }
    //wap to validate a given account number
    validate(accNo) {
        return accNo in this.accountDetails ? true : false
    }

    //wap to authenticate a given account
    authenticate(accNo, upassword){
        if(this.validate(accNo)){
            if (this.accountDetails[accNo].password == upassword){
                console.log(`Valid Account details`);
            }
            else
            console.log(`Invalid account or password`);
            
        }
        else
        console.log(`Invalid account or password`);

    }
    //wap to check the balance of a given acc number

checkBalance(accNo,upassword){
    if(this.validate(accNo)){
        if (this.accountDetails[accNo].password == upassword){
            console.log(`Balance of account no.${accNo} is ${this.accountDetails[accNo].balance}`);
        }
        else
        console.log(`Invalid account or password`);
        
    }
    else
    console.log(`Invalid account or password`);

}
    //wap to transfer money between 2 accounts
transfer(fromAcc, frompassword, toAcc, amount){
        
        if(this.validate(fromAcc)){
            if (this.accountDetails[fromAcc].password == frompassword){
                this.accountDetails[toAcc].balance += amount
        this.accountDetails[fromAcc].balance -= amount
        console.log(`Amount Rs.${amount} transferred from account no.${fromAcc} to account no.${toAcc}`);
        
        console.log(`Balance of account no.${toAcc} is ${this.accountDetails[toAcc].balance}`);
        console.log(`Balance of account no.${fromAcc} is ${this.accountDetails[fromAcc].balance}`);


            }
            else
            console.log(`Invalid account or password`);
            
        }
        else
        console.log(`Invalid account or password`);
    }
}

const b = new Bank()
console.log(b.validate(1004) ? `Account exists`: `Account doesnt exist`);

console.log(`---------------`);
b.authenticate(1000,'userone','usertwo')
console.log(`---------------`);
b.checkBalance(1000, 'userone')
console.log(`---------------`);
b.transfer(1001,'usertwo',1000,5000)