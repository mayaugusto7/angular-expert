class Customer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    logCustomer() {
        console.log('customerOld name is ' + this.name)
    }
}

let customer = new Customer("Maycon Ribeiro");
customer.logCustomer();