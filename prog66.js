accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log(`-------total number of accounts--------`);
console.log(accounts.length);

//2. print account number whose ac_type is savings
console.log(`---------account number whose ac_type is savings-------------`);
accounts.forEach(acc => acc.ac_type == 'savings' && console.log(acc.acno))

//3.print the balance of accnount number 1000
console.log(`---------balance of accnount number 1000-------------`);
item = accounts.find(acc => acc.acno == '1000')
console.log(item.balance);

//4. print all gpay transactions
console.log(`---------print all gpay transactions-------------`);
for ( let i = 0; i< accounts.length; i++){
    for ( let j  = 0; j< accounts[i].transaction.length; j++){
        if (accounts[i].transaction[j].mode == 'gpay')
            console.log(accounts[i].transaction[j]);
    }
}

//accounts.map(acc => acc.transaction).flat().filter(item => item.mode == 'gpay').forEach(item => console.log(item))

//5. print all transaction whose amount > 5000
console.log(`---------print all transaction whose amount > 5000------------`);
for ( let i = 0; i< accounts.length; i++){
    for ( let j  = 0; j< accounts[i].transaction.length; j++){
        if (accounts[i].transaction[j].amount > 5000)
            console.log(accounts[i].transaction[j]);
    }
}

//6. print credit transaction of account 1002

console.log(`---------print credit transaction of account 1002------------`);
for ( let i = 0; i< accounts.length; i++){
    for ( let j  = 0; j< accounts[i].transaction.length; j++){
        if (accounts[i].transaction[j].to == '1002')
            console.log(accounts[i].transaction[j]);
    }
}
// accounts.map(acc => acc.transaction).flat().filter(item => item.to == '1002').forEach(item => console.log(item))
//7. print debit transaction of account 1002
console.log(`---------print debit transaction of account 1002------------`);
accounts.find(acc => acc.acno == '1002').transaction.forEach(item => console.log(item))

//8. print transaction history of 1002
console.log(`---------print transaction history of 1002------------`);
credit = accounts.map(acc => acc.transaction).flat().filter(item => item.to == '1002')
debit = accounts.find(acc => acc.acno == '1002').transaction
history = {
    credit : credit,
    debit : debit
}
console.log(history);

//print as array
//spread opeartor (---) - to join 2 arrays
console.log(`---------print transaction history of 1002 AS AN ARRAY------------`);
transHis = [...credit, ...debit]
console.log(transHis);

//9. print highest balance account details
console.log(`---------print highest balance account details------------`);
console.log(accounts.reduce((acc1,acc2) => acc1.balance > acc2.balance ? acc1 : acc2));

