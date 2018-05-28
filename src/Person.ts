export class Person{
    name:string;
    age:number;
    address:string;

    constructor(name:string,age:number,address:string){
        this.name=name;
        this.age=age;
        this.address=address;
    }
    
    getName(){
        return this.name;
    }
    
    getAge(){
        return this.age;
    }
}

