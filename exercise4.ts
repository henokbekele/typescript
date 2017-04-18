class Person{
    private _firstName: string="default";
    get firstName(){
        return this._firstName
    }
    set firstName(value:string){
        this._firstName=value.toUpperCase();
    }
    enumerable:boolean = true;
    configurable: boolean=true;
}

var person = new Person()
person.firstName = "Asaad"
console.log(person.firstName)
