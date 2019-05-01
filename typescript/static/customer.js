var Customer = /** @class */ (function () {
    function Customer(salary) {
        this.salary = salary;
    }
    Customer.prototype.calculateBonus = function () {
        return this.salary * Customer.bonusPercentage / 100;
    };
    Customer.bonusPercentage = 20;
    return Customer;
}());
var customer = new Customer(10000);
var bonus = customer.calculateBonus();
console.log(bonus);
