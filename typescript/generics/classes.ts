class GenericClass<T> {
    add: (a: T, b: T) => T;
}

let myGenericClass = new GenericClass<number>();
myGenericClass.add = function (a, b) { return a + b };

console.log(myGenericClass);