class Bank{
    constructor(bankid,name,location){
        this.bankid=bankid;
        this.name=name;
        this.location=location;
    }
    getname(){
        return this.name
    }
    getlocation(){
        return this.location
    }

}
let b1= new Bank("001","Bank of ceylon","jaffna")
console.log(b1);
