class Customer {
    static bonusPercentage = 20;


    constructor(public salary: number) {}

    calculateBonus() {
        return this.salary * Customer.bonusPercentage / 100;
    }

}

let customer = new Customer(10000);
let bonus = customer.calculateBonus();
console.log(bonus);