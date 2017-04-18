class Base {
    constructor(public width:number,  public length:number){

    }
    calcSize(){
        return this.width* this.length;
    }
}
var rectangle=new Base (2,3);
console.log(rectangle.calcSize());
