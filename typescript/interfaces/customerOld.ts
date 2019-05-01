interface CustomerOld {
    id: number;
    name: string;
    bonus?: number;
}

function addCustomer(customObj:CustomerOld) {
    console.log(customObj.name)
}

let customerOld = {id: 101, name: "Maycon Ribeiro"};
addCustomer(customerOld);