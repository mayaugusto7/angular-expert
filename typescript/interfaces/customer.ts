interface Customer {
    (name: string);
    name: string;
    deleteCustomer(id: number): void;
}

let c: Customer;
c("Maycon Ribeiro");
c.name = "Maycon Ribeiro";
c.deleteCustomer(101);