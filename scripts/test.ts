class Person{
    speed:number;
    private distance:number;
    constructor (){
        var test = new Student();
        this.speed = 800;
        this.distance = 1000;
        console.log("aa");
        this.walk();
    }
    walk(){
        console.log("bb");
    }
    private sayHello(){
        if(this.distance < 1001){
            console.log("cc");
        }
    }
}

class Student extends Person{
    constructor (){
        super();
    }
    walk(){
        console.log("bbb");
    }
}