interface GenericFunc<T> {
    (arg: T): T;
}

function func<T>(arg: T): T {
    return arg;
}

let myFunc: GenericFunc<number> = func;
console.log(myFunc);