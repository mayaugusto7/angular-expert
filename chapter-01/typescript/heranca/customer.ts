
let updateCustomerNameAllowed = true;

class Customer {

    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (updateCustomerNameAllowed == true) {
            this._name = value;
        } else {
            alert("Error: Updating Customer name not allowed!")
        }
    }
}