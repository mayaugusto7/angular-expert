var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    return GenericClass;
}());
var myGenericClass = new GenericClass();
myGenericClass.add = function (a, b) { return a + b; };
console.log(myGenericClass);
