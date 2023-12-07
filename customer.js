class Customer{
    constructor(customerid,name,phonenumber,accountnumber,balance){
        this.Customerid=Customerid;
        this.name=name;
        this.phonenumber=phonenumber;
        this.accountnumber=accountnumber;
        this.balance=balance;
    
    }
    desporstymoney(amount){
        this.balance=this.balance + amount
    }
    withdrawmoney(){
        if(this.balance>= amount){
        this.balance=this.balance - amount
        }
        else{
            console.log("you don't have enought balance ")
        }
    }
}