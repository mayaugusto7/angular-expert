module Inventory {
    export class Product {
        constructor(public name: string, public quantity: number) {}
    }

}

// Product class is not accessible outside namespace
let p = new Inventory.Product('mobile', 101);

