var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Person = (function () {
    function Person() {
        var test = new Student();
        this.speed = 800;
        this.distance = 1000;
        console.log("aa");
        this.walk();
    }
    Person.prototype.walk = function () {
        console.log("bb");
    };
    Person.prototype.sayHello = function () {
        if (this.distance < 1001) {
            console.log("cc");
        }
    };
    return Person;
})();

var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        _super.call(this);
    }
    Student.prototype.walk = function () {
        console.log("bbb");
    };
    return Student;
})(Person);
//@ sourceMappingURL=test.js.map
