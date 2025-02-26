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
        if (accNo in this.accountDetails)
            console.log(`Validated`);
        else
            console.log(`Not validated`);
    }

    //wap to authenticate a given account
    authenticate(accNo, uname, upassword){
        if(this.accountDetails[accNo].username == uname && this.accountDetails[accNo].password == upassword)
            console.log(`Authenticated`);
        else
        console.log(`Not Authenticated`);
    }
    //wap to check the balance of a given acc number

checkBalance(accNo){
console.log(`Balance of account no.${accNo} is ${this.accountDetails[accNo].balance}`);
}
    //wap to transfer money between 2 accounts
    transfer(fromAcc, toAcc, amount){
        this.accountDetails[toAcc].balance += amount
        this.accountDetails[fromAcc].balance -= amount
        console.log(`Balance of account no.${toAcc} is ${this.accountDetails[toAcc].balance}`);
        console.log(`Balance of account no.${fromAcc} is ${this.accountDetails[fromAcc].balance}`);
    }
}

const b = new Bank()
b.validate(1004)
console.log(`---------------`);
b.authenticate(1000,'userone','usertwo')
console.log(`---------------`);
b.checkBalance(1000)
console.log(`---------------`);
b.transfer(1001,1000,5000)