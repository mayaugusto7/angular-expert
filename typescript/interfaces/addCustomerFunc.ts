interface AddCustomerFunc {
    (firstName: string, lastName: string): string;
}

let addCustomer = function (firstName: string, lastName: string) {
    console.log('Full name: ' + firstName + ' ' + lastName);
    return firstName + lastName;
};

addCustomer("Maycon", "Ribeiro");